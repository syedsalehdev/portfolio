"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

const ease = [0.22, 1, 0.36, 1] as const;

export function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl px-6 py-28 md:px-8 md:py-36"
    >
      <SectionHeading
        eyebrow="// Projects"
        title="Selected work."
        description="A few systems built end-to-end, from data pipeline to deployed product."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <motion.a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease, delay: (i % 2) * 0.08 }}
            whileHover={{ y: -4 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-bg-elevated p-6 md:p-7 transition-colors hover:border-border-hover"
          >
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/0 blur-3xl transition-colors duration-500 group-hover:bg-accent/10"
              aria-hidden
            />

            <div className="relative">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl md:text-2xl text-text">
                  {project.title}
                </h3>
                <ArrowUpRight
                  size={18}
                  className="mt-1 shrink-0 text-text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                />
              </div>

              {project.status && (
                <span className="mt-2 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wide text-accent-warm">
                  <span className="h-1 w-1 rounded-full bg-accent-warm" />
                  {project.status}
                </span>
              )}

              <p className="mt-3 text-sm md:text-base leading-relaxed text-text-muted">
                {project.description}
              </p>
            </div>

            <div className="relative mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
