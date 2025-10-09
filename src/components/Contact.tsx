import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Compose WhatsApp message
    const message = `Olá! Meu nome é ${formData.name}.\n\nContato: ${formData.contact}\n\nMensagem: ${formData.message || 'Gostaria de mais informações sobre suas esquadrias.'}`;
    const encodedMessage = encodeURIComponent(message);

    // Open WhatsApp
    window.open(`https://wa.me/5511920339135?text=${encodedMessage}`, '_blank');

    // Show success toast
    toast({
      title: "Redirecionando para o WhatsApp",
      description: "Em breve você será atendido pela nossa equipe!"
    });

    // Reset form
    setFormData({
      name: "",
      contact: "",
      message: ""
    });
  };
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-foreground mb-4 text-2xl">
            Pronto para Transformar seu Projeto?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Preencha o formulário ou chame no WhatsApp. Nossa equipe está pronta para oferecer a melhor solução para você, sem compromisso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <div className="bg-white p-8 rounded-xl shadow-elegant">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nome *
                </label>
                <Input required value={formData.name} onChange={e => setFormData({
                ...formData,
                name: e.target.value
              })} placeholder="Seu nome completo" className="w-full" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  E-mail ou Telefone *
                </label>
                <Input required value={formData.contact} onChange={e => setFormData({
                ...formData,
                contact: e.target.value
              })} placeholder="seu@email.com ou (11) 99999-9999" className="w-full" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mensagem (opcional)
                </label>
                <Textarea value={formData.message} onChange={e => setFormData({
                ...formData,
                message: e.target.value
              })} placeholder="Conte-nos sobre seu projeto..." rows={4} className="w-full" />
              </div>

              <Button type="submit" variant="cta" size="lg" className="w-full">
                Enviar e Receber Consultoria
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="bg-primary/5 p-6 rounded-xl border-2 border-primary/10 hover:border-primary/30 transition-smooth">
              <a href="https://wa.me/5511920339135" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-smooth">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">WhatsApp</h4>
                  <p className="text-muted-foreground">(11) 92033-9135</p>
                  <p className="text-sm text-primary mt-1">Clique para conversar →</p>
                </div>
              </a>
            </div>

            <div className="bg-accent/5 p-6 rounded-xl border-2 border-accent/10 hover:border-accent/30 transition-smooth">
              <a href="mailto:aluhomeesquadrias@gmail.com" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-smooth">
                  <Mail className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">E-mail</h4>
                  <p className="text-muted-foreground text-sm break-all">aluhomeesquadrias@gmail.com</p>
                </div>
              </a>
            </div>

            <div className="bg-secondary/5 p-6 rounded-xl border-2 border-secondary/10 hover:border-secondary/30 transition-smooth">
              <a href="https://instagram.com/aluhomeesquadrias" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-smooth">
                  <Instagram className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Instagram</h4>
                  <p className="text-muted-foreground">@aluhomeesquadrias</p>
                  <p className="text-sm text-secondary mt-1">Siga-nos →</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;