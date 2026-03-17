export default function WhyChooseUs() {
  const features = [
    {
      title: "פשטות",
      desc: "הופכים תהליכים בירוקרטיים מסובכים לקלים וברורים.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      title: "חיסכון",
      desc: "בזמן, באנרגיה ובכסף שמגיע לכם.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      title: "טכנולוגיה",
      desc: "בינה מלאכותית שעובדת בשבילכם, לא להפך.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <line x1="9" y1="1" x2="9" y2="4" />
          <line x1="15" y1="1" x2="15" y2="4" />
          <line x1="9" y1="20" x2="9" y2="23" />
          <line x1="15" y1="20" x2="15" y2="23" />
          <line x1="20" y1="9" x2="23" y2="9" />
          <line x1="20" y1="14" x2="23" y2="14" />
          <line x1="1" y1="9" x2="4" y2="9" />
          <line x1="1" y1="14" x2="4" y2="14" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-5 flex flex-col items-center text-center">
        {/* Title */}
        <h2 className="text-[32px] md:text-[46px] font-medium text-[var(--dark)] mb-10 md:mb-16">
          כל הסיבות{" "}
          <span className="gradient-text-green font-bold">לבחור בנו</span>
        </h2>

        {/* Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-4xl justify-center">
          {features.map((f, i) => (
             <div key={i} className="flex flex-col items-center group bg-white md:bg-transparent rounded-2xl md:rounded-none p-6 md:p-0 shadow-sm border border-gray-100 md:border-none md:shadow-none hover:shadow-md transition-shadow">
               {/* Pink icon square */}
               <div
                 className="w-[64px] h-[64px] md:w-[72px] md:h-[72px] rounded-2xl flex items-center justify-center mb-4 md:mb-5 shadow-md shadow-pink-100 group-hover:shadow-pink-200 transition-shadow duration-300"
                 style={{ background: "var(--pink)" }}
               >
                 {f.icon}
               </div>
               <h3 className="text-[18px] md:text-[20px] font-bold text-[var(--dark)] mb-2">{f.title}</h3>
               <p className="text-[14px] md:text-[15px] text-[var(--text-gray)] leading-relaxed max-w-[240px]">{f.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
