import { Link } from "react-router";
import { Facebook, Phone, MapPin, Mail } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo size="md" variant="light" className="mb-5" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Pakistan's trusted partner for digital products, business automation,
              CRM solutions, and premium travel guides. Built for serious operators
              who demand results.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.facebook.com/quickfare1/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-200"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://wa.me/923220532596"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-200"
              >
                <Phone size={16} />
              </a>
              <a
                href="mailto:info@quickfairtravels.com"
                className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-200"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", to: "/" },
                { label: "Automate & Grow", to: "/automate-grow" },
                { label: "QuickLearn", to: "/quicklearn" },
                { label: "Umrah & Tours", to: "/umrah-tours" },
                { label: "Contact Us", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-slate-400 hover:text-orange-400 text-sm transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="text-slate-600">/</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/923220532596"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-orange-400 transition-colors"
                >
                  <Phone size={14} className="text-slate-500" />
                  WhatsApp Support
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/quickfare1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-orange-400 transition-colors"
                >
                  <Facebook size={14} className="text-slate-500" />
                  Facebook Page
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@quickfairtravels.com"
                  className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-orange-400 transition-colors"
                >
                  <Mail size={14} className="text-slate-500" />
                  Send Email
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-400">
                <MapPin size={14} className="text-slate-500" />
                Pakistan
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} Quick Fare Travels &amp; Solutions. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Built for Pakistani businesses worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
