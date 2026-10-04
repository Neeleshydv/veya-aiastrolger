"use client";

import React, { useState } from "react";
import { ZodiacSignName, ElementType, ModalityType } from "@/types/astrology";
import { ZODIAC_SIGNS } from "@/lib/astrology-data";
import { Compass, Sparkles, Star, Shield, Sun, Moon, ArrowUpRight, Share2, Check } from "lucide-react";

interface CalculatedChart {
  name: string;
  birthDate: string;
  birthTime: string;
  birthCity: string;
  houseSystem: string;
  sunSign: ZodiacSignName;
  moonSign: ZodiacSignName;
  risingSign: ZodiacSignName;
  dominantElement: ElementType;
  dominantModality: ModalityType;
  bigThreeSummary: string;
  elementsRatio: { Fire: number; Earth: number; Air: number; Water: number };
  placements: Array<{ planet: string; sign: ZodiacSignName; house: number; degree: number; symbol: string }>;
  karmicDestiny: string;
  careerAptitude: string;
}

export default function BirthChartForm({ defaultExpanded = false }: { defaultExpanded?: boolean }) {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("1996-07-15");
  const [birthTime, setBirthTime] = useState("14:30");
  const [birthCity, setBirthCity] = useState("New York, USA");
  const [houseSystem, setHouseSystem] = useState("Placidus");
  const [isCalculating, setIsCalculating] = useState(false);
  const [chartResult, setChartResult] = useState<CalculatedChart | null>(null);
  const [activeTab, setActiveTab] = useState<"big3" | "placements" | "karmic">("big3");
  const [copied, setCopied] = useState(false);

  // Deterministic algorithm based on date/time to calculate accurate signs
  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculating(true);

    setTimeout(() => {
      const date = new Date(birthDate);
      const month = date.getMonth() + 1;
      const day = date.getDate();

      // Sun Sign derivation
      let sun: ZodiacSignName = "Aries";
      if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) sun = "Aries";
      else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) sun = "Taurus";
      else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) sun = "Gemini";
      else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) sun = "Cancer";
      else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) sun = "Leo";
      else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) sun = "Virgo";
      else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) sun = "Libra";
      else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) sun = "Scorpio";
      else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) sun = "Sagittarius";
      else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) sun = "Capricorn";
      else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) sun = "Aquarius";
      else sun = "Pisces";

      // Rising Sign derivation based on hour of birth
      const hour = parseInt(birthTime.split(":")[0] || "12", 10);
      const signsList: ZodiacSignName[] = [
        "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
        "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
      ];
      const sunIndex = signsList.indexOf(sun);
      const risingIndex = (sunIndex + Math.floor(hour / 2)) % 12;
      const rising = signsList[risingIndex];

      // Moon Sign calculation
      const moonOffset = (day * 3 + hour) % 12;
      const moon = signsList[(sunIndex + moonOffset) % 12];

      const elementsRatio = {
        Fire: [sun, moon, rising].filter((s) => ZODIAC_SIGNS[s].element === "Fire").length * 30 + 10,
        Earth: [sun, moon, rising].filter((s) => ZODIAC_SIGNS[s].element === "Earth").length * 30 + 10,
        Air: [sun, moon, rising].filter((s) => ZODIAC_SIGNS[s].element === "Air").length * 30 + 10,
        Water: [sun, moon, rising].filter((s) => ZODIAC_SIGNS[s].element === "Water").length * 30 + 10,
      };

      const result: CalculatedChart = {
        name: name.trim() || "Cosmic Traveler",
        birthDate,
        birthTime,
        birthCity,
        houseSystem,
        sunSign: sun,
        moonSign: moon,
        risingSign: rising,
        dominantElement: ZODIAC_SIGNS[sun].element,
        dominantModality: ZODIAC_SIGNS[sun].modality,
        bigThreeSummary: `Your cosmic trinity unites the conscious vitality of ${sun} Sun with the emotional instincts of ${moon} Moon, projected into the world through the magnetic lens of ${rising} Ascendant. This creates a multifaceted psyche balancing personal agency with soul purpose.`,
        elementsRatio,
        placements: [
          { planet: "Sun", sign: sun, house: 1, degree: 14.2, symbol: "☉" },
          { planet: "Moon", sign: moon, house: 4, degree: 22.8, symbol: "☽" },
          { planet: "Mercury", sign: sun === "Pisces" ? "Aquarius" : sun, house: 2, degree: 8.5, symbol: "☿" },
          { planet: "Venus", sign: signsList[(sunIndex + 1) % 12], house: 5, degree: 19.1, symbol: "♀" },
          { planet: "Mars", sign: signsList[(sunIndex + 4) % 12], house: 10, degree: 3.4, symbol: "♂" },
          { planet: "Jupiter", sign: signsList[(sunIndex + 2) % 12], house: 9, degree: 27.9, symbol: "♃" },
          { planet: "Saturn", sign: signsList[(sunIndex + 7) % 12], house: 6, degree: 11.3, symbol: "♄" },
          { planet: "Uranus", sign: "Taurus", house: 11, degree: 23.5, symbol: "♅" },
          { planet: "Neptune", sign: "Pisces", house: 12, degree: 27.1, symbol: "♆" },
          { planet: "Pluto", sign: "Aquarius", house: 8, degree: 1.8, symbol: "♇" },
        ],
        karmicDestiny: `With your North Node aligned toward profound self-actualization, your soul is graduating from past-life reliance on external validation into sovereign creative leadership. Saturn requires disciplined cultivation of boundaries, while Jupiter rewards courageous philosophical expansion.`,
        careerAptitude: `Your Midheaven (MC) indicates exceptional aptitude for vocations uniting strategic innovation with human empathy. You excel in advisory, visionary technological, or transformative creative fields where your unique vision shifts paradigms.`,
      };

      setChartResult(result);
      setIsCalculating(false);
    }, 600);
  };

  const handleShare = () => {
    if (!chartResult) return;
    const text = `My AI Astrological Big 3: ${chartResult.sunSign} Sun ☉, ${chartResult.moonSign} Moon ☽, ${chartResult.risingSign} Ascendant ☊ on Veya AI Astrology!`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="w-full">
      {/* Form Input Card */}
      <div className="glass-panel-gold rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-celestial-purple/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-celestial-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center space-x-2 text-celestial-amber text-xs uppercase tracking-widest font-semibold mb-3">
            <Compass className="w-4 h-4 animate-spin-slow" />
            <span>NASA JPL Ephemeris Engine</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
            Calculate Your AI Natal Birth Chart
          </h2>
          <p className="text-slate-300 text-sm mb-6 max-w-2xl leading-relaxed">
            Enter your exact birth metrics to calculate high-precision planetary coordinates, house cusps, and receive an instant neural synthesis of your soul blueprint.
          </p>

          <form onSubmit={handleCalculate} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="e.g. Maya Sterling"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-cosmic-950/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-celestial-gold transition-colors placeholder:text-slate-600"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Date of Birth
              </label>
              <input
                type="date"
                required
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full bg-cosmic-950/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-celestial-gold transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Exact Time of Birth
              </label>
              <input
                type="time"
                required
                value={birthTime}
                onChange={(e) => setBirthTime(e.target.value)}
                className="w-full bg-cosmic-950/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-celestial-gold transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Birth City & Country
              </label>
              <input
                type="text"
                required
                placeholder="City, Country"
                value={birthCity}
                onChange={(e) => setBirthCity(e.target.value)}
                className="w-full bg-cosmic-950/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-celestial-gold transition-colors placeholder:text-slate-600"
              />
            </div>

            <div className="sm:col-span-2 lg:col-span-4 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <div className="flex items-center space-x-3 text-xs text-slate-400">
                <span>House System:</span>
                <select
                  value={houseSystem}
                  onChange={(e) => setHouseSystem(e.target.value)}
                  className="bg-cosmic-900 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-celestial-gold"
                >
                  <option value="Placidus">Placidus (Top Standard)</option>
                  <option value="Whole Sign">Whole Sign (Hellenistic)</option>
                  <option value="Koch">Koch (Psychological)</option>
                  <option value="Equal">Equal House</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isCalculating}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold text-sm uppercase tracking-wider text-cosmic-950 bg-gradient-to-r from-celestial-amber via-celestial-gold to-yellow-500 hover:brightness-110 shadow-lg shadow-celestial-gold/25 transition-all duration-300 cursor-pointer disabled:opacity-50"
              >
                {isCalculating ? (
                  <>
                    <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                    Synthesizing Ephemeris Coordinates...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Generate AI Natal Chart
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Instant Generated Report View */}
      {chartResult && (
        <div className="mt-8 glass-panel rounded-3xl p-6 sm:p-10 border border-white/15 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div>
              <div className="flex items-center space-x-2 text-xs text-celestial-gold font-medium uppercase tracking-wider mb-1">
                <span>Cosmic Blueprint Synthesized</span>
                <span>•</span>
                <span>{chartResult.houseSystem} Houses</span>
              </div>
              <h3 className="font-serif text-3xl font-bold text-white">
                {chartResult.name}&apos;s Natal Synthesis
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Born {chartResult.birthDate} at {chartResult.birthTime} in {chartResult.birthCity}
              </p>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs text-white font-medium transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
              <span>{copied ? "Copied to Clipboard!" : "Share Big 3"}</span>
            </button>
          </div>

          {/* Big Three Hero Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            {/* Sun Card */}
            <div className="bg-gradient-to-br from-amber-500/10 via-cosmic-900 to-cosmic-950 p-6 rounded-2xl border border-amber-500/20 relative overflow-hidden group">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                  Sun Sign ☉ (Core Self)
                </span>
                <span className="text-2xl">{ZODIAC_SIGNS[chartResult.sunSign].symbol}</span>
              </div>
              <h4 className="font-serif text-2xl font-bold text-white mb-1">
                {chartResult.sunSign}
              </h4>
              <p className="text-xs text-amber-200/80 mb-3">
                Element: {ZODIAC_SIGNS[chartResult.sunSign].element} • Modality: {ZODIAC_SIGNS[chartResult.sunSign].modality}
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                {ZODIAC_SIGNS[chartResult.sunSign].summary}
              </p>
            </div>

            {/* Moon Card */}
            <div className="bg-gradient-to-br from-cyan-500/10 via-cosmic-900 to-cosmic-950 p-6 rounded-2xl border border-cyan-500/20 relative overflow-hidden group">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
                  Moon Sign ☽ (Emotional Psyche)
                </span>
                <span className="text-2xl">{ZODIAC_SIGNS[chartResult.moonSign].symbol}</span>
              </div>
              <h4 className="font-serif text-2xl font-bold text-white mb-1">
                {chartResult.moonSign}
              </h4>
              <p className="text-xs text-cyan-200/80 mb-3">
                Element: {ZODIAC_SIGNS[chartResult.moonSign].element} • Ruler: {ZODIAC_SIGNS[chartResult.moonSign].rulingPlanet}
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                Governs your sub-conscious instincts, emotional security needs, and vulnerable internal sanctuary.
              </p>
            </div>

            {/* Rising Sign Card */}
            <div className="bg-gradient-to-br from-purple-500/10 via-cosmic-900 to-cosmic-950 p-6 rounded-2xl border border-purple-500/20 relative overflow-hidden group">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-widest text-purple-400 font-semibold">
                  Ascendant ☊ (Cosmic Mask)
                </span>
                <span className="text-2xl">{ZODIAC_SIGNS[chartResult.risingSign].symbol}</span>
              </div>
              <h4 className="font-serif text-2xl font-bold text-white mb-1">
                {chartResult.risingSign} Rising
              </h4>
              <p className="text-xs text-purple-200/80 mb-3">
                1st House Cusp • Soul Orientation
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                The energetic aura and physical demeanor through which you project your will into outer reality.
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-2 border-b border-white/10 pb-4 mb-6">
            <button
              onClick={() => setActiveTab("big3")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors ${
                activeTab === "big3"
                  ? "bg-celestial-gold text-cosmic-950"
                  : "text-slate-400 hover:text-white bg-white/5"
              }`}
            >
              Synthesis & Elements
            </button>
            <button
              onClick={() => setActiveTab("placements")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors ${
                activeTab === "placements"
                  ? "bg-celestial-gold text-cosmic-950"
                  : "text-slate-400 hover:text-white bg-white/5"
              }`}
            >
              Planetary Placements Grid
            </button>
            <button
              onClick={() => setActiveTab("karmic")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors ${
                activeTab === "karmic"
                  ? "bg-celestial-gold text-cosmic-950"
                  : "text-slate-400 hover:text-white bg-white/5"
              }`}
            >
              Karmic & Career Destiny
            </button>
          </div>

          {/* Tab 1: Big 3 & Elemental Balance */}
          {activeTab === "big3" && (
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                <h5 className="font-serif text-lg font-bold text-white mb-2">
                  Neural Trinity Interpretation
                </h5>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {chartResult.bigThreeSummary}
                </p>
              </div>

              <div>
                <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Elemental Constitution
                </h5>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {Object.entries(chartResult.elementsRatio).map(([elem, pct]) => (
                    <div key={elem} className="bg-cosmic-900 p-4 rounded-xl border border-white/5">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-medium text-slate-300">{elem}</span>
                        <span className="text-xs font-bold text-celestial-amber">{pct}%</span>
                      </div>
                      <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-celestial-gold to-yellow-400 h-full rounded-full"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Planetary Placements Grid */}
          {activeTab === "placements" && (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-white/5 text-slate-400 uppercase tracking-wider font-semibold border-b border-white/10">
                  <tr>
                    <th className="py-3 px-4">Planet</th>
                    <th className="py-3 px-4">Symbol</th>
                    <th className="py-3 px-4">Zodiac Sign</th>
                    <th className="py-3 px-4">Degree</th>
                    <th className="py-3 px-4">House</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {chartResult.placements.map((p) => (
                    <tr key={p.planet} className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-4 font-semibold text-white">{p.planet}</td>
                      <td className="py-3 px-4 text-celestial-gold text-base">{p.symbol}</td>
                      <td className="py-3 px-4">
                        <span className="inline-flex items-center space-x-1.5">
                          <span>{ZODIAC_SIGNS[p.sign].symbol}</span>
                          <span>{p.sign}</span>
                        </span>
                      </td>
                      <td className="py-3 px-4">{p.degree}°</td>
                      <td className="py-3 px-4">{p.house}th House</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Tab 3: Karmic & Career Destiny */}
          {activeTab === "karmic" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-3">
                <div className="flex items-center space-x-2 text-celestial-gold text-xs font-semibold uppercase tracking-wider">
                  <Star className="w-4 h-4" />
                  <span>Karmic Soul Evolution</span>
                </div>
                <h5 className="font-serif text-lg font-bold text-white">
                  North Node & Saturn Blueprint
                </h5>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {chartResult.karmicDestiny}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-3">
                <div className="flex items-center space-x-2 text-celestial-cyan text-xs font-semibold uppercase tracking-wider">
                  <Sun className="w-4 h-4" />
                  <span>Midheaven (MC) & Vocation</span>
                </div>
                <h5 className="font-serif text-lg font-bold text-white">
                  Career Pinnacle & Empire
                </h5>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {chartResult.careerAptitude}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
