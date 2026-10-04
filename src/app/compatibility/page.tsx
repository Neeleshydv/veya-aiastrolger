import React from "react";
import { constructMetadata } from "@/lib/seo-config";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import CompatibilityMatrix from "@/components/astrology/CompatibilityMatrix";
import StructuredData, { generateFAQSchema, generateWebAppSchema } from "@/components/seo/StructuredData";
import { Heart, Sparkles, Flame, Shield, Compass, HelpCircle, ChevronRight } from "lucide-react";

export const metadata = constructMetadata({
  title: "Zodiac Love Compatibility Test — Free AI Synastry Matchmaker",
  description:
    "Test relationship compatibility between any two zodiac signs with Veya's AI synastry engine. Analyze elemental chemistry, emotional depth, communication harmony, and karmic soulmate bonds.",
  canonical: "/compatibility",
  keywords: [
    "Zodiac Compatibility Test",
    "Astrology Love Match",
    "Synastry Chart Calculator",
    "Zodiac Sign Chemistry",
    "Soulmate Astrology AI",
    "Elemental Compatibility Fire Earth Air Water",
  ],
});

export default function CompatibilityPage() {
  const faqs = [
    {
      question: "Is Sun sign compatibility sufficient to determine if a relationship will last?",
      answer:
        "No. Sun sign compatibility provides a general picture of core ego alignment, but true long-term relationship longevity depends on Synastry—the cross-comparison of both partners' full birth charts. In particular, the Moon signs determine daily emotional safety, Venus reveals love languages and romantic desires, Mars dictates sexual chemistry and conflict resolution, and Saturn indicates whether both souls can commit through life's trials.",
    },
    {
      question: "What makes two zodiac signs astrologically compatible?",
      answer:
        "Signs belonging to the same element (e.g. Fire signs: Aries, Leo, Sagittarius) share natural rhythm and temperament, forming harmonic Trine aspects (120° apart). Complementary elements—such as Fire and Air (stimulating and expansive) or Earth and Water (nourishing and stabilizing)—form harmonic Sextile aspects (60° apart). However, even challenging squares (90°) and oppositions (180°) offer immense sexual tension and mutual psychological growth.",
    },
    {
      question: "What is a 'Karmic' astrological connection?",
      answer:
        "A karmic connection in astrology often occurs when one partner's Saturn, South Node, or Pluto makes exact conjunctions to the other partner's personal planets (Sun, Moon, Venus). These bonds feel magnetically fated and intense from the first meeting, often carrying significant soul lessons, past-life debts, and deep emotional transmutation.",
    },
    {
      question: "Can two incompatible signs make a marriage work?",
      answer:
        "Absolutely. Astrology does not dictate fate; it maps energetic dynamics. Friction between signs indicates areas requiring conscious communication and emotional maturity rather than an insurmountable barrier. High self-awareness transforms astrological friction into creative alchemy.",
    },
  ];

  return (
    <>
      <StructuredData
        data={[
          generateWebAppSchema({
            name: "Veya: AI Astrologer Love Compatibility Matchmaker",
            description: "AI-powered synastry matchmaker analyzing elemental, emotional, and communication resonance.",
            url: "/compatibility",
          }),
          generateFAQSchema(faqs),
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20">
        <Breadcrumbs items={[{ label: "Zodiac Love Compatibility", href: "/compatibility" }]} />

        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mt-6 mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full glass-panel-gold text-xs font-semibold uppercase tracking-widest text-rose-400 mb-4">
            <Heart className="w-3.5 h-3.5" />
            <span>Alchemical Synastry Engine</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Zodiac Love Compatibility &amp; <br />
            <span className="cosmic-gradient-text">AI Synastry Matchmaker</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Discover the cosmic alchemy between you and your partner. Calculate your compatibility score, examine emotional and intellectual chemistry, and uncover your relationship&apos;s greatest spiritual blessings.
          </p>
        </div>

        {/* Interactive Matrix */}
        <div className="mb-20">
          <CompatibilityMatrix />
        </div>

        {/* Long-Form Educational Masterclass (Zero Thin Content) */}
        <div className="space-y-16 max-w-5xl mx-auto border-t border-white/10 pt-16">
          {/* Elemental Alchemy */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-semibold uppercase tracking-widest text-celestial-gold">
                Elemental Alchemy
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                The 4 Elements of Relationship Harmony
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                Every relationship is an alchemical reaction between elements: Fire (Spirit), Earth (Form), Air (Mind), and Water (Emotion).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-3">
                <div className="flex items-center space-x-2 text-amber-400 font-bold font-serif text-lg">
                  <Flame className="w-5 h-5 text-red-400" />
                  <span>Fire &amp; Air — The Creative Inferno</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Fire signs (Aries, Leo, Sagittarius) and Air signs (Gemini, Libra, Aquarius) create a dazzling, high-energy partnership. Air provides visionary ideas, witty dialectic, and social breezes that feed Fire&apos;s passions. Fire infuses Air with courage, warmth, and decisive execution. Together, they inspire each other toward grand adventures.
                </p>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-3">
                <div className="flex items-center space-x-2 text-cyan-400 font-bold font-serif text-lg">
                  <Compass className="w-5 h-5 text-emerald-400" />
                  <span>Earth &amp; Water — The Sacred Sanctuary</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Earth signs (Taurus, Virgo, Capricorn) and Water signs (Cancer, Scorpio, Pisces) construct an unshakeable emotional oasis. Earth offers patient containment, financial security, and somatic grounding for Water&apos;s deep psychic currents. In turn, Water softens Earth&apos;s rigid pragmatism with empathy, poetic intimacy, and unconditional love.
                </p>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-3">
                <div className="flex items-center space-x-2 text-red-400 font-bold font-serif text-lg">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  <span>Fire &amp; Water — The Steam &amp; Passion</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Fire and Water create an intensely emotional, turbulent, and magnetic dynamic. Water can sometimes extinguish Fire&apos;s enthusiasm if moodiness takes over, while Fire can accidentally scald Water&apos;s delicate sensitivities. When managed with conscious empathy, this union creates legendary artistic passion and deep cellular healing.
                </p>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-3">
                <div className="flex items-center space-x-2 text-purple-400 font-bold font-serif text-lg">
                  <Shield className="w-5 h-5 text-purple-400" />
                  <span>Earth &amp; Air — Structure &amp; Intellect</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Earth and Air approach reality from complementary intellectual angles. Air formulates abstract strategies and theories, while Earth asks: <em>&quot;How do we build this into a tangible, profitable empire?&quot;</em> As long as Air doesn&apos;t perceive Earth as overly conventional, and Earth doesn&apos;t view Air as detached, they form a formidable power couple.
                </p>
              </div>
            </div>
          </div>

          {/* Synastry Pillars */}
          <div className="glass-panel-gold rounded-3xl p-8 border border-white/10 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-white">
              The 4 Planetary Pillars of Long-Term Synastry
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              When professional astrologers evaluate relationship longevity, they assess four primary cross-chart planetary connections:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
              <div className="bg-cosmic-950/70 p-4 rounded-xl border border-white/5 space-y-1">
                <span className="font-bold text-white text-sm">1. Moon-Moon Aspects (Emotional Safety)</span>
                <p>Dictates how you react when tired, distressed, or vulnerable. Harmonious Moon aspects allow partners to coexist in peaceful silence without emotional friction.</p>
              </div>

              <div className="bg-cosmic-950/70 p-4 rounded-xl border border-white/5 space-y-1">
                <span className="font-bold text-white text-sm">2. Venus-Mars Aspects (Sensual Chemistry)</span>
                <p>Governs romantic attraction, courting rituals, and sexual chemistry. A trine or conjunction between Venus and Mars produces effortless magnetism.</p>
              </div>

              <div className="bg-cosmic-950/70 p-4 rounded-xl border border-white/5 space-y-1">
                <span className="font-bold text-white text-sm">3. Mercury-Mercury Aspects (Intellectual Rapport)</span>
                <p>Determines whether arguments devolve into defensive screaming or evolve into mutual understanding. Harmonious Mercury aspects foster effortless banter.</p>
              </div>

              <div className="bg-cosmic-950/70 p-4 rounded-xl border border-white/5 space-y-1">
                <span className="font-bold text-white text-sm">4. Saturn Aspects (The Marital Anchor)</span>
                <p>Without Saturn contact, relationships are brief flings. Saturn provides the loyalty, dedication, and patience required to endure life&apos;s challenges together.</p>
              </div>
            </div>
          </div>

          {/* Compatibility FAQs */}
          <div className="space-y-6 pt-4">
            <div className="text-center">
              <div className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-widest text-rose-400 mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>Relationship FAQ</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Frequently Asked Questions About Zodiac Compatibility
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
