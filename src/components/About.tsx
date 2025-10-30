import { Target, Eye, Award } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Sobre a D Tempo
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A D Nunes Serviços Contábeis nasceu há 10 anos com vontade de empreender em contabilidade focada no negócio do cliente, com o pensamento e ação voltados não somente na abertura e legalização das empresas e sim no negócio do cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 bg-card rounded-xl border border-border shadow-sm hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Nossa missão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Simplificar a contabilidade e fortalecer o crescimento de pequenas e médias empresas, oferecendo soluções seguras, modernas e personalizadas — tanto no digital quanto no atendimento presencial.
            </p>
          </div>

          <div className="p-8 bg-card rounded-xl border border-border shadow-sm hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Nossa visão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser referência em assessoria contábil através da união entre tecnologia e proximidade, transformando a contabilidade tradicional em uma verdadeira parceira do crescimento empresarial.
            </p>
          </div>

          <div className="p-8 bg-card rounded-xl border border-border shadow-sm hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
              <Award className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Nossos valores</h3>
            <p className="text-muted-foreground leading-relaxed">
              Excelência, organização e tempestividade formam a tríade da nossa empresa. Atuamos com proximidade, ética e inovação para que cada cliente tenha clareza e tranquilidade na gestão do seu negócio.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-primary to-primary/90 rounded-2xl text-primary-foreground">
          <h3 className="text-2xl font-bold mb-4">Transformação digital com atendimento humanizado</h3>
          <p className="leading-relaxed mb-4">
            O mercado contábil brasileiro vive um momento de transformação, marcado pela integração entre tecnologia e atendimento personalizado. Pequenas e médias empresas buscam cada vez mais escritórios que ofereçam soluções completas — presenciais e digitais — com foco em agilidade, segurança e orientação estratégica.
          </p>
          <p className="leading-relaxed">
            Nesse cenário, a D Nunes Serviços Contábeis se destaca por unir inovação e proximidade, transformando a contabilidade tradicional em uma verdadeira parceira do crescimento empresarial.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
