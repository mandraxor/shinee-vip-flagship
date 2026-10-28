export const VIP_PORTAL_URL = "https://onlyfans.com/shinee_69";

export const SOCIAL_HANDLES = {
  onlyfans: {
    label: "OnlyFans VIP Portal",
    handle: "@shinee_69",
    url: "https://onlyfans.com/shinee_69",
    badge: "Top 0.1% Verified Creator",
    description: "Daily uncensored 4K drops, private DM access & custom video requests.",
  },
  modeling: {
    label: "Editorial & High Fashion",
    handle: "@jmj.era",
    url: "https://instagram.com/jmj.era",
    badge: "Official Portfolio",
    description: "High-fashion editorials, magazine tearsheets & haute couture archive.",
  },
  lifestyle: {
    label: "Las Vegas Luxury & BTS",
    handle: "@shinee.lv",
    url: "https://instagram.com/shinee.lv",
    badge: "Sin City Lifestyle",
    description: "Resort suites, nightlife BTS, gym lifestyle & travel diaries.",
  },
};

export interface MaximFeatureItem {
  id: string;
  issueBadge: string;
  pageNumber: string;
  title: string;
  subtitle: string;
  spreadImage: string;
  portraitImage: string;
  theme: "light-spread" | "dark-spread";
  pullQuote: string;
  fullEditorialText: string;
  highlights: string[];
  creditHandle: string;
  details: {
    location: string;
    styling: string;
    photographer: string;
    publicationYear: string;
  };
}

