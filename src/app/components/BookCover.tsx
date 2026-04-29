"use client";

import { useState, useCallback } from "react";

/* ------------------------------------------------------------------ */
/*  TYPES                                                              */
/* ------------------------------------------------------------------ */

interface BookCoverProps {
  title: string;
  categoryColor: string;
  categoryBg: string;
  size?: "sm" | "md" | "lg";
  imageUrl?: string;
  id?: number;
}

const sizeMap = {
  sm: { wClass: "w-24" },
  md: { wClass: "w-40" },
  lg: { wClass: "w-52" },
} as const;

/* ------------------------------------------------------------------ */
/*  BOOK COVER COMPONENT                                               */
/* ------------------------------------------------------------------ */

export function BookCover({
  title,
  size = "md",
  imageUrl,
  id,
}: BookCoverProps) {
  const { wClass } = sizeMap[size];
  const [failed, setFailed] = useState(false);

  const handleError = useCallback(() => {
    setFailed(true);
  }, []);

  const src = imageUrl ?? (id != null ? `/imports/covers/ebook_${id}_cover.jpg` : "");
  const aspectPadding = "133.33%";

  return (
    <div
      className="book-3d inline-block"
      style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
    >
      <div
        className={`book-cover relative ${wClass}`}
        style={{
          transform: "rotateY(-8deg)",
          transformStyle: "preserve-3d",
          transition: "transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.45s ease",
          boxShadow:
            "-6px 6px 18px rgba(0,0,0,0.28), -3px 0 6px rgba(0,0,0,0.12) inset",
          borderRadius: "3px 6px 6px 3px",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget;
          el.style.transform = "rotateY(0deg) scale(1.03)";
          el.style.boxShadow = "0 18px 45px rgba(0,0,0,0.38)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget;
          el.style.transform = "rotateY(-8deg)";
          el.style.boxShadow =
            "-6px 6px 18px rgba(0,0,0,0.28), -3px 0 6px rgba(0,0,0,0.12) inset";
        }}
      >
        {/* Spine strip on left */}
        <div
          className="pointer-events-none absolute top-0 bottom-0 left-0 z-10"
          style={{
            width: "14%",
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 40%, rgba(255,255,255,0.04) 70%, rgba(0,0,0,0.1) 100%)",
            borderRadius: "2px 0 0 2px",
            boxShadow: "inset -1px 0 2px rgba(0,0,0,0.3)",
          }}
        />

        {/* Cover content */}
        <div className="relative" style={{ paddingBottom: aspectPadding }}>
          {failed || !src ? (
            <div
              className={`absolute inset-0 ${wClass} flex items-center justify-center bg-slate-800 text-white text-center p-2 rounded-sm`}
            >
              <span className="text-xs font-medium">{title}</span>
            </div>
          ) : (
            <img
              src={src}
              alt={title}
              onError={handleError}
              className={`absolute inset-0 w-full h-full object-cover rounded-sm`}
              loading="lazy"
            />
          )}
        </div>

        {/* Page-edge effect at bottom */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 z-10"
          style={{
            height: "6px",
            background: `
              repeating-linear-gradient(
                0deg,
                #fdf6e3 0px,
                #fdf6e3 1px,
                #e8dcc8 1px,
                #e8dcc8 2px
              )
            `,
            boxShadow: "0 -1px 2px rgba(0,0,0,0.15)",
            borderRadius: "0 0 3px 2px",
          }}
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  AVATAR                                                              */
/* ------------------------------------------------------------------ */

export function Avatar({
  initials,
  size = "md",
}: {
  initials: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClass =
    size === "sm"
      ? "w-8 h-8 text-xs"
      : size === "md"
        ? "w-12 h-12 text-sm"
        : "w-16 h-16 text-lg";

  const colors = [
    { bg: "#dbeafe", text: "#1e40af" },
    { bg: "#fce7f3", text: "#be185d" },
    { bg: "#dcfce7", text: "#15803d" },
    { bg: "#fef3c7", text: "#b45309" },
    { bg: "#ede9fe", text: "#6d28d9" },
    { bg: "#cffafe", text: "#0e7490" },
  ];

  const color =
    colors[initials ? initials.charCodeAt(0) % colors.length : 0] ?? colors[0];

  return (
    <div
      className={`${sizeClass} rounded-full flex items-center justify-center font-semibold flex-shrink-0`}
      style={{ backgroundColor: color.bg, color: color.text }}
    >
      {initials}
    </div>
  );
}
