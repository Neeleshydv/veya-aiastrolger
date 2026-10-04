import React from "react";
import Link from "next/link";
import { ZodiacSignInfo } from "@/types/astrology";
import { ArrowRight, Sparkles } from "lucide-react";

interface ZodiacCardProps {
  sign: ZodiacSignInfo;
}

export default function ZodiacCard({ sign }: ZodiacCardProps) {
  const elementColors: Record<string, string> = {
    Fire: "border-red-500/30 text-red-400 bg-red-500/10",
    Earth: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
    Air: "border-amber-500/30 text-amber-400 bg-amber-500/10",
    Water: "border-cyan-500/30 text-cyan-400 bg-cyan-500/10",
  };

  return (
    <Link
      href={`/zodiac/${sign.slug}`}
      className="group block p-6 rounded-2xl glass-panel hover:glass-panel-gold border border-white/5 hover:border-celestial-gold/40 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <span
            className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase border mb-2 ${
              elementColors[sign.element] || "border-white/20 text-slate-300 bg-white/5"
            }`}
          >
            {sign.element} • {sign.modality}
          </span>
          <h3 className="font-serif text-2xl font-bold text-white group-hover:text-celestial-amber transition-colors">
            {sign.name}
          </h3>
          <p className="text-xs text-slate-400 font-sans mt-0.5">{sign.dateRange}</p>
        </div>
        <span className="text-4xl filter drop-shadow-[0_0_10px_rgba(245,158,11,0.2)]">
          {sign.symbol}
        </span>
      </div>

      <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
        {sign.summary}
      </p>

      <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-celestial-gold">
        <span>Ruler: {sign.rulingPlanet}</span>
        <span className="flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
          <span>Explore Archetype</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </Link>
  );
}
