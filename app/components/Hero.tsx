import { HeroIcon } from "../utils/svg";
import FloatingIcons from "./FloatingIcons";

export default function Hero() {
  return (
    <section className="w-full bg-white overflow-hidden relative md:pb-28 pb-10 ">
      {/* Pink blob background top right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pink-blob pointer-events-none" />

      <div className="mx-auto px-5 pt-14 pb-10 flex flex-col md:flex-row items-center gap-8 md:px-20 px-4">

        {/* RIGHT - Text content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-right gap-6 z-10 mt-8 md:mt-0 order-2 md:order-1">          {/* Badge */}
          <div
            className="inline-flex self-center md:self-start items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-[12px] md:text-[13px] font-medium"
            style={{ background: "rgba(124,58,237,0.07)", color: "#7c3aed" }}
          >
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path d="M8 1l1.5 3.5L13 6l-3.5 1.5L8 11 6.5 7.5 3 6l3.5-1.5L8 1z" fill="#7c3aed" />
            </svg>
            פלטפורמת AI לתהליכים בירוקרטיים
          </div>

          {/* Headline */}
          <h1 className="text-[36px] md:text-[54px] font-extrabold leading-[1.15] text-[var(--dark)]">
            פחות בירוקרטיה,
            <br className="hidden md:block" />
            <span className="gradient-text-pink"> יותר כסף בכיס שלך.</span>
          </h1>

          {/* Sub text */}
          <p className="text-[16px] md:text-[17px] leading-[1.6] md:leading-[1.8] text-[var(--text-gray)] max-w-[400px]">
            בירוקליק מאחדת את כל הכלים שיעזרו לך לקבל
            <br className="hidden md:block" />
            את מה שמגיע לך- פשוט, חכם ובמינימום מאמץ.
          </p>

          {/* CTA */}
          <a
            href="#start"
            className="self-center md:self-start inline-flex items-center justify-center h-[46px] md:h-[50px] px-8 md:px-9 w-full md:w-auto rounded-xl md:rounded-[8px] text-white text-[16px] font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-pink-200 hover:scale-105"
            style={{ background: "var(--pink)" }}
          >
            התחילו עכשיו
          </a>
        </div>

        {/* LEFT - Illustration */}
        {/* Illustration */}
        <div className="flex-1 relative flex justify-center md:justify-end order-1 md:order-2">

          <div
            className="
      relative 
      w-[320px] h-[320px] 
      sm:w-[400px] sm:h-[400px]
      md:w-[700px] md:h-[700px]

      md:absolute 
      md:top-[-250px] 
      md:right-[-100px]
    "
          >
            <HeroIcon />
            <FloatingIcons />
          </div>

        </div>
      </div>
    </section >
  );
}
