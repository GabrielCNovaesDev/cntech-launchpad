import { Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">CNTech</h3>
            <p className="text-muted-foreground">
              Transformando ideias em soluções tecnológicas inovadoras.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contato" className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a 
                  href="mailto:gabriel@costanovaes.com.br" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  gabriel@costanovaes.com.br
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a 
                  href="tel:+5579981344781" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  (79) 98134-4781
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">
            © {currentYear} CNTech. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
