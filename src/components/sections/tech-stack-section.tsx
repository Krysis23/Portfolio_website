"use client";

import { motion } from "framer-motion";
import {
  Code2, Brain, Eye, Sparkles, Server, Database, Cloud, Wrench, BarChart3,
} from "lucide-react";
import { techStack } from "@/data/portfolio-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { staggerGrid, fadeInUp } from "@/lib/animations";
import type { TechCategory } from "@/types";

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2, Brain, Eye, Sparkles, Server, Database, Cloud, Wrench, BarChart3,
};

const glowColors: Record<TechCategory["color"], string> = {
  indigo: "hover:border-indigo-500/40 hover:shadow-indigo-500/5",
  emerald: "hover:border-emerald-500/40 hover:shadow-emerald-500/5",
  violet: "hover:border-violet-500/40 hover:shadow-violet-500/5",
  amber: "hover:border-amber-500/40 hover:shadow-amber-500/5",
  rose: "hover:border-rose-500/40 hover:shadow-rose-500/5",
  cyan: "hover:border-cyan-500/40 hover:shadow-cyan-500/5",
  blue: "hover:border-blue-500/40 hover:shadow-blue-500/5",
  zinc: "hover:border-zinc-500/40 hover:shadow-zinc-500/5",
};

const iconBgColors: Record<TechCategory["color"], string> = {
  indigo: "bg-indigo-500/10 text-indigo-400",
  emerald: "bg-emerald-500/10 text-emerald-400",
  violet: "bg-violet-500/10 text-violet-400",
  amber: "bg-amber-500/10 text-amber-400",
  rose: "bg-rose-500/10 text-rose-400",
  cyan: "bg-cyan-500/10 text-cyan-400",
  blue: "bg-blue-500/10 text-blue-400",
  zinc: "bg-zinc-500/10 text-zinc-400",
};

export function TechStackSection() {
  return (
    <section id="tech-stack" className="relative py-24 sm:py-32">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Tech Stack"
          subtitle="Technologies and tools I use to bring ideas to life"
        />

        <motion.div
          variants={staggerGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {techStack.map((category) => {
            const Icon = categoryIcons[category.icon];
            return (
              <motion.div
                key={category.category}
                variants={fadeInUp}
                className={`group rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition-all duration-300 hover:shadow-lg ${glowColors[category.color]}`}
              >
                {/* Category header */}
                <div className="mb-4 flex items-center gap-3">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${iconBgColors[category.color]}`}>
                    {Icon && <Icon className="h-4 w-4" />}
                  </div>
                  <h3 className="text-sm font-semibold text-zinc-200">
                    {category.category}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <Badge key={skill.name} variant={category.color}>
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
