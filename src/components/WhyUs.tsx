import { CheckCircle2, Laptop, Users, TrendingUp, Shield, Zap } from "lucide-react";
import whyUsPartnership from "@/assets/why-us-partnership.jpg";

const WhyUs = () => {
  const differentials = [
    {
      icon: Laptop,
      title: "Contabilidade digital",
      description: "Tecnologia de ponta para automação de rotinas e maior eficiência"
    },
    {
      icon: Users,
      title: "Atendimento personalizado",
      description: "Proximidade e acompanhamento dedicado ao seu negócio"
    },
    {
      icon: Shield,
      title: "Conformidade garantida",
      description: "Total adequação às exigências regulatórias e tributárias"
    },
    {
      icon: TrendingUp,
      title: "Foco no crescimento",
      description: "Parceiros do seu sucesso empresarial"
    },
    {
      icon: Zap,
      title: "Agilidade e tempestividade",
      description: "Processos ágeis e cumprimento rigoroso de prazos"
    },
    {
      icon: CheckCircle2,
      title: "10 anos de experiência",
      description: "Expertise consolidada no mercado contábil"
    }
  ];

  return (
    <section id="diferenciais" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Por que escolher a D Tempo?
          </h2>
          <p className="text-lg text-muted-foreground">
            Diferenciais que fazem a diferença no seu negócio
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <img 
            src={whyUsPartnership} 
            alt="Parceria de negócios representando confiança e colaboração"
            className="w-full h-auto rounded-2xl shadow-xl"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex gap-4 p-6 bg-card rounded-xl border border-border hover:border-accent/50 transition-all hover:shadow-lg"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 max-w-4xl mx-auto text-center">
          <div className="p-8 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl border border-accent/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Nosso compromisso com você
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Somos co-responsáveis com as exigências dos entes federados, garantindo que sua empresa esteja sempre em conformidade. Nossa tríade de valores — Excelência, Organização e Tempestividade — norteia cada serviço que prestamos.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 bg-background rounded-lg border border-border">
                <p className="font-semibold text-accent">Excelência</p>
              </div>
              <div className="px-6 py-3 bg-background rounded-lg border border-border">
                <p className="font-semibold text-accent">Organização</p>
              </div>
              <div className="px-6 py-3 bg-background rounded-lg border border-border">
                <p className="font-semibold text-accent">Tempestividade</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
