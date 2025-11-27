import { Building2, Waves, Trees, Home, Shield, ShoppingBag, Baby } from "lucide-react";

const Amenities = () => {
  const amenities = [
    { icon: Building2, title: "النادي الاجتماعي", description: "مرافق ترفيهية كاملة" },
    { icon: Waves, title: "السوبر ماركت", description: "تسوق متاح على مدار الساعة" },
    { icon: Trees, title: "المساحات الخضراء", description: "مناظر طبيعية واسعة وميزات مائية" },
    { icon: Home, title: "المنازل الذكية", description: "أحدث التقنيات" },
    { icon: Shield, title: "أمن 24/7", description: "أنظمة أمن متقدمة" },
    { icon: ShoppingBag, title: "صالات المناسبات", description: "مساحات للفعاليات العائلية" },
    { icon: Baby, title: "منطقة الأطفال", description: "ألعاب آمنة ومخصصة للأطفال" },
    { icon: Home, title: "مدارس", description: "تعليم دولي داخل الموقع" }, // "Schools" kept in English as requested
  ];

  return (
    <section id="amenities" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-1 bg-accent/10 rounded-full mb-4">
            <span className="text-accent font-semibold text-sm tracking-wide">المرافق</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            ميزات <span className="text-accent">عالمية المستوى</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            كل ما تحتاجه من أجل أسلوب حياة مثالي
          </p>
        </div>

        {/* Amenities Grid */}
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
