import solanaHero from "@/assets/villa-1.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl hover-zoom">
            <img 
              src={solanaHero} 
              alt="Solana New Zayed Development" 
              className="w-full h-[500px] object-cover"
            />
          </div>
          
          {/* Text */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-1 bg-accent/10 rounded-full">
              <span className="text-accent font-semibold text-sm tracking-wide"> SOLANA </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
              رؤية من <span className="text-accent">التميز</span>
            </h2>
            
          <p className="text-lg text-muted-foreground leading-relaxed text-right">
  كما اعتدتم من <span className="inline-block direction-ltr text-accent">Ora Real Estate Development</span>، تقدم لكم هذا العام تجربة سكنية فريدة ومتكاملة في أرقى المناطق السكنية، مع تصميمات مبتكرة ومرافق متكاملة تلبي جميع احتياجاتكم. </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-right">
  يتميز مشروع <span className="inline-block direction-ltr text-accent">Solana New Zayed</span> بموقعه الاستراتيجي في إحدى أرقى المناطق، مما يجعل مدينة الشيخ زايد وجهة سكنية مثالية.</p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
