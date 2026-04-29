import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";

interface NavLink {
  label: string;
  to: string;
  highlight?: boolean;
}

const navLinks: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "Automate & Grow", to: "/automate-grow" },
  { label: "Umrah & Tours", to: "/umrah-tours" },
  { label: "QuickLearn", to: "/quicklearn", highlight: true },
  { label: "Contact", to: "/contact" },
];

export function Navbar(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const isActive = (to: string): boolean =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[4.5rem]">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <Logo size="md" variant="dark" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 rounded-full bg-white px-2 py-1.5 shadow-sm">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                aria-current={isActive(link.to) ? "page" : undefined}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                  isActive(link.to)
                    ? "bg-black text-white"
                    : link.highlight
                    ? "text-orange-500 hover:text-orange-600"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/923220532596"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-green-500 text-green-600 px-4 py-2 text-sm font-medium transition-colors duration-200 hover:bg-green-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <a
              href="https://wa.me/923220532596"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-orange-500/25"
            >
              Get in touch
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-slate-100 px-4 py-4 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              aria-current={isActive(link.to) ? "page" : undefined}
              className={`block w-fit px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                isActive(link.to)
                  ? "bg-black text-white"
                  : link.highlight
                  ? "text-orange-500"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <a
              href="https://wa.me/923220532596"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 w-full rounded-full border border-green-500 text-green-600 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-green-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <a
              href="https://wa.me/923220532596"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 w-full rounded-full bg-orange-500 text-white px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-orange-600"
            >
              Get in touch
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
