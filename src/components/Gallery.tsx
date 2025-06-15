
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const transformations = [
    {
      before: "https://images.unsplash.com/photo-1594736797933-d0dd59654279?w=400",
      after: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400",
      service: "Escova Progressiva",
      description: "Transformação incrível com escova progressiva"
    },
    {
      before: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400",
      after: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=400",
      service: "Relaxamento",
      description: "Cabelos crespos transformados em lisos"
    },
    {
      before: "https://images.unsplash.com/photo-1595475884433-e73266295772?w=400",
      after: "https://images.unsplash.com/photo-1526045431048-f857369baa09?w=400",
      service: "Tratamento",
      description: "Recuperação completa da saúde capilar"
    },
    {
      before: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
      after: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400",
      service: "Escova Express",
      description: "Resultado profissional em poucos minutos"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-gradient-to-br from-fast-purple-50 to-fast-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Transformações</span> Reais
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja o antes e depois de algumas de nossas clientes. 
            Cada transformação é única e personalizada para realçar a beleza natural.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {transformations.map((item, index) => (
            <Card key={index} className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="grid grid-cols-2">
                    <div className="relative overflow-hidden">
                      <img 
                        src={item.before} 
                        alt="Antes" 
                        className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Antes
                      </div>
                    </div>
                    <div className="relative overflow-hidden">
                      <img 
                        src={item.after} 
                        alt="Depois" 
                        className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Depois
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="inline-block px-3 py-1 bg-gradient-fast text-white rounded-full text-sm font-medium mb-3">
                      {item.service}
                    </div>
                    <p className="text-gray-600 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              ✨ Quer ser a próxima transformação?
            </h3>
            <p className="text-gray-600 mb-6">
              Agende seu horário e descubra como podemos transformar seu visual. 
              Resultados que você vai amar!
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('agendamento');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-fast text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Quero Agendar Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
