export default function Hero() {
  return (
    <section className="w-full bg-white overflow-hidden relative">
      {/* Pink blob background top right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pink-blob pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-5 pt-14 pb-10 flex flex-col md:flex-row items-center gap-8">

        {/* RIGHT - Text content */}
        <div className="flex-1 flex flex-col gap-6 z-10">
          {/* Badge */}
          <div
            className="inline-flex self-start items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium"
            style={{ background: "rgba(124,58,237,0.07)", color: "#7c3aed" }}
          >
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path d="M8 1l1.5 3.5L13 6l-3.5 1.5L8 11 6.5 7.5 3 6l3.5-1.5L8 1z" fill="#7c3aed" />
            </svg>
            פלטפורמת AI לתהליכים בירוקרטיים
          </div>

          {/* Headline */}
          <h1 className="text-[42px] md:text-[54px] font-extrabold leading-[1.15] text-[var(--dark)]">
            פחות בירוקרטיה,
            <br />
            <span className="gradient-text-pink">יותר כסף בכיס שלך.</span>
          </h1>

          {/* Sub text */}
          <p className="text-[17px] leading-[1.8] text-[var(--text-gray)] max-w-[400px]">
            בירוקליק מאחדת את כל הכלים שיעזרו לך לקבל
            <br />
            את מה שמגיע לך- פשוט, חכם ובמינימום מאמץ.
          </p>

          {/* CTA */}
          <a
            href="#start"
            className="self-start inline-flex items-center justify-center h-[50px] px-9 rounded-full text-white text-[16px] font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-pink-200 hover:scale-105"
            style={{ background: "var(--pink)" }}
          >
            התחילו עכשיו
          </a>
        </div>

        {/* LEFT - Illustration */}
        <div className="flex-1 flex items-center justify-center relative min-h-[420px]">
          {/* Outer rings */}
          <div className="absolute w-[420px] h-[420px] rounded-full border border-gray-100" />
          <div className="absolute w-[520px] h-[520px] rounded-full border border-gray-50" />

          {/* Pink arrow / paper-plane shape */}
          <div className="relative w-[300px] h-[300px] flex items-center justify-center">
            <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-2xl">
              {/* Shadow/depth */}
              <polygon points="80,340 340,200 210,170" fill="#e8187a" opacity="0.5" />
              {/* Main arrow body */}
              <polygon points="60,350 350,200 60,50" fill="#E91E8C" />
              {/* Highlight fold */}
              <polygon points="60,350 350,200 200,225" fill="#c01478" opacity="0.5" />
            </svg>
          </div>

          {/* Floating icon: Settings */}
          <div className="absolute top-8 right-10 animate-float1">
            <div className="w-[50px] h-[50px] rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-100">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.5">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.32 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
              </svg>
            </div>
          </div>

          {/* Small triangle yellow - top */}
          <div className="absolute top-20 right-6 animate-float3">
            <svg width="14" height="14" viewBox="0 0 14 14"><polygon points="7,0 14,14 0,14" fill="#FCD34D" /></svg>
          </div>

          {/* DOCX badge */}
          <div className="absolute bottom-28 left-0 animate-float2">
            <div className="px-4 py-2 bg-white rounded-lg shadow-lg border border-gray-100 text-[13px] font-bold text-[var(--dark)]">DOCX</div>
          </div>

          {/* Email icon */}
          <div className="absolute bottom-12 left-14 animate-float4">
            <div className="w-[46px] h-[46px] rounded-lg bg-white shadow-lg flex items-center justify-center border border-gray-100">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-gray)" strokeWidth="1.5">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 4l-10 8L2 4" />
              </svg>
            </div>
          </div>

          {/* Calendar icon */}
          <div className="absolute -bottom-2 left-2 animate-float1">
            <div className="w-[42px] h-[42px] rounded-lg bg-white shadow-md flex items-center justify-center border border-gray-100">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-gray)" strokeWidth="1.5">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
            </div>
          </div>

          {/* Small pink triangle */}
          <div className="absolute bottom-4 right-28 animate-float3">
            <svg width="10" height="10" viewBox="0 0 10 10"><polygon points="5,0 10,10 0,10" fill="var(--pink)" opacity="0.5" /></svg>
          </div>
        </div>
      </div>
    </section>
  );
}
