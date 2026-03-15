"use client";

import { SectionWrapper, SectionHeader } from "@/components/common/SectionWrapper";
import { personalInfo, education } from "@/lib/data";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeader title="À propos" subtitle="Parcours & profil" />

      <div className="max-w-3xl space-y-4 text-muted-foreground">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-lg leading-relaxed"
        >
          Je suis <span className="font-medium text-foreground">{personalInfo.name}</span>,
          ingénieur en intelligence artificielle formé à l&apos;
          <span className="font-medium text-foreground">ENSIASD</span> et
          actuellement en stage au{" "}
          <span className="font-medium text-foreground">
            Laboratoire LITIS, INSA Rouen Normandie
          </span>
          , France.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="leading-relaxed"
        >
          Passionné par l&apos;IA et la data science, je conçois des systèmes
          intelligents qui transforment les données en solutions concrètes.
          Mon expérience couvre le machine learning, le deep learning, le
          traitement du langage naturel et le déploiement de modèles en production.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="leading-relaxed"
        >
          Je m&apos;intéresse particulièrement à connecter la rigueur scientifique
          avec des produits IA déployables, que ce soit dans le domaine de la
          santé, de l&apos;industrie intelligente ou des systèmes de recommandation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 space-y-4"
        >
          <h3 className="text-lg font-semibold text-foreground">Formation</h3>
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
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
