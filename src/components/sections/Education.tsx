"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

const ease = [0.22, 1, 0.36, 1] as const;

export function Education() {
  return (
    <section
      id="education"
      className="mx-auto max-w-5xl px-6 py-28 md:px-8 md:py-36"
    >
      <SectionHeading eyebrow="// Education" title="Foundations." />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease }}
        className="rounded-2xl border border-border bg-bg-elevated p-7 md:p-9"
      >
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="font-display text-2xl md:text-3xl text-text">
            {education.school}
          </h3>
          <span className="font-mono text-xs text-text-faint tracking-wide">
            Expected {education.expected}
          </span>
        </div>
        <p className="mt-2 text-accent">{education.degree}</p>
        <p className="mt-1 font-mono text-xs text-text-muted">
          GPA {education.gpa} / 4.0
        </p>

        <div className="mt-6 border-t border-border pt-6">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-text-faint">
            Relevant coursework
          </p>
          <div className="flex flex-wrap gap-2">
            {education.coursework.map((course) => (
              <Tag key={course}>{course}</Tag>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
