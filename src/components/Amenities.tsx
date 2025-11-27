import { Building2, Waves, Trees, Home, Shield, ShoppingBag, Baby } from "lucide-react";

const Amenities = () => {
  const amenities = [
    { icon: Building2, title: "Social Club", description: "Full recreational facilities" },
    { icon: Waves, title: "Hypermarket", description: "24/7 shopping convenience" },
    { icon: Trees, title: "Green Spaces", description: "Vast landscapes & water features" },
    { icon: Home, title: "Smart Homes", description: "Latest technology" },
    { icon: Shield, title: "24/7 Security", description: "Advanced security systems" },
    { icon: ShoppingBag, title: "Event Halls", description: "Spaces for family occasions" },
    { icon: Baby, title: "Kids Area", description: "Safe and dedicated playgrounds" },
     { icon: Home, title: "Schools", description: "International education on-site" },

  ];

  return (
    <section id="amenities" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-1 bg-accent/10 rounded-full mb-4">
            <span className="text-accent font-semibold text-sm tracking-wide">AMENITIES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            World-Class <span className="text-accent">Features</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for the perfect lifestyle
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div 
                key={amenity.title}
                className="bg-card rounded-2xl p-6 text-center hover-zoom shadow-lg hover:shadow-2xl transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{amenity.title}</h3>
                <p className="text-sm text-muted-foreground">{amenity.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
