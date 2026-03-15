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
        {/* Bio */}
        <div className="space-y-4 text-muted-foreground md:col-span-2">
          <p className="text-lg leading-relaxed">
            I&apos;m <span className="font-medium text-foreground">{personalInfo.name}</span>,
            a final-year engineering student at{" "}
            <span className="font-medium text-foreground">ENSIASD</span>{" "}
            specializing in Artificial Intelligence &amp; Data Science. Currently
            completing my end-of-study internship at the{" "}
            <span className="font-medium text-foreground">
              LITIS Laboratory, INSA Rouen Normandie
            </span>
            , France.
          </p>
          <p className="leading-relaxed">
            My research focuses on designing LLM-based agentic systems that
            bridge the gap between unstructured industrial documentation and
            structured knowledge representations. I work at the intersection of
            Retrieval-Augmented Generation, knowledge graphs, and multi-agent
            orchestration.
          </p>
          <p className="leading-relaxed">
            I&apos;m passionate about building AI systems that have real-world
            impact, from healthcare information retrieval to smart manufacturing.
            I believe in open science and reproducible research.
          </p>

          {/* Education */}
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

        {/* Research Interests */}
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
              NeoOLAF — a multi-agent framework for extracting causal knowledge
              graphs from industrial troubleshooting documentation using LLMs
              and ontologies.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
