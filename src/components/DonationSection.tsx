
import React, { useState } from 'react';
import { QrCode, Copy, CheckCircle2, Wallet } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

const DonationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const pixKey = "8fd796d4-eacd-42dc-be9c-3f44d51c00f5"; // Replace with your actual PIX key

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

  return (
    <section id="doar" className="section-container py-24 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center mb-4">
          <Wallet className="w-5 h-5 text-primary mr-2" />
          <h2 className="text-sm font-medium text-primary">Faça sua doação</h2>
        </div>
        <h3 className="section-title mb-6">Contribua com nossa campanha</h3>
        <p className="text-muted-foreground mb-8">Qualquer valor já faz uma grande diferença</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="qr-code-container flex flex-col items-center">
            <QrCode className="w-12 h-12 text-primary mb-4" />
            <h4 className="text-xl font-semibold mb-4">QR Code PIX</h4>
            <div className="w-56 h-56 bg-white p-2 rounded-lg border shadow-sm mb-4">
              <img 
                src="./qrcode.png"
                alt="QR Code PIX" 
                className="w-full h-full"
              />
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Escaneie o QR Code acima com o aplicativo do seu banco para fazer sua doação
            </p>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="glass-card p-8">
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
