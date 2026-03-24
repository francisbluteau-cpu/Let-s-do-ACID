import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart } from 'lucide-react';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling past the hero section (approx 800px)
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-40 p-4 md:p-6 pointer-events-none"
        >
          <div className="max-w-3xl mx-auto bg-void/90 backdrop-blur-xl border border-stark/20 rounded-2xl p-4 flex items-center justify-between shadow-2xl shadow-acid/10 pointer-events-auto">
            <div className="hidden md:block">
              <h4 className="font-bold uppercase tracking-wide text-stark">Fast-Fuel Starter Pack</h4>
              <p className="text-xs font-mono text-stark/50">12x Original, 6x Caffeinated</p>
            </div>
            
            <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
              <div className="text-xl font-display font-bold text-acid">
                $65.00
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-acid text-void font-bold uppercase tracking-wide rounded-none flex items-center gap-2 hover:bg-stark transition-colors min-h-[48px]"
              >
                <ShoppingCart className="w-4 h-4" />
                Quick Add
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
