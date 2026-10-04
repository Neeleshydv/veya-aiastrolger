import React from "react";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo-config";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import StructuredData, { generateFAQSchema } from "@/components/seo/StructuredData";
import { BookOpen, Sparkles, Compass, Cpu, Globe, ArrowRight, HelpCircle, ChevronRight, ShieldCheck } from "lucide-react";

export const metadata = constructMetadata({
  title: "Astrology Guides & Ephemeris Science — Complete Educational Hub",
  description:
    "Explore in-depth astrology guides explaining ephemeris orbital algorithms, house division systems (Placidus vs Whole Sign), tropical vs sidereal zodiacs, and planetary aspects.",
  canonical: "/guides",
  keywords: [
    "How AI Astrology Works",
    "Astrology Ephemeris Guide",
    "Placidus vs Whole Sign Houses",
    "Tropical vs Sidereal Astrology",
    "Planetary Aspects Explained",
    "Astrology Learn Hub",
  ],
});

export default function GuidesPage() {
  const faqs = [
    {
      question: "What is an astronomical ephemeris and why is it essential for astrology?",
      answer:
        "An ephemeris is a mathematical table of celestial coordinates that details the precise positions of naturally occurring astronomical bodies in the sky at given dates and times. Without high-precision ephemeris algorithms (like the Swiss Ephemeris based on NASA JPL Horizons), astrological software cannot accurately determine where planets, lunar nodes, and house cusps were located at the exact moment of birth.",
    },
    {
      question: "Why do my Western and Vedic astrology signs differ?",
      answer:
        "Western astrology utilizes the Tropical Zodiac, which is mathematically anchored to the Earth's seasonal equinoxes and solstices (0° Aries begins at the Vernal Equinox). Vedic astrology uses the Sidereal Zodiac, which aligns directly with the visible physical fixed star constellations. Due to the precession of the Earth's equinoxes (axial wobble of ~1° every 72 years), the Tropical and Sidereal zodiacs are currently offset by approximately 24 degrees (the Ayanamsha), shifting most Western planet placements back by roughly one sign.",
    },
    {
      question: "Which house system should a beginner start with?",
      answer:
        "Both Placidus and Whole Sign systems are excellent. If you are interested in modern psychological astrology and tracking intercepted signs, Placidus is the global standard. If you prefer ancient Hellenistic techniques, clean house boundaries, and time-lord profections, Whole Sign is remarkably elegant and straightforward.",
    },
  ];

  return (
    <>
      <StructuredData data={generateFAQSchema(faqs)} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20">
        <Breadcrumbs items={[{ label: "Guides & Methodology", href: "/guides" }]} />

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mt-6 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full glass-panel-gold text-xs font-semibold uppercase tracking-widest text-celestial-gold mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Astrological Wisdom &amp; Ephemeris Science</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            The Veya Astrology <br />
            <span className="cosmic-gradient-text">Masterclass &amp; Knowledge Hub</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Delve deep into the mechanics of the cosmos. Learn how orbital ephemeris calculations, ancient mathematical house systems, and modern AI neural architectures unlock profound self-knowledge.
          </p>
        </div>

        {/* Pillar Guides Grid (Zero Thin Content) */}
        <div className="space-y-12 max-w-5xl mx-auto">
          {/* Guide 1 */}
          <article className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 space-y-4">
            <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-celestial-gold">
              <Cpu className="w-4 h-4" />
              <span>Core Pillar • Technical Architecture</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              How AI Astrology Works: NASA JPL Ephemeris Meets Neural Synthesis
            </h2>
            <div className="text-xs sm:text-sm text-slate-300 space-y-3 leading-relaxed">
              <p>
                Astrology is fundamentally a sacred geometric language. At any given moment, the planets in our solar system occupy precise three-dimensional positions relative to Earth’s center. Traditional manual chart construction required physical table books (ephemerides) published by naval observatories, alongside spherical trigonometry calculations to calculate oblique ascensions.
              </p>
              <p>
                Veya modernizes this ancient discipline by coupling <strong>Swiss Ephemeris algorithms</strong>—which provide sub-arcsecond celestial positions computed directly from numerical integrations of the planetary orbits—with <strong>contextual neural language models</strong>.
              </p>
              <p>
                Rather than treating astrological interpretations as disconnected cookie-cutter lookup tables, our AI evaluates the entire birth chart holistically: examining planetary dignities (domicile, exaltation, detriment, fall), dispositor chains (which planet answers to which ruler), harmonic aspect orbs, and planetary sect (day vs night nativity). The result is a unified, multidimensional psychological portrait that honors both human sovereignty and cosmic timing.
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="/birth-chart"
                className="inline-flex items-center space-x-2 text-xs font-semibold text-celestial-gold hover:text-celestial-amber transition-colors"
              >
                <span>Calculate Your Chart Using Our Ephemeris Engine</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>

          {/* Guide 2 */}
          <article className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 space-y-4">
            <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-celestial-cyan">
              <Compass className="w-4 h-4" />
              <span>Astrological Systems Guide</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              House Division Systems Explained: Placidus vs. Whole Sign vs. Koch
            </h2>
            <div className="text-xs sm:text-sm text-slate-300 space-y-3 leading-relaxed">
              <p>
                One of the most debated questions in astrology is which house division system to employ. The astrological houses divide the 360-degree sphere of local space into twelve sectors of earthly experience.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-cosmic-950/60 p-4 rounded-xl border border-white/5 space-y-1.5">
                  <h3 className="font-bold text-white text-sm">Placidus System</h3>
                  <p className="text-xs text-slate-400">
                    Created by 17th-century monk Placidus de Titis. Houses are based on the time it takes degrees to traverse the diurnal and nocturnal arcs. Placidus accounts for geographic latitude, resulting in unequal house sizes and intercepted signs.
                  </p>
                </div>
                <div className="bg-cosmic-950/60 p-4 rounded-xl border border-white/5 space-y-1.5">
                  <h3 className="font-bold text-white text-sm">Whole Sign System</h3>
                  <p className="text-xs text-slate-400">
                    The original system of antiquity (Hellenistic &amp; Vedic). Whichever zodiac sign contains the Ascendant degree becomes the entire 1st house (0° to 30°), the next sign becomes the 2nd house, and so on. Highly prized for clarity and predictive profections.
                  </p>
                </div>
                <div className="bg-cosmic-950/60 p-4 rounded-xl border border-white/5 space-y-1.5">
                  <h3 className="font-bold text-white text-sm">Koch System</h3>
                  <p className="text-xs text-slate-400">
                    A refined quadrant system developed by Dr. Walter Koch. It calculates house cusps based on the division of the horizon at equal ascensional times. Often favored by German psychological astrologers for fine-tuned psychological timing.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Guide 3 */}
          <article className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 space-y-4">
            <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-rose-400">
              <Globe className="w-4 h-4" />
              <span>Cosmological Perspective</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Tropical vs. Sidereal Zodiac: Understanding Western and Vedic Astrology
            </h2>
            <div className="text-xs sm:text-sm text-slate-300 space-y-3 leading-relaxed">
              <p>
                Many seekers are surprised to discover that their Sun sign in Indian Vedic astrology is different from their Western horoscope. This difference arises from two distinct astronomical coordinate reference systems:
              </p>
              <p>
                <strong>The Tropical Zodiac (Western):</strong> Based on the Sun-Earth relationship. The vernal equinox (the first day of spring in the northern hemisphere, where day and night are equal) is permanently defined as 0°00&apos; Aries. It reflects the solar cycle of seasons and psychological archetypes of initiation, growth, harvest, and dormancy.
              </p>
              <p>
                <strong>The Sidereal Zodiac (Vedic/Eastern):</strong> Aligned with the physical background of fixed constellations in the cosmos. Because the Earth has an axial precession (a slow rotational wobble taking roughly 25,800 years to complete one circle), the equinoxes move backward through the constellations over millennia. This 24-degree difference (known as the <em>Ayanamsha</em>) means Sidereal astrology places the planets against the visible stars.
              </p>
              <p>
                Neither system is &quot;wrong&quot;—they simply answer different questions. Tropical astrology maps your psychological personality and earthly ego development; Sidereal astrology maps your soul&apos;s karmic trajectory, Nakshatra deities, and ancestral dharma.
              </p>
            </div>
          </article>
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto space-y-6 pt-16 border-t border-white/10 mt-16">
          <div className="text-center">
            <div className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-widest text-celestial-amber mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>Knowledge Base FAQ</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Frequently Asked Technical Questions
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
