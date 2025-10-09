const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-foreground mb-12">
          Sobre a AluHome
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed text-center md:text-left">
            Apresentamos a AluHome, uma empresa criada para transformar o mercado de esquadrias de alumínio residenciais, unindo sofisticação, tecnologia e praticidade em cada projeto.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed text-center md:text-left">
            Nosso modelo de operação é digital, trabalhamos com encomendas sob medida, garantindo que cada cliente receba exatamente o que precisa, com flexibilidade, qualidade e eficiência. Essa estratégia nos permite oferecer soluções modernas sem depender de estoque físico inicial.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed text-center md:text-left">
            A AluHome tem como objetivo se consolidar como referência em esquadrias residenciais, entregando produtos de alto padrão e uma experiência diferenciada para construtoras, arquitetos e clientes finais.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed text-center md:text-left">
            Nossa visão é clara: construir uma marca sólida, escalável e capaz de gerar valor duradouro para todos que se conectam a ela.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
