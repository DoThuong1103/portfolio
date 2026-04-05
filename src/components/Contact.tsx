"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { personalInfo } from "@/data/portfolio";
import SectionTag from "./SectionTag";
import ScrollReveal from "./ScrollReveal";
import ContactForm from "./ContactForm";
import { useLanguage } from "@/context/LanguageContext";

const contactColorClasses: Record<string, { iconBox: string; social: string }> = {
  "#6c63ff": {
    iconBox: "bg-[#6c63ff15] border-[#6c63ff30] text-[#6c63ff]",
    social: "bg-[#6c63ff10] border-[#6c63ff25] text-[#6c63ff] hover:bg-[#6c63ff20]",
  },
  "#a78bfa": {
    iconBox: "bg-[#a78bfa15] border-[#a78bfa30] text-[#a78bfa]",
    social: "bg-[#a78bfa10] border-[#a78bfa25] text-[#a78bfa] hover:bg-[#a78bfa20]",
  },
  "#67e8f9": {
    iconBox: "bg-[#67e8f915] border-[#67e8f930] text-[#67e8f9]",
    social: "bg-[#67e8f910] border-[#67e8f925] text-[#67e8f9] hover:bg-[#67e8f920]",
  },
};

export default function Contact() {
  const { t, locale } = useLanguage();

  const contactLinks = [
    { icon: <Mail size={20} />, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: "#6c63ff" },
    { icon: <Phone size={20} />, label: t.contact.phoneLabel, value: personalInfo.phone, href: `tel:${personalInfo.phone}`, color: "#a78bfa" },
    { icon: <MapPin size={20} />, label: t.contact.addressLabel, value: personalInfo.location, href: "#", color: "#67e8f9" },
  ];

  return (
    <section id="contact" className="py-[100px] pb-[120px] relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[800px] max-h-[400px] pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(108,99,255,0.08)_0%,transparent_70%)]" />

      <div className="container-custom relative">
        <div className="text-center mb-16">
          <SectionTag text={t.contact.tag} />
          <h2 className="section-heading mt-4 mb-4">
            {t.contact.headingBefore}<span className="gradient-text">{t.contact.headingGradient}</span>
          </h2>
          <p className="text-(--text-secondary) max-w-[480px] mx-auto text-[15px]">
            {t.contact.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8 items-start">
          {/* Left: Contact info */}
          <ScrollReveal direction="right" delay={0.1}>
            <div className="flex flex-col gap-5">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="glass-card p-6 no-underline flex items-center gap-4 transition-all duration-300 hover:translate-x-1.5"
                >
                  <div className={`w-12 h-12 rounded-[14px] flex items-center justify-center shrink-0 border ${contactColorClasses[link.color]?.iconBox ?? "bg-(--accent-primary) border-transparent text-white"}`}>
                    {link.icon}
                  </div>
                  <div>
                    <div className="text-[12px] text-(--text-muted) mb-1 uppercase tracking-[0.08em]">{link.label}</div>
                    <div className="text-[14px] font-medium text-(--text-primary)">{link.value}</div>
                  </div>
                </a>
              ))}

              {/* Social links */}
              <div className="glass-card p-6">
                <div className="text-[13px] text-(--text-muted) mb-4 uppercase tracking-[0.08em]">
                  {t.contact.socialTitle}
                </div>
                <div className="flex gap-3">
                  <SocialLink href={personalInfo.github} icon={<GithubIcon size={18} />} label="GitHub" color="#6c63ff" />
                  <SocialLink href={personalInfo.linkedin} icon={<LinkedinIcon size={18} />} label="LinkedIn" color="#a78bfa" />
                </div>
              </div>

              {/* Availability */}
              <div className="py-5 px-6 bg-[rgba(34,197,94,0.06)] border border-[rgba(34,197,94,0.2)] rounded-2xl flex items-center gap-3">
                <span className="status-dot" />
                <div>
                  <div className="text-[13px] font-semibold text-[#4ade80] mb-0.5">{t.contact.availableTitle}</div>
                  <div className="text-[12px] text-(--text-muted)">{t.contact.replyTime}</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Contact form — key on locale forces remount when language changes */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="glass-card p-10">
              <ContactForm key={locale} />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label, color }: { href: string; icon: React.ReactNode; label: string; color: string }) {
  const socialColorClass = contactColorClasses[color]?.social ?? "bg-[var(--accent-primary)] border-transparent text-white";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`flex items-center gap-2 py-2.5 px-4 border rounded-[10px] no-underline text-[13px] font-medium transition-all duration-300 hover:-translate-y-0.5 ${socialColorClass}`}
    >
      {icon} {label}
    </a>
  );
}
