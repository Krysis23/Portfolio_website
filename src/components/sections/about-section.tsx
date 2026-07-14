"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const aboutParagraphs = [
  "I'm Parth Borkute, a B.Tech Data Science undergraduate at Ramdeobaba University (CGPA 9.17) passionate about transforming ideas into scalable, production-ready software. My interests span Artificial Intelligence, Machine Learning, Deep Learning, Generative AI, Computer Vision, Data Science, and Backend Engineering, where I enjoy designing systems that combine strong engineering principles with practical impact.",
  "Over the past few years, I've built end-to-end AI applications including an AI-powered financial assistant, an autonomous driving perception system, an AI analytics platform, and an AutoML platform. My work has led to a Design Patent for an AI-powered financial document processing device and strengthened my interest in building reliable, intelligent products that solve real-world problems.",
  "Beyond software development, I run a technology-focused YouTube channel with 60K+ subscribers and 12M+ views, where I create content around PC optimization, software, and technology. Building the channel taught me to think analytically, experiment with data, understand user behavior, and continuously improve through feedback and iteration.",
  "Outside technology, I'm a competitive basketball player, recognized as Athlete of the Year (2025–26) at my university, and have represented RTM Nagpur University in the Inter-University Basketball Tournament. I also enjoy high-altitude trekking, which has strengthened my resilience, discipline, and ability to perform under pressure.",
  "Whether I'm training deep learning models, developing backend APIs, analyzing data, creating technical content, or competing on the basketball court, I enjoy solving challenging problems, learning continuously, and building things that create meaningful impact.",
];

const educationData = [
  {
    institution: "Ramdeobaba University",
    degree: "Bachelor of Technology in Data Science",
    grade: "CGPA: 9.17",
    period: "Aug. 2023 – Present",
    location: "Nagpur, Maharashtra",
  },
  {
    institution: "Dr. M.K. Umathe College",
    degree: "12th Grade, Maharashtra State Board",
    grade: "Percentage: 87%",
    period: "Jun. 2022 – May 2023",
    location: "Nagpur, Maharashtra",
  },
  {
    institution: "School Of Scholars",
    degree: "10th Grade, Central Board of Secondary Education",
    grade: "Percentage: 82%",
    period: "Jun. 2020 – May 2021",
    location: "Nagpur, Maharashtra",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="About Me"
          subtitle="Building intelligent systems that solve real-world problems."
        />

        {/* Bio text */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-3xl space-y-5"
        >
          {aboutParagraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              variants={fadeInUp}
              className="text-base leading-relaxed text-zinc-400"
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>

        {/* Education subsection */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16"
        >
          <motion.h3
            variants={fadeInUp}
            className="mb-8 text-2xl font-bold text-zinc-100 flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
              <GraduationCap className="h-5 w-5" />
            </div>
            Education
          </motion.h3>

          <div className="relative space-y-6 pl-8 before:absolute before:left-[15px] before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-gradient-to-b before:from-indigo-500/40 before:via-zinc-700/30 before:to-transparent">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition-all duration-300 hover:border-indigo-500/30 hover:bg-indigo-500/5 sm:p-6"
              >
                {/* Timeline dot */}
                <div className="absolute -left-8 top-6 flex h-[13px] w-[13px] items-center justify-center">
                  <div className="h-3 w-3 rounded-full border-2 border-indigo-500/60 bg-zinc-950 transition-colors group-hover:border-indigo-400 group-hover:bg-indigo-500/20" />
                </div>

                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-zinc-100 group-hover:text-indigo-400 transition-colors">
                      {edu.institution}
                    </h4>
                    <p className="mt-0.5 text-sm text-zinc-400">
                      {edu.degree}
                    </p>
                    <div className="mt-2 inline-flex items-center rounded-md border border-emerald-500/20 bg-emerald-500/10 px-3 py-1">
                      <span className="text-sm font-semibold text-emerald-400">
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 text-right sm:mt-0">
                    <p className="text-sm font-medium text-zinc-400">
                      {edu.period}
                    </p>
                    <p className="mt-0.5 text-xs text-zinc-500">
                      {edu.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
