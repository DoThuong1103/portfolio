"use client";

import { useEffect, useState, useRef } from "react";

interface TypewriterProps {
  words: string[];
  className?: string;
}

export function Typewriter({ words, className }: TypewriterProps) {
  const [currentWord, setCurrentWord] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const word = words[currentWord];
    let timeout: ReturnType<typeof setTimeout>;

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting) {
      if (currentText.length === 0) {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setCurrentWord((prev) => (prev + 1) % words.length);
        }, 0);
      } else {
        timeout = setTimeout(() => {
          setCurrentText((prev) => prev.slice(0, -1));
        }, 60);
      }
    } else {
      if (currentText.length === word.length) {
        timeout = setTimeout(() => {
          setIsPaused(true);
        }, 0);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(word.slice(0, currentText.length + 1));
        }, 100);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, currentWord, words]);

  return (
    <span className={className}>
      {currentText}
      <span className="cursor-blink text-(--accent
      -primary)">|</span>
    </span>
  );
}

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({ target, suffix = "", className }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !startedRef.current) {
          startedRef.current = true;
          let start = 0;
          const duration = 1500;
          const step = Math.ceil(target / (duration / 16));
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  );
}

interface UseInViewOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

export function useInView(options: UseInViewOptions = {}) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          if (options.triggerOnce) observer.disconnect();
        } else if (!options.triggerOnce) {
          setInView(false);
        }
      },
      { threshold: options.threshold ?? 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options.threshold, options.triggerOnce]);

  return { ref, inView };
}
