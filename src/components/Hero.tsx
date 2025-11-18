import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
        }}
      />
      <div className="absolute inset-0 bg-gradient-hero z-0" />
      
      <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          CNTech
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
          Transformando Ideias em Soluções Tecnológicas
        </p>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Inovação, confiabilidade e excelência em cada projeto
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Conheça Nossas Soluções
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 transition-all duration-300"
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Entre em Contato
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
