"use client";

import { motion } from "framer-motion";
import { Mail, ArrowDown } from "lucide-react";
import { profile } from "@/lib/data";
import { SignalLine } from "@/components/ui/SignalLine";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-grid"
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
        aria-hidden
      />
      <div className="absolute inset-x-0 top-1/2 h-[240px] -translate-y-1/2 opacity-70">
        <SignalLine />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-6 md:px-8 pt-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start"
        >
          <motion.div
            variants={item}
            className="mb-8 flex items-center gap-3"
          >
            {/* HEADSHOT */}
            <div className="relative h-16 w-16 md:h-20 md:w-20 shrink-0 overflow-hidden rounded-full border border-border">
              <Image
                src="/headshot.png"
                alt="Syed Saleh"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Open to opportunities
            </div>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight text-balance"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-2xl text-lg sm:text-xl text-text-muted text-balance"
          >
            {profile.role}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-2 font-mono text-sm tracking-wide text-accent"
          >
            {profile.subtitle}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex items-center gap-4">
            <SocialIcon href={`mailto:${profile.email}`} label="Email">
              <Mail size={18} />
            </SocialIcon>
            <SocialIcon href={profile.github} label="GitHub">
              <GithubIcon size={18} />
            </SocialIcon>
            <SocialIcon href={profile.linkedin} label="LinkedIn">
              <LinkedinIcon size={18} />
            </SocialIcon>

            <a
              href="#projects"
              className="ml-2 inline-flex items-center rounded-full bg-text px-5 py-2.5 text-sm font-medium text-bg transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              View Projects
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-faint hover:text-accent transition-colors"
        aria-label="Scroll to About section"
      >
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-accent hover:text-accent"
    >
      {children}
    </a>
  );
}