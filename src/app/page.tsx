import React from "react";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata, SITE_CONFIG } from "@/lib/seo-config";
import TransitTicker from "@/components/astrology/TransitTicker";
import BirthChartForm from "@/components/astrology/BirthChartForm";
import ZodiacCard from "@/components/astrology/ZodiacCard";
import CompatibilityMatrix from "@/components/astrology/CompatibilityMatrix";
import PlayStoreButton from "@/components/ui/PlayStoreButton";
import StructuredData, { generateFAQSchema, generateWebAppSchema } from "@/components/seo/StructuredData";
import { ZODIAC_SIGNS, TODAY_TRANSITS } from "@/lib/astrology-data";
import { Sparkles, Compass, Heart, Calendar, ShieldCheck, Cpu, Globe, ArrowRight, CheckCircle2, ChevronRight, HelpCircle, Star, Smartphone, Bell, Zap, Download } from "lucide-react";

export const metadata = constructMetadata({
  title: "AI Astrology, Free Natal Birth Chart & Daily Transits",
  description:
    "Veya combines Swiss Ephemeris NASA astronomical orbital calculations with advanced AI to deliver instant, high-precision birth chart analysis, synastry love compatibility, and 24/7 AI astrologer readings.",
  canonical: "/",
  keywords: [
    "AI Astrology",
    "AI Birth Chart Calculator",
    "Free Natal Chart Reading",
    "Zodiac Compatibility Test",
    "Daily Planetary Transits",
    "Vedic Kundli AI",
    "Psychological Astrology AI",
  ],
});

