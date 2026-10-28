"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Award,
  Expand,
  Quote,
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  BookOpen,
  LayoutGrid,
} from "lucide-react";
import {
  MAXIM_FEATURES,
  MaximFeatureItem,
  VIP_PORTAL_URL,
} from "@/data/shineeData";

export default function MaximFeatureShowcase() {
  const [viewMode, setViewMode] = useState<"spread" | "editorial">("spread");
  const [selectedSpreadIndex, setSelectedSpreadIndex] = useState<number | null>(
    null
  );

  const selectedItem: MaximFeatureItem | null =
    selectedSpreadIndex !== null ? MAXIM_FEATURES[selectedSpreadIndex] : null;

  const handlePrev = () => {
    if (selectedSpreadIndex === null) return;
    setSelectedSpreadIndex(
      (selectedSpreadIndex - 1 + MAXIM_FEATURES.length) % MAXIM_FEATURES.length
    );
  };

  const handleNext = () => {
    if (selectedSpreadIndex === null) return;
    setSelectedSpreadIndex((selectedSpreadIndex + 1) % MAXIM_FEATURES.length);
  };

  return (
    <section
      id="maxim-showcase"
      className="relative z-10 border-t border-white/10 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-10 lg:flex-row lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-3.5 py-1 text-[10px] font-bold tracking-[0.24em] text-[#f6e6b4] uppercase">
              <Award className="h-3.5 w-3.5 text-[#d4af37]" />
              Verified Press &amp; Print Archive
            </div>
            <h2 className="font-serif mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              The <span className="gold-shimmer-text italic">Maxim</span>{" "}
              Feature Showcase
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
              Explore Shinee&apos;s official{" "}
              <strong className="text-white">
                Maxim Cover Girl Semi-Finalist
              </strong>{" "}
              print spreads and editorial features. Click any magazine spread to
              open the full-resolution interactive reader.
            </p>
          </div>

          {/* View Mode Switcher */}
          <div className="inline-flex items-center rounded-xl border border-[#d4af37]/30 bg-[#121216] p-1">
            <button
              type="button"
              onClick={() => setViewMode("spread")}
              className={`inline-flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-semibold tracking-[0.14em] uppercase transition ${
                viewMode === "spread"
                  ? "bg-gradient-to-r from-[#b48a28] via-[#d4af37] to-[#f6e6b4] text-[#0a0a0a]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <BookOpen className="h-3.5 w-3.5" />
              <span>Original 2-Page Spreads</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("editorial")}
              className={`inline-flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-semibold tracking-[0.14em] uppercase transition ${
                viewMode === "editorial"
                  ? "bg-gradient-to-r from-[#b48a28] via-[#d4af37] to-[#f6e6b4] text-[#0a0a0a]"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <LayoutGrid className="h-3.5 w-3.5" />
              <span>Portrait + Article View</span>
            </button>
          </div>
        </div>

        {/* Editorial Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {MAXIM_FEATURES.map((item, idx) => (
            <article
              key={item.id}
              className="luxury-card group flex flex-col justify-between overflow-hidden rounded-3xl p-4 sm:p-6"
            >
              <div>
                {/* Top Issue Metadata Bar */}
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-[#f6e6b4] uppercase">
                    <Sparkles className="h-3 w-3 text-[#d4af37]" />
                    {item.issueBadge}
                  </span>
                  <span className="text-[11px] font-medium tracking-[0.16em] text-zinc-400 uppercase">
                    {item.pageNumber} • {item.creditHandle}
                  </span>
                </div>

                {/* Image Container (Full 2-Page Spread vs Extracted Portrait + Article) */}
                {viewMode === "spread" ? (
                  <div
                    onClick={() => setSelectedSpreadIndex(idx)}
                    className="relative aspect-[16/10] w-full cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-black"
                  >
                    <Image
                      src={item.spreadImage}
                      alt={`${item.title} — Maxim Magazine Spread`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-95" />

                    {/* Hover Zoom Prompt */}
                    <div className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-full border border-[#d4af37]/60 bg-black/85 px-3.5 py-1.5 text-[10px] font-bold tracking-[0.16em] text-[#f6e6b4] uppercase backdrop-blur-md transition group-hover:bg-[#d4af37] group-hover:text-black">
                      <Expand className="h-3.5 w-3.5" />
                      <span>Inspect Full Spread</span>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-12">
                    <div
                      onClick={() => setSelectedSpreadIndex(idx)}
                      className="relative aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl border border-white/15 sm:col-span-5"
                    >
                      <Image
                        src={item.portraitImage}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 260px"
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col justify-center sm:col-span-7">
                      <p className="text-xs leading-relaxed text-zinc-200">
                        {item.fullEditorialText}
                      </p>
                    </div>
                  </div>
                )}

                {/* Title & Verbatim Pull Quote */}
                <div className="mt-5">
                  <p className="text-[11px] font-semibold tracking-[0.18em] text-[#d4af37] uppercase">
                    {item.subtitle}
                  </p>
                  <h3 className="font-serif mt-1 text-2xl font-semibold text-white sm:text-3xl">
                    {item.title}
                  </h3>

                  <blockquote className="mt-3 flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.02] p-3.5">
                    <Quote className="mt-0.5 h-4 w-4 shrink-0 text-[#d4af37]" />
                    <p className="text-xs italic leading-relaxed text-zinc-300">
                      &ldquo;{item.pullQuote}&rdquo;
                    </p>
                  </blockquote>
                </div>
              </div>

              {/* Card Bottom Tags & Actions */}
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
                <div className="flex flex-wrap gap-1.5">
                  {item.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium tracking-wider text-zinc-300 uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedSpreadIndex(idx)}
                    className="cursor-pointer rounded-lg border border-white/15 bg-white/[0.04] px-3 py-1.5 text-[10px] font-semibold tracking-[0.15em] text-zinc-200 uppercase transition hover:border-[#d4af37] hover:text-[#f6e6b4]"
                  >
                    Read Article
                  </button>
                  <a
                    href={VIP_PORTAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-lg border border-[#d4af37]/50 bg-[#d4af37]/15 px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] text-[#f6e6b4] uppercase transition hover:bg-[#d4af37] hover:text-black"
                  >
                    <span>Uncensored Set</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Philanthropy & Story Spotlight Banner (From Maxim Spreads) */}
        <div
          id="philanthropy"
          className="mt-14 overflow-hidden rounded-3xl border border-[#d4af37]/35 bg-gradient-to-r from-[#141418] via-[#101014] to-[#17140d] p-6 sm:p-10"
        >
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-[#f6e6b4] uppercase">
                Heart Behind The Crown • Maxim Editorial Highlight
              </span>
              <h3 className="font-serif mt-3 text-2xl font-semibold text-white sm:text-3xl">
                &ldquo;Animals Are Everything To Me&rdquo; — A Mission of
                Compassion &amp; Determination
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-zinc-300 sm:text-sm">
                As highlighted across her Maxim semi-finalist features,
                Shinee&apos;s journey from Montana to the bright lights of Las
                Vegas is driven by both artistic ambition and heartfelt
                advocacy. Honoring the memory of a cherished pet lost to
                cruelty, she channels her platform and success into animal
                welfare charity work while captivating audiences in music,
                modeling, and entertainment.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 lg:col-span-4 lg:items-end">
              <a
                href={VIP_PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="luxury-gold-btn inline-flex items-center gap-2 rounded-xl px-6 py-4 text-xs font-extrabold tracking-[0.18em] text-[#0a0a0a] uppercase"
              >
                <span>Connect With Shinee 1-on-1</span>
                <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
              </a>
              <span className="text-[11px] tracking-[0.14em] text-zinc-400 uppercase">
                Direct VIP Messaging Active on OnlyFans
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen Magazine Spread Lightbox Modal */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4 backdrop-blur-xl sm:p-6"
        >
          <div className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-[#d4af37]/45 bg-[#0c0c10] shadow-[0_25px_90px_rgba(0,0,0,0.95)]">
            {/* Lightbox Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <span className="text-[10px] font-bold tracking-[0.22em] text-[#d4af37] uppercase">
                  {selectedItem.issueBadge}
                </span>
                <h4 className="font-serif text-xl font-semibold text-white">
                  {selectedItem.title}
                </h4>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="cursor-pointer rounded-full border border-white/15 bg-white/[0.05] p-2 text-zinc-200 transition hover:border-[#d4af37] hover:text-[#f6e6b4]"
                  aria-label="Previous Spread"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="cursor-pointer rounded-full border border-white/15 bg-white/[0.05] p-2 text-zinc-200 transition hover:border-[#d4af37] hover:text-[#f6e6b4]"
                  aria-label="Next Spread"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedSpreadIndex(null)}
                  className="ml-2 cursor-pointer rounded-full border border-white/20 bg-white/10 p-2 text-white transition hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-black"
                  aria-label="Close Reader"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Lightbox Body */}
            <div className="overflow-y-auto p-5 sm:p-7">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/15 bg-black">
                <Image
                  src={selectedItem.spreadImage}
                  alt={selectedItem.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              <div className="mt-6 grid grid-cols-1 items-center gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5 lg:grid-cols-12">
                <div className="lg:col-span-8">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-[#d4af37] uppercase">
                    Verbatim Maxim Feature Transcript
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-200 sm:text-sm">
                    {selectedItem.fullEditorialText}
                  </p>
                </div>
                <div className="flex flex-col items-stretch justify-end gap-2.5 lg:col-span-4">
                  <a
                    href={VIP_PORTAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="luxury-gold-btn inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-xs font-extrabold tracking-[0.18em] text-[#0a0a0a] uppercase"
                  >
                    <span>Unlock Full Shoot on VIP</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
