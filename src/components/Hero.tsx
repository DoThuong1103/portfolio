"use client";

import { Mail, Phone, MapPin, ArrowDown, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { Typewriter } from "./utils";
import { personalInfo } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative pt-[120px] px-6 pb-[80px]"
    >
      {/* Grid lines decoration */}
      <div className="absolute inset-0 bg-size-[60px_60px] bg-[linear-gradient(rgba(108,99,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(108,99,255,0.04)_1px,transparent_1px)] mask-[radial-gradient(ellipse_at_center,black_30%,transparent_80%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />

      <div className="container-custom text-center relative z-1">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 py-[6px] px-4 bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.3)] rounded-full mb-8 text-[13px] text-[#4ade80] font-medium">
          <span className="status-dot" />
          {t.hero.available}
        </div>

        {/* Name */}
        <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-black tracking-[-0.03em] leading-[1.05] mb-5">
          <span className="block text-(--text-secondary) text-[45%] font-normal tracking-[0.2em] uppercase mb-3">
            {t.hero.helloIm}
          </span>
          <span className="gradient-text">{personalInfo.name}</span>
        </h1>

        {/* Role typewriter */}
        <div className="text-[clamp(1.1rem,3vw,1.6rem)] text-(--text-secondary) mb-6 font-normal h-10 flex items-center justify-center gap-2">
          <span className="text-(--accent-primary) font-semibold">&gt;</span>
          <Typewriter words={t.hero.typewriterWords} className="code-text" />
        </div>

        {/* Summary */}
        <p className="max-w-[620px] mx-auto mb-10 text-(--text-secondary) leading-[1.8] text-base">
          {t.data.summary}
        </p>

        {/* Quick info */}
        <div className="flex items-center justify-center gap-6 flex-wrap mb-12">
          <InfoChip icon={<Mail size={14} />} text={personalInfo.email} href={`mailto:${personalInfo.email}`} />
          <InfoChip icon={<Phone size={14} />} text={personalInfo.phone} href={`tel:${personalInfo.phone}`} />
          <InfoChip icon={<MapPin size={14} />} text={personalInfo.location} />
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center flex-wrap mb-16">
          <a href="#projects" className="btn-glow no-underline text-[15px] py-[14px] px-8 flex items-center gap-2">
            <Sparkles size={16} />
            {t.hero.viewProjects}
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 no-underline text-[15px] font-semibold px-8 py-[14px] rounded-xl border border-white/15 bg-white/3 text-(--text-primary) transition-all duration-300 hover:border-[rgba(108,99,255,0.5)] hover:bg-[rgba(108,99,255,0.1)]"
          >
            <Mail size={16} />
            {t.hero.contactMe}
          </a>
        </div>

        {/* Social links */}
        <div className="flex gap-4 justify-center mb-16">
          <SocialButton href={personalInfo.github} icon={<GithubIcon size={20} />} label="GitHub" />
          <SocialButton href={personalInfo.linkedin} icon={<LinkedinIcon size={20} />} label="LinkedIn" />
        </div>

        {/* Scroll indicator */}
        <div className="float-animation flex flex-col items-center gap-2 text-(--text-muted) text-xs">
          <span className="tracking-widest uppercase">{t.hero.scroll}</span>
          <ArrowDown size={16} />
        </div>
      </div>

      {/* Floating orbs */}
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full blur-2xl pointer-events-none bg-[radial-gradient(circle,rgba(108,99,255,0.1)_0%,transparent_70%)] animate-[float_6s_ease-in-out_infinite]" />
      <div className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] rounded-full blur-2xl pointer-events-none bg-[radial-gradient(circle,rgba(103,232,249,0.08)_0%,transparent_70%)] animate-[float_8s_ease-in-out_infinite_reverse]" />
    </section>
  );
}

function InfoChip({ icon, text, href }: { icon: React.ReactNode; text: string; href?: string }) {
  const content = (
    <span className="inline-flex items-center gap-[6px] text-(--text-secondary) text-[14px] transition-colors duration-300 group-hover:text-(--text-primary)">
      <span className="text-(--accent-primary)">{icon}</span>
      {text}
    </span>
  );
  if (href) return <a href={href} className="no-underline group">{content}</a>;
  return content;
}

function SocialButton({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-11 h-11 flex items-center justify-center no-underline rounded-xl bg-white/4 border border-white/10 text-(--text-secondary) transition-all duration-300 hover:bg-[rgba(108,99,255,0.15)] hover:border-[rgba(108,99,255,0.4)] hover:text-(--accent-primary) hover:-translate-y-[3px]"
    >
      {icon}
    </a>
  );
}
