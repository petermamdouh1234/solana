import solanaHero from "@/assets/villa-1.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl hover-zoom">
            <img 
              src={solanaHero} 
              alt="Solana New Zayed Development" 
              className="w-full h-[500px] object-cover"
            />
          </div>
          
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-1 bg-accent/10 rounded-full">
              <span className="text-accent font-semibold text-sm tracking-wide">ABOUT SOLANA</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
              A Vision of <span className="text-accent">Excellence</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              As we have come to expect from Ora Real Estate Development, with its consistently 
              impressive launches and continuous innovation, this year Ora presents to you a unique 
              and integrated residential world in prime residential areas that have become a real 
              target sought after by a large group of clients.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              The distinctive Solana New Zayed project enjoys a prime location in one of the most 
              prestigious areas, making Sheikh Zayed City an ideal residential destination.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
