import { useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import {
  BarChart3, Plane, BookOpen, Check, ArrowRight, ArrowUpRight,
  Zap, Users, Calendar, MessageSquare, PieChart, Bell,
  Smartphone, Lock, Shield, Globe, Clock
} from "lucide-react";

function SectionTag({ label }: { label: string }) {
  return (
    <span className="inline-block text-orange-500 text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 bg-orange-50 rounded-full border border-orange-100">
      {label}
    </span>
  );
}

export function Services() {
  useEffect(() => {
    document.title = "Our Services | QuickFare Travels & Solutions";
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* PAGE HERO */}
      <section className="relative pt-32 pb-20 text-center bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <SectionTag label="Our Services" />
            <h1 className="text-slate-900 text-4xl md:text-5xl font-bold mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Everything you need, <span className="text-orange-500">in one place</span>
            </h1>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              From CRM automation to travel planning — comprehensive digital solutions built for Pakistani businesses and families.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CRM SERVICE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <SectionTag label="CRM & Automation" />
              <h2 className="text-slate-900 text-3xl md:text-4xl font-bold mb-5 leading-snug" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Advanced Business CRM <span className="text-orange-500">Built for Growth</span>
              </h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                Our CRM system is not just another contact manager. It is a complete business automation
                engine designed to streamline the manual operations that slow down travel agencies,
                schools, content creators, and digital businesses.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                Replace spreadsheets and manual follow-ups with intelligent workflows that work 24/7 —
                nurturing leads, scheduling content, tracking bookings, and delivering reports automatically.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  { icon: Users, label: "Contact & Lead Management" },
                  { icon: Zap, label: "Workflow Automation" },
                  { icon: Calendar, label: "Booking & Appointments" },
                  { icon: MessageSquare, label: "WhatsApp Integration" },
                  { icon: PieChart, label: "Real-Time Analytics" },
                  { icon: Bell, label: "Smart Reminders" },
                  { icon: Smartphone, label: "Mobile-Friendly" },
                  { icon: Lock, label: "Secure Encryption" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <div className="w-8 h-8 rounded-md bg-slate-100 flex items-center justify-center flex-shrink-0">
                      <Icon size={14} className="text-slate-600" />
                    </div>
                    <span className="text-sm text-slate-700">{label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                {["Travel Agencies", "Schools", "E-commerce", "Freelancers", "Content Creators"].map((t) => (
                  <span key={t} className="text-xs px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-full text-slate-600 font-medium">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/923220532596?text=Hi, I want a free CRM demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg text-sm shadow-sm transition-all"
                >
                  Request Free Demo <ArrowUpRight size={15} />
                </a>
                <span className="inline-flex items-center px-4 py-3 text-sm font-bold text-slate-900 bg-slate-100 rounded-lg">
                  PKR 99,999
                </span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="bg-slate-900 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="text-slate-500 text-xs ml-2">CRM Dashboard</span>
                </div>
                {[
                  { label: "New Leads", value: "142", trend: "+18%", up: true },
                  { label: "Conversions", value: "89%", trend: "+5%", up: true },
                  { label: "Active Tasks", value: "37", trend: "-3", up: false },
                  { label: "Bookings Done", value: "256", trend: "+22%", up: true },
                ].map(({ label, value, trend, up }) => (
                  <div key={label} className="flex items-center justify-between py-3 border-b border-slate-700 last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-orange-500" />
                      <span className="text-slate-400 text-sm">{label}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-white font-bold">{value}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${up ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}>
                        {trend}
                      </span>
                    </div>
                  </div>
                ))}
                <div className="mt-4 pt-4 border-t border-slate-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-500 text-xs">Monthly Progress</span>
                    <span className="text-orange-400 text-xs font-bold">73%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-1.5">
                    <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: "73%" }} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRAVEL SERVICE */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <h4 className="text-slate-900 font-bold text-sm mb-4 flex items-center gap-2">
                  <Clock size={16} className="text-orange-500" />
                  What's Included
                </h4>
                <div className="space-y-3">
                  {[
                    "Step-by-step visa & flight booking guidance",
                    "Recommended accommodation near Haramain",
                    "Transport inside Saudi Arabia",
                    "Day-by-day Umrah & Hajj itineraries",
                    "Ziyarat maps of Makkah & Madinah",
                    "Special guidance for elderly & women",
                    "Budget optimization strategies",
                    "24/7 WhatsApp consultation support",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={11} className="text-orange-600" />
                      </div>
                      <p className="text-slate-600 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2">
              <SectionTag label="Travel Planning" />
              <h2 className="text-slate-900 text-3xl md:text-4xl font-bold mb-5 leading-snug" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                DIY Hajj & Umrah <span className="text-orange-500">Without Agent Fees</span>
              </h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                Our travel planning service empowers you to plan your sacred journey completely independently.
                With our detailed eBooks, checklists, and WhatsApp support, you can save lakhs of rupees
                that traditionally go to agents — without compromising on quality.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                Every guide is peer-tested by families who have actually performed the journey. No theory —
                only practical, field-tested advice that works in real Saudi Arabia.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/library"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg text-sm shadow-sm transition-all"
                >
                  Browse Travel Guides <ArrowRight size={15} />
                </Link>
                <span className="inline-flex items-center px-4 py-3 text-sm font-bold text-slate-900 bg-white border border-slate-200 rounded-lg">
                  From PKR 4,999
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EBOOK SERVICE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionTag label="Digital Products" />
            <h2 className="text-slate-900 text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Premium Knowledge, Digitally Delivered
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Our eBook library provides high-quality Urdu content covering every dimension of Muslim life — from spiritual growth to practical finance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: BookOpen, title: "110+ Premium eBooks", desc: "Comprehensive library spanning 17 categories — Hajj, Ziyarat, Quran, Hadith, Seerah, Finance, Lifestyle, Parenting, Health, and more.", stat: "110+", statLabel: "Books", color: "#0d9488" },
              { icon: Globe, title: "Urdu Language", desc: "All content written in clear, simple Urdu for maximum accessibility across Pakistan and diaspora.", stat: "100%", statLabel: "Urdu", color: "#4f46e5" },
              { icon: Zap, title: "Instant Delivery", desc: "Receive your eBook immediately after purchase — PDF and mobile-optimized formats included.", stat: "PDF", statLabel: "Format", color: "#d97706" },
            ].map(({ icon: Icon, title, desc, stat, statLabel, color }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="group text-center bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-transparent hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-5 group-hover:scale-110 transition-transform" style={{ backgroundColor: color + "15" }}>
                  <Icon size={28} style={{ color }} />
                </div>
                <div className="text-3xl font-bold mb-1" style={{ color, fontFamily: "'Space Grotesk', sans-serif" }}>{stat}</div>
                <div className="text-xs text-slate-400 mb-4 uppercase tracking-wider font-medium">{statLabel}</div>
                <h3 className="text-slate-900 font-bold text-lg mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/library"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg text-sm shadow-md transition-all"
            >
              View Full Library <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionTag label="How It Works" />
            <h2 className="text-slate-900 text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Simple, fast & effective
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { step: "01", icon: Globe, title: "Choose Your Service", desc: "Browse our library, CRM, or travel planning services." },
              { step: "02", icon: BookOpen, title: "Select & Order", desc: "Pick your product and proceed via WhatsApp or form." },
              { step: "03", icon: Zap, title: "Instant Access", desc: "Get immediate digital delivery or schedule a call." },
              { step: "04", icon: Shield, title: "Achieve Your Goal", desc: "Use our guidance to plan, grow, and succeed." },
            ].map(({ step, icon: Icon, title, desc }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center relative"
              >
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 border-t border-dashed border-slate-200 z-0" style={{ width: "calc(100% - 2rem)" }} />
                )}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <Icon size={22} className="text-orange-500" />
                  </div>
                  <span className="text-orange-500 text-xs font-bold">{step}</span>
                  <h3 className="text-slate-900 font-bold text-base mt-1 mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Start your journey <span className="text-orange-500">today</span>
          </h2>
          <p className="text-slate-400 mb-8">
            Whether you need an eBook, CRM setup, or travel guidance — we are just one message away.
          </p>
          <a
            href="https://wa.me/923220532596"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg text-sm shadow-lg shadow-orange-500/25 transition-all"
          >
            Get in Touch Now <ArrowRight size={15} />
          </a>
        </div>
      </section>
    </div>
  );
}
