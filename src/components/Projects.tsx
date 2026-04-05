// Server Component
import { projects } from "@/data/portfolio";
import SectionTag from "./SectionTag";
import ScrollReveal from "./ScrollReveal";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-[100px] relative">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionTag text="Dự Án" />
          <h2 className="section-heading mt-4 mb-4">
            Các dự án <span className="gradient-text">nổi bật</span>
          </h2>
          <p className="text-(--text-secondary) max-w-[480px] mx-auto text-[15px]">
            Những sản phẩm thực tế tôi đã tham gia xây dựng và phát triển
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-6">
          {projects.map((project, idx) => (
            <ScrollReveal
              key={project.id}
              delay={idx * 0.15}
            >
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
