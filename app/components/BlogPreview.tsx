const posts = [
  {
    category: "טיפים",
    title: "5 דרכים להחזיר כסף ממס הכנסה",
    excerpt: "גלו את הסודות שרואי החשבון לא רוצים שתדעו.",
    date: "15 מרץ 2025",
    img: "📊",
    gradient: "from-purple-900 to-indigo-900",
  },
  {
    category: "מדריכים",
    title: "איך מגישים תביעה קטנה בבית משפט?",
    excerpt: "מדריך מקיף שיעזור לכם לנהל תביעה בעצמכם.",
    date: "10 מרץ 2025",
    img: "⚖️",
    gradient: "from-blue-900 to-cyan-900",
  },
  {
    category: "חדשות",
    title: "שינויים בחוק הביטוח הלאומי 2025",
    excerpt: "כל מה שצריך לדעת על עדכוני הגמלאות החדשים.",
    date: "5 מרץ 2025",
    img: "📰",
    gradient: "from-pink-900 to-rose-900",
  },
];

export default function BlogPreview() {
  return (
    <section id="blog" className="w-full bg-[#f9fafb] py-20">
      <div className="max-w-[1200px] mx-auto px-5">
        {/* Title */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
          <h2 className="text-[36px] md:text-[42px] font-medium text-[var(--dark)]">
            יו יוו |{" "}
            <span className="font-bold text-[var(--dark)]">שבטות יגניות אחבם</span>
          </h2>
          <a href="#" className="text-[14px] font-semibold text-[var(--pink)] hover:underline whitespace-nowrap flex items-center gap-1">
            לכל הבלוג
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <a key={i} href="#" className="blog-card block bg-white overflow-hidden rounded-2xl border border-gray-100">
              {/* Image area */}
              <div className={`h-[180px] bg-gradient-to-br ${post.gradient} flex items-center justify-center text-6xl`}>
                {post.img}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-3">
                <span className="self-start text-[11px] font-bold px-3 py-1 rounded-full bg-[rgba(233,30,140,0.08)] text-[var(--pink)]">
                  {post.category}
                </span>
                <h3 className="text-[17px] font-bold text-[var(--dark)] leading-snug">
                  {post.title}
                </h3>
                <p className="text-[14px] text-[var(--text-gray)] leading-relaxed">{post.excerpt}</p>
                <span className="text-[12px] text-[var(--text-light)] mt-1">{post.date}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
