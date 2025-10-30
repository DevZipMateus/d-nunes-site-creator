import { Button } from "./ui/button";
import { ArrowRight, Shield, TrendingUp, Clock } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      ></div>
      <div className="absolute inset-0 bg-primary/90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 animate-fade-in">
            <span className="text-accent font-semibold">Contabilidade com Excelência</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            D Nunes Serviços Contábeis
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed animate-fade-in">
            Simplificamos a contabilidade e fortalecemos o crescimento de pequenas e médias empresas com soluções seguras, modernas e personalizadas
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
            >
              <a href="https://wa.me/5512988358374" target="_blank" rel="noopener noreferrer">
                Fale com um especialista
                <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/40 text-primary hover:bg-primary/10"
            >
              <a href="#servicos">
                Conheça nossos serviços
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="p-6 bg-card rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow">
              <Shield className="w-10 h-10 text-accent mb-4 mx-auto" />
              <h3 className="font-semibold text-foreground mb-2">Segurança e Conformidade</h3>
              <p className="text-sm text-muted-foreground">Total conformidade com os entes federados</p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow">
              <TrendingUp className="w-10 h-10 text-accent mb-4 mx-auto" />
              <h3 className="font-semibold text-foreground mb-2">Crescimento Empresarial</h3>
              <p className="text-sm text-muted-foreground">Parceiros do seu sucesso</p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow">
              <Clock className="w-10 h-10 text-accent mb-4 mx-auto" />
              <h3 className="font-semibold text-foreground mb-2">10 Anos de Experiência</h3>
              <p className="text-sm text-muted-foreground">Excelência, organização e tempestividade</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
