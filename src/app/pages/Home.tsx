import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  ArrowRight, ArrowUpRight, BookOpen, BarChart3, Plane,
  Star, ChevronRight, MessageCircle, Users, Zap, Shield,
  ChevronLeft,
} from "lucide-react";
import { EbookPreviewModal } from "../components/EbookCard";
import { featuredEbooks, categories } from "../data/ebooks";
import { reviews } from "../data/reviews";
import type { Ebook } from "../data/ebooks";
import { Avatar, BookCover } from "../components/BookCover";
import useEmblaCarousel from "embla-carousel-react";

/* Animated counter */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | null = null;
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      obs.disconnect();
      let start = 0;
      const step = Math.ceil(target / 60);
      timer = setInterval(() => {
        start = Math.min(start + step, target);
        setCount(start);
        if (start >= target) clearInterval(timer!);
      }, 25);
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => {
      obs.disconnect();
      if (timer) clearInterval(timer);
    };
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "text-orange-400 fill-orange-400" : "text-slate-200"}
        />
      ))}
    </div>
  );
}

/* Featured Books Carousel */
function FeaturedCarousel({ onPreview }: { onPreview: (book: Ebook) => void }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false }
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  /* Manual autoplay with 4s interval */
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  const displayBooks = featuredEbooks.slice(0, 10);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {displayBooks.map((book) => {
            const cat = categories.find((c) => c.id === book.category);
            return (
              <div
                key={book.id}
                className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_25%] pl-4 first:pl-0"
              >
                <div className="bg-white rounded-xl border border-slate-100 p-4 hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="flex justify-center mb-3">
                    <BookCover
                      title={book.title}
                      categoryColor={cat?.color ?? "#f97316"}
                      categoryBg={cat?.bg ?? "#fff7ed"}
                      size="sm"
                      id={book.id}
                    />
                  </div>
                  <h4 className="text-slate-900 font-bold text-sm leading-tight line-clamp-2 mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {book.title}
                  </h4>
                  <p className="text-orange-500 text-xs font-bold mb-3">{book.price}</p>
                  <div className="mt-auto">
                    <button
                      onClick={() => onPreview(book)}
                      className="w-full py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors"
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Prev / Next */}
      <div className="flex items-center justify-center gap-3 mt-6">
        <button
          onClick={scrollPrev}
          className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft size={16} />
        </button>

        {/* Dots */}
        <div className="flex gap-1.5">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === selectedIndex ? "bg-orange-500 w-4" : "bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={scrollNext}
          className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 transition-colors"
          aria-label="Next"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}

export function Home() {
  useEffect(() => {
    document.title = "QuickFare | Digital Solutions for Pakistani Businesses";
  }, []);
  const [previewBook, setPreviewBook] = useState<Ebook | null>(null);
  const [heroBookIndex, setHeroBookIndex] = useState(0);

  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Left column */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-orange-600 bg-orange-100/60 px-3 py-1.5 rounded-full border border-orange-200/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  NOW BOOKING — MAY 2026
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <span className="text-slate-900">The growth partner for Pakistani businesses —</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-3xl sm:text-4xl md:text-5xl italic text-orange-500 font-light leading-[1.15] tracking-tight mb-6"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                systems, travel & knowledge, handled.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-slate-500 text-base sm:text-lg max-w-xl leading-relaxed mb-10"
              >
                We build custom CRMs & automations for Pakistani businesses, wired into
                the tools you already use. Plus a premium digital library that has saved
                travellers and founders crores of rupees in mistakes.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="flex flex-wrap gap-3"
              >
                <Link
                  to="/automate-grow"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-full transition-all text-sm"
                >
                  See what we build
                  <ArrowUpRight size={15} />
                </Link>
                <Link
                  to="/quicklearn"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 text-slate-900 font-semibold rounded-full transition-all text-sm border border-slate-900"
                >
                  Browse the library
                  <ArrowRight size={15} />
                </Link>
              </motion.div>
            </div>

            {/* Right column - Book card */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-slate-900 text-sm">QuickLearn Library</h3>
                  <Link
                    to="/quicklearn"
                    className="text-xs text-orange-500 hover:text-orange-600 font-semibold inline-flex items-center gap-1"
                  >
                    110+ titles <ArrowRight size={12} />
                  </Link>
                </div>

                {(() => {
                  const heroBooks = featuredEbooks.slice(0, 8);
                  const currentBook = heroBooks[heroBookIndex];
                  const cat = categories.find((c) => c.id === currentBook?.category);
                  return (
                    <>
                      <div className="bg-slate-50 rounded-xl p-4">
                        <div className="flex gap-4 items-start">
                          <div className="flex-shrink-0">
                            {currentBook && (
                              <BookCover
                                title={currentBook.title}
                                categoryColor={cat?.color ?? "#f97316"}
                                categoryBg={cat?.bg ?? "#fff7ed"}
                                size="sm"
                                id={currentBook.id}
                              />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-slate-900 text-sm leading-tight mb-1">
                              {currentBook?.title}
                            </h4>
                            <p className="text-slate-500 text-xs mb-2 line-clamp-2">
                              {currentBook?.subtitle}
                            </p>
                            <p className="text-orange-500 font-bold text-sm mb-2">
                              {currentBook?.price}
                            </p>
                            <button
                              onClick={() => currentBook && setPreviewBook(currentBook)}
                              className="text-xs font-semibold text-slate-900 hover:text-orange-500 transition-colors inline-flex items-center gap-1"
                            >
                              View <ArrowRight size={12} />
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex gap-1.5">
                          {heroBooks.map((_, i) => (
                            <button
                              key={i}
                              onClick={() => setHeroBookIndex(i)}
                              className={`h-2 rounded-full transition-all ${
                                i === heroBookIndex ? "bg-orange-500 w-4" : "bg-slate-300 hover:bg-slate-400 w-2"
                              }`}
                              aria-label={`Go to book ${i + 1}`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-slate-400 font-medium">
                          {heroBookIndex + 1} / {heroBooks.length}
                        </span>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-12 mt-12 border-t border-slate-200/60"
          >
            {[
              { value: 12000, suffix: "+", label: "Verified Pakistani buyers", prefix: "" },
              { value: 32, suffix: "L", label: "Avg. saved by self-planners", prefix: "Rs" },
              { value: 48, suffix: "hr", label: "WhatsApp support response", prefix: "" },
              { value: 98, suffix: "%", label: "Client satisfaction rate", prefix: "" },
            ].map(({ value, suffix, label, prefix }) => (
              <div key={label}>
                <div className="text-2xl md:text-3xl font-bold text-slate-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {prefix}<Counter target={value} suffix={suffix} />
                </div>
                <p className="text-slate-400 text-xs mt-1">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3">
              What We Offer
            </span>
            <h2 className="text-slate-900 text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Three pillars of our business
            </h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">
              From business automation to spiritual travel — we cover every dimension of growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: BarChart3,
                title: "CRM & Automation",
                desc: "Advanced automation-based CRM to streamline manual operations, manage leads, and scale your business without hiring more staff.",
                price: "From PKR 99,999",
                link: "/services",
                cta: "Get a Demo",
                color: "#0f172a",
              },
              {
                icon: Plane,
                title: "Hajj & Umrah Planning",
                desc: "Complete DIY travel guides that eliminate agent fees. Save lakhs with our peer-tested, step-by-step itineraries and support.",
                price: "From PKR 4,999",
                link: "/services",
                cta: "Plan Your Journey",
                color: "#f97316",
              },
              {
                icon: BookOpen,
                title: "Digital eBook Library",
                desc: "110+ premium Urdu eBooks covering Islamic finance, lifestyle, parenting, travel, Quran, Hadith and more. Instant delivery, lifetime access.",
                price: "From PKR 600",
                link: "/library",
                cta: "Browse Library",
                color: "#0d9488",
              },
            ].map(({ icon: Icon, title, desc, price, link, cta, color }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="group bg-white rounded-2xl p-8 border border-slate-100 hover:border-transparent hover:shadow-xl transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: color + "12" }}
                >
                  <Icon size={22} style={{ color }} />
                </div>
                <h3 className="text-slate-900 text-xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{desc}</p>
                <p className="text-orange-500 text-sm font-bold mb-5">{price}</p>
                <Link
                  to={link}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 hover:gap-2"
                  style={{ color }}
                >
                  {cta} <ChevronRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3">
              Testimonials
            </span>
            <h2 className="text-slate-900 text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Trusted by Pakistani founders & families
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, 6).map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow"
              >
                <StarRating rating={review.rating} />
                <p className="text-slate-700 text-sm leading-relaxed mt-4 mb-5">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                  <Avatar initials={review.avatar} size="sm" />
                  <div>
                    <p className="text-slate-900 text-sm font-semibold">{review.name}</p>
                    <p className="text-slate-400 text-xs">{review.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED EBOOKS CAROUSEL */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3">
                Featured Collection
              </span>
              <h2 className="text-slate-900 text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Most popular eBooks
              </h2>
            </div>
            <Link
              to="/quicklearn"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
            >
              View all 110+ books <ArrowRight size={15} />
            </Link>
          </div>

          <FeaturedCarousel onPreview={setPreviewBook} />
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Shield, label: "Secure Payments", desc: "SSL encrypted checkout" },
              { icon: Users, label: "5,000+ Clients", desc: "Across Pakistan & abroad" },
              { icon: Zap, label: "Instant Delivery", desc: "Digital products in seconds" },
              { icon: MessageCircle, label: "WhatsApp Support", desc: "48hr average response" },
            ].map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center mb-3">
                  <Icon size={18} className="text-slate-400" />
                </div>
                <p className="text-slate-900 text-sm font-semibold">{label}</p>
                <p className="text-slate-400 text-xs mt-0.5">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2
            className="text-white text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Ready to scale your business or plan your journey?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Whether you need a CRM, travel guidance, or premium knowledge products —
            we are one message away.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/923220532596"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg text-sm shadow-lg shadow-orange-500/25 transition-all"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-slate-600 text-white hover:bg-slate-800 font-semibold rounded-lg text-sm transition-all"
            >
              Send an Enquiry
            </Link>
          </div>
        </div>
      </section>

      <EbookPreviewModal book={previewBook} onClose={() => setPreviewBook(null)} />
    </div>
  );
}
