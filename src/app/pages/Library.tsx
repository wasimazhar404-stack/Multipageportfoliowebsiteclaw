import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { useSearchParams } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Search, Filter, BookOpen, X, ArrowRight, ChevronDown } from "lucide-react";
import * as Slider from "@radix-ui/react-slider";
import { EbookCard, EbookPreviewModal } from "../components/EbookCard";
import { ebooks, categories } from "../data/ebooks";
import type { Ebook } from "../data/ebooks";
import { BookCover } from "../components/BookCover";

const PAGE_SIZE = 12;

/* ─── helpers ─── */
function parsePrice(price: string): number {
  const n = price.replace(/[^0-9]/g, "");
  return n ? parseInt(n, 10) : 0;
}

const PRICE_MIN = 500;
const PRICE_MAX = 1500;

export function Library() {
  useEffect(() => {
    document.title = "QuickLearn | QuickFare";
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(searchParams.get("cat") || "all");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [previewBook, setPreviewBook] = useState<Ebook | null>(null);

  /* Price range */
  const [priceRange, setPriceRange] = useState<[number, number]>([PRICE_MIN, PRICE_MAX]);

  /* Sort */
  type SortOption = "newest" | "price-asc" | "price-desc" | "featured";
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [sortOpen, setSortOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cat = searchParams.get("cat");
    setActiveCategory(cat || "all");
  }, [searchParams]);

  /* Close sort dropdown on outside click */
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setSortOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleCategoryClick = (catId: string) => {
    setActiveCategory(catId);
    setVisibleCount(PAGE_SIZE);
    setPriceRange([PRICE_MIN, PRICE_MAX]);
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

    /* Price filter */
    list = list.filter((b) => {
      const p = parsePrice(b.price);
      return p >= priceRange[0] && p <= priceRange[1];
    });

    /* Sort */
    const sorted = [...list];
    switch (sortBy) {
      case "newest":
        sorted.sort((a, b) => b.id - a.id);
        break;
      case "price-asc":
        sorted.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
        break;
      case "price-desc":
        sorted.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
        break;
      case "featured":
      default:
        sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || b.id - a.id);
        break;
    }

    return sorted;
  }, [activeCategory, searchQuery, priceRange, sortBy]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;
  const currentCategory = categories.find((c) => c.id === activeCategory);

  /* New Arrivals: 8 most recent by id */
  const newArrivals = useMemo(() => {
    return [...ebooks].sort((a, b) => b.id - a.id).slice(0, 8);
  }, []);

  const loadMoreRef = useRef<HTMLDivElement>(null);
  const handleLoadMore = useCallback(() => {
    setVisibleCount((v) => v + PAGE_SIZE);
    setTimeout(() => {
      loadMoreRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
  }, []);

  /* Sort labels */
  const sortLabels: Record<SortOption, string> = {
    newest: "Newest",
    "price-asc": "Price: Low to High",
    "price-desc": "Price: High to Low",
    featured: "Featured First",
  };

  return (
    <div className="overflow-x-hidden">
      {/* PAGE HERO */}
      <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(#f97316 1px, transparent 1px)", backgroundSize: "30px 30px" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-orange-500 text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 bg-orange-500/10 rounded-full border border-orange-500/20">
              QuickLearn
            </span>
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Knowledge <span className="text-orange-500">Collection</span>
            </h1>
            <p className="text-slate-400 text-base max-w-lg mx-auto">
              110+ premium Urdu eBooks across 17 essential life categories — crafted for every Muslim seeking growth.
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

          {/* Secondary filter bar: price + sort */}
          <div className="flex flex-col sm:flex-row gap-4 mt-3 pt-3 border-t border-slate-100 items-start sm:items-center">
            {/* Price Range Slider */}
            <div className="flex items-center gap-3 flex-1 max-w-md">
              <span className="text-xs text-slate-500 font-medium whitespace-nowrap">Price:</span>
              <div className="flex items-center gap-2 flex-1">
                <span className="text-xs text-slate-400 font-semibold w-10 text-right">{priceRange[0]}</span>
                <Slider.Root
                  className="relative flex items-center select-none touch-none w-full h-5"
                  value={priceRange}
                  max={PRICE_MAX}
                  min={PRICE_MIN}
                  step={50}
                  minStepsBetweenThumbs={1}
                  onValueChange={(v) => {
                    setPriceRange(v as [number, number]);
                    setVisibleCount(PAGE_SIZE);
                  }}
                >
                  <Slider.Track className="bg-slate-200 relative grow rounded-full h-[4px]">
                    <Slider.Range className="absolute bg-orange-500 rounded-full h-full" />
                  </Slider.Track>
                  <Slider.Thumb
                    className="block w-4 h-4 bg-white border-2 border-orange-500 shadow-sm rounded-full hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500/30 cursor-pointer"
                    aria-label="Min price"
                  />
                  <Slider.Thumb
                    className="block w-4 h-4 bg-white border-2 border-orange-500 shadow-sm rounded-full hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500/30 cursor-pointer"
                    aria-label="Max price"
                  />
                </Slider.Root>
                <span className="text-xs text-slate-400 font-semibold w-12">{priceRange[1]}</span>
              </div>
              <span className="text-[10px] text-slate-400">PKR</span>
            </div>

            {/* Sort Dropdown */}
            <div className="relative" ref={sortRef}>
              <button
                onClick={() => setSortOpen((o) => !o)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
              >
                Sort: {sortLabels[sortBy]}
                <ChevronDown size={12} className={`transition-transform ${sortOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {sortOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="absolute right-0 mt-1 w-48 bg-white border border-slate-100 rounded-lg shadow-lg z-40 overflow-hidden"
                  >
                    {(Object.keys(sortLabels) as SortOption[]).map((key) => (
                      <button
                        key={key}
                        onClick={() => {
                          setSortBy(key);
                          setSortOpen(false);
                          setVisibleCount(PAGE_SIZE);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-xs font-medium transition-colors ${
                          sortBy === key ? "bg-orange-50 text-orange-600" : "text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        {sortLabels[key]}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
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

          {/* NEW ARRIVALS HORIZONTAL STRIP */}
          {activeCategory === "all" && !searchQuery && priceRange[0] === PRICE_MIN && priceRange[1] === PRICE_MAX && sortBy === "featured" && (
            <div className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-slate-900 font-bold text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  New Arrivals
                </h3>
                <span className="text-xs text-slate-400">{newArrivals.length} latest books</span>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory no-scrollbar">
                {newArrivals.map((book) => {
                  const cat = categories.find((c) => c.id === book.category);
                  return (
                    <button
                      key={book.id}
                      onClick={() => setPreviewBook(book)}
                      className="flex-shrink-0 snap-start w-32 text-left group"
                    >
                      <div className="aspect-[3/4] w-full rounded-lg overflow-hidden bg-slate-200 mb-2 shadow-sm group-hover:shadow-md transition-shadow">
                        <BookCover
                          title={book.title}
                          categoryColor={cat?.color ?? "#f97316"}
                          categoryBg={cat?.bg ?? "#fff7ed"}
                          size="sm"
                          id={book.id}
                        />
                      </div>
                      <p className="text-slate-700 text-xs font-semibold leading-tight line-clamp-2 group-hover:text-orange-500 transition-colors">
                        {book.title}
                      </p>
                      <p className="text-orange-500 text-[10px] font-bold mt-0.5">{book.price}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <BookOpen size={48} className="text-slate-200 mx-auto mb-4" />
              <h3 className="text-slate-400 text-lg font-medium">No eBooks found</h3>
              <p className="text-slate-400 text-sm mt-1">Try adjusting your search, category, or price filter</p>
              <button
                onClick={() => { setSearchQuery(""); setPriceRange([PRICE_MIN, PRICE_MAX]); handleCategoryClick("all"); }}
                className="mt-4 text-orange-500 text-sm hover:underline font-medium"
              >
                Clear all filters
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
                <div className="text-center mt-12" ref={loadMoreRef}>
                  <p className="text-slate-400 text-sm mb-4">
                    Showing {visible.length} of {filtered.length} eBooks
                  </p>
                  <button
                    onClick={handleLoadMore}
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
