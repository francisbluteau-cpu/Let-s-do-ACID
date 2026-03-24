import React, { Suspense } from 'react';
import { motion } from 'motion/react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-void">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-void via-void to-acid/20 opacity-50" />
        {/* Spline 3D Model Placeholder */}
        <Suspense fallback={<div className="w-full h-full bg-void/50 animate-pulse" />}>
          <div className="w-full h-full opacity-80 mix-blend-screen pointer-events-none md:pointer-events-auto">
            {/* Using a generic Spline scene for the "floating" effect, as we don't have a specific Acid sachet model */}
            <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
          </div>
        </Suspense>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-3 py-1 mb-6 border border-acid text-acid text-xs font-bold uppercase tracking-widest rounded-full"
          >
            EASY TO DIGEST FORMULA
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-[0.85] mb-6 uppercase">
            Zero Crash.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-acid to-stark">Pure Acid.</span>
          </h1>
          <p className="text-lg md:text-xl text-stark/70 mb-8 max-w-md font-light">
            High-carb, pH-balanced energy gels engineered for elite endurance athletes. Performance over flavor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-acid text-void font-bold uppercase tracking-wide rounded-none hover:bg-stark transition-colors"
            >
              Shop Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border border-stark/30 text-stark font-bold uppercase tracking-wide rounded-none hover:border-acid hover:text-acid transition-colors"
            >
              The Science
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
