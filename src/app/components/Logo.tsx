interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

export function Logo({ className = "", size = "md", variant = "dark" }: LogoProps): JSX.Element {
  const sizes = { sm: "h-8", md: "h-10", lg: "h-14" };
  const textColor = variant === "light" ? "text-white" : "text-slate-900";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Icon */}
      <div className={`relative flex-shrink-0 ${sizes[size]}`} style={{ aspectRatio: "1" }}>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <rect x="2" y="2" width="44" height="44" rx="10" fill="#0f172a" />
          <path d="M14 34L24 14L34 34H14Z" fill="#f97316" />
          <path d="M20 30H28L24 22L20 30Z" fill="#0f172a" />
        </svg>
      </div>

      {/* Brand Text */}
      <span
        className={`font-bold tracking-tight ${textColor}`}
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: size === "sm" ? "0.9rem" : size === "md" ? "1.1rem" : "1.4rem",
        }}
      >
        QuickFare
      </span>
    </div>
  );
}
