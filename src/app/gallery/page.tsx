"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Camera,
  Flame,
  Lock,
  Eye,
  Sparkles,
  ArrowUpRight,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Tag,
  ShieldAlert,
} from "lucide-react";
import {
  GALLERY_PHOTOS,
  GalleryPhoto,
  VIP_PORTAL_URL,
} from "@/data/shineeData";

const CATEGORIES = [
  "All",
  "Editorial",
  "Swimwear",
  "Lifestyle",
  "Glamour",
] as const;

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof CATEGORIES)[number]>("All");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
    null
  );

  const filteredPhotos =
    activeCategory === "All"
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((photo) => photo.category === activeCategory);

  const selectedPhoto: GalleryPhoto | null =
    selectedPhotoIndex !== null ? filteredPhotos[selectedPhotoIndex] : null;

  const handlePrev = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex(
      (selectedPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length
    );
  };

  const handleNext = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredPhotos.length);
  };

  return (
    <div className="relative py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Gallery Header */}
        <div className="border-b border-white/10 pb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/50 bg-[#d4af37]/10 px-4 py-1.5 text-[10px] font-bold tracking-[0.24em] text-[#f6e6b4] uppercase">
            <Camera className="h-3.5 w-3.5 text-[#d4af37]" />
            High-Resolution Visual Portfolio
          </div>

          <h1 className="font-serif mt-5 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            The Visual <span className="gold-shimmer-text italic">Gallery</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
            Explore curated high-fashion editorials from{" "}
            <span className="font-semibold text-white">@jmj.era</span>, Las Vegas
            resort lifestyle from{" "}
            <span className="font-semibold text-white">@shinee.lv</span>, and
            exclusive teaser vaults from{" "}
            <span className="font-semibold text-white">@shinee_69</span>.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedPhotoIndex(null);
                }}
                className={`cursor-pointer rounded-full px-5 py-2 text-xs font-semibold tracking-[0.16em] uppercase transition ${
                  activeCategory === cat
                    ? "border border-[#d4af37] bg-gradient-to-r from-[#b48a28] via-[#d4af37] to-[#f6e6b4] text-[#0a0a0a] font-bold shadow-[0_0_22px_rgba(212,175,55,0.35)]"
                    : "border border-white/10 bg-white/[0.03] text-zinc-300 hover:border-[#d4af37]/50 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhotoIndex(index)}
              className="luxury-card group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl p-3"
            >
              {/* Photo Frame */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-[#0b0b0e]">
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={`object-cover object-top transition-all duration-700 ease-out group-hover:scale-108 ${
                    photo.isLocked
                      ? "scale-105 brightness-75 contrast-115 blur-[2.5px] group-hover:blur-none"
                      : ""
                  }`}
                />

                {/* Atmospheric Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-[#08080a]/25 to-transparent" />

                {/* Top Floating Tags */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                  <span className="rounded-full border border-[#d4af37]/50 bg-black/80 px-3 py-1 text-[9px] font-bold tracking-[0.18em] text-[#f6e6b4] uppercase backdrop-blur-md">
                    {photo.meta.exclusiveBadge}
                  </span>
                  <span className="rounded-full border border-white/15 bg-black/75 px-2.5 py-1 text-[9px] font-semibold tracking-[0.14em] text-zinc-200 backdrop-blur-md">
                    {photo.sourceHandle}
                  </span>
                </div>

                {/* Lock / Quick View Overlay */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center bg-black/45 p-4 text-center backdrop-blur-[2px] transition-opacity duration-300 ${
                    photo.isLocked
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d4af37] bg-[#0a0a0a]/90 shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-transform duration-300 group-hover:scale-110">
                    {photo.isLocked ? (
                      <Lock className="h-5 w-5 text-[#d4af37]" />
                    ) : (
                      <Eye className="h-5 w-5 text-[#d4af37]" />
                    )}
                  </div>
                  <span className="mt-3 rounded-full border border-[#d4af37]/50 bg-black/90 px-4 py-1 text-[10px] font-bold tracking-[0.18em] text-[#f6e6b4] uppercase">
                    {photo.isLocked
                      ? "Exclusive VIP Item"
                      : "Inspect Full Photo"}
                  </span>
                </div>

                {/* Bottom Pill */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between">
                  <span className="rounded-md border border-white/10 bg-black/85 px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] text-zinc-300 uppercase">
                    {photo.meta.resolution}
                  </span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#d4af37]/50 bg-[#d4af37] text-black">
                    <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
                  </span>
                </div>
              </div>

              {/* Photo Information */}
              <div className="px-2 pt-4 pb-2">
                <div className="flex items-center justify-between text-[10px] font-semibold tracking-[0.18em] text-[#d4af37] uppercase">
                  <span>{photo.category}</span>
                  <span>{photo.meta.location}</span>
                </div>
                <h3 className="font-serif mt-1 text-xl font-bold text-white transition group-hover:text-[#f6e6b4]">
                  {photo.title}
                </h3>
                <p className="mt-1 text-xs text-zinc-400">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* VIP Conversion Bottom Banner */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-[#d4af37]/50 bg-gradient-to-r from-[#17140f] via-[#101014] to-[#161208] p-8 sm:flex-row sm:p-10">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-3 py-0.5 text-[10px] font-bold tracking-[0.2em] text-[#f6e6b4] uppercase">
              <Flame className="h-3 w-3 text-[#d4af37]" />
              500+ Uncensored 4K Sets
            </div>
            <h3 className="font-serif mt-2 text-2xl font-bold text-white sm:text-3xl">
              Craving the Uncensored, Raw Editorial Vault?
            </h3>
            <p className="mt-1 text-xs text-zinc-300 sm:text-sm">
              Unlock daily behind-the-scenes videos, uncensored high-res sets,
              and private direct chat on OnlyFans.
            </p>
          </div>

          <a
            href={VIP_PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="luxury-gold-btn inline-flex shrink-0 items-center gap-2 rounded-2xl px-8 py-4 text-xs font-extrabold tracking-[0.2em] text-[#0a0a0a] uppercase sm:text-sm"
          >
            <Sparkles className="h-4 w-4 fill-black" />
            <span>Unlock VIP Vault Now</span>
            <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
          </a>
        </div>
      </div>

      {/* Full-Screen Photo Lightbox Modal */}
      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-2xl sm:p-6"
        >
          <div className="relative flex max-h-[94vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-[#d4af37]/50 bg-[#0c0c10] shadow-[0_25px_90px_rgba(0,0,0,0.95)]">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#d4af37] uppercase">
                  {selectedPhoto.category} • {selectedPhoto.sourceHandle}
                </span>
                <h4 className="font-serif text-lg font-bold text-white">
                  {selectedPhoto.title}
                </h4>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="cursor-pointer rounded-full border border-white/15 bg-white/[0.05] p-2 text-zinc-200 transition hover:border-[#d4af37] hover:text-[#f6e6b4]"
                  aria-label="Previous Photo"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="cursor-pointer rounded-full border border-white/15 bg-white/[0.05] p-2 text-zinc-200 transition hover:border-[#d4af37] hover:text-[#f6e6b4]"
                  aria-label="Next Photo"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPhotoIndex(null)}
                  className="ml-2 cursor-pointer rounded-full border border-white/20 bg-white/10 p-2 text-white transition hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-black"
                  aria-label="Close Lightbox"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-5 sm:p-7">
              <div className="relative aspect-[3/4] max-h-[60vh] w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
                <Image
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              {/* Photo Meta & Conversion */}
              <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.18em] text-[#d4af37] uppercase">
                      Editorial Caption
                    </p>
                    <p className="mt-1 text-xs text-zinc-300">
                      {selectedPhoto.caption}
                    </p>
                  </div>
                  <div className="space-y-1 text-xs text-zinc-400">
                    <p>
                      <strong className="text-zinc-200">Location:</strong>{" "}
                      {selectedPhoto.meta.location}
                    </p>
                    <p>
                      <strong className="text-zinc-200">Styling:</strong>{" "}
                      {selectedPhoto.meta.outfit}
                    </p>
                    <p>
                      <strong className="text-zinc-200">Master Spec:</strong>{" "}
                      {selectedPhoto.meta.resolution}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
                  <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <ShieldAlert className="h-4 w-4 text-[#d4af37]" />
                    <span>Uncensored extended version available in VIP Portal.</span>
                  </div>

                  <a
                    href={VIP_PORTAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="luxury-gold-btn inline-flex items-center gap-2 rounded-xl px-5 py-3 text-xs font-bold tracking-[0.16em] text-[#0a0a0a] uppercase"
                  >
                    <span>Unlock Full 4K Set on OnlyFans</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
