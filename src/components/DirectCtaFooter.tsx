"use client";

import React from "react";
import Link from "next/link";
import {
  Crown,
  Sparkles,
  ArrowUpRight,
  Camera,
  Flame,
  Shield,
  Heart,
} from "lucide-react";
import { VIP_PORTAL_URL, SOCIAL_HANDLES } from "@/data/shineeData";
import { useAgeGate } from "@/components/AgeGateProvider";

export default function DirectCtaFooter() {
  const { openAgeGate } = useAgeGate();

  return (
    <footer
      id="vip-footer"
      className="relative z-10 border-t border-[#d4af37]/25 bg-gradient-to-b from-[#0a0a0c] via-[#08080a] to-[#040405] pt-20 pb-14"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Grand Luxury Conversion Monument */}
        <div className="relative overflow-hidden rounded-3xl border border-[#d4af37]/50 bg-gradient-to-br from-[#171510] via-[#0e0e12] to-[#141109] p-8 text-center shadow-[0_30px_90px_rgba(0,0,0,0.95),0_0_60px_rgba(212,175,55,0.16)] sm:p-14">
          {/* Top Shimmer Line */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#d4af37]/45 bg-black/60 px-4 py-1.5 text-[10px] font-bold tracking-[0.24em] text-[#f6e6b4] uppercase">
            <Crown className="h-3.5 w-3.5 text-[#d4af37]" />
            Private Membership Invitation • 18+ Only
          </div>

          <h2 className="font-serif mx-auto mt-5 max-w-3xl text-4xl leading-tight font-semibold text-white sm:text-5xl lg:text-6xl">
            Step Inside{" "}
            <span className="gold-shimmer-text italic">
              Shinee&apos;s VIP Sanctuary
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-300 sm:text-base">
            Unlock immediate access to Shinee&apos;s uncensored modeling vaults,
            private Las Vegas penthouse content, and direct 1-on-1 conversations
            on OnlyFans.
          </p>

          {/* Primary Glowing Gold CTA */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={VIP_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="luxury-gold-btn inline-flex items-center justify-center gap-3 rounded-2xl px-10 py-5 text-sm font-extrabold tracking-[0.22em] text-[#0a0a0a] uppercase sm:text-base"
            >
              <Sparkles className="h-5 w-5 fill-[#0a0a0a]" />
              <span>Enter VIP Portal (@shinee_69)</span>
              <ArrowUpRight className="h-5 w-5 stroke-[2.5]" />
            </a>

            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#d4af37]/40 bg-white/[0.04] px-7 py-5 text-xs font-semibold tracking-[0.18em] text-[#f6e6b4] uppercase backdrop-blur-md transition hover:border-[#d4af37] hover:bg-[#d4af37]/10"
            >
              <span>Explore VIP Menu &amp; Tiers</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Direct Social Handle Cards */}
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
            {/* OnlyFans Card */}
            <a
              href={SOCIAL_HANDLES.onlyfans.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-2xl border border-[#d4af37]/45 bg-black/60 p-5 text-left transition hover:border-[#d4af37] hover:bg-[#d4af37]/10"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-md bg-[#d4af37]/20 px-2.5 py-1 text-[10px] font-bold tracking-[0.16em] text-[#f6e6b4] uppercase">
                  {SOCIAL_HANDLES.onlyfans.badge}
                </span>
                <Flame className="h-4 w-4 text-[#d4af37] transition group-hover:scale-110" />
              </div>
              <div className="mt-4">
                <p className="text-xs text-zinc-400">
                  {SOCIAL_HANDLES.onlyfans.label}
                </p>
                <p className="font-serif mt-0.5 flex items-center justify-between text-2xl font-bold text-white">
                  <span>{SOCIAL_HANDLES.onlyfans.handle}</span>
                  <ArrowUpRight className="h-4 w-4 text-[#d4af37]" />
                </p>
              </div>
            </a>

            {/* @jmj.era Modeling Card */}
            <a
              href={SOCIAL_HANDLES.modeling.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-2xl border border-white/15 bg-black/50 p-5 text-left transition hover:border-[#d4af37]/60 hover:bg-white/[0.04]"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-md bg-white/10 px-2.5 py-1 text-[10px] font-semibold tracking-[0.16em] text-zinc-200 uppercase">
                  {SOCIAL_HANDLES.modeling.badge}
                </span>
                <Camera className="h-4 w-4 text-[#f6e6b4] transition group-hover:scale-110" />
              </div>
              <div className="mt-4">
                <p className="text-xs text-zinc-400">
                  {SOCIAL_HANDLES.modeling.label}
                </p>
                <p className="font-serif mt-0.5 flex items-center justify-between text-2xl font-bold text-white">
                  <span>{SOCIAL_HANDLES.modeling.handle}</span>
                  <ArrowUpRight className="h-4 w-4 text-zinc-400 group-hover:text-[#d4af37]" />
                </p>
              </div>
            </a>

            {/* @shinee.lv Las Vegas Lifestyle Card */}
            <a
              href={SOCIAL_HANDLES.lifestyle.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-2xl border border-white/15 bg-black/50 p-5 text-left transition hover:border-[#d4af37]/60 hover:bg-white/[0.04]"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-md bg-white/10 px-2.5 py-1 text-[10px] font-semibold tracking-[0.16em] text-zinc-200 uppercase">
                  {SOCIAL_HANDLES.lifestyle.badge}
                </span>
                <Camera className="h-4 w-4 text-[#f6e6b4] transition group-hover:scale-110" />
              </div>
              <div className="mt-4">
                <p className="text-xs text-zinc-400">
                  {SOCIAL_HANDLES.lifestyle.label}
                </p>
                <p className="font-serif mt-0.5 flex items-center justify-between text-2xl font-bold text-white">
                  <span>{SOCIAL_HANDLES.lifestyle.handle}</span>
                  <ArrowUpRight className="h-4 w-4 text-zinc-400 group-hover:text-[#d4af37]" />
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Quick Nav Links Strip */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 border-b border-white/10 pb-8 text-xs font-semibold tracking-[0.18em] text-zinc-400 uppercase">
          <Link href="/" className="hover:text-[#f6e6b4]">Home</Link>
          <span>•</span>
          <Link href="/press" className="hover:text-[#f6e6b4]">Maxim Press</Link>
          <span>•</span>
          <Link href="/gallery" className="hover:text-[#f6e6b4]">Visual Gallery</Link>
          <span>•</span>
          <Link href="/bio" className="hover:text-[#f6e6b4]">Biography</Link>
          <span>•</span>
          <Link href="/menu" className="hover:text-[#f6e6b4]">VIP Menu &amp; Tiers</Link>
          <span>•</span>
          <a
            href={VIP_PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d4af37] hover:underline"
          >
            OnlyFans VIP
          </a>
        </div>

        {/* Bottom Legal & Brand Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-zinc-500 sm:flex-row">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-serif text-sm font-bold tracking-[0.22em] text-[#f6e6b4] uppercase">
              SHINEE
            </span>
            <span>•</span>
            <span>Maxim Cover Girl Semi-Finalist</span>
            <span>•</span>
            <span className="inline-flex items-center gap-1 text-zinc-400">
              <Heart className="h-3 w-3 text-rose-500 fill-rose-500" />
              Animal Rights &amp; Rescue Advocate
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={openAgeGate}
              className="inline-flex cursor-pointer items-center gap-1.5 text-xs text-zinc-400 transition hover:text-[#f6e6b4]"
            >
              <Shield className="h-3.5 w-3.5 text-[#d4af37]" />
              <span>18+ Age Verification Notice</span>
            </button>
            <span>•</span>
            <span className="text-[11px] text-zinc-500">
              &copy; {new Date().getFullYear()} Shinee. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
