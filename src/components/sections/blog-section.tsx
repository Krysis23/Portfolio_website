"use client";

import { motion } from "framer-motion";
import { PenLine, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeInUp } from "@/lib/animations";

export function BlogSection() {
  return (
    <section id="blog" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Blog"
          subtitle="Thoughts on AI, engineering, and building products"
        />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-lg text-center"
        >
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-10">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-500/10">
              <PenLine className="h-6 w-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold text-zinc-100">
              Coming Soon
            </h3>
            <p className="mt-3 text-sm text-zinc-400">
              I&apos;m working on articles about RAG pipelines, computer vision architectures,
              production ML systems, and lessons from building AI applications. Stay tuned.
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-indigo-400 font-medium">
              <span>Follow for updates</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
