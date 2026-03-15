"use client";

import { useState } from "react";
import { SectionWrapper, SectionHeader } from "@/components/common/SectionWrapper";
import { personalInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Copy,
  Check,
  MapPin,
} from "lucide-react";

const contactLinks = [
  { icon: Github, href: personalInfo.links.github, label: "GitHub" },
  { icon: Linkedin, href: personalInfo.links.linkedin, label: "LinkedIn" },
].filter((link) => Boolean(link.href));

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <SectionWrapper id="contact">
      <div className="mx-auto max-w-2xl text-center">
        <SectionHeader
          title="Restons en contact"
          subtitle="Intéressé par une collaboration, une opportunité, ou simplement discuter d'IA ?"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="flex flex-col items-center gap-3">
            <Button size="lg" nativeButton={false} render={<a href={personalInfo.links.email} />}>
              <Mail className="mr-2 h-4 w-4" />
              Envoyez-moi un email
            </Button>

            <button
              onClick={copyEmail}
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {copied ? (
                <Check className="h-3.5 w-3.5 text-green-500" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
              {personalInfo.email}
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            {personalInfo.location}
          </div>

          <div className="flex items-center justify-center gap-3">
            {contactLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="rounded-lg border border-border p-3 text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
