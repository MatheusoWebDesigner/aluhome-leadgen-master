const About = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-8 md:mb-12 leading-tight">
            Sobre a <span className="text-primary">AluHome</span>
          </h2>
          
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-elegant border border-border/50 space-y-5 md:space-y-6">
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed text-left">
              Apresentamos a AluHome, uma empresa criada para transformar o mercado de esquadrias de alumínio residenciais, unindo <span className="font-semibold text-primary">sofisticação, tecnologia e praticidade</span> em cada projeto.
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-left">
              Nosso modelo de operação é digital, trabalhamos com encomendas sob medida, garantindo que cada cliente receba exatamente o que precisa, com flexibilidade, qualidade e eficiência. Essa estratégia nos permite oferecer soluções modernas sem depender de estoque físico inicial.
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-left">
              A AluHome tem como objetivo se consolidar como referência em esquadrias residenciais, entregando produtos de alto padrão e uma experiência diferenciada para construtoras, arquitetos e clientes finais.
            </p>
            
            <div className="pt-4 border-t border-primary/20">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed text-left font-medium">
                Nossa visão é clara: construir uma marca sólida, escalável e capaz de gerar valor duradouro para todos que se conectam a ela.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
