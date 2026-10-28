"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Crown,
  Shield,
  Sparkles,
  ArrowUpRight,
  Menu,
  X,
  BookOpen,
  Image as ImageIcon,
  User,
  Flame,
  Home,
} from "lucide-react";
import { VIP_PORTAL_URL } from "@/data/shineeData";
import { useAgeGate } from "@/components/AgeGateProvider";
import LuxuryAudioAmbience from "@/components/LuxuryAudioAmbience";

const NAV_LINKS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/press", label: "Maxim Press", icon: BookOpen },
  { href: "/gallery", label: "Gallery", icon: ImageIcon },
  { href: "/bio", label: "Bio", icon: User },
  { href: "/menu", label: "VIP Menu", icon: Flame },
];

export default function Navbar() {
  const pathname = usePathname();
  const { openAgeGate } = useAgeGate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#d4af37]/20 bg-[#0a0a0a]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand Monogram */}
        <Link
          href="/"
          className="group flex items-center gap-3 focus:outline-none"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af37]/60 bg-gradient-to-br from-[#1b1b22] to-[#09090b] shadow-[0_0_20px_rgba(212,175,55,0.25)] transition group-hover:border-[#d4af37] group-hover:shadow-[0_0_28px_rgba(212,175,55,0.4)]">
            <Crown className="h-4 w-4 text-[#d4af37]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif text-xl font-bold tracking-[0.22em] text-white uppercase sm:text-2xl">
                SHINEE
              </span>
              <span className="hidden rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-2 py-0.5 text-[9px] font-semibold tracking-[0.16em] text-[#f6e6b4] uppercase md:inline-block">
                Maxim Semi-Finalist
              </span>
            </div>
            <p className="hidden text-[10px] tracking-[0.22em] text-zinc-400 uppercase sm:block">
              Las Vegas • @jmj.era • @shinee.lv
            </p>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-xs font-semibold tracking-[0.18em] uppercase transition ${
                  isActive
                    ? "text-[#f6e6b4]"
                    : "text-zinc-300 hover:text-white"
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute inset-x-3 -bottom-3 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Ambient Penthouse Soundscape Toggle */}
          <LuxuryAudioAmbience />

          {/* Re-trigger 18+ Gate Button */}
          <button
            type="button"
            onClick={openAgeGate}
            title="Age Verification Gate"
            className="hidden cursor-pointer items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.03] px-3 py-2 text-[10px] font-semibold tracking-[0.15em] text-zinc-300 uppercase transition hover:border-[#d4af37]/50 hover:text-[#f6e6b4] sm:inline-flex"
          >
            <Shield className="h-3.5 w-3.5 text-[#d4af37]" />
            <span>18+ Gate</span>
          </button>

          {/* Persistent Glowing VIP Access CTA */}
          <a
            href={VIP_PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="luxury-gold-btn inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[11px] font-bold tracking-[0.16em] text-[#0a0a0a] uppercase sm:px-5 sm:py-2.5"
          >
            <Sparkles className="h-3.5 w-3.5 fill-[#0a0a0a]" />
            <span>VIP Access</span>
            <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-white/15 bg-white/[0.05] p-2 text-zinc-300 hover:text-white lg:hidden"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#0d0d10] px-4 py-5 lg:hidden">
          <nav className="flex flex-col gap-1.5">
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-xs font-semibold tracking-[0.18em] uppercase transition ${
                    isActive
                      ? "border border-[#d4af37]/50 bg-[#d4af37]/15 text-[#f6e6b4]"
                      : "text-zinc-300 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <Icon className="h-4 w-4 text-[#d4af37]" />
                    {link.label}
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
                </Link>
              );
            })}

            <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openAgeGate();
                }}
                className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wider text-zinc-400 uppercase"
              >
                <Shield className="h-3.5 w-3.5 text-[#d4af37]" />
                <span>18+ Verification Modal</span>
              </button>
              <span className="text-[10px] text-zinc-500">@SHINEE_69</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
