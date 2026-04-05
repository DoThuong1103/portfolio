"use client";

import { useInView } from "./utils";

const getWidthClass = (value: number) => {
  switch (value) {
    case 88:
      return "w-[88%]";
    case 90:
      return "w-[90%]";
    case 92:
      return "w-[92%]";
    case 95:
      return "w-[95%]";
    default:
      return "w-0";
  }
};

const getDelayClass = (delay: number) => {
  switch (delay) {
    case 0:
      return "delay-300";
    case 0.1:
      return "delay-[400ms]";
    case 0.2:
      return "delay-500";
    case 0.3:
      return "delay-[600ms]";
    default:
      return "delay-300";
  }
};

export default function SkillBar({ label, value, delay = 0 }: { label: string; value: number; delay?: number }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  
  return (
    <div ref={ref}>
      <div className="flex justify-between mb-1.5 text-sm">
        <span className="text-(--text-secondary)">{label}</span>
        <span className="text-(--accent-primary) font-semibold">{value}%</span>
      </div>
      <div className="h-1 bg-[rgba(255,255,255,0.06)] rounded-sm overflow-hidden">
        <div
          className={`h-full bg-linear-to-r from-(--accent-primary) via-(--accent-secondary) to-(--accent-cyan) rounded-sm transition-[width] duration-1000 ease-in-out ${getDelayClass(delay)} ${inView ? getWidthClass(value) : "w-0"}`}
        />
      </div>
    </div>
  );
}
