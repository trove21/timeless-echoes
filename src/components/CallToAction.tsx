export const CallToAction = () => {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 text-center border-t border-border/50 mt-24">
      <p className="text-label opacity-60 mb-6">READY TO BEGIN?</p>

      <a
        href="mailto:hello@doublerr.com"
        className="text-cta-link font-display editorial-underline inline-block"
      >
        Start a Conversation
      </a>

      <div className="mt-20 font-body text-xs opacity-40 space-y-1">
        <p>San Francisco • California</p>
        <p>© 2025 Double R</p>
      </div>
    </section>
  );
};
