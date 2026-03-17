"use client";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="">
      <div className="mx-auto h-[70px] flex items-center justify-between md:px-20 px-4">

        {/* Mobile hamburger - Very Right in RTL */}
        <button className="md:hidden p-2 -mr-2" onClick={() => setMenuOpen(!menuOpen)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="var(--dark)" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Logo - Center on Mobile, Right on Desktop */}
        <div className="flex flex-col items-center md:items-end gap-0.5 md:gap-1 text-center md:text-right absolute left-1/2 md:static md:transform-none" dir="ltr">
          <div className="flex items-center gap-1">

            {/* Icon */}
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="#1a1040"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 flex-shrink-0 w-[18px] h-[18px] md:w-[22px] md:h-[22px]"
            >
              <path d="M4 2L20 9.5L13 12.5L10 20L4 2Z" />
            </svg>
            {/* Logo */}
            <span className="text-[24px] md:text-[34px] font-extrabold leading-none tracking-[-0.5px]">
              <span className="text-[#e91e8c]">בירוקליק</span>
            </span>
          </div>

          {/* Tagline */}
          <span className="text-[10px] md:text-[13px] text-gray-400 mt-[2px]">
            בירוקרטיה בקליק
          </span>
        </div>

        {/* Nav - Center Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-[15px] font-medium text-[var(--text-gray)] hover:text-[var(--pink)] transition-colors">ראשי</a>
          <a href="#tools" className="text-[15px] font-medium text-[var(--text-gray)] hover:text-[var(--pink)] transition-colors flex items-center gap-1">
            הכלים שלנו
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#blog" className="text-[15px] font-medium text-[var(--text-gray)] hover:text-[var(--pink)] transition-colors">הבלוג שלנו</a>
          <a href="#terms" className="text-[15px] font-medium text-[var(--text-gray)] hover:text-[var(--pink)] transition-colors">תקנון שימוש</a>
        </nav>

        {/* CTA Button - Left */}
        <a
          href="#start"
          className="inline-flex items-center justify-center h-[34px] md:h-[42px] px-4 md:px-6 rounded-full md:rounded-[8px] text-white text-[12px] md:text-[14px] font-semibold transition-all duration-300 hover:opacity-90 hover:shadow-lg"
          style={{ background: "var(--pink)" }}
        >
          התחילו עכשיו
        </a>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 py-4 flex flex-col gap-4">
          <a href="#" className="text-[15px] text-[var(--text-gray)]">ראשי</a>
          <a href="#tools" className="text-[15px] text-[var(--text-gray)]">הכלים שלנו</a>
          <a href="#blog" className="text-[15px] text-[var(--text-gray)]">הבלוג שלנו</a>
          <a href="#terms" className="text-[15px] text-[var(--text-gray)]">תקנון שימוש</a>
          <a href="#start" className="inline-flex items-center justify-center h-[42px] px-6 rounded-full text-white text-[14px] font-semibold" style={{ background: "var(--pink)" }}>התחילו עכשיו</a>
        </div>
      )}
    </header>
  );
}
