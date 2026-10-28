"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
  MapPin,
  Calendar,
  CheckCircle2,
  Download,
  Share2,
} from "lucide-react";
import {
  MAXIM_FEATURES,
  MaximFeatureItem,
  VIP_PORTAL_URL,
  SOCIAL_HANDLES,
} from "@/data/shineeData";
import PressKitModal from "@/components/PressKitModal";

const PRESS_TIMELINE = [
  {
    year: "2025",
    title: "Maxim Next Feature & Icon Profile Series",
    publication: "Maxim Official Edition",
    description:
      "Celebrated across multiple spreads spotlighting her crossover from Montana to Las Vegas, and her unwavering pursuit of the 2025 crown.",
    badge: "Current Issue",
  },
  {
    year: "2024",
    title: "Maxim Cover Girl Semi-Finalist Finish",
    publication: "International Competition",
    description:
      "Voted by global supporters and industry judges into the prestigious Semi-Finalist tier, establishing her national footprint.",
    badge: "Official Laurels",
  },
  {
    year: "2024",
    title: "Collector's Print Page 22 Feature",
    publication: "Maxim Next Print Tearsheet",
    description:
      "Archival print tearsheet featuring high-fashion resortwear, custom jewelry, and personal philanthropy profile.",
    badge: "Print Archive",
  },
];

