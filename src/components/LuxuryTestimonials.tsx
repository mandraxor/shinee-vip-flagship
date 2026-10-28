"use client";

import React from "react";
import { Star, ShieldCheck, Quote, Sparkles } from "lucide-react";

const TESTIMONIALS = [
  {
    author: "Alexander V.",
    tier: "High-Roller Private Member • Las Vegas",
    quote:
      "Shinee is in a league of her own. Her custom photoshoots are cinematic quality, and her direct messaging is warm, real, and refreshingly personal. Worth every single tier.",
    rating: 5,
    date: "Verified VIP Patron",
  },
  {
    author: "JMJ Fashion Archive",
    tier: "Editorial Creative Director • Miami / Vegas",
    quote:
      "Working with Shinee on the Maxim feature sets was effortless. Her camera intuition, sculpted poise, and natural magnetism make her one of the most compelling models in modern glamour.",
    rating: 5,
    date: "Editorial Partner",
  },
  {
    author: "Christian M.",
    tier: "Diamond Inner Circle Patron • Los Angeles",
    quote:
      "The uncensored 4K archives exceed any expectation. You can see the dedication she puts into her daily Las Vegas updates. A true Maxim goddess.",
    rating: 5,
    date: "Verified VIP Member",
  },
];

export default function LuxuryTestimonials() {
  return (
    <section className="relative z-10 border-t border-white/10 bg-[#09090c] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-4 py-1 text-[10px] font-bold tracking-[0.24em] text-[#f6e6b4] uppercase">
            <Sparkles className="h-3.5 w-3.5 text-[#d4af37]" />
            Discreet Patron Accolades
          </div>
          <h2 className="font-serif mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            VIP Patron &amp;{" "}
            <span className="gold-shimmer-text italic">Industry Endorsements</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-300">
            Read unfiltered impressions from verified collectors, private patrons,
            and editorial directors.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="luxury-card flex flex-col justify-between rounded-3xl p-6 sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-[#d4af37] text-[#d4af37]"
                      />
                    ))}
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[9px] font-semibold text-zinc-400 uppercase">
                    {item.date}
                  </span>
                </div>

                <blockquote className="mt-5 flex items-start gap-2">
                  <Quote className="h-4 w-4 shrink-0 text-[#d4af37] mt-0.5 opacity-60" />
                  <p className="text-xs italic leading-relaxed text-zinc-300">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </blockquote>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-serif text-sm font-bold text-white">
                  {item.author}
                </p>
                <p className="text-[10px] text-zinc-400">{item.tier}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
