import { Github, Linkedin } from "lucide-react";
import { personalInfo } from "@/lib/data";

const socialLinks = [
  { icon: Github, href: personalInfo.links.github, label: "GitHub" },
  { icon: Linkedin, href: personalInfo.links.linkedin, label: "LinkedIn" },
].filter((link) => Boolean(link.href));

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-10 md:flex-row md:justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {personalInfo.name}. Tous droits
          réservés.
        </p>
        <div className="flex items-center gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
