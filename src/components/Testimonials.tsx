
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Carolina",
      service: "Escova Progressiva",
      rating: 5,
      comment: "Simplesmente perfeito! Meu cabelo nunca esteve tão liso e brilhante. A Fast Escova superou todas as minhas expectativas.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b606?w=100"
    },
    {
      name: "Mariana Silva",
      service: "Relaxamento Capilar",
      rating: 5,
      comment: "Profissionais incríveis! O atendimento foi maravilhoso e o resultado durou muito mais do que eu esperava.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100"
    },
    {
      name: "Juliana Santos",
      service: "Tratamento Reconstrutivo",
      rating: 5,
      comment: "Meus cabelos estavam muito danificados e elas conseguiram recuperar completamente. Recomendo de olhos fechados!",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100"
    },
    {
      name: "Fernanda Costa",
      service: "Escova Express",
      rating: 5,
      comment: "Perfeito para quem tem pressa! Em menos de uma hora saí com o cabelo dos sonhos. Voltarei sempre!",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            O que dizem nossas <span className="gradient-text">clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A satisfação das nossas clientes é nossa maior recompensa. 
            Veja alguns depoimentos de quem já experimentou nossos serviços.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.comment}"
                </p>
                
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-fast-yellow-600">{testimonial.service}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-fast rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              ⭐ Mais de 500 clientes satisfeitas!
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Junte-se ao nosso time de clientes felizes e transforme seu visual hoje mesmo.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold">4.9/5</div>
                <div className="text-sm opacity-80">Avaliação média</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm opacity-80">Clientes atendidas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">95%</div>
                <div className="text-sm opacity-80">Retorno de clientes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
