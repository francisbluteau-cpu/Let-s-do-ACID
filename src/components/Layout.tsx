import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, ShoppingCart, X, Home, Info, Users } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const jsonLd = {
    "@context": "https://schema.org/",
    "@graph": [
      {
        "@type": "Product",
        "name": "Acid Energy Gel",
        "image": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=800&auto=format&fit=crop",
        "description": "High-carb, pH-balanced energy gels engineered for elite endurance athletes.",
        "brand": {
          "@type": "Brand",
          "name": "Acid"
        },
        "offers": {
          "@type": "AggregateOffer",
          "lowPrice": "45.00",
          "highPrice": "55.00",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What makes Acid different from other energy gels?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Acid uses a pH-neutral hydrogel matrix that bypasses the stomach and releases carbohydrates directly into the intestine, eliminating GI distress and maximizing absorption."
            }
          },
          {
            "@type": "Question",
            "name": "How many gels should I consume per hour?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We recommend 60-90g of carbohydrates per hour for intense endurance efforts. Since each Acid gel contains 40g of carbs, aim for 1.5 to 2 gels per hour depending on your body weight."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-void text-stark selection:bg-acid selection:text-void pb-20 md:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-void/80 backdrop-blur-md border-b border-stark/10">
        <div className="text-2xl font-display font-bold tracking-tighter text-acid">
          ACID.
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
          <a href="#shop" className="hover:text-acid transition-colors">Shop</a>
          <a href="#science" className="hover:text-acid transition-colors">Science</a>
          <a href="#community" className="hover:text-acid transition-colors">Community</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:text-acid transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center">
            <ShoppingCart className="w-5 h-5" />
          </button>
          <button 
            className="p-2 md:hidden hover:text-acid transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      <main className="pt-20">
        {children}
      </main>

      {/* Mobile Bottom Sheet Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-void/80 backdrop-blur-sm z-50 md:hidden"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 bg-void border-t border-stark/20 rounded-t-3xl p-6 z-50 md:hidden shadow-[0_-10px_40px_rgba(0,255,65,0.1)]"
            >
              <div className="flex justify-between items-center mb-8">
                <div className="text-xl font-display font-bold text-acid">MENU</div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 bg-stark/10 rounded-full min-h-[48px] min-w-[48px] flex items-center justify-center"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <nav className="flex flex-col gap-4">
                <a href="#shop" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 p-4 bg-stark/5 rounded-2xl hover:bg-acid/10 hover:text-acid transition-colors min-h-[48px]">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="font-bold uppercase tracking-wide">Shop</span>
                </a>
                <a href="#science" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 p-4 bg-stark/5 rounded-2xl hover:bg-acid/10 hover:text-acid transition-colors min-h-[48px]">
                  <Info className="w-5 h-5" />
                  <span className="font-bold uppercase tracking-wide">Science</span>
                </a>
                <a href="#community" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 p-4 bg-stark/5 rounded-2xl hover:bg-acid/10 hover:text-acid transition-colors min-h-[48px]">
                  <Users className="w-5 h-5" />
                  <span className="font-bold uppercase tracking-wide">Community</span>
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <footer className="bg-stark text-void py-12 px-6 border-t border-void/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-display font-bold tracking-tighter mb-4">ACID.</div>
            <p className="text-sm opacity-70">Zero Lag. Pure Acid. Premium energy for elite endurance athletes.</p>
          </div>
          <div>
            <h4 className="font-bold uppercase mb-4">Shop</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#" className="hover:underline">Original</a></li>
              <li><a href="#" className="hover:underline">Caffeinated</a></li>
              <li><a href="#" className="hover:underline">Recovery</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase mb-4">Science</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#" className="hover:underline">pH-Neutral Tech</a></li>
              <li><a href="#" className="hover:underline">Hydrogel Matrix</a></li>
              <li><a href="#" className="hover:underline">Clinical Studies</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase mb-4">Connect</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">Strava Club</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
