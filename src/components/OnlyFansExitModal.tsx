"use client";

import React from "react";
import Image from "next/image";
import {
  ShieldAlert,
  Sparkles,
  ArrowUpRight,
  X,
  Lock,
  ArrowLeft,
  Flame,
} from "lucide-react";

interface OnlyFansExitModalProps {
  isOpen: boolean;
  targetUrl: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function OnlyFansExitModal({
  isOpen,
  targetUrl,
  onConfirm,
  onCancel,
}: OnlyFansExitModalProps) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="of-confirm-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Deep Obsidian + Heavy Blur Backdrop */}
      <div
        onClick={onCancel}
        className="fixed inset-0 bg-[#050507]/95 backdrop-blur-2xl transition-opacity cursor-pointer"
      />

      {/* Ambient Gold Radial Glow Behind Modal */}
      <div
        className="pointer-events-none fixed h-[440px] w-[440px] rounded-full opacity-35 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.65) 0%, rgba(154,115,28,0.15) 60%, transparent 100%)",
        }}
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-3xl border border-[#d4af37]/50 bg-gradient-to-b from-[#15151a] via-[#0d0d10] to-[#070709] shadow-[0_35px_100px_rgba(0,0,0,0.95),0_0_60px_rgba(212,175,55,0.2)]">
        {/* Top Shimmering Gold Accent Line */}
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

        {/* Close Button at Top Right */}
        <button
          type="button"
          onClick={onCancel}
          className="absolute top-4 right-4 z-20 cursor-pointer rounded-full border border-white/15 bg-black/70 p-2 text-zinc-400 transition hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-black"
          aria-label="Exit back to main site"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Visual Teaser Header */}
        <div className="relative h-40 w-full overflow-hidden border-b border-[#d4af37]/25">
          <Image
            src="/images/editorial/shinee-cobalt-evening.jpg"
            alt="Shinee VIP Portal Destination"
            fill
            priority
            className="object-cover object-top brightness-75 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d10] via-[#0d0d10]/60 to-transparent" />

          {/* Floating Top Badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d4af37]/60 bg-black/85 px-3.5 py-1 text-[10px] font-bold tracking-[0.2em] text-[#f6e6b4] uppercase backdrop-blur-md">
              <Flame className="h-3.5 w-3.5 text-[#d4af37]" />
              External VIP Portal Destination
            </span>
          </div>

          {/* Center Shield Emblem */}
          <div className="absolute -bottom-6 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[#d4af37] bg-[#0c0c0f] shadow-[0_0_30px_rgba(212,175,55,0.5)]">
            <ShieldAlert className="h-7 w-7 text-[#d4af37]" />
          </div>
        </div>

        {/* Modal Body */}
        <div className="px-6 pt-9 pb-8 text-center sm:px-9">
          <p className="text-[11px] font-bold tracking-[0.28em] text-[#d4af37] uppercase">
            18+ Adult Content Confirmation
          </p>

          <h2
            id="of-confirm-title"
            className="font-serif mt-2 text-3xl font-bold tracking-wide text-white sm:text-4xl"
          >
            Are you <span className="gold-shimmer-text italic">18 or older</span>?
          </h2>

          <p className="mx-auto mt-3 max-w-md text-xs leading-relaxed text-zinc-300 sm:text-sm">
            You are about to be redirected to Shinee&apos;s private VIP portal on{" "}
            <strong className="text-white">OnlyFans (@shinee_69)</strong>.
            This destination contains uncompressed 18+ adult glamour sets,
            exclusive video archives, and direct 1-on-1 private messaging.
          </p>

          <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.02] p-3 text-left text-[11px] text-zinc-400">
            Destination: <span className="text-[#f6e6b4] font-medium">{targetUrl}</span>
          </div>

          {/* Action Buttons: YES (to OnlyFans) & NO (exit to site) */}
          <div className="mt-6 flex flex-col gap-3">
            {/* YES BUTTON */}
            <button
              type="button"
              onClick={onConfirm}
              className="luxury-gold-btn flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl px-6 py-4 text-xs font-extrabold tracking-[0.2em] text-[#0a0a0a] uppercase sm:text-sm"
            >
              <Sparkles className="h-4 w-4 fill-[#0a0a0a]" />
              <span>Yes, I Am 18+ — Proceed to OnlyFans</span>
              <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
            </button>

            {/* NO BUTTON */}
            <button
              type="button"
              onClick={onCancel}
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.04] px-6 py-3.5 text-xs font-semibold tracking-[0.16em] text-zinc-300 uppercase transition hover:border-[#d4af37]/60 hover:bg-white/[0.08] hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>No, I Am Under 18 — Exit Back to Main Site</span>
            </button>
          </div>

          {/* Footer Security Note */}
          <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-[10px] tracking-[0.15em] text-zinc-500 uppercase">
            <span>SECURE 18+ REDIRECT</span>
            <span>ONLYFANS.COM/SHINEE_69</span>
          </div>
        </div>
      </div>
    </div>
  );
}
