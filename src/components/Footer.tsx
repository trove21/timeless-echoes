export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="font-display text-3xl tracking-[0.2em] mb-8">DOUBLE R</div>

        <div className="space-y-2 mb-8 font-body text-sm opacity-80">
          <p>576 Vintage Lane</p>
          <p>San Francisco, CA 94110</p>
        </div>

        <div className="space-y-2 mb-12 font-body">
          <p>
            <a href="tel:4155551920" className="hover:text-heritage-green transition-colors">
              (415) 555-1920
            </a>
          </p>
          <p>
            <a href="mailto:hello@doublerr.com" className="hover:text-heritage-green transition-colors">
              hello@doublerr.com
            </a>
          </p>
        </div>

        <div className="h-px w-32 bg-border mx-auto mb-12" />

        <div className="flex items-center justify-center gap-8 mb-12 font-body text-sm">
          <a href="#" className="opacity-60 hover:opacity-100 hover:text-heritage-green transition-all">
            Instagram
          </a>
          <a href="#" className="opacity-60 hover:opacity-100 hover:text-heritage-green transition-all">
            Pinterest
          </a>
          <a href="#" className="opacity-60 hover:opacity-100 hover:text-heritage-green transition-all">
            Houzz
          </a>
        </div>

        <p className="font-body text-xs opacity-60">
          © {currentYear} Double R Renovations. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
