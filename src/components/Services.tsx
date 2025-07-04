import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Car, Wrench, PaintRoller } from "lucide-react";

const Services = () => {
  // Array de fotos do imgbb
  const photos = [
    "https://i.ibb.co/8Db96gGj/IMG-20250703-WA0028.jpg",
    "https://i.ibb.co/BKT6pdd1/IMG-20250703-WA0029.jpg",
    "https://i.ibb.co/m5Z5RXDN/IMG-20250703-WA0030.jpg",
    "https://i.ibb.co/fzHdDqyG/IMG-20250703-WA0031.jpg",
    "https://i.ibb.co/rGw0C0jh/IMG-20250703-WA0032.jpg",
    "https://i.ibb.co/gM7PwFDb/IMG-20250703-WA0033.jpg",
    "https://i.ibb.co/vxBpj9Xd/IMG-20250703-WA0034.jpg",
    "https://i.ibb.co/VYWd4dpq/IMG-20250703-WA0035.jpg",
    "https://i.ibb.co/7N4KG8WT/IMG-20250703-WA0036.jpg",
    "https://i.ibb.co/whk7ysfL/IMG-20250703-WA0037.jpg",
    "https://i.ibb.co/fz711wmy/IMG-20250703-WA0038.jpg",
    "https://i.ibb.co/xKn8sKRT/IMG-20250703-WA0039.jpg",
    "https://i.ibb.co/whwKjhkK/IMG-20250703-WA0040.jpg",
    "https://i.ibb.co/H80ftnc/IMG-20250703-WA0041.jpg",
    "https://i.ibb.co/3mGc8vDC/IMG-20250703-WA0042.jpg",
    "https://i.ibb.co/pB8LGTs9/IMG-20250703-WA0043.jpg",
    "https://i.ibb.co/d0Z685xX/IMG-20250703-WA0044.jpg",
    "https://i.ibb.co/svLhWtQw/IMG-20250703-WA0045.jpg",
    "https://i.ibb.co/GKBcH7F/IMG-20250703-WA0046.jpg",
    "https://i.ibb.co/W49PWhyD/IMG-20250703-WA0047.jpg"
  ];
  
  const services = [
    {
      icon: Eye,
      title: "Restauração de Faróis",
      description: "Nosso serviço principal! Devolvemos a transparência e brilho original dos seus faróis.",
      features: ["Remoção de oxidação", "Polimento especializado", "Proteção UV", "Garantia de qualidade"],
      highlight: true
    },
    {
      icon: Car,
      title: "Polimento de Pintura",
      description: "Técnicas avançadas para remover riscos e devolver o brilho original da pintura.",
      features: ["Correção de riscos", "Enceramento premium", "Proteção duradoura", "Acabamento espelhado"]
    },
    {
      icon: Eye,
      title: "Polimento de Parabrisas",
      description: "Eliminamos riscos e manchas do parabrisa para maior segurança e visibilidade.",
      features: ["Remoção de riscos", "Tratamento anti-chuva", "Melhora da visibilidade", "Segurança garantida"]
    },
    {
      icon: Wrench,
      title: "Lubrificação de portas e vidros",
      description: "Fazemos a lubrificação de portas, porta-malas e canaletas de vidros para que seu automóvel não fique travando ou rangendo quando abre.",
      features: ["Produtos profissionais", "Aumenta a durabilidade", "Diminui o ruído", "Garantia do serviço"]
    },
    {
      icon: PaintRoller,
      title: "Revitalização de Plásticos",
      description: "Restauramos plásticos internos e externos, devolvendo a cor e proteção original.",
      features: ["Plásticos internos", "Plásticos externos", "Proteção UV", "Durabilidade garantida"]
    },
    {
      icon: Car,
      title: "Higienização Personalizada",
      description: "Limpeza interna completa e personalizada conforme suas necessidades.",
      features: ["Limpeza profunda", "Aspiração completa", "Produtos premium", "Atendimento personalizado"]
    },
    {
      icon: Car,
      title: "Hidratação de Couro",
      description: "Tratamento especializado para bancos de couro, mantendo-os macios e protegidos.",
      features: ["Produtos específicos", "Hidratação profunda", "Proteção contra ressecamento", "Durabilidade prolongada"]
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços de estética automotiva com qualidade profissional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative transform hover:scale-105 transition-all duration-300 shadow-card hover:shadow-premium ${
                service.highlight ? 'ring-2 ring-accent ring-opacity-50' : ''
              }`}
            >
              {service.highlight && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                  Destaque
                </Badge>
              )}
              
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Galeria de Imagens */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Galeria de Imagens
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Veja alguns dos nossos trabalhos realizados e a qualidade dos nossos serviços
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {photos.map((photo, index) => (
              <div 
                key={index} 
                className="aspect-square bg-muted rounded-lg overflow-hidden shadow-card hover:shadow-premium transition-all duration-300 hover:scale-105"
              >
                <img
                  src={photo}
                  alt={`Trabalho realizado - ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Galeria de Vídeos */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Galeria de Vídeos
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Veja nossos serviços em ação através destes vídeos demonstrativos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              "R4cf--xVAyI",
              "cZYJxgcag2Y", 
              "o849ae-18SI",
              "5sbAgu0PZ3Q"
            ].map((videoId, index) => (
              <div 
                key={index}
                className="aspect-[9/16] bg-muted rounded-lg overflow-hidden shadow-card hover:shadow-premium transition-all duration-300 hover:scale-105"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={`Vídeo demonstrativo - ${index + 1}`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-premium">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Orçamento Personalizado
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Cada veículo é único. Entre em contato conosco para receber um orçamento personalizado 
              para os serviços que seu carro precisa.
            </p>
            <button 
              onClick={() => window.open('https://wa.me/5561996340312?text=Olá! Gostaria de solicitar um orçamento personalizado.', '_blank')}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center gap-2"
            >
              Solicitar Orçamento via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;