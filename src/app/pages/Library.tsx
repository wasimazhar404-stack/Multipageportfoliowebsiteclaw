import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Search, Filter, BookOpen, X, ArrowRight } from "lucide-react";
import { EbookCard, EbookPreviewModal } from "../components/EbookCard";
import { ebooks, categories } from "../data/ebooks";
import type { Ebook } from "../data/ebooks";

const PAGE_SIZE = 12;

export function Library() {
  useEffect(() => {
    document.title = "eBook Library | QuickFare";
  }, []);
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(searchParams.get("cat") || "all");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [previewBook, setPreviewBook] = useState<Ebook | null>(null);

  useEffect(() => {
    const cat = searchParams.get("cat");
    setActiveCategory(cat || "all");
  }, [searchParams]);

  const handleCategoryClick = (catId: string) => {
    setActiveCategory(catId);
    setVisibleCount(PAGE_SIZE);
    const next = new URLSearchParams(searchParams);
    if (catId === "all") {
      next.delete("cat");
    } else {
      next.set("cat", catId);
    }
    setSearchParams(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filtered = useMemo(() => {
    let list = ebooks;
    if (activeCategory !== "all") {
      list = list.filter((b) => b.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.subtitle.toLowerCase().includes(q) ||
          b.description.toLowerCase().includes(q) ||
          b.categoryLabel.toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeCategory, searchQuery]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;
  const currentCategory = categories.find((c) => c.id === activeCategory);

  return (
    <div className="overflow-x-hidden">
      {/* PAGE HERO */}
      <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(#f97316 1px, transparent 1px)", backgroundSize: "30px 30px" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-orange-500 text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 bg-orange-500/10 rounded-full border border-orange-500/20">
              eBook Library
            </span>
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Knowledge <span className="text-orange-500">Collection</span>
            </h1>
            <p className="text-slate-400 text-base max-w-lg mx-auto">
              35+ premium Urdu eBooks across six essential life categories — crafted for every Muslim seeking growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FILTER & SEARCH */}
      <section className="sticky top-16 md:top-[4.5rem] z-30 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            <div className="relative flex-1 max-w-sm">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search eBooks..."
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setVisibleCount(PAGE_SIZE); }}
                className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-sm bg-slate-50"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                  <X size={14} />
                </button>
              )}
            </div>

            <div className="flex gap-1.5 overflow-x-auto pb-0.5 no-scrollbar flex-1">
              <button
                onClick={() => handleCategoryClick("all")}
                className={`flex-shrink-0 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeCategory === "all"
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                }`}
              >
                All ({ebooks.length})
              </button>
              {categories.map((cat) => {
                const count = ebooks.filter((b) => b.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryClick(cat.id)}
                    className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                      activeCategory === cat.id
                        ? "text-white shadow-sm"
                        : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                    }`}
                    style={activeCategory === cat.id ? { backgroundColor: cat.color } : {}}
                  >
                    <span className="hidden sm:inline">{cat.label}</span>
                    <span className="text-[10px] opacity-70">({count})</span>
                  </button>
                );
              })}
            </div>

            <div className="hidden md:flex items-center gap-1.5 flex-shrink-0 text-xs text-slate-400">
              <Filter size={12} />
              {filtered.length} books
            </div>
          </div>
        </div>
      </section>

      {/* BOOKS GRID */}
      <section className="py-12 bg-slate-50 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeCategory !== "all" && currentCategory && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: currentCategory.bg }}>
                <BookOpen size={18} style={{ color: currentCategory.color }} />
              </div>
              <div>
                <h2 className="text-slate-900 text-2xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {currentCategory.label}
                </h2>
                <p className="text-slate-400 text-sm">{currentCategory.labelUrdu}</p>
              </div>
            </motion.div>
          )}

          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <BookOpen size={48} className="text-slate-200 mx-auto mb-4" />
              <h3 className="text-slate-400 text-lg font-medium">No eBooks found</h3>
              <p className="text-slate-400 text-sm mt-1">Try adjusting your search or category filter</p>
              <button
                onClick={() => { setSearchQuery(""); handleCategoryClick("all"); }}
                className="mt-4 text-orange-500 text-sm hover:underline font-medium"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
                <AnimatePresence mode="popLayout">
                  {visible.map((book, idx) => (
                    <motion.div
                      key={book.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ delay: (idx % PAGE_SIZE) * 0.04 }}
                    >
                      <EbookCard book={book} onPreview={setPreviewBook} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {hasMore && (
                <div className="text-center mt-12">
                  <p className="text-slate-400 text-sm mb-4">
                    Showing {visible.length} of {filtered.length} eBooks
                  </p>
                  <button
                    onClick={() => setVisibleCount((v) => v + PAGE_SIZE)}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg text-sm shadow-md transition-all"
                  >
                    Load More Books
                  </button>
                </div>
              )}

              {!hasMore && filtered.length > PAGE_SIZE && (
                <p className="text-center text-slate-400 text-sm mt-10">
                  All {filtered.length} eBooks loaded
                </p>
              )}
            </>
          )}
        </div>
      </section>

      {/* CATEGORY CARDS */}
      {activeCategory === "all" && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-slate-900 text-2xl font-bold mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Browse by Category
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {categories.map((cat, i) => {
                const count = ebooks.filter((b) => b.category === cat.id).length;
                return (
                  <motion.button
                    key={cat.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    onClick={() => handleCategoryClick(cat.id)}
                    className="text-left p-5 rounded-2xl border border-slate-100 hover:border-transparent hover:shadow-xl transition-all duration-300 group bg-slate-50"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl" style={{ backgroundColor: cat.bg }}>
                        <BookOpen size={20} style={{ color: cat.color }} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-slate-900 text-sm">{cat.label}</h3>
                          <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: cat.bg, color: cat.color }}>
                            {count} Books
                          </span>
                        </div>
                        <p className="text-slate-400 text-xs mt-1">{cat.labelUrdu}</p>
                        <div className="mt-2 text-xs font-semibold flex items-center gap-1 text-orange-500 group-hover:gap-2 transition-all">
                          Browse Books <ArrowRight size={12} />
                        </div>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <EbookPreviewModal book={previewBook} onClose={() => setPreviewBook(null)} />
    </div>
  );
}
