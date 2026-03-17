"use client";

import React from "react";

interface Tool {
  id: number;
  title: string;
  description: string;
  subtext: string;
  badge: string | null;
  badgeColor?: "free" | "paid";
}

const tools: Tool[] = [
  {
    id: 1,
    title: "תהליך הגשת תביעה קטנה",
    description: "בדיקה חכמה של כל ההחזרים והזכויות שמגיעים לכם.",
    subtext: "מסמך מיידי - מבוסס על מידע משתמש-\nשאלון קצר- 3-5 דקות ויש לכם מסמך",
    badge: "חינם",
    badgeColor: "free",
  },
  {
    id: 2,
    title: "בדיקת החזר מחברת הביטוח",
    description: "בדיקה חכמה של כל ההחזרים והזכויות שמגיעים לכם.",
    subtext: "מסמך מיידי - מבוסס על מידע משתמש-\nשאלון קצר- 3-5 דקות ויש לכם מסמך",
    badge: "חינם",
    badgeColor: "free",
  },
  {
    id: 3,
    title: "בדיקת החזר כסף לשכירים",
    description: "בדיקה חכמה של כל ההחזרים והזכויות שמגיעים לכם.",
    subtext: "מסמך מיידי - מבוסס על מידע משתמש-\nשאלון קצר- 3-5 דקות ויש לכם מסמך",
    badge: "חינם",
    badgeColor: "free",
  },
  {
    id: 4,
    title: "הכנת מכתב לבנקים",
    description: "בדיקה חכמה של כל ההחזרים והזכויות שמגיעים לכם.",
    subtext: "מסמך מיידי - מבוסס על מידע משתמש-\nשאלון קצר- 3-5 דקות ויש לכם מסמך",
    badge: "50 ש״ח",
    badgeColor: "paid",
  },
];

/* ── Single hex card ── */
const HexCard: React.FC<{ tool: Tool }> = ({ tool }) => (
  <div style={{ position: "relative", width: 268, flexShrink: 0 }}>
    {tool.badge && (
      <span
        style={{
          position: "absolute",
          top: 16,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          fontSize: 12,
          fontWeight: 600,
          padding: "3px 18px",
          borderRadius: 20,
          border: "1px solid #e5e7eb",
          background: "#fff",
          color: "#374151",
          boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
          whiteSpace: "nowrap",
          fontFamily: "inherit",
        }}
      >
        {tool.badge}
      </span>
    )}
    <div
      style={{
        clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)",
        background: "#f6f6fb",
        padding: "72px 32px 56px",
        textAlign: "right",
        direction: "rtl",
        minHeight: 280,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 10,
      }}
    >
      <h3
        style={{
          fontSize: 18,
          fontWeight: 700,
          color: "#111827",
          margin: 0,
          lineHeight: 1.4,
          fontFamily: "inherit",
        }}
      >
        {tool.title}
      </h3>
      <p style={{ fontSize: 12, color: "#9ca3af", margin: 0, lineHeight: 1.6, fontFamily: "inherit" }}>
        {tool.description}
      </p>
      <p
        style={{
          fontSize: 12,
          color: "#374151",
          margin: 0,
          lineHeight: 1.75,
          whiteSpace: "pre-line",
          fontFamily: "inherit",
        }}
      >
        {tool.subtext}
      </p>
      <a
        href="#"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          color: "#e91e8c",
          fontSize: 14,
          fontWeight: 600,
          textDecoration: "none",
          marginTop: 4,
          fontFamily: "inherit",
        }}
      >
        <span>התחילו עכשיו</span>
        <span style={{ fontSize: 17 }}>←</span>
      </a>
    </div>
  </div>
);

