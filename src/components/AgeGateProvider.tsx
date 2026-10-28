"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import AgeVerificationGate from "@/components/AgeVerificationGate";
import OnlyFansExitModal from "@/components/OnlyFansExitModal";
import { VIP_PORTAL_URL } from "@/data/shineeData";

const AGE_VERIFIED_STORAGE_KEY = "shinee_vip_18_verified";

interface AgeGateContextType {
  isAgeGateOpen: boolean;
  openAgeGate: () => void;
  closeAgeGate: () => void;
  verifyAge: (rememberMe: boolean) => void;
  promptOnlyFans: (url?: string) => void;
}

const AgeGateContext = createContext<AgeGateContextType>({
  isAgeGateOpen: false,
  openAgeGate: () => {},
  closeAgeGate: () => {},
  verifyAge: () => {},
  promptOnlyFans: () => {},
});

export function useAgeGate() {
  return useContext(AgeGateContext);
}

export default function AgeGateProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAgeGateOpen, setIsAgeGateOpen] = useState(false);
  const [hasCheckedStorage, setHasCheckedStorage] = useState(false);
  const [onlyFansPromptUrl, setOnlyFansPromptUrl] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(AGE_VERIFIED_STORAGE_KEY);
      if (saved !== "true") {
        setIsAgeGateOpen(true);
      }
    } catch {
      setIsAgeGateOpen(true);
    } finally {
      setHasCheckedStorage(true);
    }
  }, []);

  // Global Click Interceptor: Intercept ANY button or link directing to OnlyFans
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Find closest anchor tag or element with data-onlyfans-trigger
      const anchor = target.closest("a");
      if (anchor) {
        const href = anchor.getAttribute("href");
        if (
          href &&
          (href.includes("onlyfans.com") ||
            href === "/vip" ||
            href.endsWith("/vip"))
        ) {
          e.preventDefault();
          e.stopPropagation();
          const targetUrl =
            href === "/vip" || href.endsWith("/vip") ? VIP_PORTAL_URL : href;
          setOnlyFansPromptUrl(targetUrl);
          return;
        }
      }

      // Also check if clicked element or parent has data-onlyfans attribute
      const triggerEl = target.closest("[data-onlyfans-url]");
      if (triggerEl) {
        e.preventDefault();
        e.stopPropagation();
        const url = triggerEl.getAttribute("data-onlyfans-url") || VIP_PORTAL_URL;
        setOnlyFansPromptUrl(url);
      }
    };

    // Use capture phase to intercept before native link navigation
    document.addEventListener("click", handleGlobalClick, true);
    return () => {
      document.removeEventListener("click", handleGlobalClick, true);
    };
  }, []);

  const verifyAge = (rememberMe: boolean) => {
    if (rememberMe) {
      try {
        sessionStorage.setItem(AGE_VERIFIED_STORAGE_KEY, "true");
      } catch {
        // Ignore storage errors
      }
    }
    setIsAgeGateOpen(false);
  };

  const openAgeGate = () => {
    setIsAgeGateOpen(true);
  };

  const closeAgeGate = () => {
    setIsAgeGateOpen(false);
  };

  const promptOnlyFans = (url?: string) => {
    setOnlyFansPromptUrl(url || VIP_PORTAL_URL);
  };

  const handleConfirmOnlyFans = () => {
    const url = onlyFansPromptUrl || VIP_PORTAL_URL;
    setOnlyFansPromptUrl(null);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCancelOnlyFans = () => {
    setOnlyFansPromptUrl(null);
  };

  return (
    <AgeGateContext.Provider
      value={{
        isAgeGateOpen,
        openAgeGate,
        closeAgeGate,
        verifyAge,
        promptOnlyFans,
      }}
    >
      {/* 1. Initial 18+ Verification Modal Overlay upon site arrival */}
      <AgeVerificationGate
        isOpen={isAgeGateOpen}
        onVerify={verifyAge}
      />

      {/* 2. "Are you 18 or older?" Confirmation Popup before directing to OnlyFans */}
      <OnlyFansExitModal
        isOpen={onlyFansPromptUrl !== null}
        targetUrl={onlyFansPromptUrl || VIP_PORTAL_URL}
        onConfirm={handleConfirmOnlyFans}
        onCancel={handleCancelOnlyFans}
      />

      {/* Main Page Content */}
      <div
        className={`transition-all duration-500 ${
          isAgeGateOpen && hasCheckedStorage
            ? "pointer-events-none filter blur-sm scale-[0.99] select-none"
            : "blur-0 scale-100"
        }`}
      >
        {children}
      </div>
    </AgeGateContext.Provider>
  );
}
