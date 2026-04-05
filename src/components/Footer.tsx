"use client";

import { Mail, Heart, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { personalInfo } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const socialLinks = [
    { href: personalInfo.github, icon: <GithubIcon size={16} />, label: "GitHub" },
    { href: personalInfo.linkedin, icon: <LinkedinIcon size={16} />, label: "LinkedIn" },
    { href: `mailto:${personalInfo.email}`, icon: <Mail size={16} />, label: "Email" },
  ];

  return (
    <footer className="border-t border-white/6 py-10 bg-[rgba(10,10,15,0.8)]">
      <div className="container-custom flex items-center justify-between flex-wrap gap-5">
        {/* Logo & copyright */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-[8px] flex items-center justify-center bg-(--gradient-primary)">
            <Code2 size={16} className="text-white" />
          </div>
          <div>
            <div className="font-bold text-[14px]">{personalInfo.name}</div>
            <div className="text-[12px] flex items-center gap-1 text-(--text-muted)">
              © {year} · {t.footer.madeWith}{" "}
              <Heart size={11} className="text-[#f472b6]" /> in {t.footer.location}
            </div>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="w-9 h-9 flex items-center justify-center no-underline rounded-[8px] bg-white/4 border border-white/8 text-(--text-muted) transition-all duration-300 hover:text-(--accent-primary) hover:border-[rgba(108,99,255,0.4)] hover:bg-[rgba(108,99,255,0.1)]"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
