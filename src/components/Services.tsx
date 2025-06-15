
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Star, Heart, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Escova Progressiva",
      description: "Elimine o frizz e tenha cabelos lisos e sedosos por meses. Tratamento profissional com produtos de alta qualidade.",
      duration: "3-4 horas",
      highlight: "Mais popular",
      color: "fast-yellow"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Relaxamento Capilar",
      description: "Transforme cabelos crespos em lisos definitivamente. Técnica segura e resultados duradouros.",
      duration: "2-3 horas",
      highlight: "Resultado duradouro",
      color: "fast-black"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Tratamento Reconstrutivo",
      description: "Recupere a saúde dos seus cabelos com nossos tratamentos intensivos de hidratação e nutrição.",
      duration: "1-2 horas",
      highlight: "Cabelos saudáveis",
      color: "fast-yellow"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Escova Express",
      description: "Para quem tem pressa mas não abre mão da beleza. Escova rápida com secagem profissional.",
      duration: "45 min",
      highlight: "Resultado rápido",
      color: "fast-black"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de tratamentos capilares para você se sentir 
            ainda mais bonita e confiante. Cada serviço é personalizado para suas necessidades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-none shadow-lg"
            >
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform ${
                  service.color === 'fast-yellow' 
                    ? 'bg-gradient-yellow' 
                    : 'bg-gradient-to-br from-fast-black-400 to-fast-black-600'
                }`}>
                  {service.icon}
                </div>
                
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                  service.color === 'fast-yellow'
                    ? 'bg-fast-yellow-100 text-fast-yellow-600'
                    : 'bg-fast-black-100 text-fast-black-700'
                }`}>
                  {service.highlight}
                </div>

                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 flex-grow">
                  {service.description}
                </p>

                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>{service.duration}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-yellow-light rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-fast-black-800 mb-4">
              💝 Primeira vez? Ganhe 15% de desconto!
            </h3>
            <p className="text-fast-black-700 text-lg">
              Venha conhecer nosso trabalho e se apaixonar pelo resultado. 
              Desconto válido para todos os serviços na sua primeira visita.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
