"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Compass, Heart, Calendar, MessageSquareText, Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [zodiacDropdownOpen, setZodiacDropdownOpen] = useState(false);

  const signs = [
    { name: "Aries", slug: "aries", icon: "♈" },
    { name: "Taurus", slug: "taurus", icon: "♉" },
    { name: "Gemini", slug: "gemini", icon: "♊" },
    { name: "Cancer", slug: "cancer", icon: "♋" },
    { name: "Leo", slug: "leo", icon: "♌" },
    { name: "Virgo", slug: "virgo", icon: "♍" },
    { name: "Libra", slug: "libra", icon: "♎" },
    { name: "Scorpio", slug: "scorpio", icon: "♏" },
    { name: "Sagittarius", slug: "sagittarius", icon: "♐" },
    { name: "Capricorn", slug: "capricorn", icon: "♑" },
    { name: "Aquarius", slug: "aquarius", icon: "♒" },
    { name: "Pisces", slug: "pisces", icon: "♓" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 glass-panel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/logo.webp"
              alt="Veya AI Astrologer Logo"
              width={46}
              height={46}
              className="rounded-full shadow-lg shadow-celestial-gold/25 group-hover:scale-105 transition-transform duration-300 border border-celestial-gold/30"
              priority
            />
            <div>
              <span className="font-serif text-2xl font-bold tracking-wider text-white group-hover:text-celestial-amber transition-colors">
                VEYA
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-celestial-gold font-sans font-semibold">
                AI Astrology
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
            <Link
              href="/birth-chart"
              className="flex items-center space-x-1.5 text-slate-300 hover:text-celestial-amber transition-colors"
            >
              <Compass className="w-4 h-4 text-celestial-gold" />
              <span>AI Birth Chart</span>
            </Link>

            <Link
              href="/compatibility"
              className="flex items-center space-x-1.5 text-slate-300 hover:text-celestial-amber transition-colors"
            >
              <Heart className="w-4 h-4 text-rose-400" />
              <span>Synastry Match</span>
            </Link>

            <Link
              href="/daily-horoscope"
              className="flex items-center space-x-1.5 text-slate-300 hover:text-celestial-amber transition-colors"
            >
              <Calendar className="w-4 h-4 text-celestial-cyan" />
              <span>Daily Transits</span>
            </Link>

            {/* Zodiac Encyclopedia Dropdown */}
            <div className="relative">
              <button
                onClick={() => setZodiacDropdownOpen(!zodiacDropdownOpen)}
                onMouseEnter={() => setZodiacDropdownOpen(true)}
                className="flex items-center space-x-1 text-slate-300 hover:text-celestial-amber transition-colors py-2"
              >
                <span>12 Signs</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {zodiacDropdownOpen && (
                <div
                  onMouseLeave={() => setZodiacDropdownOpen(false)}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-72 rounded-2xl glass-panel-gold p-3 shadow-2xl border border-white/10 grid grid-cols-2 gap-1.5 animate-in fade-in zoom-in-95 duration-150"
                >
                  {signs.map((sign) => (
                    <Link
                      key={sign.slug}
                      href={`/zodiac/${sign.slug}`}
                      onClick={() => setZodiacDropdownOpen(false)}
                      className="flex items-center space-x-2 px-3 py-2 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <span className="text-celestial-amber text-sm">{sign.icon}</span>
                      <span>{sign.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/guides"
              className="text-slate-300 hover:text-celestial-amber transition-colors"
            >
              Guides & Ephemeris
            </Link>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.astrotales.veya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-full text-xs font-semibold tracking-wider text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-celestial-gold/40 transition-all duration-300"
              aria-label="Download on Google Play Store"
            >
              <svg className="w-4 h-4" viewBox="0 0 512 512" fill="none">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 59.1-1.3 1" fill="#00D2FF"/>
                <path d="M47 38.8c-2.8 5.7-4.4 12.4-4.4 19.9v394.6c0 7.5 1.6 14.1 4.4 19.9l218.4-217.2L47 38.8z" fill="#00E3FF"/>
                <path d="M325.3 277.7l60.1 60.1-280.8 161.2 220.7-221.3" fill="#FF3A00"/>
                <path d="M456.9 233.7l-71.5-41.1-60.1 63.4 60.1 60.1 71.5-41.1c17.5-10.1 27.2-25.1 27.2-41.3s-9.7-31-27.2-40" fill="#FFC800"/>
              </svg>
              <span>Play Store</span>
            </a>

            <Link
              href="/ai-astrologer"
              className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-cosmic-950 bg-gradient-to-r from-celestial-amber via-celestial-gold to-yellow-500 hover:brightness-110 shadow-lg shadow-celestial-gold/20 transition-all duration-300 hover:scale-[1.02]"
            >
              <MessageSquareText className="w-4 h-4 mr-2" />
              Ask AI Astrologer
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-cosmic-950/95 backdrop-blur-2xl px-6 py-6 space-y-4">
          <Link
            href="/birth-chart"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center space-x-3 text-base text-slate-200 py-2 border-b border-white/5"
          >
            <Compass className="w-5 h-5 text-celestial-gold" />
            <span>AI Birth Chart Calculator</span>
          </Link>

          <Link
            href="/compatibility"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center space-x-3 text-base text-slate-200 py-2 border-b border-white/5"
          >
            <Heart className="w-5 h-5 text-rose-400" />
            <span>Zodiac Love Compatibility</span>
          </Link>

          <Link
            href="/daily-horoscope"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center space-x-3 text-base text-slate-200 py-2 border-b border-white/5"
          >
            <Calendar className="w-5 h-5 text-celestial-cyan" />
            <span>Daily Transits & Planetary Weather</span>
          </Link>

          <Link
            href="/guides"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center space-x-3 text-base text-slate-200 py-2 border-b border-white/5"
          >
            <Sparkles className="w-5 h-5 text-celestial-purple" />
            <span>Astrology Guides & Methodology</span>
          </Link>

          <div className="pt-2">
            <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
              Explore 12 Signs
            </p>
            <div className="grid grid-cols-3 gap-2">
              {signs.map((sign) => (
                <Link
                  key={sign.slug}
                  href={`/zodiac/${sign.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-1.5 p-2 rounded-lg bg-white/5 text-xs text-slate-300"
                >
                  <span className="text-celestial-amber">{sign.icon}</span>
                  <span>{sign.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-4 space-y-2.5">
            <a
              href="https://play.google.com/store/apps/details?id=com.astrotales.veya"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-3 rounded-xl text-sm font-semibold tracking-wider text-white bg-white/10 hover:bg-white/15 border border-white/15 shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 512 512" fill="none">
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 59.1-1.3 1" fill="#00D2FF"/>
                <path d="M47 38.8c-2.8 5.7-4.4 12.4-4.4 19.9v394.6c0 7.5 1.6 14.1 4.4 19.9l218.4-217.2L47 38.8z" fill="#00E3FF"/>
                <path d="M325.3 277.7l60.1 60.1-280.8 161.2 220.7-221.3" fill="#FF3A00"/>
                <path d="M456.9 233.7l-71.5-41.1-60.1 63.4 60.1 60.1 71.5-41.1c17.5-10.1 27.2-25.1 27.2-41.3s-9.7-31-27.2-40" fill="#FFC800"/>
              </svg>
              <span>Get on Google Play</span>
            </a>

            <Link
              href="/ai-astrologer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-3 rounded-xl text-sm font-semibold uppercase tracking-wider text-cosmic-950 bg-gradient-to-r from-celestial-amber to-celestial-gold shadow-lg"
            >
              <MessageSquareText className="w-4 h-4 mr-2" />
              Ask AI Astrologer Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
