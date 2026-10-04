"use client";

import React from "react";
import { TODAY_TRANSITS } from "@/lib/astrology-data";
import { Sparkles, Moon, Sun, Flame } from "lucide-react";

export default function TransitTicker() {
  return (
    <div className="w-full bg-cosmic-900/80 border-y border-white/5 py-3 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="flex items-center space-x-2 text-xs uppercase tracking-wider text-celestial-gold font-semibold shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <Sparkles className="w-3.5 h-3.5" />
            <span>Live Ephemeris Transits:</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
            <div className="flex items-center space-x-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/5">
              <Moon className="w-3 h-3 text-cyan-400" />
              <span>Moon in Scorpio 18°</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/5">
              <Sun className="w-3 h-3 text-amber-400" />
              <span>Sun in Libra 12°</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/5">
              <Flame className="w-3 h-3 text-rose-400" />
              <span>Mars in Cancer 14° (Direct)</span>
            </div>
            <div className="hidden lg:flex items-center space-x-1.5 text-slate-400">
              <span className="text-amber-300">Aspect of the Day:</span>
              <span>Sun Trine Jupiter (Favorable for vision & growth)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
