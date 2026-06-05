"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { experience, siteConfig, techStack } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="scroll-mt-28 py-16 sm:py-24">
      <Container>
        <SectionHeading
          label="About"
          title="Crafting digital experiences with intention"
          description={siteConfig.bio}
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="mb-6 text-sm font-medium uppercase tracking-[0.15em] text-neutral-500">
              Experience
            </h3>
            <div className="space-y-8">
              {experience.map((item) => (
                <article
                  key={`${item.company}-${item.period}`}
                  className="group relative border-l border-white/10 pl-6 transition-colors hover:border-white/25"
                >
                  <p className="text-xs font-medium text-neutral-500">
                    {item.period}
                  </p>
                  <h4 className="mt-1 text-base font-medium text-foreground">
                    {item.role}
                  </h4>
                  <p className="text-sm text-neutral-400">{item.company}</p>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <h3 className="mb-6 text-sm font-medium uppercase tracking-[0.15em] text-neutral-500">
              Tech Stack
            </h3>
            <div className="rounded-3xl border border-white/8 bg-white/3 p-8">
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
              <p className="mt-8 text-sm leading-relaxed text-neutral-400">
                I focus on modern web technologies that prioritize performance,
                accessibility, and maintainability. From design systems to
                backend APIs, I enjoy working across the full stack.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
