import React from "react";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo-config";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import StructuredData, { generateFAQSchema } from "@/components/seo/StructuredData";
import { TODAY_TRANSITS, ZODIAC_SIGNS } from "@/lib/astrology-data";
import { Calendar, Moon, Sun, Sparkles, Flame, Shield, ArrowRight, HelpCircle, ChevronRight } from "lucide-react";

export const metadata = constructMetadata({
  title: "Daily Horoscope & Planetary Transits Today — Cosmic Weather",
  description:
    "Read your accurate daily horoscope and explore real-time planetary transits. Discover today's lunar phase, retrograde movements, and astrological aspects for all 12 zodiac signs.",
  canonical: "/daily-horoscope",
  keywords: [
    "Daily Horoscope Today",
    "Planetary Transits Today",
    "Current Moon Phase Astrology",
    "Free Daily Horoscope All Signs",
    "Astrological Weather Today",
    "Mercury Retrograde Status",
  ],
});

export default function DailyHoroscopePage() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const faqs = [
    {
      question: "What is an astrological 'Transit' and how does it affect me?",
      answer:
        "A transit occurs when planets currently orbiting through the solar system make mathematical angles (aspects) to the natal positions of planets in your personal birth chart. Transits trigger psychological activations, opportunities, and evolutionary challenges that define the themes of your days, months, and years.",
    },
    {
      question: "Should I read daily horoscopes for my Sun sign or my Rising sign?",
      answer:
        "For maximum predictive accuracy, professional astrologers recommend reading horoscopes primarily for your Rising sign (Ascendant). Because your Rising sign establishes the house cusps of your chart, a transit horoscope keyed to your Rising sign correctly aligns the houses through which the planets are currently moving in your life.",
    },
    {
      question: "How does the Moon's transit influence daily mood?",
      answer:
        "The Moon is the fastest-moving celestial body in astrology, spending approximately 2.5 days in each zodiac sign. The Moon sets the emotional undertone and collective climate of each day, influencing energy levels, social appetite, and somatic sensitivity.",
    },
  ];

  const signDailyForecasts = [
    {
      sign: "Aries",
      theme: "Courageous Initiative & Dynamic Momentum",
      focus: "Career Breakthrough",
      love: "Speak your unfiltered truth tonight; authentic vulnerability sparks unexpected intimacy.",
      career: "Pitch high-stakes proposals. Leadership initiatives meet favorable backing from mentors.",
      affirmation: "I channel my raw passion into purposeful, disciplined creation.",
    },
    {
      sign: "Taurus",
      theme: "Somatic Grounding & Financial Clarity",
      focus: "Resource Optimization",
      love: "Indulge in a shared sensory ritual or gourmet dinner with your partner to soothe midweek tension.",
      career: "Review long-term contracts and investments. Steady, methodical calculations yield abundance.",
      affirmation: "I am securely rooted in my inherent worth and divine abundance.",
    },
    {
      sign: "Gemini",
      theme: "Mental Synthesis & Creative Networking",
      focus: "Intellectual Collaboration",
      love: "Flirty banter and lively debates open new romantic chapters. Stay curious rather than guarded.",
      career: "A serendipitous conversation or direct message opens an unexpected consulting door.",
      affirmation: "My ideas flow with clarity, inspiring transformative connections.",
    },
    {
      sign: "Cancer",
      theme: "Sacred Inner Sanctuary & Ancestral Intuition",
      focus: "Emotional Renewal",
      love: "Create sacred domestic space. Deep, tender conversations heal old relational wounds.",
      career: "Trust your gut instincts over analytical spreadsheet noise during strategic negotiations.",
      affirmation: "I honor the sacred tides of my emotions and stand strong in my peace.",
    },
    {
      sign: "Leo",
      theme: "Radiant Magnetism & Sovereign Vision",
      focus: "Creative Radiance",
      love: "Grand gestures and generous adoration make your beloved feel cherished like royalty.",
      career: "Step boldly into the spotlight. A presentation or media appearance garners acclaim.",
      affirmation: "I shine my authentic light without hesitation or apology.",
    },
    {
      sign: "Virgo",
      theme: "Alchemical Discernment & Somatic Healing",
      focus: "Refinement & Wellness",
      love: "Show your affection through thoughtful acts of service and attentive caretaking.",
      career: "Your eye for microscopic flaws saves a critical client deliverable from costly error.",
      affirmation: "I accept the divine perfection of unfolding life while serving with grace.",
    },
    {
      sign: "Libra",
      theme: "Sublime Harmony & Reciprocal Equilibrium",
      focus: "Partnership & Aesthetics",
      love: "Romantic equilibrium is restored. Mutual compromise creates a serene emotional breakthrough.",
      career: "Diplomatic arbitration and aesthetic discernment position you as an indispensable advisor.",
      affirmation: "I create peace within my soul and reflect divine beauty into the world.",
    },
    {
      sign: "Scorpio",
      theme: "Psychic Depth & Alchemical Transmutation",
      focus: "Occult Truth & Intimacy",
      love: "Superficial small talk will not suffice today. Demand soul-level honesty and offer the same.",
      career: "Unearth hidden financial or data discrepancies that others overlooked through psychic focus.",
      affirmation: "I surrender fear, embrace transformative rebirth, and trust my power.",
    },
    {
      sign: "Sagittarius",
      theme: "Expansive Vision & Philosophical Quest",
      focus: "Pilgrimage & Higher Learning",
      love: "Plan an impromptu weekend getaway or explore unfamiliar philosophical territories together.",
      career: "Publishing, international business, or educational ventures receive favorable cosmic wind.",
      affirmation: "My consciousness expands endlessly as I embrace universal wisdom.",
    },
    {
      sign: "Capricorn",
      theme: "Timeless Discipline & Structural Mastery",
      focus: "Empire Building",
      love: "Reliability and consistent actions speak far louder than fleeting sweet words.",
      career: "Executives and senior stakeholders take notice of your unwavering work ethic and integrity.",
      affirmation: "Through sacred discipline, I construct a lasting legacy of excellence.",
    },
    {
      sign: "Aquarius",
      theme: "Revolutionary Futurism & Collective Awakening",
      focus: "Innovative Disruption",
      love: "Bond over shared humanitarian visions and eccentric intellectual hobbies.",
      career: "Implement automated AI workflows or introduce unconventional solutions to legacy problems.",
      affirmation: "I channel the innovative future, empowering the collective awakening.",
    },
    {
      sign: "Pisces",
      theme: "Mystical Compassion & Oceanic Transcendence",
      focus: "Spiritual Integration",
      love: "A transcendent, poetic bond dissolves old misunderstandings into pure forgiveness.",
      career: "Channel imaginative inspiration into artistic, therapeutic, or design projects.",
      affirmation: "I am one with the cosmic ocean, guided by boundless love and intuition.",
    },
  ];

  return (
    <>
      <StructuredData data={generateFAQSchema(faqs)} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20">
        <Breadcrumbs items={[{ label: "Daily Horoscope & Transits", href: "/daily-horoscope" }]} />

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mt-6 mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full glass-panel-gold text-xs font-semibold uppercase tracking-widest text-celestial-cyan mb-4">
            <Calendar className="w-3.5 h-3.5" />
            <span>Planetary Weather for {currentDate}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Today&apos;s Daily Horoscope &amp; <br />
            <span className="cosmic-gradient-text">Planetary Transit Forecast</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Real-time orbital tracking of celestial movements, planetary aspects, and personalized cosmic weather reports for all twelve zodiac archetypes.
          </p>
        </div>

        {/* Current Celestial Ephemeris Bar */}
        <div className="glass-panel-gold rounded-3xl p-6 sm:p-8 mb-16 border border-white/10">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-white mb-6 flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-celestial-gold" />
            <span>Active Celestial Alignments &amp; Aspects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TODAY_TRANSITS.map((aspect) => (
              <div key={aspect.transit} className="bg-cosmic-950/70 p-5 rounded-2xl border border-white/5 space-y-2">
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-celestial-gold/10 text-celestial-amber border border-celestial-gold/20">
                  {aspect.category} Aspect
                </span>
                <h3 className="font-serif font-bold text-white text-base">{aspect.transit}</h3>
                <p className="text-xs text-celestial-cyan font-mono">{aspect.planets}</p>
                <p className="text-xs text-slate-300 leading-relaxed">{aspect.guidance}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 12 Signs Daily Forecast Grid (Zero Thin Content) */}
        <div className="space-y-8 mb-20">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-celestial-gold">
              Personalized Cosmic Guidance
            </span>
            <h2 className="font-serif text-3xl font-bold text-white mt-1">
              Daily Horoscopes for All 12 Signs
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Read for both your Sun sign and your Rising sign for maximum psychological and predictive alignment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {signDailyForecasts.map((item) => {
              const signData = ZODIAC_SIGNS[item.sign as keyof typeof ZODIAC_SIGNS];
              return (
                <div
                  key={item.sign}
                  className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-celestial-gold/30 transition-all space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-3 border-b border-white/5">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-slate-400">
                          {signData.element} • {signData.modality}
                        </span>
                        <h3 className="font-serif text-2xl font-bold text-white">
                          {item.sign}
                        </h3>
                      </div>
                      <span className="text-3xl text-celestial-amber">{signData.symbol}</span>
                    </div>

                    <div>
                      <span className="text-xs font-semibold text-celestial-gold block mb-1">
                        Theme: {item.theme}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs text-slate-300">
                      <p>
                        <strong className="text-rose-400">Love:</strong> {item.love}
                      </p>
                      <p>
                        <strong className="text-emerald-400">Career:</strong> {item.career}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/5">
                    <p className="text-[11px] italic text-slate-400 mb-3">
                      &quot;{item.affirmation}&quot;
                    </p>
                    <Link
                      href={`/zodiac/${signData.slug}`}
                      className="inline-flex items-center space-x-1 text-xs font-semibold text-celestial-gold hover:text-celestial-amber transition-colors"
                    >
                      <span>Full {item.sign} Profile &amp; Synastry</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Daily Transit FAQs */}
        <div className="max-w-4xl mx-auto space-y-6 pt-10 border-t border-white/10">
          <div className="text-center">
            <div className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-widest text-celestial-amber mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>Transit FAQ</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Understanding Planetary Transits &amp; Horoscopes
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
      </div>
    </>
  );
}
