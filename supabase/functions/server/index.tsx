import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: ["https://emeraldconsultancycompany.com", "https://quickfare.emeraldconsultancycompany.com"],
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-3a5e36a4/health", (c) => {
  return c.json({ status: "ok" });
});

// Basic HTML tag stripper for XSS prevention
function stripHtml(input: string): string {
  return input.replace(/<[^>]*>/g, "");
}

// Email validation regex
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Contact form submission endpoint
app.post("/make-server-3a5e36a4/contact", async (c) => {
  try {
    const body = await c.req.json();

    // Reject unknown fields
    const allowedFields = ["name", "email", "phone", "subject", "message"];
    const unknownFields = Object.keys(body).filter((key) => !allowedFields.includes(key));
    if (unknownFields.length > 0) {
      return c.json(
        { success: false, error: `Unknown fields: ${unknownFields.join(", ")}` },
        400
      );
    }

    const { name, email, phone, subject, message } = body;

    // Validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return c.json({ success: false, error: "Name is required" }, 400);
    }
    if (name.length > 100) {
      return c.json({ success: false, error: "Name must be at most 100 characters" }, 400);
    }

    if (!email || typeof email !== "string" || email.trim().length === 0) {
      return c.json({ success: false, error: "Email is required" }, 400);
    }
    if (!isValidEmail(email)) {
      return c.json({ success: false, error: "Invalid email format" }, 400);
    }

    if (phone !== undefined && phone !== null) {
      if (typeof phone !== "string") {
        return c.json({ success: false, error: "Phone must be a string" }, 400);
      }
      if (phone.length > 20) {
        return c.json({ success: false, error: "Phone must be at most 20 characters" }, 400);
      }
    }

    if (!subject || typeof subject !== "string" || subject.trim().length === 0) {
      return c.json({ success: false, error: "Subject is required" }, 400);
    }
    if (subject.length > 200) {
      return c.json({ success: false, error: "Subject must be at most 200 characters" }, 400);
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return c.json({ success: false, error: "Message is required" }, 400);
    }
    if (message.length > 5000) {
      return c.json({ success: false, error: "Message must be at most 5000 characters" }, 400);
    }

    // Strip HTML tags from all text fields
    const sanitizedName = stripHtml(name.trim());
    const sanitizedEmail = stripHtml(email.trim());
    const sanitizedPhone = phone ? stripHtml(phone.trim()) : phone;
    const sanitizedSubject = stripHtml(subject.trim());
    const sanitizedMessage = stripHtml(message.trim());

    // Rate limiting - max 5 submissions per IP per hour
    const ip = c.req.header("x-forwarded-for") || c.req.header("x-real-ip") || "unknown";
    const rateLimitKey = `rate_limit_${ip}`;
    const now = Date.now();
    const oneHour = 60 * 60 * 1000;

    let rateData = await kv.get(rateLimitKey);
    if (!rateData || typeof rateData !== "object") {
      rateData = { count: 0, windowStart: now };
    }

    if (now - rateData.windowStart > oneHour) {
      rateData = { count: 0, windowStart: now };
    }

    if (rateData.count >= 5) {
      return c.json(
        { success: false, error: "Too many requests. Please try again later." },
        429
      );
    }

    rateData.count += 1;
    await kv.set(rateLimitKey, rateData);

    const key = `contact_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    await kv.set(key, {
      name: sanitizedName,
      email: sanitizedEmail,
      phone: sanitizedPhone,
      subject: sanitizedSubject,
      message: sanitizedMessage,
      submittedAt: new Date().toISOString(),
      source: "website-contact-form",
    });
    return c.json({ success: true, message: "Message received" });
  } catch (err: any) {
    console.error("Contact form error:", err);
    return c.json({ success: false, error: "Internal server error. Please try again later." }, 500);
  }
});

Deno.serve(app.fetch);
