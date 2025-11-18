import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para transformar suas ideias em realidade
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Fale Conosco</h3>
              <p className="text-muted-foreground mb-8">
                Preencha o formulário ou entre em contato diretamente pelos nossos canais.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:gabriel@costanovaes.com.br" className="text-foreground hover:text-primary transition-colors">
                    gabriel@costanovaes.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefone</p>
                  <a href="tel:+5579981344781" className="text-foreground hover:text-primary transition-colors">
                    (79) 98134-4781
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div>
              <Input
                name="name"
                placeholder="Seu Nome"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-card border-border focus:border-primary"
              />
            </div>
            <div>
              <Input
                name="email"
                type="email"
                placeholder="Seu Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-card border-border focus:border-primary"
              />
            </div>
            <div>
              <Input
                name="phone"
                type="tel"
                placeholder="Seu Telefone"
                value={formData.phone}
                onChange={handleChange}
                className="bg-card border-border focus:border-primary"
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Sua Mensagem"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="bg-card border-border focus:border-primary resize-none"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300"
            >
              Enviar Mensagem
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
