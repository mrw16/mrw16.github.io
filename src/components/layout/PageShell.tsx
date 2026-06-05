"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { lampEase } from "@/lib/motion";

type PageShellProps = {
  children: React.ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  const reduceMotion = useReducedMotion();

  const ambientInitial = reduceMotion ? { opacity: 1 } : { opacity: 0 };
  const ambientTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 1.2, delay: 0.55, ease: lampEase };

  const contentInitial = reduceMotion ? { opacity: 1 } : { opacity: 0.15 };
  const contentTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 1, delay: 0.75, ease: lampEase };

  return (
    <div className="relative min-h-screen bg-black text-foreground">
      <Navbar />

      <motion.div
        aria-hidden
        className="page-ambient-light"
        initial={ambientInitial}
        animate={{ opacity: 1 }}
        transition={ambientTransition}
      />

      <motion.div
        aria-hidden
        className="page-floor-light"
        initial={ambientInitial}
        animate={{ opacity: 1 }}
        transition={{ ...ambientTransition, delay: reduceMotion ? 0 : 0.85 }}
      />

      <motion.div
        className="relative z-10"
        initial={contentInitial}
        animate={{ opacity: 1 }}
        transition={contentTransition}
      >
        {children}
      </motion.div>
    </div>
  );
}
