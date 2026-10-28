"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Sparkles,
  ArrowUpRight,
  Flame,
  Camera,
  MapPin,
  CheckCircle2,
  BookOpen,
  Eye,
  ShieldCheck,
  ChevronRight,
  Heart,
  Crown,
} from "lucide-react";
import {
  VIP_PORTAL_URL,
  SOCIAL_HANDLES,
  MAXIM_FEATURES,
  GALLERY_PHOTOS,
  VIP_TIERS,
} from "@/data/shineeData";
import LuxuryTestimonials from "@/components/LuxuryTestimonials";
import EditorialMarquee from "@/components/EditorialMarquee";
import BespokeVipBlackCard from "@/components/BespokeVipBlackCard";

const HERO_PERSONAS = [
  {
    id: "jmj-era",
    handle: "@jmj.era",
    label: "Editorial & High-Fashion Modeling",
    location: "Penthouse Couture • Las Vegas",
    mainImage: "/images/editorial/shinee-cobalt-evening.jpg",
    secondaryImage: "/images/editorial/shinee-diamond-pendant.jpg",
    quote:
      "Radiating confidence and allure in custom sapphire silk — Featured in Maxim's 2025 Noir Collector Series.",
    instagramUrl: SOCIAL_HANDLES.modeling.url,
  },
  {
    id: "shinee-lv",
    handle: "@shinee.lv",
    label: "Las Vegas Luxury & Resort Lifestyle",
    location: "Private Oasis • Sin City",
    mainImage: "/images/editorial/shinee-poolside-resort.jpg",
    secondaryImage: "/images/editorial/shinee-villa-swimwear.jpg",
    quote:
      "Blending Montana roots with the electric pulse of Las Vegas — Featured on Page 22 of Maxim Next.",
    instagramUrl: SOCIAL_HANDLES.lifestyle.url,
  },
];

const STATS = [
  { label: "Maxim Status", value: "Semi-Finalist", sub: "2024 & 2025 Contender" },
  { label: "Print Spreads", value: "Page 22", sub: "Verified Tearsheet Feature" },
  { label: "Exclusive Media", value: "500+ Sets", sub: "4K Master Resolution" },
  { label: "Creator Status", value: "Top 0.1%", sub: "100% Direct Verified" },
];

