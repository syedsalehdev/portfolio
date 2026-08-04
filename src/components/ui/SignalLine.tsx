"use client";

import { motion } from "framer-motion";

/**
 * A slow-drawing waveform line, evocative of a signal / ticker trace.
 * Purely decorative, sits behind the hero content.
 */
export function SignalLine() {
  const path =
    "M0,160 C60,160 60,80 120,80 C180,80 180,190 240,190 C300,190 300,60 360,60 C420,60 420,140 480,140 C540,140 540,40 600,40 C660,40 660,170 720,170 C780,170 780,100 840,100 C900,100 900,150 960,150 C1020,150 1020,70 1080,70 C1140,70 1140,120 1200,120";

  return (
    <svg
      viewBox="0 0 1200 240"
      fill="none"
      className="absolute inset-0 h-full w-full opacity-[0.35]"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="signal-fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
          <stop offset="15%" stopColor="var(--accent)" stopOpacity="0.9" />
          <stop offset="85%" stopColor="var(--accent)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d={path}
        stroke="url(#signal-fade)"
        strokeWidth={1.5}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
      />
    </svg>
  );
}
