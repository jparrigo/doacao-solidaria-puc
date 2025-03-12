
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import AboutInstitution from '@/components/AboutInstitution';
import ItemsList from '@/components/ItemsList';
import DonationSection from '@/components/DonationSection';
import StudentCredits from '@/components/StudentCredits';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchorLink = target.closest('a[href^="#"]');
      
      if (anchorLink) {
        e.preventDefault();
        const targetId = anchorLink.getAttribute('href');
        
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.pageYOffset - 80,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Heart className="w-5 h-5 text-primary" />
              <span className="ml-2 font-semibold">Campanha Solidária</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#sobre" className="text-sm text-foreground hover:text-primary transition-colors">Sobre</a>
              <a href="#doar" className="text-sm text-foreground hover:text-primary transition-colors">Doar</a>
              <a 
                href="#doar" 
                className="px-4 py-2 rounded-full bg-primary text-white text-sm hover:bg-primary/90 transition-colors"
              >
                Fazer Doação
              </a>
            </nav>
            <button className="md:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <AboutInstitution />
        <ItemsList />
        <DonationSection />
        <StudentCredits />
      </main>

      <Footer />
    </div>
  );
};

// Import for the mobile menu button
const Menu = (props: any) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

// Heart icon for the header
const Heart = (props: any) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

export default Index;
