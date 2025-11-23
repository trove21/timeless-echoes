import { ProjectCard } from "./ProjectCard";
import victorianImage from "@/assets/project-victorian.jpg";
import craftsmanImage from "@/assets/project-craftsman.jpg";
import tudorImage from "@/assets/project-tudor.jpg";

const projects = [
  {
    title: "Pacific Heights Victorian",
    year: "1924",
    location: "SAN FRANCISCO",
    image: victorianImage,
    alt: "Restored 1924 Pacific Heights Victorian home with elegant bay windows and period details",
  },
  {
    title: "Craftsman Bungalow",
    year: "1922",
    location: "BERKELEY",
    image: craftsmanImage,
    alt: "Beautifully restored 1922 Craftsman Bungalow with classic front porch and natural wood details",
  },
  {
    title: "Tudor Revival Kitchen",
    year: "1926",
    location: "OAKLAND",
    image: tudorImage,
    alt: "Meticulously restored 1926 Tudor Revival kitchen with period cabinetry and modern functionality",
  },
];

export const FeaturedProjects = () => {
  return (
    <section id="portfolio" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-label text-center mb-16 text-muted-foreground">
          S E L E C T E D &nbsp; W O R K
        </p>

        <div className="space-y-20">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
