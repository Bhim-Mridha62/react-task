export default function OurTools() {
  const tools = [
    {
      label: "חינם",
      labelBg: "#f0f4ff",
      labelColor: "#4f46e5",
      title: "בדיקת החזר כסף לשכירים",
      desc: "בדיקה חכמה של כל ההחזרים והזכויות שמגיעים לכם.",
      points: ["מסמך מיידי", "מבוסס על מידע משתמש", "שאלון קצר", "3-5 דקות ויש לכם מסמך"],
    },
    {
      label: "חינם",
      labelBg: "#f0f4ff",
      labelColor: "#4f46e5",
      title: "תהליך הגשת תביעה קטנה",
      desc: "בדיקה חכמה של כל ההחזרים והזכויות שמגיעים לכם.",
      points: ["מסמך מיידי", "מבוסס על מידע משתמש", "שאלון קצר", "3-5 דקות ויש לכם מסמך"],
    },
    {
      label: '50 ש"ח',
      labelBg: "#fff0f5",
      labelColor: "#db2777",
      title: "הכנת מכתב לבנקים",
      desc: "בדיקה חכמה של כל ההחזרים והזכויות שמגיעים לכם.",
      points: ["מסמך מיידי", "מבוסס על מידע משתמש", "שאלון קצר", "3-5 דקות ויש לכם מסמך"],
    },
    {
      label: "חינם",
      labelBg: "#f0f4ff",
      labelColor: "#4f46e5",
      title: "בדיקת החזר מחברת הביטוח",
      desc: "בדיקה חכמה של כל ההחזרים והזכויות שמגיעים לכם.",
      points: ["מסמך מיידי", "מבוסס על מידע משתמש", "שאלון קצר", "3-5 דקות ויש לכם מסמך"],
    },
  ];

  return (
    <section id="tools" className="w-full bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex flex-col md:flex-row gap-12 items-start">

          {/* Right side text (sticky) */}
          <div className="w-full md:w-[32%] md:sticky md:top-24">
            <h2 className="text-[42px] md:text-[52px] font-extrabold leading-tight mb-5">
              <span className="gradient-text-green font-normal">הכלים</span>{" "}
              <span className="gradient-text-pink">שלנו</span>
            </h2>
            <p className="text-[16px] text-[var(--text-gray)] leading-relaxed max-w-[280px]">
              הכלים שלנו מייצרים עבורכם את כל מה שאתם צריכים בקלות ומהירות, כלים נוספים יכנסו בהמשך
            </p>
          </div>

          {/* Left side cards */}
          <div className="w-full md:w-[68%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {tools.map((tool, i) => (
                <ToolCard key={i} tool={tool} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-10">
              <div className="flex items-center gap-4 bg-[#23242a] text-white px-5 py-2.5 rounded-full text-sm font-medium">
                <button className="hover:text-[var(--pink)] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <span className="font-mono tracking-wider">2 / 3</span>
                <button className="hover:text-[var(--pink)] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ToolCard({ tool }: { tool: any }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 p-6 flex flex-col gap-4 min-h-[340px]">
      {/* Label */}
      <span
        className="self-start text-[12px] font-bold px-3 py-1 rounded-full"
        style={{ background: tool.labelBg, color: tool.labelColor }}
      >
        {tool.label}
      </span>

      {/* Title */}
      <h3 className="text-[18px] font-bold text-[var(--dark)] leading-snug">{tool.title}</h3>

      {/* Description */}
      <p className="text-[14px] text-[var(--text-gray)] leading-relaxed">{tool.desc}</p>

      {/* Bullet points */}
      <ul className="flex flex-col gap-1.5 text-[13px] text-[var(--dark)] mt-auto">
        {tool.points.map((p: string, i: number) => (
          <li key={i} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--pink)] shrink-0" />
            {p}
          </li>
        ))}
      </ul>

      {/* CTA link */}
      <a
        href="#start"
        className="mt-2 flex items-center gap-2 text-[14px] font-bold text-[var(--pink)] hover:text-[var(--pink-light)] transition-colors group"
      >
        <span className="group-hover:-translate-x-1 transition-transform">←</span>
        התחילו עכשיו
      </a>
    </div>
  );
}
