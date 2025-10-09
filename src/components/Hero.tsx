import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-esquadrias.jpg";
const Hero = () => {
  const handleCTA = () => {
    window.open('https://wa.me/5511920339135?text=Olá!%20Gostaria%20de%20solicitar%20uma%20consultoria%20gratuita.', '_blank');
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBackground})`
    }}>
        <div className="absolute inset-0 gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <h1 className="text-white mb-6 leading-tight max-w-4xl mx-auto text-center text-2xl">
          Esquadrias de Alumínio que Transformam seu Espaço
        </h1>
        
        <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Soluções sob medida com design sofisticado e qualidade premium. Consultoria gratuita em toda São Paulo.
        </p>

        <Button size="lg" variant="cta" onClick={handleCTA} className="animate-fade-in">
          Faça um Orçamento
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>;
};
export default Hero;