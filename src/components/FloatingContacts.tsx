import { MessageCircle, Phone } from "lucide-react";

const FloatingContacts = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/201220665285', '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+201220665285';
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </button>
      
      <button
        onClick={handlePhoneClick}
        className="w-14 h-14 bg-accent hover:bg-accent/90 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Call us"
      >
        <Phone className="w-7 h-7 text-foreground" />
      </button>
    </div>
  );
};

export default FloatingContacts;
