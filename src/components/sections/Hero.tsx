"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { featuredHighlight, siteConfig } from "@/data/portfolio";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section id="home" className="scroll-mt-28 h-screen">
      <Container className="flex items-center justify-left h-full">
        <motion.div
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.12 }}
          className="max-w-3xl"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <Sparkles
              className="size-5 text-neutral-500"
              strokeWidth={1.5}
              aria-hidden
            />
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[2rem] leading-[1.15] tracking-tight text-foreground sm:text-5xl sm:leading-[1.12] lg:text-[3.25rem]"
          >
            {siteConfig.title}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg"
          >
            {siteConfig.headline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button href={`mailto:${siteConfig.email}`} variant="primary">
              <Mail className="size-4" strokeWidth={1.75} aria-hidden />
              {siteConfig.availability}
            </Button>
            <Button href="#about" variant="secondary">
              More about me
            </Button>
          </motion.div>

          {/* <motion.a
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            href={featuredHighlight.href}
            className="group mt-10 flex items-center gap-4 rounded-2xl border border-white/8 bg-white/3 p-4 transition-all duration-300 hover:border-white/15 hover:bg-white/5 sm:p-5"
          >
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/4">
              <ArrowUpRight
                className="size-4 text-neutral-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={1.75}
                aria-hidden
              />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">
                {featuredHighlight.title}
              </p>
              <p className="mt-0.5 text-sm text-neutral-500">
                {featuredHighlight.subtitle}
              </p>
            </div>
          </motion.a> */}
        </motion.div>
      </Container>
    </section>
  );
}
