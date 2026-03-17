"use client";

import React from "react";

const articles = [
  {
    id: 1,
    category: "ביטוח",
    categoryBg: "bg-yellow-200",
    categoryText: "text-yellow-800",
    readTime: "8 דקות",
    title: "מדריך מקיף: זכויות צרכנים בתביעות 2024",
    description: "כל מה שצריך לדעת על הזכויות שלכם, חוק הגנת הצרכן והגשת תביעות",
    // CSS gradient background — no image needed
    cardBg: "from-[#0f0c29] via-[#302b63] to-[#24243e]",
    dots: "#7c3aed",
    accent: "#a78bfa",
  },
  {
    id: 2,
    category: "טיפים",
    categoryBg: "bg-pink-200",
    categoryText: "text-pink-700",
    readTime: "8 דקות",
    title: "מדריך מקיף: זכויות צרכנים בתביעות 2024",
    description: "כל מה שצריך לדעת על הזכויות שלכם, חוק הגנת הצרכן והגשת תביעות",
    cardBg: "from-[#1a0533] via-[#3b0764] to-[#1e1b4b]",
    dots: "#ec4899",
    accent: "#f9a8d4",
  },
  {
    id: 3,
    category: "טיפים",
    categoryBg: "bg-purple-200",
    categoryText: "text-purple-700",
    readTime: "8 דקות",
    title: "מדריך מקיף: זכויות צרכנים בתביעות 2024",
    description: "כל מה שצריך לדעת על הזכויות שלכם, חוק הגנת הצרכן והגשת תביעות",
    cardBg: "from-[#0d1b2a] via-[#1b2a4a] to-[#0f172a]",
    dots: "#818cf8",
    accent: "#c7d2fe",
  },
];

const BlogSection: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      <section
        dir="rtl"
        className="bg-white py-20 px-6"
        style={{ fontFamily: "'Heebo', 'Assistant', sans-serif" }}
      >
        <div className="max-w-6xl mx-auto">

          {/* ── Heading ── */}
          <h2 className="text-center text-4xl md:text-5xl font-extrabold text-gray-900 mb-14 leading-tight">
            קצת תוכן{" "}
            <span
              style={{
                background: "linear-gradient(120deg,#f472b6 0%,#a78bfa 50%,#60a5fa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              שבטוח יעניין אתכם
            </span>
          </h2>

          {/* ── Cards grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {articles.map((article) => (
              <article key={article.id} className="flex flex-col cursor-pointer group">

                {/* ── Card visual: CSS-only dark atmosphere ── */}
                <div
                  className={`relative rounded-t-2xl overflow-hidden mb-4 h-56 bg-gradient-to-br ${article.cardBg}`}
                >
                  <img src="/blog.jpg" alt="" />
                </div>

                {/* ── Meta row ── */}
                <div className="flex items-center justify-between mb-3 px-1">
                  <span
                    className={`text-sm font-semibold px-4 py-1 rounded-full ${article.categoryBg} ${article.categoryText}`}
                  >
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-400 font-medium">
                    זמן קריאה: {article.readTime}
                  </span>
                </div>

                {/* ── Title ── */}
                <h3 className="text-lg font-bold text-gray-900 text-right leading-snug mb-2 px-1 group-hover:text-purple-700 transition-colors duration-200">
                  {article.title}
                </h3>

                {/* ── Description ── */}
                <p className="text-sm text-gray-500 text-right leading-relaxed px-1">
                  {article.description}
                </p>
              </article>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default BlogSection;