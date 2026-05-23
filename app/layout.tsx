'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [triggerFooterAnimation, setTriggerFooterAnimation] = useState(false);

  useEffect(() => {
    // Intermittent loop sequence runner for live footer word jumping
    const interval = setInterval(() => {
      setTriggerFooterAnimation(true);
      setTimeout(() => setTriggerFooterAnimation(false), 2500); 
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const footerTextRaw = "LET'S CREATE SOMETHING EXTRAORDINARY.";

  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0b0c10] text-white antialiased flex flex-col min-h-screen relative">
        
        {/* GLOBAL HEADER HEADER WITH INTEGRATED 3D EFFECT LOGO */}
        <header className="fixed top-0 left-0 w-full z-40 bg-neutral-950/95 backdrop-blur-md border-b border-white/10 px-4 py-3 md:px-12 md:py-4 flex justify-between items-center h-20">
          <Link href="/" className="flex items-center perspective-1000">
            <div className="logo-3d-glow relative block">
              <Image 
                src="/logo.png" 
                alt="Star Station Logo" 
                width={200} 
                height={55} 
                className="h-9 md:h-12 w-auto object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                priority 
              />
            </div>
          </Link>
          
          <div className="flex items-center gap-6">
            {/* Re-instated Events Module Tab safely to navigation array list */}
            <nav className="hidden lg:flex gap-6 xl:gap-8 text-xs font-black tracking-widest uppercase text-white/90">
              <Link href="/#capabilities" className="hover:text-[#00A86B] transition-colors py-2">Capabilities</Link>
              <Link href="/#work" className="hover:text-[#00A86B] transition-colors py-2">Our Work</Link>
              <Link href="/events" className="hover:text-[#00A86B] transition-colors py-2">Events</Link>
              <Link href="/contact" className="hover:text-[#ED1C24] transition-colors py-2">Let's Build</Link>
            </nav>

            <div className="hidden sm:flex items-center gap-3 border-l border-white/20 pl-4 text-white/50">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition-colors p-1">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors p-1">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
        </header>

        {/* CONTAINER ROUTE ELEMENT */}
        <main className="flex-grow pt-20">
          {children}
        </main>

        {/* HIGH-ENERGY SYSTEM FOOTER ARCHITECTURE WITH JUMPING TYPOGRAPHY ENGINE */}
        <footer className="bg-black border-t border-white/10 py-12 px-6 md:px-12 relative z-30 select-none">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <Link href="/" className="inline-block perspective-1000">
                <div className="logo-3d-glow relative block">
                  <Image 
                    src="/logo.png" 
                    alt="Star Station Logo Footer" 
                    width={180} 
                    height={50} 
                    className="h-8 md:h-11 w-auto object-contain" 
                  />
                </div>
              </Link>
              
              {/* Dynamic Typography Box: Appears complete first, then fires sequenced jumping letters */}
              <h2 className="font-black text-2xl md:text-4xl lg:text-5xl tracking-tighter leading-none text-white uppercase block">
                <div className={`flex flex-wrap gap-x-[0.25em] gap-y-1 ${triggerFooterAnimation ? 'footer-jump-active' : ''}`}>
                  {footerTextRaw.split(" ").map((word, wordIdx) => (
                    <span key={wordIdx} className="inline-block whitespace-nowrap">
                      {word.split("").map((char, charIdx) => (
                        <span 
                          key={charIdx} 
                          style={{ animationDelay: `${(wordIdx * 3 + charIdx) * 35}ms` }}
                        >
                          {char}
                        </span>
                      ))}
                    </span>
                  ))}
                </div>
              </h2>
            </div>
            
            <div className="flex flex-col justify-between text-xs text-white/60 space-y-6 md:space-y-0 md:text-right">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#00A86B] font-bold mb-1">HQ Operations</p>
                <p className="font-medium text-white max-w-sm md:ml-auto">2a Oluwatosin Street, Oral Estate, Lagos, Nigeria</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#ED1C24] font-bold mb-1">Direct Secure Line</p>
                <p className="text-sm md:text-base font-black text-white hover:text-[#00A86B] transition-colors">
                  <a href="mailto:trystarstation@gmail.com">trystarstation@gmail.com</a>
                </p>
                <p className="text-white/80 mt-0.5">+234 809 100 0449</p>
              </div>
            </div>
          </div>
        </footer>

        {/* FLOATING WHATSAPP CHAT MODULE */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 select-none">
          {isWhatsAppOpen && (
            <div className="bg-neutral-900 border border-white/10 w-72 rounded-lg shadow-2xl overflow-hidden text-left font-sans animate-fadeIn">
              <div className="bg-[#075E54] p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-black text-white text-sm">SS</div>
                <div>
                  <h4 className="text-xs font-bold text-white tracking-wide">Star Station Operations</h4>
                  <p className="text-[10px] text-white/80">Typically replies immediately</p>
                </div>
              </div>
              <div className="p-4 bg-[#111111] space-y-3">
                <div className="bg-neutral-800 text-white/90 text-xs p-3 rounded-lg rounded-tl-none max-w-[90%] inline-block">
                  Hello! Welcome to Star Station. Let's discuss transforming your corporate parameters or launching an elite campaign. How can we serve you today?
                </div>
                <a 
                  href="https://wa.me/2348091000449?text=Hello%20Star%20Station%2C%20I%20would%20like%20to%20inquire%20about%20your%20management%20services."
                  target="_blank"
                  rel="noreferrer"
                  className="block text-center bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-xs uppercase tracking-wider py-2.5 rounded-sm transition-colors mt-2"
                >
                  Start Direct Chat
                </a>
              </div>
            </div>
          )}
          
          <button 
            onClick={() => setIsWhatsAppOpen(!isWhatsAppOpen)}
            className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] rounded-full flex items-center justify-center shadow-lg transform active:scale-95 transition-all relative"
            aria-label="Contact Star Station on WhatsApp"
          >
            <span className="absolute top-0 right-0 w-3 h-3 bg-red-600 border border-white rounded-full animate-pulse" />
            <svg className="w-7 h-7 text-black fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.966 0c3.178.001 6.169 1.24 8.419 3.496 2.25 2.256 3.489 5.252 3.488 8.434-.004 6.657-5.34 12-11.912 12-2.005-.001-3.98-.502-5.735-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.742.002-2.602-1.01-5.05-2.85-6.892-1.84-1.842-4.29-2.856-6.891-2.858-5.442 0-9.866 4.372-9.87 9.746-.002 1.705.474 3.372 1.378 4.836l-.993 3.629 3.737-.974zm11.332-6.81c-.307-.154-1.82-.899-2.101-.101-.28.1-.737.899-.903 1.085-.165.186-.332.21-.639.056-.307-.154-1.3-.48-2.477-1.532-.915-.817-1.533-1.827-1.713-2.135-.18-.307-.019-.473.135-.626.139-.138.307-.359.461-.539.154-.18.205-.308.307-.513.102-.205.051-.385-.026-.539-.077-.154-.737-1.777-1.01-2.433-.266-.641-.538-.553-.736-.563-.19-.01-.409-.012-.628-.012-.22 0-.576.082-.878.411-.301.33-1.151 1.125-1.151 2.744s1.178 3.183 1.342 3.407c.164.224 2.318 3.54 5.616 4.965.784.339 1.396.541 1.873.693.788.251 1.505.216 2.072.13.632-.094 1.82-.743 2.077-1.461.256-.718.256-1.334.18-1.461-.076-.128-.282-.205-.59-.359z"/>
            </svg>
          </button>
        </div>

      </body>
    </html>
  );
}