export const MAXIM_FEATURES: MaximFeatureItem[] = [
  {
    id: "maxim-poolside-oasis",
    issueBadge: "MAXIM NEXT • PAGE 22",
    pageNumber: "Page 22 • Collector's Print",
    title: "The Vibrant Force of Las Vegas",
    subtitle: "Emerald Resort & Diamond Signature Series",
    spreadImage: "/images/maxim/maxim-spread-poolside.jpg",
    portraitImage: "/images/editorial/shinee-poolside-resort.jpg",
    theme: "light-spread",
    pullQuote:
      "As a semi-finalist in this year's competition, she radiates enthusiasm and determination, aiming for the crown with every step.",
    fullEditorialText:
      "Shinee is a vibrant force, blending her Montana roots with the lively pulse of Las Vegas. As a semi-finalist in this year's competition, she radiates enthusiasm and determination, aiming for the crown with every step. Her deep love for animals fuels her commitment to charity, honoring a cherished pet lost to cruelty and advocating for animal rights. Beyond her modeling pursuits, Shinee thrives as an entertainer, embracing workouts and family time. In this captivating image, she exudes confidence, with the lush backdrop and striking ensemble mirroring her dynamic spirit and unwavering dedication to her passions.",
    highlights: ["Maxim Cover Girl Semi-Finalist", "Poolside Editorial", "@shinee.lv"],
    creditHandle: "@shinee.lv",
    details: {
      location: "Private Oasis Lagoon, Las Vegas NV",
      styling: "Custom Emerald Jungle Swimwear & Silk Robe with Iced VVS Nameplate",
      photographer: "Maxim Editorial Visuals",
      publicationYear: "2024–2025 Collector Edition",
    },
  },
  {
    id: "maxim-cobalt-couture",
    issueBadge: "MAXIM FEATURE • NOIR EDITION",
    pageNumber: "Noir Spread • Evening Couture",
    title: "Dazzling Lights & Sapphire Allure",
    subtitle: "Private Penthouse Suite Editorial",
    spreadImage: "/images/maxim/maxim-spread-cobalt-gown.jpg",
    portraitImage: "/images/editorial/shinee-cobalt-evening.jpg",
    theme: "dark-spread",
    pullQuote:
      "In this striking image, her elegant pose in a stunning blue dress radiates confidence and allure, perfectly capturing her dynamic essence.",
    fullEditorialText:
      "Shinee is not just a name; she embodies the vibrant spirit of a Montana girl chasing her dreams in the dazzling lights of Las Vegas. After her impressive semi-finalist finish last year, she is more determined than ever to reach the pinnacle of success in 2025. Her passion for music and modeling shines through every performance, captivating audiences and supporters alike. Deeply committed to animal welfare, Shinee honors the memory of a beloved pet, channeling her love into advocacy. Outside the spotlight, she enjoys working out and cherishing moments with her family and dog. In this striking image, her elegant pose in a stunning blue dress radiates confidence and allure, perfectly capturing her dynamic essence.",
    highlights: ["Sapphire Silk Gown", "High-Roller Lounge", "@jmj.era"],
    creditHandle: "@jmj.era",
    details: {
      location: "Skyline Suite Lounge, The Strip, Las Vegas",
      styling: "Liquid Cobalt Silk Evening Gown & Platinum Tennis Choker",
      photographer: "JMJ Fashion Archive",
      publicationYear: "2025 Feature Series",
    },
  },
  {
    id: "maxim-diamond-close-up",
    issueBadge: "MAXIM FEATURE • ICON PROFILE",
    pageNumber: "Noir Spread • Close-Up Study",
    title: "Determination, Music & High Glamour",
    subtitle: "Signature Iced-Out 'SHINEE' Pendant Portrait",
    spreadImage: "/images/maxim/maxim-spread-close-portrait.jpg",
    portraitImage: "/images/editorial/shinee-diamond-pendant.jpg",
    theme: "dark-spread",
    pullQuote:
      "After a commendable semi-finalist finish last year, she is poised to make her mark in 2025, fueled by an unwavering passion for music and modeling.",
    fullEditorialText:
      "Shinee embodies the spirit of determination and compassion, as she navigates her journey from Montana to the vibrant entertainment scene of Las Vegas. After a commendable semi-finalist finish last year, she is poised to make her mark in 2025, fueled by an unwavering passion for music and modeling. Her deep love for animals, stemming from a personal loss, drives her advocacy work, as she strives to honor her late pet. 'Animals are everything to me,' she expresses, reflecting her heartfelt commitment. In this striking photograph, Shinee's radiant features and confident stance are perfectly accentuated by the bold backdrop, exuding an energy that captures her multifaceted essence.",
    highlights: ["Signature Diamond Piece", "Music & Modeling", "@jmj.era"],
    creditHandle: "@jmj.era",
    details: {
      location: "VIP Studio Sanctuary, Las Vegas NV",
      styling: "Custom VVS Pavé 'SHINEE' Necklace & Emerald Silk Headpiece",
      photographer: "JMJ Archive & Maxim Feature Group",
      publicationYear: "2025 Icon Profile",
    },
  },
  {
    id: "maxim-villa-resilience",
    issueBadge: "MAXIM NEXT • PAGE 22 FEATURE",
    pageNumber: "Page 22 • Villa Sanctuary",
    title: "Resilience, Passion & The Crown",
    subtitle: "Private Mediterranean Villa Shoot",
    spreadImage: "/images/maxim/maxim-spread-villa.jpg",
    portraitImage: "/images/editorial/shinee-villa-swimwear.jpg",
    theme: "light-spread",
    pullQuote:
      "Shinee is not just a stunning entertainer; she embodies resilience and passion. A proud Montana native now thriving in Las Vegas.",
    fullEditorialText:
      "Shinee is not just a stunning entertainer; she embodies resilience and passion. A proud Montana native now thriving in Las Vegas, she aims to transform her semi-finalist success from 2024 into a winning journey in 2025. Her heart beats for animal welfare, a cause that resonates deeply following the loss of her beloved pet due to cruelty. 'Animals are everything to me,' she shares, dedicating her efforts to honor her angel. When not dazzling on stage or in front of the camera, Shinee enjoys working out, spending quality time with family, and cherishing moments with her dog. In this captivating shot, her confident pose and vibrant attire reflect both her dynamic personality and commitment to her dreams.",
    highlights: ["2024–2025 Semi-Finalist", "Resort Couture", "@shinee.lv"],
    creditHandle: "@shinee.lv",
    details: {
      location: "Private Tuscan Villa Estate, Nevada",
      styling: "Jungle Print Two-Piece, Diamond Timepiece & Chiffon Duster",
      photographer: "Maxim Next Official Editorial",
      publicationYear: "2024–2025 Annual Feature",
    },
  },
];

export interface TeaserGalleryItem {
  id: string;
  title: string;
  category: "Swimwear" | "Vegas Lifestyle" | "Editorial" | "VIP Vault";
  sourceHandle: "@jmj.era" | "@shinee.lv" | "@shinee_69";
  image: string;
  aspect: "tall" | "wide" | "square";
  caption: string;
  mediaCount: string;
  isLockedPreview?: boolean;
  exclusivityTag: string;
}

