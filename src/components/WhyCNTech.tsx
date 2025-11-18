import { Zap, Users, Trophy, Headphones } from "lucide-react";

const WhyCNTech = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Inovação Constante",
      description: "Sempre atualizados com as últimas tecnologias e tendências do mercado para oferecer as melhores soluções."
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais altamente qualificados e certificados nas principais tecnologias do mercado."
    },
    {
      icon: Trophy,
      title: "Resultados Comprovados",
      description: "Histórico de sucesso em projetos de diferentes segmentos e tamanhos, sempre superando expectativas."
    },
    {
      icon: Headphones,
      title: "Suporte Dedicado",
      description: "Atendimento personalizado e suporte contínuo para garantir o sucesso dos seus projetos."
    }
  ];

  return (
    <section id="diferenciais" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Por Que <span className="text-primary">CNTech</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nossos diferenciais que nos tornam a escolha ideal para seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCNTech;
