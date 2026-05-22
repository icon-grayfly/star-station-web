'use client';
import { useState } from 'react';
import Image from 'next/image';

interface EventItem {
  id: string;
  title: string;
  date: string;
  location: string;
  price: number;
  image: string;
  tags: string[];
  description: string;
}

export default function EventsPage() {
  // Mock data representing your heavy footprint with Trace activations and corporate shows
  const upcomingEvents: EventItem[] = [
    {
      id: 'evt-1',
      title: 'Trace Live: The Uncommon Showcase',
      date: 'July 18, 2026',
      location: 'Eko Hotels & Suites, Victoria Island',
      price: 15000,
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800',
      tags: ['Live Concert', 'Trace Partnered', 'Brand Activation'],
      description: 'An elite curated multi-genre musical explosion and experiential showcase powered by Star Station Labs.'
    },
    {
      id: 'evt-2',
      title: 'Star Station Comedy Fest 2026',
      date: 'August 30, 2026',
      location: 'Federal Palace Hotel, Lagos',
      price: 25000,
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800',
      tags: ['Comedy Festival', 'Premium Experience'],
      description: 'Unfiltered, uncommon entertainment featuring Nigeria\'s biggest comic icons and global brand sponsors.'
    }
  ];

  const [selectedTicket, setSelectedTicket] = useState<EventItem | null>(null);
  const [ticketQuantity, setTicketQuantity] = useState<number>(1);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // This hook is where we seamlessly link Paystack or Flutterwave api instances later
    setTimeout(() => {
      alert(`Booking successful for ${ticketQuantity} ticket(s) to ${selectedTicket?.title}!`);
      setIsProcessing(false);
      setSelectedTicket(null);
      setTicketQuantity(1);
    }, 2000);
  };

  return (
    <div className="bg-[#111111] text-white min-h-screen font-sans selection:bg-[#00A86B] selection:text-black">
      
      {/* 1. ADVERTISING / CONVERSION HERO */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 bg-gradient-to-b from-neutral-950 via-[#111111] to-[#111111]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <div className="inline-block px-3 py-1 bg-gradient-to-r from-[#0020C2] to-[#00A86B] text-xs font-black tracking-widest uppercase rounded-sm">
              Live Gateway Token
            </div>
            <h1 className="font-black text-4xl md:text-6xl tracking-tighter leading-tight">
              UNCOMMON NIGHTS. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A86B] to-[#0020C2]">
                LEGENDARY MEMORIES.
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl font-light">
              Secure official entry passes for Star Station premium live concerts, media network activations, and partner festivals with Trace Naija.
            </p>
          </div>
          
          {/* Ad Optimization Banner / Premium Graphic Feature Panel */}
          <div className="md:col-span-5 bg-neutral-900 border border-white/10 p-6 rounded-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ED1C24]/10 rounded-full filter blur-2xl pointer-events-none" />
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#ED1C24] block mb-2">✦ Highlight Activation</span>
            <h3 className="font-bold text-xl mb-2">Are you managing a massive corporate brand activation?</h3>
            <p className="text-white/50 text-xs font-light mb-4">
              We align physical experiences with digital campaigns to keep target demographics talking across mass media channels.
            </p>
            <a href="#contact-footer" className="text-xs font-semibold text-[#00A86B] tracking-wider hover:underline uppercase inline-flex items-center gap-1">
              Partner with Star Labs &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* 2. LIVE EVENTS GRID & TICKETING UTILITY */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="font-black text-2xl md:text-4xl tracking-tighter mb-10 border-b border-white/10 pb-4">
          UPCOMING EXPERIENCES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="bg-neutral-950 border border-white/5 overflow-hidden flex flex-col justify-between group">
              <div className="relative aspect-video w-full overflow-hidden bg-neutral-900">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 opacity-80"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {event.tags.map((tag, i) => (
                    <span key={i} className="bg-black/80 backdrop-blur-sm border border-white/10 text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-xs font-bold text-[#ED1C24] uppercase tracking-wider">{event.date}</span>
                    <span className="text-sm font-black text-[#00A86B]">₦{event.price.toLocaleString()}</span>
                  </div>
                  <h3 className="font-black text-xl md:text-2xl tracking-tight text-white mb-2">{event.title}</h3>
                  <p className="text-white/50 text-xs font-light leading-relaxed">{event.description}</p>
                  <p className="text-[11px] text-white/40 mt-3 flex items-center gap-1">
                    📍 <span className="font-medium text-white/60">{event.location}</span>
                  </p>
                </div>

                <button 
                  onClick={() => setSelectedTicket(event)}
                  className="w-full bg-[#0020C2] hover:bg-[#00A86B] text-white hover:text-black font-bold text-xs uppercase tracking-widest py-3 transition-colors duration-300"
                >
                  Book Entry Pass
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. MODAL COMPONENT WINDOW: SECURE SLIDE CHECKOUT */}
      {selectedTicket && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-neutral-950 border border-white/10 w-full max-w-md p-6 relative rounded-sm">
            <button 
              onClick={() => setSelectedTicket(null)}
              className="absolute top-4 right-4 text-white/40 hover:text-white text-sm tracking-widest font-mono"
            >
              [ESC] CLOSE
            </button>
            
            <span className="text-[10px] text-[#00A86B] uppercase font-black tracking-widest block mb-1">Secure Checkout</span>
            <h3 className="font-black text-xl md:text-2xl tracking-tight mb-4">{selectedTicket.title}</h3>
            
            <form onSubmit={handleCheckout} className="space-y-4">
              <div className="bg-neutral-900 p-3 border border-white/5 rounded-sm flex justify-between items-center">
                <span className="text-xs text-white/60">Single Ticket Price:</span>
                <span className="font-bold text-sm">₦{selectedTicket.price.toLocaleString()}</span>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-white/40 mb-2 font-bold">Select Quantity</label>
                <div className="flex items-center border border-white/10 rounded-sm overflow-hidden w-32">
                  <button 
                    type="button"
                    onClick={() => setTicketQuantity(Math.max(1, ticketQuantity - 1))}
                    className="w-10 py-2 bg-neutral-900 text-center font-bold border-r border-white/10 hover:bg-neutral-800"
                  >
                    -
                  </button>
                  <span className="flex-grow text-center text-sm font-bold bg-neutral-950">{ticketQuantity}</span>
                  <button 
                    type="button"
                    onClick={() => setTicketQuantity(ticketQuantity + 1)}
                    className="w-10 py-2 bg-neutral-900 text-center font-bold border-l border-white/10 hover:bg-neutral-800"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 flex justify-between items-baseline">
                <span className="text-xs font-bold uppercase tracking-wider">Total Charge:</span>
                <span className="text-xl font-black text-[#00A86B]">
                  ₦{(selectedTicket.price * ticketQuantity).toLocaleString()}
                </span>
              </div>

              <button 
                type="submit"
                disabled={isProcessing}
                className="w-full bg-gradient-to-r from-[#00A86B] to-[#0020C2] disabled:opacity-50 text-white font-bold text-xs uppercase tracking-widest py-3 transition-opacity"
              >
                {isProcessing ? 'Processing Secure Terminal...' : 'Proceed to Paystack'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* FOOTER ANCHOR AREA FOR AD RETARGETING */}
      <footer id="contact-footer" className="bg-neutral-950 border-t border-white/5 py-12 text-center text-xs text-white/30">
        <p>© 2026 Star Station Inc. Secure Transaction Engine. Backed by Trace Media Pipelines.</p>
      </footer>
    </div>
  );
}