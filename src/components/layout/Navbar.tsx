"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Box, Shield, WandSparkles, Layers, Mail } from "lucide-react";
import { cn } from "@/lib/cn";
import { navLinks } from "@/data/portfolio";
import { lampEase } from "@/lib/motion";

const navIcons: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  home: WandSparkles,
  work: Box,
  about: Shield,
  skills: Layers,
  contact: Mail,
};

const mainNavLinks = navLinks.filter((link) => link.href !== "#contact");

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const sections = navLinks.map((link) => link.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const lampInitial = reduceMotion
    ? { opacity: 1, scaleY: 1, scaleX: 1 }
    : { opacity: 0, scaleY: 0.06, scaleX: 0.3 };

  const lampAnimate = reduceMotion
    ? { opacity: 1, scaleY: 1, scaleX: 1 }
    : { opacity: [0, 0.12, 0.06, 0.5, 0.42, 1], scaleY: 1, scaleX: 1 };

  const lampTransition = reduceMotion
    ? { duration: 0 }
    : {
        opacity: { duration: 1.5, times: [0, 0.1, 0.18, 0.42, 0.52, 1], ease: "easeOut" },
        scaleY: { duration: 1.3, delay: 0.3, ease: lampEase },
        scaleX: { duration: 1.3, delay: 0.3, ease: lampEase },
      };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-6 sm:pt-7">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: lampEase, delay: reduceMotion ? 0 : 0.15 }}
        className="relative"
      >
        {/* <motion.div
          aria-hidden
          className="nav-lamp-glow"
          initial={lampInitial}
          animate={lampAnimate}
          transition={lampTransition}
        /> */}

        <nav
          aria-label="Main navigation"
          className="nav-bar relative z-10 flex items-center gap-0.5 overflow-x-auto px-1.5 py-1.5 sm:gap-1 sm:px-2 sm:py-2"
        >
          {mainNavLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            const Icon = navIcons[sectionId] ?? WandSparkles;

            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "nav-bar-link flex shrink-0 items-center gap-2 px-4 py-2.5 text-sm font-medium sm:gap-2.5 sm:px-5 sm:py-3",
                  isActive
                    ? "nav-bar-link-active text-white"
                    : "text-neutral-400 hover:text-neutral-200",
                )}
              >
                <Icon className="size-4 shrink-0" strokeWidth={1.5} aria-hidden />
                {link.label}
              </a>
            );
          })}
        </nav>
      </motion.div>
    </header>
  );
}
