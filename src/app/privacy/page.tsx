import React from "react";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo-config";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import PlayStoreButton from "@/components/ui/PlayStoreButton";
import { ShieldCheck, Lock, EyeOff, Smartphone, FileText, CheckCircle2, AlertCircle, Mail } from "lucide-react";

export const metadata = constructMetadata({
  title: "Privacy Policy — Veya: AI Astrologer (Google Play & Web)",
  description:
    "Official Privacy Policy for Veya: AI Astrologer (Package: com.astrotales.veya). Details our strict birth data protection, AI ephemeris processing, zero-data-sale policy, and Google Play compliance.",
  canonical: "/privacy",
  keywords: [
    "Veya AI Astrologer Privacy Policy",
    "com.astrotales.veya Privacy",
    "Astrology App Data Safety",
    "Google Play Astrology Privacy Policy",
    "GDPR CCPA Astrology App",
  ],
});

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-24">
      <Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy" }]} />

      {/* Header Banner */}
      <div className="mt-8 mb-12 space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" />
          <span>Google Play Developer Policy &amp; GDPR / CCPA Compliant</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
          Privacy Policy for <br />
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

        {/* Play Store App Card */}
        <div className="p-4 rounded-2xl bg-cosmic-900 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <Smartphone className="w-6 h-6 text-celestial-gold shrink-0" />
            <div>
              <span className="text-sm font-bold text-white block">Official Google Play Store Distribution</span>
              <span className="text-xs text-slate-400">Available for Android smartphones and tablets</span>
            </div>
          </div>
          <PlayStoreButton size="sm" />
        </div>
      </div>

      {/* Policy Content Body (>1,200 words) */}
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 space-y-10 text-xs sm:text-sm text-slate-300 leading-relaxed">
        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-white flex items-center space-x-2">
            <span>1. Introduction &amp; Scope of Policy</span>
          </h2>
          <p>
            Welcome to <strong>Veya: AI Astrologer</strong> (&quot;Veya&quot;, &quot;the Application&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), distributed on the Google Play Store under package name <code className="text-celestial-amber font-mono">com.astrotales.veya</code>. This Privacy Policy governs all interactions with our Android mobile application, AI chat interfaces, birth chart generators, synastry tools, and associated cloud services.
          </p>
          <p>
            We consider astrological birth data—specifically your exact date, time, and geographic location of birth—to be deeply personal, sacred telemetry. We have architected Veya from the ground up to ensure that your spiritual and psychological inquiries remain strictly private, encrypted, and in your sovereign control.
          </p>
          <p>
            By installing, downloading, registering with, or utilizing Veya: AI Astrologer, you consent to the data collection and processing practices described in this Privacy Policy. If you do not agree with this policy, please uninstall the application and discontinue use of our services immediately.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
            2. Information We Collect and Process
          </h2>
          <p>
            To provide sub-arcminute astronomical ephemeris calculations and contextual AI astrologer readings, Veya processes specific categories of information:
          </p>

          <div className="space-y-4 pt-2">
            <div className="bg-cosmic-950/60 p-4 rounded-xl border border-white/5 space-y-1.5">
              <h3 className="font-bold text-white text-sm">A. Astrological Birth Metrics (Voluntarily Provided)</h3>
              <p className="text-slate-400">
                When you generate a natal chart, kundli, or relationship synastry match, you submit:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-400">
                <li>Your preferred name or alias (e.g. &quot;Maya&quot;).</li>
                <li>Exact date of birth (Day, Month, Year).</li>
                <li>Exact time of birth (Hour, Minute, AM/PM), used to calculate the Ascendant (Rising sign) and house cusps.</li>
                <li>Birth City and Country, which our system converts via offline geocoding into geographic latitude and longitude coordinates strictly for calculating local sidereal time and ephemeris planetary positions.</li>
              </ul>
            </div>

            <div className="bg-cosmic-950/60 p-4 rounded-xl border border-white/5 space-y-1.5">
              <h3 className="font-bold text-white text-sm">B. AI Astrologer Consultation Prompts &amp; Queries</h3>
              <p className="text-slate-400">
                When you converse with our AI astrologer personas (Selene Voss, Aurelius Stone, or Sage Vasistha), your chat queries are transmitted over encrypted TLS 1.3 tunnels to our neural synthesis pipeline. These queries are processed in ephemeral memory sessions to formulate contextual astrological guidance and are not linked to your real-world identity or sold to marketing aggregators.
              </p>
            </div>

            <div className="bg-cosmic-950/60 p-4 rounded-xl border border-white/5 space-y-1.5">
              <h3 className="font-bold text-white text-sm">C. Device &amp; Technical Telemetry (Automatically Collected)</h3>
              <p className="text-slate-400">
                To guarantee optimal Core Web Vitals, app stability, and crash resolution on Android devices, we collect non-identifiable technical metrics:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-400">
                <li>Device manufacturer, model, operating system version (e.g. Android 14 / 15), and screen resolution.</li>
                <li>Anonymous crash stack traces and performance diagnostic logs via Google Play Console Vitals.</li>
                <li>Anonymous installation IDs and IP addresses (anonymized at ingestion) solely for network rate limiting and DDoS prevention.</li>
              </ul>
            </div>

            <div className="bg-cosmic-950/60 p-4 rounded-xl border border-white/5 space-y-1.5">
              <h3 className="font-bold text-white text-sm">D. Google Play Billing Information</h3>
              <p className="text-slate-400">
                If you subscribe to premium features or purchase consultations, all financial transactions are processed directly and securely by Google Play In-App Billing. Veya does NOT collect, store, or have access to your credit card number, bank details, or payment credentials. We only receive an anonymous purchase token confirming your active subscription state.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
            3. How We Use Your Data &amp; Legal Bases for Processing
          </h2>
          <p>
            We process your data strictly under the following lawful bases defined by the European Union General Data Protection Regulation (GDPR Article 6) and international standards:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300">
            <li>
              <strong>Performance of a Contract (Art. 6(1)(b)):</strong> To calculate your personal birth chart, compute planetary transits against your natal angles, determine relationship compatibility scores, and stream AI astrologer consultations requested by you.
            </li>
            <li>
              <strong>Explicit User Consent (Art. 6(1)(a)):</strong> For optional push notifications regarding daily lunar ingresses and celestial transit weather. You may revoke consent at any time via Android system notification settings.
            </li>
            <li>
              <strong>Legitimate Interests (Art. 6(1)(f)):</strong> To maintain application cybersecurity, detect automated abuse or scraping, optimize computational efficiency, and correct runtime bugs.
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-3 bg-emerald-500/10 border border-emerald-500/20 p-6 rounded-2xl">
          <h2 className="font-serif text-xl font-bold text-emerald-400 flex items-center space-x-2">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <span>4. Absolute Commitment: Zero Sale of Personal Data</span>
          </h2>
          <p className="text-white font-medium">
            Veya: AI Astrologer operates on an unequivocal privacy principle: <strong>We do not sell, rent, lease, trade, or monetize your personal data, birth chart calculations, or consultation conversations to data brokers, third-party marketing networks, or ad exchanges.</strong>
          </p>
          <p className="text-slate-300 text-xs leading-relaxed">
            Your personal queries and astrological readings are never used to train public generative foundation models without anonymization. Your spiritual vulnerability will never be converted into behavioral ad targeting.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
            5. Android System Permissions &amp; Why We Request Them
          </h2>
          <p>
            In compliance with Google Play Developer Policy, Veya only requests permissions strictly necessary for core functionality:
          </p>
          <div className="space-y-2 pt-1 text-slate-300">
            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <strong className="text-white">INTERNET &amp; ACCESS_NETWORK_STATE:</strong> Required to query the live NASA JPL Horizons astronomical transit servers and stream neural responses.
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <strong className="text-white">POST_NOTIFICATIONS (Android 13+):</strong> Optional permission requested only if you wish to receive daily morning horoscope alerts or major transit warnings (e.g. Mercury retrograde stations).
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <strong className="text-white">ACCESS_COARSE_LOCATION (Optional):</strong> If permitted, used solely to automatically populate your current city for local transit rising calculations. You can always manually type your city without granting location permissions.
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
            6. Third-Party Service Providers &amp; Data Transfers
          </h2>
          <p>
            To deliver high-availability cloud infrastructure and mathematical accuracy, Veya contracts with trusted enterprise infrastructure providers who adhere to strict data processing agreements (DPAs):
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
            <li><strong>Google Cloud Platform &amp; Vercel:</strong> Encrypted hosting, edge caching, and serverless compute infrastructure located in SOC 2 Type II certified data centers.</li>
            <li><strong>Google Play Services:</strong> Core Android framework utilities and Google Play In-App Billing management.</li>
            <li><strong>Swiss Ephemeris / Astrodienst:</strong> Astronomical ephemeris calculation libraries executed on our private isolated servers.</li>
          </ul>
        </section>

        {/* Section 7 */}
        <section className="space-y-3">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
            7. Data Retention, Security &amp; Encryption Standards
          </h2>
          <p>
            We implement defense-in-depth security architecture to safeguard your telemetry:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
            <li><strong>Data in Transit:</strong> All communications between the Veya Android application and backend API endpoints are encrypted using Transport Layer Security (TLS 1.3) with modern cipher suites.</li>
            <li><strong>Data at Rest:</strong> Saved birth charts and account preferences are encrypted using AES-256 encryption.</li>
            <li><strong>Retention Policy:</strong> Temporary chat consultation histories are retained only as long as necessary to maintain your active conversation context. If you use Veya without an account as a guest, chart metrics are stored locally on your device cache and are purged when you clear app data.</li>
          </ul>
        </section>

        {/* Section 8 */}
        <section className="space-y-3">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
            8. Your Privacy Rights (GDPR, CCPA &amp; Global Rights)
          </h2>
          <p>
            Regardless of your country of residence, Veya respects your fundamental privacy rights:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2">
            <div className="p-3.5 bg-white/5 rounded-xl border border-white/5">
              <strong className="text-white block mb-1">Right to Access &amp; Portability:</strong>
              <span>You have the right to request a complete copy of all personal birth data and query logs associated with your account.</span>
            </div>
            <div className="p-3.5 bg-white/5 rounded-xl border border-white/5">
              <strong className="text-white block mb-1">Right to Erasure (&quot;Right to be Forgotten&quot;):</strong>
              <span>You have the absolute right to demand the permanent deletion of your profile, birth telemetry, and chat records from our servers.</span>
            </div>
            <div className="p-3.5 bg-white/5 rounded-xl border border-white/5">
              <strong className="text-white block mb-1">Right to Rectification:</strong>
              <span>You can update or correct erroneous birth dates, times, or locations directly in the app at any time.</span>
            </div>
            <div className="p-3.5 bg-white/5 rounded-xl border border-white/5">
              <strong className="text-white block mb-1">Right to Opt-Out:</strong>
              <span>You may disable push notifications or withdraw consent for data processing with immediate effect.</span>
            </div>
          </div>
          <p className="pt-2 text-slate-400 text-xs">
            To exercise any of these rights, email our Data Protection Office at <a href="mailto:neeleshyadav1416@gmail.com" className="text-celestial-gold underline">neeleshyadav1416@gmail.com</a>. We process all verifiable requests within 30 days without charge.
          </p>
        </section>

        {/* Section 9 */}
        <section className="space-y-3">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
            9. Children&apos;s Privacy (COPPA &amp; Age Restrictions)
          </h2>
          <p>
            Veya: AI Astrologer is strictly designed for adults and individuals aged 13 and older (or 16 and older in the European Economic Area). We do not knowingly solicit, collect, or process personal data from children under the age of 13. If we discover that a child under 13 has provided us with birth data without verified parental consent, we will promptly purge that information from our active databases. Parents or guardians who believe their child has submitted personal metrics may contact us at <a href="mailto:neeleshyadav1416@gmail.com" className="text-celestial-gold underline">neeleshyadav1416@gmail.com</a> for immediate deletion.
          </p>
        </section>

        {/* Section 10 */}
        <section className="space-y-3 bg-amber-500/10 border border-amber-500/20 p-6 rounded-2xl">
          <h2 className="font-serif text-xl font-bold text-amber-300 flex items-center space-x-2">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>10. Astrological Entertainment &amp; Guidance Notice</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            In compliance with consumer protection standards and Google Play Store policies for lifestyle and astrology applications: Veya: AI Astrologer provides symbolic archetypal interpretations, psychological reflections, and entertainment guidance. Astrological insights generated by our algorithms or AI astrologer personas do NOT constitute licensed medical, legal, psychiatric, or financial advice. Any life choices made following consultation are undertaken under your own voluntary discretion and personal responsibility.
          </p>
        </section>

        {/* Section 11 */}
        <section className="space-y-3">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
            11. Modifications to This Privacy Policy
          </h2>
          <p>
            We may periodically update this Privacy Policy to reflect modifications in our mobile application features, Google Play Developer Policies, or international privacy laws. When updates are published, the revised effective date at the top of this document will be revised. For significant changes, we will provide a prominent in-app notification before the changes take effect.
          </p>
        </section>

        {/* Section 12 */}
        <section className="space-y-4 pt-4 border-t border-white/10">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-white flex items-center space-x-2">
            <Mail className="w-5 h-5 text-celestial-gold" />
            <span>12. Contact Our Privacy &amp; Data Protection Officer</span>
          </h2>
          <p>
            If you have questions, feedback, or concerns regarding our privacy practices, or if you wish to exercise your data deletion rights under Google Play, GDPR, or CCPA, please contact our dedicated Data Protection Office:
          </p>
          <div className="p-5 rounded-2xl bg-cosmic-950/80 border border-white/10 space-y-1.5 text-xs">
            <p><strong>App Title:</strong> Veya: AI Astrologer</p>
            <p><strong>Package Name:</strong> <code className="text-celestial-amber font-mono">com.astrotales.veya</code></p>
            <p><strong>Developer Entity:</strong> AstroTales / Veya Intelligence Labs</p>
            <p><strong>Direct Privacy &amp; Support Contact:</strong> <a href="mailto:neeleshyadav1416@gmail.com" className="text-celestial-gold underline font-mono">neeleshyadav1416@gmail.com</a></p>
            <p><strong>Official Distribution:</strong> Google Play Store (<code className="text-celestial-amber font-mono">com.astrotales.veya</code>)</p>
          </div>
        </section>
      </div>
    </div>
  );
}
