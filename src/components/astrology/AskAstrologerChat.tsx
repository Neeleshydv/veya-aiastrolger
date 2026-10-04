"use client";

import React, { useState } from "react";
import { ASTROLOGER_PERSONAS } from "@/lib/astrology-data";
import { AstrologerPersona } from "@/types/astrology";
import { Sparkles, Send, Bot, User, CheckCircle2 } from "lucide-react";

interface Message {
  sender: "user" | "astrologer";
  text: string;
  timestamp: string;
}

export default function AskAstrologerChat() {
  const [selectedPersona, setSelectedPersona] = useState<AstrologerPersona>(ASTROLOGER_PERSONAS[0]);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "astrologer",
      text: selectedPersona.greeting,
      timestamp: "Just now",
    },
  ]);
  const [inputQuery, setInputQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const quickPrompts = [
    "What is the spiritual lesson of my Saturn Return?",
    "How do I balance my Sun and Moon polarities?",
    "What are my greatest karmic gifts in this lifetime?",
    "Is my current relationship dynamic fated or free-will?",
  ];

  const handleSelectPersona = (persona: AstrologerPersona) => {
    setSelectedPersona(persona);
    setMessages([
      {
        sender: "astrologer",
        text: persona.greeting,
        timestamp: "Just now",
      },
    ]);
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputQuery;
    if (!query.trim()) return;

    const userMsg: Message = {
      sender: "user",
      text: query,
      timestamp: "Just now",
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputQuery("");
    setIsTyping(true);

    setTimeout(() => {
      let reply = "";
      if (selectedPersona.id === "selene") {
        reply = `Looking into your archetypal psyche regarding "${query}": The unconscious always speaks through synchronicity. This theme reflects a necessary integration between your conscious solar identity and the shadow material housed in your 8th or 12th house. When you release the need to control this outcome, your psyche naturally re-calibrates toward wholeness. Notice which somatic sensations arise when you dwell on this question—that is where the healing begins.`;
      } else if (selectedPersona.id === "aurelius") {
        reply = `Examining the traditional Hellenistic celestial clock for "${query}": In ancient doctrine, this cycle is governed by your primary Time-Lord and the planetary sect of your nativity. The current planetary transits place pressure upon your cardinal angles, requiring strategic patience. Do not force action before the new moon culmination. Align your endeavors with your ruling planet's domicile to ensure enduring victory.`;
      } else {
        reply = `Namaste. Regarding your inquiry on "${query}": According to Vedic Jyotish, your present experience is guided by your Vimshottari Mahadasha ruler and Nakshatra lords. This period is washing away obsolete Prarabdha Karma to prepare your soul for Dharma. Engage in acts of selfless service (Seva) and chant the Gayatri or Om Namah Shivaya mantra during dawn to harmonize planetary afflictions.`;
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "astrologer",
          text: reply,
          timestamp: "Just now",
        },
      ]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <div className="w-full glass-panel-gold rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
      <div className="flex items-center space-x-2 text-celestial-gold text-xs uppercase tracking-widest font-semibold mb-3">
        <Sparkles className="w-4 h-4" />
        <span>24/7 Neural Astrological Consultations</span>
      </div>

      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
        Consult with an AI Astrologer
      </h2>
      <p className="text-slate-300 text-sm mb-6 max-w-2xl leading-relaxed">
        Choose your preferred astrological tradition—Psychological, Ancient Hellenistic, or Vedic Jyotish—and receive profound, personalized cosmic counsel.
      </p>

      {/* Astrologer Persona Selector */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {ASTROLOGER_PERSONAS.map((persona) => {
          const isSelected = selectedPersona.id === persona.id;
          return (
            <button
              key={persona.id}
              onClick={() => handleSelectPersona(persona)}
              className={`text-left p-4 rounded-2xl border transition-all ${
                isSelected
                  ? "bg-celestial-gold/15 border-celestial-gold shadow-lg shadow-celestial-gold/10"
                  : "bg-cosmic-950/60 border-white/5 hover:border-white/20"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">{persona.avatar}</span>
                {isSelected && <CheckCircle2 className="w-4 h-4 text-celestial-gold" />}
              </div>
              <h3 className="font-serif font-bold text-white text-base">{persona.name}</h3>
              <p className="text-xs text-celestial-amber font-medium mb-1.5">{persona.tradition}</p>
              <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{persona.bio}</p>
            </button>
          );
        })}
      </div>

      {/* Chat Box */}
      <div className="bg-cosmic-950/90 rounded-2xl border border-white/10 flex flex-col h-[460px]">
        {/* Chat Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{selectedPersona.avatar}</span>
            <div>
              <h4 className="font-serif font-bold text-white text-sm">{selectedPersona.name}</h4>
              <p className="text-[11px] text-slate-400">{selectedPersona.title}</p>
            </div>
          </div>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Online & Ready
          </span>
        </div>

        {/* Message Stream */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 ${
                msg.sender === "user" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  msg.sender === "user"
                    ? "bg-celestial-gold text-cosmic-950"
                    : "bg-white/10 text-white"
                }`}
              >
                {msg.sender === "user" ? (
                  <User className="w-4 h-4" />
                ) : (
                  <Bot className="w-4 h-4 text-celestial-gold" />
                )}
              </div>
              <div
                className={`max-w-[80%] rounded-2xl px-5 py-3.5 text-xs sm:text-sm leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-celestial-gold text-cosmic-950 font-medium rounded-tr-none"
                    : "glass-panel text-slate-200 border border-white/10 rounded-tl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center space-x-2 text-xs text-celestial-amber italic">
              <Sparkles className="w-3.5 h-3.5 animate-spin" />
              <span>{selectedPersona.name} is consulting the ephemeris...</span>
            </div>
          )}
        </div>

        {/* Quick Question Chips */}
        <div className="px-6 py-2 border-t border-white/5 flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-slate-500 text-[11px] uppercase tracking-wider shrink-0 font-semibold">
            Suggested:
          </span>
          {quickPrompts.map((prompt) => (
            <button
              key={prompt}
              onClick={() => handleSendMessage(prompt)}
              className="shrink-0 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 text-slate-300 hover:text-white transition-colors text-[11px]"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="p-4 border-t border-white/10 flex items-center gap-3"
        >
          <input
            type="text"
            placeholder={`Ask ${selectedPersona.name} any astrological or life question...`}
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            className="flex-1 bg-cosmic-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-celestial-gold transition-colors"
          />
          <button
            type="submit"
            disabled={!inputQuery.trim() || isTyping}
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-celestial-amber to-celestial-gold text-cosmic-950 font-semibold text-xs uppercase tracking-wider hover:brightness-110 transition-all disabled:opacity-40"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
