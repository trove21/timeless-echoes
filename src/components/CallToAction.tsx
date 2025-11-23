export const CallToAction = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-hero font-display mb-8">
          <span className="block">Ready to Restore</span>
          <span className="block">Your Historic Home?</span>
        </h2>

        <p className="text-body-large mb-12 opacity-80">
          Let's discuss your vision
        </p>

        <a
          href="mailto:info@doublerr.com"
          className="inline-block bg-heritage-green hover:bg-heritage-green-hover text-foreground font-body font-semibold text-label px-16 py-6 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(27,58,52,0.5)]"
        >
          SCHEDULE CONSULTATION
        </a>
      </div>
    </section>
  );
};
