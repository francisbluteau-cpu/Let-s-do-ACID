import React, { useState } from 'react';
import { motion } from 'motion/react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 'original',
    name: 'Acid Original',
    description: 'The baseline. 25g carbs, pH-neutral hydrogel.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=800&auto=format&fit=crop',
    stock: 'in-stock',
    benefits: ['25g Carbohydrates','Rapid Absorption', 'pH-Neutral', 'No Flavorings'],
  },
  {
    id: 'caffeinated',
    name: 'Acid + Caffeine',
    description: '50mg caffeine + 25g carbs for late-stage surges.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=800&auto=format&fit=crop',
    stock: 'limited',
    benefits: ['50mg Caffeine', '25g Carbohydrates', 'Rapid Absorption'],
  },
  {
    id: 'recovery',
    name: 'Acid Recovery',
    description: 'Post-race fuel. 20g protein, 30g carbs, electrolytes.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop',
    stock: 'in-stock',
    benefits: ['20g Whey Isolate', '30g Carbohydrates', 'Full Electrolyte Profile'],
  },
];

export default function ProductGrid() {
  const [subscription, setSubscription] = useState(false);

  return (
    <section id="shop" className="py-24 bg-void relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-4">
              The Arsenal
            </h2>
            <p className="text-stark/60 max-w-md">
              Precision-engineered fuel for every stage of your race. No lag. Pure performance.
            </p>
          </div>
          
          <div className="mt-8 md:mt-0 flex items-center gap-4 bg-stark/5 p-2 rounded-full border border-stark/10">
            <button
              onClick={() => setSubscription(false)}
              className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all ${!subscription ? 'bg-stark text-void' : 'text-stark/50 hover:text-stark'}`}
            >
              One-Time
            </button>
            <button
              onClick={() => setSubscription(true)}
              className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all ${subscription ? 'bg-acid text-void' : 'text-stark/50 hover:text-acid'}`}
            >
              Subscribe & Save 20%
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} isSubscription={subscription} />
          ))}
        </div>
      </div>
    </section>
  );
}
