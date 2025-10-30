import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contato" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Entre em contato
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos prontos para atender você e sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="p-6 bg-card rounded-xl border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Endereço</h3>
                  <p className="text-muted-foreground">
                    Rua Alex Vallauri, 20 - Sala 01<br />
                    São José dos Campos - SP
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-card rounded-xl border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Telefone</h3>
                  <a 
                    href="https://wa.me/5512988358374" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    (12) 98835-8374
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 bg-card rounded-xl border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">E-mail</h3>
                  <a 
                    href="mailto:dtempocontabilidade@hotmail.com"
                    className="text-muted-foreground hover:text-accent transition-colors break-all"
                  >
                    dtempocontabilidade@hotmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 bg-card rounded-xl border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Horário de atendimento</h3>
                  <p className="text-muted-foreground">
                    Segunda a Sexta<br />
                    das 8h às 17h
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-card rounded-xl border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Instagram</h3>
                  <a 
                    href="https://instagram.com/dtempo.contabilidade" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    @dtempo.contabilidade
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="p-8 bg-gradient-to-br from-primary to-primary/90 rounded-2xl text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4">
                Pronto para simplificar sua contabilidade?
              </h3>
              <p className="mb-6 leading-relaxed">
                Entre em contato conosco e descubra como podemos ajudar sua empresa a crescer com segurança e conformidade.
              </p>
              <Button
                asChild
                size="lg"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <a href="https://wa.me/5512988358374" target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2" size={20} />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>

            <div className="mt-6 p-6 bg-card rounded-xl border border-border">
              <h4 className="font-semibold text-foreground mb-3">Informações empresariais</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong>Razão Social:</strong> D Nunes Serviços Contábeis</p>
                <p><strong>CNPJ:</strong> 27.837.119/0001-70</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
