"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import type { Locale } from "@/i18n";

const languages: { locale: Locale; flag: string; label: string; short: string }[] = [
  { locale: 'vi', flag: 'VI', label: 'Tiếng Việt', short: 'VI' },
  { locale: 'en', flag: 'EN', label: 'English', short: 'EN' },
  { locale: 'ja', flag: 'JA', label: '日本語', short: 'JA' },
];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = languages.find(l => l.locale === locale) ?? languages[0];

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        id="language-switcher-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/4 text-(--text-secondary) text-[13px] font-medium transition-all duration-300 hover:border-[rgba(108,99,255,0.4)] hover:bg-[rgba(108,99,255,0.1)] hover:text-(--accent-primary) cursor-pointer"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        {/* <span className="text-base leading-none">{current.flag}</span> */}
        <span>{current.short}</span>
        <ChevronDown size={13} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-[calc(100%+8px)] bg-[rgba(10,10,20,0.97)] backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)] z-[9999] min-w-[155px] animate-[fadeIn_0.15s_ease]">
          {languages.map((lang) => (
            <button
              key={lang.locale}
              id={`lang-option-${lang.locale}`}
              onClick={() => { setLocale(lang.locale); setIsOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-[13px] transition-all duration-200 cursor-pointer border-none text-left ${
                locale === lang.locale
                  ? 'bg-[rgba(108,99,255,0.15)] text-(--accent-primary) font-semibold'
                  : 'bg-transparent text-(--text-secondary) hover:bg-white/5 hover:text-(--text-primary)'
              }`}
            >
              <span className="text-base">{lang.flag}</span>
              <span>{lang.label}</span>
              {locale === lang.locale && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-(--accent-primary)" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
