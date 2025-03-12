
import React, { useEffect, useRef, useState } from 'react';
import { QrCode, Copy, CheckCircle2, Wallet } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

const DonationSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const pixKey = "example@email.com"; // Replace with your actual PIX key

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    toast({
      title: "Chave PIX copiada!",
      description: "Cole no seu aplicativo de banco para fazer a doação.",
    });
    
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

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
    <section id="doar" ref={sectionRef} className="section-container py-24 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center mb-4 appear-animation">
          <Wallet className="w-5 h-5 text-primary mr-2" />
          <h2 className="text-sm font-medium text-primary">Faça sua doação</h2>
        </div>
        <h3 className="section-title mb-2">Contribua com nossa campanha</h3>
        <p className="section-subtitle mb-8 text-muted-foreground">Qualquer valor já faz uma grande diferença</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="qr-code-container appear-animation flex flex-col items-center" style={{ animationDelay: '0.3s' }}>
            <QrCode className="w-12 h-12 text-primary mb-4" />
            <h4 className="text-xl font-semibold mb-4">QR Code PIX</h4>
            <div className="w-56 h-56 bg-white p-2 rounded-lg border shadow-sm mb-4">
              <img 
                src="https://chart.googleapis.com/chart?cht=qr&chl=example@email.com&chs=280x280&choe=UTF-8&chld=L|1"
                alt="QR Code PIX" 
                className="w-full h-full"
                onLoad={(e) => {
                  if (e.currentTarget) {
                    e.currentTarget.style.animation = "blur-in 0.5s ease-out forwards";
                  }
                }}
              />
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Escaneie o QR Code acima com o aplicativo do seu banco para fazer sua doação
            </p>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="glass-card p-8 appear-animation" style={{ animationDelay: '0.4s' }}>
              <h4 className="text-xl font-semibold mb-4">Chave PIX</h4>
              <p className="text-muted-foreground mb-6">
                Se preferir, você também pode copiar nossa chave PIX e colar diretamente no aplicativo do seu banco:
              </p>
              
              <div className="relative">
                <div 
                  className="flex items-center p-4 bg-secondary rounded-lg cursor-pointer"
                  onClick={copyToClipboard}
                >
                  <span className="truncate mr-2 font-mono">{pixKey}</span>
                  <button 
                    className="ml-auto p-2 rounded-full hover:bg-white hover:shadow-sm transition-all"
                    title="Copiar chave PIX"
                  >
                    {copied ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    ) : (
                      <Copy className="w-5 h-5 text-muted-foreground" />
                    )}
                  </button>
                </div>
              </div>
              
              <p className="mt-6 text-sm text-muted-foreground">
                Após a doação, agradecemos se puder compartilhar esta campanha com amigos e familiares para 
                que possamos ajudar ainda mais pessoas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
