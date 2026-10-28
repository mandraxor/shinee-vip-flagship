"use client";

import React, { useState } from "react";
import {
  Sparkles,
  CheckCircle2,
  Crown,
  Camera,
  Video,
  Clock,
  ShieldCheck,
  ArrowUpRight,
  Gift,
} from "lucide-react";
import { useAgeGate } from "@/components/AgeGateProvider";
import { VIP_PORTAL_URL } from "@/data/shineeData";

const STYLES = [
  {
    id: "cobalt",
    name: "Sapphire Silk Evening Couture",
    badge: "Noir Penthouse",
    desc: "Private skyline suite shoot in liquid royal blue satin gown.",
  },
  {
    id: "lagoon",
    name: "Emerald Lagoon Swimwear Set",
    badge: "Resort Oasis",
    desc: "Sun-drenched private pool session in custom emerald bikini & kimono.",
  },
  {
    id: "villa",
    name: "Mediterranean Adobe Villa Look",
    badge: "Tuscan Light",
    desc: "Golden-hour architecture, sheer duster & signature iced jewelry.",
  },
  {
    id: "midnight",
    name: "After-Hours Penthouse Loungewear",
    badge: "Intimate Glamour",
    desc: "Soft candlelight, silk robes, and ultra-high aesthetic intimacy.",
  },
];

const PACKAGES = [
  {
    id: "pkg-photos",
    name: "15-Photo 4K Ultra-HD Master Package",
    type: "Digital Photography",
    icon: Camera,
    baseValue: "$45 Tier Value",
  },
  {
    id: "pkg-video",
    name: "30-Photo Set + 60fps 4K Cinema Reel",
    type: "Photo & Video",
    icon: Video,
    baseValue: "$75 Tier Value",
  },
  {
    id: "pkg-call",
    name: "Private 30-Min 1-on-1 Video Call Lounge",
    type: "Live Experience",
    icon: Crown,
    baseValue: "$100 Tier Value",
  },
];

const ADDONS = [
  {
    id: "handwritten",
    name: "Handwritten Name Inscription on Final Photo",
    badge: "Personal Touch",
  },
  {
    id: "express",
    name: "24-Hour Express Turnaround Priority",
    badge: "Speed Guarantee",
  },
  {
    id: "signed-print",
    name: "Signed Maxim Page 22 Physical Print Mailed",
    badge: "Physical Collector",
  },
  {
    id: "exclusive-rights",
    name: "100% Private Vault Rights (Never Published)",
    badge: "Total Discretion",
  },
];

