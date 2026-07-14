"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Code2, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/brand-icons";
import { personalInfo } from "@/data/portfolio-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Code2,
  Mail,
};

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Construct mailto link
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formState.subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `From: ${formState.name} (${formState.email})\n\n${formState.message}`
    )}`;
    window.open(mailtoLink, "_blank");
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-900/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or want to collaborate? Let's talk."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-5"
        >
          {/* Contact form */}
          <motion.form
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className="space-y-4 lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-zinc-300">
                  Name
                </label>
                <Input
                  id="contact-name"
                  placeholder="Your name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-zinc-300">
                  Email
                </label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="your@email.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-medium text-zinc-300">
                Subject
              </label>
              <Input
                id="contact-subject"
                placeholder="What's this about?"
                value={formState.subject}
                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-zinc-300">
                Message
              </label>
              <Textarea
                id="contact-message"
                placeholder="Tell me about your project or idea..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                required
              />
            </div>

            <Button type="submit" size="lg" className="w-full sm:w-auto">
              {isSubmitted ? (
                "Message Sent! ✓"
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </motion.form>

          {/* Contact info sidebar */}
          <motion.div
            variants={fadeInUp}
            className="space-y-6 lg:col-span-2"
          >
            {/* Info cards */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10">
                  <Mail className="h-4 w-4 text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500">Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm text-zinc-200 hover:text-indigo-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10">
                  <MapPin className="h-4 w-4 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500">Location</p>
                  <p className="text-sm text-zinc-200">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-zinc-500">
                Connect
              </p>
              <div className="grid grid-cols-2 gap-2">
                {personalInfo.socials.map((social) => {
                  const Icon = socialIcons[social.icon];
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/50 px-3 py-2.5 text-sm text-zinc-400 transition-all duration-200 hover:border-indigo-500/30 hover:text-indigo-400"
                    >
                      {Icon && <Icon className="h-4 w-4" />}
                      {social.name}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Resume download */}
            <Button variant="secondary" className="w-full" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
