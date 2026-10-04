import React from "react";
import { constructMetadata } from "@/lib/seo-config";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import BirthChartForm from "@/components/astrology/BirthChartForm";
import StructuredData, { generateFAQSchema, generateWebAppSchema } from "@/components/seo/StructuredData";
import { HOUSES_GUIDE } from "@/lib/astrology-data";
import { Compass, Sparkles, BookOpen, Star, Sun, Moon, Shield, HelpCircle, ChevronRight } from "lucide-react";

export const metadata = constructMetadata({
  title: "Free AI Birth Chart Calculator — Accurate Natal Chart & Big 3 Reading",
  description:
    "Generate your free, high-precision natal birth chart with Veya's AI astrology engine. Calculate your Sun, Moon, and Rising signs, 12 houses, and planetary aspects with NASA JPL ephemeris accuracy.",
  canonical: "/birth-chart",
  keywords: [
    "AI Birth Chart Calculator",
    "Free Natal Chart Reading",
    "Astrology Big Three Calculator",
    "Rising Sign Calculator",
    "Planetary Placements Free",
    "Placidus vs Whole Sign House System",
  ],
});

export default function BirthChartPage() {
  const faqs = [
    {
      question: "Why is the exact time of birth so crucial for an accurate natal chart?",
      answer:
        "The Earth rotates on its axis 360 degrees every 24 hours, meaning the zodiac sign rising on the eastern horizon (the Ascendant or Rising sign) changes approximately every two hours (1 degree every 4 minutes). Without an accurate birth time, it is impossible to calculate your correct Rising sign, house cusps, or the exact degree of your Moon, which moves 13 degrees across the zodiac every 24 hours.",
    },
    {
      question: "What is the difference between Placidus and Whole Sign house systems?",
      answer:
        "The Placidus system is a time-proportional quadrant system that calculates house cusps based on the time it takes celestial degrees to cross the meridians. Houses can vary in size depending on geographic latitude. The Whole Sign system, popular in traditional Hellenistic astrology, assigns each entire 30-degree zodiac sign to a single house, starting with the rising sign as the entire 1st House. Veya supports both systems so you can explore your chart through both modern psychological and classical lenses.",
    },
    {
      question: "What do the 12 astrological houses represent?",
      answer:
        "The 12 houses represent the arenas of earthly experience where planetary energies play out. While planets answer 'What is happening?' and signs describe 'How does it express itself?', houses answer 'Where in my life is this taking place?' (e.g. 1st House: Identity, 2nd House: Wealth, 7th House: Marriage, 10th House: Career).",
    },
    {
      question: "How does Veya's AI synthesize complex planetary aspects?",
      answer:
        "Veya calculates major geometric angles (Conjunctions at 0°, Sextiles at 60°, Squares at 90°, Trines at 120°, and Oppositions at 180°) within strict orb tolerances. Our neural model then weaves these mathematical relationships together with planetary sect (day vs night chart) and essential dignity (rulership, exaltation, detriment, fall) to generate a fluid, personalized psychological narrative.",
    },
  ];

  return (
    <>
      <StructuredData
        data={[
          generateWebAppSchema({
            name: "Veya: AI Astrologer Birth Chart Calculator",
            description: "High-precision AI natal chart synthesizer utilizing NASA JPL ephemeris coordinates.",
            url: "/birth-chart",
          }),
          generateFAQSchema(faqs),
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20">
        <Breadcrumbs items={[{ label: "AI Birth Chart Calculator", href: "/birth-chart" }]} />

        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto mt-6 mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full glass-panel-gold text-xs font-semibold uppercase tracking-widest text-celestial-amber mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>High-Precision Natal Ephemeris</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Free AI Birth Chart Calculator &amp; <br />
            <span className="cosmic-gradient-text">Complete Natal Reading</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Enter your exact birth metrics below to calculate your celestial blueprint. Discover your Big Three (Sun, Moon, Rising), 12 astrological house cusps, and receive a multi-layered AI synthesis of your karmic destiny.
          </p>
        </div>

        {/* Interactive Calculator Form */}
        <div className="mb-20">
          <BirthChartForm defaultExpanded={true} />
        </div>

        {/* In-Depth Educational Guide: The Anatomy of a Natal Chart (Zero Thin Content) */}
        <div className="space-y-16 max-w-5xl mx-auto border-t border-white/10 pt-16">
          {/* Section 1: The Big Three */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-semibold uppercase tracking-widest text-celestial-gold">
                Core Astrological Trinity
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                Understanding Your Astrological &quot;Big Three&quot;
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                While pop astrology often reduces you to your Sun sign alone, true astrological synthesis requires analyzing the interplay between Sun, Moon, and Ascendant.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                  <Sun className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-white text-lg">
                  1. The Sun (☉) — The Conscious Ego &amp; Vitality
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  The Sun is your cosmic spark of life and conscious will. It represents your ego, what energizes you, your creative life purpose, and what you are growing into over your lifetime. In psychological astrology, the Sun answers: <em>&quot;Who am I consciously choosing to become?&quot;</em>
                </p>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Moon className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-white text-lg">
                  2. The Moon (☽) — The Unconscious &amp; Emotional Sanctuary
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  The Moon governs your emotional processing, childhood attachments, involuntary visceral reactions, and inner sanctuary. It reveals what makes you feel safe, how you self-soothe, and how you instinctively care for loved ones. The Moon answers: <em>&quot;What do I need to feel emotionally secure?&quot;</em>
                </p>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                  <Star className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-white text-lg">
                  3. The Ascendant / Rising (☊) — The Persona &amp; Aura
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  The Ascendant was rising over the eastern horizon at your first breath. It dictates the lens through which you perceive reality, your physical vitality, and how others initially experience your presence. It also sets the house cusps for your entire natal chart.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: The 12 Astrological Houses Encyclopedia */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-semibold uppercase tracking-widest text-celestial-gold">
                The 12 Mansions of Life
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                The Complete Guide to the 12 Astrological Houses
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                Every planet in your birth chart lives inside one of the twelve houses, specifying the concrete area of life where its archetype manifests.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
              {HOUSES_GUIDE.map((house) => (
                <div
                  key={house.number}
                  className="glass-panel p-5 rounded-xl border border-white/5 space-y-2 hover:border-celestial-gold/30 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-serif font-bold text-celestial-gold">
                      {house.number}th House
                    </span>
                    <span className="text-[10px] uppercase font-mono text-slate-500">
                      {house.latin}
                    </span>
                  </div>
                  <h4 className="font-serif text-white font-bold text-sm">
                    {house.name}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {house.domain}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: The 10 Celestial Bodies & Their Archetypal Roles */}
          <div className="glass-panel-gold rounded-3xl p-8 border border-white/10 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-white">
              Planetary Archetypes in Your Natal Synthesis
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              In astrological psychology, each celestial body represents a discrete function of the human psyche:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
              <div className="bg-cosmic-950/60 p-4 rounded-xl border border-white/5 space-y-1">
                <span className="font-bold text-white text-sm">Mercury (☿) — Mind &amp; Dialectic</span>
                <p>Governs neural processing speed, communication patterns, curiosity, and logical synthesis.</p>
              </div>
              <div className="bg-cosmic-950/60 p-4 rounded-xl border border-white/5 space-y-1">
                <span className="font-bold text-white text-sm">Venus (♀) — Values &amp; Sacred Aesthetics</span>
                <p>Dictates relationship style, what you find beautiful, love languages, and how you attract wealth.</p>
              </div>
              <div className="bg-cosmic-950/60 p-4 rounded-xl border border-white/5 space-y-1">
                <span className="font-bold text-white text-sm">Mars (♂) — Action &amp; Courage</span>
                <p>Governs raw ambition, sexual vitality, boundary defense, and how you assert your personal power.</p>
              </div>
              <div className="bg-cosmic-950/60 p-4 rounded-xl border border-white/5 space-y-1">
                <span className="font-bold text-white text-sm">Jupiter (♃) — Expansion &amp; Wisdom</span>
                <p>The Great Benefic: dictates spiritual philosophy, good fortune, higher education, and abundance.</p>
              </div>
              <div className="bg-cosmic-950/60 p-4 rounded-xl border border-white/5 space-y-1">
                <span className="font-bold text-white text-sm">Saturn (♄) — Karma &amp; Mastery</span>
                <p>The Lord of Time: governs personal discipline, structural limits, career mastery, and soul maturity.</p>
              </div>
              <div className="bg-cosmic-950/60 p-4 rounded-xl border border-white/5 space-y-1">
                <span className="font-bold text-white text-sm">Outer Planets (Uranus, Neptune, Pluto)</span>
                <p>Generational forces governing radical awakening, mystical transcendence, and alchemical rebirth.</p>
              </div>
            </div>
          </div>

          {/* Section 4: Birth Chart FAQs */}
          <div className="space-y-6 pt-4">
            <div className="text-center">
              <div className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-widest text-celestial-amber mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>Natal Chart FAQ</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Frequently Asked Questions About Birth Charts
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
      </div>
    </>
  );
}
