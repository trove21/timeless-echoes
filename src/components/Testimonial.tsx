export const Testimonial = () => {
  return (
    <section className="py-32 px-6 bg-heritage-green/8">
      <div className="max-w-4xl mx-auto text-center">
        <blockquote>
          <p className="text-3xl md:text-4xl font-display font-light italic leading-relaxed mb-8">
            "Double R restored our 1925 Victorian with such care and respect for its history, while
            giving us the modern kitchen of our dreams."
          </p>

          <footer className="font-body">
            <cite className="not-italic">
              <div className="font-semibold text-lg mb-1">Sarah & Michael Patterson</div>
              <div className="text-label text-muted-foreground">NOB HILL, SAN FRANCISCO</div>
            </cite>
          </footer>
        </blockquote>

        <div className="flex items-center justify-center gap-3 mt-12">
          <button className="w-2 h-2 rounded-full bg-muted-foreground/30" aria-label="Testimonial 1" />
          <button className="w-2 h-2 rounded-full bg-heritage-green" aria-label="Testimonial 2" />
          <button className="w-2 h-2 rounded-full bg-muted-foreground/30" aria-label="Testimonial 3" />
        </div>
      </div>
    </section>
  );
};
