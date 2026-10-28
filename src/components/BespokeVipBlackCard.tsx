"use client";

import React, { useState, useRef } from "react";
import { Crown, Sparkles, ArrowUpRight, ShieldCheck, Lock } from "lucide-react";
import { useAgeGate } from "@/components/AgeGateProvider";
import { VIP_PORTAL_URL } from "@/data/shineeData";

export default function BespokeVipBlackCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState(
    "perspective(1100px) rotateX(0deg) rotateY(0deg)"
  );
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });
  const { promptOnlyFans } = useAgeGate();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = (x / rect.width) * 100;
    const py = (y / rect.height) * 100;

    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 9;
    const rotateX = -((y - rect.height / 2) / (rect.height / 2)) * 9;

    setTransformStyle(
      `perspective(1100px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(
        2
      )}deg) scale3d(1.015, 1.015, 1.015)`
    );
    setGlarePosition({ x: px, y: py, opacity: 0.32 });
  };

  const handleMouseLeave = () => {
    setTransformStyle("perspective(1100px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el || !e.touches[0]) return;
    const rect = el.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const y = e.touches[0].clientY - rect.top;
    const px = Math.max(0, Math.min(100, (x / rect.width) * 100));
    const py = Math.max(0, Math.min(100, (y / rect.height) * 100));

    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 7;
    const rotateX = -((y - rect.height / 2) / (rect.height / 2)) * 7;

    setTransformStyle(
      `perspective(1100px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(
        2
      )}deg) scale3d(1.01, 1.01, 1.01)`
    );
    setGlarePosition({ x: px, y: py, opacity: 0.35 });
  };

  const handleTouchEnd = () => {
    setTransformStyle("perspective(1100px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div className="mx-auto w-full max-w-xl">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={() => promptOnlyFans(VIP_PORTAL_URL)}
        style={{
          transform: transformStyle,
          transition:
            glarePosition.opacity === 0
              ? "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
              : "transform 0.08s linear",
        }}
        className="group relative aspect-[1.586/1] min-h-[210px] w-full cursor-pointer overflow-hidden rounded-3xl border border-[#d4af37]/60 bg-gradient-to-br from-[#19191f] via-[#0b0b0e] to-[#050507] p-5 shadow-[0_35px_90px_rgba(0,0,0,0.95),0_0_50px_rgba(212,175,55,0.18)] select-none sm:min-h-[250px] sm:p-8"
      >
        {/* Brushed Anodized Metal Micro-Texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(115deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 6px)",
          }}
        />

        {/* Interactive Specular Foil Light Glare */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: glarePosition.opacity,
            background: `radial-gradient(circle 280px at ${glarePosition.x}% ${glarePosition.y}%, rgba(246, 230, 180, 0.55), rgba(212, 175, 55, 0.15) 45%, transparent 75%)`,
          }}
        />

        {/* Fine Inner Gold Filigree Border */}
        <div className="pointer-events-none absolute inset-3 rounded-2xl border border-[#d4af37]/25" />

        {/* Card Content Layout */}
        <div className="relative z-10 flex h-full flex-col justify-between">
          {/* Top Row: Crest & Centurion Designation */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af37]/70 bg-black/80 shadow-[0_0_20px_rgba(212,175,55,0.35)]">
                <Crown className="h-4 w-4 text-[#d4af37]" />
              </div>
              <div>
                <p className="font-serif text-lg font-bold tracking-[0.28em] text-white uppercase sm:text-xl">
                  SHINEE NOIR
                </p>
                <p className="text-[9px] font-semibold tracking-[0.24em] text-[#d4af37] uppercase">
                   Private Sanctuary • Las Vegas
                </p>
              </div>
            </div>

            <span className="rounded-full border border-[#d4af37]/45 bg-[#d4af37]/10 px-3 py-1 text-[9px] font-bold tracking-[0.22em] text-[#f6e6b4] uppercase">
              18+ Keycard
            </span>
          </div>

          {/* Middle Row: Brushed 24k Gold EMV Chip & Engraved Credential */}
          <div className="my-auto flex items-center justify-between py-2">
            {/* Realistic Metallic Gold Chip */}
            <div className="relative h-10 w-13 overflow-hidden rounded-lg border border-[#f6e6b4]/60 bg-gradient-to-br from-[#f6e6b4] via-[#d4af37] to-[#8c6716] shadow-inner">
              <div className="absolute inset-x-0 top-1/2 h-[1px] bg-black/35" />
              <div className="absolute inset-y-0 left-1/3 w-[1px] bg-black/35" />
              <div className="absolute inset-y-0 right-1/3 w-[1px] bg-black/35" />
              <div className="absolute inset-2 rounded border border-black/30" />
            </div>

            <div className="text-right">
              <p className="font-mono text-[10px] tracking-[0.18em] text-[#e5e4e2]/90 sm:text-sm sm:tracking-[0.28em]">
                0022 • 2025 • MAXIM • VIP
              </p>
              <p className="mt-0.5 text-[8px] tracking-[0.18em] text-zinc-400 uppercase sm:text-[9px] sm:tracking-[0.22em]">
                Verified Cover Girl Semi-Finalist
              </p>
            </div>
          </div>

          {/* Bottom Row: Member Name & Interactive Tap Prompt */}
          <div className="flex items-end justify-between border-t border-white/10 pt-2.5 sm:pt-3">
            <div>
              <p className="text-[7px] font-semibold tracking-[0.2em] text-zinc-500 uppercase sm:text-[8px] sm:tracking-[0.24em]">
                Private Patron Privileges
              </p>
              <p className="font-serif mt-0.5 text-[10px] font-semibold tracking-[0.12em] text-[#f6e6b4] uppercase sm:text-sm sm:tracking-[0.2em]">
                @SHINEE_69 • @JMJ.ERA • @SHINEE.LV
              </p>
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#d4af37]/60 bg-[#d4af37] px-2.5 py-1 text-[9px] font-extrabold tracking-[0.14em] text-[#0a0a0a] uppercase shadow-[0_0_20px_rgba(212,175,55,0.45)] transition group-hover:scale-105 sm:px-3.5 sm:py-1.5 sm:text-[10px] sm:tracking-[0.16em]">
              <Lock className="h-3 w-3" />
              <span>Activate Pass</span>
              <ArrowUpRight className="h-3 w-3 stroke-[2.5]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
