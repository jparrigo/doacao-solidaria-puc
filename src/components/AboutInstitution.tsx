
import React, { useEffect, useRef } from 'react';
import { Info, Building } from 'lucide-react';

const AboutInstitution: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.appear-animation');
            elements.forEach((el, index) => {
              if (el instanceof HTMLElement) {
                el.style.animationDelay = `${0.1 + index * 0.1}s`;
              }
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="sobre" ref={sectionRef} className="section-container py-24 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center mb-4 appear-animation">
          <Info className="w-5 h-5 text-primary mr-2" />
          <h2 className="text-sm font-medium text-primary">Sobre a Instituição</h2>
        </div>
        <h3 className="section-title">Conheça a quem iremos ajudar</h3>
        <p className="section-subtitle">Uma instituição comprometida em fazer a diferença</p>
        
        <div className="glass-card p-8 appear-animation" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-6">
            <Building className="w-7 h-7 text-primary" />
          </div>
          <h4 className="text-xl font-semibold mb-4">Instituição de Assistência Social</h4>
          <p className="text-muted-foreground mb-6">
            A instituição atende pessoas em situação de vulnerabilidade social na região de Campinas há mais de 15 anos, 
            fornecendo alimentação, produtos de higiene, vestuário e apoio psicológico para famílias carentes.
          </p>
          <p className="text-muted-foreground mb-6">
            Com mais de 200 assistidos mensalmente, a instituição se mantém através de doações de pessoas físicas e 
            jurídicas, além do trabalho voluntário de profissionais de diversas áreas.
          </p>
          <p className="text-muted-foreground">
            Sua doação será transformada em itens essenciais para o dia a dia dessas pessoas, contribuindo diretamente 
            para a melhoria da qualidade de vida e dignidade dos assistidos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutInstitution;
