"use client";

import { motion } from "framer-motion";
import { Code2, Brain, BarChart3, Globe, Award, ExternalLink } from "lucide-react";
import { certifications } from "@/data/portfolio-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { staggerGrid, fadeInUp } from "@/lib/animations";
import type { Certification } from "@/types";

const certIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2, Brain, BarChart3, Globe,
};

const certColors: Record<Certification["color"], { bg: string; text: string; border: string; glow: string }> = {
  indigo: {
    bg: "bg-indigo-500/10",
    text: "text-indigo-400",
    border: "hover:border-indigo-500/30",
    glow: "group-hover:shadow-indigo-500/5",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    border: "hover:border-emerald-500/30",
    glow: "group-hover:shadow-emerald-500/5",
  },
  violet: {
    bg: "bg-violet-500/10",
    text: "text-violet-400",
    border: "hover:border-violet-500/30",
    glow: "group-hover:shadow-violet-500/5",
  },
  amber: {
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    border: "hover:border-amber-500/30",
    glow: "group-hover:shadow-amber-500/5",
  },
};

export function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Certifications"
          subtitle="Professional certifications and continuous learning"
        />

        <motion.div
          variants={staggerGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2"
        >
          {certifications.map((cert) => {
            const Icon = certIcons[cert.icon];
            const colors = certColors[cert.color];

            return (
              <motion.a
                key={cert.id}
                variants={fadeInUp}
                href={cert.url ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-start justify-between rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 hover:shadow-lg hover:cursor-pointer ${colors.border} ${colors.glow}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${colors.bg}`}>
                    {Icon ? (
                      <Icon className={`h-5 w-5 ${colors.text}`} />
                    ) : (
                      <Award className={`h-5 w-5 ${colors.text}`} />
                    )}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-100 group-hover:text-white transition-colors">
                      {cert.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-zinc-500">{cert.issuer}</p>
                  </div>
                </div>
                <ExternalLink className={`h-4 w-4 shrink-0 mt-0.5 text-zinc-700 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:${colors.text}`} />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
