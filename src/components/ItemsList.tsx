
import React, { useEffect, useRef } from 'react';
import { Check, ShoppingCart } from 'lucide-react';

interface Item {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const ItemsList: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const items: Item[] = [
    {
      name: "Alimentos não perecíveis",
      description: "Arroz, feijão, macarrão, óleo, açúcar, entre outros itens essenciais para a alimentação básica.",
      icon: <div className="w-12 h-12 rounded-full flex items-center justify-center bg-amber-100 text-amber-600">🍚</div>
    },
    {
      name: "Produtos de higiene pessoal",
      description: "Sabonetes, pasta de dente, escovas de dente, shampoo, papel higiênico e absorventes.",
      icon: <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-100 text-blue-600">🧴</div>
    },
    {
      name: "Produtos de limpeza",
      description: "Detergente, sabão em pó, água sanitária, desinfetante e panos de limpeza.",
      icon: <div className="w-12 h-12 rounded-full flex items-center justify-center bg-green-100 text-green-600">🧼</div>
    },
    {
      name: "Roupas de cama e banho",
      description: "Lençóis, toalhas, cobertores e travesseiros para os assistidos.",
      icon: <div className="w-12 h-12 rounded-full flex items-center justify-center bg-purple-100 text-purple-600">🛏️</div>
    },
    {
      name: "Material escolar",
      description: "Cadernos, lápis, canetas, borrachas e mochilas para crianças assistidas.",
      icon: <div className="w-12 h-12 rounded-full flex items-center justify-center bg-red-100 text-red-600">📚</div>
    },
    {
      name: "Medicamentos",
      description: "Remédios básicos como analgésicos, antitérmicos e anti-inflamatórios.",
      icon: <div className="w-12 h-12 rounded-full flex items-center justify-center bg-teal-100 text-teal-600">💊</div>
    }
  ];

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
    <section ref={sectionRef} className="section-container py-24 bg-secondary/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-4 appear-animation">
          <ShoppingCart className="w-5 h-5 text-primary mr-2" />
          <h2 className="text-sm font-medium text-primary">Itens Previstos</h2>
        </div>
        <h3 className="section-title">O que iremos comprar com sua doação</h3>
        <p className="section-subtitle">Cada centavo doado será convertido em produtos essenciais</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {items.map((item, index) => (
            <div 
              key={index}
              className="glass-card p-6 card-hover appear-animation"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="flex items-start">
                <div className="mr-4 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">{item.name}</h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center appear-animation" style={{ animationDelay: '0.7s' }}>
          <div className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-primary/10 text-primary">
            <Check className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">100% das doações serão convertidas em produtos</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemsList;
