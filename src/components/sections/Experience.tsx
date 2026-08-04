"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

const ease = [0.22, 1, 0.36, 1] as const;

export function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-5xl px-6 py-28 md:px-8 md:py-36"
    >
      <SectionHeading
        eyebrow="// Experience"
        title="Where the work has happened."
        description="A mix of applied analytics, AI deployments, and leading teams that ship."
      />

      <ol className="relative">
        <div
          className="absolute left-[7px] top-2 bottom-2 w-px bg-border md:left-[7px]"
          aria-hidden
        />
        {experience.map((exp, i) => (
          <motion.li
            key={exp.org}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease, delay: i * 0.06 }}
            className="relative pb-14 pl-9 last:pb-0"
          >
            <span
              className={`absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 ${
                exp.current
                  ? "border-accent bg-accent/20"
                  : "border-border-hover bg-bg"
              }`}
              aria-hidden
            >
              {exp.current && (
                <span className="absolute inset-0.5 rounded-full bg-accent" />
              )}
            </span>

            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-display text-xl md:text-2xl text-text">
                {exp.org}
              </h3>
              <span className="font-mono text-xs text-text-faint tracking-wide shrink-0">
                {exp.period}
              </span>
            </div>
            <p className="mt-1 text-sm text-accent">{exp.role}</p>

            <ul className="mt-4 space-y-2">
              {exp.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-text-muted text-sm md:text-base leading-relaxed"
                >
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-text-faint" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
