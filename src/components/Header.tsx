
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-fast-yellow-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-fast rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="text-2xl font-bold gradient-text">Fast Escova</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-fast-yellow-500 transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-gray-700 hover:text-fast-yellow-500 transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('galeria')}
              className="text-gray-700 hover:text-fast-yellow-500 transition-colors"
            >
              Galeria
            </button>
            <button
              onClick={() => scrollToSection('localizacao')}
              className="text-gray-700 hover:text-fast-yellow-500 transition-colors"
            >
              Localização
            </button>
            <button
              onClick={() => scrollToSection('agendamento')}
              className="text-gray-700 hover:text-fast-yellow-500 transition-colors"
            >
              Agendamento
            </button>
            <Button
              onClick={() => scrollToSection('agendamento')}
              className="bg-gradient-fast hover:opacity-90 text-white px-6 py-2 rounded-full"
            >
              Agendar Agora
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-fast-yellow-100">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-left text-gray-700 hover:text-fast-yellow-500 transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="text-left text-gray-700 hover:text-fast-yellow-500 transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('galeria')}
                className="text-left text-gray-700 hover:text-fast-yellow-500 transition-colors"
              >
                Galeria
              </button>
              <button
                onClick={() => scrollToSection('localizacao')}
                className="text-left text-gray-700 hover:text-fast-yellow-500 transition-colors"
              >
                Localização
              </button>
              <button
                onClick={() => scrollToSection('agendamento')}
                className="text-left text-gray-700 hover:text-fast-yellow-500 transition-colors"
              >
                Agendamento
              </button>
              <Button
                onClick={() => scrollToSection('agendamento')}
                className="bg-gradient-fast hover:opacity-90 text-white w-full mt-4"
              >
                Agendar Agora
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
