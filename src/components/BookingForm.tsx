
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, User, MessageCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: ""
  });

  const services = [
    "Escova Progressiva",
    "Relaxamento Capilar", 
    "Tratamento Reconstrutivo",
    "Escova Express",
    "Hidratação Profunda",
    "Corte e Escova"
  ];

  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.service || !formData.date || !formData.time) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // Aqui seria integrado com um sistema de agendamento real
    const whatsappMessage = `Olá! Gostaria de agendar um horário:
    
Nome: ${formData.name}
Telefone: ${formData.phone}
Serviço: ${formData.service}
Data: ${formData.date}
Horário: ${formData.time}
${formData.notes ? `Observações: ${formData.notes}` : ''}`;

    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Agendamento enviado!",
      description: "Você será redirecionado para o WhatsApp para confirmar seu horário.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="agendamento" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Agende seu <span className="gradient-text">Horário</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reserve já o seu horário e transforme seu visual conosco. 
            É rápido, fácil e você receberá confirmação via WhatsApp.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Formulário */}
            <Card className="border-none shadow-2xl">
              <CardHeader className="bg-gradient-fast text-white rounded-t-lg">
                <CardTitle className="text-2xl text-center">
                  📅 Formulário de Agendamento
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Nome Completo *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Digite seu nome completo"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">WhatsApp *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(11) 9 9999-9999"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Serviço Desejado *</Label>
                    <Select onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o serviço" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Data *
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange('date', e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Horário *
                      </Label>
                      <Select onValueChange={(value) => handleInputChange('time', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes" className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      Observações (opcional)
                    </Label>
                    <Textarea
                      id="notes"
                      placeholder="Alguma observação especial sobre seu cabelo ou preferências?"
                      value={formData.notes}
                      onChange={(e) => handleInputChange('notes', e.target.value)}
                      rows={3}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-fast hover:opacity-90 text-white py-4 text-lg rounded-full shadow-lg"
                  >
                    💬 Agendar via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Informações Adicionais */}
            <div className="space-y-8">
              <Card className="border-fast-pink-200 bg-fast-pink-50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-fast-pink-800 mb-4">
                    ⏰ Informações Importantes
                  </h3>
                  <ul className="space-y-3 text-fast-pink-700">
                    <li>• Confirmação em até 2 horas via WhatsApp</li>
                    <li>• Reagendamento até 24h antes do horário</li>
                    <li>• Chegue 10 minutos antes do seu horário</li>
                    <li>• Primeira consulta inclui avaliação gratuita</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-fast-purple-200 bg-fast-purple-50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-fast-purple-800 mb-4">
                    💝 Promoções Especiais
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-fast-purple-800">Primeira Vez</h4>
                      <p className="text-fast-purple-700 text-sm">15% de desconto em qualquer serviço</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-fast-purple-800">Indique uma Amiga</h4>
                      <p className="text-fast-purple-700 text-sm">Ganhe 10% de desconto na próxima visita</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-gradient-fast rounded-2xl p-6 text-white text-center">
                <h3 className="text-xl font-bold mb-2">🔥 Horários Mais Procurados</h3>
                <p className="mb-4 opacity-90">Sábados das 9h às 12h</p>
                <p className="text-sm opacity-80">
                  Reserve com antecedência para garantir seu horário preferido!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