export const TEASER_GALLERY: TeaserGalleryItem[] = [
  {
    id: "teaser-1",
    title: "Sapphire Penthouse After Hours",
    category: "Editorial",
    sourceHandle: "@jmj.era",
    image: "/images/editorial/shinee-cobalt-evening.jpg",
    aspect: "tall",
    caption: "Private Las Vegas penthouse suite in custom cobalt silk couture.",
    mediaCount: "24 HD Photos • 2 Videos",
    isLockedPreview: false,
    exclusivityTag: "MAXIM PORTFOLIO",
  },
  {
    id: "teaser-2",
    title: "Emerald Cabana Swimwear Set",
    category: "Swimwear",
    sourceHandle: "@shinee.lv",
    image: "/images/editorial/shinee-poolside-resort.jpg",
    aspect: "tall",
    caption: "Sun-drenched private lagoon shoot featuring custom VVS diamond nameplate.",
    mediaCount: "38 Uncensored Frames",
    isLockedPreview: false,
    exclusivityTag: "RESORT EXCLUSIVE",
  },
  {
    id: "teaser-3",
    title: "VVS Diamond & Silk Close-Up",
    category: "Vegas Lifestyle",
    sourceHandle: "@jmj.era",
    image: "/images/editorial/shinee-diamond-pendant.jpg",
    aspect: "square",
    caption: "Unapologetic luxury from Montana roots to the Las Vegas Strip.",
    mediaCount: "18 Raw Portraits",
    isLockedPreview: false,
    exclusivityTag: "ICON SERIES",
  },
  {
    id: "teaser-4",
    title: "Mediterranean Villa Uncut",
    category: "Swimwear",
    sourceHandle: "@shinee.lv",
    image: "/images/editorial/shinee-villa-swimwear.jpg",
    aspect: "tall",
    caption: "Golden hour swimwear editorial captured on location in Las Vegas.",
    mediaCount: "42 Photos • BTS Reel",
    isLockedPreview: false,
    exclusivityTag: "COVER SEMI-FINALIST",
  },
  {
    id: "teaser-5",
    title: "The Uncensored Midnight Vault",
    category: "VIP Vault",
    sourceHandle: "@shinee_69",
    image: "/images/editorial/shinee-vegas-nights.jpg",
    aspect: "square",
    caption: "Members-only sets, direct 1-on-1 private messaging & custom requests.",
    mediaCount: "500+ Exclusive Media",
    isLockedPreview: true,
    exclusivityTag: "VIP MEMBERS ONLY",
  },
  {
    id: "teaser-6",
    title: "High-Roller Lounge Private Reel",
    category: "VIP Vault",
    sourceHandle: "@shinee_69",
    image: "/images/editorial/shinee-signature-glamour.jpg",
    aspect: "square",
    caption: "Behind closed doors in Sin City — unfiltered, intimate, and daily updated.",
    mediaCount: "Full Length HD Sets",
    isLockedPreview: true,
    exclusivityTag: "DIRECT ACCESS",
  },
];

