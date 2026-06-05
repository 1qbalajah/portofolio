import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { OrganisationEducationSection } from "@/components/sections/OrganisationEducationSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CertificatesSection } from "@/components/sections/CertificatesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <OrganisationEducationSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />
      <GallerySection />
      <ContactSection />
    </main>
  );
}
