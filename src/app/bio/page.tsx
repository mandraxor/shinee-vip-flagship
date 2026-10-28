"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Heart,
  Crown,
  Sparkles,
  ArrowUpRight,
  Music,
  Dumbbell,
  Compass,
  CheckCircle2,
  Mail,
  Camera,
} from "lucide-react";
import {
  BIO_NARRATIVE,
  VIP_PORTAL_URL,
  SOCIAL_HANDLES,
} from "@/data/shineeData";

export default function BioPage() {
  return (
    <div className="relative py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Hero */}
        <div className="border-b border-white/10 pb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/50 bg-[#d4af37]/10 px-4 py-1.5 text-[10px] font-bold tracking-[0.24em] text-[#f6e6b4] uppercase">
            <Crown className="h-3.5 w-3.5 text-[#d4af37]" />
            Official Biography &amp; Profile Narrative
          </div>

          <h1 className="font-serif mt-5 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            The Story of <span className="gold-shimmer-text italic">Shinee</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base font-medium tracking-[0.14em] text-[#e5e4e2] uppercase sm:text-lg">
            {BIO_NARRATIVE.tagline}
          </p>

          <p className="mx-auto mt-3 max-w-2xl text-xs tracking-widest text-[#d4af37] uppercase">
            {BIO_NARRATIVE.origin}
          </p>
        </div>

        {/* Story Intro Layout */}
        <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl border border-[#d4af37]/45 bg-[#0e0e12] shadow-[0_20px_60px_rgba(0,0,0,0.85)] lg:col-span-5">
            <Image
              src="/images/editorial/shinee-glamour-pose.jpg"
              alt="Shinee Glamour Portrait"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-black/80 p-4 backdrop-blur-md">
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#d4af37] uppercase">
                Verified Icon Profile
              </p>
              <p className="font-serif text-lg font-semibold text-white">
                Shinee
              </p>
              <p className="text-xs text-zinc-400">
                Montana Native • Las Vegas Glamour • Animal Advocate
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="text-[10px] font-bold tracking-[0.22em] text-[#d4af37] uppercase">
              The Journey
            </span>
            <h2 className="font-serif mt-2 text-3xl font-bold text-white sm:text-4xl">
              From Big Sky Country to the Las Vegas Strip
            </h2>

            <p className="mt-5 text-sm leading-relaxed text-zinc-300 sm:text-base">
              {BIO_NARRATIVE.storyIntro}
            </p>

            <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
              Growing up surrounded by the dramatic open landscapes of Montana,
              Shinee cultivated a strong sense of individuality, resilience, and
              fearless ambition. Relocating to Las Vegas provided the perfect
              canvas for her magnetic presence, where she seamlessly transitioned
              into high-end glamour modeling, music, and digital entertainment.
            </p>

            {/* Quick Stats Grid */}
            <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-[#0e0e12] p-5 sm:grid-cols-4">
              {BIO_NARRATIVE.stats.map((s, idx) => (
                <div key={idx} className="border-l-2 border-[#d4af37]/50 pl-3">
                  <span className="block text-[9px] font-bold tracking-wider text-zinc-400 uppercase">
                    {s.label}
                  </span>
                  <span className="font-serif text-lg font-bold text-[#f6e6b4]">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The Maxim Cover Girl Journey */}
        <div className="mt-20 overflow-hidden rounded-3xl border border-[#d4af37]/40 bg-gradient-to-br from-[#15130d] via-[#0f0f13] to-[#12100b] p-8 sm:p-14">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/50 bg-[#d4af37]/10 px-3.5 py-1 text-[10px] font-bold tracking-[0.2em] text-[#f6e6b4] uppercase">
                <Award className="h-3.5 w-3.5 text-[#d4af37]" />
                International Recognition
              </div>
              <h2 className="font-serif mt-4 text-3xl font-bold text-white sm:text-4xl">
                {BIO_NARRATIVE.maximJourneyTitle}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
                {BIO_NARRATIVE.maximJourneyBody}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/press"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#d4af37]/60 bg-[#d4af37]/15 px-5 py-3 text-xs font-bold tracking-[0.16em] text-[#f6e6b4] uppercase transition hover:bg-[#d4af37] hover:text-black"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>Inspect All Maxim Tearsheets</span>
                </Link>
                <a
                  href={VIP_PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="luxury-gold-btn inline-flex items-center gap-2 rounded-xl px-6 py-3 text-xs font-extrabold tracking-[0.18em] text-[#0a0a0a] uppercase"
                >
                  <span>VIP Uncensored Outtakes</span>
                  <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
                </a>
              </div>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-black lg:col-span-4">
              <Image
                src="/images/editorial/shinee-sapphire-profile.jpg"
                alt="Maxim Feature Profile"
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Philanthropy Section */}
        <div className="mt-16 rounded-3xl border border-rose-500/30 bg-gradient-to-r from-[#170e10] via-[#0e0e12] to-[#120b0d] p-8 sm:p-14">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/40 bg-rose-500/10 px-3.5 py-1 text-[10px] font-bold tracking-[0.2em] text-rose-300 uppercase">
                <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500" />
                Heart Behind The Crown
              </div>
              <h2 className="font-serif mt-3 text-3xl font-bold text-white sm:text-4xl">
                {BIO_NARRATIVE.philanthropyTitle}
              </h2>
            </div>
          </div>

          <p className="mt-5 max-w-4xl text-sm leading-relaxed text-zinc-300 sm:text-base">
            {BIO_NARRATIVE.philanthropyBody}
          </p>

          <div className="mt-8 rounded-2xl border border-white/10 bg-black/40 p-6">
            <blockquote className="italic text-zinc-200">
              &ldquo;Honoring my angel through action. Every step I take in my career
              is an opportunity to give voice and safety to animals who cannot speak
              for themselves.&rdquo;
            </blockquote>
            <p className="mt-2 text-xs font-bold tracking-[0.18em] text-[#f6e6b4] uppercase">
              — Shinee (@shinee.lv)
            </p>
          </div>
        </div>

        {/* Creative Footprint Pillars */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="luxury-card rounded-3xl p-6 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d4af37]/50 bg-[#d4af37]/15">
              <Camera className="h-5 w-5 text-[#d4af37]" />
            </div>
            <h3 className="font-serif mt-5 text-xl font-bold text-white">
              Haute Couture Modeling
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-zinc-400">
              From swimwear resort campaigns to private skyline evening wear,
              crafting cinematic visual stories through @jmj.era.
            </p>
          </div>

          <div className="luxury-card rounded-3xl p-6 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d4af37]/50 bg-[#d4af37]/15">
              <Music className="h-5 w-5 text-[#d4af37]" />
            </div>
            <h3 className="font-serif mt-5 text-xl font-bold text-white">
              Music &amp; Entertainment
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-zinc-400">
              An active creative pursuing music production, performance, and
              dynamic artistic expression in the entertainment capital of the
              world.
            </p>
          </div>

          <div className="luxury-card rounded-3xl p-6 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d4af37]/50 bg-[#d4af37]/15">
              <Dumbbell className="h-5 w-5 text-[#d4af37]" />
            </div>
            <h3 className="font-serif mt-5 text-xl font-bold text-white">
              Fitness &amp; Poise
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-zinc-400">
              Maintaining an elite physique through daily disciplined training,
              healthy living, and runway-ready conditioning.
            </p>
          </div>
        </div>

        {/* Representation & Contact Inquiries Card */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-[#0e0e12] p-8 sm:flex-row sm:p-10">
          <div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#d4af37] uppercase">
              Direct Representation
            </span>
            <h3 className="font-serif mt-1 text-2xl font-bold text-white">
              Bookings, Press &amp; Endorsement Inquiries
            </h3>
            <p className="mt-1 text-xs text-zinc-400">
              Represented for commercial campaigns, brand sponsorships, and red carpet appearances.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/menu"
              className="rounded-xl border border-white/20 bg-white/[0.04] px-5 py-3 text-xs font-semibold tracking-wider text-white uppercase hover:border-[#d4af37]"
            >
              Commercial Menu
            </Link>
            <a
              href={VIP_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="luxury-gold-btn inline-flex items-center gap-1.5 rounded-xl px-6 py-3 text-xs font-extrabold tracking-[0.18em] text-[#0a0a0a] uppercase"
            >
              <span>Connect on VIP</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
