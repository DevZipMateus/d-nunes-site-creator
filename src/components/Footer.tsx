import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-1">
            <img src={logo} alt="D Tempo Assessoria Contábil" className="h-24 w-auto mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Contabilidade com excelência para pequenas e médias empresas há 10 anos.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Links rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#hero");
                  }}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#sobre");
                  }}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#servicos");
                  }}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#diferenciais"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#diferenciais");
                  }}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Diferenciais
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("#contato");
                  }}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="flex-shrink-0 mt-0.5 text-accent" />
                <span className="text-primary-foreground/80 text-sm">
                  Rua Alex Vallauri, 20 - Sala 01<br />
                  São José dos Campos - SP
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="flex-shrink-0 text-accent" />
                <a
                  href="https://wa.me/5512988358374"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  (12) 98835-8374
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="flex-shrink-0 text-accent" />
                <a
                  href="mailto:dtempocontabilidade@hotmail.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm break-all"
                >
                  dtempocontabilidade@hotmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais e Horário */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Siga-nos</h3>
            <a
              href="https://instagram.com/dtempo.contabilidade"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-6"
            >
              <Instagram size={20} className="text-accent" />
              <span className="text-sm">@dtempo.contabilidade</span>
            </a>
            <div className="mt-4">
              <h4 className="font-semibold text-sm mb-2">Horário de atendimento</h4>
              <p className="text-primary-foreground/80 text-sm">
                Segunda a Sexta<br />
                das 8h às 17h
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
            <p>
              © {new Date().getFullYear()} D Nunes Serviços Contábeis - CNPJ: 27.837.119/0001-70
            </p>
            <p>
              Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
