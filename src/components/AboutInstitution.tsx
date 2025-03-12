
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
        <div className="glass-card p-8 appear-animation mt-8" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-6">
            <img src="./grupo-vida.jpeg" alt="Grupo Vida Logo" />
          </div>
          <h4 className="text-xl font-semibold mb-4">Casa de Apoio Grupo Vida</h4>
          <p className="text-muted-foreground mb-6">
          Somos uma casa de apoio de retaguarda social fundada em 2001, portanto estamos a mais de 20 anos nessa luta, acolhendo pessoas que vive com HIV/AIDS no Municipio de Campinas. Trabalhamos para erradicar os preconceitos e as doenças das pessoas que sofrem abandono social e falta de tratamentos, seja por falta de recursos, ou de conhecimentos.
          </p>
          <p className="text-muted-foreground mb-6">
          Hoje somos a única casa de apoio habilitada em Parceria com a Secretaria Municipal de Saude.
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
