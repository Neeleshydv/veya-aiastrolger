import React from "react";
import Link from "next/link";
import Image from "next/image";
import PlayStoreButton from "@/components/ui/PlayStoreButton";
import { Sparkles, Shield, Compass, Heart, Calendar, BookOpen, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const zodiacSigns = [
    { name: "Aries", slug: "aries" },
    { name: "Taurus", slug: "taurus" },
    { name: "Gemini", slug: "gemini" },
    { name: "Cancer", slug: "cancer" },
    { name: "Leo", slug: "leo" },
    { name: "Virgo", slug: "virgo" },
    { name: "Libra", slug: "libra" },
    { name: "Scorpio", slug: "scorpio" },
    { name: "Sagittarius", slug: "sagittarius" },
    { name: "Capricorn", slug: "capricorn" },
    { name: "Aquarius", slug: "aquarius" },
    { name: "Pisces", slug: "pisces" },
  ];

  return (
    <footer className="border-t border-white/10 bg-cosmic-950 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <Image
                src="/logo.webp"
                alt="Veya AI Astrologer Logo"
                width={42}
                height={42}
                className="rounded-full shadow-lg shadow-celestial-gold/20 border border-celestial-gold/30 group-hover:scale-105 transition-transform"
              />
              <span className="font-serif text-2xl font-bold tracking-wider text-white group-hover:text-celestial-amber transition-colors">
                VEYA <span className="text-xs uppercase text-celestial-gold font-sans">AI ASTROLOGY</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 pr-6">
              Veya fuses high-precision Swiss Ephemeris orbital calculations with cutting-edge artificial intelligence to decode your cosmic blueprint. Unrivaled accuracy across Western Hellenistic, Psychological, and Vedic Jyotish astrological traditions.
            </p>
            <div className="flex items-center space-x-2 text-xs text-slate-500 pt-2">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>NASA JPL Ephemeris Coordinate Precision System</span>
            </div>
            <div className="pt-2">
              <PlayStoreButton size="sm" />
            </div>
          </div>

          {/* AI Tools */}
          <div>
            <h3 className="font-serif text-sm font-semibold tracking-wider text-white uppercase mb-4">
              AI Cosmic Tools
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/birth-chart" className="hover:text-celestial-amber transition-colors flex items-center space-x-2">
                  <Compass className="w-3.5 h-3.5 text-celestial-gold" />
                  <span>AI Birth Chart</span>
                </Link>
              </li>
              <li>
                <Link href="/compatibility" className="hover:text-celestial-amber transition-colors flex items-center space-x-2">
                  <Heart className="w-3.5 h-3.5 text-rose-400" />
                  <span>Synastry Compatibility</span>
                </Link>
              </li>
              <li>
                <Link href="/daily-horoscope" className="hover:text-celestial-amber transition-colors flex items-center space-x-2">
                  <Calendar className="w-3.5 h-3.5 text-celestial-cyan" />
                  <span>Daily Transits</span>
                </Link>
              </li>
              <li>
                <Link href="/ai-astrologer" className="hover:text-celestial-amber transition-colors flex items-center space-x-2">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  <span>Ask AI Astrologer</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* 12 Zodiac Directory (SEO boost) */}
          <div>
            <h3 className="font-serif text-sm font-semibold tracking-wider text-white uppercase mb-4">
              Zodiac Encyclopedia
            </h3>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs">
              {zodiacSigns.map((sign) => (
                <Link
                  key={sign.slug}
                  href={`/zodiac/${sign.slug}`}
                  className="hover:text-celestial-amber transition-colors py-0.5"
                >
                  {sign.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Knowledge & Trust */}
          <div>
            <h3 className="font-serif text-sm font-semibold tracking-wider text-white uppercase mb-4">
              Methodology & Trust
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/guides" className="hover:text-celestial-amber transition-colors flex items-center space-x-2">
                  <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                  <span>Ephemeris Science</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-celestial-amber transition-colors">
                  About & Astrological Council
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-celestial-amber transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-celestial-amber transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} Veya AI Astrology Platform. All cosmic rights reserved.</p>
          <p className="max-w-xl text-center md:text-right text-[11px] text-slate-600">
            Disclaimer: Veya provides archetypal astrological synthesis and psychological reflection for self-discovery and enlightenment. Astrological interpretations are not substitutes for licensed professional, medical, legal, or financial counsel.
          </p>
        </div>
      </div>
    </footer>
  );
}