export default function HomePage() {
  const faqs = [
    {
      question: "How does Veya's AI Astrology calculate birth charts with precision?",
      answer:
        "Veya uses mathematical ephemeris algorithms directly synced with NASA JPL Horizons planetary positions. Unlike generic horoscope apps that rely on simplified approximations, Veya calculates exact celestial coordinates down to arcminutes and seconds, determining real-time house cusps, planetary dignities, retrogrades, and synastry aspects.",
    },
    {
      question: "What is the difference between my Sun, Moon, and Rising (Ascendant) signs?",
      answer:
        "In astrology, your 'Big Three' represent the trinity of selfhood. The Sun sign reveals your core identity, conscious life force, and spiritual vitality. The Moon sign governs your unconscious emotional instinct, somatic sanctuary, and attachment patterns. The Rising sign (Ascendant) is the zodiac sign rising on the eastern horizon at your exact moment of birth, dictating how you project energy into outer reality and your life's orientation.",
    },
    {
      question: "Can AI provide accurate relationship synastry and love compatibility?",
      answer:
        "Yes. While traditional compatibility checks only look at Sun signs, Veya's AI synastry engine maps cross-chart planetary aspects (Venus-Mars attraction, Moon-Moon emotional harmony, Mercury-Mercury dialectics, and Saturn stability bonds) between both partners to deliver multi-layered relationship insights.",
    },
    {
      question: "Does Veya support both Western and Vedic (Jyotish) astrology?",
      answer:
        "Yes. Veya allows you to toggle between Tropical (Western) and Sidereal (Vedic) zodiac systems, along with multiple house division algorithms including Placidus, Whole Sign, Koch, and Equal House systems.",
    },
    {
      question: "Is Veya's AI birth chart calculator free to use?",
      answer:
        "Yes. You can generate your full natal birth chart, calculate your Big Three, review your planetary placements, test relationship compatibility, and explore daily transits completely free.",
    },
    {
      question: "How are the daily astrological transits updated?",
      answer:
        "Our ephemeris engine continuously updates planetary movements in real time, calculating current lunar phases, retrograde stationing points, ingresses, and major planetary aspects (conjunctions, trines, sextiles, squares, and oppositions).",
    },
  ];

  return (
    <>
      <StructuredData
        data={[
          generateWebAppSchema({
            name: "Veya: AI Astrologer Calculator",
            description: "High-precision AI astrology birth chart, synastry compatibility, and transit engine.",
            url: SITE_CONFIG.playStoreUrl,
          }),
          generateFAQSchema(faqs),
        ]}
      />

      <TransitTicker />

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-celestial-purple/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-celestial-gold/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-panel-gold text-xs font-semibold uppercase tracking-widest text-celestial-amber mb-6 animate-pulse-subtle">
              <Sparkles className="w-3.5 h-3.5" />
              <span>NASA JPL Ephemeris • Neural Interpretation</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              Cosmic Truth Decoded by <br />
              <span className="cosmic-gradient-text">Neural Ephemeris AI</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
              Move beyond generic horoscopes. Veya combines sub-arcminute astronomical ephemeris coordinates with deep astrological wisdom to unveil your natal soul blueprint, love synastry, and fated planetary transits.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#calculator"
                className="px-8 py-3.5 rounded-full font-semibold text-xs sm:text-sm uppercase tracking-wider text-cosmic-950 bg-gradient-to-r from-celestial-amber via-celestial-gold to-yellow-500 hover:brightness-110 shadow-xl shadow-celestial-gold/25 transition-all duration-300 hover:scale-105"
              >
                Calculate Free Birth Chart
              </a>
              <Link
                href="/ai-astrologer"
                className="px-8 py-3.5 rounded-full font-semibold text-xs sm:text-sm uppercase tracking-wider text-white glass-panel hover:bg-white/10 border border-white/10 transition-all duration-300"
              >
                Consult AI Astrologer
              </Link>
              <PlayStoreButton size="md" />
            </div>

            {/* Credibility Badges */}
            <div className="grid grid-cols-3 gap-4 pt-10 border-t border-white/5 mt-10 max-w-xl mx-auto text-xs text-slate-400">
              <div className="flex flex-col items-center">
                <span className="font-serif text-lg font-bold text-white">0.001°</span>
                <span>Astronomical Precision</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-serif text-lg font-bold text-white">100% Free</span>
                <span>Complete Chart Synthesis</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-serif text-lg font-bold text-white">3 Traditions</span>
                <span>Western, Hellenistic & Vedic</span>
              </div>
            </div>
          </div>

          {/* Interactive Calculator Anchor */}
          <div id="calculator" className="pt-4">
            <BirthChartForm />
          </div>
        </div>
      </section>

      {/* Today's Planetary Weather Section */}
      <section className="py-16 bg-cosmic-900/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-celestial-cyan">
                Live Planetary Atmosphere
              </span>
              <h2 className="font-serif text-3xl font-bold text-white mt-1">
                Today&apos;s Astrological Transits
              </h2>
            </div>
            <Link
              href="/daily-horoscope"
              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-celestial-gold hover:text-celestial-amber transition-colors"
            >
              <span>View Full Daily Forecast & 12 Signs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TODAY_TRANSITS.map((aspect) => (
              <div
                key={aspect.transit}
                className="glass-panel p-6 rounded-2xl border border-white/5 space-y-3 hover:border-celestial-cyan/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {aspect.category}
                  </span>
                  <Calendar className="w-4 h-4 text-slate-500" />
                </div>
                <h3 className="font-serif font-bold text-white text-base">
                  {aspect.transit}
                </h3>
                <p className="text-xs text-celestial-gold/90 font-mono">
                  {aspect.planets}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {aspect.guidance}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Love Compatibility Feature Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CompatibilityMatrix />
        </div>
      </section>

      {/* Deep Educational / Authoritative Long-Form Section (Zero Thin Content) */}
      <section className="py-20 bg-cosmic-900/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-celestial-gold">
                The Science of Ephemeris & Neural Synthesis
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
                How Veya Transforms Ancient Astrology with AI
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                For millennia, astrology was practiced by royal mathematicians and astronomer-sages who spent months calculating planetary ephemeris tables by hand. Today, artificial intelligence unlocks deep archetypal patterns at the speed of thought.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-celestial-gold/10 flex items-center justify-center text-celestial-gold">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-white">
                  1. High-Precision Ephemeris Algorithms
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Every reading generated on Veya is rooted in sub-arcminute astronomical coordinates calculated using the Swiss Ephemeris and NASA JPL Horizons orbital data. We calculate precise longitude, latitude, distance, speed, and house cusps based on your exact birth coordinates and standard time offsets.
                </p>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-celestial-purple/10 flex items-center justify-center text-celestial-purple">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-white">
                  2. Multidisciplinary Astrological Synthesis
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Traditional astrology books provide isolated fragments (e.g. &quot;Sun in Aries&quot; or &quot;Saturn in the 7th&quot;). Veya&apos;s neural models synthesize all contradictory and complementary aspects simultaneously, harmonizing your planetary sect, dignity, elemental balances, and dispositor chains into a coherent psychological narrative.
                </p>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-white">
                  3. Carl Jung & Archetypal Psychology
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We integrate the archetypal psychological framework developed by Carl Jung, Dane Rudhyar, and Liz Greene. Planets are understood not as deterministic puppet masters, but as symbolic archetypes operating within the personal and collective unconscious.
                </p>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-white">
                  4. Vedic (Jyotish) & Karmic Integration
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  In addition to Western Tropical charts, our platform incorporates Parashari Jyotish principles, 27 Nakshatras (lunar mansions), and Vimshottari Dasha planetary periods to uncover deep karmic debts, past-life momentum, and remedies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12 Zodiac Directory Hub */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-celestial-gold">
              Celestial Directory
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1 mb-3">
              Explore the 12 Zodiac Archetypes
            </h2>
            <p className="text-sm text-slate-300">
              Select your Sun, Moon, or Ascendant sign to access comprehensive psychological analyses, love compatibility matrices, career paths, and shadow work guides.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Object.values(ZODIAC_SIGNS).map((sign) => (
              <ZodiacCard key={sign.slug} sign={sign} />
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated Google Play App Showcase Section */}
      <section className="py-20 bg-gradient-to-b from-cosmic-950 via-cosmic-900 to-cosmic-950 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-celestial-gold/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-celestial-purple/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass-panel-gold rounded-3xl p-8 sm:p-14 border border-white/10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* App Info & CTAs */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-celestial-amber border border-white/10">
                  <Smartphone className="w-4 h-4 text-emerald-400" />
                  <span>Official Android App • com.astrotales.veya</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
                  Carry the Cosmos in Your Pocket: <br />
                  <span className="cosmic-gradient-text">Veya: AI Astrologer</span>
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Experience lightning-fast ephemeris calculations, instant daily planetary transit push notifications, and 24/7 AI astrologer readings directly on your Android phone or tablet.
                </p>

                {/* Feature Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start space-x-3 bg-white/5 p-3.5 rounded-xl border border-white/5">
                    <Bell className="w-5 h-5 text-celestial-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white text-xs block">Real-Time Transit Alerts</span>
                      <span className="text-[11px] text-slate-400">Get notified when planetary aspects trigger your natal houses.</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 bg-white/5 p-3.5 rounded-xl border border-white/5">
                    <Zap className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white text-xs block">Sub-Second Ephemeris</span>
                      <span className="text-[11px] text-slate-400">Offline astronomical engine with sub-arcminute accuracy.</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 bg-white/5 p-3.5 rounded-xl border border-white/5">
                    <Heart className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white text-xs block">Instant Love Synastry</span>
                      <span className="text-[11px] text-slate-400">Save friends and partners for instant cross-chart chemistry checks.</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 bg-white/5 p-3.5 rounded-xl border border-white/5">
                    <Sparkles className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white text-xs block">24/7 AI Consultations</span>
                      <span className="text-[11px] text-slate-400">Talk to Selene, Aurelius, or Sage Vasistha anytime on the go.</span>
                    </div>
                  </div>
                </div>

                {/* Rating & Play Store Download Button */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4 border-t border-white/10">
                  <PlayStoreButton size="lg" />

                  <div className="space-y-1">
                    <div className="flex items-center space-x-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                      <span className="text-xs font-bold text-white ml-1.5">4.9 / 5.0</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      50,000+ Downloads • Verified Google Play Safe
                    </p>
                  </div>
                </div>
              </div>

              {/* Visual App Card Mockup */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-72 sm:w-80 rounded-[40px] bg-gradient-to-b from-cosmic-800 via-cosmic-950 to-cosmic-950 p-4 border-4 border-white/20 shadow-2xl shadow-celestial-gold/20">
                  <div className="rounded-[32px] bg-cosmic-950 p-6 flex flex-col items-center text-center space-y-4 border border-white/10">
                    <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl shadow-celestial-gold/30 border-2 border-celestial-gold/40">
                      <Image
                        src="/logo.webp"
                        alt="Veya AI Astrologer App Icon"
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="font-serif text-xl font-bold text-white">Veya: AI Astrologer</h3>
                      <p className="text-xs text-celestial-amber font-medium">com.astrotales.veya</p>
                    </div>

                    <div className="w-full p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-300 space-y-1">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Moon Phase Today:</span>
                        <span className="text-white font-semibold">Waxing Gibbous</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Your Big 3:</span>
                        <span className="text-celestial-gold font-semibold">☉ Scorpio • ☽ Cancer</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Active Transit:</span>
                        <span className="text-emerald-400 font-semibold">Sun △ Jupiter</span>
                      </div>
                    </div>

                    <a
                      href="https://play.google.com/store/apps/details?id=com.astrotales.veya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-xl bg-gradient-to-r from-celestial-amber to-celestial-gold text-cosmic-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center space-x-1.5"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Free App</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive SEO FAQ Section */}
      <section className="py-20 bg-cosmic-900/60 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-widest text-celestial-amber mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Everything You Need to Know About AI Astrology
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group glass-panel rounded-2xl border border-white/10 p-6 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-white hover:text-celestial-amber transition-colors font-serif font-bold text-base sm:text-lg">
                  <span>{faq.question}</span>
                  <span className="shrink-0 rounded-full bg-white/5 p-1.5 text-slate-400 group-open:rotate-180 transition-transform">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </summary>
                <div className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
