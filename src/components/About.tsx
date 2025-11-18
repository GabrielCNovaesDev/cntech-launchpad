import { Target, Eye, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Fornecer soluções tecnológicas inovadoras que impulsionam o crescimento e a transformação digital dos nossos clientes."
    },
    {
      icon: Eye,
      title: "Visão",
      description: "Ser referência nacional em soluções tecnológicas empresariais, reconhecida pela excelência e inovação constante."
    },
    {
      icon: Award,
      title: "Valores",
      description: "Inovação, Excelência, Comprometimento, Transparência e Foco no Cliente são os pilares que guiam todas as nossas ações."
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre a <span className="text-primary">CNTech</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Somos uma empresa de tecnologia com foco em soluções empresariais inovadoras. 
            Nossa equipe especializada trabalha para entregar excelência em cada projeto, 
            transformando desafios em oportunidades de crescimento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-secondary p-8 rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
