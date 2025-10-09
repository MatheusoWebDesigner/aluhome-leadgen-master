import { ClipboardCheck, Wrench, Truck } from "lucide-react";
const Process = () => {
  const steps = [{
    icon: ClipboardCheck,
    title: "Consultoria e Análise Técnica",
    description: "Agendamos uma visita técnica gratuita para entender seu projeto, tirar medidas precisas e responder a todas as suas dúvidas."
  }, {
    icon: Wrench,
    title: "Proposta e Fabricação Sob Medida",
    description: "Apresentamos uma proposta transparente. Após sua aprovação, iniciamos a fabricação de suas esquadrias com precisão milimétrica e alumínio de alto padrão."
  }, {
    icon: Truck,
    title: "Entrega Rápida e Segura",
    description: "Com frota própria e parceiros, garantimos uma entrega pontual diretamente na sua obra, respeitando o seu cronograma."
  }];
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-foreground mb-16 text-2xl">
          Seu Projeto em 3 Passos Simples
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
          const Icon = step.icon;
          return <div key={index} className="relative group">
                {/* Connector Line (hidden on mobile) */}
                {index < steps.length - 1 && <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-border z-0"></div>}

                {/* Card */}
                <div className="relative bg-white p-8 rounded-xl shadow-elegant transition-smooth hover:shadow-hover z-10">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold shadow-elegant">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-smooth">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>;
        })}
        </div>
      </div>
    </section>;
};
export default Process;