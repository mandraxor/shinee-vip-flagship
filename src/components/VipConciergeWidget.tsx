"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  ShieldCheck,
  ArrowUpRight,
  Play,
  Flame,
  Crown,
} from "lucide-react";
import { useAgeGate } from "@/components/AgeGateProvider";
import { VIP_PORTAL_URL } from "@/data/shineeData";

const SUGGESTED_INQUIRIES = [
  "Unlock VIP All-Access Vault (500+ Sets)",
  "Request Custom Photoshoot or 4K Video",
  "Schedule Private 1-on-1 Video Call",
  "Brand Sponsorship & Commercial Booking",
];

export default function VipConciergeWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [inputText, setInputText] = useState("");
  const { promptOnlyFans } = useAgeGate();

  // Subtle delayed attention pulse
  useEffect(() => {
    const timer = setTimeout(() => {
      // Keep badge visible
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    setHasUnread(false);
  };

  const handleSendOrSelect = (text: string) => {
    // When visitor sends message or clicks suggestion, route directly via the 18+ VIP prompt
    promptOnlyFans(VIP_PORTAL_URL);
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom Right) */}
      <div className="fixed right-4 bottom-5 z-40 sm:right-6 sm:bottom-6">
        {!isOpen && (
          <button
            type="button"
            onClick={handleOpen}
            className="group relative flex cursor-pointer items-center gap-3 rounded-full border border-[#d4af37]/60 bg-gradient-to-r from-[#171510] via-[#0f0f13] to-[#121008] p-2 pr-4 shadow-[0_10px_35px_rgba(0,0,0,0.85),0_0_25px_rgba(212,175,55,0.3)] transition-all duration-300 hover:scale-105 hover:border-[#d4af37]"
            aria-label="Open VIP Concierge"
          >
            {/* Shinee Avatar with Pulse Indicator */}
            <div className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-[#d4af37]">
              <Image
                src="/images/editorial/shinee-diamond-pendant.jpg"
                alt="Shinee Live VIP Concierge"
                fill
                sizes="50px"
                className="object-cover object-top"
              />
              <span className="absolute right-0 bottom-0 block h-3 w-3 rounded-full border-2 border-black bg-emerald-400" />
            </div>

            {/* Label */}
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold tracking-[0.16em] text-[#f6e6b4] uppercase">
                  Shinee Live
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <p className="text-[11px] text-zinc-300">
                Online now in Las Vegas
              </p>
            </div>

            {/* Unread Badge */}
            {hasUnread && (
              <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#d4af37] text-[10px] font-extrabold text-black shadow-md animate-bounce">
                1
              </span>
            )}
          </button>
        )}
      </div>

      {/* Slide-Up VIP Chat Drawer */}
      {isOpen && (
        <div className="fixed right-3 bottom-3 z-50 flex max-h-[84vh] w-[calc(100vw-24px)] max-w-sm flex-col overflow-hidden rounded-3xl border border-[#d4af37]/60 bg-gradient-to-b from-[#16161b] via-[#0e0e12] to-[#070709] shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_40px_rgba(212,175,55,0.25)] sm:right-6 sm:bottom-6 sm:w-[calc(100vw-32px)]">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 bg-[#121216]/90 p-4">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[#d4af37]">
                <Image
                  src="/images/editorial/shinee-diamond-pendant.jpg"
                  alt="Shinee"
                  fill
                  sizes="40px"
                  className="object-cover object-top"
                />
                <span className="absolute right-0 bottom-0 block h-2.5 w-2.5 rounded-full border-2 border-black bg-emerald-400" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-serif text-sm font-bold text-white">
                    Shinee
                  </span>
                  <Crown className="h-3.5 w-3.5 text-[#d4af37]" />
                </div>
                <p className="text-[9px] font-semibold tracking-wider text-emerald-400 uppercase">
                  Verified Creator • Las Vegas, NV
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="cursor-pointer rounded-full p-1.5 text-zinc-400 hover:bg-white/10 hover:text-white"
              aria-label="Close Concierge"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Chat Messages Body */}
          <div className="max-h-[380px] overflow-y-auto p-4 space-y-3.5 text-xs">
            {/* Simulated Voice Memo Card */}
            <div className="flex items-center gap-3 rounded-2xl border border-[#d4af37]/35 bg-[#d4af37]/10 p-3">
              <button
                type="button"
                onClick={() => handleSendOrSelect("Voice Note")}
                className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#d4af37] text-black shadow transition hover:scale-105"
              >
                <Play className="h-4 w-4 fill-black ml-0.5" />
              </button>
              <div className="flex-1">
                <p className="text-[10px] font-bold tracking-wider text-[#f6e6b4] uppercase">
                  Private Voice Greeting (0:14)
                </p>
                <div className="mt-1 flex items-center gap-0.5">
                  {[4, 10, 16, 8, 14, 20, 12, 18, 9, 15, 7, 12, 18, 11].map(
                    (h, i) => (
                      <span
                        key={i}
                        className="w-1 rounded-full bg-[#d4af37]/70"
                        style={{ height: `${h}px` }}
                      />
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Welcome Text Bubble */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 leading-relaxed text-zinc-300">
              <p>
                Hey love! Welcome to my private digital flagship. ✨
              </p>
              <p className="mt-2 text-zinc-300">
                I personally reply to all direct messages on my VIP portal.
                Whether you want to unlock my full 4K uncensored vault, request a
                bespoke photoshoot, or chat 1-on-1, what can I curate for you today?
              </p>
              <span className="mt-2 block text-right text-[9px] text-zinc-500">
                Just now • Las Vegas Skyline Suite
              </span>
            </div>

            {/* Quick Inquiry Options */}
            <div className="space-y-1.5 pt-1">
              <p className="text-[9px] font-bold tracking-[0.18em] text-[#d4af37] uppercase">
                Quick Inquiries:
              </p>
              {SUGGESTED_INQUIRIES.map((inquiry, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSendOrSelect(inquiry)}
                  className="flex w-full cursor-pointer items-center justify-between rounded-xl border border-white/10 bg-[#121217] px-3 py-2 text-left text-[11px] text-zinc-200 transition hover:border-[#d4af37]/60 hover:bg-[#d4af37]/15 hover:text-white"
                >
                  <span className="truncate">{inquiry}</span>
                  <ArrowUpRight className="h-3 w-3 shrink-0 text-[#d4af37]" />
                </button>
              ))}
            </div>
          </div>

          {/* Footer Input Area */}
          <div className="border-t border-white/10 bg-[#101014] p-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendOrSelect(inputText);
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Message Shinee directly..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="flex-1 rounded-xl border border-white/15 bg-black/60 px-3 py-2 text-xs text-white placeholder-zinc-500 focus:border-[#d4af37] focus:outline-none"
              />
              <button
                type="submit"
                className="luxury-gold-btn flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl text-black"
                title="Send Message to VIP Portal"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
            <p className="mt-2 text-center text-[9px] tracking-wider text-zinc-500 uppercase">
              Routes securely to OnlyFans 18+ VIP DM
            </p>
          </div>
        </div>
      )}
    </>
  );
}
