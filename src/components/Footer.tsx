
import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white py-12 border-t">
      <div className="section-container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <Heart className="w-5 h-5 text-primary mr-2" />
              <span className="font-semibold text-lg">Campanha Solidária</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Transformando vidas através da solidariedade
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm text-muted-foreground">
              © {currentYear} PUC Campinas. Todos os direitos reservados.
            </p>
            <div className="flex items-center mt-2">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors mr-4">
                Política de Privacidade
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
