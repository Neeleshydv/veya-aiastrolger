import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/seo-config";

interface PlayStoreButtonProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function PlayStoreButton({ className = "", size = "md" }: PlayStoreButtonProps) {
  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs",
    md: "px-5 py-2.5 text-xs sm:text-sm",
    lg: "px-7 py-3.5 text-sm sm:text-base",
  };

  return (
    <Link
      href={SITE_CONFIG.playStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center space-x-3 rounded-2xl bg-cosmic-900 hover:bg-cosmic-800 text-white border border-white/15 hover:border-celestial-gold/50 shadow-xl transition-all duration-300 hover:scale-[1.02] group ${sizeClasses[size]} ${className}`}
      aria-label="Download Veya AI Astrologer on Google Play Store"
    >
      {/* Official Google Play Store Vector Icon */}
      <svg
        className="w-6 h-6 shrink-0 group-hover:scale-110 transition-transform duration-300"
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M325.3 234.3L104.6 13l280.8 161.2-60.1 59.1-1.3 1"
          fill="url(#gp_a)"
        />
        <path
          d="M47 38.8c-2.8 5.7-4.4 12.4-4.4 19.9v394.6c0 7.5 1.6 14.1 4.4 19.9l218.4-217.2L47 38.8z"
          fill="url(#gp_b)"
        />
        <path
          d="M325.3 277.7l60.1 60.1-280.8 161.2 220.7-221.3"
          fill="url(#gp_c)"
        />
        <path
          d="M456.9 233.7l-71.5-41.1-60.1 63.4 60.1 60.1 71.5-41.1c17.5-10.1 27.2-25.1 27.2-41.3s-9.7-31-27.2-40"
          fill="url(#gp_d)"
        />
        <defs>
          <linearGradient
            id="gp_a"
            x1="392.3"
            y1="56.7"
            x2="153.2"
            y2="295.8"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00A0FF" />
            <stop offset=".01" stopColor="#00A1FF" />
            <stop offset=".26" stopColor="#00BEFF" />
            <stop offset=".51" stopColor="#00D2FF" />
            <stop offset=".76" stopColor="#00DFFF" />
            <stop offset="1" stopColor="#00E3FF" />
          </linearGradient>
          <linearGradient
            id="gp_b"
            x1="281.3"
            y1="256"
            x2="32.8"
            y2="256"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00E3FF" />
            <stop offset=".24" stopColor="#FECE00" />
            <stop offset=".43" stopColor="#FFE000" />
            <stop offset=".78" stopColor="#FF6A00" />
            <stop offset="1" stopColor="#FF3A00" />
          </linearGradient>
          <linearGradient
            id="gp_c"
            x1="128.4"
            y1="488.5"
            x2="367.5"
            y2="249.4"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF3A00" />
            <stop offset=".2" stopColor="#FF0100" />
            <stop offset=".45" stopColor="#D80027" />
            <stop offset=".77" stopColor="#A8005A" />
            <stop offset="1" stopColor="#87007E" />
          </linearGradient>
          <linearGradient
            id="gp_d"
            x1="305"
            y1="256"
            x2="489.1"
            y2="256"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FECE00" />
            <stop offset=".2" stopColor="#FF9E00" />
            <stop offset=".6" stopColor="#FF4A00" />
            <stop offset="1" stopColor="#FF0000" />
          </linearGradient>
        </defs>
      </svg>
      <div className="text-left">
        <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-sans leading-none">
          GET IT ON
        </span>
        <span className="font-sans font-bold text-sm sm:text-base leading-tight text-white group-hover:text-celestial-amber transition-colors">
          Google Play
        </span>
      </div>
    </Link>
  );
}
