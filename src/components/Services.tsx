import { Code, Cloud, Lightbulb, Shield, Database, Smartphone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Desenvolvimento de Software",
      description: "Criamos soluções personalizadas que atendem perfeitamente às necessidades do seu negócio, com código limpo e arquitetura robusta."
    },
    {
      icon: Cloud,
      title: "Infraestrutura Cloud",
      description: "Migração e gestão de infraestrutura em nuvem com as principais plataformas do mercado, garantindo escalabilidade e segurança."
    },
    {
      icon: Lightbulb,
      title: "Consultoria em TI",
      description: "Orientação estratégica para otimizar seus processos tecnológicos e impulsionar a transformação digital da sua empresa."
    },
    {
      icon: Shield,
      title: "Segurança da Informação",
      description: "Proteção completa dos seus dados e sistemas com as melhores práticas e tecnologias de segurança do mercado."
    },
    {
      icon: Database,
      title: "Gestão de Dados",
      description: "Modelagem, integração e análise de dados para transformar informações em insights estratégicos para seu negócio."
    },
    {
      icon: Smartphone,
      title: "Aplicações Mobile",
      description: "Desenvolvimento de aplicativos móveis nativos e híbridos com foco em experiência do usuário e performance."
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossas <span className="text-primary">Soluções</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Oferecemos um portfólio completo de serviços tecnológicos para impulsionar seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-card p-8 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
