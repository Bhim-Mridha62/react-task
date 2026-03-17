"use client";
import { useRef, useEffect, useState } from "react";

export default function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "מילוי פרטים",
      desc: "הזינו את פרטי התביעה ותארו את המקרה בליווי בוט AI חכם שמנחה אתכם בכל שלב",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#E91E8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
      ),
      active: true,
    },
    {
      num: "2",
      title: "צירוף מסמכים",
      desc: "העלו את המסמכים הרלוונטיים בקלות, המערכת שלנו תסרוק ותחלץ את המידע החשוב",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--dark)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
          <line x1="12" y1="18" x2="12" y2="12" />
          <line x1="9" y1="15" x2="15" y2="15" />
        </svg>
      ),
      active: false,
    },
    {
      num: "3",
      title: "הגשה וסיום",
      desc: "סקירה סופית ותשלום מאובטח והגשה מקוונת של התביעה",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--dark)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
        </svg>
      ),
      active: false,
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-5 flex flex-col items-center">
        {/* Title */}
        <h2 className="text-[38px] md:text-[46px] font-medium text-[var(--dark)] mb-16 text-center">
          איך זה עובד?{" "}
          <span className="text-[var(--pink)] font-bold">פשוט.</span>
        </h2>

        <div className="w-full flex flex-col-reverse md:flex-row gap-16 items-center justify-between">
          {/* Steps list */}
          <div className="flex-1 flex flex-col gap-10">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-5 group">
                {/* Icon box */}
                <div
                  className="w-[58px] h-[58px] rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:shadow-md"
                  style={{
                    border: step.active ? "2px solid var(--pink)" : "1px solid #e5e7eb",
                    background: step.active ? "rgba(233,30,140,0.04)" : "white",
                    boxShadow: step.active ? "0 4px 16px rgba(233,30,140,0.12)" : "0 2px 8px rgba(0,0,0,0.04)"
                  }}
                >
                  {step.icon}
                </div>

                {/* Text */}
                <div className="flex flex-col pt-1">
                  <span className="text-[13px] font-medium text-[var(--pink-light)] mb-1">שלב {step.num}</span>
                  <h3 className="text-[19px] font-bold text-[var(--dark)] mb-1.5">{step.title}</h3>
                  <p className="text-[15px] text-[var(--text-gray)] leading-relaxed max-w-[360px]">{step.desc}</p>
                  {i === 2 && (
                    <a
                      href="#start"
                      className="mt-6 self-start inline-flex items-center justify-center h-[42px] px-8 rounded-full text-white text-[14px] font-semibold hover:opacity-90 transition-all"
                      style={{ background: "var(--pink)" }}
                    >
                      התחילו עכשיו
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Woman image or decorative area */}
          <div className="flex-1 flex justify-center relative">
            {/* Outer rings */}
            <div className="w-[300px] h-[300px] md:w-[440px] md:h-[440px] rounded-full border border-gray-100 relative flex items-center justify-center">
              <div className="absolute inset-[-30px] rounded-full border border-gray-50" />
              <div className="absolute inset-[-60px] rounded-full border border-gray-50 opacity-60" />

              {/* Profile circular image placeholder */}
              <div className="w-[260px] h-[260px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden bg-gray-100 border-4 border-white shadow-xl flex items-center justify-center">
                {/* Decorative pink/woman shape fallback */}
                <div className="w-full h-full bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center">
                  <svg width="160" height="200" viewBox="0 0 200 240" fill="none">
                    {/* Simple woman silhouette */}
                    <ellipse cx="100" cy="70" rx="45" ry="50" fill="#f3d1e3" />
                    <ellipse cx="100" cy="70" rx="30" ry="35" fill="#fcd9e8" />
                    <path d="M55 120 Q100 100 145 120 L155 200 L45 200 Z" fill="#E91E8C" opacity="0.7" />
                    <ellipse cx="78" cy="68" rx="5" ry="6" fill="#c86a9a" />
                    <ellipse cx="122" cy="68" rx="5" ry="6" fill="#c86a9a" />
                    <path d="M88 90 Q100 98 112 90" stroke="#c86a9a" strokeWidth="2" fill="none" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              {/* Stat badge - 1 */}
              <div className="absolute top-4 right-0 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-2 border border-gray-100">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(233,30,140,0.1)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--pink)" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <div className="text-[12px] font-bold text-[var(--dark)]">בדיקה חינם</div>
                  <div className="text-[10px] text-[var(--text-gray)]">ללא התחייבות</div>
                </div>
              </div>

              {/* Stat badge - 2 */}
              <div className="absolute bottom-10 left-0 bg-white rounded-xl shadow-lg px-4 py-3 border border-gray-100">
                <div className="text-[18px] font-extrabold text-[var(--dark)]">1.2M+</div>
                <div className="text-[11px] text-[var(--text-gray)]">שקל הוחזר</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
