import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  MessageCircle, Facebook, Mail, MapPin, Send,
  ArrowUpRight, CheckCircle, Clock
} from "lucide-react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export function Contact() {
  useEffect(() => {
    document.title = "Contact Us | QuickFare";
  }, []);
  const [form, setForm] = useState<FormState>({
    name: "", email: "", phone: "", subject: "", message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        "https://csiokxaornvrjyfhkwxr.supabase.co/functions/v1/server/make-server-3a5e36a4/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      const data = await res.json();
      if (!res.ok || !data.success) {
        console.error("Submission failed:", data.error || "Unknown error");
      }
    } catch (err) {
      console.error("Network error:", err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  const contactCards = [
    {
      icon: MessageCircle,
      label: "WhatsApp Support",
      sub: "Fastest response, typically within minutes",
      href: "https://wa.me/923220532596",
      color: "#22c55e",
      bg: "#dcfce7",
      cta: "Chat on WhatsApp",
    },
    {
      icon: Facebook,
      label: "Facebook Page",
      sub: "Follow updates and send us a message",
      href: "https://www.facebook.com/quickfare1/",
      color: "#3b82f6",
      bg: "#dbeafe",
      cta: "Open Facebook",
    },
    {
      icon: Mail,
      label: "Email Us",
      sub: "We reply to every email within 24 hours",
      href: "mailto:info@quickfairtravels.com",
      color: "#f97316",
      bg: "#ffedd5",
      cta: "Send an Email",
    },
    {
      icon: MapPin,
      label: "Our Location",
      sub: "Serving clients globally from Pakistan",
      href: "https://maps.google.com/?q=Pakistan",
      color: "#ef4444",
      bg: "#fee2e2",
      cta: "View on Map",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* PAGE HERO */}
      <section className="relative pt-32 pb-20 bg-slate-900">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(#f97316 1px, transparent 1px)", backgroundSize: "30px 30px" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-orange-500 text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 bg-orange-500/10 rounded-full border border-orange-500/20">
              Get in Touch
            </span>
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              We are here to <span className="text-orange-500">help you</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-lg mx-auto">
              Whether you have questions about eBooks, travel planning, or CRM solutions — reach out anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map(({ icon: Icon, label, sub, href, color, bg, cta }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group block p-7 rounded-2xl border border-slate-100 hover:border-transparent hover:shadow-xl transition-all duration-300 bg-slate-50 text-center"
              >
                <div
                  className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: bg }}
                >
                  <Icon size={26} style={{ color }} />
                </div>
                <p className="text-slate-900 text-sm font-bold mb-1">{label}</p>
                <p className="text-slate-400 text-xs mb-5">{sub}</p>
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full transition-all group-hover:shadow-sm"
                  style={{ backgroundColor: bg, color }}
                >
                  {cta} <ArrowUpRight size={11} />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left info */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <span className="inline-block text-orange-500 text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 bg-orange-50 rounded-full border border-orange-100">
                Quick Fare Travels
              </span>
              <h2 className="text-slate-900 text-2xl md:text-3xl font-bold mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Let's talk about <span className="text-orange-500">your goals</span>
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                From planning your Hajj journey to setting up a business CRM or ordering an eBook —
                our team is ready to assist you. We respond to all inquiries within 24 hours.
              </p>

              <div className="bg-white rounded-xl p-5 border border-slate-100 mb-6">
                <div className="flex items-center gap-2.5 mb-4">
                  <Clock size={16} className="text-orange-500" />
                  <h4 className="text-slate-900 font-bold text-sm">Response Hours</h4>
                </div>
                {[
                  { day: "Monday – Friday", time: "9:00 AM – 9:00 PM PKT" },
                  { day: "Saturday", time: "10:00 AM – 6:00 PM PKT" },
                  { day: "Sunday", time: "WhatsApp Only" },
                ].map(({ day, time }) => (
                  <div key={day} className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0">
                    <span className="text-slate-500 text-xs">{day}</span>
                    <span className="text-slate-900 text-xs font-semibold">{time}</span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-900 rounded-xl p-5">
                <h4 className="text-white font-bold text-sm mb-4">How Can We Help?</h4>
                {[
                  "Hajj & Umrah Planning",
                  "eBook Purchase & Delivery",
                  "CRM Setup & Demo",
                  "Business Consultation",
                  "Travel Advisory",
                  "General Inquiry",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 py-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                    <span className="text-slate-400 text-xs">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle size={40} className="text-green-500" />
                    </div>
                    <h3 className="text-slate-900 text-2xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      Message Received!
                    </h3>
                    <p className="text-slate-500 text-sm">
                      Your message has been received. We'll get back to you within 24 hours.
                    </p>
                    <a
                      href="https://wa.me/923220532596"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg text-sm transition-all"
                    >
                      <MessageCircle size={15} />
                      WhatsApp for Faster Reply
                    </a>
                  </div>
                ) : (
                  <>
                    <h3 className="text-slate-900 text-xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      Send Us a Message
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-600 mb-1.5">Full Name *</label>
                          <input
                            type="text" name="name" required value={form.name} onChange={handleChange}
                            placeholder="Your name"
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-sm bg-slate-50 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-600 mb-1.5">Phone / WhatsApp</label>
                          <input
                            type="tel" name="phone" value={form.phone} onChange={handleChange}
                            placeholder="+92 xxx xxx xxxx"
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-sm bg-slate-50 transition-all"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">Email Address *</label>
                        <input
                          type="email" name="email" required value={form.email} onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-sm bg-slate-50 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">Subject *</label>
                        <select
                          name="subject" required value={form.subject} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-sm bg-slate-50 transition-all appearance-none"
                        >
                          <option value="">Select a topic</option>
                          <option value="Hajj & Umrah Planning">Hajj & Umrah Planning</option>
                          <option value="eBook Purchase">eBook Purchase</option>
                          <option value="CRM Demo Request">CRM Demo Request</option>
                          <option value="Business Consultation">Business Consultation</option>
                          <option value="General Inquiry">General Inquiry</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">Message *</label>
                        <textarea
                          name="message" required rows={5} value={form.message} onChange={handleChange}
                          placeholder="Describe how we can help you"
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-sm bg-slate-50 transition-all resize-none"
                        />
                      </div>
                      <button
                        type="submit" disabled={loading}
                        className="w-full flex items-center justify-center gap-2 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg text-sm shadow-md transition-all disabled:opacity-60"
                      >
                        {loading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={15} />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
