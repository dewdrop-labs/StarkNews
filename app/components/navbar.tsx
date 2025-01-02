'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ChevronDown, Globe } from 'lucide-react';

// Language context
const LanguageContext = createContext({
  currentLanguage: 'en',
  setCurrentLanguage: (lang: string) => {},
  isTranslating: false
});

export const LanguageProvider = ({ children }: {children: any}) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isTranslating, setIsTranslating] = useState(false);

  const translatePage = async (targetLang: any) => {
    if (targetLang === 'en') return;
    setIsTranslating(true);
    
    try {
      // Translation logic would go here
      // For demonstration, adding a delay to simulate translation
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error('Translation error:', error);
    } finally {
      setIsTranslating(false);
    }
  };

  useEffect(() => {
    translatePage(currentLanguage);
  }, [currentLanguage]);

  return (
    <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage, isTranslating }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const LanguageSelector = () => {
  const { currentLanguage, setCurrentLanguage, isTranslating } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'zh', name: '中文' }
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isTranslating}
        className="border border-primary rounded-full px-4 py-2 flex items-center gap-2 bg-white hover:bg-gray-50 transition-colors"
      >
        <Globe className="w-4 h-4 text-primary" />
        <span className="text-primary">
          {languages.find(lang => lang.code === currentLanguage)?.code.toUpperCase()}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-primary transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-1 w-32">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className="w-full px-4 py-2 text-left hover:bg-gray-50 text-primary"
              onClick={() => {
                setCurrentLanguage(lang.code);
                setIsOpen(false);
              }}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}

      {isTranslating && (
        <div className="absolute right-12 top-1/2 -translate-y-1/2">
          <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        setScrolled(isScrolled);
      };
  
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <header 
        className={`
          w-full 
          fixed 
          top-0 
          z-50 
          transition-all 
          duration-300
          ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-white/80 backdrop-blur-md'}
          flex 
          items-center 
          justify-center 
          gap-[15%]
          py-4
        `}
      >
        <div className="flex items-center px-6">
          <h1 className="text-primary text-[20px] font-semibold">STARKNET</h1>
          <h1 className="text-[#BCD5FF] text-[20px] font-semibold">NEWS</h1>
        </div>
       
        <nav className="flex">
          <a href="#" className="text-primary px-4 hover:text-blue-400 transition-colors">News</a>
          <a href="#" className="text-primary px-4 hover:text-blue-400 transition-colors">Videos</a>
          <a href="#" className="text-primary px-4 hover:text-blue-400 transition-colors">Events</a>
          <a href="#" className="text-primary px-4 hover:text-blue-400 transition-colors">Hackathon</a>
          <a href="#" className="text-primary px-4 hover:text-blue-400 transition-colors">Learn</a>
          <a href="#" className="text-primary px-4 hover:text-blue-400 transition-colors">Newsletter</a>
        </nav>
  
        <LanguageSelector />
      </header>
    );
  };
  
  export default Navbar;