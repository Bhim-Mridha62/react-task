export default function Footer() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <section
        dir="rtl"
        className="w-full py-16 px-4 bg-white font-['Heebo','Assistant',sans-serif]"
      >
        {/* Outer card */}
        <div className="relative mx-auto max-w-[1100px] rounded-[28px] px-4 md:px-[72px] py-[64px] overflow-hidden bg-[#FDF9FC]">

          {/* Circles */}
          <div className="pointer-events-none absolute top-1/2 left-1/2 w-[480px] h-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(220,80,120,0.15)]" />
          <div className="pointer-events-none absolute top-1/2 left-1/2 w-[340px] h-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(220,80,120,0.12)]" />
          <div className="pointer-events-none absolute top-1/2 left-1/2 w-[210px] h-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(220,80,120,0.1)]" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center gap-6">

            {/* Heading */}
            <h2 className="text-[42px] font-black text-[#1a1040] leading-[1.35] max-w-[640px]">
              נשמח לדבר אתכם, השאירו
              <br />
              פרטים ונחזור אליכם בהקדם.
            </h2>

            {/* Subtitle */}
            <p className="text-[16px] text-[#6b6b8a] leading-[1.8] max-w-[480px]">
              אנחנו מייצרים עבורכם את כל הטפסים בעזרת מערכת חכמה וחדשנית
              <br />
              וחוסכים לכם את כל הכאב ראש והבירוקטריה
            </p>

            {/* Form */}
            <div className="flex items-center gap-3 w-full max-w-[680px] mt-2">

              {/* Button */}
              <button
                type="submit"
                className="h-[52px] px-9 rounded-xl bg-gradient-to-br from-[#f0197d] to-[#e91e8c] text-white text-[16px] font-bold whitespace-nowrap flex-shrink-0 shadow-[0_4px_18px_rgba(233,30,140,0.3)] transition-opacity hover:opacity-90"
              >
                שליחה
              </button>

              {/* Phone */}
              <input
                type="tel"
                placeholder="טלפון"
                className="flex-1 h-[52px] rounded-xl border border-gray-200 bg-white px-4 text-[15px] text-gray-700 text-right outline-none focus:border-pink-600"
              />

              {/* Name */}
              <input
                type="text"
                placeholder="שם"
                className="flex-1 h-[52px] rounded-xl border border-gray-200 bg-white px-4 text-[15px] text-gray-700 text-right outline-none focus:border-pink-600"
              />
            </div>

          </div>
        </div>
      </section>
      <footer
        dir="ltr"
        className="bg-[#FDF9FC] py-[56px] pb-[40px] font-['Heebo','Assistant',sans-serif]"
      >
        <div className="max-w-[1100px] mx-auto px-12 grid grid-cols-[1fr_1fr_1fr_220px] gap-10 items-start">

          {/* Col 1 */}
          <div className="text-right">
            <h4 className="text-[15px] font-bold text-[#1a1040] mb-[18px]">
              יצירת קשר
            </h4>
            <a
              href="mailto:shushanran@gmail.com"
              className="block text-[14px] text-gray-500 hover:text-gray-700 transition-colors"
            >
              shushanran@gmail.com
            </a>
          </div>

          {/* Col 2 */}
          <div className="text-right">
            <h4 className="text-[15px] font-bold text-[#1a1040] mb-[18px]">
              פרטיות
            </h4>
            <nav className="flex flex-col gap-[14px]">
              <a href="#" className="text-[14px] text-gray-500 hover:text-gray-700 transition-colors">
                תקנון שימוש
              </a>
              <a href="#" className="text-[14px] text-gray-500 hover:text-gray-700 transition-colors">
                מדיניות פרטיות
              </a>
              <a href="#" className="text-[14px] text-gray-500 hover:text-gray-700 transition-colors">
                עוגיות
              </a>
              <span className="text-[14px] font-bold text-[#1a1040] cursor-default">
                בירוקליק 2025 כל הזכויות שמורות
              </span>
            </nav>
          </div>

          {/* Col 3 */}
          <div className="text-right">
            <h4 className="text-[15px] font-bold text-[#1a1040] mb-[18px]">
              ניווט
            </h4>
            <nav className="flex flex-col gap-[14px]">
              <a href="#" className="text-[14px] text-gray-500 hover:text-gray-700 transition-colors">
                ראשי
              </a>
              <a href="#" className="text-[14px] text-gray-500 hover:text-gray-700 transition-colors">
                איך זה עובד?
              </a>
              <a href="#" className="text-[14px] text-gray-500 hover:text-gray-700 transition-colors">
                הכלים שלנו
              </a>
              <a href="#" className="text-[14px] text-gray-500 hover:text-gray-700 transition-colors">
                לקוחות משתפים
              </a>
              <a href="#" className="text-[14px] text-gray-500 hover:text-gray-700 transition-colors">
                שאלות תשובות
              </a>
            </nav>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col items-end gap-1 text-right">
            <div className="flex items-center gap-1">

              {/* Icon */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="#1a1040"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 flex-shrink-0"
              >
                <path d="M4 2L20 9.5L13 12.5L10 20L4 2Z" />
              </svg>

              {/* Logo */}
              <span className="text-[34px] font-extrabold leading-none tracking-[-0.5px]">
                <span className="text-[#e91e8c]">בירוקליק</span>
              </span>
            </div>

            {/* Tagline */}
            <span className="text-[13px] text-gray-400 mt-[2px]">
              בירוקרטיה בקליק
            </span>
          </div>

        </div>
      </footer>
    </>
  );
}
