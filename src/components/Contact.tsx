
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Instagram, Clock, MapPin } from "lucide-react";

const Contact = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de mais informações sobre os serviços da Fast Escova.', '_blank');
  };

  const openInstagram = () => {
    window.open('https://instagram.com/fastescovavilaprudente', '_blank');
  };

  const callPhone = () => {
    window.open('tel:+5511999999999');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-fast-purple-50 to-fast-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aqui para tirar suas dúvidas e ajudar você a escolher 
            o melhor tratamento para seu cabelo. Fale conosco!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-none shadow-lg cursor-pointer" onClick={openWhatsApp}>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">WhatsApp</h3>
              <p className="text-gray-600 mb-4">(11) 9 9999-9999</p>
              <p className="text-sm text-green-600 font-medium">Resposta em minutos</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-none shadow-lg cursor-pointer" onClick={openInstagram}>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform">
                <Instagram className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Instagram</h3>
              <p className="text-gray-600 mb-4">@fastescovavilaprudente</p>
              <p className="text-sm text-purple-600 font-medium">Veja nossos trabalhos</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-none shadow-lg cursor-pointer" onClick={callPhone}>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Telefone</h3>
              <p className="text-gray-600 mb-4">(11) 9 9999-9999</p>
              <p className="text-sm text-blue-600 font-medium">Ligue agora</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-none shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Horários</h3>
              <p className="text-gray-600 mb-2">Seg-Sex: 9h-19h</p>
              <p className="text-gray-600 mb-4">Sáb: 8h-17h</p>
              <p className="text-sm text-orange-600 font-medium">Dom: Fechado</p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-2xl">
            <CardContent className="p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6 text-gray-800">
                    Pronta para uma <span className="gradient-text">transformação</span>?
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Não perca mais tempo! Entre em contato conosco agora e agende seu horário. 
                    Nossa equipe está pronta para realizar a transformação que você sempre sonhou.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-fast-pink-100 rounded-lg flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-fast-pink-600" />
                      </div>
                      <span className="text-gray-700">Rua Avaré, 134 - Vila Prudente</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-fast-purple-100 rounded-lg flex items-center justify-center">
                        <Clock className="w-4 h-4 text-fast-purple-600" />
                      </div>
                      <span className="text-gray-700">Atendimento de segunda a sábado</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={openWhatsApp}
                      size="lg"
                      className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full shadow-lg"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp
                    </Button>
                    <Button
                      onClick={openInstagram}
                      variant="outline"
                      size="lg"
                      className="border-fast-pink-300 text-fast-pink-600 hover:bg-fast-pink-50 px-8 py-4 rounded-full"
                    >
                      <Instagram className="w-5 h-5 mr-2" />
                      Seguir no Instagram
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-fast rounded-3xl transform rotate-3 opacity-20"></div>
                  <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-gradient-fast rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">💁‍♀️</span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-800">Atendimento Personalizado</h4>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-fast-pink-50 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-fast-pink-600">100%</div>
                        <div className="text-sm text-fast-pink-700">Satisfação garantida</div>
                      </div>
                      <div className="bg-fast-purple-50 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-fast-purple-600">24h</div>
                        <div className="text-sm text-fast-purple-700">Suporte via WhatsApp</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
