import { useKenBurns, useParallax } from "@/hooks/useScrollAnimation";

interface EditorialSpreadProps {
  chapterNumber: string;
  title: string;
  description: string;
  pullQuote?: string;
  image: string;
  alt: string;
  imageLeft?: boolean;
}

export const EditorialSpread = ({
  chapterNumber,
  title,
  description,
  pullQuote,
  image,
  alt,
  imageLeft = true,
}: EditorialSpreadProps) => {
  const imageRef = useKenBurns({ maxScale: 1.15, speed: 0.15 });
  const chapterRef = useParallax({ speed: 0.2 });

  return (
    <section className="relative py-24 md:py-32 lg:py-40 px-6 md:px-10 lg:px-16">
      <div
        ref={chapterRef}
        className="text-chapter-number font-display absolute pointer-events-none select-none"
        style={{
          top: 0,
          [imageLeft ? 'left' : 'right']: imageLeft ? '-1.25rem' : '-3.125rem',
        }}
      >
        {chapterNumber}
      </div>

      <div className="max-w-7xl mx-auto">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
            imageLeft ? '' : 'lg:grid-flow-dense'
          }`}
        >
          <div className={`relative overflow-hidden ${imageLeft ? '' : 'lg:col-start-2'}`}>
            <div className="aspect-[3/4] lg:aspect-[2/3] overflow-hidden">
              <img
                ref={imageRef}
                src={image}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-100 grayscale-[20%]"
                loading="lazy"
              />
            </div>
          </div>

          <div className={`relative z-10 ${imageLeft ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
            <h2 className="text-editorial-title font-display mb-10 pt-5 border-t border-border">
              {title}
            </h2>

            <p className="text-editorial-body mb-10">{description}</p>

            {pullQuote && (
              <blockquote className="text-pull-quote font-display my-10 pl-8 border-l-2 border-foreground">
                "{pullQuote}"
              </blockquote>
            )}

            <a
              href="#"
              className="text-label border-b border-foreground pb-1 inline-block hover:text-heritage-green hover:border-heritage-green transition-colors"
            >
              VIEW CASE STUDY
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
