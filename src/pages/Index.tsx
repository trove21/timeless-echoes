import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Introduction } from "@/components/Introduction";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Process } from "@/components/Process";
import { Testimonial } from "@/components/Testimonial";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Introduction />
      <FeaturedProjects />
      <Process />
      <Testimonial />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
