import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-automotive.jpg";

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white pt-[45px]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Guimarim
            <span className="block text-2xl md:text-4xl lg:text-5xl font-normal text-accent mt-2">
              Estética Automotiva
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Especialistas em <span className="text-accent font-semibold">restauração de faróis</span> e 
            estética automotiva em Sobradinho, Brasília
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="premium" 
              size="lg"
              onClick={scrollToServices}
              className="text-lg px-8 py-6"
            >
              Conheça Nossos Serviços
            </Button>
            <Button 
              variant="whatsapp" 
              size="lg"
              onClick={() => window.open('https://wa.me/5561996340312?text=Olá! Gostaria de saber mais sobre os serviços da Guimarim Estética Automotiva.', '_blank')}
              className="text-lg px-8 py-6"
            >
              WhatsApp (61) 99634-0312
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-accent mb-2">+5 Anos</h3>
              <p className="text-primary-foreground/80">de experiência</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-accent mb-2">100%</h3>
              <p className="text-primary-foreground/80">satisfação garantida</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-accent mb-2">Especialista</h3>
              <p className="text-primary-foreground/80">em restauração de faróis</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;