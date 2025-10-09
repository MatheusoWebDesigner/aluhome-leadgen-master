import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const FAQ = () => {
  const faqs = [{
    question: "Qual a diferença entre as linhas Econômica, Modular e Premium?",
    answer: "A linha Econômica foca em funcionalidade e custo-benefício. A Modular oferece mais robustez e opções de design. A Premium, onde todas as nossas portas se enquadram, representa o máximo em sofisticação e tecnologia para projetos de alto padrão."
  }, {
    question: "As esquadrias são resistentes à corrosão?",
    answer: "Sim. O alumínio que utilizamos recebe pintura eletrostática, criando uma camada protetora extremamente resistente contra corrosão, umidade e raios UV."
  }, {
    question: "Vocês realizam a instalação?",
    answer: "Nosso foco é a excelência na fabricação. Para garantir uma instalação perfeita, indicamos uma rede de profissionais parceiros qualificados e de nossa total confiança."
  }, {
    question: "Como funciona a visita técnica? É sem compromisso?",
    answer: "Totalmente sem compromisso. É o primeiro passo do nosso atendimento consultivo, onde um especialista vai até você para oferecer a melhor orientação."
  }];
  return <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-foreground mb-16 text-2xl">
          Suas Dúvidas, Respondidas
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-sm px-6 border-none">
                <AccordionTrigger className="text-left text-foreground hover:text-primary transition-smooth py-6 text-xl">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </div>
    </section>;
};
export default FAQ;