export default function HomePage() {
  const [activePersonaIndex, setActivePersonaIndex] = useState(0);
  const activePersona = HERO_PERSONAS[activePersonaIndex];

  return (
    <div className="relative">
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-20 sm:pt-14 sm:pb-28 lg:pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
            {/* Left Column: High-Impact Luxury Editorial Typography & CTA */}
            <div className="lg:col-span-7">
              {/* Top Status & Maxim Cover Girl Semi-Finalist Ribbon */}
              <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-[#d4af37]/45 bg-[#121216]/90 px-4 py-1.5 shadow-[0_0_30px_rgba(212,175,55,0.18)] backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-[10px] font-bold tracking-[0.22em] text-[#f6e6b4] uppercase sm:text-xs">
                  Maxim Cover Girl Semi-Finalist
                </span>
                <span className="text-zinc-600">•</span>
                <span className="inline-flex items-center gap-1 text-[10px] font-medium tracking-[0.16em] text-zinc-300 uppercase">
                  <MapPin className="h-3 w-3 text-[#d4af37]" />
                  Las Vegas, NV
                </span>
              </div>

              {/* Main Display Title */}
              <h1 className="font-serif mt-6 text-5xl leading-[1.04] font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                <span className="block text-zinc-100">THE BESPOKE</span>
                <span className="gold-shimmer-text block font-bold italic">
                  FLAGSHIP OF SHINEE
                </span>
              </h1>

              {/* Prominent Sub-Headline */}
              <p className="mt-4 text-base font-medium tracking-[0.14em] text-[#e5e4e2] uppercase sm:text-lg">
                Official Portfolio of{" "}
                <span className="border-b border-[#d4af37] pb-0.5 font-semibold text-[#f6e6b4]">
                  Maxim Cover Girl Semi-Finalist
                </span>{" "}
                &amp; Las Vegas Glamour Icon
              </p>

              {/* Editorial Bio Lead */}
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
                From her Montana roots to the high-roller penthouses of Las Vegas,
                experience the unfiltered artistry of{" "}
                <strong className="font-semibold text-white">Shinee</strong>.
                Curating high-fashion editorial glamour from{" "}
                <a
                  href={SOCIAL_HANDLES.modeling.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#f6e6b4] underline decoration-[#d4af37]/50 underline-offset-4 transition hover:text-white"
                >
                  @jmj.era
                </a>{" "}
                and sun-drenched Sin City luxury from{" "}
                <a
                  href={SOCIAL_HANDLES.lifestyle.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#f6e6b4] underline decoration-[#d4af37]/50 underline-offset-4 transition hover:text-white"
                >
                  @shinee.lv
                </a>{" "}
                into one private, world-class 18+ VIP sanctuary.
              </p>

              {/* Primary Glowing Gold CTA Button & Secondary Routing */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={VIP_PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="luxury-gold-btn group inline-flex items-center justify-center gap-3 rounded-2xl px-8 py-4.5 text-sm font-extrabold tracking-[0.22em] text-[#0a0a0a] uppercase sm:px-10 sm:py-5 sm:text-base"
                >
                  <Sparkles className="h-5 w-5 fill-[#0a0a0a] transition-transform duration-300 group-hover:rotate-12" />
                  <span>Join VIP Portal (@shinee_69)</span>
                  <ArrowUpRight className="h-5 w-5 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <Link
                  href="/press"
                  className="inline-flex items-center justify-center gap-2.5 rounded-2xl border border-[#d4af37]/35 bg-white/[0.03] px-6 py-4.5 text-xs font-semibold tracking-[0.18em] text-[#f6e6b4] uppercase backdrop-blur-md transition hover:border-[#d4af37] hover:bg-[#d4af37]/10 sm:py-5"
                >
                  <BookOpen className="h-4 w-4 text-[#d4af37]" />
                  <span>Explore Maxim Press</span>
                </Link>
              </div>

              {/* Direct Handle Strip (@jmj.era & @shinee.lv & @shinee_69) */}
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <a
                  href={VIP_PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-[#d4af37]/40 bg-gradient-to-r from-[#d4af37]/15 to-transparent px-4 py-3 transition hover:border-[#d4af37]"
                >
                  <div>
                    <span className="block text-[10px] font-semibold tracking-[0.18em] text-[#d4af37] uppercase">
                      VIP All-Access
                    </span>
                    <span className="mt-0.5 flex items-center gap-1 text-sm font-bold text-white">
                      @shinee_69
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#d4af37]" />
                    </span>
                  </div>
                  <Flame className="h-4 w-4 text-[#d4af37] transition group-hover:scale-110" />
                </a>

                <button
                  type="button"
                  onClick={() => setActivePersonaIndex(0)}
                  className={`group flex cursor-pointer items-center justify-between rounded-xl border px-4 py-3 text-left transition ${
                    activePersonaIndex === 0
                      ? "border-[#d4af37]/60 bg-white/[0.07]"
                      : "border-white/10 bg-white/[0.02] hover:border-[#d4af37]/35"
                  }`}
                >
                  <div>
                    <span className="block text-[10px] font-semibold tracking-[0.18em] text-zinc-400 uppercase">
                      Editorial Portfolio
                    </span>
                    <span className="mt-0.5 block text-sm font-bold text-[#f6e6b4]">
                      @jmj.era
                    </span>
                  </div>
                  <Camera className="h-4 w-4 text-zinc-400 group-hover:text-[#d4af37]" />
                </button>

                <button
                  type="button"
                  onClick={() => setActivePersonaIndex(1)}
                  className={`group flex cursor-pointer items-center justify-between rounded-xl border px-4 py-3 text-left transition ${
                    activePersonaIndex === 1
                      ? "border-[#d4af37]/60 bg-white/[0.07]"
                      : "border-white/10 bg-white/[0.02] hover:border-[#d4af37]/35"
                  }`}
                >
                  <div>
                    <span className="block text-[10px] font-semibold tracking-[0.18em] text-zinc-400 uppercase">
                      Vegas Lifestyle
                    </span>
                    <span className="mt-0.5 block text-sm font-bold text-[#f6e6b4]">
                      @shinee.lv
                    </span>
                  </div>
                  <Award className="h-4 w-4 text-zinc-400 group-hover:text-[#d4af37]" />
                </button>
              </div>
            </div>

            {/* Right Column: Dual-Persona Visual Showcase (@jmj.era & @shinee.lv) */}
            <div className="relative lg:col-span-5">
              {/* Persona Toggle Pill Above Visual Frame */}
              <div className="mb-4 flex items-center justify-between rounded-full border border-white/10 bg-[#121216]/90 p-1 backdrop-blur-md">
                {HERO_PERSONAS.map((persona, index) => (
                  <button
                    key={persona.id}
                    type="button"
                    onClick={() => setActivePersonaIndex(index)}
                    className={`flex-1 cursor-pointer rounded-full px-3 py-2 text-[11px] font-semibold tracking-[0.15em] uppercase transition ${
                      activePersonaIndex === index
                        ? "bg-gradient-to-r from-[#b48a28] via-[#d4af37] to-[#f6e6b4] text-[#0a0a0a] shadow-md font-bold"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {persona.handle}
                  </button>
                ))}
              </div>

              {/* Main Luxury Portrait Frame */}
              <div className="luxury-card group relative overflow-hidden rounded-3xl p-2.5">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-[#0e0e12]">
                  <Image
                    src={activePersona.mainImage}
                    alt={`Shinee ${activePersona.handle} — Maxim Cover Girl Semi-Finalist`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-[#08080a]/25 to-transparent" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d4af37]/50 bg-black/75 px-3.5 py-1 text-[10px] font-bold tracking-[0.18em] text-[#f6e6b4] uppercase backdrop-blur-md">
                      <Award className="h-3.5 w-3.5 text-[#d4af37]" />
                      Maxim Page 22 Verified
                    </span>
                    <span className="rounded-full border border-white/20 bg-black/75 px-3 py-1 text-[10px] font-semibold tracking-[0.16em] text-white uppercase backdrop-blur-md">
                      {activePersona.handle}
                    </span>
                  </div>

                  {/* Secondary Floating Inset Card (shows companion look) */}
                  <div className="absolute right-4 bottom-28 hidden w-28 overflow-hidden rounded-xl border-2 border-[#d4af37]/70 bg-black shadow-[0_15px_35px_rgba(0,0,0,0.9)] sm:block">
                    <div className="relative aspect-[3/4] w-full">
                      <Image
                        src={activePersona.secondaryImage}
                        alt="Shinee Secondary Editorial Look"
                        fill
                        sizes="120px"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-[#0a0a0c]/85 p-4 backdrop-blur-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] font-bold tracking-[0.2em] text-[#d4af37] uppercase">
                          {activePersona.label}
                        </p>
                        <p className="mt-0.5 text-xs text-zinc-300">
                          {activePersona.location}
                        </p>
                      </div>
                      <a
                        href={VIP_PORTAL_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full border border-[#d4af37]/50 bg-[#d4af37]/20 px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] text-[#f6e6b4] uppercase transition hover:bg-[#d4af37] hover:text-black"
                      >
                        <span>Unlock Set</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    </div>
                    <p className="mt-2 line-clamp-2 text-xs italic text-zinc-300">
                      &ldquo;{activePersona.quote}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1.5 MUSEUM-GRADE EDITORIAL MARQUEE */}
      <EditorialMarquee />

      {/* 2. STATS & RECOGNITION COUNTER STRIP */}
      <section className="relative z-10 border-y border-white/10 bg-[#0c0c10]/95 py-8 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="border-l-2 border-[#d4af37]/60 pl-4 sm:pl-6"
              >
                <p className="text-[10px] font-bold tracking-[0.22em] text-[#d4af37] uppercase">
                  {stat.label}
                </p>
                <p className="font-serif mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-xs text-zinc-400">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MAXIM PRESS TEASER SECTION */}
      <section className="relative z-10 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-3.5 py-1 text-[10px] font-bold tracking-[0.24em] text-[#f6e6b4] uppercase">
                <Award className="h-3.5 w-3.5 text-[#d4af37]" />
                Verified Print Coverage
              </div>
              <h2 className="font-serif mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                The <span className="gold-shimmer-text italic">Maxim</span>{" "}
                Editorial Showcase
              </h2>
              <p className="mt-2 text-sm text-zinc-300">
                Official tear-sheet spreads and verified international coverage.
              </p>
            </div>
            <Link
              href="/press"
              className="inline-flex items-center gap-2 rounded-xl border border-[#d4af37]/40 bg-white/[0.03] px-5 py-3 text-xs font-semibold tracking-[0.16em] text-[#f6e6b4] uppercase transition hover:border-[#d4af37] hover:bg-[#d4af37]/10"
            >
              <span>View All 4 Maxim Spreads</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            {MAXIM_FEATURES.slice(0, 2).map((item) => (
              <div
                key={item.id}
                className="luxury-card group flex flex-col justify-between overflow-hidden rounded-3xl p-5"
              >
                <div>
                  <div className="mb-3 flex items-center justify-between text-[11px] text-[#f6e6b4]">
                    <span className="font-semibold tracking-[0.18em] uppercase">
                      {item.issueBadge}
                    </span>
                    <span className="text-zinc-400">{item.pageNumber}</span>
                  </div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
                    <Image
                      src={item.spreadImage}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif mt-4 text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs italic text-zinc-300">
                    &ldquo;{item.pullQuote}&rdquo;
                  </p>
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                  <Link
                    href="/press"
                    className="text-xs font-semibold tracking-[0.15em] text-[#f6e6b4] uppercase hover:underline"
                  >
                    Read Verbatim Article &rarr;
                  </Link>
                  <a
                    href={VIP_PORTAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-lg border border-[#d4af37]/50 bg-[#d4af37]/15 px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] text-[#f6e6b4] uppercase transition hover:bg-[#d4af37] hover:text-black"
                  >
                    <span>Unlock Uncensored Set</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VISUAL GALLERY PREVIEW */}
      <section className="relative z-10 border-t border-white/10 bg-[#08080a] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-3.5 py-1 text-[10px] font-bold tracking-[0.24em] text-[#f6e6b4] uppercase">
                <Camera className="h-3.5 w-3.5 text-[#d4af37]" />
                Curated High-Res Archive
              </div>
              <h2 className="font-serif mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                The Visual <span className="gold-shimmer-text italic">Portfolio</span>
              </h2>
              <p className="mt-2 text-sm text-zinc-300">
                Editorial couture, sun-drenched swimwear, and members-only vaults.
              </p>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-xl border border-[#d4af37]/40 bg-white/[0.03] px-5 py-3 text-xs font-semibold tracking-[0.16em] text-[#f6e6b4] uppercase transition hover:border-[#d4af37] hover:bg-[#d4af37]/10"
            >
              <span>Explore Complete Gallery</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {GALLERY_PHOTOS.slice(0, 4).map((photo) => (
              <Link
                key={photo.id}
                href="/gallery"
                className="luxury-card group relative overflow-hidden rounded-2xl p-2.5"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#0e0e12]">
                  <Image
                    src={photo.image}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90" />
                  <div className="absolute top-3 left-3">
                    <span className="rounded-full border border-[#d4af37]/50 bg-black/75 px-2.5 py-0.5 text-[9px] font-bold tracking-[0.16em] text-[#f6e6b4] uppercase">
                      {photo.category}
                    </span>
                  </div>
                  <div className="absolute inset-x-3 bottom-3">
                    <p className="font-serif text-sm font-semibold text-white">
                      {photo.title}
                    </p>
                    <p className="text-[10px] text-zinc-400">
                      {photo.sourceHandle} • {photo.meta.location}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BIOGRAPHY & PHILANTHROPY SPOTLIGHT */}
      <section className="relative z-10 border-t border-white/10 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-[#d4af37]/45 bg-gradient-to-br from-[#161410] via-[#0f0f13] to-[#12100a] p-8 sm:p-12 lg:p-16">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-3.5 py-1 text-[10px] font-bold tracking-[0.24em] text-[#f6e6b4] uppercase">
                  <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" />
                  Montana Roots • Las Vegas Lights • Charity Mission
                </span>
                <h2 className="font-serif mt-4 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
                  &ldquo;Animals Are Everything to Me&rdquo; — The Heart Behind
                  the Glamour
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
                  Beyond her international modeling spreads and stage performances,
                  Shinee champions a deeply personal mission. Honoring a beloved pet
                  lost to cruelty, she advocates vigorously for animal rights,
                  shelter rehabilitation, and humane rescue charities across Nevada
                  and Montana.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <Link
                    href="/bio"
                    className="inline-flex items-center gap-2 rounded-xl border border-[#d4af37]/50 bg-[#d4af37]/15 px-5 py-3 text-xs font-bold tracking-[0.16em] text-[#f6e6b4] uppercase transition hover:bg-[#d4af37] hover:text-black"
                  >
                    <span>Read Full Biography &amp; Story</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={VIP_PORTAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold tracking-wider text-zinc-400 uppercase transition hover:text-white"
                  >
                    Connect With Shinee Direct &rarr;
                  </a>
                </div>
              </div>

              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[#d4af37]/40 bg-black lg:col-span-5">
                <Image
                  src="/images/editorial/shinee-glamour-pose.jpg"
                  alt="Shinee Biography Portrait"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.5 DISCREET PATRON & INDUSTRY TESTIMONIALS */}
      <LuxuryTestimonials />

      {/* 6. VIP MEMBERSHIP TIERS & INTERACTIVE 3D CENTURION BLACK CARD */}
      <section className="relative z-10 border-t border-white/10 bg-[#09090c] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-4 py-1 text-[10px] font-bold tracking-[0.24em] text-[#f6e6b4] uppercase">
              <Crown className="h-3.5 w-3.5 text-[#d4af37]" />
              Exclusive Access Architecture
            </span>
            <h2 className="font-serif mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              VIP Membership <span className="gold-shimmer-text italic">Tiers</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-300">
              Designed for luxury connoisseurs, high-fashion collectors, and private patrons.Move your cursor across the keycard below to inspect your invitation.
            </p>
          </div>

          {/* Interactive 3D Specular VIP Keycard */}
          <div className="mt-10 mb-14">
            <BespokeVipBlackCard />
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {VIP_TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`luxury-card relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 sm:p-8 ${
                  tier.isPopular ? "border-[#d4af37] shadow-[0_0_40px_rgba(212,175,55,0.22)]" : ""
                }`}
              >
                {tier.isPopular && (
                  <div className="absolute top-0 right-0 rounded-bl-2xl bg-gradient-to-r from-[#b48a28] to-[#d4af37] px-4 py-1 text-[10px] font-extrabold tracking-[0.18em] text-[#0a0a0a] uppercase">
                    {tier.badge}
                  </div>
                )}
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {tier.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                    {tier.tagline}
                  </p>
                  <div className="mt-4 border-y border-white/10 py-3 text-xs font-semibold tracking-[0.14em] text-[#d4af37] uppercase">
                    {tier.priceDescriptor}
                  </div>

                  <ul className="mt-6 space-y-3 text-xs text-zinc-300">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#d4af37]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <a
                    href={tier.destinationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-xs font-bold tracking-[0.18em] uppercase transition ${
                      tier.isPopular
                        ? "luxury-gold-btn text-[#0a0a0a]"
                        : "border border-[#d4af37]/50 bg-white/[0.04] text-[#f6e6b4] hover:bg-[#d4af37] hover:text-black"
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-[#d4af37] uppercase hover:underline"
            >
              <span>View Bespoke Custom Content &amp; Collaboration Menu</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
