"use client";

import React from "react";
import { Sparkles } from "lucide-react";

const MARQUEE_ITEMS = [
  "MAXIM COVER GIRL SEMI-FINALIST",
  "PAGE 22 COLLECTOR'S PRINT",
  "LAS VEGAS PENTHOUSE SERIES",
  "@JMJ.ERA HAUTE COUTURE",
  "@SHINEE.LV RESORT ARCHIVE",
  "ANIMAL WELFARE ADVOCATE",
  "TOP 0.1% VERIFIED VIP CREATOR",
];

export default function EditorialMarquee() {
  return (
    <div className="relative z-10 overflow-hidden border-y border-[#d4af37]/25 bg-[#08080b] py-3.5">
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((text, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-10 text-[11px] font-semibold tracking-[0.28em] text-[#e5e4e2]/85 uppercase"
          >
            <span>{text}</span>
            <Sparkles className="h-3.5 w-3.5 text-[#d4af37]" />
          </div>
        ))}
      </div>
    </div>
  );
}
