import { X, Check } from "lucide-react";
const ProblemSolution = () => {
  const problems = ["A incerteza sobre qual linha de produto é a mais adequada para sua necessidade.", "O receio de investir em um produto que não se harmoniza com seu projeto arquitetônico.", "A dificuldade em navegar por termos técnicos sem a orientação de um especialista.", "A preocupação com a qualidade do material e a pontualidade da entrega."];
  return <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        {/* Problem Section */}
        <div className="mb-16">
          <h2 className="text-center md:text-left text-foreground mb-12 text-xl">
            Escolher Esquadrias Não Deveria Ser uma Dor de Cabeça
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {problems.map((problem, index) => <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm transition-smooth hover:shadow-elegant">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center mt-1">
                  <X className="w-4 h-4 text-destructive" />
                </div>
                <p className="text-muted-foreground leading-relaxed text-left">{problem}</p>
              </div>)}
          </div>
        </div>

        {/* Solution Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary text-primary-foreground rounded-2xl p-10 md:p-16 shadow-elegant px-[20px] py-[40px]">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                <Check className="w-8 h-8" />
              </div>
            </div>
            
            <h3 className="text-center mb-6 text-white">
              Na AluHome, a sua tranquilidade vem em primeiro lugar.
            </h3>
            
            <p className="text-center text-white/90 text-lg leading-relaxed">
              É por isso que nosso maior diferencial é o atendimento consultivo e personalizado. Nós não apenas vendemos esquadrias; nós vamos até o seu local, avaliamos as necessidades técnicas, entendemos sua visão e recomendamos a solução exata que une funcionalidade, design e o melhor valor para o seu investimento. Transformamos um processo complexo em uma experiência de confiança e qualidade.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default ProblemSolution;