"use client";

import { ReactNode } from "react";
import { useInView } from "./utils";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number; // seconds
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  threshold?: number;
}

export default function ScrollReveal({ 
  children, 
  delay = 0, 
  direction = 'up', 
  className = '', 
  threshold = 0.1 
}: ScrollRevealProps) {
  const { ref, inView } = useInView({ threshold, triggerOnce: true });

  const getDelayClass = (value: number) => {
    switch (value) {
      case 0:
        return "delay-0";
      case 0.1:
        return "delay-100";
      case 0.15:
        return "delay-150";
      case 0.2:
        return "delay-200";
      case 0.3:
        return "delay-300";
      case 0.4:
        return "delay-[400ms]";
      default:
        return "delay-0";
    }
  };
  
  let translateClass = '';
  switch (direction) {
    case 'up': translateClass = 'translate-y-10'; break;
    case 'down': translateClass = '-translate-y-10'; break;
    case 'left': translateClass = 'translate-x-[40px]'; break;
    case 'right': translateClass = '-translate-x-[40px]'; break;
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${getDelayClass(delay)} ${className} ${inView ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${translateClass}`}`}
    >
      {children}
    </div>
  );
}
