"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, Instagram, Send } from "lucide-react";

export default function OptionChainBanner() {
  return (
    <section className="relative bg-green-900 bg-gradient-to-br from-green-900 to-green-800 text-white p-8 md:p-16 rounded-lg overflow-hidden max-w-7xl mx-auto">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#a3e635" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 100 L100 0 L200 100 L300 0 L400 100 L500 0 L600 100"
            stroke="url(#lineGrad)"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16">
        {/* Left circular image */}
        <div className="relative w-64 h-64 rounded-full border-8 border-yellow-400 overflow-hidden flex-shrink-0">
          <Image
            src="/option-chain-speakers.png"
            alt="Option Chain Speakers"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        {/* Right text content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-yellow-400 font-extrabold text-3xl md:text-4xl uppercase">
            OPTION CHAIN નો <br /> ભવ્ય વેંબીનાર
          </h2>

          <div className="bg-green-800 bg-opacity-60 rounded-lg p-4 space-y-2 text-white text-lg leading-relaxed">
            <ul className="list-disc list-inside space-y-1">
              <li>Importance Of Option Chain</li>
              <li>Calculation Of T.V. and I.V.</li>
              <li>Selection Of Strike Price</li>
              <li>Analysis Of Seller’s Data</li>
              <li>Option Greeks</li>
            </ul>
          </div>

          <div className="text-yellow-400 font-bold text-xl md:text-2xl">
            4 AUGUST 2025 <br />
            <span className="text-white uppercase font-semibold text-lg md:text-xl">
              STARTING AT 10:00 AM
            </span>
          </div>

          <div className="flex items-center gap-4 text-white text-4xl md:text-5xl font-extrabold">
            <span className="line-through text-green-300 text-3xl md:text-4xl">999/-</span>
            <span className="text-yellow-400">99/-</span>
            <span className="text-xl md:text-2xl font-normal">ONLY</span>
          </div>

          <a
            href="#"
            className="text-orange-400 underline text-lg md:text-xl font-semibold inline-block"
          >
            વેંબીનારમાં જોડાવા માટે અહીં ક્લિક કરો .
          </a>

          <p className="text-xs md:text-sm text-white/80 mt-4">
            FOR ANY QUERY +91 9898993297
          </p>

          {/* Social icons */}
          <div className="flex gap-6 mt-6 text-white text-2xl md:text-3xl">
            <a
              href="https://wa.me/919898993297"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-green-400 transition"
            >
              <MessageCircle />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-500 transition"
            >
              <Instagram />
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="hover:text-blue-400 transition"
            >
              <Send />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
