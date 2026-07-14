"use client";

import { useState, useEffect, useCallback } from "react";

interface UseTypewriterOptions {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

/**
 * Typewriter effect hook — cycles through an array of strings
 * with typing and deleting animation.
 */
export function useTypewriter({
  texts,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
}: UseTypewriterOptions) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentFullText = texts[textIndex];

    if (isDeleting) {
      setDisplayText(currentFullText.substring(0, displayText.length - 1));
    } else {
      setDisplayText(currentFullText.substring(0, displayText.length + 1));
    }
  }, [displayText, isDeleting, textIndex, texts]);

  useEffect(() => {
    const currentFullText = texts[textIndex];

    // Determine the timeout duration
    let timeout: number;
    if (!isDeleting && displayText === currentFullText) {
      // Pause at the end of typing
      timeout = pauseDuration;
      setTimeout(() => setIsDeleting(true), pauseDuration);
      return;
    } else if (isDeleting && displayText === "") {
      // Move to next text
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
      timeout = 300;
    } else {
      timeout = isDeleting ? deletingSpeed : typingSpeed;
    }

    const timer = setTimeout(tick, timeout);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex, texts, tick, typingSpeed, deletingSpeed, pauseDuration]);

  return { displayText, isDeleting };
}
