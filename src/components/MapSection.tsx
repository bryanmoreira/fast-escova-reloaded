
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const MapSection = () => {
  const [mapboxToken, setMapboxToken] = useState("");
  const [showTokenInput, setShowTokenInput] = useState(true);

  const address = "Rua Avaré, 134 - Vila Prudente, São Paulo - SP, 03125-000";
  const coordinates = { lat: -23.5925, lng: -46.5765 };

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      setShowTokenInput(false);
      toast({
        title: "Token adicionado!",
        description: "O mapa será carregado em seguida.",
      });
    }
  };

  const openInMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="localizacao" className="py-20 bg-gradient-to-br from-fast-pink-50 to-fast-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Nossa <span className="gradient-text">Localização</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Venha nos visitar! Estamos estrategicamente localizadas em Vila Prudente, 
            com fácil acesso e estacionamento próximo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Informações de Localização */}
          <div className="space-y-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-fast rounded-xl flex items-center justify-center text-white">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Endereço</h3>
                    <p className="text-gray-600">
                      Rua Avaré, 134<br />
                      Vila Prudente, São Paulo - SP<br />
                      CEP: 03125-000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-fast rounded-xl flex items-center justify-center text-white">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Horário de Funcionamento</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Segunda a Sexta: 9h às 19h</p>
                      <p>Sábado: 8h às 17h</p>
                      <p>Domingo: Fechado</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-fast rounded-xl flex items-center justify-center text-white">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Contato</h3>
                    <p className="text-gray-600">
                      WhatsApp: (11) 9 9999-9999<br />
                      Instagram: @fastescovavilaprudente
                    </p>
                  </div>
                </div>

                <Button 
                  onClick={openInMaps}
                  className="w-full bg-gradient-fast hover:opacity-90 text-white"
                  size="lg"
                >
                  <Navigation className="w-5 h-5 mr-2" />
                  Abrir no Google Maps
                </Button>
              </CardContent>
            </Card>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🚗 Como Chegar</h3>
              <div className="space-y-3 text-gray-600">
                <p><strong>De carro:</strong> Estacionamento disponível na rua e proximidades</p>
                <p><strong>Transporte público:</strong> Próximo ao metrô Vila Prudente (Linha Vermelha)</p>
                <p><strong>Ônibus:</strong> Diversas linhas passam pela região</p>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="lg:sticky lg:top-24">
            <Card className="border-none shadow-lg overflow-hidden">
              <CardContent className="p-0">
                {showTokenInput ? (
                  <div className="p-8 text-center bg-gradient-fast-light min-h-[400px] flex flex-col justify-center">
                    <div className="max-w-md mx-auto">
                      <h3 className="text-xl font-bold text-fast-purple-800 mb-4">
                        🗺️ Mapa Interativo
                      </h3>
                      <p className="text-fast-purple-700 mb-6">
                        Para carregar o mapa interativo, insira seu token do Mapbox:
                      </p>
                      <div className="space-y-4">
                        <Input
                          type="text"
                          placeholder="Cole seu token do Mapbox aqui"
                          value={mapboxToken}
                          onChange={(e) => setMapboxToken(e.target.value)}
                          className="bg-white"
                        />
                        <Button 
                          onClick={handleTokenSubmit}
                          className="w-full bg-gradient-fast hover:opacity-90"
                        >
                          Carregar Mapa
                        </Button>
                      </div>
                      <p className="text-sm text-fast-purple-600 mt-4">
                        Não tem um token? Visite{" "}
                        <a 
                          href="https://mapbox.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="underline hover:text-fast-purple-800"
                        >
                          mapbox.com
                        </a>
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gradient-fast-light min-h-[400px] flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <MapPin className="w-10 h-10 text-fast-pink-500" />
                      </div>
                      <h3 className="text-xl font-bold text-fast-purple-800 mb-2">
                        Fast Escova Vila Prudente
                      </h3>
                      <p className="text-fast-purple-700">
                        Rua Avaré, 134 - Vila Prudente
                      </p>
                      <Button 
                        onClick={openInMaps}
                        className="mt-4 bg-white text-fast-purple-700 hover:bg-gray-50"
                      >
                        Ver no Google Maps
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
