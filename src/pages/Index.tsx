
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import MapSection from "@/components/MapSection";
import BookingForm from "@/components/BookingForm";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <MapSection />
      <BookingForm />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
