const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Sobre a Guimarim
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              A <span className="text-primary font-semibold">Guimarim Estética Automotiva</span> é uma empresa 
              especializada em cuidados automotivos localizada em Sobradinho, Brasília. 
              Nossa paixão é devolver a beleza e proteção que seu veículo merece.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Com anos de experiência no mercado, nos especializamos principalmente em 
              <span className="text-accent font-semibold"> restauração de faróis</span>, 
              utilizando técnicas avançadas e produtos de primeira qualidade para garantir 
              resultados excepcionais.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nosso compromisso é oferecer serviços de alta qualidade, atendimento personalizado 
              e preços justos. Cada projeto é tratado com dedicação e atenção aos detalhes.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gradient-card rounded-lg shadow-card">
                <h3 className="text-2xl font-bold text-primary mb-2">Qualidade</h3>
                <p className="text-muted-foreground">Produtos e técnicas premium</p>
              </div>
              <div className="text-center p-4 bg-gradient-card rounded-lg shadow-card">
                <h3 className="text-2xl font-bold text-primary mb-2">Experiência</h3>
                <p className="text-muted-foreground">Profissionais especializados</p>
              </div>
              <div className="text-center p-4 bg-gradient-card rounded-lg shadow-card">
                <h3 className="text-2xl font-bold text-primary mb-2">Confiança</h3>
                <p className="text-muted-foreground">Garantia em todos os serviços</p>
              </div>
              <div className="text-center p-4 bg-gradient-card rounded-lg shadow-card">
                <h3 className="text-2xl font-bold text-primary mb-2">Localização</h3>
                <p className="text-muted-foreground">Sobradinho, Brasília</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4">Nossa Especialidade</h3>
              <p className="mb-4 leading-relaxed">
                A restauração de faróis é nossa área de maior expertise. Utilizamos técnicas 
                especializadas para remover a oxidação e devolver a transparência original.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span>Remoção completa da oxidação</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span>Polimento profissional</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span>Aplicação de proteção UV</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span>Garantia de durabilidade</span>
                </li>
              </ul>
            </div>

            <div className="bg-muted/50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-primary mb-4">Por que escolher a Guimarim?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong className="text-primary">Atendimento personalizado:</strong> Cada cliente recebe atenção individual
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong className="text-primary">Produtos premium:</strong> Utilizamos apenas produtos de alta qualidade
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong className="text-primary">Garantia:</strong> Todos os serviços possuem garantia de qualidade
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;