export default function InteractiveExperienceBuilder() {
  const [selectedStyle, setSelectedStyle] = useState(STYLES[0].id);
  const [selectedPackage, setSelectedPackage] = useState(PACKAGES[1].id);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    "handwritten",
    "exclusive-rights",
  ]);
  const { promptOnlyFans } = useAgeGate();

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const currentStyleObj = STYLES.find((s) => s.id === selectedStyle)!;
  const currentPkgObj = PACKAGES.find((p) => p.id === selectedPackage)!;

  const handleBook = () => {
    promptOnlyFans(VIP_PORTAL_URL);
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-[#d4af37]/45 bg-gradient-to-br from-[#16151a] via-[#0f0f13] to-[#121008] p-6 sm:p-10 shadow-[0_25px_80px_rgba(0,0,0,0.85)]">
      {/* Header */}
      <div className="border-b border-white/10 pb-6 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-3.5 py-1 text-[10px] font-bold tracking-[0.24em] text-[#f6e6b4] uppercase">
          <Sparkles className="h-3.5 w-3.5 text-[#d4af37]" />
          Interactive VIP Commission Builder
        </div>
        <h3 className="font-serif mt-3 text-3xl font-bold text-white sm:text-4xl">
          Curate Your Bespoke Experience
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-zinc-300 sm:text-sm">
          Customize your private shoot or interaction with Shinee. Once curated,
          inquire directly via VIP DM to lock in production.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12">
        {/* Step Selectors (Left 7 Cols) */}
        <div className="space-y-8 lg:col-span-7">
          {/* Step 1: Select Styling */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] text-[#d4af37] uppercase">
              Step 1: Select Styling &amp; Location
            </p>
            <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {STYLES.map((style) => (
                <button
                  key={style.id}
                  type="button"
                  onClick={() => setSelectedStyle(style.id)}
                  className={`cursor-pointer rounded-2xl border p-4 text-left transition ${
                    selectedStyle === style.id
                      ? "border-[#d4af37] bg-[#d4af37]/15 shadow-[0_0_20px_rgba(212,175,55,0.25)]"
                      : "border-white/10 bg-white/[0.02] hover:border-white/25"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-wider text-[#f6e6b4] uppercase">
                      {style.badge}
                    </span>
                    {selectedStyle === style.id && (
                      <CheckCircle2 className="h-4 w-4 text-[#d4af37]" />
                    )}
                  </div>
                  <h4 className="font-serif mt-1.5 text-base font-semibold text-white">
                    {style.name}
                  </h4>
                  <p className="mt-1 text-[11px] text-zinc-400">{style.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Select Media Package */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] text-[#d4af37] uppercase">
              Step 2: Choose Deliverable Format
            </p>
            <div className="mt-3 space-y-2.5">
              {PACKAGES.map((pkg) => {
                const Icon = pkg.icon;
                return (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={`flex w-full cursor-pointer items-center justify-between rounded-2xl border p-4 text-left transition ${
                      selectedPackage === pkg.id
                        ? "border-[#d4af37] bg-[#d4af37]/15 shadow-[0_0_20px_rgba(212,175,55,0.25)]"
                        : "border-white/10 bg-white/[0.02] hover:border-white/25"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#d4af37]/40 bg-black/60">
                        <Icon className="h-4 w-4 text-[#d4af37]" />
                      </div>
                      <div>
                        <h4 className="font-serif text-sm font-semibold text-white sm:text-base">
                          {pkg.name}
                        </h4>
                        <p className="text-[10px] text-zinc-400">{pkg.type}</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#f6e6b4]">
                      {pkg.baseValue}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Add-ons */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] text-[#d4af37] uppercase">
              Step 3: Exclusive Add-Ons &amp; Guarantees
            </p>
            <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {ADDONS.map((addon) => {
                const isSelected = selectedAddons.includes(addon.id);
                return (
                  <button
                    key={addon.id}
                    type="button"
                    onClick={() => toggleAddon(addon.id)}
                    className={`flex cursor-pointer items-center justify-between rounded-xl border p-3 text-left transition ${
                      isSelected
                        ? "border-[#d4af37]/80 bg-[#d4af37]/10 text-white"
                        : "border-white/10 bg-white/[0.02] text-zinc-400 hover:border-white/20"
                    }`}
                  >
                    <span className="text-xs">{addon.name}</span>
                    <CheckCircle2
                      className={`h-4 w-4 shrink-0 ml-2 ${
                        isSelected ? "text-[#d4af37]" : "text-zinc-600"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Live Summary Card (Right 5 Cols) */}
        <div className="lg:col-span-5">
          <div className="sticky top-24 rounded-3xl border border-[#d4af37]/60 bg-gradient-to-b from-[#16140e] via-[#0c0c10] to-[#08080a] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#d4af37] uppercase">
                Curated Package Summary
              </span>
              <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[9px] font-semibold text-emerald-400">
                Custom Slot Open
              </span>
            </div>

            <div className="mt-5 space-y-4 text-xs">
              <div>
                <span className="text-[10px] font-semibold text-zinc-400 uppercase">
                  Selected Styling
                </span>
                <p className="font-serif mt-0.5 text-base font-bold text-white">
                  {currentStyleObj.name}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-semibold text-zinc-400 uppercase">
                  Media Format
                </span>
                <p className="font-serif mt-0.5 text-base font-bold text-[#f6e6b4]">
                  {currentPkgObj.name}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-semibold text-zinc-400 uppercase">
                  Included Add-Ons ({selectedAddons.length})
                </span>
                <ul className="mt-1 space-y-1 text-[11px] text-zinc-300">
                  {selectedAddons.map((id) => {
                    const a = ADDONS.find((item) => item.id === id);
                    return (
                      <li key={id} className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-3 w-3 text-[#d4af37]" />
                        <span>{a?.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="border-t border-white/10 pt-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400">Estimated Value Tier:</span>
                  <span className="font-serif text-lg font-bold text-[#f6e6b4]">
                    {currentPkgObj.baseValue}
                  </span>
                </div>
                <p className="mt-1 text-[10px] text-zinc-500">
                  Exact arrangement finalized 1-on-1 via private VIP direct message.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <button
              type="button"
              onClick={handleBook}
              className="luxury-gold-btn mt-6 flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl py-4 text-xs font-extrabold tracking-[0.2em] text-[#0a0a0a] uppercase"
            >
              <Crown className="h-4 w-4" />
              <span>Lock In Commission via VIP DM</span>
              <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
            </button>
            <p className="mt-2.5 text-center text-[10px] tracking-wider text-zinc-500 uppercase">
              Direct confirmation on OnlyFans (@shinee_69)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
