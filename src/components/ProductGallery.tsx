import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface ProductGalleryProps {
  image: string;
  title: string;
  description: string;
  colors: string[];
  sizes: string[];
  line: string;
}

const ProductGallery = ({ image, title, description, colors, sizes, line }: ProductGalleryProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-white rounded-xl overflow-hidden shadow-elegant transition-smooth hover:shadow-hover group cursor-pointer">
          <div className="relative overflow-hidden aspect-[4/5]">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-smooth flex items-center justify-center">
              <span className="text-white font-semibold bg-primary/80 px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-smooth">
                Ver Detalhes
              </span>
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
              {description}
            </p>
            
            <div className="space-y-3">
              <div>
                <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">
                  Linha:
                </p>
                <span className="text-xs px-3 py-1.5 bg-accent/20 text-accent-foreground rounded-full font-medium inline-block">
                  {line}
                </span>
              </div>
              
              <div>
                <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">
                  Cores:
                </p>
                <div className="flex flex-wrap gap-2">
                  {colors.slice(0, 2).map((color, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-3 py-1.5 bg-primary/10 text-primary rounded-full font-medium"
                    >
                      {color}
                    </span>
                  ))}
                  {colors.length > 2 && (
                    <span className="text-xs px-3 py-1.5 bg-muted text-muted-foreground rounded-full">
                      +{colors.length - 2}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogTrigger>
      
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="grid md:grid-cols-2 gap-8 p-6">
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {title}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {description}
              </p>
            </div>
            
            <div className="space-y-5">
              <div>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                  Linha do Produto:
                </h3>
                <span className="text-sm px-4 py-2 bg-accent/20 text-accent-foreground rounded-lg font-medium inline-block">
                  {line}
                </span>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                  Tamanhos:
                </h3>
                <div className="flex flex-wrap gap-3">
                  {sizes.map((size, idx) => (
                    <span 
                      key={idx}
                      className="text-sm px-4 py-2 bg-secondary/10 text-secondary-foreground rounded-lg font-medium"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                  Cores Disponíveis:
                </h3>
                <div className="flex flex-wrap gap-3">
                  {colors.map((color, idx) => (
                    <span 
                      key={idx}
                      className="text-sm px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <button
                onClick={() => window.open('https://wa.me/5511920339135?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20' + title, '_blank')}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-smooth"
              >
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductGallery;
