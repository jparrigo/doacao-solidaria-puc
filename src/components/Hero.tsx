
import React, { useEffect, useRef } from 'react';
import { HandHeart } from 'lucide-react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [titleRef.current, subtitleRef.current, ctaRef.current];
    
    elements.forEach((el, index) => {
      if (el) {
        el.style.opacity = '0';
        el.style.animation = `fade-in-up 0.8s ease-out forwards ${0.2 + index * 0.2}s`;
      }
    });
  }, []);

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-secondary to-background">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070')] bg-cover bg-center opacity-5"></div>
      </div>
      <div className="section-container text-center z-10">
        <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 opacity-0" style={{animation: 'fade-in 0.8s ease-out forwards 0.1s'}}>
          <HandHeart className="w-5 h-5 mr-2" />
          <span className="text-sm font-medium">Campanha Solidária</span>
        </div>
        <h1 ref={titleRef} className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl mx-auto leading-tight">
          Sua doação pode transformar vidas
        </h1>
        <p ref={subtitleRef} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Ajude-nos a fornecer produtos essenciais para quem mais precisa através da sua generosidade
        </p>
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
