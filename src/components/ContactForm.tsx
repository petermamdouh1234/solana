import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  // Construct the message without newlines breaking WhatsApp
  const whatsappMessage = `
استفسار جديد من موقع SOLANA          
الاسم: ${formData.name}
البريد الإلكتروني: ${formData.email}
رقم الهاتف: ${formData.phone}
الرسالة: ${formData.message}
المشروع: Solana New Sheikh Zayed
الموقع: غرب القاهرة على محور الضبعة
  `.trim();

  const encodedMessage = encodeURIComponent(whatsappMessage);

  // Open WhatsApp
  window.open(`https://wa.me/201066551155?text=${encodedMessage}`, "_blank");

  toast({
    title: "تم إرسال الرسالة!",
    description: "سيتم فتح WhatsApp لإرسال رسالتك.",
  });

  setFormData({ name: "", email: "", phone: "", message: "" });
};


  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block px-4 py-1 bg-accent/10 rounded-full mb-4">
              <span className="text-accent font-semibold text-sm tracking-wide">اتصل بنا</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              تواصل معنا
            </h2>
            <p className="text-lg text-muted-foreground">
              جاهز للعثور على منزل أحلامك؟ اتصل بنا اليوم
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-card rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                  الاسم الكامل *
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="أدخل اسمك"
                  required
                  className="bg-background"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                  البريد الإلكتروني *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="email@example.com"
                  className="bg-background"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                رقم الهاتف *
              </label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+20 123 456 7890"
                required
                className="bg-background"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                رسالتك *
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="أخبرنا عن متطلباتك..."
                rows={5}
                className="bg-background resize-none"
              />
            </div>

            <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              WhatsApp إرسال عبر 
            </Button>
          </form>

          {/* Location Highlights */}
         <div className="mt-12 p-8 bg-card rounded-2xl shadow-lg">
  <h3 className="text-2xl font-bold mb-6 text-center text-foreground">مميزات الموقع</h3>
  <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
    {[
      "يقع غرب القاهرة على محور الضبعة",
      "وصول مباشر إلى طريق الإسكندرية الصحراوي",
      " Belle بجوار كمباوند ",
      "45 دقيقة من الجامعة الأمريكية بالقاهرة",
      "قريب من مطار سفنكس الدولي",
      "بالقرب من محور 26 يوليو",
    ].map((point, index) => (
      <div key={index} className="flex flex-row-reverse items-start gap-3 text-right">
        <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
        <p>{point}</p>
      </div>
    ))}
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
