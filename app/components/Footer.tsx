export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-100">
      {/* CTA Banner */}
      <div
        className="w-full py-16 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #f9f0ff, #fff0f8, #f0f8ff)" }}
      >
        <div className="max-w-[700px] mx-auto px-5 flex flex-col items-center gap-5">
          <h2 className="text-[30px] md:text-[38px] font-extrabold text-[var(--dark)] leading-tight">
            בואו לדרוך אחבם, מאאחם,{" "}
            <span className="gradient-text-pink">פחות חזקה</span>
          </h2>
          <p className="text-[16px] text-[var(--text-gray)] max-w-[420px]">
            הצטרפו לאלפי ישראלים שכבר חוסכים זמן וכסף עם בירוקליק
          </p>
          <a
            href="#start"
            className="inline-flex items-center justify-center h-[50px] px-10 rounded-full text-white text-[16px] font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-pink-200 hover:scale-105"
            style={{ background: "var(--pink)" }}
          >
            התחילו עכשיו
          </a>
        </div>
      </div>

      {/* Footer links */}
      <div className="max-w-[1200px] mx-auto px-5 py-12">
        <div className="flex flex-col md:flex-row gap-10 justify-between">
          {/* Logo & tagline */}
          <div className="flex flex-col gap-3 max-w-[250px]">
            <div className="flex items-center gap-2">
              <div className="w-[30px] h-[30px] rounded-lg flex items-center justify-center" style={{ background: "var(--pink)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
              <span className="text-[18px] font-bold text-[var(--dark)]">בירוקליק</span>
            </div>
            <p className="text-[13px] text-[var(--text-gray)] leading-relaxed">
              פלטפורמת AI לפישוט תהליכים בירוקרטיים לאזרחים ישראלים
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-2">
              {["facebook", "instagram", "linkedin"].map((s) => (
                <a key={s} href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-pink-50 transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-gray)" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div className="flex flex-wrap gap-10">
            <div className="flex flex-col gap-3">
              <h4 className="text-[14px] font-bold text-[var(--dark)] mb-1">ניווט</h4>
              {["ראשי", "הכלים שלנו", "הבלוג שלנו"].map((l) => (
                <a key={l} href="#" className="text-[13px] text-[var(--text-gray)] hover:text-[var(--pink)] transition-colors">{l}</a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-[14px] font-bold text-[var(--dark)] mb-1">משפטי</h4>
              {["תנאי שימוש", "מדיניות פרטיות", "נגישות"].map((l) => (
                <a key={l} href="#" className="text-[13px] text-[var(--text-gray)] hover:text-[var(--pink)] transition-colors">{l}</a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-[14px] font-bold text-[var(--dark)] mb-1">צור קשר</h4>
              {["info@biuroclick.co.il", "שאלות נפוצות"].map((l) => (
                <a key={l} href="#" className="text-[13px] text-[var(--text-gray)] hover:text-[var(--pink)] transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-[var(--text-light)]">
            © 2025 בירוקליק - כל הזכויות שמורות
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[12px] text-[var(--text-light)]">בנה עם ❤️ בישראל</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
