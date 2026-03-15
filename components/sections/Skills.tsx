"use client";

import { SectionWrapper, SectionHeader } from "@/components/common/SectionWrapper";
import { skills } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-muted">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.05 }}
          className="h-full rounded-full bg-primary"
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeader title="Skills" subtitle="Technical expertise & tools" />

      <div className="grid gap-10 md:grid-cols-2">
        {/* Languages */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Languages
          </h3>
          <div className="space-y-4">
            {skills.languages.map((skill, i) => (
              <SkillBar key={skill.name} {...skill} index={i} />
            ))}
          </div>
        </div>

        {/* Frameworks */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Frameworks & Libraries
          </h3>
          <div className="space-y-4">
            {skills.frameworks.map((skill, i) => (
              <SkillBar key={skill.name} {...skill} index={i} />
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Tools & Platforms
          </h3>
          <div className="space-y-4">
            {skills.tools.map((skill, i) => (
              <SkillBar key={skill.name} {...skill} index={i} />
            ))}
          </div>
        </div>

        {/* Domains */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Research Domains
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.domains.map((domain, i) => (
              <motion.div
                key={domain}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <Badge
                  variant="outline"
                  className="border-primary/20 px-3 py-1.5 text-sm font-normal"
                >
                  {domain}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
