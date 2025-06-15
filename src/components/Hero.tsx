
import { Button } from "@/components/ui/button";
import { Star, Clock, MapPin } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-20 pb-16 bg-gradient-to-br from-fast-pink-50 to-fast-purple-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Sua <span className="gradient-text">beleza</span> em
              <br />
              <span className="gradient-text">primeiro lugar!</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transforme seu visual com os melhores tratamentos capilares de Vila Prudente. 
              Escova progressiva, relaxamento e muito mais com produtos premium e 
              profissionais especializados.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-sm font-medium">5.0 estrelas</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <Clock className="w-5 h-5 text-fast-pink-500" />
                <span className="text-sm font-medium">Agendamento rápido</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                <MapPin className="w-5 h-5 text-fast-purple-500" />
                <span className="text-sm font-medium">Vila Prudente</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('agendamento')}
                size="lg"
                className="bg-gradient-fast hover:opacity-90 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Agendar Horário
              </Button>
              <Button
                onClick={() => scrollToSection('servicos')}
                variant="outline"
                size="lg"
                className="border-fast-pink-300 text-fast-pink-600 hover:bg-fast-pink-50 px-8 py-4 text-lg rounded-full"
              >
                Ver Serviços
              </Button>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-fast rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="aspect-square bg-gradient-fast-light rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-3xl">💇‍♀️</span>
                    </div>
                    <h3 className="text-xl font-bold text-fast-purple-700">Transformação Completa</h3>
                    <p className="text-fast-purple-600 mt-2">Cabelos dos sonhos te esperam</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-fast-pink-50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-fast-pink-600">500+</div>
                    <div className="text-sm text-fast-pink-700">Clientes felizes</div>
                  </div>
                  <div className="bg-fast-purple-50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-fast-purple-600">3 anos</div>
                    <div className="text-sm text-fast-purple-700">De experiência</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
