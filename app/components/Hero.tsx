import { HeroIcon } from "../utils/svg";

export default function Hero() {
  return (
    <section className="w-full bg-white overflow-hidden relative">
      {/* Pink blob background top right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pink-blob pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-5 pt-14 pb-10 flex flex-col md:flex-row items-center gap-8">

        {/* RIGHT - Text content */}
        <div className="flex-1 flex flex-col gap-6 z-10">
          {/* Badge */}
          <div
            className="inline-flex self-start items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium"
            style={{ background: "rgba(124,58,237,0.07)", color: "#7c3aed" }}
          >
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path d="M8 1l1.5 3.5L13 6l-3.5 1.5L8 11 6.5 7.5 3 6l3.5-1.5L8 1z" fill="#7c3aed" />
            </svg>
            פלטפורמת AI לתהליכים בירוקרטיים
          </div>

          {/* Headline */}
          <h1 className="text-[42px] md:text-[54px] font-extrabold leading-[1.15] text-[var(--dark)]">
            פחות בירוקרטיה,
            <br />
            <span className="gradient-text-pink">יותר כסף בכיס שלך.</span>
          </h1>

          {/* Sub text */}
          <p className="text-[17px] leading-[1.8] text-[var(--text-gray)] max-w-[400px]">
            בירוקליק מאחדת את כל הכלים שיעזרו לך לקבל
            <br />
            את מה שמגיע לך- פשוט, חכם ובמינימום מאמץ.
          </p>

          {/* CTA */}
          <a
            href="#start"
            className="self-start inline-flex items-center justify-center h-[50px] px-9 rounded-[8px] text-white text-[16px] font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-pink-200 hover:scale-105"
            style={{ background: "var(--pink)" }}
          >
            התחילו עכשיו
          </a>
        </div>

        {/* LEFT - Illustration */}
        <div className="relative">
          <div className="absolute top-0 right-0 translate-x-[80%] -translate-y-[40%]">
            <HeroIcon />
          </div>
        </div>
      </div>
    </section >
  );
}
