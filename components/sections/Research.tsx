"use client";

import { SectionWrapper, SectionHeader } from "@/components/common/SectionWrapper";
import { motion } from "framer-motion";
import { Brain, Network, Bot, Factory } from "lucide-react";

const areas = [
  {
    icon: Brain,
    title: "Large Language Models",
    description:
      "Fine-tuning and prompt engineering for domain-specific tasks including knowledge extraction and question answering.",
  },
  {
    icon: Network,
    title: "Knowledge Graphs",
    description:
      "Building structured knowledge representations from unstructured text using ontology-driven extraction pipelines.",
  },
  {
    icon: Bot,
    title: "Multi-Agent Systems",
    description:
      "Designing orchestrated agent workflows with LangGraph for complex reasoning and information processing tasks.",
  },
  {
    icon: Factory,
    title: "Industry 4.0",
    description:
      "Applying AI to smart manufacturing — extracting actionable knowledge from industrial troubleshooting documentation.",
  },
];

export function Research() {
  return (
    <SectionWrapper id="research">
      <SectionHeader
        title="Research"
        subtitle="Core areas of investigation"
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {areas.map((area, i) => (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30 hover:bg-card/80"
          >
            <area.icon className="mb-4 h-6 w-6 text-primary transition-transform group-hover:scale-110" />
            <h3 className="mb-2 text-lg font-semibold">{area.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {area.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
