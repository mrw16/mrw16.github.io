"use client";

import { cn } from "@/lib/cn";
import { motion, type HTMLMotionProps } from "framer-motion";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = HTMLMotionProps<"a"> & {
  variant?: ButtonVariant;
  children: React.ReactNode;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-white text-black border border-white/90 hover:bg-white/90 shadow-soft",
  secondary:
    "bg-transparent text-neutral-200 border border-white/15 hover:border-white/25 hover:bg-white/[0.04]",
  ghost:
    "bg-transparent text-neutral-400 border border-transparent hover:text-neutral-200 hover:bg-white/[0.04]",
};

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.a
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </motion.a>
  );
}
