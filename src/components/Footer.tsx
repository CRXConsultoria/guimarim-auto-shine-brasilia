import { Car } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Car className="h-8 w-8 text-accent" />
              <div>
                <h3 className="text-xl font-bold">Guimarim</h3>
                <p className="text-sm text-primary-foreground/80">Estética Automotiva</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Especialistas em estética automotiva em Sobradinho, Brasília. 
              Cuidamos do seu veículo com a qualidade que ele merece.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Serviços</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>• Restauração de Faróis</li>
              <li>• Polimento de Pintura</li>
              <li>• Polimento de Parabrisas</li>
              <li>• Instalação de Acessórios</li>
              <li>• Revitalização de Plásticos</li>
              <li>• Higienização Interna</li>
              <li>• Hidratação de Couro</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Contato</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div>
                <p className="font-semibold">WhatsApp:</p>
                <p>(61) 99634-0312</p>
              </div>
              <div>
                <p className="font-semibold">Instagram:</p>
                <p>@guimarimesteticaautomotiva</p>
              </div>
              <div>
                <p className="font-semibold">Localização:</p>
                <p>Sobradinho, Brasília - DF</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Guimarim Estética Automotiva. Todos os direitos reservados.
          </p>
          <p className="text-primary-foreground/60 mt-2 text-sm">
            Especialistas em restauração de faróis • Sobradinho, Brasília
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;