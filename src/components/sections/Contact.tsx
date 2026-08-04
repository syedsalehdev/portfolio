"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

const ease = [0.22, 1, 0.36, 1] as const;

export function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-5xl overflow-hidden px-6 py-28 md:px-8 md:py-40"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[130px]"
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease }}
        className="relative flex flex-col items-start"
      >
        <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase mb-4 flex items-center gap-2">
          <span className="h-px w-6 bg-accent/60" />
          // Contact
        </p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-balance max-w-2xl">
          Let&apos;s build something worth shipping.
        </h2>
        <p className="mt-5 max-w-lg text-text-muted text-base md:text-lg">
          Open to data analyst, applied AI, and software roles. Reach out and
          I&apos;ll get back to you soon.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-text px-6 py-3 text-sm font-medium text-bg transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            <Mail size={16} />
            {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-accent hover:text-accent"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:border-accent hover:text-accent"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
        </div>
      </motion.div>

      <div className="relative mt-24 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-text-faint sm:flex-row sm:items-center">
        <p className="font-mono">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono">Built with Next.js, Tailwind, Framer Motion</p>
      </div>
    </section>
  );
}
