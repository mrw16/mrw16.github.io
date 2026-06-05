"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { GitBranch, Link2, Mail, MessageCircle, Send } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/portfolio";
import { cn } from "@/lib/cn";

const socialLinks = [
  { label: "GitHub", href: siteConfig.social.github, icon: GitBranch },
  { label: "LinkedIn", href: siteConfig.social.linkedin, icon: Link2 },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setError("");

    const form = event.currentTarget;

    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      setSubmitted(true);

      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="scroll-mt-28 py-16 sm:py-24">
      <Container>
        <SectionHeading
          label="Contact"
          title="Let's work together"
          description="Have a project in mind or just want to say hello? I'd love to hear from you."
        />

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={handleSubmit}
            className="lg:col-span-3"
            aria-label="Contact form"
          >
            <div className="space-y-5 rounded-3xl border border-white/8 bg-white/3 p-6 sm:p-8">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className={inputClassName}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={inputClassName}
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className={cn(inputClassName, "resize-none")}
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className={cn(
                  "inline-flex w-full items-center justify-center gap-2 rounded-full",
                  "bg-white px-5 py-3 text-sm font-medium text-black",
                  "transition-all duration-300 hover:bg-white/90 hover:shadow-soft",
                  "sm:w-auto",
                )}
              >
                <Send className="size-4" strokeWidth={1.75} aria-hidden />
                {loading
                  ? "Sending..."
                  : submitted
                  ? "Message sent!"
                  : "Send message"}
              </button>
              {error && (
                <p className="mt-3 text-sm text-red-400">
                  {error}
                </p>
              )}
            </div>
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="rounded-3xl border border-white/8 bg-bone p-6 sm:p-8">
              <h3 className="text-sm font-medium uppercase tracking-[0.15em] text-neutral-500">
                Get in touch
              </h3>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-4 inline-flex items-center gap-2 text-lg font-medium text-foreground transition-colors hover:text-neutral-300"
              >
                <Mail className="size-5" strokeWidth={1.5} aria-hidden />
                {siteConfig.email}
              </a>
              <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                Available for freelance projects, collaborations, and full-time
                opportunities. Based in {siteConfig.location}.
              </p>

              <div className="mt-8">
                <p className="mb-4 text-sm font-medium text-foreground">
                  Social
                </p>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={cn(
                        "inline-flex size-11 items-center justify-center rounded-full",
                        "border border-white/10 text-neutral-400",
                        "transition-all duration-300 hover:border-white/20 hover:text-neutral-200 hover:shadow-soft",
                      )}
                    >
                      <Icon className="size-4" strokeWidth={1.75} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </Container>
    </section>
  );
}

const inputClassName = cn(
  "w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3",
  "text-sm text-foreground placeholder:text-neutral-500",
  "transition-all duration-300",
  "focus:border-white/25 focus:outline-none focus:ring-2 focus:ring-white/10",
);
