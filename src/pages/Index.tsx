import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Amenities from "@/components/Amenities";
import ContactForm from "@/components/ContactForm";
import FloatingContacts from "@/components/FloatingContacts";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Amenities />
      <ContactForm />
      <FloatingContacts />
    </div>
  );
};

export default Index;
