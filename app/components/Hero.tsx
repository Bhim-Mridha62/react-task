import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20 flex flex-col md:flex-row items-center gap-8 md:gap-0">
        {/* Right side - Text content (RTL so this appears on right) */}
        <div className="flex-1 flex flex-col items-start gap-6 z-10">
          {/* AI Platform badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium"
            style={{
              background: "linear-gradient(90deg, rgba(124,58,237,0.08), rgba(233,30,140,0.08))",
              color: "#7c3aed",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1l1.5 3.5L13 6l-3.5 1.5L8 11 6.5 7.5 3 6l3.5-1.5L8 1z" fill="#7c3aed" />
            </svg>
            פלטפורמת AI לתהליכים בירוקרטיים
          </div>

          {/* Main headline */}
          <h1 className="text-[42px] md:text-[52px] font-extrabold leading-[1.15] text-[var(--dark)]">
            פחות בירוקרטיה,
            <br />
            <span className="gradient-text-pink">יותר כסף בכיס שלך.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-[17px] leading-[1.7] text-[var(--text-gray)] max-w-[420px]">
            בירוקליק מאחדת את כל הכלים שיעזרו לך לקבל
            <br />
            את מה שמגיע לך- פשוט, חכם ובמינימום מאמץ.
          </p>

          {/* CTA Button */}
          <a
            href="#start"
            className="inline-flex items-center justify-center h-[50px] px-8 rounded-full text-white text-[16px] font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-pink-300 hover:scale-105"
            style={{ background: "var(--pink)" }}
          >
            התחילו עכשיו
          </a>
        </div>

        {/* Left side - Decorative illustration */}
        <div className="flex-1 flex items-center justify-center relative">
          {/* Large circle */}
          <div className="hero-circle flex items-center justify-center">
            {/* Pink arrow / paper plane */}
            <div className="relative w-[320px] h-[320px]">
              <svg viewBox="0 0 400 400" className="w-full h-full" style={{ transform: "scaleX(-1)" }}>
                <polygon
                  points="50,350 350,200 50,50"
                  fill="var(--pink)"
                  opacity="0.95"
                />
              </svg>
            </div>

            {/* Floating icons */}
            {/* Settings/Gear icon - top right */}
            <div className="absolute top-6 right-16 animate-float1">
              <div className="w-[48px] h-[48px] rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-100">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.32 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                </svg>
              </div>
            </div>

            {/* Small yellow triangle - top */}
            <div className="absolute top-20 right-6 animate-float3">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <polygon points="7,0 14,14 0,14" fill="#FCD34D" />
              </svg>
            </div>

            {/* DOCX label - middle left */}
            <div className="absolute bottom-32 left-4 animate-float2">
              <div className="px-4 py-2 bg-white rounded-lg shadow-lg border border-gray-100 text-[13px] font-bold text-[var(--dark)] tracking-wide">
                DOCX
              </div>
            </div>

            {/* Email icon - bottom left */}
            <div className="absolute bottom-12 left-20 animate-float4">
              <div className="w-[44px] h-[44px] rounded-lg bg-white shadow-lg flex items-center justify-center border border-gray-100">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-gray)" strokeWidth="1.5">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 4l-10 8L2 4" />
                </svg>
              </div>
            </div>

            {/* Calendar icon - bottom far left */}
            <div className="absolute -bottom-4 left-4 animate-float1">
              <div className="w-[40px] h-[40px] rounded-lg bg-white shadow-md flex items-center justify-center border border-gray-100">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-gray)" strokeWidth="1.5">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
              </div>
            </div>

            {/* Small pink triangle - bottom */}
            <div className="absolute bottom-2 right-32 animate-float3">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <polygon points="5,0 10,10 0,10" fill="var(--pink)" opacity="0.6" />
              </svg>
            </div>
          </div>

          {/* Outer decorative partial circle */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[580px] h-[580px] rounded-full border border-gray-100 opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}
