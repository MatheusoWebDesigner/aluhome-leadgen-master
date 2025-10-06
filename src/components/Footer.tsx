import { Mail, Phone, Instagram, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="text-xl font-bold mb-4">AluHome Esquadrias</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              Especialistas em esquadrias de alumínio sob medida em São Paulo. 
              Design premium e tecnologia de ponta para seu projeto.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("processo")}
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  Processo
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("produtos")}
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  Produtos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/5511920339135"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  <Phone size={16} />
                  (11) 92033-9135
                </a>
              </li>
              <li>
                <a
                  href="mailto:aluhomeesquadrias@gmail.com"
                  className="flex items-center gap-2 text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  <Mail size={16} />
                  aluhomeesquadrias@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/aluhomeesquadrias"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  <Instagram size={16} />
                  @aluhomeesquadrias
                </a>
              </li>
            </ul>
          </div>

          {/* Área de Atendimento */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Área de Atendimento</h4>
            <div className="flex items-start gap-2">
              <MapPin size={16} className="mt-1 flex-shrink-0" />
              <p className="text-sm opacity-90 leading-relaxed">
                Atendemos toda a região metropolitana de São Paulo - 
                Zona Leste, Oeste, Norte e Sul
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} AluHome Esquadrias. Todos os direitos reservados.
          </p>
          <p className="text-xs mt-2 opacity-70">
            Esquadrias de alumínio sob medida em São Paulo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
