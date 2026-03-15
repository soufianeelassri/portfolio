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
  Presentation,
  ChevronDown,
  Copy,
  Check,
} from "lucide-react";

const filters = ["all", "conference", "journal", "preprint"] as const;
type Filter = (typeof filters)[number];

const statusColors: Record<string, string> = {
  accepted: "bg-green-500/10 text-green-700 dark:text-green-400",
  published: "bg-blue-500/10 text-blue-700 dark:text-blue-400",
  "in-progress": "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400",
};

const linkIcons: Record<string, typeof FileText> = {
  pdf: FileText,
  code: Code2,
  slides: Presentation,
};

export function Publications() {
  const [filter, setFilter] = useState<Filter>("all");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const filtered =
    filter === "all"
      ? publications
      : publications.filter((p) => p.type === filter);

  const generateBibtex = (pub: (typeof publications)[0]) => {
    const key = pub.authors[0].split(" ").pop()?.toLowerCase() ?? "author";
    return `@${pub.type === "conference" ? "inproceedings" : "article"}{${key}${pub.year},
  title={${pub.title}},
  author={${pub.authors.join(" and ")}},
  ${pub.type === "conference" ? "booktitle" : "journal"}={${pub.venue}},
  year={${pub.year}}
}`;
  };

  const copyBibtex = async (pub: (typeof publications)[0]) => {
    await navigator.clipboard.writeText(generateBibtex(pub));
    setCopiedId(pub.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <SectionWrapper id="publications">
      <SectionHeader
        title="Publications"
        subtitle="Peer-reviewed research & preprints"
      />

      {/* Filters */}
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <Button
            key={f}
            variant={filter === f ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(f)}
            className="capitalize"
          >
            {f}
          </Button>
        ))}
      </div>

      {/* Publication list */}
      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((pub) => (
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
                  {pub.type}
                </Badge>
                <Badge
                  className={`text-xs ${statusColors[pub.status] ?? "bg-muted text-muted-foreground"}`}
                  variant="secondary"
                >
                  {pub.status}
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
                Abstract
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
                {Object.entries(pub.links).map(([key, url]) => {
                  const Icon = linkIcons[key] ?? FileText;
                  return (
                    <Button
                      key={key}
                      variant="outline"
                      size="sm"
                      className="h-8 text-xs"
                      nativeButton={false}
                      render={<a href={url} />}
                    >
                      <Icon className="mr-1.5 h-3.5 w-3.5" />
                      {key.toUpperCase()}
                    </Button>
                  );
                })}
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 text-xs"
                  onClick={() => copyBibtex(pub)}
                >
                  {copiedId === pub.id ? (
                    <Check className="mr-1.5 h-3.5 w-3.5" />
                  ) : (
                    <Copy className="mr-1.5 h-3.5 w-3.5" />
                  )}
                  BibTeX
                </Button>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
