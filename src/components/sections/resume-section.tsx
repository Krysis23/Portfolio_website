"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const resumes = [
  {
    label: "AI Engineer Resume",
    category: "AI & Applied AI",
    file: "https://drive.google.com/file/d/1OdxMl-ZFDfv7nVQpzY7DkKSzKQux0xOL/view?usp=sharing",
    color: "from-indigo-500/20 to-violet-500/20",
    hoverBorder: "hover:border-indigo-500/40",
    iconColor: "text-indigo-400",
  },
  {
    label: "ML Engineer Resume",
    category: "Machine Learning",
    file: "https://drive.google.com/file/d/1lSClWbaNeHDzn1oglz9qYuVAckyA8Tjk/view?usp=sharing",
    color: "from-emerald-500/20 to-teal-500/20",
    hoverBorder: "hover:border-emerald-500/40",
    iconColor: "text-emerald-400",
  },
  {
    label: "Data Scientist Resume",
    category: "Data Science",
    file: "https://drive.google.com/file/d/14flenYfp584CEtpt1GG3-kEFudPS413A/view?usp=sharing",
    color: "from-cyan-500/20 to-blue-500/20",
    hoverBorder: "hover:border-cyan-500/40",
    iconColor: "text-cyan-400",
  },
  {
    label: "Data Analyst Resume",
    category: "Analytics",
    file: "https://drive.google.com/file/d/1AcW95NZZ7CSZV5U6G54wvotyRbuoJY6Z/view?usp=sharing",
    color: "from-amber-500/20 to-orange-500/20",
    hoverBorder: "hover:border-amber-500/40",
    iconColor: "text-amber-400",
  },
  {
    label: "Python Developer Resume",
    category: "Python Backend",
    file: "https://drive.google.com/file/d/1nulE3mZuwiZfEAiDKs3NYuTqr1p0bqa-/view?usp=sharing",
    color: "from-blue-500/20 to-sky-500/20",
    hoverBorder: "hover:border-blue-500/40",
    iconColor: "text-blue-400",
  },
];

export function ResumeSection() {
  return (
    <section id="resume" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="View Resume"
          subtitle="Tailored resumes for different roles and domains"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-4 grid-cols-1 sm:grid-cols-2"
        >
          {resumes.map((resume) => (
            <motion.a
              key={resume.label}
              variants={fadeInUp}
              href={resume.file}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 ${resume.hoverBorder} hover:shadow-lg hover:shadow-black/20 last:sm:col-span-2 last:sm:max-w-[calc(50%-0.5rem)] last:sm:mx-auto`}
            >
              {/* Gradient accent on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${resume.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />

              <div className="relative flex items-start gap-4">
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-zinc-800/60 ${resume.iconColor} transition-colors`}>
                  <FileText className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 group-hover:text-zinc-400 transition-colors">
                    {resume.category}
                  </p>
                  <h3 className="mt-1 font-semibold text-zinc-100 group-hover:text-white transition-colors">
                    {resume.label}
                  </h3>
                </div>
                <Download className="h-4 w-4 shrink-0 text-zinc-600 transition-all group-hover:text-zinc-300 group-hover:translate-y-0.5" />
              </div>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
