"use client";

import { useEffect, useState } from "react";

type Star = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
};

export default function SpaceBackground() {
  const [stars, setStars] = useState<Star[]>([]);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // generate stars
    setStars(
      Array.from({ length: 120 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 5 + 1,
        duration: Math.random() * 10 + 5,
        delay: Math.random() * 10,
      }))
    );

    const detectTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    detectTheme();

    const observer = new MutationObserver(detectTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute top-[-10px] rounded-full animate-star-fall"
          style={{
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: isDark ? "#ffffff" : "#000000", // ✅ FIX
            opacity: 0.8,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
