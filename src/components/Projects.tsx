"use client";

import { projects } from "@/data/portfolio";
import SectionTag from "./SectionTag";
import ScrollReveal from "./ScrollReveal";
import ProjectCard from "./ProjectCard";
import { useLanguage } from "@/context/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();

  // Merge static project data with translated content
  const mergedProjects = projects.map((project) => {
    const translated = t.projects.items.find((item) => item.id === project.id);
    return {
      ...project,
      client: translated?.client ?? "",
      period: translated?.period ?? "",
      description: translated?.description ?? "",
      responsibilities: translated?.responsibilities ?? [],
    };
  });

  return (
    <section id="projects" className="py-[100px] relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <SectionTag text={t.projects.tag} />
          <h2 className="section-heading mt-4 mb-4">
            {t.projects.headingBefore}<span className="gradient-text">{t.projects.headingGradient}</span>
          </h2>
          <p className="text-(--text-secondary) max-w-[480px] mx-auto text-[15px]">
            {t.projects.subheading}
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-6">
          {mergedProjects.map((project, idx) => (
            <ScrollReveal key={project.id} delay={idx * 0.15}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          #projects .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
