"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Sparkles } from "lucide-react";

export default function LuxuryAudioAmbience() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const nodesRef = useRef<{
    oscillators: OscillatorNode[];
    gainNode: GainNode;
  } | null>(null);

  const startAmbience = () => {
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      // Master Gain
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.045, ctx.currentTime + 3);

      // Lowpass filter for warm, dark luxury tone
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(320, ctx.currentTime);
      filter.Q.setValueAtTime(2.5, ctx.currentTime);

      masterGain.connect(filter);
      filter.connect(ctx.destination);

      // Ambient D minor chord frequencies (D2, A2, D3, F3, A3, C4)
      const freqs = [73.42, 110.0, 146.83, 174.61, 220.0, 261.63];
      const oscillators: OscillatorNode[] = [];

      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();

        osc.type = idx % 2 === 0 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Subtle detune for rich analog chorus warmth
        osc.detune.setValueAtTime((idx - 2.5) * 4, ctx.currentTime);

        oscGain.gain.setValueAtTime(0.18 / freqs.length, ctx.currentTime);
        osc.connect(oscGain);
        oscGain.connect(masterGain);

        osc.start();
        oscillators.push(osc);
      });

      nodesRef.current = {
        oscillators,
        gainNode: masterGain,
      };

      setIsPlaying(true);
    } catch {
      // AudioContext not allowed or supported
      setIsPlaying(false);
    }
  };

  const stopAmbience = () => {
    if (nodesRef.current && audioCtxRef.current) {
      const { gainNode, oscillators } = nodesRef.current;
      const ctx = audioCtxRef.current;
      gainNode.gain.setValueAtTime(gainNode.gain.value, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);
      setTimeout(() => {
        oscillators.forEach((osc) => {
          try {
            osc.stop();
            osc.disconnect();
          } catch {
            // ignore
          }
        });
        if (ctx.state !== "closed") {
          ctx.close();
        }
        audioCtxRef.current = null;
        nodesRef.current = null;
      }, 1300);
    }
    setIsPlaying(false);
  };

  const toggleAmbience = () => {
    if (isPlaying) {
      stopAmbience();
    } else {
      startAmbience();
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <button
      type="button"
      onClick={toggleAmbience}
      title={
        isPlaying
          ? "Mute Ambient Vegas Penthouse Soundscape"
          : "Play Ambient Vegas Penthouse Soundscape"
      }
      className={`group relative flex cursor-pointer items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-semibold tracking-[0.16em] uppercase backdrop-blur-md transition-all ${
        isPlaying
          ? "border-[#d4af37] bg-[#d4af37]/15 text-[#f6e6b4] shadow-[0_0_20px_rgba(212,175,55,0.3)]"
          : "border-white/15 bg-white/[0.03] text-zinc-400 hover:border-[#d4af37]/50 hover:text-white"
      }`}
    >
      {isPlaying ? (
        <>
          <div className="flex h-2.5 items-end gap-0.5">
            <span className="w-0.5 animate-[pulse_0.8s_ease-in-out_infinite] bg-[#d4af37] h-2.5" />
            <span className="w-0.5 animate-[pulse_1.2s_ease-in-out_infinite_0.2s] bg-[#f6e6b4] h-1.5" />
            <span className="w-0.5 animate-[pulse_0.9s_ease-in-out_infinite_0.4s] bg-[#d4af37] h-3" />
            <span className="w-0.5 animate-[pulse_1.1s_ease-in-out_infinite_0.1s] bg-[#f6e6b4] h-2" />
          </div>
          <span className="hidden xl:inline">Lounge Audio: On</span>
          <Volume2 className="h-3 w-3 text-[#d4af37]" />
        </>
      ) : (
        <>
          <VolumeX className="h-3 w-3 text-zinc-400 group-hover:text-[#d4af37]" />
          <span className="hidden xl:inline">Ambience</span>
        </>
      )}
    </button>
  );
}
