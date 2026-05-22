'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image'; // Import the optimized Next.js Image component
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const headerRef = useRef<HTMLElement>(null);
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Custom Magnetic Cursor (AKQA Style)
    const cursor = cursorRef.current;
    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: 'power2.out'
        });
      }
    };
    window.addEventListener('mousemove', moveCursor);

    // 2. Text Reveal (Droga5 Style)
    if (heroTextRef.current) {
      gsap.fromTo(heroTextRef.current.querySelectorAll('.reveal-word'), 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power4.out', delay: 0.5 }
      );
    }

    // 3. Navbar Background Morph on Scroll (Fixed for multi-class strings)
    if (headerRef.current) {
      ScrollTrigger.create({
        start: 'top -80',
        end: 99999,
        onEnter: () => headerRef.current?.classList.add('bg-neutral-950/90', 'backdrop-blur-md', 'border-b', 'border-white/10'),
        onLeaveBack: () => headerRef.current?.classList.remove('bg-neutral-950/90', 'backdrop-blur-md', 'border-b', 'border-white/10'),
      });
    }

    // 4. Staggered Portfolio Fade-In (Pentagram Style)
    if (portfolioRef.current) {
      gsap.fromTo(portfolioRef.current.querySelectorAll('.portfolio-card'),
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: portfolioRef.current,
            start: 'top 75%',
          }
        }
      );
    }

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  const onProjectHover = () => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, { scale: 4, backgroundColor: '#00A86B', mixBlendMode: 'difference' });
      cursorRef.current.innerHTML = '<span class="text-[3px] font-bold text-black tracking-widest uppercase">View</span>';
    }
  };

  const onProjectLeave = () => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, { scale: 1, backgroundColor: 'transparent', mixBlendMode: 'normal' });
      cursorRef.current.innerHTML = '';
    }
  };

  return (
    <div className="bg-[#111111] text-white min-h-screen font-sans selection:bg-[#00A86B] selection:text-black overflow-x-hidden">
      {/* Custom Dynamic Cursor */}
      <div 
        ref={cursorRef} 
        className="hidden md:flex fixed top-0 left-0 w-4 h-4 rounded-full border border-white pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center transition-transform duration-75"
      />

      {/* Premium Navbar with Logo Image */}
      <header ref={headerRef} className="fixed top-0 left-0 w-full z-40 transition-all duration-300 px-6 py-4 md:px-12 md:py-6 flex justify-between items-center">
        <div className="flex items-center">
          {/* Linked logo pointing back to root public/logo.svg */}
          <Image 
            src="/logo.png" 
            alt="Star Station Logo" 
            width={240} 
            height={65} 
            className="h-12 md:h-16 w-auto object-contain filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:scale-105"
            priority 
          />
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-semibold tracking-widest uppercase text-white/80">
          <a href="#capabilities" className="hover:text-starTeal transition-colors">Capabilities</a>
          <a href="#work" className="hover:text-starTeal transition-colors">Our Work</a>
          <a href="#contact" className="hover:text-starTeal transition-colors">Connect</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center px-6 md:px-12 bg-black">
        <div className="absolute inset-0 opacity-40 overflow-hidden pointer-events-none">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-laser-lights-background-loop-41743-large.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111111]/50 to-[#111111]" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 ref={heroTextRef} className="font-black text-4xl md:text-7xl tracking-tight leading-tight mb-8 overflow-hidden">
            <span className="block overflow-hidden"><span className="inline-block reveal-word">WE CREATE EXPERIENCES,</span></span>
            <span className="block overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-[#00A86B] to-[#0020C2]">
              <span className="inline-block reveal-word">SHAPE NARRATIVES,</span>
            </span>
            <span className="block overflow-hidden"><span className="inline-block reveal-word">AND BUILD LEGACIES.</span></span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Star Station Inc. is a premier innovative management agency executing elite transformations across products, corporate identities, and mass media networks.
          </p>
        </div>
      </section>

      {/* CORE PHILOSOPHY */}
      <section id="capabilities" className="bg-white text-[#111111] py-24 md:py-36 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4 border-l-4 border-[#ED1C24] pl-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ED1C24]">The Manifesto</span>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-black text-3xl md:text-5xl leading-tight mb-6">
              "The future belongs to the uncommon. We exist to challenge standard tracks of thinking."
            </h2>
            <p className="text-black/70 text-lg leading-relaxed max-w-2xl">
              We live in a space where predictable architecture reigns supreme. We break through the noise by engineering high-impact customer experiences, hyper-targeted digital media dominance, and world-class physical product package redesigns.
            </p>
          </div>
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section id="work" className="py-24 px-6 md:px-12 bg-[#111111]">
        <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-baseline border-b border-white/10 pb-6">
          <h3 className="font-black text-3xl md:text-5xl tracking-tighter">UNCOMMON EXECUTION</h3>
          <span className="text-white/40 text-sm tracking-widest mt-2 md:mt-0">PROVEN AGENCY RADAR</span>
        </div>

        <div ref={portfolioRef} className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          <div onMouseEnter={onProjectHover} onMouseLeave={onProjectLeave} className="portfolio-card md:col-span-8 group relative bg-neutral-900 aspect-video md:aspect-[16/10] overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-neutral-800 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-80" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1200')" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="text-xs font-bold text-[#00A86B] tracking-widest uppercase block mb-2">Mass Media & Events</span>
              <h4 className="font-bold text-2xl md:text-4xl">Trace Company Alliance</h4>
              <p className="text-white/60 text-sm mt-2 font-light">Global music concerts and comedy festival activations.</p>
            </div>
          </div>

          <div onMouseEnter={onProjectHover} onMouseLeave={onProjectLeave} className="portfolio-card md:col-span-4 group relative bg-neutral-900 aspect-square md:aspect-auto overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-neutral-800 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-80" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&q=80&w=800')" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="text-xs font-bold text-[#ED1C24] tracking-widest uppercase block mb-2">Product Architecture</span>
              <h4 className="font-bold text-2xl">Dangote Pasta</h4>
              <p className="text-white/60 text-sm mt-2 font-light">Think-Tank operational lead for complete next-gen product package overhaul.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER with Logo Image */}
      <footer id="contact" className="bg-black border-t border-white/10 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            {/* Footer Brand Logo Block */}
            <div className="mb-10">
              <Image 
                src="/logo.png" 
                alt="Star Station Logo Footer" 
                width={280} 
                height={75} 
                className="h-14 w-auto object-contain opacity-95 hover:opacity-100 transition-opacity" 
              />
            </div>
            <h2 className="font-black text-4xl md:text-6xl tracking-tighter leading-none mb-6">
              LET'S CREATE SOMETHING <br/>EXTRAORDINARY.
            </h2>
          </div>
          <div className="flex flex-col justify-between text-sm text-white/70 space-y-8 md:space-y-0 md:text-right pt-0 md:pt-16">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/40 mb-2">HQ Operations</p>
              <p className="font-medium text-white">2a Oluwatosin Street, Oral Estate</p>
              <p className="text-white/60">Lagos, Nigeria</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-white/40 mb-2">Direct Channel</p>
              <p className="text-lg font-bold text-[#00A86B] hover:underline"><a href="mailto:trystarstation@gmail.com">trystarstation@gmail.com</a></p>
              <p className="text-white/60 mt-1">+234 809 100 0449</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}