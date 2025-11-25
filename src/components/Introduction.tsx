import heritageDetail from "@/assets/heritage-detail.jpg";

export const Introduction = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-label text-center mb-6 text-muted-foreground">
          O U R &nbsp; A P P R O A C H
        </p>

        <h2 className="text-section-title font-display text-center mb-8">
          Honoring Original Character
        </h2>

        <p className="text-body-large text-center max-w-3xl mx-auto mb-16 opacity-90">
          Every restoration begins with deep respect for the home's original architecture. We
          preserve historic details while introducing modern functionality that elevates daily life.
        </p>

        <div className="relative overflow-hidden rounded border border-card-border">
          <img
            src={heritageDetail}
            alt="Architectural detail of restored 1920s Victorian home showing elegant period molding and archway"
            className="w-full aspect-[21/9] object-cover grayscale hover:grayscale-0 transition-all duration-700"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
