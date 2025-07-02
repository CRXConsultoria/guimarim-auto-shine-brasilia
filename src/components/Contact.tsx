import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/30 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para cuidar do seu veículo. Entre em contato conosco e agende seu serviço!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">WhatsApp</h3>
                    <p className="text-muted-foreground mb-2">(61) 99634-0312</p>
                    <Button 
                      variant="whatsapp" 
                      size="sm"
                      onClick={() => window.open('https://wa.me/5561996340312?text=Olá! Gostaria de saber mais sobre os serviços da Guimarim Estética Automotiva.', '_blank')}
                    >
                      Enviar Mensagem
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Localização</h3>
                    <p className="text-muted-foreground">Sobradinho, Brasília - DF</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📸</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Instagram</h3>
                    <p className="text-muted-foreground mb-2">@guimarimesteticaautomotiva</p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open('https://instagram.com/guimarimesteticaautomotiva', '_blank')}
                    >
                      Seguir no Instagram
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🕒</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Horário de Atendimento</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Segunda a Sexta: 8h às 18h</p>
                      <p>Sábado: 8h às 16h</p>
                      <p>Domingo: Fechado</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="space-y-8">
            <Card className="shadow-premium bg-gradient-hero text-primary-foreground">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Solicite seu Orçamento</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <p className="text-lg text-primary-foreground/90 leading-relaxed">
                  Nossos especialistas estão prontos para avaliar as necessidades do seu veículo 
                  e oferecer o melhor serviço de estética automotiva.
                </p>

                <div className="space-y-4">
                  <Button 
                    variant="premium"
                    size="lg"
                    className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                    onClick={() => window.open('https://wa.me/5561996340312?text=Olá! Gostaria de solicitar um orçamento para os serviços de estética automotiva.', '_blank')}
                  >
                    💬 Solicitar Orçamento via WhatsApp
                  </Button>

                  <Button 
                    variant="outline"
                    size="lg"
                    className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20"
                    onClick={() => window.open('https://instagram.com/guimarimesteticaautomotiva', '_blank')}
                  >
                    📸 Ver Nossos Trabalhos no Instagram
                  </Button>
                </div>

                <div className="pt-4 border-t border-white/20">
                  <h4 className="text-lg font-semibold mb-3 text-accent">
                    🌟 Especialidade: Restauração de Faróis
                  </h4>
                  <p className="text-primary-foreground/80">
                    Transformamos faróis opacos e amarelados em faróis cristalinos como novos. 
                    Solicite um orçamento sem compromisso!
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-muted/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-4 text-center">
                  Por que nos escolher?
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center p-3 bg-background rounded-lg">
                    <span className="text-2xl block mb-2">✅</span>
                    <p className="font-semibold text-primary">Garantia</p>
                    <p className="text-muted-foreground">Em todos os serviços</p>
                  </div>
                  <div className="text-center p-3 bg-background rounded-lg">
                    <span className="text-2xl block mb-2">🚗</span>
                    <p className="font-semibold text-primary">Especialistas</p>
                    <p className="text-muted-foreground">Em estética automotiva</p>
                  </div>
                  <div className="text-center p-3 bg-background rounded-lg">
                    <span className="text-2xl block mb-2">💎</span>
                    <p className="font-semibold text-primary">Qualidade</p>
                    <p className="text-muted-foreground">Produtos premium</p>
                  </div>
                  <div className="text-center p-3 bg-background rounded-lg">
                    <span className="text-2xl block mb-2">⭐</span>
                    <p className="font-semibold text-primary">Satisfação</p>
                    <p className="text-muted-foreground">100% garantida</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;