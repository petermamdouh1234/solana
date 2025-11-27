import ProjectCard from "./ProjectCard";
import townhouse1 from "@/assets/townhouse-1.jpg";
import townhouse2 from "@/assets/townhouse-2.jpg";
import townhouse3 from "@/assets/townhouse-3.jpg";
import townhouse4 from "@/assets/townhouse-4.jpg";
import townhouse5 from "@/assets/townhouse-5.jpg";
import twinhouse1 from "@/assets/twinhouse-1.jpg";
import twinhouse2 from "@/assets/twinhouse-2.jpg";
import twinhouse3 from "@/assets/twinhouse-3.jpg";
import twinhouse4 from "@/assets/twinhouse-4.jpg";
import twinhouse5 from "@/assets/twinhouse-5.jpg";
import villa1 from "@/assets/villa-1.jpg";
import villa2 from "@/assets/villa-2.jpg";
import villa3 from "@/assets/villa-3.jpg";
import villa4 from "@/assets/villa-4.jpg";
import villa5 from "@/assets/villa-5.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Townhouses",
      images: [townhouse1, townhouse2, townhouse3, townhouse4, townhouse5]
    },
    {
      title: "Twin Houses",
      images: [twinhouse1, twinhouse2, twinhouse3, twinhouse4, twinhouse5]
    },
    {
      title: "Standalone Villas",
      images: [villa1, villa2, villa3, villa4, villa5]
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-1 bg-accent/10 rounded-full mb-4">
            <span className="text-accent font-semibold text-sm tracking-wide">OUR PROJECTS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Choose Your <span className="text-accent">Dream Home</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our exceptional collection of luxury residences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
