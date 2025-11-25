interface ProjectCardProps {
  title: string;
  year: string;
  location: string;
  image: string;
  alt: string;
}

export const ProjectCard = ({ title, year, location, image, alt }: ProjectCardProps) => {
  return (
    <article className="bg-card-elevated border border-card-border rounded hover-float hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-600">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700"
          loading="lazy"
        />
      </div>

      <div className="p-10">
        <h3 className="text-project-title font-display mb-4">{title}</h3>

        <p className="text-label text-muted-foreground mb-6">
          {year} &nbsp;•&nbsp; {location}
        </p>

        <div className="h-0.5 w-10 bg-heritage-green" />
      </div>
    </article>
  );
};
