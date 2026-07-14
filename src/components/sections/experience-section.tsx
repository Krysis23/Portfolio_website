"use client";

import { motion } from "framer-motion";
import { Play, Users, Eye, Video, ExternalLink } from "lucide-react";
import { experience } from "@/data/portfolio-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { fadeInUp } from "@/lib/animations";

const metricIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Subscribers: Users,
  "Total Views": Eye,
  Videos: Video,
};

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-900/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Experience"
          subtitle="Professional experience and creative ventures"
        />

        <div className="space-y-8">
          {experience.map((exp) => (
            <motion.div
              key={exp.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 hover:border-indigo-500/30 sm:p-8"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                {/* Icon */}
                {exp.url ? (
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rose-500/10 text-rose-400 transition-colors hover:bg-rose-500/20"
                  >
                    <Play className="h-5 w-5" />
                  </a>
                ) : (
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rose-500/10 text-rose-400">
                    <Play className="h-5 w-5" />
                  </div>
                )}

                <div className="flex-1">
                  {/* Header */}
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-zinc-100">
                        {exp.title}
                      </h3>
                      {exp.url ? (
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                        >
                          {exp.company}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-indigo-400">
                          {exp.company}
                        </p>
                      )}
                    </div>
                    <Badge variant="default">{exp.period}</Badge>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Metrics */}
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    {exp.metrics.map((metric) => {
                      const Icon = metricIcons[metric.label];
                      return (
                        <div
                          key={metric.label}
                          className="rounded-lg border border-zinc-800 bg-zinc-950/50 p-4 text-center transition-all duration-300 group-hover:border-zinc-700"
                        >
                          {Icon && (
                            <Icon className="mx-auto mb-2 h-4 w-4 text-zinc-500" />
                          )}
                          <p className="text-xl font-bold text-zinc-100">
                            {metric.value}
                          </p>
                          <p className="text-xs text-zinc-500">{metric.label}</p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Highlights */}
                  <ul className="mt-5 space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-zinc-400"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-400" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
