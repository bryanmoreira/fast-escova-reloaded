
import { Heart, Instagram, MessageCircle, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5511999999999', '_blank');
  };

  const openInstagram = () => {
    window.open('https://instagram.com/fastescovavilaprudente', '_blank');
  };

  const openMaps = () => {
    const address = "Rua Avaré, 134 - Vila Prudente, São Paulo - SP, 03125-000";
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(url, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sobre */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-fast rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-2xl font-bold gradient-text">Fast Escova</span>
            </div>
            <p className="text-gray-300 mb-6">
              Transformando cabelos e elevando a autoestima das mulheres de Vila Prudente 
              há mais de 3 anos. Sua beleza é nossa paixão!
            </p>
            <div className="flex space-x-4">
              <button
                onClick={openWhatsApp}
                className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
              <button
                onClick={openInstagram}
                className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Instagram className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-xl font-bold mb-6">Nossos Serviços</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-fast-yellow-400 transition-colors cursor-pointer">Escova Progressiva</li>
              <li className="hover:text-fast-yellow-400 transition-colors cursor-pointer">Relaxamento Capilar</li>
              <li className="hover:text-fast-yellow-400 transition-colors cursor-pointer">Tratamento Reconstrutivo</li>
              <li className="hover:text-fast-yellow-400 transition-colors cursor-pointer">Escova Express</li>
              <li className="hover:text-fast-yellow-400 transition-colors cursor-pointer">Hidratação Profunda</li>
              <li className="hover:text-fast-yellow-400 transition-colors cursor-pointer">Corte e Escova</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-fast-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <p>Rua Avaré, 134</p>
                  <p>Vila Prudente, São Paulo - SP</p>
                  <p>CEP: 03125-000</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-green-400" />
                <span>(11) 9 9999-9999</span>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-purple-400" />
                <span>@fastescovavilaprudente</span>
              </div>
            </div>
          </div>

          {/* Horários */}
          <div>
            <h3 className="text-xl font-bold mb-6">Horário de Funcionamento</h3>
            <div className="space-y-3 text-gray-300">
              <div>
                <h4 className="font-semibold text-white">Segunda a Sexta</h4>
                <p>9h às 19h</p>
              </div>
              <div>
                <h4 className="font-semibold text-white">Sábado</h4>
                <p>8h às 17h</p>
              </div>
              <div>
                <h4 className="font-semibold text-white">Domingo</h4>
                <p className="text-red-400">Fechado</p>
              </div>
            </div>
            
            <button
              onClick={openMaps}
              className="mt-6 bg-gradient-fast hover:opacity-90 text-white px-4 py-2 rounded-full transition-opacity"
            >
              <MapPin className="w-4 h-4 inline mr-2" />
              Como chegar
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-12"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-center md:text-left">
            <p>&copy; {currentYear} Fast Escova Vila Prudente. Todos os direitos reservados.</p>
            <p className="text-sm mt-1">
              Desenvolvido com <Heart className="w-4 h-4 inline text-fast-yellow-400" /> para sua beleza
            </p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="bg-fast-yellow-600 hover:bg-fast-yellow-700 text-white px-6 py-2 rounded-full transition-colors"
          >
            Voltar ao topo
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
