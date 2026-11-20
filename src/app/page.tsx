import { AboutSection } from "@/components/about/AboutSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { FloatingProfile } from "@/components/FloatingProfile";
import { profile } from "@/data/profile";
import { HeroSection } from "@/components/hero/HeroSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { SectionRail } from "@/components/SectionRail";
import { SkillsGlobe } from "@/components/skills/SkillsGlobe";

export default function Home() {
  return (
    <>
      <SectionRail />
      <FloatingProfile src={profile.photo} />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsGlobe />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
