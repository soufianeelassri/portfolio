"use client";

import { SectionWrapper, SectionHeader } from "@/components/common/SectionWrapper";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, ExternalLink, FileText } from "lucide-react";

const statusStyles: Record<string, string> = {
  active: "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
  completed: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
  "in-progress":
    "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20",
};

const statusLabels: Record<string, string> = {
  active: "en cours",
  completed: "terminé",
  "in-progress": "en cours",
};

const linkConfig: Record<string, { icon: typeof Github; label: string }> = {
  github: { icon: Github, label: "Code" },
  demo: { icon: ExternalLink, label: "Démo" },
  paper: { icon: FileText, label: "Article" },
};

export function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeader
        title="Projets"
        subtitle="Prototypes de recherche & systèmes en production"
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group flex flex-col rounded-xl border border-border bg-card transition-colors hover:border-primary/30"
          >

            <div className="flex flex-1 flex-col p-6">
              <div className="mb-3 flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {project.subtitle}
                  </p>
                </div>
                <Badge
                  variant="outline"
                  className={`flex-shrink-0 text-xs ${statusStyles[project.status] ?? ""}`}
                >
                  {statusLabels[project.status] ?? project.status}
                </Badge>
              </div>

              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              {/* Features */}
              <ul className="mt-4 space-y-1">
                {project.features.slice(0, 3).map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-xs text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Tech stack */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs font-normal"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Links */}
              {Object.keys(project.links).length > 0 && (
                <div className="mt-4 flex gap-2 border-t border-border pt-4">
                  {Object.entries(project.links).map(([key, url]) => {
                    const config = linkConfig[key];
                    if (!config) return null;
                    const Icon = config.icon;
                    return (
                      <Button
                        key={key}
                        variant="ghost"
                        size="sm"
                        className="h-8 text-xs"
                        nativeButton={false}
                        render={<a href={url} target="_blank" rel="noopener noreferrer" />}
                      >
                        <Icon className="mr-1.5 h-3.5 w-3.5" />
                        {config.label}
                      </Button>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
