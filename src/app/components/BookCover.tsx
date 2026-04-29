"use client";

import { useMemo, useState, useCallback } from "react";

/* ------------------------------------------------------------------ */
/*  TYPES                                                              */
/* ------------------------------------------------------------------ */

interface BookCoverProps {
  title: string;
  categoryColor: string;
  categoryBg: string;
  size?: "sm" | "md" | "lg";
  imageUrl?: string; // NEW: optional image path
  id?: number; // NEW: for image mapping
}

/* ------------------------------------------------------------------ */
/*  UTILITIES                                                          */
/* ------------------------------------------------------------------ */

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/** Map size token to Tailwind width class and SVG dimensions */
const sizeMap = {
  sm: { wClass: "w-24", svgW: 240, svgH: 320 },
  md: { wClass: "w-40", svgW: 300, svgH: 400 },
  lg: { wClass: "w-52", svgW: 360, svgH: 480 },
} as const;

/* ------------------------------------------------------------------ */
/*  PREMIUM SVG FALLBACK                                                */
/* ------------------------------------------------------------------ */
/**
 * Generates a data-URI SVG that looks like an expensive leather-bound
 * Islamic book with gold embossing, geometric borders, and a medallion.
 */
function buildPremiumCoverSvg(
  title: string,
  categoryColor: string,
  categoryBg: string,
  size: "sm" | "md" | "lg"
): string {
  const safeTitle = escapeXml(title);
  const words = safeTitle.split(" ");
  const line1 = words.slice(0, Math.ceil(words.length / 2)).join(" ");
  const line2 = words.slice(Math.ceil(words.length / 2)).join(" ");

  const { svgW, svgH } = sizeMap[size];
  const fsTitle = size === "sm" ? 18 : size === "md" ? 22 : 26;
  const fsAuthor = size === "sm" ? 9 : size === "md" ? 11 : 13;
  const fsOrnament = size === "sm" ? 7 : size === "md" ? 8 : 9;

  const gold = "#c9a23e";
  const goldLight = "#e8d28c";
  const goldDark = "#8a6e1f";
  const silver = "#b8b8b8";
  const leatherBase = "#2a1a10";

  // Helper to generate an Islamic 8-point star path centred at (cx,cy) with radius r
  const star8 = (cx: number, cy: number, r: number) => {
    const pts: string[] = [];
    for (let i = 0; i < 16; i++) {
      const angle = (i * Math.PI) / 8 - Math.PI / 2;
      const rad = i % 2 === 0 ? r : r * 0.42;
      pts.push(`${cx + Math.cos(angle) * rad},${cy + Math.sin(angle) * rad}`);
    }
    return `<polygon points="${pts.join(" ")}" fill="none" stroke="${gold}" stroke-width="0.8" opacity="0.35"/>`;
  };

  // Inner rosette
  const rosette = (cx: number, cy: number, r: number) => {
    const pts: string[] = [];
    for (let i = 0; i < 24; i++) {
      const angle = (i * Math.PI) / 12 - Math.PI / 2;
      const rad = i % 2 === 0 ? r : r * 0.55;
      pts.push(`${cx + Math.cos(angle) * rad},${cy + Math.sin(angle) * rad}`);
    }
    return `<polygon points="${pts.join(" ")}" fill="${gold}" opacity="0.12"/>`;
  };

  // Border ornament — repeating small 8-point stars along edges
  const borderOrnaments = () => {
    const margin = 28;
    const step = 42;
    let s = "";
    // top & bottom
    for (let x = margin; x <= svgW - margin; x += step) {
      s += star8(x, margin - 6, 8);
      s += star8(x, svgH - margin + 6, 8);
    }
    // left & right
    for (let y = margin + step / 2; y <= svgH - margin - step / 2; y += step) {
      s += star8(margin - 6, y, 8);
      s += star8(svgW - margin + 6, y, 8);
    }
    // corner rosettes
    s += star8(margin - 4, margin - 4, 14);
    s += star8(svgW - margin + 4, margin - 4, 14);
    s += star8(margin - 4, svgH - margin + 4, 14);
    s += star8(svgW - margin + 4, svgH - margin + 4, 14);
    return s;
  };

  // Decorative frame lines
  const frame = `
    <rect x="18" y="18" width="${svgW - 36}" height="${svgH - 36}" rx="4"
          fill="none" stroke="${gold}" stroke-width="1.2" opacity="0.5"/>
    <rect x="24" y="24" width="${svgW - 48}" height="${svgH - 48}" rx="2"
          fill="none" stroke="${gold}" stroke-width="0.6" opacity="0.3"/>
  `;

  // Central medallion
  const cx = svgW / 2;
  const cy = svgH / 2 + 18;
  const medallion = `
    <circle cx="${cx}" cy="${cy}" r="56" fill="none" stroke="${gold}" stroke-width="1" opacity="0.25"/>
    <circle cx="${cx}" cy="${cy}" r="48" fill="none" stroke="${gold}" stroke-width="0.5" opacity="0.2"/>
    ${rosette(cx, cy, 40)}
    ${star8(cx, cy, 32)}
    <circle cx="${cx}" cy="${cy}" r="18" fill="${gold}" opacity="0.15"/>
    <text x="${cx}" y="${cy + 3}" text-anchor="middle" font-family="Georgia,serif"
          font-size="${fsOrnament}" fill="${gold}" opacity="0.6" font-weight="600">☆</text>
  `;

  // Category accent bands
  const bands = `
    <rect x="0" y="0" width="${svgW}" height="10" fill="${categoryColor}" opacity="0.25"/>
    <rect x="0" y="${svgH - 10}" width="${svgW}" height="10" fill="${categoryColor}" opacity="0.25"/>
    <line x1="0" y1="10" x2="${svgW}" y2="10" stroke="${gold}" stroke-width="0.6" opacity="0.4"/>
    <line x1="0" y1="${svgH - 10}" x2="${svgW}" y2="${svgH - 10}" stroke="${gold}" stroke-width="0.6" opacity="0.4"/>
  `;

  // Title area
  const titleY = svgH * 0.28;
  const titleBlock = `
    <text x="${cx}" y="${titleY}" text-anchor="middle" font-family="Georgia,serif"
          font-size="${fsTitle}" font-weight="700" fill="${goldLight}" letter-spacing="0.04em">${line1}</text>
    <text x="${cx}" y="${titleY + fsTitle + 6}" text-anchor="middle" font-family="Georgia,serif"
          font-size="${fsTitle}" font-weight="700" fill="${goldLight}" letter-spacing="0.04em">${line2}</text>
    <line x1="${cx - 50}" y1="${titleY + fsTitle + 18}" x2="${cx + 50}" y2="${titleY + fsTitle + 18}"
          stroke="${gold}" stroke-width="1" opacity="0.5"/>
  `;

  // Author
  const authorY = svgH - 22;
  const authorBlock = `
    <text x="${cx}" y="${authorY}" text-anchor="middle" font-family="'Times New Roman',serif"
          font-size="${fsAuthor}" fill="${silver}" opacity="0.7" letter-spacing="0.12em" font-weight="500">QuickFare Publications</text>
  `;

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${svgW}" height="${svgH}" viewBox="0 0 ${svgW} ${svgH}">
      <defs>
        <!-- Leather grain filter -->
        <filter id="leather" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="5" result="noise"/>
          <feDiffuseLighting in="noise" lighting-color="#8B5A2B" surfaceScale="2" result="light">
            <feDistantLight azimuth="45" elevation="55"/>
          </feDiffuseLighting>
          <feBlend in="SourceGraphic" in2="light" mode="multiply"/>
        </filter>
        <!-- Gold embossed text filter -->
        <filter id="goldEmboss" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" result="blur"/>
          <feOffset in="blur" dx="0.5" dy="1" result="offsetBlur"/>
          <feSpecularLighting in="blur" surfaceScale="3" specularConstant="1.2" specularExponent="16" lighting-color="#fff" result="specOut">
            <fePointLight x="-500" y="-500" z="300"/>
          </feSpecularLighting>
          <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut"/>
          <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litPaint"/>
          <feMerge>
            <feMergeNode in="offsetBlur"/>
            <feMergeNode in="litPaint"/>
          </feMerge>
        </filter>
        <!-- Subtle vignette -->
        <radialGradient id="vignette" cx="50%" cy="50%" r="70%">
          <stop offset="50%" stop-color="${leatherBase}" stop-opacity="0"/>
          <stop offset="100%" stop-color="#000" stop-opacity="0.55"/>
        </radialGradient>
        <!-- Vertical sheen for rounded spine look -->
        <linearGradient id="spineSheen" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#000" stop-opacity="0.45"/>
          <stop offset="12%" stop-color="#000" stop-opacity="0.15"/>
          <stop offset="35%" stop-color="#fff" stop-opacity="0.06"/>
          <stop offset="65%" stop-color="#000" stop-opacity="0.08"/>
          <stop offset="100%" stop-color="#000" stop-opacity="0.35"/>
        </linearGradient>
      </defs>

      <!-- Base leather colour -->
      <rect width="${svgW}" height="${svgH}" fill="${leatherBase}"/>
      <!-- Leather grain -->
      <rect width="${svgW}" height="${svgH}" fill="#5c3a1e" filter="url(#leather)" opacity="0.6"/>
      <!-- Vignette -->
      <rect width="${svgW}" height="${svgH}" fill="url(#vignette)"/>
      <!-- Spine sheen -->
      <rect width="${svgW}" height="${svgH}" fill="url(#spineSheen)"/>

      <!-- Decorative content -->
      ${bands}
      ${frame}
      ${borderOrnaments()}
      ${titleBlock}
      ${medallion}
      ${authorBlock}
    </svg>
  `;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

/* ------------------------------------------------------------------ */
/*  IMAGE COVER (with fallback)                                        */
/* ------------------------------------------------------------------ */

function ImageCover({
  src,
  alt,
  onErrorSrc,
  size,
}: {
  src: string;
  alt: string;
  onErrorSrc: string;
  size: "sm" | "md" | "lg";
}) {
  const [failed, setFailed] = useState(false);

  const handleError = useCallback(() => {
    setFailed(true);
  }, []);

  const { wClass } = sizeMap[size];

  return (
    <img
      src={failed ? onErrorSrc : src}
      alt={alt}
      onError={handleError}
      className={`${wClass} h-auto object-cover rounded-sm`}
      loading="lazy"
    />
  );
}

/* ------------------------------------------------------------------ */
/*  BOOK COVER COMPONENT                                               */
/* ------------------------------------------------------------------ */

export function BookCover({
  title,
  categoryColor,
  categoryBg,
  size = "md",
  imageUrl,
  id,
}: BookCoverProps) {
  const { wClass } = sizeMap[size];

  // Determine the image source.
  // Priority: explicit imageUrl > mapped id path > none (SVG fallback only)
  const resolvedImageUrl = useMemo(() => {
    if (imageUrl) return imageUrl;
    if (id != null) {
      return `/imports/covers/ebook_${id}_cover.jpg`;
    }
    return null;
  }, [imageUrl, id]);

  // Premium SVG fallback, generated once per dependency set
  const fallbackSvg = useMemo(
    () => buildPremiumCoverSvg(title, categoryColor, categoryBg, size),
    [title, categoryColor, categoryBg, size]
  );

  // Aspect-ratio box keeps layout stable before images load
  const aspectPadding = "133.33%"; // 4:3-ish typical book ratio

  const isImage = resolvedImageUrl != null;

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
          {isImage ? (
            <ImageCover
              src={resolvedImageUrl!}
              alt={title}
              onErrorSrc={fallbackSvg}
              size={size}
            />
          ) : (
            <img
              src={fallbackSvg}
              alt={title}
              className={`${wClass} h-auto object-cover rounded-sm`}
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
/*  AVATAR (kept unchanged — used elsewhere)                              */
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
