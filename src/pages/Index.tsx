import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Process from "@/components/Process";
import Products from "@/components/Products";
import Differentials from "@/components/Differentials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <Process />
      <Products />
      <Differentials />
      <FAQ />
      <Contact />
      <WhatsAppButton />
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} AluHome Esquadrias. Todos os direitos reservados.
          </p>
          <p className="text-xs mt-2 opacity-80">
            Esquadrias de alumínio sob medida em São Paulo
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
