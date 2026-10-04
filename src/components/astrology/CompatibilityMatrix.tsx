"use client";

import React, { useState } from "react";
import { ZodiacSignName } from "@/types/astrology";
import { ZODIAC_SIGNS } from "@/lib/astrology-data";
import { Heart, Sparkles, Flame, ShieldAlert, Award, RefreshCw } from "lucide-react";

export default function CompatibilityMatrix() {
  const signs = Object.keys(ZODIAC_SIGNS) as ZodiacSignName[];
  const [sign1, setSign1] = useState<ZodiacSignName>("Scorpio");
  const [sign2, setSign2] = useState<ZodiacSignName>("Cancer");

  const elem1 = ZODIAC_SIGNS[sign1].element;
  const elem2 = ZODIAC_SIGNS[sign2].element;

  // Synastry score algorithm based on astrological element harmonies
  const calculateSynastry = () => {
    let baseScore = 75;
    let verdict = "Dynamic Karmic Connection";
    let deepAnalysis = "";

    if (elem1 === elem2) {
      baseScore = 94;
      verdict = "Harmonic Elemental Resonance (Golden Match)";
      deepAnalysis = `Sharing the ${elem1} element grants ${sign1} and ${sign2} an effortless psychic shorthand. You naturally understand each other's core motivations without needing prolonged explanations.`;
    } else if (
      (elem1 === "Fire" && elem2 === "Air") ||
      (elem1 === "Air" && elem2 === "Fire")
    ) {
      baseScore = 91;
      verdict = "Creative Inspiration & Passionate Expansion";
      deepAnalysis = `Fire and Air fan each other's flames. ${sign1} sparks enthusiasm and decisive momentum, while ${sign2} introduces visionary intellect and expansive perspectives.`;
    } else if (
      (elem1 === "Earth" && elem2 === "Water") ||
      (elem1 === "Water" && elem2 === "Earth")
    ) {
      baseScore = 93;
      verdict = "Nourishing Sacred Sanctuary (Oasis Union)";
      deepAnalysis = `Earth provides steady containment and emotional security for Water's rich tides, while Water enriches Earth's fertile ambitions into tangible spiritual abundance.`;
    } else {
      baseScore = 72;
      verdict = "Alchemical Growth & Polarity Attraction";
      deepAnalysis = `Operating from different elemental temperaments creates an irresistible magnetic charge. You mirror what the other lacks, serving as catalyst teachers for mutual soul evolution.`;
    }

    const emotional = elem1 === elem2 ? 96 : elem1 === "Water" || elem2 === "Water" ? 88 : 78;
    const intellectual = elem1 === "Air" || elem2 === "Air" ? 95 : 82;
    const sensual = elem1 === "Earth" || elem2 === "Earth" || elem1 === "Fire" || elem2 === "Fire" ? 92 : 84;
    const communication = elem1 === elem2 ? 90 : 79;

    return {
      score: baseScore,
      verdict,
      deepAnalysis,
      emotional,
      intellectual,
      sensual,
      communication,
    };
  };

  const match = calculateSynastry();

  return (
    <div className="w-full glass-panel-gold rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
      <div className="flex items-center space-x-2 text-rose-400 text-xs uppercase tracking-widest font-semibold mb-3">
        <Heart className="w-4 h-4" />
        <span>Synastry & Alchemical Matchmaker</span>
      </div>

      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
        Test Cosmic Zodiac Love Compatibility
      </h2>
      <p className="text-slate-300 text-sm mb-8 max-w-2xl leading-relaxed">
        Select any two zodiac archetypes to calculate their elemental chemistry, emotional synergy, communication dynamics, and soul growth lessons.
      </p>

      {/* Selectors */}
      <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-4 mb-8">
        {/* Sign 1 */}
        <div className="md:col-span-2 bg-cosmic-950/80 p-5 rounded-2xl border border-white/10">
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            First Partner
          </label>
          <div className="flex items-center space-x-3">
            <span className="text-3xl">{ZODIAC_SIGNS[sign1].symbol}</span>
            <select
              value={sign1}
              onChange={(e) => setSign1(e.target.value as ZodiacSignName)}
              className="w-full bg-cosmic-900 border border-white/10 rounded-xl px-4 py-2.5 text-base font-semibold text-white focus:outline-none focus:border-celestial-gold"
            >
              {signs.map((s) => (
                <option key={s} value={s}>
                  {s} ({ZODIAC_SIGNS[s].element})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Center Heart Icon */}
        <div className="flex justify-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-rose-500 to-amber-500 flex items-center justify-center shadow-lg shadow-rose-500/20">
            <Heart className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Sign 2 */}
        <div className="md:col-span-2 bg-cosmic-950/80 p-5 rounded-2xl border border-white/10">
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Second Partner
          </label>
          <div className="flex items-center space-x-3">
            <span className="text-3xl">{ZODIAC_SIGNS[sign2].symbol}</span>
            <select
              value={sign2}
              onChange={(e) => setSign2(e.target.value as ZodiacSignName)}
              className="w-full bg-cosmic-900 border border-white/10 rounded-xl px-4 py-2.5 text-base font-semibold text-white focus:outline-none focus:border-celestial-gold"
            >
              {signs.map((s) => (
                <option key={s} value={s}>
                  {s} ({ZODIAC_SIGNS[s].element})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Box */}
      <div className="bg-cosmic-900/90 rounded-2xl p-6 sm:p-8 border border-white/10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-celestial-amber font-semibold">
              Cosmic Compatibility Score
            </span>
            <h3 className="font-serif text-3xl font-bold text-white mt-1">
              {sign1} &amp; {sign2}
            </h3>
            <p className="text-xs text-slate-400 mt-1">{match.verdict}</p>
          </div>

          <div className="flex items-center space-x-3 bg-white/5 px-6 py-3 rounded-2xl border border-white/10">
            <Award className="w-8 h-8 text-celestial-gold" />
            <div>
              <span className="font-serif text-3xl font-bold text-celestial-gold">{match.score}%</span>
              <span className="block text-[10px] text-slate-400 uppercase tracking-wider">Synergy Index</span>
            </div>
          </div>
        </div>

        {/* 4 Pillars Progress Bars */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
          <div className="bg-white/5 p-4 rounded-xl">
            <span className="block text-xs text-slate-400 mb-1">Emotional Depth</span>
            <span className="font-bold text-white text-lg">{match.emotional}%</span>
            <div className="w-full bg-white/10 h-1.5 rounded-full mt-2">
              <div className="bg-rose-400 h-full rounded-full" style={{ width: `${match.emotional}%` }} />
            </div>
          </div>

          <div className="bg-white/5 p-4 rounded-xl">
            <span className="block text-xs text-slate-400 mb-1">Intellectual Rapport</span>
            <span className="font-bold text-white text-lg">{match.intellectual}%</span>
            <div className="w-full bg-white/10 h-1.5 rounded-full mt-2">
              <div className="bg-cyan-400 h-full rounded-full" style={{ width: `${match.intellectual}%` }} />
            </div>
          </div>

          <div className="bg-white/5 p-4 rounded-xl">
            <span className="block text-xs text-slate-400 mb-1">Sensual Chemistry</span>
            <span className="font-bold text-white text-lg">{match.sensual}%</span>
            <div className="w-full bg-white/10 h-1.5 rounded-full mt-2">
              <div className="bg-amber-400 h-full rounded-full" style={{ width: `${match.sensual}%` }} />
            </div>
          </div>

          <div className="bg-white/5 p-4 rounded-xl">
            <span className="block text-xs text-slate-400 mb-1">Communication Flow</span>
            <span className="font-bold text-white text-lg">{match.communication}%</span>
            <div className="w-full bg-white/10 h-1.5 rounded-full mt-2">
              <div className="bg-purple-400 h-full rounded-full" style={{ width: `${match.communication}%` }} />
            </div>
          </div>
        </div>

        {/* Deep Synastry Analysis */}
        <div className="space-y-4 pt-2">
          <div className="p-5 rounded-xl bg-white/5 border border-white/5">
            <h4 className="text-sm font-serif font-bold text-white mb-2">
              Astrological Synastry Breakdown
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {match.deepAnalysis}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <div className="flex items-center space-x-2 text-emerald-400 text-xs font-semibold uppercase mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Relationship Superpower</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Mutual loyalty and unshakeable respect for each other&apos;s distinct gifts. You grant each other the safety to be unapologetically authentic.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
              <div className="flex items-center space-x-2 text-amber-400 text-xs font-semibold uppercase mb-1">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Soul Growth Opportunity</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Avoid retreating into pride or silence during misunderstandings. Radical transparency and curious listening prevent unspoken resentment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
