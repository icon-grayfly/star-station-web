'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Define structure for comprehensive portfolio case studies
interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  thumbnail: string;
  description: string;
  extendedDetails: string;
  impactMetrics: string[];
  capabilitiesDelivered: string[];
}

export default function Home() {
  const headerRef = useRef<HTMLElement>(null);
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);

  // State management
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);

  // 1. Comprehensive Portfolio Dataset (EASY TO CHANGE IMAGES & TEXT HERE)
  const portfolioData: Project[] = [
    {
      id: 'proj-dangote',
      title: 'Next-Generation Package Overhaul',
      client: 'Dangote Pasta',
      category: 'Product Architecture & Design',
      thumbnail: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&q=80&w=1200',
      description: 'Operational Think-Tank lead for the complete structural redesign and modern label aesthetics of Spaghetti Slim and Standard lines.',
      extendedDetails: 'Star Station sat at the strategic core of this consumer goods transition. We engineered clean, high-impact product packaging layout boundaries that modernized the brand’s retail presence, redefined nutritional messaging visibility, and aligned shelf presentation with contemporary visual aesthetics to drive high-volume market retention.',
      impactMetrics: ['National Market Rollout', 'Modernized Asset Tiering', 'Think-Tank Strategy Execution'],
      capabilitiesDelivered: ['Package Designing', 'Concept Development', 'Label Designing', 'Brand Strategy']
    },
    {
      id: 'proj-trace',
      title: 'Mass Media Live Experience Infrastructure',
      client: 'Trace Naija Alliance',
      category: 'Event & Artist Management',
      thumbnail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1200',
      description: 'Coordinating high-impact music concerts, elite comedy festivals, and multi-channel afro-urban lifestyle media activations.',
      extendedDetails: 'In an exclusive partnership ecosystem with Trace, we bridge the gap between regional creative creators and global consumer demographics. Our teams manage high-pressure live broadcast environments, coordinate complex technical staging across elite spaces, and deploy experiential brand activation pipelines that capture mass culture energy.',
      impactMetrics: ['Multi-City Concert Staging', 'Live Media Integration', 'Demographic Cultural Dominance'],
      capabilitiesDelivered: ['Event Planning & Packaging', 'Brand Activation Campaigns', 'Television Commercial (TVC)']
    },
    {
      id: 'proj-boxoffice',
      title: 'Record-Breaking Cinema Activation Framework',
      client: 'Corporate Entertainment Partnerships',
      category: 'Multimedia Content Production',
      thumbnail: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=1200',
      description: 'Strategic production and promotional advisory for Guinness World Record holding high-grossing Nigerian cinematic assets.',
      extendedDetails: 'Working directly alongside powerhouse pipelines like FilmOne and MNet, we deployed integrated omnichannel media campaigns that built cinematic phenomenon status. From producing immersive trailer packages to executing hyper-targeted influencer sweeps, we maximized box-office velocity.',
      impactMetrics: ['Guinness World Record Placement', 'Highest-Grossing Metrics', 'Omnichannel Launch Campaign'],
      capabilitiesDelivered: ['Content Creation', 'Social Media Advert Execution', 'Billboard & Outdoor Media']
    }
  ];

  useEffect(() => {
    // Custom Magnetic Cursor
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

    // Text Reveal Anim
    if (heroTextRef.current) {
      gsap.fromTo(heroTextRef.current.querySelectorAll('.reveal-word'), 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power4.out', delay: 0.5 }
      );
    }

    // Navbar Background Scroll Morph
    if (headerRef.current) {
      ScrollTrigger.create({
        start: 'top -80',
        end: 99999,
        onEnter: () => headerRef.current?.classList.add('bg-neutral-950/95', 'backdrop-blur-md', 'border-b', 'border-white/10'),
        onLeaveBack: () => headerRef.current?.classList.remove('bg-neutral-950/95', 'backdrop-blur-md', 'border-b', 'border-white/10'),
      });
    }

    // Staggered Portfolio Fade-In
    if (portfolioRef.current) {
      gsap.fromTo(portfolioRef.current.querySelectorAll('.portfolio-card'),
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0,
          duration: 0.8,
          stagger: 0.15,
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
      cursorRef.current.innerHTML = '<span class="text-[3px] font-bold text-black tracking-widest uppercase">Open</span>';
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

      {/* Premium Navbar */}
      <header ref={headerRef} className="fixed top-0 left-0 w-full z-40 transition-all duration-300 px-6 py-4 md:px-12 md:py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Image 
            src="/logo.svg" 
            alt="Star Station Logo" 
            width={240} 
            height={65} 
            className="h-12 md:h-16 w-auto object-contain filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
            priority 
          />
        </div>
        
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex gap-8 text-sm font-semibold tracking-widest uppercase text-white/80">
            <a href="#capabilities" className="hover:text-[#00A86B] transition-colors">Capabilities</a>
            <a href="#work" className="hover:text-[#00A86B] transition-colors">Our Work</a>
            <a href="#contact" className="hover:text-[#00A86B] transition-colors">Connect</a>
          </nav>

          {/* Social Icons inside Header */}
          <div className="hidden md:flex items-center gap-4 border-l border-white/20 pl-6 text-white/60">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-red-600 transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>
      </header>

      {/* BRAND INSPIRED HERO SECTION (COLORFUL GEOMETRIC ROCK FORMATTING AS SEEN IN THE PDF) */}
      <section className="relative h-screen flex items-center justify-center px-6 md:px-12 bg-[#1c1d24] overflow-hidden">
        
        {/* Layered Content Background reflecting premium colorful geometric structures */}
        <div className="absolute inset-0 opacity-85 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1920" 
            alt="Abstract Colorful Rock Formations" 
            className="w-full h-full object-cover mix-blend-initial scale-105"
          />
        </div>
        
        {/* Multilayer Contrast Layering */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-neutral-900/40 to-black/30" />

        <div className="relative z-10 max-w-5xl mx-auto text-center filter drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)]">
          <h1 ref={heroTextRef} className="font-black text-4xl md:text-7xl tracking-tight leading-tight mb-8 overflow-hidden text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            <span className="block overflow-hidden"><span className="inline-block reveal-word">WE CREATE EXPERIENCES,</span></span>
            <span className="block overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-[#00A86B] via-[#fff] to-[#ED1C24]">
              <span className="inline-block reveal-word">SHAPE NARRATIVES,</span>
            </span>
            <span className="block overflow-hidden"><span className="inline-block reveal-word">AND BUILD LEGACIES.</span></span>
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,1)] bg-black/40 backdrop-blur-sm p-4 rounded-sm border border-white/10">
            Star Station Inc. is a premier innovative management agency executing elite transformations across products, corporate identities, and mass media networks.
          </p>
        </div>
      </section>

      {/* CORE PHILOSOPHY / CAPABILITIES */}
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
              We break through the noise by engineering high-impact customer experiences, hyper-targeted digital media dominance, and world-class physical product package redesigns.
            </p>
          </div>
        </div>
      </section>

      {/* DETAILED PORTFOLIO GRID SECTION (CLICK TO OPEN MAPS) */}
      <section id="work" className="py-24 px-6 md:px-12 bg-[#111111]">
        <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-baseline border-b border-white/10 pb-6">
          <h3 className="font-black text-3xl md:text-5xl tracking-tighter">UNCOMMON EXECUTION</h3>
          <span className="text-white/40 text-sm tracking-widest mt-2 md:mt-0">CLICK TO DISCOVER PROJECT ROADMAPS</span>
        </div>

        {/* Dynamic Multi-Column Grid Mapping System */}
        <div ref={portfolioRef} className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioData.map((project) => (
            <div 
              key={project.id}
              onClick={() => setActiveProject(project)} 
              onMouseEnter={onProjectHover} 
              onMouseLeave={onProjectLeave} 
              className="portfolio-card group bg-neutral-950 border border-white/5 overflow-hidden cursor-pointer flex flex-col justify-between transition-all duration-300 hover:border-white/20"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out opacity-75 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-black/80 backdrop-blur-sm border border-white/10 text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded-sm text-white">
                    {project.client}
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#00A86B] block mb-1">
                    {project.category}
                  </span>
                  <h4 className="font-black text-xl tracking-tight leading-snug text-white group-hover:text-[#00A86B] transition-colors">
                    {project.title}
                  </h4>
                </div>
                <p className="text-white/60 text-xs font-light leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="text-[11px] font-bold text-white/40 uppercase tracking-wider inline-flex items-center gap-1 group-hover:text-white transition-colors pt-2">
                  Examine Case Study &rarr;
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CINEMATIC INTERACTIVE MODAL OVERLAY */}
      {activeProject && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 overflow-y-auto p-4 md:p-12 flex items-center justify-center animate-fadeIn">
          <div className="bg-neutral-950 border border-white/10 w-full max-w-5xl rounded-sm overflow-hidden grid grid-cols-1 md:grid-cols-12 relative my-auto">
            
            <button 
              onClick={() => setActiveProject(null)}
              className="absolute top-6 right-6 bg-black/60 backdrop-blur-md border border-white/10 text-white hover:text-[#ED1C24] font-mono text-xs tracking-widest px-3 py-1.5 z-10 transition-colors"
            >
              ✕ CLOSE PROFILE
            </button>

            <div className="md:col-span-5 relative h-64 md:h-full min-h-[300px] bg-neutral-900">
              <img 
                src={activeProject.thumbnail} 
                alt={activeProject.title} 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent via-neutral-950/20 to-neutral-950" />
            </div>

            <div className="md:col-span-7 p-6 md:p-12 space-y-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-xs uppercase font-black tracking-widest text-[#00A86B] block">
                    {activeProject.client} — {activeProject.category}
                  </span>
                  <h3 className="font-black text-2xl md:text-4xl tracking-tighter leading-tight text-white">
                    {activeProject.title}
                  </h3>
                </div>
                <p className="text-white/70 text-sm font-light leading-relaxed">
                  {activeProject.extendedDetails}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
                <div>
                  <h5 className="text-[10px] uppercase font-bold tracking-widest text-[#ED1C24] mb-2">Metrics & Strategic Impact</h5>
                  <ul className="space-y-1.5">
                    {activeProject.impactMetrics.map((metric, idx) => (
                      <li key={idx} className="text-xs text-white/80 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#ED1C24] rounded-full" /> {metric}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-[10px] uppercase font-bold tracking-widest text-[#00A86B] mb-2">Capabilities Delivered</h5>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.capabilitiesDelivered.map((cap, idx) => (
                      <span key={idx} className="text-[10px] bg-neutral-900 border border-white/10 px-2 py-0.5 text-white/60 font-medium">
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer id="contact" className="bg-black border-t border-white/10 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="mb-10">
              <Image 
                src="/logo.svg" 
                alt="Star Station Logo Footer" 
                width={280} 
                height={75} 
                className="h-14 w-auto object-contain opacity-95" 
              />
            </div>
            <h2 className="font-black text-4xl md:text-6xl tracking-tighter leading-none mb-6">
              LET'S CREATE SOMETHING <br/>EXTRAORDINARY.
            </h2>
            
            {/* Social Icons for Footer */}
            <div className="flex items-center gap-6 mt-6 text-white/40">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition-colors flex items-center gap-2 text-xs uppercase tracking-widest font-bold">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                Instagram
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-red-600 transition-colors flex items-center gap-2 text-xs uppercase tracking-widest font-bold">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                YouTube
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors flex items-center gap-2 text-xs uppercase tracking-widest font-bold">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                LinkedIn
              </a>
            </div>
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

      {/* PREMIUM FLOATING WHATSAPP CHAT MODULE */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 select-none">
        {isWhatsAppOpen && (
          <div className="bg-neutral-900 border border-white/10 w-72 rounded-lg shadow-2xl overflow-hidden animate-fadeIn text-left font-sans">
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
        
        {/* Main Floating Trigger Button */}
        <button 
          onClick={() => setIsWhatsAppOpen(!isWhatsAppOpen)}
          className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] rounded-full flex items-center justify-center shadow-lg transform active:scale-95 transition-all relative group"
          aria-label="Contact Star Station on WhatsApp"
        >
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-600 border border-white rounded-full animate-pulse" />
          <svg className="w-7 h-7 text-black fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.966 0c3.178.001 6.169 1.24 8.419 3.496 2.25 2.256 3.489 5.252 3.488 8.434-.004 6.657-5.34 12-11.912 12-2.005-.001-3.98-.502-5.735-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.742.002-2.602-1.01-5.05-2.85-6.892-1.84-1.842-4.29-2.856-6.891-2.858-5.442 0-9.866 4.372-9.87 9.746-.002 1.705.474 3.372 1.378 4.836l-.993 3.629 3.737-.974zm11.332-6.81c-.307-.154-1.82-.899-2.101-.101-.28.1-.737.899-.903 1.085-.165.186-.332.21-.639.056-.307-.154-1.3-.48-2.477-1.532-.915-.817-1.533-1.827-1.713-2.135-.18-.307-.019-.473.135-.626.139-.138.307-.359.461-.539.154-.18.205-.308.307-.513.102-.205.051-.385-.026-.539-.077-.154-.737-1.777-1.01-2.433-.266-.641-.538-.553-.736-.563-.19-.01-.409-.012-.628-.012-.22 0-.576.082-.878.411-.301.33-1.151 1.125-1.151 2.744s1.178 3.183 1.342 3.407c.164.224 2.318 3.54 5.616 4.965.784.339 1.396.541 1.873.693.788.251 1.505.216 2.072.13.632-.094 1.82-.743 2.077-1.461.256-.718.256-1.334.18-1.461-.076-.128-.282-.205-.59-.359z"/>
          </svg>
        </button>
      </div>

    </div>
  );
}