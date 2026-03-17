export default function Header() {
  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo - Right side in RTL */}
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-end">
            <span className="text-[22px] font-bold text-[var(--dark)] leading-tight">בירוקליק</span>
            <span className="text-[11px] text-[var(--text-gray)] leading-tight -mt-0.5">בירוקרטיה בקליק</span>
          </div>
          {/* Small decorative icon */}
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="mr-1">
            <rect width="28" height="28" rx="6" fill="var(--pink)" fillOpacity="0.1" />
            <path d="M8 14l4 4 8-8" stroke="var(--pink)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Navigation Links - Center */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-[15px] font-medium text-[var(--dark)] hover:text-[var(--pink)] transition-colors">
            ראשי
          </a>
          <a href="#tools" className="text-[15px] font-medium text-[var(--text-gray)] hover:text-[var(--pink)] transition-colors flex items-center gap-1">
            הכלים שלנו
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#blog" className="text-[15px] font-medium text-[var(--text-gray)] hover:text-[var(--pink)] transition-colors">
            הבלוג שלנו
          </a>
          <a href="#terms" className="text-[15px] font-medium text-[var(--text-gray)] hover:text-[var(--pink)] transition-colors">
            תקנון שימוש
          </a>
        </nav>

        {/* CTA Button - Left side in RTL */}
        <a
          href="#start"
          className="hidden md:inline-flex items-center justify-center h-[42px] px-6 rounded-full text-white text-[14px] font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-pink-200"
          style={{ background: "var(--pink)" }}
        >
          התחילו עכשיו
        </a>

        {/* Mobile menu button */}
        <button className="md:hidden p-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="var(--dark)" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
  );
}
