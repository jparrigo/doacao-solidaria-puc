
import React from 'react';
import { HandHeart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-secondary to-background">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070')] bg-cover bg-center opacity-5"></div>
      </div>
      <div className="section-container text-center z-10">
        <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
          <HandHeart className="w-5 h-5 mr-2" />
          <span className="text-sm font-medium">Campanha Solidária</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl mx-auto leading-tight">
          Sua doação pode transformar vidas
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Ajude-nos a fornecer produtos essenciais para quem mais precisa através da sua generosidade
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#doar" className="px-8 py-3 rounded-full bg-primary text-white font-medium transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20">
            Doar Agora
          </a>
          <a href="#sobre" className="px-8 py-3 rounded-full bg-secondary text-foreground font-medium transition-all hover:bg-secondary/80">
            Saiba Mais
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
