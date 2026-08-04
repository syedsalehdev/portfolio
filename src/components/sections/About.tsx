"use client";

import { motion } from "framer-motion";
import { about } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

const ease = [0.22, 1, 0.36, 1] as const;

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-28 md:px-8 md:py-36">
      <SectionHeading eyebrow="// About" title="Building systems that hold up in the real world." />

      <div className="grid gap-16 md:grid-cols-5">
        <div className="md:col-span-3 space-y-5">
          {about.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease, delay: i * 0.08 }}
              className="text-text-muted leading-relaxed text-base md:text-lg"
            >
              {p}
            </motion.p>
          ))}
        </div>

        <div className="md:col-span-2 flex flex-col gap-3">
          {about.highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease, delay: 0.15 + i * 0.08 }}
              className="group rounded-xl border border-border bg-bg-elevated p-5 transition-colors hover:border-border-hover"
            >
              <p className="font-display text-base text-text">{h.label}</p>
              <p className="mt-1 font-mono text-xs text-text-muted">
                {h.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