export interface GalleryPhoto {
  id: string;
  title: string;
  category: "Editorial" | "Swimwear" | "Lifestyle" | "Glamour";
  image: string;
  sourceHandle: "@jmj.era" | "@shinee.lv" | "@shinee_69";
  caption: string;
  aspect: "portrait" | "tall" | "square";
  isLocked: boolean;
  meta: {
    location: string;
    outfit: string;
    resolution: string;
    exclusiveBadge: string;
  };
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "gal-1",
    title: "Sapphire Silhouette In Haute Couture",
    category: "Editorial",
    image: "/images/editorial/shinee-cobalt-evening.jpg",
    sourceHandle: "@jmj.era",
    caption: "High-fashion editorial captured in a private penthouse suite along the Las Vegas Strip.",
    aspect: "tall",
    isLocked: false,
    meta: {
      location: "Las Vegas Strip Penthouse",
      outfit: "Liquid Cobalt Silk Evening Gown",
      resolution: "4K Master Editorial",
      exclusiveBadge: "MAXIM ARCHIVE",
    },
  },
  {
    id: "gal-2",
    title: "Sun-Drenched Emerald Resort Oasis",
    category: "Swimwear",
    image: "/images/editorial/shinee-poolside-resort.jpg",
    sourceHandle: "@shinee.lv",
    caption: "Official Page 22 Maxim Next feature look with signature custom emerald bikini.",
    aspect: "tall",
    isLocked: false,
    meta: {
      location: "Private Lagoon, Nevada",
      outfit: "Custom Jungle Print Swim & Silk Kimono",
      resolution: "Ultra-HD Print Master",
      exclusiveBadge: "COVER GIRL SPREAD",
    },
  },
  {
    id: "gal-3",
    title: "VVS Diamond Pendant & Silk Scarf",
    category: "Glamour",
    image: "/images/editorial/shinee-diamond-pendant.jpg",
    sourceHandle: "@jmj.era",
    caption: "Iconic macro portrait spotlighting the hand-set diamond 'SHINEE' signature plate.",
    aspect: "portrait",
    isLocked: false,
    meta: {
      location: "VIP Studio, Las Vegas",
      outfit: "VVS Diamond Jewelry & Silk Bandana",
      resolution: "8K Studio Close-Up",
      exclusiveBadge: "SIGNATURE LOOK",
    },
  },
  {
    id: "gal-4",
    title: "Mediterranean Villa Sunbath",
    category: "Swimwear",
    image: "/images/editorial/shinee-villa-swimwear.jpg",
    sourceHandle: "@shinee.lv",
    caption: "Full-length editorial framing against white adobe architectural columns.",
    aspect: "tall",
    isLocked: false,
    meta: {
      location: "Private Villa Estate",
      outfit: "Jungle Print Two-Piece & Diamond Timepiece",
      resolution: "4K Full Body",
      exclusiveBadge: "PAGE 22 FEATURE",
    },
  },
  {
    id: "gal-5",
    title: "Vegas Nocturne: Private Penthouse Set",
    category: "Lifestyle",
    image: "/images/editorial/shinee-vegas-nights.jpg",
    sourceHandle: "@shinee.lv",
    caption: "Intimate late-night ambience in Las Vegas — the glamour of after-hours.",
    aspect: "square",
    isLocked: false,
    meta: {
      location: "Skyline Suite",
      outfit: "Midnight Silk Lounge",
      resolution: "4K Ambient Shoot",
      exclusiveBadge: "VEGAS LIFESTYLE",
    },
  },
  {
    id: "gal-6",
    title: "Signature Golden Hour Radiance",
    category: "Glamour",
    image: "/images/editorial/shinee-signature-glamour.jpg",
    sourceHandle: "@jmj.era",
    caption: "Golden light casting delicate contours on signature diamond jewelry.",
    aspect: "square",
    isLocked: false,
    meta: {
      location: "Desert Villa Sanctuary",
      outfit: "Fine Jewelry & High Glamour Hair",
      resolution: "4K Editorial Crop",
      exclusiveBadge: "PORTFOLIO HIGHLIGHT",
    },
  },
  {
    id: "gal-7",
    title: "Iced Timepiece & Pavé Macro",
    category: "Glamour",
    image: "/images/editorial/shinee-diamond-macro.jpg",
    sourceHandle: "@jmj.era",
    caption: "Intricate jewelry craftsmanship detailing the custom iced-out diamond signature piece.",
    aspect: "square",
    isLocked: false,
    meta: {
      location: "Haute Horlogerie Studio",
      outfit: "VVS Custom Nameplate",
      resolution: "Macro Jewelry Study",
      exclusiveBadge: "DETAIL FOCUS",
    },
  },
  {
    id: "gal-8",
    title: "Adobe Pillars & Chiffon Flow",
    category: "Editorial",
    image: "/images/editorial/shinee-glamour-pose.jpg",
    sourceHandle: "@jmj.era",
    caption: "Sculptural silhouette study contrasting neoclassical architecture with tropical couture.",
    aspect: "tall",
    isLocked: false,
    meta: {
      location: "Estate Terraces",
      outfit: "Chiffon Resortwear Ensemble",
      resolution: "4K High Fashion",
      exclusiveBadge: "MAXIM OUTTAKES",
    },
  },
  {
    id: "gal-9",
    title: "Midnight Sapphire Profile",
    category: "Editorial",
    image: "/images/editorial/shinee-sapphire-profile.jpg",
    sourceHandle: "@jmj.era",
    caption: "Close-up profile study in royal blue silk with subtle ambient candlelight.",
    aspect: "portrait",
    isLocked: false,
    meta: {
      location: "Private High-Roller Salon",
      outfit: "Couture Blue Silk Dress",
      resolution: "4K Cinematic Portrait",
      exclusiveBadge: "NOIR COLLECTION",
    },
  },
  {
    id: "gal-10",
    title: "The Uncensored Penthouse Vault #01",
    category: "Lifestyle",
    image: "/images/editorial/shinee-cobalt-evening.jpg",
    sourceHandle: "@shinee_69",
    caption: "Members-only private vault set featuring explicit behind-the-scenes camera angles.",
    aspect: "tall",
    isLocked: true,
    meta: {
      location: "Private Suite Sanctuary",
      outfit: "Uncensored / Members Only",
      resolution: "Uncompressed 4K Vault",
      exclusiveBadge: "VIP MEMBERS ONLY",
    },
  },
  {
    id: "gal-11",
    title: "Lagoon Cabana Uncut Series",
    category: "Swimwear",
    image: "/images/editorial/shinee-poolside-resort.jpg",
    sourceHandle: "@shinee_69",
    caption: "The full unreleased swimwear archive without print magazine redactions.",
    aspect: "tall",
    isLocked: true,
    meta: {
      location: "Secluded Oasis Villa",
      outfit: "Exclusive Bikini & BTS Video",
      resolution: "4K Full Set + 60fps BTS",
      exclusiveBadge: "VIP UNCENSORED",
    },
  },
  {
    id: "gal-12",
    title: "VIP Midnight Lounge Direct Reels",
    category: "Glamour",
    image: "/images/editorial/shinee-vegas-nights.jpg",
    sourceHandle: "@shinee_69",
    caption: "Personalized private video sessions and direct 1-on-1 photo drops.",
    aspect: "square",
    isLocked: true,
    meta: {
      location: "Private Penthouse",
      outfit: "Ultra-Exclusive Midnight Look",
      resolution: "4K Video & Live Drops",
      exclusiveBadge: "DIRECT 1-ON-1",
    },
  },
];

