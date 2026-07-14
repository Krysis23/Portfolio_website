"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ChevronRight, Lightbulb, AlertTriangle } from "lucide-react";
import { GithubIcon } from "@/components/icons/brand-icons";
import { projects, personalInfo } from "@/data/portfolio-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import type { Project } from "@/types";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="Production-grade AI systems and tools I've built"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-2"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              className={`group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 transition-all duration-300 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/5 ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              {/* Project image placeholder with gradient */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900 sm:h-56">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                </div>
                {/* Metrics overlay */}
                <div className="absolute bottom-3 right-3 flex gap-2">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-md bg-zinc-950/80 backdrop-blur-sm px-2.5 py-1 text-xs font-medium text-zinc-300 border border-zinc-700/50"
                    >
                      <span className="text-indigo-400">{metric.value}</span>{" "}
                      <span className="text-zinc-500">{metric.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-400 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech stack chips */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 5).map((tech) => (
                    <Badge key={tech} variant="default">
                      {tech}
                    </Badge>
                  ))}
                  {project.techStack.length > 5 && (
                    <Badge variant="default">+{project.techStack.length - 5}</Badge>
                  )}
                </div>

                {/* Actions */}
                <div className="mt-5 flex items-center gap-3">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GithubIcon className="h-3.5 w-3.5" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="ml-auto flex items-center gap-1 text-sm text-zinc-400 transition-colors hover:text-indigo-400 cursor-pointer"
                  >
                    Details
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View more on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center"
        >
          <Button variant="secondary" size="lg" asChild>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="h-5 w-5" />
              More Projects on GitHub
            </a>
          </Button>
        </motion.div>

        {/* Project Detail Modal */}
        <Dialog
          open={!!selectedProject}
          onOpenChange={(open) => !open && setSelectedProject(null)}
        >
          {selectedProject && (
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{selectedProject.title}</DialogTitle>
                <DialogDescription>{selectedProject.description}</DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Long description */}
                <p className="text-sm leading-relaxed text-zinc-300">
                  {selectedProject.longDescription}
                </p>


                {/* Highlights */}
                <div>
                  <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-zinc-200">
                    <Lightbulb className="h-4 w-4 text-indigo-400" />
                    Key Highlights
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.highlights.map((h) => (
                      <Badge key={h} variant="indigo">
                        {h}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                {selectedProject.metrics.length > 0 && (
                  <div className="flex gap-4">
                    {selectedProject.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-center"
                      >
                        <p className="text-lg font-bold text-indigo-400">{m.value}</p>
                        <p className="text-xs text-zinc-500">{m.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Challenges */}
                {selectedProject.challenges.length > 0 && (
                  <div>
                    <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-zinc-200">
                      <AlertTriangle className="h-4 w-4 text-amber-400" />
                      Challenges
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.challenges.map((c, i) => (
                        <li key={i} className="flex gap-2 text-sm text-zinc-400">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-400" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Lessons */}
                {selectedProject.lessons.length > 0 && (
                  <div>
                    <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-zinc-200">
                      <Lightbulb className="h-4 w-4 text-emerald-400" />
                      Lessons Learned
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.lessons.map((l, i) => (
                        <li key={i} className="flex gap-2 text-sm text-zinc-400">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                          {l}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-3 pt-2">
                  {selectedProject.githubUrl && (
                    <Button variant="primary" size="sm" asChild>
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GithubIcon className="h-4 w-4" />
                        View on GitHub
                      </a>
                    </Button>
                  )}
                  {selectedProject.liveUrl && (
                    <Button variant="secondary" size="sm" asChild>
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}
