import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ZODIAC_SIGNS } from "@/lib/astrology-data";
import { ZodiacSignName } from "@/types/astrology";
import { constructMetadata } from "@/lib/seo-config";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import StructuredData, { generateFAQSchema } from "@/components/seo/StructuredData";
import { Sparkles, Heart, Compass, Shield, ArrowRight, Star, HelpCircle, ChevronRight } from "lucide-react";

interface PageProps {
  params: Promise<{ sign: string }>;
}

export async function generateStaticParams() {
  return Object.values(ZODIAC_SIGNS).map((sign) => ({
    sign: sign.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { sign: signSlug } = await params;
  const sign = Object.values(ZODIAC_SIGNS).find((s) => s.slug === signSlug.toLowerCase());

  if (!sign) {
    return constructMetadata({
      title: "Zodiac Sign Not Found",
    });
  }

  return constructMetadata({
    title: `${sign.name} Zodiac Sign: Complete Personality, Love Compatibility & Traits`,
    description: `Comprehensive astrological guide to ${sign.name} (${sign.dateRange}). Discover ${sign.name}'s element (${sign.element}), ruling planet (${sign.rulingPlanet}), shadow traits, love matches, and career potential.`,
    canonical: `/zodiac/${sign.slug}`,
    keywords: [
      `${sign.name} Zodiac Sign`,
      `${sign.name} Personality Traits`,
      `${sign.name} Love Compatibility`,
      `${sign.name} Horoscope`,
      `${sign.name} Element and Modality`,
      `${sign.name} Ruling Planet ${sign.rulingPlanet}`,
    ],
  });
}

export default async function ZodiacSignPage({ params }: PageProps) {
  const { sign: signSlug } = await params;
  const sign = Object.values(ZODIAC_SIGNS).find((s) => s.slug === signSlug.toLowerCase());

  if (!sign) {
    notFound();
  }

  const faqs = [
    {
      question: `What are the defining characteristics of a ${sign.name}?`,
      answer: sign.deepDescription,
    },
    {
      question: `Which zodiac signs are most romantically compatible with ${sign.name}?`,
      answer: `${sign.name} is most naturally compatible with fellow ${sign.element} and complementary signs, particularly ${sign.bestMatches.join(", ")}. These pairings create natural emotional and intellectual resonance.`,
    },
    {
      question: `What is the shadow side or biggest weakness of ${sign.name}?`,
      answer: `The shadow aspects of ${sign.name} include: ${sign.shadowTraits.join("; ")}. By cultivating conscious self-awareness, ${sign.name} can transmute these tendencies into profound emotional maturity.`,
    },
    {
      question: `What careers are best suited for a ${sign.name}?`,
      answer: sign.careerProfile,
    },
  ];

  return (
    <>
      <StructuredData data={generateFAQSchema(faqs)} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20">
        <Breadcrumbs
          items={[
            { label: "Zodiac Signs", href: "/zodiac/aries" },
            { label: sign.name, href: `/zodiac/${sign.slug}` },
          ]}
        />

        {/* Hero Banner */}
        <div className="glass-panel-gold rounded-3xl p-6 sm:p-12 mt-6 mb-16 relative overflow-hidden border border-white/10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
            <div className="space-y-4 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-celestial-gold/15 text-celestial-amber border border-celestial-gold/30">
                  {sign.element} Element
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 text-slate-300 border border-white/10">
                  {sign.modality} Modality
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 text-slate-300 border border-white/10">
                  {sign.polarity}
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white leading-tight">
                {sign.name} <span className="text-3xl sm:text-5xl text-celestial-amber">({sign.symbol})</span>
              </h1>

              <p className="text-sm font-sans text-celestial-gold font-semibold uppercase tracking-wider">
                {sign.dateRange}
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {sign.summary}
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-400">
                <div>
                  <span className="text-white font-semibold">Ruling Planet:</span> {sign.rulingPlanet}
                </div>
                <div>
                  <span className="text-white font-semibold">Ruling House:</span> {sign.rulingHouse}
                </div>
                <div>
                  <span className="text-white font-semibold">Tarot Card:</span> {sign.tarotCard}
                </div>
              </div>
            </div>

            {/* Sacred Glyph Display */}
            <div className="flex flex-col items-center justify-center p-8 rounded-3xl bg-cosmic-950/70 border border-white/10 shrink-0 self-center lg:self-auto">
              <span className="text-7xl sm:text-8xl text-celestial-amber filter drop-shadow-[0_0_25px_rgba(245,158,11,0.3)]">
                {sign.symbol}
              </span>
              <span className="text-xs font-serif uppercase tracking-widest text-slate-400 mt-4">
                The Sacred Glyph
              </span>
            </div>
          </div>
        </div>

        {/* Deep Content Grid */}
        <div className="space-y-16 max-w-5xl mx-auto">
          {/* Deep Psychological Profile */}
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 space-y-4">
            <div className="flex items-center space-x-2 text-celestial-gold text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Archetypal Psychology</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              The Soul Architecture of {sign.name}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {sign.deepDescription}
            </p>
          </div>

          {/* Strengths & Shadow Dual Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Strengths */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 space-y-4">
              <div className="flex items-center space-x-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                <Star className="w-4 h-4" />
                <span>Superpowers &amp; Virtues</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                Core Strengths of {sign.name}
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                {sign.keyStrengths.map((strength, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shadow */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-amber-500/20 bg-amber-500/5 space-y-4">
              <div className="flex items-center space-x-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                <Shield className="w-4 h-4" />
                <span>Shadow Work &amp; Blindspots</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                Evolutionary Shadow of {sign.name}
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                {sign.shadowTraits.map((shadow, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>{shadow}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Love, Sex & Synastry */}
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 space-y-6">
            <div className="flex items-center space-x-2 text-rose-400 text-xs font-semibold uppercase tracking-wider">
              <Heart className="w-4 h-4" />
              <span>Sacred Intimacy &amp; Synastry</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              {sign.name} in Love &amp; Relationships
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {sign.loveProfile}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
              <div className="p-4 rounded-xl bg-white/5">
                <span className="text-xs uppercase tracking-wider text-celestial-amber font-semibold block mb-2">
                  Most Harmonious Soul Matches
                </span>
                <div className="flex flex-wrap gap-2">
                  {sign.bestMatches.map((match) => (
                    <Link
                      key={match}
                      href={`/zodiac/${ZODIAC_SIGNS[match].slug}`}
                      className="px-3 py-1 rounded-lg bg-white/10 hover:bg-celestial-gold hover:text-cosmic-950 transition-colors text-xs font-medium text-white"
                    >
                      {match} ({ZODIAC_SIGNS[match].symbol})
                    </Link>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5">
                <span className="text-xs uppercase tracking-wider text-rose-400 font-semibold block mb-2">
                  Challenging Karmic Growth Matches
                </span>
                <div className="flex flex-wrap gap-2">
                  {sign.challengingMatches.map((match) => (
                    <Link
                      key={match}
                      href={`/zodiac/${ZODIAC_SIGNS[match].slug}`}
                      className="px-3 py-1 rounded-lg bg-white/10 hover:bg-rose-500 hover:text-white transition-colors text-xs font-medium text-slate-300"
                    >
                      {match} ({ZODIAC_SIGNS[match].symbol})
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Career & Vocation */}
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 space-y-4">
            <div className="flex items-center space-x-2 text-celestial-cyan text-xs font-semibold uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              <span>Vocation &amp; Empire Building</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              {sign.name}&apos;s Career Blueprint &amp; Wealth Potential
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {sign.careerProfile}
            </p>
          </div>

          {/* Sacred Mantra & Esoteric Correspondences */}
          <div className="glass-panel-gold rounded-3xl p-8 border border-white/10 space-y-6">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-celestial-amber">
                Daily Celestial Affirmation
              </span>
              <p className="font-serif text-xl sm:text-2xl italic text-white leading-relaxed">
                &quot;{sign.mantra}&quot;
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 text-center text-xs">
              <div>
                <span className="text-slate-400 block mb-1">Birthstones</span>
                <span className="font-semibold text-white">{sign.birthstones.join(", ")}</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-1">Lucky Numbers</span>
                <span className="font-semibold text-white">{sign.luckyNumbers.join(", ")}</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-1">Sacred Color</span>
                <span className="font-semibold text-white">{sign.color}</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-1">Tarot Key</span>
                <span className="font-semibold text-white">{sign.tarotCard}</span>
              </div>
            </div>
          </div>

          {/* Sign Specific FAQs */}
          <div className="space-y-6 pt-6">
            <div className="text-center">
              <div className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-widest text-celestial-amber mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Everything About {sign.name}
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

          {/* Next / Explore Other Signs Carousel */}
          <div className="pt-10 border-t border-white/10">
            <h3 className="font-serif text-xl font-bold text-white mb-6 text-center">
              Explore Other Zodiac Archetypes
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {Object.values(ZODIAC_SIGNS)
                .filter((s) => s.slug !== sign.slug)
                .map((s) => (
                  <Link
                    key={s.slug}
                    href={`/zodiac/${s.slug}`}
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-celestial-gold/30 text-center transition-all group"
                  >
                    <span className="text-2xl block mb-1 group-hover:scale-110 transition-transform">
                      {s.symbol}
                    </span>
                    <span className="text-xs font-semibold text-slate-300 group-hover:text-white">
                      {s.name}
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
