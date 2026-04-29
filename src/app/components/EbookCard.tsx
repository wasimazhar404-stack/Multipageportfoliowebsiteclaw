import { useState } from "react";
import { Eye, ShoppingCart, BookOpen, X } from "lucide-react";
import type { Ebook } from "../data/ebooks";
import { categories } from "../data/ebooks";
import { BookCover } from "./BookCover";

interface EbookCardProps {
  book: Ebook;
  onPreview?: (book: Ebook) => void;
}

export function EbookCard({ book, onPreview }: EbookCardProps) {
  const [hovered, setHovered] = useState(false);
  const cat = categories.find((c) => c.id === book.category);
  const color = cat?.color ?? "#f97316";
  const bg = cat?.bg ?? "#fff7ed";

  return (
    <div
      className="relative rounded-xl overflow-hidden shadow-sm hover:shadow-lg border border-slate-100 cursor-pointer group transition-shadow duration-300 bg-white"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-50">
        <BookCover title={book.title} categoryColor={color} categoryBg={bg} size="md" id={book.id} />

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span
            className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-white shadow-sm"
            style={{ backgroundColor: color }}
          >
            {book.categoryLabel}
          </span>
        </div>

        {/* Bottom info strip */}
        <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-slate-900/80 to-transparent">
          <h3 className="text-white font-bold text-sm leading-tight line-clamp-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {book.title}
          </h3>
          <p className="text-orange-400 text-xs mt-0.5 font-semibold">{book.price}</p>
        </div>

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 bg-slate-900/95 flex flex-col justify-between p-4 transition-all duration-300 ${
            hovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          } group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100`}
        >
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1 text-orange-400 text-[10px] font-bold uppercase tracking-widest">
              <BookOpen size={10} />
              {book.categoryLabel}
            </span>
            <span className="text-white text-xs font-bold bg-orange-500/20 px-2 py-0.5 rounded border border-orange-500/30">
              {book.price}
            </span>
          </div>

          <div className="flex-1 flex flex-col justify-center my-2">
            <h3 className="text-white font-bold text-sm mb-1 leading-snug" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {book.title}
            </h3>
            <p className="text-orange-400/80 text-[10px] mb-2">{book.subtitle}</p>
            <p className="text-white/70 text-[11px] leading-relaxed line-clamp-5">
              {book.description}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPreview?.(book);
              }}
              className="flex items-center justify-center gap-1.5 w-full py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold transition-all duration-200 shadow-sm"
            >
              <Eye size={12} />
              Preview Book
            </button>
            <a
              href={`https://wa.me/923220532596?text=Hi, I want to order the eBook: ${encodeURIComponent(book.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center gap-1.5 w-full py-2 rounded-lg border border-orange-500/50 hover:border-orange-500 text-orange-400 hover:bg-orange-500/10 text-xs font-semibold transition-all duration-200"
            >
              <ShoppingCart size={12} />
              Order on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Preview Modal */
interface PreviewModalProps {
  book: Ebook | null;
  onClose: () => void;
}

export function EbookPreviewModal({ book, onClose }: PreviewModalProps) {
  if (!book) return null;
  const cat = categories.find((c) => c.id === book.category);
  const color = cat?.color ?? "#f97316";
  const bg = cat?.bg ?? "#fff7ed";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white border border-slate-100 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors"
        >
          <X size={16} />
        </button>
        <div className="flex gap-0">
          <div className="w-36 sm:w-44 flex-shrink-0 bg-slate-50">
            <BookCover title={book.title} categoryColor={color} categoryBg={bg} size="lg" id={book.id} />
          </div>
          <div className="flex-1 p-5 flex flex-col justify-between">
            <div>
              <span
                className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded"
                style={{ color, backgroundColor: bg }}
              >
                {book.categoryLabel}
              </span>
              <h2 className="text-slate-900 font-bold text-base leading-tight mt-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {book.title}
              </h2>
              <p className="text-slate-500 text-xs mt-1">{book.subtitle}</p>
              <p className="text-slate-600 text-sm leading-relaxed mt-3">{book.description}</p>
            </div>
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
              <span className="text-orange-500 font-bold text-lg">{book.price}</span>
              <a
                href={`https://wa.me/923220532596?text=Hi, I want to order the eBook: ${encodeURIComponent(book.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors"
              >
                Order Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
