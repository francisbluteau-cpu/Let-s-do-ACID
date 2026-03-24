import React from 'react';
import { motion } from 'motion/react';

export default function Science() {
  return (
    <section id="science" className="py-32 bg-void relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-8 text-stark">
              The <span className="text-acid">Science</span><br />of ACID.
            </h2>
            <p className="text-lg text-stark/70 mb-8 font-light leading-relaxed">
              Innovative energy gels with fast gastric emptying carbohydrate that eliminates digestive discomfort. Acid bypasses this bottleneck.
            </p>
            
            <div className="space-y-8">
              <div className="border-l-2 border-acid pl-6">
                <h4 className="text-xl font-bold uppercase tracking-wide mb-2">pH-Neutral Matrix</h4>
                <p className="text-sm text-stark/60">Our hydrogel technology encapsulates carbohydrates in a pH-neutral biopolymer, protecting them from stomach acid.</p>
              </div>
              <div className="border-l-2 border-stark/20 pl-6">
                <h4 className="text-xl font-bold uppercase tracking-wide mb-2">Intestinal Release</h4>
                <p className="text-sm text-stark/60">The gel matrix dissolves only upon reaching the higher pH environment of the intestine, releasing carbs directly for absorption.</p>
              </div>
              <div className="border-l-2 border-stark/20 pl-6">
                <h4 className="text-xl font-bold uppercase tracking-wide mb-2">Zero GI Distress</h4>
                <p className="text-sm text-stark/60">No flavorings, no colorants, no preservatives. Just pure, unadulterated fuel engineered for maximum tolerance.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-3xl overflow-hidden border border-stark/10 bg-stark/5 backdrop-blur-sm p-8 flex items-center justify-center"
          >
            {/* Abstract representation of the hydrogel matrix */}
            <div className="absolute inset-0 bg-gradient-to-br from-acid/5 to-void" />
            <div className="relative w-full max-w-md aspect-square rounded-full border border-acid/30 flex items-center justify-center animate-[spin_20s_linear_infinite]">
              <div className="w-3/4 h-3/4 rounded-full border border-acid/50 flex items-center justify-center animate-[spin_15s_linear_infinite_reverse]">
                <div className="w-1/2 h-1/2 rounded-full bg-acid/20 blur-xl animate-pulse" />
              </div>
            </div>
            
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-void/80 backdrop-blur-md border border-stark/10 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-mono text-stark/50 uppercase">Absorption Rate</span>
                <span className="text-xs font-mono text-acid font-bold">98.5%</span>
              </div>
              <div className="w-full h-1 bg-stark/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '98.5%' }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="h-full bg-acid" 
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <div className="mt-32 max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-12 text-center">
            Frequently Asked Questions
          </h3>
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-stark/5 border border-stark/10 rounded-2xl p-6 backdrop-blur-sm"
            >
              <h4 className="text-xl font-bold uppercase tracking-wide mb-2 text-acid">What makes Acid different from other energy gels?</h4>
              <p className="text-stark/70 font-light">Acid uses a pH-neutral hydrogel matrix that bypasses the stomach and releases carbohydrates directly into the intestine, eliminating GI distress and maximizing absorption.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-stark/5 border border-stark/10 rounded-2xl p-6 backdrop-blur-sm"
            >
              <h4 className="text-xl font-bold uppercase tracking-wide mb-2 text-acid">How many gels should I consume per hour?</h4>
              <p className="text-stark/70 font-light">We recommend 60-90g of carbohydrates per hour for intense endurance efforts. Since each Acid gel contains 40g of carbs, aim for 1.5 to 2 gels per hour depending on your body weight.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
