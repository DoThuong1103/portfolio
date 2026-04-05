// Server Component
import { CheckCircle2 } from "lucide-react";
import { experiences } from "@/data/portfolio";
import SectionTag from "./SectionTag";
import ScrollReveal from "./ScrollReveal";

export default function Experience() {
  return (
    <section id="experience" className="py-[100px] relative">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionTag text="Kinh Nghiệm" />
          <h2 className="section-heading mt-4 mb-4">
            Lộ trình <span className="gradient-text">nghề nghiệp</span>
          </h2>
          <p className="text-(--text-secondary) max-w-[480px] mx-auto text-[15px]">
            Hành trình phát triển từ intern đến senior frontend developer
          </p>
        </div>

        <div className="max-w-[800px] mx-auto relative">
          {/* Timeline vertical line */}
          <div className="absolute left-5 top-6 bottom-6 w-0.5 bg-linear-to-b from-(--accent-primary) to-[rgba(108,99,255,0.1)]" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, idx) => (
              <ScrollReveal
                key={exp.id}
                delay={idx * 0.15}
                direction="left"
                className="pl-16 relative"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-3 top-7 w-[18px] h-[18px] rounded-full border-[3px] border-(--bg-primary) z-1 ${
                    exp.current ? 'bg-(--accent-primary) shadow-[0_0_16px_rgba(108,99,255,0.6)] animate-[pulseGlow_2s_ease-in-out_infinite]' : 'bg-(--text-muted)'
                  }`}
                />

                {/* Card */}
                <div className="glass-card py-7 px-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                    <div>
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <h3 className="text-[20px] font-bold">{exp.role}</h3>
                        {exp.current && (
                          <span className="py-0.5 px-2.5 bg-[rgba(34,197,94,0.12)] border border-[rgba(34,197,94,0.3)] rounded-full text-[11px] text-[#4ade80] font-semibold tracking-[0.05em]">
                            Hiện tại
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[15px] font-semibold text-(--accent-secondary)">
                          {exp.company}
                        </span>
                      </div>
                    </div>
                    <span className="py-1.5 px-3.5 bg-[rgba(108,99,255,0.1)] border border-[rgba(108,99,255,0.25)] rounded-lg text-[13px] text-(--accent-primary) font-mono shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  {/* Tasks */}
                  <ul className="flex flex-col gap-2.5 mb-5">
                    {exp.tasks.map((task, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-(--text-secondary) text-[14px] leading-[1.7]"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-(--accent-primary) shrink-0 mt-[3px]"
                        />
                        {task}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="py-[3px] px-2.5 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] rounded-md text-[12px] text-(--text-muted) font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
