import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { EditorialSpread } from "@/components/EditorialSpread";
import { Process } from "@/components/Process";
import { CallToAction } from "@/components/CallToAction";

import victorianImage from "@/assets/project-victorian.jpg";
import craftsmanImage from "@/assets/project-craftsman.jpg";
import tudorImage from "@/assets/project-tudor.jpg";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <Hero />

      <EditorialSpread
        chapterNumber="02"
        title="Pacific Heights Victorian"
        description="Originally built in 1924, this residence required a delicate balance of preservation and modernization. We stripped back layers of mid-century interventions to reveal the original soul of the home."
        pullQuote="They didn't just renovate the house; they curated its history."
        image={victorianImage}
        alt="Restored 1924 Pacific Heights Victorian home showcasing elegant period architecture"
        imageLeft={true}
      />

      <EditorialSpread
        chapterNumber="03"
        title="Berkeley Craftsman"
        description="This 1922 Craftsman Bungalow presented unique challenges in balancing original woodwork with contemporary living standards. Every detail honored the Arts and Crafts movement's dedication to craftsmanship."
        pullQuote="The integrity of the original design remained paramount throughout the restoration."
        image={craftsmanImage}
        alt="Beautifully preserved 1922 Craftsman Bungalow with authentic period details"
        imageLeft={false}
      />

      <EditorialSpread
        chapterNumber="04"
        title="Tudor Revival Kitchen"
        description="A complete reimagining of a 1926 Tudor Revival kitchen that respects period authenticity while introducing modern culinary functionality. Period-appropriate cabinetry meets state-of-the-art appliances."
        image={tudorImage}
        alt="Meticulously restored Tudor Revival kitchen blending heritage and modernity"
        imageLeft={true}
      />

      <Process />
      <CallToAction />
    </div>
  );
};

export default Index;
