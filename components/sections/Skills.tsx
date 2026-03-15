"use client";

import { SectionWrapper, SectionHeader } from "@/components/common/SectionWrapper";
import { skills } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

function SkillGroup({ title, items }: { title: string; items: { name: string }[] }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <Badge
              variant="secondary"
              className="px-3 py-1.5 text-sm font-normal"
            >
              {skill.name}
            </Badge>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeader title="Compétences" subtitle="Expertise technique & outils" />

      <div className="grid gap-10 md:grid-cols-3">
        <SkillGroup title="Langages" items={skills.languages} />
        <SkillGroup title="Frameworks & Bibliothèques" items={skills.frameworks} />
        <SkillGroup title="Outils & Plateformes" items={skills.tools} />
      </div>
    </SectionWrapper>
  );
}
