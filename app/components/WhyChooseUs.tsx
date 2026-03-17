export default function WhyChooseUs() {
  const features = [
    {
      title: "פשטות",
      desc: "הופכים תהליכים בירוקרטיים מסובכים לקלים וברורים.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M16 12l-4 4-4-4" />
          <path d="M12 8v8" />
        </svg>
      ),
    },
    {
      title: "חיסכון",
      desc: "בזמן, באנרגיה ובכסף שמגיע לכם.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      title: "טכנולוגיה",
      desc: "בינה מלאכותית שעובדת בשבילכם, לא להפך.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
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
    <section className="w-full bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
        {/* Title */}
        <h2 className="text-[40px] md:text-[48px] font-medium text-[var(--dark)] mb-16">
          כל הסיבות <span className="gradient-text-green font-bold">לבחור בנו</span>
        </h2>

        {/* Features Grid */}
        <div className="w-full grid justify-center grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-5xl">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Pink Icon Box */}
              <div
                className="w-[80px] h-[80px] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-pink-100"
                style={{ background: "var(--pink)" }}
              >
                {feature.icon}
              </div>
              
              {/* Text content */}
              <h3 className="text-[22px] font-bold text-[var(--dark)] mb-3">
                {feature.title}
              </h3>
              <p className="text-[16px] text-[var(--text-gray)] leading-relaxed max-w-[260px]">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
