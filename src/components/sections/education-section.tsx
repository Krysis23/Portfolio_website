"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeInUp } from "@/lib/animations";

export function EducationSection() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Education" />

        <div className="mx-auto max-w-2xl">
          {education.map((edu) => (
            <motion.div
              key={edu.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 hover:border-indigo-500/30 sm:p-8"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 transition-colors group-hover:bg-indigo-500/20">
                  <GraduationCap className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-zinc-100">
                    {edu.institution}
                  </h3>
                  <p className="mt-1 text-sm text-indigo-400 font-medium">
                    {edu.degree} in {edu.field}
                  </p>
                  <p className="mt-1 text-sm text-zinc-500">{edu.period}</p>

                  <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-4 py-2">
                    <span className="text-lg font-bold text-emerald-400">
                      {edu.grade}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-1.5">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-600" />
                        {h}
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
