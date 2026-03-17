export default function Stats() {
  return (
    <section className="w-full py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #fef0f8 0%, #f8f4ff 50%, #f0f8ff 100%)" }}
      />

      <div className="relative max-w-[1200px] mx-auto px-5">
        {/* Three stat blocks */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">

          {/* Block 1 - 1.2 Million (pink) */}
          <div
            className="flex-1 rounded-3xl p-8 flex flex-col gap-3 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #E91E8C, #FF6BB5)" }}
          >
            {/* Decorative circle */}
            <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-white opacity-10" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white opacity-10" />

            <div className="flex items-center gap-3 relative z-10">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <span className="text-white/80 text-[14px] font-medium">כסף הוחזר למשתמשים</span>
            </div>
            <div className="text-[52px] font-extrabold text-white leading-none relative z-10">
              1.2 <span className="text-[32px]">מיליון</span>
            </div>
            <p className="text-white/70 text-[13px] relative z-10">
              ₪ הוחזרו בהצלחה לאלפי משתמשים שלנו
            </p>
          </div>

          {/* Block 2 - 4 minutes (dark) */}
          <div
            className="flex-1 rounded-3xl p-8 flex flex-col gap-3 relative overflow-hidden"
            style={{ background: "var(--dark)" }}
          >
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white opacity-5" />

            <div className="flex items-center gap-3 relative z-10">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <span className="text-white/60 text-[14px] font-medium">זמן ממוצע להגשה</span>
            </div>
            <div className="text-[52px] font-extrabold text-white leading-none relative z-10">
              4 <span className="text-[32px]">דקות</span>
            </div>
            <p className="text-white/50 text-[13px] relative z-10">
              תהליך מהיר, פשוט ונוח מכל מקום
            </p>
          </div>

          {/* Block 3 - 130 (pink light) */}
          <div
            className="flex-1 rounded-3xl p-8 flex flex-col gap-3 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #FF6BB5, #E91E8C)" }}
          >
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white opacity-10" />

            <div className="flex items-center gap-3 relative z-10">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <span className="text-white/80 text-[14px] font-medium">כלים וטפסים</span>
            </div>
            <div className="text-[52px] font-extrabold text-white leading-none relative z-10">
              130+
            </div>
            <p className="text-white/70 text-[13px] relative z-10">
              כלים שיעזרו לכם בכל תהליך בירוקרטי
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