export interface VIPTier {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  priceDescriptor: string;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
  destinationUrl: string;
}

export const VIP_TIERS: VIPTier[] = [
  {
    id: "tier-all-access",
    name: "VIP All-Access Pass",
    tagline: "Instant access to Shinee's complete digital vault & daily photo sets.",
    badge: "Most Popular Entry",
    priceDescriptor: "Monthly VIP Membership",
    isPopular: true,
    features: [
      "Immediate unlock of 500+ uncompressed 4K photo sets",
      "Daily feed updates directly from Las Vegas shoots",
      "Full uncensored Maxim outtakes & extended spreads",
      "Exclusive access to BTS videos and travel vlogs",
      "Direct direct messaging (DM) connection on OnlyFans",
    ],
    ctaText: "Join VIP Portal (@shinee_69)",
    destinationUrl: VIP_PORTAL_URL,
  },
  {
    id: "tier-diamond",
    name: "Diamond Inner Circle",
    tagline: "Priority 1-on-1 messaging, personalized content & audio notes.",
    badge: "VIP Connoisseur",
    priceDescriptor: "Inner Circle Experience",
    features: [
      "All VIP All-Access Pass perks included",
      "Priority inbox placement for real-time 1-on-1 conversation",
      "Monthly custom photo set shot exclusively for you",
      "Direct voice notes & personalized video greeting",
      "Early preview access to upcoming magazine spreads & projects",
    ],
    ctaText: "Unlock Diamond Access",
    destinationUrl: VIP_PORTAL_URL,
  },
  {
    id: "tier-high-roller",
    name: "High-Roller Private Sanctum",
    tagline: "Bespoke custom commissions, private video calls & VIP arrangements.",
    badge: "Ultra Exclusive Tier",
    priceDescriptor: "Bespoke Commission",
    features: [
      "All Diamond Inner Circle perks included",
      "Custom photoshoots with outfit & creative consultation",
      "Private 1-on-1 HD video calling sessions",
      "Signed physical collector Maxim print delivered to your estate",
      "Personalized dedication reels & direct VIP liaison",
    ],
    ctaText: "Inquire / Book Private Tier",
    destinationUrl: VIP_PORTAL_URL,
  },
];

