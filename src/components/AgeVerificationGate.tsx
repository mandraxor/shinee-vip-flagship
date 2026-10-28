"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShieldCheck, Sparkles, Lock, ExternalLink, AlertTriangle } from "lucide-react";
import { VIP_PORTAL_URL } from "@/data/shineeData";

interface AgeVerificationGateProps {
  isOpen: boolean;
  onVerify: (rememberMe: boolean) => void;
}

export default function AgeVerificationGate({
  isOpen,
  onVerify,
}: AgeVerificationGateProps) {
  const [rememberMe, setRememberMe] = useState(true);
  const [underageDeclined, setUnderageDeclined] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Deep Obsidian + Heavy Blur Backdrop */}
      <div className="fixed inset-0 bg-[#050507]/92 backdrop-blur-2xl transition-opacity" />

      {/* Subtle Ambient Gold Glow Behind Modal */}
      <div
        className="pointer-events-none fixed h-[420px] w-[420px] rounded-full opacity-35 blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.6) 0%, rgba(154,115,28,0.1) 65%, transparent 100%)",
        }}
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-2xl border border-[#d4af37]/40 bg-gradient-to-b from-[#141418] via-[#0c0c0f] to-[#08080a] shadow-[0_30px_90px_rgba(0,0,0,0.95),0_0_50px_rgba(212,175,55,0.18)]">
        {/* Top Shimmering Gold Accent Bar */}
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

        {/* Atmospheric Top Banner Preview */}
        <div className="relative h-44 w-full overflow-hidden border-b border-[#d4af37]/20">
          <Image
            src="/images/editorial/shinee-cobalt-evening.jpg"
            alt="Shinee — Maxim Cover Girl Semi-Finalist"
            fill
            priority
            className=" object-cover object-top scale-105 brightness-75 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0f] via-[#0c0c0f]/55 to-transparent" />

          {/* Floating Top Badges */}
          <div className="absolute top-3.5 left-4 right-4 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d4af37]/50 bg-[#0a0a0a]/80 px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-[#f6e6b4] uppercase backdrop-blur-md">
              <Sparkles className="h-3 w-3 text-[#d4af37]" />
              Maxim Cover Girl Semi-Finalist
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-black/75 px-2.5 py-1 text-[10px] font-bold tracking-[0.16em] text-[#e5e4e2] uppercase backdrop-blur-md">
              18+ Only
            </span>
          </div>

          {/* Center Monogram Emblem */}
          <div className="absolute -bottom-6 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border border-[#d4af37]/60 bg-[#0c0c0f] shadow-[0_0_25px_rgba(212,175,55,0.45)]">
            <ShieldCheck className="h-6 w-6 text-[#d4af37]" />
          </div>
        </div>

        {/* Main Content Body */}
        <div className="px-6 pt-9 pb-7 text-center sm:px-9">
          <p className="text-[11px] font-semibold tracking-[0.28em] text-[#d4af37] uppercase">
            Private Luxury Bridge • Las Vegas, NV
          </p>

          <h2
            id="age-gate-title"
            className="font-serif mt-2 text-3xl font-semibold tracking-wide sm:text-4xl"
          >
            <span className="gold-shimmer-text">Age Verification Required</span>
          </h2>

          {!underageDeclined ? (
            <>
              <p className="mx-auto mt-3 max-w-md text-xs leading-relaxed text-zinc-300 sm:text-sm">
                You are about to enter the exclusive digital sanctuary of{" "}
                <span className="font-semibold text-white">Shinee</span>{" "}
                <span className="text-[#f6e6b4]">(@jmj.era • @shinee.lv)</span>.
                This destination contains high-fashion glamour photography,
                editorial features, and direct links to adult-restricted{" "}
                <span className="text-[#d4af37]">18+ VIP content</span>.
              </p>

              {/* Legal Confirmation Box */}
              <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.02] p-3.5 text-left text-[11px] leading-relaxed text-zinc-400">
                By clicking <strong className="text-[#f6e6b4]">&ldquo;I Am 18 or Older&rdquo;</strong>,
                you confirm that you are at least 18 years of age (or the legal
                age of majority in your jurisdiction) and consent to viewing
                mature glamour modeling imagery.
              </div>

              {/* Remember verification checkbox */}
              <label className="mt-4 inline-flex cursor-pointer items-center justify-center gap-2 text-xs text-zinc-400 select-none hover:text-zinc-200">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-3.5 w-3.5 rounded border-[#d4af37]/50 bg-black text-[#d4af37] focus:ring-[#d4af37]"
                />
                <span>Remember my 18+ verification for this session</span>
              </label>

              {/* Primary & Secondary Actions */}
              <div className="mt-5 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => onVerify(rememberMe)}
                  className="luxury-gold-btn flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl px-6 py-4 text-xs font-bold tracking-[0.2em] text-[#0a0a0a] uppercase sm:text-sm"
                >
                  <Lock className="h-4 w-4 stroke-[2.4]" />
                  I Am 18 or Older — Enter Sanctuary
                </button>

                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  <a
                    href={VIP_PORTAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => onVerify(rememberMe)}
                    className="flex items-center justify-center gap-1.5 rounded-xl border border-[#d4af37]/35 bg-[#d4af37]/10 px-4 py-2.5 text-[11px] font-semibold tracking-[0.14em] text-[#f6e6b4] uppercase transition hover:border-[#d4af37] hover:bg-[#d4af37]/20"
                  >
                    <span>18+ Fast-Track to VIP</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setUnderageDeclined(true)}
                    className="cursor-pointer rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-[11px] font-medium tracking-[0.14em] text-zinc-400 uppercase transition hover:border-white/25 hover:bg-white/[0.07] hover:text-white"
                  >
                    I Am Under 18 — Exit
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="mt-5 rounded-xl border border-amber-500/30 bg-amber-950/20 p-5 text-center">
              <AlertTriangle className="mx-auto h-8 w-8 text-[#d4af37]" />
              <h3 className="font-serif mt-2 text-xl font-semibold text-white">
                Access Restricted (18+ Only)
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-zinc-300">
                We apologize, but you must be at least 18 years old to enter
                Shinee&apos;s private bridge portal and VIP lounge.
              </p>
              <button
                type="button"
                onClick={() => setUnderageDeclined(false)}
                className="mt-4 inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-[#d4af37]/40 bg-black/60 px-4 py-2 text-xs font-semibold tracking-wider text-[#f6e6b4] uppercase hover:border-[#d4af37]"
              >
                Return to Verification
              </button>
            </div>
          )}

          {/* Footer Meta */}
          <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-[10px] tracking-[0.15em] text-zinc-500 uppercase">
            <span>SHINEE VIP BRIDGE</span>
            <span>@JMJ.ERA • @SHINEE.LV</span>
          </div>
        </div>
      </div>
    </div>
  );
}
