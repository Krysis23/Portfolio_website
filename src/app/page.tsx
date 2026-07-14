import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";

import { AchievementsSection } from "@/components/sections/achievements-section";
import { ResumeSection } from "@/components/sections/resume-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { ConnectSection } from "@/components/sections/github-section";


import { LoadingScreen } from "@/components/ui/loading-screen";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />

      <main>
        <HeroSection />

        {/* Subtle section divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        <AboutSection />
        <TechStackSection />

        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        <ProjectsSection />
        <ExperienceSection />


        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        <AchievementsSection />
        <ResumeSection />
        <CertificationsSection />
        <ConnectSection />


      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
