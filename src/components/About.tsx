"use client";

import { GraduationCap, Briefcase, Target, Coffee } from "lucide-react";
import { AnimatedCounter } from "./utils";
import { education } from "@/data/portfolio";
import SectionTag from "./SectionTag";
import ScrollReveal from "./ScrollReveal";
import SkillBar from "./SkillBar";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-[100px] relative">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <SectionTag text={t.about.tag} />
          <h2 className="section-heading mt-4 mb-4">
            {t.about.headingBefore}<span className="gradient-text">{t.about.headingGradient}</span>
          </h2>
          <p className="text-(--text-secondary) max-w-[500px] mx-auto">
            {t.about.subheading}
          </p>
        </div>

        <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start" delay={0.1}>
          {/* Left: About text */}
          <div>
            <div className="glass-card p-9 mb-6">
              <h3 className="text-[24px] font-bold mb-5 flex items-center gap-3">
                <span className="w-10 h-10 bg-[rgba(108,99,255,0.15)] rounded-[10px] flex items-center justify-center">
                  <Target size={20} className="text-(--accent-primary)" />
                </span>
                {t.about.personalGoalTitle}
              </h3>
              <p className="text-(--text-secondary) leading-[1.9] text-[15px]">
                {t.data.summary}
              </p>
            </div>

            {/* Education */}
            <div className="glass-card p-9">
              <h3 className="text-[20px] font-bold mb-5 flex items-center gap-3">
                <span className="w-10 h-10 bg-[rgba(167,139,250,0.15)] rounded-[10px] flex items-center justify-center">
                  <GraduationCap size={20} className="text-(--accent-secondary)" />
                </span>
                {t.about.educationTitle}
              </h3>
              <div className="pl-4 border-l-2 border-[rgba(167,139,250,0.3)]">
                <div className="text-[16px] font-semibold mb-1">{t.data.school}</div>
                <div className="text-(--accent-secondary) text-[14px] mb-2 font-mono">
                  {education.period}
                </div>
                <div className="text-(--text-secondary) text-[14px] mb-1">{t.data.degree}</div>
                <div className="inline-flex items-center gap-1.5 py-1 px-3 bg-[rgba(167,139,250,0.1)] border border-[rgba(167,139,250,0.3)] rounded-full text-xs text-(--accent-secondary) mt-2">
                  🎓 {t.data.grade}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Stats + Work style */}
          <div>
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {t.about.stats.map((stat, i) => (
                <div key={i} className="glass-card px-6 py-7 text-center">
                  <div className="text-[clamp(2rem,4vw,2.5rem)] font-black tracking-[-0.02em] mb-2 gradient-text">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-(--text-secondary) text-[13px]">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Work philosophy */}
            <div className="glass-card p-9">
              <h3 className="text-[18px] font-bold mb-5 flex items-center gap-3">
                <span className="w-10 h-10 bg-[rgba(103,232,249,0.15)] rounded-[10px] flex items-center justify-center">
                  <Briefcase size={20} className="text-(--accent-cyan)" />
                </span>
                {t.about.workStyleTitle}
              </h3>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Clean Code", value: 95 },
                  { label: "Pixel-perfect UI", value: 90 },
                  { label: "Performance", value: 88 },
                  { label: "Teamwork", value: 92 },
                ].map((item, idx) => (
                  <SkillBar key={item.label} label={item.label} value={item.value} delay={idx * 0.1} />
                ))}
              </div>
            </div>

            {/* Coffee fact */}
            <div className="flex items-center gap-3 py-4 px-5 bg-[rgba(244,114,182,0.06)] border border-[rgba(244,114,182,0.2)] rounded-xl mt-4 text-[13px] text-(--text-secondary)">
              <Coffee size={16} className="text-[#f472b6] shrink-0" />
              <span>{t.about.funFact}</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
