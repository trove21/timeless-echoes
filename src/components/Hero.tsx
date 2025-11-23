import { useParallax } from "@/hooks/useScrollAnimation";

export const Hero = () => {
  const chapterRef = useParallax({ speed: 0.2 });

  return (
    <section id="home" className="min-h-screen flex items-center relative px-6 md:px-10 lg:px-16">
      <div
        ref={chapterRef}
        className="text-chapter-number font-display absolute top-0 left-0 pointer-events-none select-none"
        style={{ top: '-3.125rem', left: '-1.25rem' }}
      >
        01
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 mt-24">
        <h1 className="text-hero font-display">
          WE RESTORE<br />
          HERITAGE<br />
          FOR MODERN<br />
          LIVING.
        </h1>
      </div>

      <div className="absolute bottom-10 left-6 md:left-10 lg:left-16 font-body text-label opacity-60">
        Double R Renovations<br />
        Est. 2024
      </div>
    </section>
  );
};
