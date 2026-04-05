"use client";

import { useState } from "react";
import { Calendar, Users, CheckCircle2, ChevronRight, BarChart3, Hexagon, ShoppingCart } from "lucide-react";
import { Project } from "../data/portfolio";

const iconMap: Record<string, React.ReactNode> = {
  BarChart3: <BarChart3 size={28} />,
  Hexagon: <Hexagon size={28} />,
  ShoppingCart: <ShoppingCart size={28} />,
};

interface ProjectCardProps {
  project: Project; // Type from portfolio.ts
}

const accentClassMap: Record<string, {
  band: string;
  iconWrap: string;
  badge: string;
  techTag: string;
  text: string;
  divider: string;
}> = {
  "#6c63ff": {
    band: "bg-[linear-gradient(90deg,#6c63ff,transparent)]",
    iconWrap: "bg-[linear-gradient(135deg,#6c63ff30,#6c63ff10)] border border-[#6c63ff30] text-[#6c63ff]",
    badge: "text-[#6c63ff] bg-[#6c63ff12] border border-[#6c63ff25]",
    techTag: "bg-[#6c63ff10] border border-[#6c63ff25] text-[#6c63ff]",
    text: "text-[#6c63ff]",
    divider: "border-t border-[#6c63ff20]",
  },
  "#f472b6": {
    band: "bg-[linear-gradient(90deg,#f472b6,transparent)]",
    iconWrap: "bg-[linear-gradient(135deg,#f472b630,#f472b610)] border border-[#f472b630] text-[#f472b6]",
    badge: "text-[#f472b6] bg-[#f472b612] border border-[#f472b625]",
    techTag: "bg-[#f472b610] border border-[#f472b625] text-[#f472b6]",
    text: "text-[#f472b6]",
    divider: "border-t border-[#f472b620]",
  },
  "#67e8f9": {
    band: "bg-[linear-gradient(90deg,#67e8f9,transparent)]",
    iconWrap: "bg-[linear-gradient(135deg,#67e8f930,#67e8f910)] border border-[#67e8f930] text-[#67e8f9]",
    badge: "text-[#67e8f9] bg-[#67e8f912] border border-[#67e8f925]",
    techTag: "bg-[#67e8f910] border border-[#67e8f925] text-[#67e8f9]",
    text: "text-[#67e8f9]",
    divider: "border-t border-[#67e8f920]",
  },
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const accentClasses = accentClassMap[project.accentColor] ?? {
    band: "bg-[linear-gradient(90deg,var(--accent-primary),transparent)]",
    iconWrap: "bg-[linear-gradient(135deg,rgba(108,99,255,0.3),rgba(108,99,255,0.1))] border border-[rgba(108,99,255,0.3)] text-[var(--accent-primary)]",
    badge: "text-[var(--accent-primary)] bg-[rgba(108,99,255,0.12)] border border-[rgba(108,99,255,0.25)]",
    techTag: "bg-[rgba(108,99,255,0.1)] border border-[rgba(108,99,255,0.25)] text-[var(--accent-primary)]",
    text: "text-[var(--accent-primary)]",
    divider: "border-t border-[rgba(108,99,255,0.2)]",
  };

  return (
    <div
      className="project-card cursor-pointer group"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Card top gradient band */}
      <div className={`h-1 w-full ${accentClasses.band}`} />

      <div className="p-8">
        {/* Project header */}
        <div className="flex items-start gap-4 mb-5">
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${accentClasses.iconWrap}`}
          >
            {iconMap[project.icon]}
          </div>
          <div className="flex-1">
            <h3 className="text-[20px] font-extrabold tracking-[-0.01em] mb-1">
              {project.name}
            </h3>
            <span
              className={`text-[11px] font-mono py-0.5 px-2.5 rounded-full ${accentClasses.badge}`}
            >
              {project.highlight}
            </span>
          </div>
        </div>

        {/* Meta info */}
        <div className="flex flex-wrap gap-4 mb-4">
          <MetaItem icon={<Calendar size={13} />} text={project.period} />
          <MetaItem icon={<Users size={13} />} text={`${project.teamSize} thành viên`} />
        </div>

        {/* Description */}
        <p className="text-(--text-secondary) text-[14px] leading-[1.8] mb-5">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t: string) => (
            <span
              key={t}
              className={`py-1 px-2.5 rounded-lg text-[12px] font-mono font-medium ${accentClasses.techTag}`}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Expand button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
          className={`flex items-center gap-1.5 bg-transparent border-none text-[13px] font-semibold cursor-pointer p-0 transition-all duration-300 group-hover:gap-2 ${accentClasses.text}`}
        >
          {isExpanded ? "Thu gọn" : "Xem chi tiết"}
          <ChevronRight
            size={16}
            className={`transition-transform duration-300 ${isExpanded ? "rotate-90" : "rotate-0"}`}
          />
        </button>

        {/* Expanded responsibilities */}
        {isExpanded && (
          <div className={`mt-5 pt-5 animate-[fadeIn_0.3s_ease] ${accentClasses.divider}`}>
            <div className="text-[13px] font-semibold text-(--text-secondary) mb-3 uppercase tracking-[0.08em]">
              Trách nhiệm
            </div>
            <ul className="flex flex-col gap-2">
              {project.responsibilities.map((resp: string, i: number) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-(--text-secondary) text-[13px] leading-[1.7]"
                >
                  <CheckCircle2 size={14} className={`shrink-0 mt-[3px] ${accentClasses.text}`} />
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

function MetaItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-1.5 text-(--text-muted) text-[13px]">
      <span className="text-(--text-muted)">{icon}</span>
      {text}
    </div>
  );
}
