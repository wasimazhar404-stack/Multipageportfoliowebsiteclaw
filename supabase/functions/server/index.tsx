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
    origin: "*",
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

// Contact form submission endpoint
app.post("/make-server-3a5e36a4/contact", async (c) => {
  try {
    const body = await c.req.json();
    const key = `contact_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    await kv.set(key, {
      ...body,
      submittedAt: new Date().toISOString(),
      source: "website-contact-form",
    });
    return c.json({ success: true, message: "Message received" });
  } catch (err: any) {
    return c.json({ success: false, error: err.message }, 500);
  }
});

Deno.serve(app.fetch);