"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.projects, href: "#projects" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navItems.map((item) => item.href.slice(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-1000 transition-all duration-400 ease-out border-b  ${
        scrolled
          ? "bg-[rgba(10,10,15,0.85)] backdrop-blur-xl  border-[rgba(255,255,255,0.06)]"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 no-underline">
          <div className="w-9 h-9 [background:var(--gradient-primary)] rounded-[10px] flex items-center justify-center">
            <Code2 size={18} color="white" />
          </div>
          <span className="font-bold text-[18px] tracking-[-0.02em] [background:var(--gradient-primary)] bg-clip-text! text-transparent">
            Đỗ Bá Thượng
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link relative transition-colors duration-300 ease-in-out [background:var(--gradient-primary)] bg-clip-text! ${activeSection === item.href.slice(1) ? "text-transparent!" : "text-(--text-secondary) hover:text-transparent!"}`}
            >
              {item.label}
              {activeSection === item.href.slice(1) && (
                <span className="absolute -bottom-0.5 left-0 w-full h-[2px] [background:var(--gradient-primary)] rounded-sm" />
              )}
            </a>
          ))}
          <LanguageSwitcher />
          <a href="#contact" className="btn-glow no-underline text-[13px] py-2 px-5">
            {t.nav.contactBtn}
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex bg-transparent border-none text-(--text-primary) cursor-pointer p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[rgba(10,10,15,0.97)] backdrop-blur-xl pt-4 px-6 pb-6 border-t border-[rgba(255,255,255,0.06)]">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link block py-3 text-(--text-secondary) text-[15px] border-b border-[rgba(255,255,255,0.04)]"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn-glow inline-block mt-4 no-underline">
            {t.nav.contactBtn}
          </a>
        </div>
      )}
    </nav>
  );
}
