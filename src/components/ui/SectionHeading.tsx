"use client";

import { cn } from "@/lib/cn";
import { motion } from "framer-motion";

type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  label,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn("mb-12 max-w-2xl", className)}
    >
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
        {label}
      </p>
      <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-neutral-400">
          {description}
        </p>
      )}
    </motion.div>
  );
}
