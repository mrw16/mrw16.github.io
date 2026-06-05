import { siteConfig } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/6 py-10">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-neutral-500">
          © {year} {siteConfig.name}. Crafted with AI.
        </p>
        <p className="text-sm text-neutral-500">
          Designed & built in {siteConfig.location}
        </p>
      </Container>
    </footer>
  );
}
