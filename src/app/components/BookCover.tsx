import { useMemo } from "react";

interface BookCoverProps {
  title: string;
  categoryColor: string;
  categoryBg: string;
  size?: "sm" | "md" | "lg";
}

const patterns = [
  (color: string) => `<circle cx="20" cy="20" r="60" fill="${color}" opacity="0.08"/><circle cx="80" cy="80" r="40" fill="${color}" opacity="0.06"/>`,
  (color: string) => `<rect x="10" y="10" width="80" height="80" rx="20" fill="${color}" opacity="0.06" transform="rotate(15 50 50)"/><rect x="30" y="30" width="60" height="60" rx="15" fill="${color}" opacity="0.08" transform="rotate(-10 60 60)"/>`,
  (color: string) => `<polygon points="50,5 95,50 50,95 5,50" fill="${color}" opacity="0.06"/><polygon points="50,25 75,50 50,75 25,50" fill="${color}" opacity="0.08"/>`,
  (color: string) => `<line x1="0" y1="0" x2="100" y2="100" stroke="${color}" stroke-width="0.5" opacity="0.1"/><line x1="100" y1="0" x2="0" y2="100" stroke="${color}" stroke-width="0.5" opacity="0.1"/>`,
  (color: string) => `<circle cx="50" cy="50" r="30" fill="none" stroke="${color}" stroke-width="0.5" opacity="0.12"/><circle cx="50" cy="50" r="20" fill="none" stroke="${color}" stroke-width="0.5" opacity="0.1"/><circle cx="50" cy="50" r="10" fill="none" stroke="${color}" stroke-width="0.5" opacity="0.08"/>`,
  (color: string) => `<rect x="20" y="0" width="8" height="100" fill="${color}" opacity="0.05"/><rect x="50" y="0" width="8" height="100" fill="${color}" opacity="0.06"/><rect x="80" y="0" width="8" height="100" fill="${color}" opacity="0.05"/>`,
];

function getPatternIndex(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash);
  return Math.abs(hash) % patterns.length;
}

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function BookCover({ title, categoryColor, categoryBg, size = "md" }: BookCoverProps) {
  const svg = useMemo(() => {
    const pattern = patterns[getPatternIndex(title)](categoryColor);
    const safeTitle = escapeXml(title);
    const words = safeTitle.split(" ");
    const line1 = words.slice(0, Math.ceil(words.length / 2)).join(" ");
    const line2 = words.slice(Math.ceil(words.length / 2)).join(" ");

    const fontSize = size === "sm" ? "10" : size === "md" ? "12" : "14";
    const lineHeight = size === "sm" ? "14" : size === "md" ? "16" : "20";

    return `data:image/svg+xml,${encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="400" viewBox="0 0 100 133">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="${categoryBg}"/>
            <stop offset="100%" stop-color="#ffffff"/>
          </linearGradient>
        </defs>
        <rect width="100" height="133" fill="url(#g)"/>
        ${pattern}
        <rect x="8" y="8" width="84" height="117" rx="4" fill="none" stroke="${categoryColor}" stroke-width="0.8" opacity="0.3"/>
        <rect x="12" y="12" width="76" height="109" rx="2" fill="none" stroke="${categoryColor}" stroke-width="0.4" opacity="0.15"/>
        <text x="50" y="55" text-anchor="middle" font-family="Georgia,serif" font-size="${fontSize}" font-weight="700" fill="#0f172a" letter-spacing="0.02em">${line1}</text>
        <text x="50" y="${55 + parseInt(lineHeight)}" text-anchor="middle" font-family="Georgia,serif" font-size="${fontSize}" font-weight="700" fill="#0f172a" letter-spacing="0.02em">${line2}</text>
        <line x1="35" y1="78" x2="65" y2="78" stroke="${categoryColor}" stroke-width="1.5" opacity="0.6"/>
        <circle cx="50" cy="95" r="8" fill="${categoryColor}" opacity="0.12"/>
        <text x="50" y="98" text-anchor="middle" font-family="monospace" font-size="6" fill="${categoryColor}" opacity="0.7">QFTS</text>
        <rect x="0" y="128" width="100" height="5" fill="${categoryColor}" opacity="0.15"/>
      </svg>`
    )}`;
  }, [title, categoryColor, categoryBg, size]);

  return (
    <img
      src={svg}
      alt={title}
      className={`w-full h-full object-cover ${
        size === "sm" ? "rounded-md" : size === "md" ? "rounded-lg" : "rounded-xl"
      }`}
      loading="lazy"
    />
  );
}

export function Avatar({ initials, size = "md" }: { initials: string; size?: "sm" | "md" | "lg" }) {
  const sizeClass = size === "sm" ? "w-8 h-8 text-xs" : size === "md" ? "w-12 h-12 text-sm" : "w-16 h-16 text-lg";
  const colors = [
    { bg: "#dbeafe", text: "#1e40af" },
    { bg: "#fce7f3", text: "#be185d" },
    { bg: "#dcfce7", text: "#15803d" },
    { bg: "#fef3c7", text: "#b45309" },
    { bg: "#ede9fe", text: "#6d28d9" },
    { bg: "#cffafe", text: "#0e7490" },
  ];
  const color = colors[initials ? initials.charCodeAt(0) % colors.length : 0] ?? colors[0];

  return (
    <div
      className={`${sizeClass} rounded-full flex items-center justify-center font-semibold flex-shrink-0`}
      style={{ backgroundColor: color.bg, color: color.text }}
    >
      {initials}
    </div>
  );
}
