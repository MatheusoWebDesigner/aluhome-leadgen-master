import { UserCheck, Sparkles, ShieldCheck, Clock, TrendingUp } from "lucide-react";
const Differentials = () => {
  const differentials = [{
    icon: UserCheck,
    title: "Atendimento Consultivo",
    description: "Nossa expertise à sua disposição para garantir a escolha perfeita."
  }, {
    icon: Sparkles,
    title: "Design e Tecnologia",
    description: "Soluções que unem estética de vanguarda e inovação em cada detalhe."
  }, {
    icon: ShieldCheck,
    title: "Qualidade Garantida",
    description: "Materiais de alto padrão para máxima durabilidade e resistência."
  }, {
    icon: Clock,
    title: "Entrega Pontual em SP",
    description: "Logística eficiente para que sua obra não pare."
  }, {
    icon: TrendingUp,
    title: "Valor Excepcional",
    description: "Modelo de negócio eficiente que oferece alto padrão com preço justo."
  }];
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-foreground mb-16 text-2xl">
          Os Pilares da Nossa Excelência
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {differentials.map((item, index) => {
          const Icon = item.icon;
          return <div key={index} className="text-center group">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-primary group-hover:scale-110 transition-smooth">
                  <Icon className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-smooth" />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>;
        })}
        </div>
      </div>
    </section>;
};
export default Differentials;