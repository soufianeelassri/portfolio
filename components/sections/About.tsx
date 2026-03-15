"use client";

import { SectionWrapper, SectionHeader } from "@/components/common/SectionWrapper";
import { personalInfo, researchInterests, education } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeader title="About" subtitle="Background & research focus" />

      <div className="grid gap-12 md:grid-cols-3">
        <div className="space-y-4 text-muted-foreground md:col-span-2">
          <p className="text-lg leading-relaxed">
            I&apos;m <span className="font-medium text-foreground">{personalInfo.name}</span>,
            an AI research engineer trained at{" "}
            <span className="font-medium text-foreground">ENSIASD</span> and
            currently working at the{" "}
            <span className="font-medium text-foreground">
              LITIS Laboratory, INSA Rouen Normandie
            </span>
            , France.
          </p>
          <p className="leading-relaxed">
            My work focuses on LLM-based systems that turn unstructured content
            into actionable knowledge. I work at the intersection of semantic
            RAG, knowledge graphs, ontology construction, and multi-agent
            orchestration for industrial and scientific use cases.
          </p>
          <p className="leading-relaxed">
            I&apos;m especially interested in connecting scientific rigor with
            deployable AI products, from healthcare information retrieval to
            smart manufacturing and intelligent recommendation systems.
          </p>

          <div className="mt-8 space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Education</h3>
            {education.map((edu) => (
              <div key={edu.id} className="flex gap-3">
                <GraduationCap className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-foreground">
                    {edu.degree} &mdash; {edu.field}
                  </p>
                  <p className="text-sm">
                    {edu.institution}, {edu.location} &middot; {edu.period}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Research Interests</h3>
          <div className="flex flex-wrap gap-2">
            {researchInterests.map((interest, i) => (
              <motion.div
                key={interest}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <Badge
                  variant="secondary"
                  className="px-3 py-1.5 text-sm font-normal"
                >
                  {interest}
                </Badge>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-border bg-card p-4">
            <h4 className="mb-2 text-sm font-semibold text-primary">
              Currently working on
            </h4>
            <p className="text-sm text-muted-foreground">
              NeoOLAF - a multi-agent framework for extracting causal knowledge
              graphs from industrial troubleshooting documentation using LLMs
              and ontologies.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
