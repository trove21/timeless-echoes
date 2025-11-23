import { useEffect, useRef } from 'react';

interface KenBurnsOptions {
  maxScale?: number;
  speed?: number;
}

export const useKenBurns = (options: KenBurnsOptions = {}) => {
  const ref = useRef<HTMLImageElement>(null);
  const { maxScale = 1.15, speed = 0.15 } = options;

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const percent = (windowHeight - rect.top) / (windowHeight + rect.height);
        const scale = 1.0 + (percent * speed);
        const clampedScale = Math.min(scale, maxScale);
        ref.current.style.transform = `scale(${clampedScale})`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [maxScale, speed]);

  return ref;
};

interface ParallaxOptions {
  speed?: number;
}

export const useParallax = (options: ParallaxOptions = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { speed = 0.2 } = options;

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.parentElement?.getBoundingClientRect();
      if (!rect) return;

      const offset = (window.innerHeight - rect.top) * speed;
      ref.current.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return ref;
};
