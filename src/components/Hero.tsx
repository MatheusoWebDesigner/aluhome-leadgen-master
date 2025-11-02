import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heroBackground from "@/assets/hero-esquadrias.jpg";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";
const Hero = () => {
  const heroImages = [heroBackground, heroSlide1, heroSlide2, heroSlide4];

  const handleCTA = () => {
    window.open('https://wa.me/5511920339135?text=Olá!%20Gostaria%20de%20solicitar%20uma%20consultoria%20gratuita.', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <Carousel
        className="absolute inset-0 w-full h-full"
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
          }),
        ]}
      >
        <CarouselContent className="h-full">
          {heroImages.map((image, index) => (
            <CarouselItem key={index} className="min-w-full h-screen relative">
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${image})`,
                }}
              >
                <div className="absolute inset-0 gradient-overlay"></div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <h1 className="text-white mb-6 leading-tight max-w-4xl mx-auto">
          Esquadrias de Alumínio que Transformam seu Espaço
        </h1>
        
        <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed text-center">
          Soluções sob medida com design sofisticado e qualidade premium. Consultoria gratuita em toda São Paulo.
        </p>

        <Button size="lg" variant="cta" onClick={handleCTA} className="animate-fade-in">
          Faça um Orçamento
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
export default Hero;