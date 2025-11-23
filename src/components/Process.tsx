import { useParallax } from "@/hooks/useScrollAnimation";

const steps = [
  {
    number: "I",
    title: "Architectural Discovery",
    description: "Deep analysis of your home's original design intent and structural integrity.",
  },
  {
    number: "II",
    title: "Historical Research",
    description: "Sourcing period-appropriate materials and understanding architectural context.",
  },
  {
    number: "III",
    title: "Artisan Restoration",
    description: "Expert craftspeople employ traditional techniques to preserve authenticity.",
  },
  {
    number: "IV",
    title: "Modern Integration",
    description: "Seamlessly incorporate contemporary systems while honoring historic character.",
  },
];

export const Process = () => {
  const chapterRef = useParallax({ speed: 0.2 });

  return (
    <section id="philosophy" className="relative py-24 md:py-32 lg:py-40 px-6 md:px-10 lg:px-16">
      <div
        ref={chapterRef}
        className="text-chapter-number font-display absolute top-0 left-0 pointer-events-none select-none"
        style={{ top: 0, left: '-1.25rem' }}
      >
        03
      </div>

      <div className="max-w-5xl mx-auto pt-24">
        <h2 className="text-editorial-title font-display mb-16">THE METHOD</h2>

        <div className="space-y-0">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex items-start gap-6 md:gap-10 py-10 border-b border-border/50 transition-all duration-300 hover:pl-5 hover:bg-muted/20"
            >
              <span className="font-display text-2xl opacity-50 pt-1">{step.number}</span>

              <div className="flex-1">
                <h3 className="font-display text-3xl md:text-4xl font-light mb-4">
                  {step.title}
                </h3>
                <p className="text-editorial-body text-base">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
