import Image from "next/image";

export default function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "מילוי פרטים",
      desc: "הזינו את פרטי התביעה ותארו את המקרה בליווי בוט AI חכם שמנחה אתכם בכל שלב",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E91E8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
      ),
    },
    {
      num: "2",
      title: "צירוף מסמכים",
      desc: "העלו את המסמכים הרלוונטיים בקלות, המערכת שלנו תסרוק ותחלץ את המידע החשוב",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a1a2e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
          <line x1="12" y1="18" x2="12" y2="12" />
          <line x1="9" y1="15" x2="15" y2="15" />
        </svg>
      ),
    },
    {
      num: "3",
      title: "הגשה וסיום",
      desc: "סקירה סופית ותשלום מאובטח והגשה מקוונת של התביעה",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a1a2e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
          <path d="M16 13H8" />
          <path d="M16 17H8" />
          <path d="M10 9H8" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center">
        {/* Title */}
        <h2 className="text-[40px] md:text-[48px] font-medium text-[var(--dark)] mb-20 text-center">
          איך זה עובד? <span className="text-[var(--pink)] font-bold">פשוט.</span>
        </h2>

        <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-16 md:gap-8">
          {/* Right side - Steps (RTL) */}
          <div className="flex-1 flex flex-col gap-12">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-6 group">
                {/* Icon box */}
                <div className="w-[60px] h-[60px] rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0 group-hover:shadow-md transition-shadow relative">
                  {step.icon}
                </div>
                
                {/* Text content */}
                <div className="flex flex-col pt-1">
                  <div className="text-[var(--pink-light)] text-[14px] font-medium mb-1">
                    שלב {step.num}
                  </div>
                  <h3 className="text-[20px] font-bold text-[var(--dark)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[15px] text-[var(--text-gray)] leading-relaxed max-w-[360px]">
                    {step.desc}
                  </p>

                  {/* Optional CTA text for step 3 */}
                  {index === 2 && (
                    <div className="mt-8">
                      <a
                        href="#start"
                        className="inline-flex items-center justify-center h-[42px] px-8 rounded-full text-white text-[15px] font-semibold transition-transform hover:scale-105"
                        style={{ background: "var(--pink)" }}
                      >
                        התחילו עכשיו
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Left side - Circular Image Image */}
          <div className="flex-1 flex justify-center md:justify-end relative">
            <div className="hero-circle flex items-center justify-center w-[300px] h-[300px] md:w-[480px] md:h-[480px]">
              <div className="w-[280px] h-[280px] md:w-[440px] md:h-[440px] rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10">
                <Image
                  src="/woman.png"
                  alt="אישה עובדת על מחשב נייד"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Decorative outer rings */}
              <div className="absolute inset-0 rounded-full border border-gray-100" />
              <div className="absolute inset-[-40px] rounded-full border border-gray-50" />
              <div className="absolute inset-[-80px] rounded-full border border-gray-50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
