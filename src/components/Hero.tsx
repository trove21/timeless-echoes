import { ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-hero font-display mb-8 opacity-0 animate-fade-in-up">
          <span className="block">RESTORING</span>
          <span className="block stagger-1">HERITAGE,</span>
          <span className="block stagger-2">EMBRACING</span>
          <span className="block stagger-3">TOMORROW</span>
        </h1>

        <div className="h-0.5 w-16 mx-auto bg-heritage-green mb-8 opacity-0 animate-fade-in stagger-3" />

        <p className="text-body-large max-w-2xl mx-auto opacity-70 opacity-0 animate-fade-in stagger-4">
          Since 1920s homes deserve contemporary refinement
        </p>

        <a
          href="#portfolio"
          className="inline-flex items-center gap-2 mt-16 text-label hover:text-heritage-green transition-colors opacity-0 animate-fade-in stagger-4"
        >
          <ChevronDown className="w-4 h-4 animate-bounce" />
          SCROLL TO EXPLORE
        </a>
      </div>
    </section>
  );
};
