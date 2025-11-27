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
    
    // Create WhatsApp message with user's data
    const whatsappMessage = `
*New Inquiry from Solana Website*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Message:* ${formData.message}

---
*Project:* Solana New Sheikh Zayed
*Location:* Western Cairo on the Dabaa axis
    `.trim();

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Open WhatsApp with the message
    window.open(`https://wa.me/201202307815?text=${encodedMessage}`, '_blank');
    
    // Show success toast
    toast({
      title: "Message Sent!",
      description: "We'll get back to you shortly via WhatsApp.",
    });

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block px-4 py-1 bg-accent/10 rounded-full mb-4">
              <span className="text-accent font-semibold text-sm tracking-wide">CONTACT US</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get in <span className="text-accent">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to find your dream home? Contact us today
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-card rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                  Full Name *
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  required
                  className="bg-background"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                  Email Address *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
               
                  className="bg-background"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                Phone Number *
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
                Your Message *
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your requirements..."
                rows={5}
             
                className="bg-background resize-none"
              />
            </div>

            <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Send Message via WhatsApp
            </Button>
          </form>

          <div className="mt-12 p-8 bg-card rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center text-foreground">Location Highlights</h3>
            <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p>Located in western Cairo on the Dabaa axis</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p>Direct access to Alexandria Desert Road</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p>Adjacent to the Belle Compound</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p>45 minutes from AUC</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p>Close to Sphinx International Airport</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <p>Near 26th of July Corridor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
