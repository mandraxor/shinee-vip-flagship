"use client";

import React from "react";
import Link from "next/link";
import {
  Crown,
  Sparkles,
  ArrowUpRight,
  Flame,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Send,
  MessageCircle,
  Video,
  Camera,
  Star,
} from "lucide-react";
import {
  VIP_TIERS,
  VIP_MENU_ITEMS,
  VIP_PORTAL_URL,
  SOCIAL_HANDLES,
} from "@/data/shineeData";
import InteractiveExperienceBuilder from "@/components/InteractiveExperienceBuilder";
import BespokeVipBlackCard from "@/components/BespokeVipBlackCard";

const PERKS_CHECKLIST = [
  "Unrestricted access to 500+ uncompressed 4K photo sets",
  "Daily feed updates directly from Las Vegas suites and desert villas",
  "Priority 1-on-1 direct messaging handled personally by Shinee",
  "Full uncensored outtakes from Maxim Next Page 22 shoots",
  "High-resolution BTS video diaries and workout sessions",
  "Custom shoot inquiries and personalized video dedications",
];

export default function VIPMenuPage() {
  return (
    <div className="relative py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Hero */}
        <div className="border-b border-white/10 pb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/50 bg-[#d4af37]/10 px-4 py-1.5 text-[10px] font-bold tracking-[0.24em] text-[#f6e6b4] uppercase">
            <Crown className="h-3.5 w-3.5 text-[#d4af37]" />
            High-Roller VIP Services &amp; Content Menu
          </div>

          <h1 className="font-serif mt-5 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            VIP Service &amp;{" "}
            <span className="gold-shimmer-text italic">Content Menu</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
            An ultra-exclusive bespoke catalog designed for patrons, collectors,
            and high-net-worth supporters seeking direct, unfiltered access to
            Maxim Semi-Finalist Shinee.
          </p>

          <div className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#d4af37]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4" />
              100% Verified Identity
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="h-4 w-4" />
              Direct 1-on-1 Interaction
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Flame className="h-4 w-4" />
              Uncensored 4K Archives
            </span>
          </div>
        </div>

        {/* 1. MEMBERSHIP TIERS SECTION */}
        <div className="mt-14">
          <div className="text-center">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#d4af37] uppercase">
              Subscription Architecture
            </span>
            <h2 className="font-serif mt-1 text-3xl font-bold text-white sm:text-4xl">
              Curated Membership Tiers
            </h2>
            <p className="mt-2 text-xs text-zinc-400">
              Select the tier matching your desired level of exclusivity.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {VIP_TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`luxury-card relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 sm:p-8 ${
                  tier.isPopular
                    ? "border-[#d4af37] shadow-[0_0_40px_rgba(212,175,55,0.22)]"
                    : ""
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

                  <ul className="mt-6 space-y-3.5 text-xs text-zinc-300">
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
                    className={`flex w-full items-center justify-center gap-2 rounded-xl py-4 text-xs font-bold tracking-[0.18em] uppercase transition ${
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
        </div>

        {/* 1.5 INTERACTIVE BESPOKE COMMISSION CONFIGURATOR */}
        <div className="mt-20">
          <InteractiveExperienceBuilder />
        </div>

        {/* 2. BESPOKE CUSTOM EXPERIENCES & SERVICES MENU */}
        <div className="mt-20">
          <div className="text-center">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#d4af37] uppercase">
              Bespoke Commissions
            </span>
            <h2 className="font-serif mt-1 text-3xl font-bold text-white sm:text-4xl">
              Custom Experiences &amp; Offerings
            </h2>
            <p className="mt-2 text-xs text-zinc-400">
              Personalized commissions arranged securely via private VIP DM.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {VIP_MENU_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="luxury-card flex flex-col justify-between rounded-3xl p-6 sm:p-8"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-md border border-[#d4af37]/40 bg-[#d4af37]/10 px-2.5 py-1 text-[10px] font-bold tracking-[0.16em] text-[#f6e6b4] uppercase">
                      {item.category}
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-semibold text-zinc-300 uppercase">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-serif mt-4 text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-zinc-300">
                    {item.description}
                  </p>

                  <div className="mt-5 space-y-1.5 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs text-zinc-400">
                    <div className="flex items-center gap-2">
                      <Clock className="h-3.5 w-3.5 text-[#d4af37]" />
                      <span>
                        <strong className="text-zinc-200">Turnaround:</strong>{" "}
                        {item.turnaround}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-3.5 w-3.5 text-[#d4af37]" />
                      <span>
                        <strong className="text-zinc-200">Deliverable:</strong>{" "}
                        {item.deliverable}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-xs text-zinc-400">
                    Inquire via VIP Direct Message
                  </span>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-[#d4af37]/60 bg-[#d4af37]/15 px-4 py-2 text-xs font-bold tracking-[0.15em] text-[#f6e6b4] uppercase transition hover:bg-[#d4af37] hover:text-black"
                  >
                    <span>Request Service</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. VIP PERKS CHECKLIST */}
        <div className="mt-20 overflow-hidden rounded-3xl border border-[#d4af37]/40 bg-gradient-to-br from-[#14120c] via-[#0d0d11] to-[#121008] p-8 sm:p-14">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="text-[10px] font-bold tracking-[0.24em] text-[#d4af37] uppercase">
                What Sets Shinee&apos;s Sanctuary Apart
              </span>
              <h2 className="font-serif mt-2 text-3xl font-bold text-white sm:text-4xl">
                The Elite VIP Standard
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-zinc-300 sm:text-sm">
                Every member enters a curated, discreet environment where content
                is delivered in authentic 4K resolution and interactions are real,
                warm, and completely uninterrupted.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {PERKS_CHECKLIST.map((perk, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#d4af37]" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 lg:col-span-5">
              <BespokeVipBlackCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
