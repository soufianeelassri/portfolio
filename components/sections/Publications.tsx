"use client";

import { useState } from "react";
import { SectionWrapper, SectionHeader } from "@/components/common/SectionWrapper";
import { publications } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Code2,
  ChevronDown,
} from "lucide-react";

const statusColors: Record<string, string> = {
  accepted: "bg-green-500/10 text-green-700 dark:text-green-400",
  published: "bg-blue-500/10 text-blue-700 dark:text-blue-400",
};

export function Publications() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <SectionWrapper id="publications">
      <SectionHeader
        title="Publications"
        subtitle="Conférences & articles de recherche"
      />

      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {publications.map((pub) => (
            <motion.article
              key={pub.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/20"
            >
              <div className="flex flex-wrap items-start gap-2">
                <Badge variant="outline" className="text-xs capitalize">
                  {pub.type === "conference" ? "conférence" : pub.type}
                </Badge>
                <Badge
                  className={`text-xs ${statusColors[pub.status] ?? "bg-muted text-muted-foreground"}`}
                  variant="secondary"
                >
                  {pub.status === "accepted" ? "accepté" : pub.status}
                </Badge>
                <Badge
                  variant="secondary"
                  className="text-xs bg-purple-500/10 text-purple-700 dark:text-purple-400"
                >
                  co-auteur
                </Badge>
              </div>

              <h3 className="mt-3 text-lg font-semibold leading-snug">
                {pub.title}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {pub.authors.map((author, i) => (
                  <span key={i}>
                    {i > 0 && ", "}
                    <span
                      className={
                        author.startsWith("Soufiane")
                          ? "font-semibold text-foreground"
                          : ""
                      }
                    >
                      {author}
                    </span>
                  </span>
                ))}
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                {pub.venue} &middot; {pub.year}
              </p>

              {/* Tags */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {pub.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs font-normal">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Abstract toggle */}
              <button
                onClick={() =>
                  setExpandedId(expandedId === pub.id ? null : pub.id)
                }
                className="mt-3 flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                Résumé
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform ${
                    expandedId === pub.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {expandedId === pub.id && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="block pt-2">{pub.abstract}</span>
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Links */}
              <div className="mt-4 flex flex-wrap gap-2">
                {pub.links.pdf !== undefined && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 text-xs"
                    nativeButton={pub.links.pdf ? false : undefined}
                    render={pub.links.pdf ? <a href={pub.links.pdf} target="_blank" rel="noopener noreferrer" /> : undefined}
                    disabled={!pub.links.pdf}
                  >
                    <FileText className="mr-1.5 h-3.5 w-3.5" />
                    Paper PDF
                  </Button>
                )}
                {pub.links.code !== undefined && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 text-xs"
                    nativeButton={pub.links.code ? false : undefined}
                    render={pub.links.code ? <a href={pub.links.code} target="_blank" rel="noopener noreferrer" /> : undefined}
                    disabled={!pub.links.code}
                  >
                    <Code2 className="mr-1.5 h-3.5 w-3.5" />
                    Code
                  </Button>
                )}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