/* ── Blurred placeholder hex (left edge) ── */
const BlurredHex: React.FC = () => (
  <div
    style={{
      width: 268,
      flexShrink: 0,
      filter: "blur(3.5px)",
      opacity: 0.45,
      pointerEvents: "none",
    }}
  >
    <div
      style={{
        clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)",
        background: "#f6f6fb",
        padding: "72px 32px 56px",
        textAlign: "right",
        direction: "rtl",
        minHeight: 280,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 10,
      }}
    >
      <h3
        style={{
          fontSize: 18,
          fontWeight: 700,
          color: "#111827",
          margin: 0,
          lineHeight: 1.4,
          fontFamily: "inherit",
        }}
      >
        כלי נוסף בקרוב
      </h3>
      <p style={{ fontSize: 12, color: "#9ca3af", margin: 0, lineHeight: 1.6, fontFamily: "inherit" }}>
        בדיקה חכמה של כל ההחזרים והזכויות שמגיעים לכם.
      </p>
      <p style={{ fontSize: 12, color: "#374151", margin: 0, lineHeight: 1.75, fontFamily: "inherit" }}>
        מסמך מיידי - מבוסס על מידע משתמש-{"\n"}שאלון קצר- 3-5 דקות ויש לכם מסמך
      </p>
    </div>
  </div>
);

/* ── Main export ── */
const ToolsSection: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      <section
        dir="rtl"
        style={{
          background: "#ffffff",
          padding: "80px 0",
          fontFamily: "'Heebo', 'Assistant', sans-serif",
          overflow: "hidden",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 40px",
            display: "flex",
            alignItems: "center",
            gap: 40,
            flexDirection: "row", // in RTL: first child = right side
          }}
        >
          {/* ══════════════════════════════
              RIGHT COLUMN — "הכלים שלנו"
          ══════════════════════════════ */}
          <div
            style={{
              flex: "0 0 280px",
              textAlign: "right",
              direction: "rtl",
            }}
          >
            <h2
              style={{
                fontSize: 52,
                fontWeight: 800,
                margin: "0 0 18px",
                background: "linear-gradient(135deg,#a78bfa 0%,#ec4899 55%,#818cf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: 1.2,
                fontFamily: "inherit",
              }}
            >
              הכלים שלנו
            </h2>
            <p
              style={{
                fontSize: 15,
                color: "#6b7280",
                lineHeight: 1.9,
                margin: 0,
                fontFamily: "inherit",
              }}
            >
              הכלים שלנו מייצרים עבורכם את כל מה שאתם צריכים
              <br />
              בקלות ומהירות, כלים נוספים יכנסו במשך
            </p>
          </div>

          {/* ══════════════════════════════
              LEFT COLUMN — Hex grid + blurred card
          ══════════════════════════════ */}
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              position: "relative",
              // Pull left so blurred card peeks out of viewport edge
              marginLeft: -60,
            }}
          >
            {/* Blurred left-edge hex (half-visible) */}
            <div
              style={{
                position: "relative",
                flexShrink: 0,
                overflow: "hidden", // crop right half
                width: 134, // half of 268
              }}
            >
              {/* The coming-soon label card sits below the blurred hex */}
              <div
                style={{
                  position: "absolute",
                  bottom: -10,
                  right: 0,
                  zIndex: 20,
                  background: "linear-gradient(135deg,#fdf2f8,#f5f3ff)",
                  borderRadius: 14,
                  padding: "14px 16px",
                  textAlign: "right",
                  direction: "rtl",
                  width: 190,
                  boxShadow: "0 4px 18px rgba(168,85,247,0.13)",
                  transform: "translateX(60px)",
                }}
              >
                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#111827",
                    margin: "0 0 10px",
                    lineHeight: 1.5,
                    fontFamily: "inherit",
                  }}
                >
                  בקרוב עוד כלים
                  <br />
                  חכמים שיעזרו לכם
                </p>
                <button
                  style={{
                    background: "linear-gradient(135deg,#f472b6,#a78bfa)",
                    color: "#fff",
                    border: "none",
                    borderRadius: 20,
                    padding: "7px 18px",
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                    fontFamily: "inherit",
                  }}
                >
                  קרא עוד
                </button>
              </div>

              <BlurredHex />
            </div>

            {/* Main 2×2 hex grid */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 0,
                marginLeft: 8,
              }}
            >
              {/* Row 1 */}
              <div style={{ display: "flex", gap: 8 }}>
                <HexCard tool={tools[0]} />
                <HexCard tool={tools[1]} />
              </div>

              {/* Row 2 — offset by half a card */}
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  marginTop: -46,
                  marginLeft: 138, // half card width + gap
                }}
              >
                <HexCard tool={tools[2]} />
                <HexCard tool={tools[3]} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ToolsSection;