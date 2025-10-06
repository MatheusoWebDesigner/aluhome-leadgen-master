import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const handleCTA = () => {
    window.open('https://wa.me/5511920339135?text=Olá!%20Gostaria%20de%20solicitar%20uma%20consultoria%20gratuita.', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <h1 className="text-white mb-6 leading-tight max-w-5xl mx-auto">
          Esquadrias de Alumínio Premium que Definem seu Espaço. Design e Tecnologia Feitos para Durar.
        </h1>
        
        <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          Deixe a complexidade conosco. Nossa equipe de especialistas vai até você em toda São Paulo para garantir a escolha ideal em portas e janelas de alumínio, sob medida para o seu projeto e seu orçamento.
        </p>

        <Button 
          size="lg" 
          variant="cta"
          onClick={handleCTA}
          className="animate-fade-in"
        >
          Solicite uma Consultoria Gratuita
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
