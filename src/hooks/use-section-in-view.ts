"use client";

import { useEffect, useRef, useState } from "react";

interface UseSectionInViewOptions {
  threshold?: number;
  rootMargin?: string;
}

/**
 * Intersection Observer hook to detect when a section enters the viewport.
 * Returns a ref to attach and a boolean indicating visibility.
 */
export function useSectionInView(options: UseSectionInViewOptions = {}) {
  const { threshold = 0.3, rootMargin = "0px" } = options;
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isInView };
}
