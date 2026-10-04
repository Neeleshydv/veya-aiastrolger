import React from "react";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo-config";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import PlayStoreButton from "@/components/ui/PlayStoreButton";
import { FileText, AlertTriangle, ShieldCheck, Smartphone, CheckCircle2, Scale, Mail } from "lucide-react";

export const metadata = constructMetadata({
  title: "Terms of Service — Veya: AI Astrologer (Google Play & Web)",
  description:
    "Official Terms of Service for Veya: AI Astrologer (Package: com.astrotales.veya). Details subscription billing, astrological disclaimers, AI content terms, and user guidelines.",
  canonical: "/terms",
  keywords: [
    "Veya AI Astrologer Terms of Service",
    "com.astrotales.veya Terms",
    "Google Play Astrology Subscription Terms",
    "Astrology AI Disclaimer",
  ],
});

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-24">
      <Breadcrumbs items={[{ label: "Terms of Service", href: "/terms" }]} />

      {/* Header Banner */}
      <div className="mt-8 mb-12 space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-celestial-gold/15 border border-celestial-gold/30 text-celestial-amber text-xs font-semibold uppercase tracking-wider">
          <Scale className="w-4 h-4" />
          <span>User Agreement &amp; Subscription Terms</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
          Terms of Service for <br />
          <span className="cosmic-gradient-text">Veya: AI Astrologer</span>
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2 border-b border-white/10 pb-6">
          <span><strong>Application:</strong> Veya: AI Astrologer</span>
          <span>•</span>
          <span><strong>Package ID:</strong> <code className="text-celestial-amber font-mono bg-white/5 px-2 py-0.5 rounded">com.astrotales.veya</code></span>
          <span>•</span>
          <span><strong>Developer:</strong> AstroTales / Veya Labs</span>
          <span>•</span>
          <span><strong>Effective Date:</strong> October 2026</span>
        </div>

        <div className="p-4 rounded-2xl bg-cosmic-900 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <Smartphone className="w-6 h-6 text-celestial-gold shrink-0" />
            <div>
              <span className="text-sm font-bold text-white block">Official Google Play Store Distribution</span>
              <span className="text-xs text-slate-400">Governs both Android Application and Web Platform</span>
            </div>
          </div>
          <PlayStoreButton size="sm" />
        </div>
      </div>

      {/* Terms Body (>1,000 words) */}
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 space-y-10 text-xs sm:text-sm text-slate-300 leading-relaxed">
        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
            1. Acceptance of Terms &amp; Binding Agreement
          </h2>
          <p>
            These Terms of Service (&quot;Terms&quot;, &quot;Agreement&quot;) constitute a legally binding agreement between you (&quot;User&quot;, &quot;you&quot;, or &quot;your&quot;) and AstroTales / Veya Intelligence Labs (&quot;Veya&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), governing your access to and use of the <strong>Veya: AI Astrologer</strong> mobile application (Google Play Store Package: <code className="text-celestial-amber font-mono">com.astrotales.veya</code>) and all associated astrological calculators, AI chat consultations, and celestial ephemeris services.
          </p>
          <p>
            By downloading, installing, accessing, or using any part of the Service, you signify that you have read, understood, and agree to be bound by these Terms, as well as our <Link href="/privacy" className="text-celestial-gold underline">Privacy Policy</Link>. If you do not agree to these Terms, you must immediately uninstall the application from your devices and cease using our services.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
            2. Description of Service &amp; Core Features
          </h2>
          <p>
            Veya: AI Astrologer is an advanced digital lifestyle and self-reflection platform designed to provide astronomical-astrological calculations and archetypal interpretations. The Service encompasses:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
            <li><strong>AI Natal Birth Chart Synthesizer:</strong> Computing planetary positions, house cusps, and aspects based on the Swiss Ephemeris and NASA JPL Horizons orbital data.</li>
            <li><strong>Synastry &amp; Love Compatibility Matrix:</strong> Cross-chart planetary comparisons analyzing emotional, intellectual, and relational dynamics.</li>
            <li><strong>Real-Time Transit Weather &amp; Daily Horoscopes:</strong> Planetary ingresses, retrogrades, and daily cosmic affirmations.</li>
            <li><strong>Conversational AI Astrologer Consultations:</strong> Multi-turn dialogues with specialized AI personas (Psychological, Hellenistic, and Vedic traditions).</li>
          </ul>
        </section>

        {/* Section 3: Legal Disclaimers */}
        <section className="space-y-3 bg-amber-500/10 border border-amber-500/20 p-6 rounded-2xl">
          <h2 className="font-serif text-xl font-bold text-amber-300 flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 shrink-0" />
            <span>3. Critical Astrological Disclaimer &amp; No Professional Advice</span>
          </h2>
          <p className="text-slate-200 font-medium">
            PLEASE READ THIS SECTION CAREFULLY. IT GOVERNS THE NATURE AND LIMITATIONS OF OUR SERVICE:
          </p>
          <p className="text-slate-300 leading-relaxed">
            Veya: AI Astrologer provides astrological, symbolic, and archetypal interpretations intended strictly for <strong>entertainment, educational, and personal self-reflection purposes</strong>. Astrology is a symbolic language of potentials; it does not replace scientific determinism, professional counseling, or personal agency.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-300">
            <li><strong>Medical &amp; Psychiatric Notice:</strong> Readings generated by Veya are NOT medical diagnoses, psychiatric therapy, or clinical treatment. If you are experiencing physical illness or mental health crises, seek licensed medical or psychiatric professionals immediately.</li>
            <li><strong>Financial &amp; Legal Notice:</strong> Astrological transit forecasts and AI consultations are NOT financial, investment, or legal advice. Do not make stock purchases, real estate contracts, or legal decisions based on planetary positions.</li>
            <li><strong>Assumption of Risk:</strong> Any choices, actions, or lifestyle modifications you undertake following the receipt of an astrological interpretation or AI consultation are made solely under your own voluntary discretion and personal responsibility.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
            4. User Eligibility &amp; Account Responsibility
          </h2>
          <p>
            You must be at least 13 years of age (or 16 years of age in the European Economic Area) to download and use Veya. If you are under the legal age of majority in your jurisdiction, you represent that you have obtained the consent of your parent or legal guardian to agree to these Terms.
          </p>
          <p>
            When submitting birth metrics (date, time, birthplace), you warrant that the information is accurate or provided for personal entertainment purposes. You agree not to submit someone else’s private birth metrics without their prior consent.
          </p>
        </section>

        {/* Section 5: Google Play Billing */}
        <section className="space-y-3">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
            5. In-App Purchases, Subscriptions &amp; Google Play Billing
          </h2>
          <p>
            Certain advanced features, unlimited AI consultations, and detailed PDF chart exports may be offered through paid in-app purchases or recurring subscriptions via Google Play Store In-App Billing:
          </p>
          <div className="space-y-2 pt-1 text-slate-300">
            <div className="p-3.5 bg-white/5 rounded-xl border border-white/5 space-y-1">
              <strong className="text-white block">A. Billing &amp; Payment Processing:</strong>
              <p className="text-xs text-slate-400">All financial charges are processed directly through your Google Play account using the payment method configured on your Android device. Subscription prices are clearly displayed prior to purchase.</p>
            </div>

            <div className="p-3.5 bg-white/5 rounded-xl border border-white/5 space-y-1">
              <strong className="text-white block">B. Automatic Renewal &amp; Cancellation:</strong>
              <p className="text-xs text-slate-400">Subscriptions automatically renew at the end of each billing cycle (e.g. monthly or annually) unless cancelled at least 24 hours before the end of the current period. You can manage or cancel your subscription at any time directly through the Google Play Store app under <em>Google Play &gt; Payments &amp; Subscriptions &gt; Subscriptions</em>.</p>
            </div>

            <div className="p-3.5 bg-white/5 rounded-xl border border-white/5 space-y-1">
              <strong className="text-white block">C. Refund Policy:</strong>
              <p className="text-xs text-slate-400">Refund requests for purchases made through Google Play are subject to Google Play Refund Policies. You may submit refund inquiries directly through Google Play support within the applicable refund window.</p>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
            6. Artificial Intelligence &amp; Neural Content Notice
          </h2>
          <p>
            Veya employs advanced artificial intelligence models trained on archetypal and historical astrological treatises. While our neural models are engineered to provide uplifting, nuanced, and psychologically resonant reflections, you acknowledge that:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>AI-generated text is probabilistic in nature and may occasionally contain poetic, symbolic, or speculative statements.</li>
            <li>The AI astrologer personas (Selene, Aurelius, Sage Vasistha) are automated algorithmic simulations and do not represent human consulting astrologers in real-time.</li>
            <li>We continuously refine our neural safety filters to ensure advice remains constructive, non-judgmental, and free of harmful bias.</li>
          </ul>
        </section>

        {/* Section 7 */}
        <section className="space-y-3">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
            7. Intellectual Property Rights
          </h2>
          <p>
            All original algorithms, user interface designs, logos, graphic assets, software code, astrological databases, and explanatory text in Veya: AI Astrologer are the proprietary intellectual property of AstroTales and Veya Labs, protected under international copyright, trademark, and trade secret laws.
          </p>
          <p>
            You are granted a revocable, non-exclusive, non-transferable, limited license to download and use the application for your personal, non-commercial purposes. You may screenshot and share your personal birth chart graphics and Big Three summaries on social media, provided you do not alter the Veya branding.
          </p>
        </section>

        {/* Section 8 */}
        <section className="space-y-3">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
            8. Prohibited Activities
          </h2>
          <p>
            When utilizing Veya: AI Astrologer, you agree NOT to:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Reverse engineer, decompile, or disassemble the application or attempt to extract the underlying neural prompts or proprietary ephemeris algorithms.</li>
            <li>Utilize automated bots, spiders, or scrapers to harvest chart data or astrological encyclopedia texts.</li>
            <li>Submit abusive, defamatory, harassing, sexually explicit, or unlawful queries to the AI astrologer chat console.</li>
            <li>Bypass, disable, or tamper with security protocols or digital rights management mechanisms.</li>
          </ul>
        </section>

        {/* Section 9 */}
        <section className="space-y-3">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
            9. Limitation of Liability &amp; Disclaimer of Warranties
          </h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, VEYA: AI ASTROLOGER IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
          </p>
          <p>
            IN NO EVENT SHALL ASTROTALES, VEYA LABS, ITS DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF YOUR USE OF THE SERVICE, INCLUDING ANY DECISIONS MADE IN RELIANCE UPON ASTROLOGICAL READINGS, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </p>
        </section>

        {/* Section 10 */}
        <section className="space-y-3">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
            10. Termination &amp; Governing Law
          </h2>
          <p>
            We reserve the right to suspend or terminate your access to the Service at our sole discretion, without prior notice, if you breach these Terms of Service or engage in fraudulent, abusive, or unauthorized activities.
          </p>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of Delaware, United States, without regard to its conflict of law provisions. Any dispute arising out of these Terms shall be resolved through binding arbitration or within competent courts of jurisdiction.
          </p>
        </section>

        {/* Section 11 */}
        <section className="space-y-4 pt-4 border-t border-white/10">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-white flex items-center space-x-2">
            <Mail className="w-5 h-5 text-celestial-gold" />
            <span>11. Contact &amp; Legal Support</span>
          </h2>
          <p>
            For questions regarding these Terms of Service, in-app purchases, or intellectual property rights, please contact our legal counsel:
          </p>
          <div className="p-5 rounded-2xl bg-cosmic-950/80 border border-white/10 space-y-1.5 text-xs">
            <p><strong>Application:</strong> Veya: AI Astrologer</p>
            <p><strong>Package ID:</strong> <code className="text-celestial-amber font-mono">com.astrotales.veya</code></p>
            <p><strong>Entity:</strong> AstroTales / Veya Intelligence Labs</p>
            <p><strong>Direct Legal &amp; Customer Support:</strong> <a href="mailto:neeleshyadav1416@gmail.com" className="text-celestial-gold underline font-mono">neeleshyadav1416@gmail.com</a></p>
            <p><strong>Official Distribution:</strong> Google Play Store (<code className="text-celestial-amber font-mono">com.astrotales.veya</code>)</p>
          </div>
        </section>
      </div>
    </div>
  );
}
