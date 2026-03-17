"use client";
import { useState } from "react";

const faqs = [
  {
    q: "כמה זמן לוקח התהליך?",
    a: "ממוצע של 4 דקות בלבד. כל התהליך מתבצע אונליין, ללא צורך בפגישות פנים אל פנים.",
  },
  {
    q: "האם השירות בטוח?",
    a: "כן, אנו משתמשים בהצפנה מתקדמת ועומדים בכל תקנות אבטחת המידע הישראליות.",
  },
  {
    q: "האם ניתן לקבל החזר?",
    a: "בהחלט! אם אינכם מרוצים מהשירות, ניתן לדרוש החזר מלא בתוך 14 יום.",
  },
  {
    q: "אילו מסמכים נדרשים?",
    a: "תלוי בסוג הבקשה. הבוט שלנו ינחה אתכם צעד אחר צעד ויספר לכם בדיוק מה נדרש.",
  },
  {
    q: "האם ניתן להגיש תביעה ללא עורך דין?",
    a: "כן! הפלטפורמה שלנו מיועדת בדיוק לזה - לאפשר לכם לנהל תהליכים בירוקרטיים ללא עזרת עורך דין.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="w-full bg-white py-20">
      <div className="max-w-[800px] mx-auto px-5">
        {/* Title */}
        <h2 className="text-[36px] md:text-[44px] font-medium text-[var(--dark)] mb-12 text-center">
          שאלות <span className="text-[var(--pink)] font-bold">שאלי יו לכם</span>
        </h2>

        {/* FAQ Items */}
        <div className="flex flex-col divide-y divide-gray-100">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item py-5">
              <button
                className="w-full flex items-center justify-between gap-4 text-right"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-[16px] font-semibold text-[var(--dark)] flex-1">
                  {faq.q}
                </span>
                <div
                  className="w-[32px] h-[32px] rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
                  style={{
                    background: open === i ? "var(--pink)" : "rgba(233,30,140,0.08)",
                    color: open === i ? "white" : "var(--pink)",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    style={{ transform: open === i ? "rotate(45deg)" : "none", transition: "transform 0.3s" }}
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
              </button>

              {open === i && (
                <div className="mt-4 text-[15px] text-[var(--text-gray)] leading-relaxed pr-1 animate-fade-in-up">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
