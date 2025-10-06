import { useState } from "react";
import { Button } from "@/components/ui/button";
import portaPivotante from "@/assets/product-porta-pivotante.jpg";
import veneziana from "@/assets/product-veneziana.jpg";
import vitro from "@/assets/product-vitro.jpg";
import persiana from "@/assets/product-persiana.jpg";

const Products = () => {
  const [filter, setFilter] = useState("Todos");

  const products = [
    {
      image: portaPivotante,
      title: "Porta Pivotante Lambril",
      description: "A entrada imponente que valoriza seu imóvel. Combine segurança, design sofisticado e uma abertura majestosa. Disponível exclusivamente em nossa linha Premium.",
      colors: ["Alumínio Brilhante", "Branco", "Preto"],
      category: "Portas"
    },
    {
      image: veneziana,
      title: "Veneziana de Alumínio",
      description: "Controle perfeito de ventilação e privacidade. Design moderno que complementa qualquer fachada com elegância e funcionalidade.",
      colors: ["Alumínio Natural", "Branco", "Cinza"],
      category: "Venezianas"
    },
    {
      image: vitro,
      title: "Vitro de Alumínio",
      description: "Amplie seus espaços com máxima entrada de luz natural. Perfis finos e resistentes que garantem estética minimalista e durabilidade excepcional.",
      colors: ["Alumínio Natural", "Preto", "Bronze"],
      category: "Vitros"
    },
    {
      image: persiana,
      title: "Sistema com Persiana Integrada",
      description: "Tecnologia e praticidade em um só produto. Controle de luz e temperatura com design clean e instalação otimizada.",
      colors: ["Branco", "Bege", "Cinza"],
      category: "Soluções com Persiana"
    }
  ];

  const categories = ["Todos", "Portas", "Venezianas", "Vitros", "Soluções com Persiana"];

  const filteredProducts = filter === "Todos" 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-foreground mb-4">
          Um Universo de Possibilidades para o Seu Lar
        </h2>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className="transition-smooth"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {filteredProducts.map((product, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-elegant transition-smooth hover:shadow-hover group"
            >
              <div className="relative overflow-hidden aspect-[4/5]">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-foreground uppercase tracking-wide">
                    Cores Disponíveis:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color, idx) => (
                      <span 
                        key={idx}
                        className="text-xs px-3 py-1 bg-muted rounded-full text-muted-foreground"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => window.open('https://wa.me/5511920339135?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20suas%20portas%20de%20alumínio.', '_blank')}
          >
            Saber mais sobre Portas
          </Button>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => window.open('https://wa.me/5511920339135?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20suas%20venezianas%20de%20alumínio.', '_blank')}
          >
            Saber mais sobre Venezianas
          </Button>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => window.open('https://wa.me/5511920339135?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20seus%20vitros%20de%20alumínio.', '_blank')}
          >
            Saber mais sobre Vitros
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
