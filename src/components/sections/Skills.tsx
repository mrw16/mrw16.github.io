"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  GitBranch,
  Layers,
  Palette,
  Server,
  Box,
  Globe,
  Terminal,
  PenTool,
  Container as ContainerIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/portfolio";
import { cn } from "@/lib/cn";

const iconMap: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  react: Layers,
  nextjs: Globe,
  typescript: Code2,
  tailwind: Palette,
  nodejs: Server,
  database: Database,
  api: Terminal,
  graphql: GitBranch,
  git: GitBranch,
  figma: PenTool,
  docker: ContainerIcon,
  vercel: Box,
};

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-28 py-16 sm:py-24">
      <Container>
        <SectionHeading
          label="Skills"
          title="Tools & technologies"
          description="Technologies I use to bring ideas to life — from interface design to production deployment."
        />

        <div className="grid gap-6 sm:grid-cols-3 sm:gap-5">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: categoryIndex * 0.1,
              }}
              className="rounded-3xl border border-white/8 bg-white/2 p-6 transition-all duration-300 hover:border-white/15 hover:shadow-soft sm:p-7"
            >
              <h3 className="mb-5 text-sm font-medium uppercase tracking-[0.15em] text-neutral-500">
                {category.title}
              </h3>
              <ul className="grid grid-cols-2 gap-3">
                {category.skills.map((skill) => {
                  const Icon = iconMap[skill.icon] ?? Code2;

                  return (
                    <li key={skill.name}>
                      <div
                        className={cn(
                          "flex flex-col items-center gap-2.5 rounded-2xl border border-white/8",
                          "bg-white/3 px-3 py-4 text-center transition-all duration-300",
                          "hover:border-white/15 hover:shadow-soft",
                        )}
                      >
                        <Icon
                          className="size-5 text-neutral-400"
                          strokeWidth={1.5}
                        />
                        <span className="text-xs font-medium text-neutral-200">
                          {skill.name}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
