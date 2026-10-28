"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Lock,
  Sparkles,
  ArrowUpRight,
  Flame,
  Eye,
  ShieldCheck,
} from "lucide-react";
import { TEASER_GALLERY, VIP_PORTAL_URL } from "@/data/shineeData";

const CATEGORIES = [
  "All",
  "Swimwear",
  "Editorial",
  "Vegas Lifestyle",
  "VIP Vault",
] as const;

export default function ExclusiveTeaserGrid() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof CATEGORIES)[number]>("All");

  const filteredItems =
    activeCategory === "All"
      ? TEASER_GALLERY
      : TEASER_GALLERY.filter((item) => item.category === activeCategory);

  return (
    <section
      id="exclusive-teasers"
      className="relative z-10 border-t border-white/10 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-3.5 py-1 text-[10px] font-bold tracking-[0.24em] text-[#f6e6b4] uppercase">
              <Flame className="h-3.5 w-3.5 text-[#d4af37]" />
              Curated Desire • Private Vault Previews
            </div>
            <h2 className="font-serif mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Exclusive Content{" "}
              <span className="gold-shimmer-text italic">Teaser Grid</span>
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
              A glimpse into Shinee&apos;s high-fashion swimwear sets, private
              Las Vegas penthouse shoots, and members-only uncensored archives.
              Unlock full-length galleries inside her VIP portal.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`cursor-pointer rounded-full px-4 py-2 text-xs font-semibold tracking-[0.15em] uppercase transition ${
                  activeCategory === category
                    ? "border border-[#d4af37] bg-gradient-to-r from-[#b48a28] via-[#d4af37] to-[#f6e6b4] text-[#0a0a0a] shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                    : "border border-white/10 bg-white/[0.03] text-zinc-300 hover:border-[#d4af37]/45 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Teaser Grid */}
        <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <a
              key={item.id}
              href={VIP_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="luxury-card group relative flex flex-col overflow-hidden rounded-3xl p-3"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#0b0b0e]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={`object-cover object-top transition-all duration-700 ease-out group-hover:scale-110 ${
                    item.isLockedPreview
                      ? "scale-105 brightness-75 contrast-110 blur-[2px] group-hover:blur-none"
                      : ""
                  }`}
                />

                {/* Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-[#08080a]/30 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                  <span className="rounded-full border border-[#d4af37]/50 bg-black/80 px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-[#f6e6b4] uppercase backdrop-blur-md">
                    {item.exclusivityTag}
                  </span>
                  <span className="rounded-full border border-white/15 bg-black/75 px-2.5 py-1 text-[10px] font-medium tracking-[0.14em] text-zinc-200 backdrop-blur-md">
                    {item.sourceHandle}
                  </span>
                </div>

                {/* Center VIP Vault Lock Badge (for locked teasers or on hover) */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center bg-black/45 p-4 text-center backdrop-blur-[2px] transition-opacity duration-300 ${
                    item.isLockedPreview
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d4af37] bg-[#0a0a0a]/90 shadow-[0_0_30px_rgba(212,175,55,0.55)] transition-transform duration-300 group-hover:scale-110">
                    {item.isLockedPreview ? (
                      <Lock className="h-5 w-5 text-[#d4af37]" />
                    ) : (
                      <Eye className="h-5 w-5 text-[#d4af37]" />
                    )}
                  </div>
                  <span className="mt-3 rounded-full border border-[#d4af37]/50 bg-black/85 px-4 py-1.5 text-[10px] font-extrabold tracking-[0.2em] text-[#f6e6b4] uppercase">
                    {item.isLockedPreview
                      ? "Unlock in VIP Portal"
                      : "View Full Set on OnlyFans"}
                  </span>
                </div>

                {/* Bottom Media Count Pill */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between">
                  <span className="rounded-lg border border-white/10 bg-black/80 px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] text-zinc-200 uppercase backdrop-blur-md">
                    {item.mediaCount}
                  </span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#d4af37]/50 bg-[#d4af37] text-[#0a0a0a] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
                  </span>
                </div>
              </div>

              {/* Card Text Info */}
              <div className="px-2 pt-4 pb-2">
                <div className="flex items-center justify-between text-[10px] font-semibold tracking-[0.18em] text-[#d4af37] uppercase">
                  <span>{item.category}</span>
                  <span>18+ Exclusive</span>
                </div>
                <h3 className="font-serif mt-1 text-2xl font-semibold text-white transition group-hover:text-[#f6e6b4]">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-zinc-400">
                  {item.caption}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Conversion Strip */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl border border-[#d4af37]/40 bg-gradient-to-r from-[#131317] via-[#1b170c] to-[#131317] p-6 text-center sm:flex-row sm:p-8 sm:text-left">
          <div className="flex items-center gap-4">
            <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#d4af37]/50 bg-[#d4af37]/15 sm:flex">
              <ShieldCheck className="h-6 w-6 text-[#d4af37]" />
            </div>
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-[#f6e6b4] uppercase">
                Instant Full-Archive Access • Updated Daily
              </p>
              <p className="mt-1 text-sm text-zinc-300">
                Join <strong className="text-white">@shinee_69</strong> for
                uncensored photo sets, full-length private videos, and direct VIP
                chat.
              </p>
            </div>
          </div>

          <a
            href={VIP_PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="luxury-gold-btn inline-flex shrink-0 items-center gap-2.5 rounded-2xl px-7 py-4 text-xs font-extrabold tracking-[0.2em] text-[#0a0a0a] uppercase sm:text-sm"
          >
            <Sparkles className="h-4 w-4 fill-[#0a0a0a]" />
            <span>Enter VIP Portal Now</span>
            <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </section>
  );
}