export default function PressPage() {
  const [viewMode, setViewMode] = useState<"spread" | "editorial">("spread");
  const [selectedSpreadIndex, setSelectedSpreadIndex] = useState<number | null>(
    null
  );
  const [loupeEnabled, setLoupeEnabled] = useState(true);
  const [loupeState, setLoupeState] = useState({
    active: false,
    xPercent: 50,
    yPercent: 50,
    px: 0,
    py: 0,
  });

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
    <div className="relative py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page Hero Header */}
        <div className="border-b border-white/10 pb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/50 bg-[#d4af37]/10 px-4 py-1.5 text-[10px] font-bold tracking-[0.24em] text-[#f6e6b4] uppercase">
            <Award className="h-3.5 w-3.5 text-[#d4af37]" />
            Official Verified Editorial Tearsheets
          </div>

          <h1 className="font-serif mt-5 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Maxim Press &amp;{" "}
            <span className="gold-shimmer-text italic">Editorial Archive</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
            Verified print tearsheets, magazine spreads, and editorial coverage
            spotlighting Shinee&apos;s recognition as a{" "}
            <strong className="text-white">
              Maxim Cover Girl Semi-Finalist
            </strong>
            . Click any spread to open the interactive full-resolution reader.
          </p>

          {/* Quick Stats Strip */}
          <div className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-[#d4af37]" />
              4 Verified Page 22 Spreads
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-[#d4af37]" />
              Las Vegas &amp; Montana Features
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-[#d4af37]" />
              2024 &amp; 2025 Contender
            </span>
          </div>

          {/* View Mode Switcher & Official EPK Modal */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <div className="inline-flex items-center rounded-xl border border-[#d4af37]/35 bg-[#121216] p-1.5">
              <button
                type="button"
                onClick={() => setViewMode("spread")}
                className={`inline-flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold tracking-[0.14em] uppercase transition ${
                  viewMode === "spread"
                    ? "bg-gradient-to-r from-[#b48a28] via-[#d4af37] to-[#f6e6b4] text-[#0a0a0a] font-bold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <BookOpen className="h-3.5 w-3.5" />
                <span>Original 2-Page Spreads</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("editorial")}
                className={`inline-flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold tracking-[0.14em] uppercase transition ${
                  viewMode === "editorial"
                    ? "bg-gradient-to-r from-[#b48a28] via-[#d4af37] to-[#f6e6b4] text-[#0a0a0a] font-bold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <LayoutGrid className="h-3.5 w-3.5" />
                <span>Portrait + Article Split</span>
              </button>
            </div>

            <PressKitModal />
          </div>
        </div>

        {/* The 4 Editorial Spreads Grid */}
        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {MAXIM_FEATURES.map((item, idx) => (
            <article
              key={item.id}
              className="luxury-card group flex flex-col justify-between overflow-hidden rounded-3xl p-5 sm:p-7"
            >
              <div>
                {/* Header Meta */}
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d4af37]/50 bg-[#d4af37]/10 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-[#f6e6b4] uppercase">
                    <Sparkles className="h-3 w-3 text-[#d4af37]" />
                    {item.issueBadge}
                  </span>
                  <span className="text-[11px] font-medium tracking-[0.16em] text-zinc-400 uppercase">
                    {item.pageNumber}
                  </span>
                </div>

                {/* Display Frame */}
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-95" />

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

                {/* Article Titles & Pull Quote */}
                <div className="mt-5">
                  <p className="text-[11px] font-semibold tracking-[0.18em] text-[#d4af37] uppercase">
                    {item.subtitle}
                  </p>
                  <h2 className="font-serif mt-1 text-2xl font-bold text-white sm:text-3xl">
                    {item.title}
                  </h2>

                  <blockquote className="mt-3 flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.02] p-3.5">
                    <Quote className="mt-0.5 h-4 w-4 shrink-0 text-[#d4af37]" />
                    <p className="text-xs italic leading-relaxed text-zinc-300">
                      &ldquo;{item.pullQuote}&rdquo;
                    </p>
                  </blockquote>

                  {/* Shoot Details */}
                  <div className="mt-4 grid grid-cols-1 gap-2 rounded-xl border border-white/5 bg-white/[0.015] p-3 text-[11px] text-zinc-400">
                    <div>
                      <strong className="text-zinc-200">Location:</strong>{" "}
                      {item.details.location}
                    </div>
                    <div>
                      <strong className="text-zinc-200">Styling:</strong>{" "}
                      {item.details.styling}
                    </div>
                    <div>
                      <strong className="text-zinc-200">Credit:</strong>{" "}
                      {item.creditHandle} • {item.details.publicationYear}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
                <button
                  type="button"
                  onClick={() => setSelectedSpreadIndex(idx)}
                  className="cursor-pointer rounded-lg border border-white/20 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold tracking-[0.15em] text-zinc-200 uppercase transition hover:border-[#d4af37] hover:text-[#f6e6b4]"
                >
                  Read Verbatim Article
                </button>

                <a
                  href={VIP_PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="luxury-gold-btn inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-[11px] font-bold tracking-[0.15em] text-[#0a0a0a] uppercase"
                >
                  <span>Unlock Uncensored Set</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Press Milestones Timeline */}
        <div className="mt-20 rounded-3xl border border-white/10 bg-[#0e0e12]/90 p-8 sm:p-12">
          <span className="text-[10px] font-bold tracking-[0.24em] text-[#d4af37] uppercase">
            Official Accolades &amp; Milestones
          </span>
          <h3 className="font-serif mt-2 text-3xl font-bold text-white sm:text-4xl">
            Competition &amp; Press Timeline
          </h3>

          <div className="mt-8 space-y-6">
            {PRESS_TIMELINE.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#d4af37]/50 bg-[#d4af37]/15 font-serif text-lg font-bold text-[#f6e6b4]">
                    {item.year}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-serif text-lg font-semibold text-white">
                        {item.title}
                      </h4>
                      <span className="rounded-md border border-[#d4af37]/40 bg-[#d4af37]/10 px-2 py-0.5 text-[9px] font-semibold tracking-wider text-[#f6e6b4] uppercase">
                        {item.badge}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-zinc-300">
                      {item.description}
                    </p>
                    <p className="mt-0.5 text-[11px] text-zinc-500">
                      Publication: {item.publication}
                    </p>
                  </div>
                </div>

                <a
                  href={VIP_PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1 rounded-xl border border-white/15 bg-white/[0.03] px-4 py-2 text-xs font-semibold tracking-wider text-zinc-200 uppercase transition hover:border-[#d4af37] hover:text-[#f6e6b4]"
                >
                  <span>VIP Outtakes</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Media Kit & Inquiries Banner */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-[#d4af37]/45 bg-gradient-to-r from-[#17140f] via-[#111116] to-[#161309] p-8 sm:p-10">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#d4af37] uppercase">
                Editorial &amp; Commercial Bookings
              </span>
              <h3 className="font-serif mt-2 text-2xl font-bold text-white sm:text-3xl">
                Interested in Feature Bookings or Tear-Sheet Reprints?
              </h3>
              <p className="mt-2 max-w-2xl text-xs leading-relaxed text-zinc-300 sm:text-sm">
                For magazine editorials, cover inquiries, commercial campaigns,
                or verified press accreditation, connect directly with Shinee and
                her representation.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <PressKitModal />
              <Link
                href="/menu"
                className="rounded-xl border border-[#d4af37]/50 bg-white/[0.04] px-5 py-3.5 text-xs font-semibold tracking-[0.16em] text-[#f6e6b4] uppercase transition hover:bg-[#d4af37]/15"
              >
                Commercial Menu
              </Link>
              <a
                href={VIP_PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="luxury-gold-btn inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-xs font-extrabold tracking-[0.18em] text-[#0a0a0a] uppercase"
              >
                <span>Direct VIP Portal</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen Interactive Magazine Reader Lightbox */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/94 p-4 backdrop-blur-2xl sm:p-6"
        >
          <div className="relative flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-[#d4af37]/50 bg-[#0c0c10] shadow-[0_25px_90px_rgba(0,0,0,0.95)]">
            {/* Lightbox Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <span className="text-[10px] font-bold tracking-[0.22em] text-[#d4af37] uppercase">
                  {selectedItem.issueBadge} • {selectedItem.pageNumber}
                </span>
                <h4 className="font-serif text-xl font-bold text-white">
                  {selectedItem.title}
                </h4>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setLoupeEnabled((v) => !v)}
                  className={`hidden cursor-pointer items-center gap-1.5 rounded-full border px-3 py-1.5 text-[10px] font-bold tracking-[0.16em] uppercase transition sm:inline-flex ${
                    loupeEnabled
                      ? "border-[#d4af37] bg-[#d4af37]/20 text-[#f6e6b4]"
                      : "border-white/15 bg-white/[0.04] text-zinc-400 hover:text-white"
                  }`}
                >
                  <Expand className="h-3 w-3 text-[#d4af37]" />
                  <span>2.2x Print Loupe: {loupeEnabled ? "On" : "Off"}</span>
                </button>
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

            {/* Lightbox Content */}
            <div className="overflow-y-auto p-5 sm:p-7">
              <div
                onMouseMove={(e) => {
                  if (!loupeEnabled) return;
                  const rect = e.currentTarget.getBoundingClientRect();
                  const px = e.clientX - rect.left;
                  const py = e.clientY - rect.top;
                  const xPercent = (px / rect.width) * 100;
                  const yPercent = (py / rect.height) * 100;
                  setLoupeState({
                    active: true,
                    xPercent,
                    yPercent,
                    px,
                    py,
                  });
                }}
                onMouseLeave={() =>
                  setLoupeState((prev) => ({ ...prev, active: false }))
                }
                className={`relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/15 bg-black ${
                  loupeEnabled ? "cursor-crosshair" : ""
                }`}
              >
                <Image
                  src={selectedItem.spreadImage}
                  alt={selectedItem.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />

                {/* 2.2x Jeweler's Print Loupe Magnifying Glass */}
                {loupeEnabled && loupeState.active && (
                  <div
                    className="pointer-events-none absolute hidden h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#d4af37] shadow-[0_15px_45px_rgba(0,0,0,0.95),0_0_25px_rgba(212,175,55,0.5),inset_0_0_18px_rgba(0,0,0,0.65)] sm:block"
                    style={{
                      left: `${loupeState.px}px`,
                      top: `${loupeState.py}px`,
                      backgroundImage: `url(${selectedItem.spreadImage})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "235% 235%",
                      backgroundPosition: `${loupeState.xPercent}% ${loupeState.yPercent}%`,
                    }}
                  />
                )}
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-[#d4af37] uppercase">
                    Verbatim Maxim Article Transcript
                  </p>
                  <span className="text-[11px] text-zinc-400">
                    Source: {selectedItem.creditHandle}
                  </span>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-zinc-200 sm:text-sm">
                  {selectedItem.fullEditorialText}
                </p>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4">
                  <div className="text-xs text-zinc-400">
                    <strong>Editorial Details:</strong> {selectedItem.details.styling}
                  </div>
                  <a
                    href={VIP_PORTAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="luxury-gold-btn inline-flex items-center gap-2 rounded-xl px-5 py-3 text-xs font-bold tracking-[0.16em] text-[#0a0a0a] uppercase"
                  >
                    <span>Unlock Uncensored Maxim Shoot</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
