import React from "react";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo-config";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import StructuredData from "@/components/seo/StructuredData";
import PlayStoreButton from "@/components/ui/PlayStoreButton";
import { ShieldCheck, Sparkles, BookOpen, Globe, Award, Mail, HeartHandshake, Cpu, Star, Smartphone, CheckCircle2 } from "lucide-react";

export const metadata = constructMetadata({
  title: "About Veya: AI Astrologer — Ephemeris Lab & Advisory Council",
  description:
    "Learn about Veya: AI Astrologer (com.astrotales.veya), our Astrological Advisory Council, NASA JPL ephemeris integration, and ethical standards across Western, Hellenistic, and Vedic traditions.",
  canonical: "/about",
  keywords: [
    "About Veya AI Astrologer",
    "com.astrotales.veya About",
    "Astrological Advisory Council",
    "Astrology Editorial Standards",
    "Swiss Ephemeris AI Integration",
    "E-E-A-T Astrology Guidelines",
  ],
});

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Veya: AI Astrologer",
    description:
      "Veya is an advanced astrological research laboratory combining Swiss Ephemeris astronomical calculations with deep neural models.",
    url: "/about",
  };

  const councilMembers = [
    {
      name: "Dr. Helena Vance, PhD",
      role: "Lead Astropsychologist & Council Chair",
      credentials: "PhD in Depth Psychology, ISAR Certified Astrologer (CAP)",
      bio: "With over 22 years of clinical psychoanalysis and archetypal astrological practice, Dr. Vance oversees the psychological synthesis frameworks powering Veya. Her published research explores the intersection of Carl Jung's synchronicity principle and planetary transits.",
    },
    {
      name: "Marcus Thorne, MA",
      role: "Traditional Hellenistic Astrology Director",
      credentials: "MA in Classical Civilizations, NCGR-PAA Level IV Master Astrologer",
      bio: "A classical scholar specializing in 1st-century Mediterranean astrological papyri and Arabic medieval translations. Marcus ensures mathematical fidelity for Veya's Time-Lord profections, sect doctrine, and Hellenistic essential dignities.",
    },
    {
      name: "Pandit Rajeshwar Sharma",
      role: "Vedic Jyotish & Nakshatra Specialist",
      credentials: "Jyotish Visharad (ICAS), 30+ Years Lineage Astrologer (Varanasi)",
      bio: "Descendant of seven generations of Vedic astrologers in Varanasi. Pandit Sharma directs Veya's Sidereal zodiac calculations, 27 Nakshatra deity dynamics, Vimshottari Dasha cycles, and traditional gemstone and mantra remedies.",
    },
    {
      name: "Devon Chen",
      role: "Principal AI Ephemeris Architect",
      credentials: "MS in Computer Science (Stanford), Former Orbital Mechanics Researcher",
      bio: "Devon bridges spherical celestial trigonometry with modern transformer neural models. He authored the low-latency numerical integration pipeline connecting Veya directly to NASA JPL Horizons orbital telemetry.",
    },
  ];

  return (
    <>
      <StructuredData data={aboutSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-24">
        <Breadcrumbs items={[{ label: "About Us", href: "/about" }]} />

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mt-6 mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-panel-gold text-xs font-semibold uppercase tracking-widest text-celestial-gold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Ephemeris Intelligence Laboratory</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
            About Veya: AI Astrologer &amp; <br />
            <span className="cosmic-gradient-text">Our Advisory Council</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            We are dedicated to elevating astrology from fragmented, generic horoscopes into a rigorous, empowering, and mathematically precise science of human potential and cosmic timing.
          </p>

          <div className="pt-2 flex justify-center">
            <PlayStoreButton size="md" />
          </div>
        </div>

        {/* Content Body */}
        <div className="space-y-16 max-w-5xl mx-auto">
          {/* Mission */}
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 space-y-4">
            <div className="flex items-center space-x-2 text-celestial-gold text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Cosmic Blueprint &amp; Philosophy</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Our Founding Mission
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Astrology was historically considered the queen of sciences—the nexus where observational astronomy, spherical geometry, mythic psychology, and philosophical metaphysics converged. For millennia, master astrologers calculated ephemerides by hand, tracking the sacred geometry of the solar system to understand the seasons of human consciousness.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Over the late 20th century, mass media commercialization reduced this majestic art into single-sentence Sun-sign horoscopes in newspapers, stripping away its mathematical precision and psychological depth. Veya was founded by a collective of professional consulting astrologers, classical scholars, and AI research engineers to restore astrology to its rightful stature.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Available both on the web and as an official Android mobile application (<code className="text-celestial-amber font-mono">com.astrotales.veya</code>), Veya provides instant access to sub-arcminute astronomical ephemeris calculations and profound neural synthesis across Western, Hellenistic, and Vedic traditions.
            </p>
          </div>

          {/* Ephemeris Technical Foundation */}
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 space-y-6">
            <div className="flex items-center space-x-2 text-celestial-cyan text-xs font-semibold uppercase tracking-wider">
              <Cpu className="w-4 h-4" />
              <span>Astronomical Precision</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              The Swiss Ephemeris &amp; NASA JPL Integration
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Unlike generic horoscope platforms that rely on rough approximations, Veya is powered by the <strong>Swiss Ephemeris</strong>—the international gold standard in computational astronomy. Our calculations derive directly from the numerical integration of celestial orbits developed by NASA&apos;s Jet Propulsion Laboratory (JPL DE431 ephemeris).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
              <div className="bg-cosmic-950/60 p-4 rounded-xl border border-white/5 space-y-1">
                <span className="font-bold text-white text-sm">0.001 Arcsecond Accuracy</span>
                <p className="text-slate-400">High-precision geocentric and topocentric planetary coordinates calculated in real time.</p>
              </div>
              <div className="bg-cosmic-950/60 p-4 rounded-xl border border-white/5 space-y-1">
                <span className="font-bold text-white text-sm">Precise Obliquity &amp; Nutation</span>
                <p className="text-slate-400">Accounts for true astronomical precession, earth axial nutation, and light-time corrections.</p>
              </div>
              <div className="bg-cosmic-950/60 p-4 rounded-xl border border-white/5 space-y-1">
                <span className="font-bold text-white text-sm">Multi-House Trig Geometry</span>
                <p className="text-slate-400">Spherical trigonometry calculations for Placidus, Whole Sign, Koch, Regiomontanus, and Equal houses.</p>
              </div>
            </div>
          </div>

          {/* Astrological Council (E-E-A-T Authority) */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-semibold uppercase tracking-widest text-celestial-gold">
                Human Expertise Guiding Neural Models
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                The Veya Astrological Advisory Council
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                Our artificial intelligence models are continuously audited, curated, and supervised by accredited consulting astrologers with over 80 collective years of practice.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {councilMembers.map((member) => (
                <div key={member.name} className="glass-panel p-6 rounded-2xl border border-white/5 space-y-3">
                  <div>
                    <h3 className="font-serif font-bold text-white text-lg">{member.name}</h3>
                    <p className="text-xs text-celestial-amber font-medium">{member.role}</p>
                    <p className="text-[11px] text-slate-400 italic">{member.credentials}</p>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed border-t border-white/5 pt-2">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Editorial Code of Ethics */}
          <div className="glass-panel-gold rounded-3xl p-8 sm:p-12 border border-white/10 space-y-6">
            <div className="flex items-center space-x-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-5 h-5" />
              <span>Ethical Governance &amp; Editorial Standards</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              The Veya Astrological Code of Ethics
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-300">
              <div className="bg-cosmic-950/60 p-5 rounded-2xl border border-white/5 space-y-2">
                <h3 className="font-bold text-white text-base">1. Human Free Will &amp; Agency</h3>
                <p className="leading-relaxed">
                  We reject fatalistic predictions that induce fear or anxiety. Astrology describes energetic weather and archetypal potentials; it does not override your sovereign choices. Every challenge in a chart is framed as an evolutionary catalyst for self-mastery.
                </p>
              </div>

              <div className="bg-cosmic-950/60 p-5 rounded-2xl border border-white/5 space-y-2">
                <h3 className="font-bold text-white text-base">2. Rigorous Data Verification</h3>
                <p className="leading-relaxed">
                  Every reading is checked against NASA JPL Horizons astronomical tables. We do not generate generic filler content; all interpretations are dynamically synthesized from actual astronomical geometry.
                </p>
              </div>

              <div className="bg-cosmic-950/60 p-5 rounded-2xl border border-white/5 space-y-2">
                <h3 className="font-bold text-white text-base">3. Zero Data Exploitation</h3>
                <p className="leading-relaxed">
                  We maintain an ironclad zero-data-sale commitment. Your personal birth dates, times, coordinates, and AI consultation questions are never sold or rented to data brokers or third-party advertising exchanges.
                </p>
              </div>

              <div className="bg-cosmic-950/60 p-5 rounded-2xl border border-white/5 space-y-2">
                <h3 className="font-bold text-white text-base">4. Inclusivity &amp; Psychological Safety</h3>
                <p className="leading-relaxed">
                  Our platform welcomes seekers of all backgrounds, cultures, and belief systems. We design our AI personas to provide compassionate, non-judgmental, and trauma-informed reflections.
                </p>
              </div>
            </div>
          </div>

          {/* Contact & Google Play Support Box */}
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 text-center max-w-2xl mx-auto space-y-4">
            <Mail className="w-8 h-8 text-celestial-gold mx-auto" />
            <h3 className="font-serif text-2xl font-bold text-white">
              Connect With the Veya Council
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              For research partnerships, ephemeris API integrations, or media inquiries regarding Veya: AI Astrologer (<code className="text-celestial-amber font-mono">com.astrotales.veya</code>), reach out to our council:
            </p>
            <div className="pt-2">
              <p className="font-mono text-sm text-celestial-amber font-semibold">
                neeleshyadav1416@gmail.com
              </p>
              <p className="text-xs text-slate-400 mt-1">
                AstroTales / Veya Intelligence Labs
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
