export default function PartnersBar() {
  const logos = [
    { text: "לאומי", icon: "🏦" },
    { text: "הפועלים", icon: "🏛" },
    { text: "ביטוח", icon: "🛡" },
    { text: "הסתדרות", icon: "⭐" },
    { text: "מיסים", icon: "📋" },
    { text: "ביטוח לאומי", icon: "🔵" },
    { text: "בנק ישראל", icon: "🏦" },
  ];

  return (
    <section className="w-full bg-white py-10 border-t border-gray-50">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex items-center justify-between gap-4 hide-scrollbar overflow-x-auto">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[130px] h-[48px] bg-gray-100 rounded-lg flex items-center justify-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
            >
              <span className="text-lg">{logo.icon}</span>
              <span className="text-[12px] font-medium text-gray-500">{logo.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
