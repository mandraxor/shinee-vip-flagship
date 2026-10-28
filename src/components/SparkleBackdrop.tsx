"use client";

import React from "react";

const SPARKLE_PARTICLES = [
  { top: "8%", left: "12%", size: 3, duration: "4.5s", delay: "0.2s", gold: true },
  { top: "14%", left: "78%", size: 4, duration: "6.2s", delay: "1.1s", gold: true },
  { top: "22%", left: "44%", size: 2, duration: "5.1s", delay: "0.7s", gold: false },
  { top: "29%", left: "88%", size: 3, duration: "4.8s", delay: "2.0s", gold: true },
  { top: "36%", left: "19%", size: 2, duration: "6.5s", delay: "1.5s", gold: false },
  { top: "45%", left: "64%", size: 4, duration: "5.4s", delay: "0.4s", gold: true },
  { top: "53%", left: "9%", size: 3, duration: "5.9s", delay: "2.3s", gold: true },
  { top: "62%", left: "82%", size: 2, duration: "4.3s", delay: "0.9s", gold: false },
  { top: "71%", left: "33%", size: 3, duration: "6.1s", delay: "1.7s", gold: true },
  { top: "79%", left: "71%", size: 4, duration: "5.0s", delay: "0.3s", gold: true },
  { top: "86%", left: "16%", size: 2, duration: "6.4s", delay: "2.6s", gold: false },
  { top: "92%", left: "54%", size: 3, duration: "4.7s", delay: "1.2s", gold: true },
];

export default function SparkleBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Ambient Champagne Gold & Obsidian Radial Glows */}
      <div
        className="absolute -top-48 left-1/2 h-[540px] w-[960px] -translate-x-1/2 rounded-full opacity-20 blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.45) 0%, rgba(154,115,28,0.12) 55%, transparent 80%)",
        }}
      />
      <div
        className="absolute top-[38%] -right-40 h-[480px] w-[480px] rounded-full opacity-15 blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(229,228,226,0.3) 0%, rgba(212,175,55,0.12) 60%, transparent 80%)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/4 h-[460px] w-[720px] rounded-full opacity-15 blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.38) 0%, transparent 75%)",
        }}
      />

      {/* Subtle architectural luxury grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #d4af37 1px, transparent 1px), linear-gradient(to bottom, #d4af37 1px, transparent 1px)",
          backgroundSize: "96px 96px",
        }}
      />

      {/* Floating Metallic Champagne Gold & Platinum Sparkle Particles */}
      {SPARKLE_PARTICLES.map((p, idx) => (
        <span
          key={idx}
          className="sparkle-dot absolute rounded-full"
          style={
            {
              top: p.top,
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              "--duration": p.duration,
              "--delay": p.delay,
              backgroundColor: p.gold ? "#f6e6b4" : "#e5e4e2",
              boxShadow: p.gold
                ? "0 0 10px 2px rgba(212, 175, 55, 0.85)"
                : "0 0 8px 1px rgba(229, 228, 226, 0.75)",
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
