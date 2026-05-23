'use client';
import { useState, useRef } from 'react';

export default function ContactPage() {
  const formCardRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState({ name: '', email: '', company: '', brief: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = formCardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top; 
    const rotateX = ((y / rect.height) - 0.5) * -12; 
    const rotateY = ((x / rect.width) - 0.5) * 12; 
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
  };

  const handleMouseLeave = () => {
    if (formCardRef.current) {
      formCardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', company: '', brief: '' });
    }, 4000);
  };

  return (
    <div className="relative min-h-[75vh] w-full flex items-center justify-center py-12">
      
      {/* Background visual graphics */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#ED1C24]/10 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#00A86B]/10 rounded-full filter blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Left branding context */}
        <div className="md:col-span-5 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-[9px] uppercase font-black tracking-widest text-[#ED1C24] rounded-full">
            ✦ System Core Active
          </div>
          <h1 className="text-3xl md:text-6xl font-black tracking-tighter leading-none uppercase">
            LET'S SHAPE <br/>YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A86B] to-white">FUTURE.</span>
          </h1>
          <p className="text-white/60 text-xs md:text-sm font-light leading-relaxed max-w-sm">
            Drop your parameters directly into our system pipeline. Our operations team reviews briefs immediately to configure target campaign blueprints.
          </p>
        </div>

        {/* Right 3D Interactive form widget */}
        <div className="md:col-span-7 flex justify-center perspective-1000">
          <div 
            ref={formCardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="w-full max-w-lg bg-neutral-900/50 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-lg shadow-2xl transition-all duration-200 ease-out transform-gpu"
          >
            {isSubmitted ? (
              <div className="py-12 text-center space-y-3 animate-fadeIn">
                <div className="w-12 h-12 bg-[#00A86B]/20 border border-[#00A86B] text-[#00A86B] text-xl flex items-center justify-center rounded-full mx-auto">✓</div>
                <h3 className="text-sm font-black uppercase tracking-wider">Parameters Logged</h3>
                <p className="text-white/50 text-xs font-light max-w-xs mx-auto">Your metrics crossed successfully. An advisor will establish verification files shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[9px] font-black uppercase tracking-widest text-[#00A86B] block">Identity / Name</label>
                  <input type="text" required value={formState.name} onChange={(e) => setFormState({...formState, name: e.target.value})} placeholder="Aliko Dangote" className="w-full bg-black/40 border border-white/10 px-3 py-2.5 text-xs text-white placeholder-white/10 focus:outline-none focus:border-[#00A86B] rounded-sm" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase tracking-widest text-white/50 block">Secure Email</label>
                    <input type="email" required value={formState.email} onChange={(e) => setFormState({...formState, email: e.target.value})} placeholder="name@company.com" className="w-full bg-black/40 border border-white/10 px-3 py-2.5 text-xs text-white placeholder-white/10 focus:outline-none focus:border-[#ED1C24] rounded-sm" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase tracking-widest text-white/50 block">Organization</label>
                    <input type="text" value={formState.company} onChange={(e) => setFormState({...formState, company: e.target.value})} placeholder="Trace Group" className="w-full bg-black/40 border border-white/10 px-3 py-2.5 text-xs text-white placeholder-white/10 focus:outline-none focus:border-white/30 rounded-sm" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-black uppercase tracking-widest text-white/40 block">Operational Brief Metrics</label>
                  <textarea rows={4} required value={formState.brief} onChange={(e) => setFormState({...formState, brief: e.target.value})} placeholder="Outline packaging design requirements, event parameters, or commercial timeline expectations..." className="w-full bg-black/40 border border-white/10 p-3 text-xs text-white placeholder-white/10 focus:outline-none focus:border-[#00A86B] rounded-sm resize-none" />
                </div>
                <button type="submit" className="w-full bg-white hover:bg-[#ED1C24] text-black hover:text-white font-black text-xs uppercase tracking-widest py-3.5 rounded-sm transition-all shadow-md">
                  Transmit Parameters &rarr;
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}