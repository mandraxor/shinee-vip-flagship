"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  X,
  Award,
  Download,
  CheckCircle2,
  Share2,
  Sparkles,
  MapPin,
  Calendar,
  Camera,
  ExternalLink,
} from "lucide-react";
import { VIP_PORTAL_URL, SOCIAL_HANDLES } from "@/data/shineeData";

export default function PressKitModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-[#d4af37]/50 bg-white/[0.04] px-5 py-3 text-xs font-semibold tracking-[0.16em] text-[#f6e6b4] uppercase transition hover:border-[#d4af37] hover:bg-[#d4af37]/15"
      >
        <Download className="h-4 w-4 text-[#d4af37]" />
        <span>Download Official Media Kit</span>
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4 backdrop-blur-2xl sm:p-6"
        >
          <div className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-[#d4af37]/50 bg-[#0d0d11] shadow-[0_30px_90px_rgba(0,0,0,0.95)]">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-[#d4af37]" />
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#f6e6b4] uppercase">
                  Official Electronic Press Kit (EPK) • 2025 Edition
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="cursor-pointer rounded-full p-1.5 text-zinc-400 hover:bg-white/10 hover:text-white"
                aria-label="Close Press Kit"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Content Body */}
            <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
              {/* Profile Card */}
              <div className="grid grid-cols-1 items-center gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:grid-cols-12">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-[#d4af37]/40 sm:col-span-4">
                  <Image
                    src="/images/editorial/shinee-diamond-pendant.jpg"
                    alt="Shinee Press Headshot"
                    fill
                    sizes="200px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="sm:col-span-8">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-3 py-0.5 text-[9px] font-bold tracking-wider text-[#f6e6b4] uppercase">
                    Maxim Cover Girl Semi-Finalist
                  </div>
                  <h3 className="font-serif mt-2 text-2xl font-bold text-white">
                    Shinee
                  </h3>
                  <p className="text-xs text-zinc-300">
                    High-Fashion Glamour Model • Las Vegas Entertainer • Animal Welfare Advocate
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-3 border-t border-white/10 pt-3 text-[11px] text-zinc-400">
                    <div>
                      <strong className="text-zinc-200">Origin:</strong> Montana
                    </div>
                    <div>
                      <strong className="text-zinc-200">Residence:</strong> Las Vegas, NV
                    </div>
                    <div>
                      <strong className="text-zinc-200">Print:</strong> Maxim Page 22 (4 Tearsheets)
                    </div>
                    <div>
                      <strong className="text-zinc-200">Digital Reach:</strong> Top 0.1% Verified
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio Summary */}
              <div>
                <h4 className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
                  Executive Summary
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-zinc-300 sm:text-sm">
                  Shinee is a nationally recognized glamour model and entertainer who
                  rose to prominence as a Maxim Cover Girl Semi-Finalist. Her portfolio
                  spans luxury resort swimwear campaigns, editorial high-fashion
                  spreads, and private skyline couture. Beyond modeling, Shinee is an
                  advocate for animal welfare charity organizations across Nevada and
                  Montana.
                </p>
              </div>

              {/* Editorial Guidelines & High-Res Tearsheets */}
              <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                <h4 className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
                  Verified Media Tearsheets
                </h4>
                <ul className="mt-3 space-y-2 text-xs text-zinc-300">
                  <li className="flex items-center justify-between">
                    <span>1. Maxim Next Page 22 Poolside Feature (2024)</span>
                    <span className="text-[#f6e6b4] font-semibold">Verified Print</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>2. Maxim Noir Penthouse Evening Couture Spread (2025)</span>
                    <span className="text-[#f6e6b4] font-semibold">Official Collector</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>3. Maxim Icon Profile: Signature Diamond Series</span>
                    <span className="text-[#f6e6b4] font-semibold">Cover Contender</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>4. Mediterranean Villa Resilience &amp; Charity Feature</span>
                    <span className="text-[#f6e6b4] font-semibold">Page 22 Tearsheet</span>
                  </li>
                </ul>
              </div>

              {/* Booking Actions */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-white/10 pt-4">
                <div className="text-xs text-zinc-400">
                  Official Representation &amp; Direct VIP Channel
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      if (typeof window !== "undefined") {
                        window.print();
                      }
                    }}
                    className="cursor-pointer rounded-xl border border-white/20 bg-white/[0.04] px-4 py-2 text-xs font-semibold tracking-wider text-zinc-200 uppercase hover:border-[#d4af37]"
                  >
                    Print / Save PDF One-Sheet
                  </button>
                  <a
                    href={VIP_PORTAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="luxury-gold-btn inline-flex items-center gap-1.5 rounded-xl px-5 py-2 text-xs font-bold tracking-wider text-black uppercase"
                  >
                    <span>Direct VIP Inquiry</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
