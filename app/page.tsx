'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';

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

interface Capability {
  title: string;
  description: string;
  deliverables: string[];
}

export default function Home() {
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeCapIndex, setActiveCapIndex] = useState<number>(0);

  const partners = ["TRACE NAIJA", "DANGOTE PASTA", "FILMONE", "MNET", "ZENITH BANK", "MULTICHOICE", "ARIK AIR", "NIGERIAN BREWERIES", "PEAK MILK", "MALTINA"];

  const capabilitiesData: Capability[] = [
    {
      title: "Product Architecture & Design",
      description: "We orchestrate complete structural product lifecycles, shelf optimizations, and tactical retail packaging pivots.",
      deliverables: ["Package Redesigning", "Label Designing", "Concept Development", "Brand Strategy Workshops"]
    },
    {
      title: "Event & Mass Media Infrastructure",
      description: "Engineering massive experiential spaces, high-pressure live broadcasting switching, and multi-channel public dominance loops.",
      deliverables: ["Event Planning & Packaging", "Brand Activation Campaigns", "Television Commercials (TVC)", "Radio Jingles"]
    },
    {
      title: "Omnichannel Advertising & Influence",
      description: "Directing high-grossing promotional ecosystems, cross-platform algorithmic placement, and national out-of-home media sweeps.",
      deliverables: ["Social Media Advert Execution", "Billboard & Outdoor Media", "Content Creation", "Influencer Strategy Mapping"]
    }
  ];

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
    if (heroTextRef.current) {
      gsap.fromTo(heroTextRef.current.querySelectorAll('.reveal-word'), 
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
      );
    }
  }, []);

  return (
    <div className="-mt-20 md:-mt-24">
      
      {/* HERO SECTION - REBUILT TO FIX MOBILE TEXT OVERLAPPING */}
      <section className="relative min-h-[90vh] md:h-screen flex items-center justify-center px-6 md:px-12 bg-black overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 z-0 opacity-60 scale-105 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1920" alt="Branding fluid backdrop" className="w-full h-full object-cover filter blur-[2px] brightness-[0.6]" />
        </div>
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-black/50 via-transparent to-[#0b0c10]" />

        <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-xl border border-white/10 text-[10px] uppercase font-black tracking-widest text-[#00A86B] rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-[#00A86B] rounded-full animate-ping" /> Global Operations Agency
          </div>
          
          {/* Changed leading-tight on mobile screens to fix text collision */}
          <h1 ref={heroTextRef} className="font-black text-4xl md:text-8xl tracking-tighter leading-tight md:leading-[0.95] mb-8 text-white uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            <span className="block overflow-hidden"><span className="inline-block reveal-word">WE CREATE EXPERIENCES,</span></span>
            <span className="block overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-[#00A86B] via-white to-[#ED1C24]">
              <span className="inline-block reveal-word">SHAPE NARRATIVES,</span>
            </span>
            <span className="block overflow-hidden"><span className="inline-block reveal-word">AND BUILD LEGACIES.</span></span>
          </h1>
          <p className="text-white/80 text-xs md:text-base max-w-2xl mx-auto font-light leading-relaxed tracking-wide bg-neutral-950/50 backdrop-blur-md p-5 border border-white/5 rounded-sm">
            Star Station Inc. is an elite innovative management company challenging standard frameworks. We elevate global brands, products, and mass media pipelines into multi-channel market phenomena.
          </p>
        </div>
      </section>

      {/* FIXED MARQUEE PARTNER TICKER - REBUILT TO USE HARDWARE-ACCELERATED CSS ANIMATIONS */}
      <section className="bg-neutral-950 py-6 border-y border-white/5 overflow-hidden select-none">
        <div className="w-full overflow-hidden">
          {/* Using custom global infinite scroll handler css rules */}
          <div className="animate-marquee-infinite text-[11px] uppercase font-black tracking-widest text-white/30 items-center gap-12">
            {Array(3).fill(partners).flat().map((partner, index) => (
              <div key={index} className="flex items-center gap-8 whitespace-nowrap">
                <span>{partner}</span>
                <span className="text-[#00A86B] text-sm">✦</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND ACTION STRIP: "LET'S BUILD YOUR BRAND" */}
      <section className="py-20 bg-gradient-to-r from-neutral-950 to-[#0e1017] border-b border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-3">
            <span className="text-xs uppercase font-black tracking-widest text-[#00A86B]">Strategic Collaboration</span>
            <h2 className="text-2xl md:text-5xl font-black tracking-tighter leading-none">LET'S BUILD YOUR BRAND.</h2>
            <p className="text-white/60 text-xs md:text-sm max-w-xl font-light">
              We translate abstract operational vectors into world-class consumer desire. Let’s sit together, establish blueprints, and position your company out in front.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link href="/contact" className="inline-block bg-white text-black font-black text-xs uppercase tracking-widest px-6 py-4 rounded-sm hover:bg-[#ED1C24] hover:text-white transition-all transform hover:-translate-y-0.5 shadow-xl">
              Initiate Blueprint &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CAPABILITIES SECTION */}
      <section id="capabilities" className="py-20 md:py-32 px-6 md:px-12 bg-white text-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4 space-y-4">
            <span className="text-xs uppercase font-black tracking-widest text-[#ED1C24] block">Capabilities Manifesto</span>
            <h2 className="font-black text-3xl md:text-4xl tracking-tighter leading-none">THE CORE ENGINE.</h2>
            <div className="space-y-1.5 pt-4">
              {capabilitiesData.map((cap, i) => (
                <button key={i} onClick={() => setActiveCapIndex(i)} className={`w-full text-left px-4 py-2.5 border-l-2 transition-all text-xs font-bold uppercase tracking-wider block ${activeCapIndex === i ? 'border-[#00A86B] bg-neutral-100 text-black' : 'border-neutral-200 text-neutral-400 hover:text-black'}`}>
                  {cap.title}
                </button>
              ))}
            </div>
          </div>
          <div className="md:col-span-8 bg-neutral-50 p-6 md:p-8 border border-neutral-200 flex flex-col justify-between space-y-6 rounded-sm">
            <div>
              <span className="text-[9px] bg-[#00A86B]/10 text-[#00A86B] px-2 py-0.5 rounded-sm font-black uppercase tracking-widest">Active Scope</span>
              <h3 className="font-black text-xl md:text-2xl tracking-tight mt-2 mb-3">{capabilitiesData[activeCapIndex].title}</h3>
              <p className="text-black/70 text-xs md:text-sm font-light leading-relaxed max-w-xl">{capabilitiesData[activeCapIndex].description}</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase font-bold tracking-widest text-neutral-400 mb-2">Retainers & Asset Deliverables</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {capabilitiesData[activeCapIndex].deliverables.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white p-2.5 border border-neutral-200/60 rounded-sm text-xs font-semibold">
                    <span className="w-1 h-1 bg-[#ED1C24] rounded-full" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section id="work" className="py-20 px-6 md:px-12 bg-[#0b0c10]">
        <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row justify-between items-baseline border-b border-white/10 pb-4">
          <h3 className="font-black text-2xl md:text-4xl tracking-tighter">UNCOMMON EXECUTION</h3>
          <span className="text-white/40 text-xs tracking-widest">CLICK TO DISCOVER PROJECT ROADMAPS</span>
        </div>
        <div ref={portfolioRef} className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.map((project) => (
            <div key={project.id} onClick={() => setActiveProject(project)} className="portfolio-card group bg-neutral-950 border border-white/5 overflow-hidden cursor-pointer flex flex-col justify-between transition-all duration-300 hover:border-white/20">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                <img src={project.thumbnail} alt={project.title} className="object-cover w-full h-full group-hover:scale-102 transition-transform duration-500 ease-out opacity-80 group-hover:opacity-100" />
                <div className="absolute top-3 left-3">
                  <span className="bg-black/80 backdrop-blur-sm border border-white/10 text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-sm text-white">{project.client}</span>
                </div>
              </div>
              <div className="p-5 space-y-3">
                <div>
                  <span className="text-[9px] uppercase font-bold tracking-widest text-[#00A86B] block mb-0.5">{project.category}</span>
                  <h4 className="font-black text-lg tracking-tight leading-snug text-white group-hover:text-[#00A86B] transition-colors">{project.title}</h4>
                </div>
                <p className="text-white/60 text-xs font-light leading-relaxed line-clamp-3">{project.description}</p>
                <div className="text-[10px] font-bold text-white/40 uppercase tracking-wider inline-flex items-center gap-1 group-hover:text-white transition-colors pt-1">Examine Case Study &rarr;</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECONDARY ACTION STRIP: "TALK TO US" */}
      <section className="bg-[#ED1C24] py-16 px-6 md:px-12 text-black text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          <h3 className="text-3xl md:text-6xl font-black tracking-tighter text-white uppercase">HAVE A CAMPAIGN IN MIND?</h3>
          <p className="text-white/90 text-xs md:text-sm font-medium max-w-md mx-auto">
            Stop running standard corporate frameworks. Talk to our elite advisory team today to construct customized operations.
          </p>
          <div className="pt-2">
            <Link href="/contact" className="inline-block bg-black text-white font-black text-xs uppercase tracking-widest px-8 py-4 rounded-sm hover:bg-white hover:text-black transition-all">
              Talk to us live
            </Link>
          </div>
        </div>
      </section>

      {/* CASE STUDY MODAL EXPANSION CARDS */}
      {activeProject && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 overflow-y-auto p-4 md:p-8 flex items-center justify-center animate-fadeIn">
          <div className="bg-neutral-950 border border-white/10 w-full max-w-4xl rounded-sm overflow-hidden grid grid-cols-1 md:grid-cols-12 relative my-auto">
            <button onClick={() => setActiveProject(null)} className="absolute top-4 right-4 bg-black/80 border border-white/10 text-white hover:text-[#ED1C24] font-mono text-[10px] tracking-widest px-2.5 py-1 z-10 transition-colors">
              ✕ CLOSE
            </button>
            <div className="md:col-span-5 relative h-48 md:h-full min-h-[240px] bg-neutral-900">
              <img src={activeProject.thumbnail} alt={activeProject.title} className="w-full h-full object-cover opacity-80" />
            </div>
            <div className="md:col-span-7 p-6 md:p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-black tracking-widest text-[#00A86B] block">{activeProject.client}</span>
                <h3 className="font-black text-xl md:text-2xl tracking-tight text-white">{activeProject.title}</h3>
                <p className="text-white/70 text-xs font-light leading-relaxed">{activeProject.extendedDetails}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div>
                  <h5 className="text-[9px] uppercase font-bold tracking-widest text-[#ED1C24] mb-1">Metrics</h5>
                  <ul className="space-y-1">
                    {activeProject.impactMetrics.map((m, i) => (
                      <li key={i} className="text-xs text-white/80 flex items-center gap-1.5"><span className="w-1 h-1 bg-[#ED1C24] rounded-full" /> {m}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-[9px] uppercase font-bold tracking-widest text-[#00A86B] mb-1">Capabilities</h5>
                  <div className="flex flex-wrap gap-1">
                    {activeProject.capabilitiesDelivered.map((c, i) => (
                      <span key={i} className="text-[9px] bg-neutral-900 border border-white/10 px-1.5 py-0.5 text-white/60">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}