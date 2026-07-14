"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Play, Mountain, Award } from "lucide-react";
import { achievements } from "@/data/portfolio-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const achievementIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Trophy,
  Medal,
  Play,
  Mountain,
  Award,
};

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  sports: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/20" },
  content: { bg: "bg-rose-500/10", text: "text-rose-400", border: "border-rose-500/20" },
  adventure: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20" },
  innovation: { bg: "bg-violet-500/10", text: "text-violet-400", border: "border-violet-500/20" },
  academic: { bg: "bg-indigo-500/10", text: "text-indigo-400", border: "border-indigo-500/20" },
};

export function AchievementsSection() {
  return (
    <section id="achievements" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Achievements"
          subtitle="Beyond the code — sports, adventure, and creative pursuits"
        />

        {/* Vertical timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative mx-auto max-w-3xl"
        >
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-zinc-800 to-transparent sm:left-1/2 sm:-translate-x-px" />

          {achievements.map((achievement, index) => {
            const Icon = achievementIcons[achievement.icon];
            const colors = categoryColors[achievement.category];
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={achievement.id}
                variants={fadeInUp}
                className={`relative flex items-start gap-4 pb-10 ${
                  isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 z-10">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full border ${colors.border} ${colors.bg}`}>
                    {Icon && <Icon className={`h-4 w-4 ${colors.text}`} />}
                  </div>
                </div>

                {/* Content card */}
                <div
                  className={`ml-16 w-full rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition-all duration-300 hover:border-zinc-700 sm:ml-0 sm:w-[calc(50%-2rem)] ${
                    isLeft ? "sm:mr-auto sm:pr-8" : "sm:ml-auto sm:pl-8"
                  }`}
                >
                  <h3 className="text-base font-semibold text-zinc-100">
                    {achievement.title}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
