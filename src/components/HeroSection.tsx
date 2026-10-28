"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Award,
  Sparkles,
  ArrowUpRight,
  Flame,
  Camera,
  MapPin,
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import { VIP_PORTAL_URL, SOCIAL_HANDLES } from "@/data/shineeData";

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

export default function HeroSection() {
  const [activePersonaIndex, setActivePersonaIndex] = useState(0);
  const activePersona = HERO_PERSONAS[activePersonaIndex];

  return (
    <section
      id="top"
      className="relative z-10 overflow-hidden pt-8 pb-20 sm:pt-14 sm:pb-28 lg:pt-16"
    >
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
              <span className="block text-zinc-100">THE PRIVATE</span>
              <span className="gold-shimmer-text block font-bold italic">
                WORLD OF SHINEE
              </span>
            </h1>

            {/* Prominent Sub-Headline */}
            <p className="mt-4 text-base font-medium tracking-[0.14em] text-[#e5e4e2] uppercase sm:text-lg">
              Verified{" "}
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
              into one private 18+ VIP sanctuary.
            </p>

            {/* Primary Glowing Gold CTA Button & Secondary Action */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={VIP_PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="luxury-gold-btn group inline-flex items-center justify-center gap-3 rounded-2xl px-8 py-4.5 text-sm font-extrabold tracking-[0.22em] text-[#0a0a0a] uppercase sm:px-10 sm:py-5 sm:text-base"
              >
                <Sparkles className="h-5 w-5 fill-[#0a0a0a] transition-transform duration-300 group-hover:rotate-12" />
                <span>Enter VIP Portal</span>
                <ArrowUpRight className="h-5 w-5 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#maxim-showcase"
                className="inline-flex items-center justify-center gap-2.5 rounded-2xl border border-[#d4af37]/35 bg-white/[0.03] px-6 py-4.5 text-xs font-semibold tracking-[0.18em] text-[#f6e6b4] uppercase backdrop-blur-md transition hover:border-[#d4af37] hover:bg-[#d4af37]/10 sm:py-5"
              >
                <BookOpen className="h-4 w-4 text-[#d4af37]" />
                <span>Read Maxim Spreads</span>
              </a>
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
                      ? "bg-gradient-to-r from-[#b48a28] via-[#d4af37] to-[#f6e6b4] text-[#0a0a0a] shadow-md"
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
  );
}
