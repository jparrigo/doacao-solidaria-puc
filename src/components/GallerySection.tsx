
import React, { useState } from 'react';
import { Wallet } from 'lucide-react';

const GallerySection: React.FC = () => {
  return (
    <section id="doar" className="section-container py-24 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center mb-4">
          <Wallet className="w-5 h-5 text-primary mr-2" />
          <h2 className="text-sm font-medium text-primary">Doação finalizada!</h2>
        </div>
        <h3 className="section-title mb-6">Obrigado a todos que contribuiram</h3>
        <div className='grid grid-flow-row grid-cols-3 gap-2 justify-stretch items-stretch'>
          {
            Array.from({ length: 25}).map((_, index) => (
              <img
                key={index} 
                src={`./fotos/${index+1}.jpg`} 
                alt="Imagens"
                className='object-cover' 
              />
            ))
          }
        </div>
        
      </div>
    </section>
  );
};

export default GallerySection;
