import { FileText, Users, Building2, Calculator, FileCheck, DollarSign, Receipt, Smartphone } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Assessoria contábil",
      description: "Orientação completa e estratégica para todas as demandas contábeis do seu negócio."
    },
    {
      icon: Building2,
      title: "Abertura e encerramento de empresas",
      description: "Processo completo de constituição e encerramento com toda documentação necessária."
    },
    {
      icon: FileCheck,
      title: "Licenciamentos integrados",
      description: "Obtenção de alvarás e licenças necessárias para funcionamento legal da empresa."
    },
    {
      icon: Users,
      title: "Folha de pagamento",
      description: "Gestão completa de RH com cálculos precisos e conformidade trabalhista."
    },
    {
      icon: Calculator,
      title: "Serviços paracontábeis",
      description: "Suporte adicional em diversas áreas relacionadas à gestão empresarial."
    },
    {
      icon: DollarSign,
      title: "Imposto de renda",
      description: "Declaração completa de IR para pessoa física e jurídica."
    },
    {
      icon: Receipt,
      title: "Orientação sobre impostos",
      description: "Planejamento tributário e orientações para melhor gestão fiscal."
    },
    {
      icon: Smartphone,
      title: "Emissão integrada de notas fiscais",
      description: "Sistema automatizado e integrado para emissão de notas fiscais eletrônicas."
    }
  ];

  return (
    <section id="servicos" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Nossos serviços
          </h2>
          <p className="text-lg text-muted-foreground">
            Soluções completas em contabilidade para pequenas e médias empresas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-border hover:border-accent/50 transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 p-8 bg-card rounded-2xl border border-border max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
            Preparados para a reforma tributária
          </h3>
          <p className="text-muted-foreground text-center leading-relaxed">
            Nossa empresa está totalmente preparada para auxiliar nossos clientes na transição pacífica da reforma tributária, garantindo conformidade com todas as exigências regulatórias dos entes federados: Prefeitura, Estado e Receita Federal.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
