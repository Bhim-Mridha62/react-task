"use client";

import React from "react";

interface MarqueeStripProps {
  /** Content to render inside each block */
  items?: React.ReactNode[];
  /** Height of the strip in px (default: 98) */
  height?: number;
  /** Background color of each block (default: #D9D9D9) */
  blockColor?: string;
  /** Gap between blocks in px (default: 20) */
  gap?: number;
  /** Width of each block in px (default: 249) */
  blockWidth?: number;
  /** Width of the left/right fade gradient in px (default: 694) */
  fadeWidth?: number;
  /** Background color behind the strip (default: white) */
  background?: string;
  className?: string;
}

export default function MarqueeStrip({
  items,
  height = 80,
  blockColor = "#D9D9D9",
  gap = 20,
  blockWidth = 249,
  fadeWidth = 694,
  background = "#ffffff",
  className = "",
}: MarqueeStripProps) {
  // Default 6 empty blocks if no items provided
  const blockCount = items?.length ?? 6;

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ height, background }}
    >
      {/* Blocks row */}
      <div
        className="absolute inset-0 flex items-center"
        style={{ gap, paddingLeft: gap, paddingRight: gap }}
      >
        {Array.from({ length: blockCount }).map((_, i) => (
          <div
            key={i}
            className="shrink-0 flex items-center justify-center"
            style={{
              width: blockWidth,
              height,
              background: blockColor,
            }}
          >
            {items?.[i] ?? null}
          </div>
        ))}
      </div>

      {/* Left fade overlay */}
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0"
        style={{
          width: fadeWidth,
          background: `linear-gradient(to right, ${background} 18.75%, transparent 100%)`,
        }}
      />

      {/* Right fade overlay */}
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0"
        style={{
          width: fadeWidth,
          background: `linear-gradient(to left, ${background} 25%, transparent 100%)`,
        }}
      />
    </div>
  );
}