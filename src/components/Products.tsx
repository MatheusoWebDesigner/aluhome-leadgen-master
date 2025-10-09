import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProductGallery from "@/components/ProductGallery";
import portaPivotante from "@/assets/product-porta-pivotante.jpg";
import veneziana from "@/assets/product-veneziana.jpg";
import vitro from "@/assets/product-vitro.jpg";
import persiana from "@/assets/product-persiana.jpg";
const Products = () => {
  const [filter, setFilter] = useState("Todos");
  const products = [{
    image: portaPivotante,
    title: "Porta Pivotante Lambril",
    description: "A entrada imponente que valoriza seu imóvel. Combine segurança, design sofisticado e uma abertura majestosa. Disponível exclusivamente em nossa linha Premium.",
    colors: ["Alumínio Brilhante", "Branco", "Preto"],
    category: "Portas"
  }, {
    image: veneziana,
    title: "Veneziana de Alumínio",
    description: "Controle perfeito de ventilação e privacidade. Design moderno que complementa qualquer fachada com elegância e funcionalidade.",
    colors: ["Alumínio Natural", "Branco", "Cinza"],
    category: "Venezianas"
  }, {
    image: vitro,
    title: "Vitro de Alumínio",
    description: "Amplie seus espaços com máxima entrada de luz natural. Perfis finos e resistentes que garantem estética minimalista e durabilidade excepcional.",
    colors: ["Alumínio Natural", "Preto", "Bronze"],
    category: "Vitros"
  }, {
    image: persiana,
    title: "Sistema com Persiana Integrada",
    description: "Tecnologia e praticidade em um só produto. Controle de luz e temperatura com design clean e instalação otimizada.",
    colors: ["Branco", "Bege", "Cinza"],
    category: "Soluções com Persiana"
  }];
  const categories = ["Todos", "Portas", "Venezianas", "Vitros", "Soluções com Persiana"];
  const filteredProducts = filter === "Todos" ? products : products.filter(p => p.category === filter);
  return <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <h2 className="text-center md:text-left text-foreground mb-4 text-4xl">
          Um Universo de Possibilidades para o Seu Lar
        </h2>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-12 mx-0 my-[20px]">
          {categories.map(category => <Button key={category} variant={filter === category ? "default" : "outline"} onClick={() => setFilter(category)} className="transition-smooth">
              {category}
            </Button>)}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {filteredProducts.map((product, index) => <ProductGallery key={index} image={product.image} title={product.title} description={product.description} colors={product.colors} />)}
        </div>

        {/* CTA Buttons */}
        
      </div>
    </section>;
};
export default Products;