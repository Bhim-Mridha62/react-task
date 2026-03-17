import Image from "next/image";

// ── Replace with your actual SVG imports ──────────────────────────────────────
// import FillIcon     from "@/assets/icons/fill.svg";
// import DocumentIcon from "@/assets/icons/document.svg";
// import SubmitIcon   from "@/assets/icons/submit.svg";
// import HeroImage    from "@/assets/images/hero.png";
// ─────────────────────────────────────────────────────────────────────────────

const steps = [
  {
    stepLabel: "שלב 1",
    title: "מילוי פרטים",
    description:
      "הזינו את פרטי התביעה ותתארו את המקרה בליווי בוט AI חכם שמנחה אתכם בכל שלב",
    // Replace the JSX below with: <FillIcon className="w-8 h-8 text-pink-600" />
    icon: (
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="5"
          y="3"
          width="18"
          height="24"
          rx="2.5"
          stroke="#E91E8C"
          strokeWidth="1.8"
        />
        <path
          d="M9 10h10M9 14h10M9 18h6"
          stroke="#E91E8C"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M20 24l2.5 2.5L27 22"
          stroke="#E91E8C"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    stepLabel: "שלב 2",
    title: "צירוף מסמכים",
    description: "העלו מסמכים ותמונות בקלות ובמהירות",
    // Replace with: <DocumentIcon className="w-8 h-8 text-pink-600" />
    icon: (
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="7"
          y="3"
          width="16"
          height="22"
          rx="2.5"
          stroke="#E91E8C"
          strokeWidth="1.8"
        />
        <path
          d="M15 9v8M11 13h8"
          stroke="#E91E8C"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    stepLabel: "שלב 3",
    title: "הגשה וסיום",
    description: "סקירה סופית ותשלום מאובטח והגשה מקוונת של התביעה",
    // Replace with: <SubmitIcon className="w-8 h-8 text-pink-600" />
    icon: (
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="5"
          y="3"
          width="18"
          height="24"
          rx="2.5"
          stroke="#E91E8C"
          strokeWidth="1.8"
        />
        <path
          d="M9 10h10M9 14h10M9 18h10"
          stroke="#E91E8C"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="25" cy="26" r="6" fill="#E91E8C" />
        <path
          d="M22.5 26l2 2 3-3"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section
      dir="rtl"
      className="w-full bg-white py-16 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-5xl mx-auto flex flex-row-reverse md:flex-row items-center gap-12 md:gap-20">
        <div className="flex-1 flex flex-col gap-8 text-right">

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 leading-tight">
            איך זה עובד?{" "}
            <span
              className="font-extrabold"
              style={{
                background:
                  "linear-gradient(90deg, #E91E8C 0%, #9C27B0 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              פשוט.
            </span>
          </h2>

          {/* Step list */}
          <div className="flex flex-col gap-8">
            {steps.map((step) => (
              <div key={step.stepLabel} className="flex items-start gap-4">
                {/* Text */}
                <div className="flex-shrink-0 mt-0.5">{step.icon}</div>
                <div className="flex-1">
                  <p
                    className="text-xs font-semibold tracking-wide mb-0.5"
                    style={{ color: "#E91E8C" }}
                  >
                    {step.stepLabel}
                  </p>
                  <h3 className="text-base font-bold text-gray-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div>
            <button
              className="px-8 py-3 rounded-[8px] text-white font-semibold text-base shadow-md
                         transition-transform duration-150 hover:scale-105 active:scale-95"
              style={{
                background:
                  "linear-gradient(90deg, #E91E8C 0%, #C2185B 100%)",
              }}
            >
              התחילו עכשיו
            </button>
          </div>
        </div>
        {/* ── Left column: circular image ─────────────────────────────────── */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <div className="relative w-72 h-72 md:w-[380px] md:h-[380px]">
            {/* Decorative concentric rings */}
            <div className="absolute inset-0 rounded-full border border-gray-200" />
            <div className="absolute inset-5 rounded-full border border-gray-100" />

            {/* Photo circle */}
            <div className="absolute inset-10 rounded-full overflow-hidden bg-gray-100 shadow-lg">
              <Image
                src="/laptup-user.jpg"
                alt="אישה עם מחשב נייד"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}