"use client";

import { SectionWrapper, SectionHeader } from "@/components/common/SectionWrapper";
import { experience } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeader title="Experience" subtitle="Professional journey" />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 hidden h-full w-px bg-border md:block" />

        <div className="space-y-8">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-2.5 top-2 hidden h-3 w-3 rounded-full border-2 border-primary bg-background md:block" />

              <article className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/20">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <p className="font-medium text-primary">{exp.companyFull}</p>
                  </div>
                  <Badge variant="outline" className="text-xs capitalize">
                    {exp.type}
                  </Badge>
                </div>

                <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    {exp.location}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>

                {/* Highlights */}
                <ul className="mt-4 space-y-1.5">
                  {exp.highlights.map((highlight, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                {exp.technologies.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs font-normal"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
