// Server Component
import { Code2, Layers, Database, Palette, Plug } from "lucide-react";
import { skills } from "@/data/portfolio";
import SectionTag from "./SectionTag";
import ScrollReveal from "./ScrollReveal";

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={22} />,
  Layers: <Layers size={22} />,
  Database: <Database size={22} />,
  Palette: <Palette size={22} />,
  Plug: <Plug size={22} />,
};

const skillColorClasses: Record<string, { icon: string; pill: string }> = {
  "#6c63ff": {
    icon: "bg-[#6c63ff15] text-[#6c63ff] border border-[#6c63ff30]",
    pill: "bg-[#6c63ff10] border-[#6c63ff30] text-[#6c63ff] hover:bg-[#6c63ff25] hover:shadow-[0_4px_15px_#6c63ff30]",
  },
  "#a78bfa": {
    icon: "bg-[#a78bfa15] text-[#a78bfa] border border-[#a78bfa30]",
    pill: "bg-[#a78bfa10] border-[#a78bfa30] text-[#a78bfa] hover:bg-[#a78bfa25] hover:shadow-[0_4px_15px_#a78bfa30]",
  },
  "#67e8f9": {
    icon: "bg-[#67e8f915] text-[#67e8f9] border border-[#67e8f930]",
    pill: "bg-[#67e8f910] border-[#67e8f930] text-[#67e8f9] hover:bg-[#67e8f925] hover:shadow-[0_4px_15px_#67e8f930]",
  },
  "#f472b6": {
    icon: "bg-[#f472b615] text-[#f472b6] border border-[#f472b630]",
    pill: "bg-[#f472b610] border-[#f472b630] text-[#f472b6] hover:bg-[#f472b625] hover:shadow-[0_4px_15px_#f472b630]",
  },
  "#4ade80": {
    icon: "bg-[#4ade8015] text-[#4ade80] border border-[#4ade8030]",
    pill: "bg-[#4ade8010] border-[#4ade8030] text-[#4ade80] hover:bg-[#4ade8025] hover:shadow-[0_4px_15px_#4ade8030]",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-[100px] relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[600px] max-h-[600px] rounded-full blur-[60px] pointer-events-none bg-[radial-gradient(circle,rgba(108,99,255,0.05)_0%,transparent_70%)]" />

      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionTag text="Kỹ Năng" />
          <h2 className="section-heading mt-4 mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-(--text-secondary) max-w-[480px] mx-auto text-[15px]">
            Các công nghệ và công cụ tôi sử dụng hàng ngày để xây dựng sản phẩm chất lượng
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
          {skills.map((category, catIdx) => (
            <ScrollReveal key={category.category} delay={catIdx * 0.1}>
              <div className="glass-card p-7 h-full">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${skillColorClasses[category.color]?.icon ?? "bg-(--accent-primary) text-white border border-transparent"}`}
                  >
                    {iconMap[category.icon]}
                  </div>
                  <h3 className="font-bold text-[16px] text-(--text-primary)">
                    {category.category}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <SkillPill
                      key={skill}
                      name={skill}
                      color={category.color}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Big tech logos strip */}
        <ScrollReveal delay={0.4}>
          <div className="mt-[60px] p-8 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-[20px] text-center">
            <p className="text-(--text-muted) text-[12px] tracking-[0.15em] uppercase mb-6 font-mono">
              Công nghệ chính
            </p>
            <div className="flex justify-center items-center gap-12 flex-wrap">
              {["React", "Next.js", "TypeScript", "Redux", "Tailwind", "D3.js", "Firebase"].map((tech) => (
                <div
                  key={tech}
                  className="text-[14px] font-semibold text-(--text-muted) font-mono transition-all duration-300 cursor-default px-3 py-1 rounded-lg hover:text-(--accent-secondary) hover:bg-[rgba(108,99,255,0.1)]"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function SkillPill({ name, color }: { name: string; color: string }) {
  const colorClass = skillColorClasses[color]?.pill ?? "bg-[var(--accent-primary)] border-transparent text-white";

  return (
    <span
      className={`inline-flex items-center px-3 py-1.5 border rounded-lg text-[13px] font-medium font-mono transition-all duration-400 ease-out cursor-default whitespace-nowrap hover:-translate-y-0.5 ${colorClass}`}
    >
      {name}
    </span>
  );
}
