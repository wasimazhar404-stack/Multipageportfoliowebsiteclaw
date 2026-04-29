import { useEffect } from "react";
import { Link } from "react-router";
import { Home, BookOpen } from "lucide-react";

export function NotFound() {
  useEffect(() => {
    document.title = "Page Not Found | QuickFare";
  }, []);

  return (
    <div className="min-h-full flex items-center justify-center bg-slate-50 px-4 py-20">
      <div className="text-center">
        <div className="text-orange-500 text-8xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          404
        </div>
        <h2 className="text-slate-900 text-2xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Page Not Found
        </h2>
        <p className="text-slate-500 mb-8 max-w-sm mx-auto">
          The page you're looking for doesn't exist. Let's take you back to familiar territory.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg text-sm shadow-md transition-all"
          >
            <Home size={15} /> Go Home
          </Link>
          <Link
            to="/quicklearn"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-semibold rounded-lg text-sm transition-all"
          >
            <BookOpen size={15} /> Browse Library
          </Link>
        </div>
      </div>
    </div>
  );
}
