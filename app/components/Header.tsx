"use client";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1200px] mx-auto px-5 h-[70px] flex items-center justify-between">

        {/* Logo - Right side in RTL */}
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-end leading-tight">
            <span className="text-[20px] font-bold text-[var(--dark)]">בירוקליק</span>
            <span className="text-[10px] text-[var(--text-gray)]">בירוקרטיה בקליק</span>
          </div>
          <div className="w-[32px] h-[32px] rounded-lg flex items-center justify-center" style={{ background: "var(--pink)" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Nav - Center */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-[15px] font-bold text-[var(--dark)] hover:text-[var(--pink)] transition-colors">ראשי</a>
          <a href="#tools" className="text-[15px] font-medium text-[var(--text-gray)] hover:text-[var(--pink)] transition-colors flex items-center gap-1">
            הכלים שלנו
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#blog" className="text-[15px] font-medium text-[var(--text-gray)] hover:text-[var(--pink)] transition-colors">הבלוג שלנו</a>
          <a href="#terms" className="text-[15px] font-medium text-[var(--text-gray)] hover:text-[var(--pink)] transition-colors">תקנון שימוש</a>
        </nav>

        {/* CTA Button */}
        <a
          href="#start"
          className="hidden md:inline-flex items-center justify-center h-[42px] px-6 rounded-full text-white text-[14px] font-semibold transition-all duration-300 hover:opacity-90 hover:shadow-lg"
          style={{ background: "var(--pink)" }}
        >
          התחילו עכשיו
        </a>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="var(--dark)" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 py-4 flex flex-col gap-4">
          <a href="#" className="text-[15px] font-bold text-[var(--dark)]">ראשי</a>
          <a href="#tools" className="text-[15px] text-[var(--text-gray)]">הכלים שלנו</a>
          <a href="#blog" className="text-[15px] text-[var(--text-gray)]">הבלוג שלנו</a>
          <a href="#terms" className="text-[15px] text-[var(--text-gray)]">תקנון שימוש</a>
          <a href="#start" className="inline-flex items-center justify-center h-[42px] px-6 rounded-full text-white text-[14px] font-semibold" style={{ background: "var(--pink)" }}>התחילו עכשיו</a>
        </div>
      )}
    </header>
  );
}
