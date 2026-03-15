"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  BookOpen,
  Mail,
  Download,
  ChevronDown,
  MapPin,
} from "lucide-react";
import { personalInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Github, href: personalInfo.links.github, label: "GitHub" },
  { icon: Linkedin, href: personalInfo.links.linkedin, label: "LinkedIn" },
  { icon: BookOpen, href: personalInfo.links.googleScholar, label: "Google Scholar" },
  { icon: Twitter, href: personalInfo.links.twitter, label: "Twitter" },
].filter((link) => Boolean(link.href));

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-border bg-muted md:h-48 md:w-48">
              <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-muted-foreground md:text-5xl">
                S
              </div>
            </div>
          </motion.div>

          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                {personalInfo.currentPosition}
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            >
              {personalInfo.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-2 text-xl font-medium text-primary md:text-2xl"
            >
              {personalInfo.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 max-w-xl text-lg text-muted-foreground"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-3 flex items-center justify-center gap-2 text-sm text-muted-foreground md:justify-start"
            >
              <MapPin className="h-3.5 w-3.5" />
              {personalInfo.location}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start"
            >
              <Button
                size="lg"
                onClick={() =>
                  document
                    .querySelector("#research")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Research
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href="/files/SOUFIANE_ELASSRI_CV.pdf" download />}
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <Button
                size="lg"
                variant="ghost"
                nativeButton={false}
                render={<a href={personalInfo.links.email} />}
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 flex items-center justify-center gap-3 md:justify-start"
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
