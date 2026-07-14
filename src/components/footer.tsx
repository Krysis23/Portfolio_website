"use client";

import { Mail, Code2, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/brand-icons";
import { personalInfo } from "@/data/portfolio-data";
import { Separator } from "@/components/ui/separator";

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Code2,
  Mail,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo & tagline */}
          <div className="text-center md:text-left">
            <span className="text-lg font-bold tracking-tight text-zinc-100">
              {personalInfo.name.split(" ")[0]}
              <span className="text-indigo-400">.</span>
            </span>
            <p className="mt-1 text-sm text-zinc-500">
              {personalInfo.role}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {personalInfo.socials.map((social) => {
              const Icon = socialIcons[social.icon];
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 transition-colors hover:border-indigo-500/30 hover:bg-indigo-500/10 hover:text-indigo-400"
                  aria-label={social.name}
                >
                  {Icon && <Icon className="h-4 w-4" />}
                </a>
              );
            })}
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center gap-2 text-center text-xs text-zinc-500 sm:flex-row sm:justify-between">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="h-3 w-3 text-rose-400" /> using Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
