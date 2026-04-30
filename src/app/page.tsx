import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { OrganizationSection } from "@/components/sections/OrganizationSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CertificatesSection } from "@/components/sections/CertificatesSection";
import { GallerySection } from "@/components/sections/GallerySection";

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <EducationSection />
      <OrganizationSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />
      <GallerySection />
    </main>
  );
}
