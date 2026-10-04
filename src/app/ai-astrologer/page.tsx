import React from "react";
import { constructMetadata } from "@/lib/seo-config";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import AskAstrologerChat from "@/components/astrology/AskAstrologerChat";
import StructuredData, { generateFAQSchema, generateWebAppSchema } from "@/components/seo/StructuredData";
import { Sparkles, MessageSquareText, Shield, Brain, Star, HelpCircle, ChevronRight } from "lucide-react";

export const metadata = constructMetadata({
  title: "Ask AI Astrologer 24/7 — Personalized Neural Astrological Readings",
  description:
    "Consult directly with Veya's AI Astrologers. Get instant, in-depth astrological readings across Psychological, Hellenistic, and Vedic traditions for love, career, and life purpose.",
  canonical: "/ai-astrologer",
  keywords: [
    "AI Astrologer Chat",
    "Ask Astrologer Online Free",
    "Psychological Astrology AI",
    "Vedic Astrologer AI",
    "Hellenistic Astrology Readings",
    "Saturn Return Consultation AI",
  ],
});

export default function AiAstrologerPage() {
  const faqs = [
    {
      question: "How do Veya's AI Astrologers generate personalized interpretations?",
      answer:
        "Our AI models are trained on classical astrological treatises (Ptolemy, Valens, Parashara) alongside modern psychological works (Carl Jung, Dane Rudhyar, Liz Greene). When you ask a question, the model synthesizes the archetypal symbolism of the relevant planets, signs, and houses to offer deep, empowering, and nuanced spiritual counsel.",
    },
    {
      question: "What is the difference between Selene, Aurelius, and Sage Vasistha?",
      answer:
        "Each AI persona represents a major astrological tradition: Selene specializes in Modern Psychological & Archetypal astrology (ideal for inner healing, shadow integration, and emotional patterns); Aurelius practices 1st-century Hellenistic astrology (ideal for timing fated cycles, annual profections, and concrete life events); and Sage Vasistha practices Vedic Jyotish (ideal for understanding karmic debts, Nakshatra alignments, and remedial mantras).",
    },
    {
      question: "Are my chat queries and birth metrics private?",
      answer:
        "Yes, 100%. Veya adheres to strict privacy standards. Your consultation queries and birth metrics are processed securely and never sold or shared with third-party advertisers.",
    },
  ];

  return (
    <>
      <StructuredData
        data={[
          generateWebAppSchema({
            name: "Veya: AI Astrologer Consultation",
            description: "24/7 conversational AI astrologer trained in Western, Hellenistic, and Vedic traditions.",
            url: "/ai-astrologer",
          }),
          generateFAQSchema(faqs),
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20">
        <Breadcrumbs items={[{ label: "Ask AI Astrologer", href: "/ai-astrologer" }]} />

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mt-6 mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full glass-panel-gold text-xs font-semibold uppercase tracking-widest text-celestial-gold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>24/7 Neural Ephemeris Intelligence</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Consult With Your <br />
            <span className="cosmic-gradient-text">Personal AI Astrologer</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Engage in deep, multi-turn consultations with specialized AI astrologers. Gain profound clarity on love, career crossroads, Saturn returns, and soul purpose through three distinct cosmic traditions.
          </p>
        </div>

        {/* Interactive Chat Console */}
        <div className="mb-20">
          <AskAstrologerChat />
        </div>

        {/* Deep Educational Guide to the 3 Astrological Traditions (Zero Thin Content) */}
        <div className="space-y-16 max-w-5xl mx-auto border-t border-white/10 pt-16">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-celestial-gold">
              Ancient Wisdom Meets Modern Neural Models
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
              Three Distinct Traditions at Your Service
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Veya does not blend all astrology into a generic soup. We honor the distinct technical methodologies of each historical school:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            {/* Psychological */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-white text-lg">
                1. Psychological &amp; Archetypal
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Pioneered by Swiss psychoanalyst Carl Jung and Dane Rudhyar, this tradition treats natal planets as living archetypes within your subconscious mind. Instead of predicting external events deterministically, it helps you integrate shadow material, resolve unconscious self-sabotage, and actualize your soul&apos;s highest potential.
              </p>
              <ul className="text-xs text-slate-400 space-y-1.5 pt-2 border-t border-white/5">
                <li>• Shadow work &amp; inner child integration</li>
                <li>• Archetypal career and identity analysis</li>
                <li>• Evolutionary soul purpose</li>
              </ul>
            </div>

            {/* Hellenistic */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                <Star className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-white text-lg">
                2. Traditional Hellenistic
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Practiced in the Mediterranean between the 1st century BCE and the 7th century CE by masters like Vettius Valens and Claudius Ptolemy. This school utilizes Whole Sign houses, planetary sect (day vs night charts), essential dignities, and &quot;Time-Lords&quot; (Annual Profections) to time concrete chapters in wealth, fame, and life milestones.
              </p>
              <ul className="text-xs text-slate-400 space-y-1.5 pt-2 border-t border-white/5">
                <li>• Annual Profections &amp; Time-Lord systems</li>
                <li>• Strict planetary dignity &amp; debility</li>
                <li>• Fated chapter openings and closures</li>
              </ul>
            </div>

            {/* Vedic Jyotish */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-white text-lg">
                3. Vedic Jyotish (Light Science)
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Originating in ancient India over 5,000 years ago, Jyotish uses the Sidereal Zodiac (aligned with the physical stars) rather than the Tropical Zodiac. It divides the heavens into 27 Nakshatras (lunar mansions) and calculates the exact Vimshottari Dasha planetary timeline to uncover past-life karma (Prarabdha) and remedial solutions.
              </p>
              <ul className="text-xs text-slate-400 space-y-1.5 pt-2 border-t border-white/5">
                <li>• 27 Nakshatras &amp; Lunar Mansions</li>
                <li>• Vimshottari Dasha planetary timeline</li>
                <li>• Gemstone, mantra, and charity remedies</li>
              </ul>
            </div>
          </div>

          {/* AI Astrologer FAQs */}
          <div className="space-y-6 pt-6">
            <div className="text-center">
              <div className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-widest text-celestial-amber mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>Consultation FAQ</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Frequently Asked Questions About AI Astrology
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
