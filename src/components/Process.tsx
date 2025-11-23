import { Home, Palette, FileCheck, Hammer, Key } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Home,
    title: "INITIAL VISIT",
    description: "We begin by understanding your vision and evaluating your home's historic character.",
  },
  {
    number: "02",
    icon: Palette,
    title: "DESIGN PHASE",
    description: "Develop architectural plans that honor period details while meeting modern needs.",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "PERMIT PHASE",
    description: "Navigate historic preservation requirements and secure necessary approvals.",
  },
  {
    number: "04",
    icon: Hammer,
    title: "RESTORE PHASE",
    description: "Expert craftspeople meticulously restore your home with period-appropriate techniques.",
  },
  {
    number: "05",
    icon: Key,
    title: "REVEAL",
    description: "Experience your beautifully restored home, ready for contemporary living.",
  },
];

export const Process = () => {
  return (
    <section id="process" className="py-32 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <p className="text-label text-center mb-6 text-muted-foreground">
          O U R &nbsp; P R O C E S S
        </p>

        <h2 className="text-section-title font-display text-center mb-20">
          Five Steps to Restoration
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-card-elevated border border-card-border rounded p-8 hover-float hover:border-heritage-green/40 transition-all duration-500"
            >
              <div className="text-7xl font-display font-light text-heritage-green/10 mb-6">
                {step.number}
              </div>

              <step.icon className="w-12 h-12 text-heritage-green mb-6" strokeWidth={1} />

              <h3 className="text-xl font-display font-semibold mb-4 tracking-wider">
                {step.title}
              </h3>

              <p className="text-sm font-body opacity-80 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
