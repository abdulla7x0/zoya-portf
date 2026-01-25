import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  return (
    <>
      <CustomCursor />
      <PageLoader />
      <main className="bg-background min-h-screen cursor-none">
        <Navigation />
        <Hero />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
