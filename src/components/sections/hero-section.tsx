"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, ChevronDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/brand-icons";
import { heroContent, personalInfo } from "@/data/portfolio-data";
import { useTypewriter } from "@/hooks/use-typewriter";

export function HeroSection() {
  const { displayText } = useTypewriter({
    texts: heroContent.rotatingTexts,
    typingSpeed: 80,
    deletingSpeed: 40,
    pauseDuration: 2000,
  });

  function smoothScroll(id: string) {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.12) 0%, transparent 60%), #080808" }}
    >
      {/* Subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-violet-600/8 blur-[100px]" />

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ─────────────────────────────────────────────────────── */}
      {/* Main grid */}
      {/* ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-28 sm:px-10 lg:py-0">
        <div className="flex min-h-screen flex-col items-center justify-center gap-16 lg:flex-row lg:items-center lg:gap-20">

          {/* ── LEFT ── */}
          <div className="flex flex-1 flex-col items-start">

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-medium tracking-wide text-zinc-300">
                Open to opportunities
              </span>
            </motion.div>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-4 h-6"
            >
              <span className="font-mono text-xs tracking-widest text-indigo-400 sm:text-sm">
                {displayText}<span className="animate-pulse text-indigo-400">|</span>
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-[2.6rem] font-extrabold leading-[1.06] tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]"
            >
              {heroContent.headline.split("AI").map((part, i) =>
                i === 0 ? (
                  <span key={i}>{part}</span>
                ) : (
                  <span key={i}>
                    <span
                      className="bg-clip-text text-transparent"
                      style={{
                        backgroundImage:
                          "linear-gradient(135deg, #818cf8 0%, #a78bfa 40%, #34d399 100%)",
                      }}
                    >
                      AI
                    </span>
                    {part}
                  </span>
                )
              )}
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 max-w-lg text-[0.95rem] leading-relaxed text-zinc-400"
            >
              {heroContent.subheading}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              {/* Primary */}
              <button
                onClick={() => smoothScroll("projects")}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-900/40 transition-all duration-300 hover:bg-indigo-500 hover:shadow-indigo-800/50"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>

              {/* Secondary — outline */}
              <button
                onClick={() => smoothScroll("resume")}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-semibold text-zinc-200 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/10 hover:text-white"
              >
                Resume
              </button>

              {/* Socials */}
              <div className="flex items-center gap-2 pl-1">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-400 transition-all duration-200 hover:border-white/20 hover:text-white"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-400 transition-all duration-200 hover:border-white/20 hover:text-white"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            {/* Stat chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              {[
                { value: "9.17", label: "CGPA" },
                { value: "60K+", label: "YouTube" },
                { value: "5+", label: "AI Projects" },
                { value: "1", label: "Design Patent" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-2 rounded-lg border border-white/8 bg-white/4 px-3.5 py-2 backdrop-blur-sm"
                >
                  <span className="text-sm font-bold text-white">{stat.value}</span>
                  <span className="text-xs text-zinc-500">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Location */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-6 flex items-center gap-1.5 text-xs text-zinc-600"
            >
              <MapPin className="h-3 w-3" />
              {personalInfo.location}
            </motion.p>
          </div>

          {/* ── RIGHT — Portrait card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex-shrink-0"
          >
            {/* Outer glow */}
            <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-indigo-500/15 via-violet-500/10 to-emerald-500/8 blur-2xl" />

            {/* Portrait container */}
            <div className="relative h-[480px] w-[360px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-900/80 shadow-2xl shadow-black/60 backdrop-blur-sm sm:h-[520px] sm:w-[390px]"
              style={{
                boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 32px 80px rgba(0,0,0,0.7), 0 0 60px rgba(99,102,241,0.08)",
              }}
            >
              {/* Gradient border shimmer */}
              <div
                className="pointer-events-none absolute inset-0 rounded-[2.5rem] z-10"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(129,140,248,0.15) 0%, transparent 50%, rgba(52,211,153,0.08) 100%)",
                }}
              />

              {/* Image */}
              <Image
                src="/parth.png"
                alt="Parth Borkute — AI Engineer"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 640px) 360px, 390px"
              />

              {/* Bottom fade */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-zinc-950/80 to-transparent z-10" />

              {/* Name chip inside card at bottom */}
              <div className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2">
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-4 py-2 backdrop-blur-md">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span className="whitespace-nowrap text-xs font-medium text-zinc-200">Parth Borkute</span>
                  <span className="text-xs text-zinc-500">· AI Engineer</span>
                </div>
              </div>
            </div>

            {/* Floating card — CGPA */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-14 top-16 rounded-2xl border border-white/10 bg-zinc-900/90 px-4 py-3 shadow-xl shadow-black/40 backdrop-blur-xl"
            >
              <p className="text-xs text-zinc-500">University CGPA</p>
              <p className="mt-0.5 text-xl font-bold text-white">9.17<span className="text-sm font-normal text-zinc-500">/10</span></p>
            </motion.div>

            {/* Floating card — Patent */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-10 top-1/2 max-w-[140px] rounded-2xl border border-white/10 bg-zinc-900/90 px-3.5 py-3 shadow-xl shadow-black/40 backdrop-blur-xl"
            >
              <div className="flex items-center gap-1.5">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-violet-500/20 text-violet-400">
                  <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                </div>
                <span className="text-[10px] font-semibold leading-tight text-zinc-300">Design Patent</span>
              </div>
              <p className="mt-1 text-[9px] leading-tight text-zinc-500">AI Financial Document Processor</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5"
        >
          <span className="text-[10px] uppercase tracking-widest text-zinc-600">Scroll</span>
          <ChevronDown className="h-3.5 w-3.5 text-zinc-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
