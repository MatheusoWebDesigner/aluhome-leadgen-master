import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Process from "@/components/Process";
import Products from "@/components/Products";
import Differentials from "@/components/Differentials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <ProblemSolution />
      <div id="processo">
        <Process />
      </div>
      <div id="produtos">
        <Products />
      </div>
      <div id="diferenciais">
        <Differentials />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="contato">
        <Contact />
      </div>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Index;
