import React from 'react';
import { motion } from 'motion/react';

const athletes = [
  { name: "Eliud K.", pr: "1:59:40" },
  { name: "Jan F.", pr: "7:27:53" },
  { name: "Courtney D.", pr: "22:30:54" },
  { name: "Tadej P.", pr: "82:56:36" },
  { name: "Sifan H.", pr: "2:13:44" },
  { name: "Kelvin K.", pr: "2:00:35" },
];

export default function SocialProof() {
  return (
    <section className="py-12 bg-void border-y border-stark/10 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-void to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-void to-transparent z-10" />
      
      <div className="flex whitespace-nowrap animate-marquee">
        {[...athletes, ...athletes, ...athletes].map((athlete, index) => (
          <div key={index} className="inline-flex items-center mx-8 group">
            <span className="text-2xl md:text-4xl font-display font-bold text-stark/30 uppercase tracking-tighter group-hover:text-acid transition-colors duration-300">
              {athlete.name}
            </span>
            <span className="ml-4 px-3 py-1 bg-stark/5 text-stark/50 text-xs font-mono rounded-full group-hover:bg-acid/10 group-hover:text-acid transition-colors duration-300">
              PR {athlete.pr}
            </span>
            <span className="mx-8 text-acid/20">•</span>
          </div>
        ))}
      </div>
    </section>
  );
}
