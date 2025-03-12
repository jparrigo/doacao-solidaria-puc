
import React, { useEffect, useRef } from 'react';
import { GraduationCap } from 'lucide-react';

const StudentCredits: React.FC = () => {
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
    <section ref={sectionRef} className="py-16 bg-secondary">
      <div className="section-container max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center justify-center mb-6 appear-animation">
          <GraduationCap className="w-6 h-6 text-primary mr-2" />
          <h2 className="text-sm font-medium text-primary">Iniciativa estudantil</h2>
        </div>
        <h3 className="text-2xl md:text-3xl font-semibold mb-6 appear-animation" style={{ animationDelay: '0.2s' }}>
          Uma iniciativa dos alunos da PUC Campinas
        </h3>
        <p className="text-muted-foreground mb-10 appear-animation" style={{ animationDelay: '0.3s' }}>
          Esta campanha solidária foi organizada por estudantes comprometidos em fazer a diferença na comunidade local. 
          Acreditamos que pequenas ações, quando feitas em conjunto, podem transformar realidades.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 appear-animation" style={{ animationDelay: '0.4s' }}>
          <div className="px-6 py-3 rounded-full bg-white shadow-sm text-sm font-medium">
            Responsabilidade Social
          </div>
          <div className="px-6 py-3 rounded-full bg-white shadow-sm text-sm font-medium">
            Compromisso Comunitário
          </div>
          <div className="px-6 py-3 rounded-full bg-white shadow-sm text-sm font-medium">
            Solidariedade
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentCredits;
