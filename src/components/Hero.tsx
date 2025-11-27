import solanaHero from "@/assets/twinhouse-1.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${solanaHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
        <div className="inline-block mb-6 px-6 py-2 bg-accent/90 backdrop-blur-sm rounded-full">
          <span className="text-foreground font-semibold tracking-wide">SOLANA</span>
        </div>
         <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          حيث تلتقي
          <br />
          <span className="text-accent">الفخامة بالطبيعة</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90 leading-relaxed">
          عش تجربة الفخامة في أرقى عناوين مدينة الشيخ زايد
        </p>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;