export interface VIPMenuItem {
  category: string;
  title: string;
  description: string;
  turnaround: string;
  deliverable: string;
  badge: string;
  url: string;
}

export const VIP_MENU_ITEMS: VIPMenuItem[] = [
  {
    category: "Custom Content",
    title: "Bespoke Themed Photoshoot",
    description:
      "A dedicated, customized 15-to-30 photo set styled to your exact preference (lingerie, haute couture, luxury swimwear, or casual glam) with your name handwritten on the final signature frame.",
    turnaround: "48 to 72 Hours",
    deliverable: "High-Res 4K Digital Package (Raw + Retouched)",
    badge: "High Demand",
    url: VIP_PORTAL_URL,
  },
  {
    category: "Private Interaction",
    title: "1-on-1 Video Chat & Private Lounge",
    description:
      "An intimate, uninterrupted 1-on-1 private video conversation directly with Shinee from her Las Vegas skyline suite. Real, personal, and completely private.",
    turnaround: "Scheduled by Appointment",
    deliverable: "Private 15 to 45 min Session",
    badge: "Intimate Access",
    url: VIP_PORTAL_URL,
  },
  {
    category: "Personal Dedication",
    title: "Personalized Video & Voice Notes",
    description:
      "Celebrate your birthday, milestone, or special evening with a custom, intimate 4K video message and voice clip recorded specifically for you.",
    turnaround: "24 Hours",
    deliverable: "4K Video File + HQ Audio",
    badge: "Fast Delivery",
    url: VIP_PORTAL_URL,
  },
  {
    category: "Commercial & Sponsorship",
    title: "Brand Collaboration & Modeling Bookings",
    description:
      "High-impact editorial modeling, luxury product placement, fashion house campaigns, and red carpet appearances across Las Vegas, Los Angeles, and Miami.",
    turnaround: "Project Based",
    deliverable: "Commercial Usage Rights & Promotion",
    badge: "Business Tier",
    url: VIP_PORTAL_URL,
  },
];

export const BIO_NARRATIVE = {
  fullName: "Shinee",
  tagline: "Maxim Cover Girl Semi-Finalist • Glamour Icon • Animal Rights Advocate",
  origin: "Montana Roots to Las Vegas Heights",
  storyIntro:
    "Blending the untamed grit of her Montana upbringing with the dazzling, high-stakes glamour of Las Vegas, Shinee has established herself as a hypnotic force across high fashion, digital entertainment, and commercial glamour.",
  maximJourneyTitle: "The Maxim Cover Girl Journey (2024 & 2025)",
  maximJourneyBody:
    "Her official recognition as a Maxim Cover Girl Semi-Finalist catapulted her into the international spotlight. Featured across multiple prestigious Page 22 editorial spreads, Shinee captivated judges and global audiences alike with her piercing eyes, sculpted poise, and vibrant, electric energy. Now poised for even greater heights in 2025, she represents the pinnacle of modern luxury glamour.",
  philanthropyTitle: "“Animals Are Everything to Me” — A Mission of Pure Heart",
  philanthropyBody:
    "Behind the high-roller suites and couture gowns lies an unwavering commitment to charity. Having endured the heartbreaking loss of a beloved pet due to cruelty, Shinee dedicates a significant portion of her public platform and personal resources to animal rescue organizations, cruelty prevention advocacy, and shelter support. For Shinee, true glamour is meaningless without compassion.",
  multidisciplinaryTitle: "Creative Vision: Modeling, Music & Fitness",
  multidisciplinaryBody:
    "Shinee approaches her work as a multidisciplinary entertainer. In addition to her demanding modeling schedule and international photoshoots, she is deeply involved in music production, daily fitness regimes that keep her runway-ready, and curating an unmatched luxury experience for her private VIP members worldwide.",
  stats: [
    { label: "Maxim Recognition", value: "Semi-Finalist" },
    { label: "Print Tearsheets", value: "4 Verified Spreads" },
    { label: "VIP Vault Content", value: "500+ 4K Sets" },
    { label: "Base of Operation", value: "Las Vegas, NV" },
  ],
};
