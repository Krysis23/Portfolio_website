"use client";

import { motion } from "framer-motion";
import { ExternalLink, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon, YouTubeIcon, InstagramIcon } from "@/components/icons/brand-icons";
import { personalInfo } from "@/data/portfolio-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const socials = [
  {
    name: "GitHub",
    description: "Open source projects & code",
    url: personalInfo.github,
    icon: GithubIcon,
    color: "group-hover:border-zinc-500/50 group-hover:bg-zinc-500/10",
    iconColor: "group-hover:text-zinc-100",
    handle: "@Krysis23",
  },
  {
    name: "LinkedIn",
    description: "Professional network & updates",
    url: personalInfo.linkedin,
    icon: LinkedinIcon,
    color: "group-hover:border-blue-500/50 group-hover:bg-blue-500/10",
    iconColor: "group-hover:text-blue-400",
    handle: "in/parthborkute",
  },
  {
    name: "LeetCode",
    description: "Competitive programming & DSA",
    url: personalInfo.leetcode,
    icon: LeetCodeIcon,
    color: "group-hover:border-amber-500/50 group-hover:bg-amber-500/10",
    iconColor: "group-hover:text-amber-400",
    handle: "@parthborkute",
  },
  {
    name: "YouTube",
    description: "LOW END GAMING — 60K+ subscribers",
    url: "https://www.youtube.com/@LOWENDGAMINGYT",
    icon: YouTubeIcon,
    color: "group-hover:border-red-500/50 group-hover:bg-red-500/10",
    iconColor: "group-hover:text-red-400",
    handle: "@LowEndGaming23",
  },
  {
    name: "Instagram",
    description: "Behind the scenes & updates",
    url: "https://www.instagram.com/parth.b_/",
    icon: InstagramIcon,
    color: "group-hover:border-pink-500/50 group-hover:bg-pink-500/10",
    iconColor: "group-hover:text-pink-400",
    handle: "@parthborkute_",
  },
];

export function ConnectSection() {
  return (
    <section id="connect" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-900/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Connect"
          subtitle="Let's connect — find me across the internet"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {socials.map((social) => (
            <motion.a
              key={social.name}
              variants={fadeInUp}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 ${social.color}`}
            >
              {/* Icon & name */}
              <div className="flex items-center gap-4">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-800/50 text-zinc-400 transition-colors ${social.iconColor}`}>
                  <social.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-100 flex items-center gap-2">
                    {social.name}
                    <ExternalLink className="h-3.5 w-3.5 text-zinc-600 opacity-0 transition-opacity group-hover:opacity-100" />
                  </h3>
                  <p className="text-sm text-indigo-400/80 font-mono">
                    {social.handle}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-3 text-sm text-zinc-500">
                {social.description}
              </p>
            </motion.a>
          ))}

          {/* Email card */}
          <motion.a
            variants={fadeInUp}
            href={`mailto:${personalInfo.email}`}
            className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 group-hover:border-emerald-500/50 hover:border-emerald-500/50 hover:bg-emerald-500/10"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-800/50 text-zinc-400 transition-colors group-hover:text-emerald-400">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-zinc-100 flex items-center gap-2">
                  Email
                  <ExternalLink className="h-3.5 w-3.5 text-zinc-600 opacity-0 transition-opacity group-hover:opacity-100" />
                </h3>
                <p className="text-sm text-indigo-400/80 font-mono">
                  {personalInfo.email}
                </p>
              </div>
            </div>
            <p className="mt-3 text-sm text-zinc-500">
              Reach out for collaborations & opportunities
            </p>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
