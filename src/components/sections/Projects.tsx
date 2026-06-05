"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitBranch } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/data/portfolio";
import { cn } from "@/lib/cn";

export function Projects() {
  return (
    <section id="work" className="scroll-mt-28 py-16 sm:py-24">
      <Container>
        <SectionHeading
          label="Work"
          title="Selected projects"
          description="A collection of recent work spanning product design, development, and open-source contributions."
        />

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.08,
              }}
              className={cn(
                "group overflow-hidden rounded-3xl border border-white/8 bg-bone transition-all duration-500",
                "hover:border-white/15 hover:shadow-soft-lg",
                index === 0 && "sm:col-span-2",
              )}
            >
              <div
                className={cn(
                  "relative aspect-16/10 overflow-hidden bg-linear-to-br sm:aspect-21/9",
                  project.gradient,
                  index !== 0 && "sm:aspect-4/3",
                )}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.06),transparent_50%)]" />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="font-serif text-2xl text-neutral-500/60 sm:text-3xl">
                    {project.title}
                  </span>
                </motion.div>
              </div>

              <div className="p-6 sm:p-7">
                <h3 className="text-lg font-medium text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 transition-colors duration-300 hover:text-neutral-200"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <GitBranch className="size-4" strokeWidth={1.75} />
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 transition-colors duration-300 hover:text-neutral-200"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ExternalLink className="size-4" strokeWidth={1.75} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
