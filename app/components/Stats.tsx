"use client";

import React from "react";

const testimonials = [
  {
    id: 1,
    name: "הלני זר",
    role: "הכינה מכתב לתביעה קטנה",
    avatar: "/user1.png",
    quote:
      '"לא ידעתי איך בכלל להתחיל לכתוב מכתב לתביעה קטנה. בירוקליק הנחתה אותי שלב אחרי שלב וייצרה בשבילי מכתב שנראה כאילו נכתב על ידי עורך דין. הרגשתי ביטחון שאני מציגה את הסיפור שלי כמו שצריך."',
    stat: { value: "1.2 מיליון ₪", label: "כסף שנכנס ללקוחות בירוקליק" },
    statSide: "right" as const,
  },
  {
    id: 2,
    name: "דניאל מתיתיהו",
    role: "קיבל החזר מחברת ביטוח",
    avatar: "/user2.png",
    quote:
      '"המערכת של בירוקליק חסכה לי שעות של ניסיונות להבין איך לנסח מכתב לביטוח. הכל היה פשוט — כמה שאלות קצרות ובום, יצא מכתב מוכן לשליחה. לא דמיינתי שזה יהיה כל כך קל!"',
    stat: { value: "4 דקות", label: "זמן ממוצע בתהליך" },
    statSide: "left" as const,
  },
  {
    id: 3,
    name: "סהר מזרחי",
    role: "הכין מכתב לתביעה",
    avatar: "/user3.png",
    quote:
      '"במקום לשבת שעות מול דף ריק, נכנסתי לבירוקליק ותוך דקות היה לי מכתב מסודר וברור להגשה לבית המשפט. אהבתי במיוחד את השפה — מקצועית אבל מובנת. ממש שירות מציל עצבים."',
    stat: { value: "130", label: "תהליכים שהושלמו בהצלחה" },
    statSide: "right" as const,
  },
];

const StatCard: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="bg-gradient-to-br from-[#f0197d] to-[#e91e8c] rounded-2xl px-6 md:px-9 py-6 md:py-8 w-full md:w-[30%] flex-shrink-0 flex flex-col gap-2 shadow-[0_8px_32px_rgba(233,30,140,0.25)] text-center md:text-right mb-6 md:mb-0">
    <span className="text-[36px] md:text-[48px] font-extrabold text-white leading-tight">
      {value}
    </span>
    <span className="text-[14px] md:text-[15px] text-white/90 font-medium">
      {label}
    </span>
  </div>
);

const Avatar: React.FC<{ src: string; name: string }> = ({ src, name }) => (
  <img
    src={src}
    alt={name}
    width={48}
    height={48}
    className="w-12 h-12 rounded-full object-cover shrink-0 border-2 border-gray-100"
  />
);

const TestimonialsSection: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      <section
        dir="rtl"
        className="bg-white py-12 md:py-20 pb-16 md:pb-[100px] overflow-hidden font-['Heebo','Assistant',sans-serif]"
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-12 flex flex-col gap-12 md:gap-[72px]">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 md:${t.statSide === "right" ? "flex-row" : "flex-row-reverse"
                }`}
            >
              {/* Stat */}
              <StatCard value={t.stat.value} label={t.stat.label} />

              {/* Content */}
              <div className="flex-1 flex flex-col gap-4 text-center md:text-right w-full md:w-[70%] items-center md:items-start">
                {/* Quote */}
                <p className="text-[16px] md:text-[18px] text-gray-800 leading-[1.6] md:leading-[1.85] w-full max-w-[620px]">
                  {t.quote}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 mt-2">
                  <Avatar src={t.avatar} name={t.name} />
                  <div className="flex flex-col gap-[2px] text-right">
                    <span className="text-[15px] font-bold text-gray-900">
                      {t.name}
                    </span>
                    <span className="text-[13px] text-gray-400">
                      {t.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;