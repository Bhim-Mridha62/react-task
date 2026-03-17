export default function OurTools() {
  const tools = [
    {
      label: "חינם",
      labelColor: "bg-[#f0f4ff] text-[#4f46e5]",
      title: "בדיקת החזר כסף לשכירים",
      desc: "בדיקה חכמה של כל ההחזרים והזכויות שמגיעים לכם.",
      points: "מסמך מיידי - מבוסס על מידע משתמש - שאלון קצר - 3-5 דקות ויש לכם מסמך",
    },
    {
      label: "חינם",
      labelColor: "bg-[#f0f4ff] text-[#4f46e5]",
      title: "תהליך הגשת תביעה קטנה",
      desc: "בדיקה חכמה של כל ההחזרים והזכויות שמגיעים לכם.",
      points: "מסמך מיידי - מבוסס על מידע משתמש - שאלון קצר - 3-5 דקות ויש לכם מסמך",
    },
    {
      label: "50 ש\"ח",
      labelColor: "bg-[#fff0f5] text-[#db2777]",
      title: "הכנת מכתב לבנקים",
      desc: "בדיקה חכמה של כל ההחזרים והזכויות שמגיעים לכם.",
      points: "מסמך מיידי - מבוסס על מידע משתמש - שאלון קצר - 3-5 דקות ויש לכם מסמך",
    },
    {
      label: "חינם",
      labelColor: "bg-[#f0f4ff] text-[#4f46e5]",
      title: "בדיקת החזר מחברת הביטוח",
      desc: "בדיקה חכמה של כל ההחזרים והזכויות שמגיעים לכם.",
      points: "מסמך מיידי - מבוסס על מידע משתמש - שאלון קצר - 3-5 דקות ויש לכם מסמך",
    },
  ];

  return (
    <section id="tools" className="w-full bg-white py-24 pb-32">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Title & Description Structure matching the design - Content on right (RTL), Grid on left */}
        <div className="flex flex-col md:flex-row gap-16 items-start relative">
          
          {/* Main Title Area (Right Side) */}
          <div className="w-full md:w-[35%] pt-10 sticky top-24">
            <h2 className="text-[44px] md:text-[56px] font-extrabold mb-6 leading-tight">
              <span className="gradient-text-green font-normal">הכלים</span>{" "}
              <span className="gradient-text-pink">שלנו</span>
            </h2>
            <p className="text-[17px] text-[var(--text-gray)] leading-relaxed max-w-[320px]">
              הכלים שלנו מייצרים עבורכם את כל מה שאתם צריכים בקלות ומהירות, כלים נוספים יכנסו בהמשך
            </p>
          </div>

          {/* Cards Grid (Left Side) */}
          <div className="w-full md:w-[65%]">
            {/* Using a custom masonry/honeycomb feeling layout */}
            <div className="relative">
              {/* Row 1 - 2 cards */}
              <div className="flex flex-col sm:flex-row gap-8 justify-end mb-8">
                {tools.slice(2, 4).reverse().map((tool, index) => (
                  <ToolCard key={index} tool={tool} />
                ))}
              </div>
              
              {/* Row 2 - 3 cards (with coming soon card) */}
              <div className="flex flex-col sm:flex-row gap-8 justify-end -mt-16 sm:-mt-20 sm:ml-12 relative z-10">
                <div className="tool-card w-full sm:w-[300px] bg-gray-50/50 flex flex-col items-center justify-center p-8 text-center border-dashed border-2 min-h-[380px]">
                  <h3 className="text-[20px] font-bold text-[var(--dark)] mb-2 mt-auto">
                    בקרוב עוד כלים חכמים שיעזרו לכם
                  </h3>
                  <div className="w-12 h-1 bg-[var(--pink)]/20 rounded-full mt-auto Blur"></div>
                </div>

                {tools.slice(0, 2).reverse().map((tool, index) => (
                  <ToolCard key={index + 2} tool={tool} />
                ))}
              </div>

              {/* Pagination UI matching design */}
              <div className="flex justify-center mt-12 w-full max-w-[650px] mr-auto">
                <div className="flex items-center gap-4 bg-[#2A2B31] text-white px-5 py-2.5 rounded-full text-sm font-medium">
                  <button className="hover:text-[var(--pink)] transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  <span className="px-2 font-mono tracking-wider">2 / 3</span>
                  <button className="hover:text-[var(--pink)] transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Sub-component for individual tool cards
function ToolCard({ tool }: { tool: any }) {
  // Hexagon styling wrapper for the card shape
  return (
    <div className="relative w-full sm:w-[300px] px-2 py-4">
      {/* SVG hexagon shape background outline to mimic the unique design border */}
      <div className="absolute inset-0 pointer-events-none">
        <svg viewBox="0 0 300 400" className="w-full h-full drop-shadow-sm" preserveAspectRatio="none">
          {/* Approximating the hexagon/gem shape from the design */}
          <polygon points="150,0 300,50 300,350 150,400 0,350 0,50" fill="white" />
        </svg>
      </div>

      {/* Card Content container positioned over the shape */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-10 h-full min-h-[360px] max-w-[280px] mx-auto">
        {/* Label badge */}
        <div className={`px-4 py-1.5 rounded-full text-[12px] font-bold mb-6 ${tool.labelColor}`}>
          {tool.label}
        </div>

        {/* Title */}
        <h3 className="text-[20px] font-bold text-[var(--dark)] mb-3 leading-tight min-h-[56px] flex items-center justify-center">
          {tool.title}
        </h3>

        {/* Short description */}
        <p className="text-[14px] text-[var(--text-gray)] mb-6">
          {tool.desc}
        </p>

        {/* Details text (small bullet points style) */}
        <p className="text-[13px] text-[var(--dark)] mb-8 leading-relaxed px-2">
          {tool.points.split(' - ').map((point: string, i: number) => (
            <span key={i}>
              {point}
              {i < tool.points.split(' - ').length - 1 && ' - '}
              {(i === 1) && <br/>}
            </span>
          ))}
        </p>

        {/* Action Link positioned at bottom */}
        <a
          href="#start"
          className="mt-auto group flex items-center justify-center gap-2 text-[15px] font-bold text-[var(--pink)] hover:text-[var(--pink-light)] transition-colors"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
          התחילו עכשיו
        </a>
      </div>
    </div>
  );
}
