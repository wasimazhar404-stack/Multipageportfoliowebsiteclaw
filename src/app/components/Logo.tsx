interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

export function Logo({ className = "", size = "md", variant = "dark" }: LogoProps) {
  const sizes = { sm: "h-8", md: "h-10", lg: "h-14" };
  const textColor = variant === "light" ? "text-white" : "text-slate-900";
  const subColor = variant === "light" ? "text-slate-400" : "text-slate-500";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Modern Corporate Logo Icon */}
      <div className={`relative flex-shrink-0 ${sizes[size]}`} style={{ aspectRatio: "1" }}>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Outer rounded square */}
          <rect x="2" y="2" width="44" height="44" rx="10" fill="#0f172a" />
          {/* Inner accent shape */}
          <path d="M14 34L24 14L34 34H14Z" fill="#f97316" />
          {/* Cutout */}
          <path d="M20 30H28L24 22L20 30Z" fill="#0f172a" />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-bold tracking-tight ${textColor}`}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: size === "sm" ? "0.9rem" : size === "md" ? "1.1rem" : "1.4rem",
          }}
        >
          QuickFare
        </span>
        <span
          className={`font-medium ${subColor}`}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: size === "sm" ? "0.55rem" : size === "md" ? "0.65rem" : "0.8rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Travels & Solutions
        </span>
      </div>
    </div>
  );
}
