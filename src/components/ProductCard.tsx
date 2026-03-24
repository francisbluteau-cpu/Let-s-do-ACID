import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Zap } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  stock: string;
  benefits: string[];
}

export default function ProductCard({ product, isSubscription }: { product: Product, isSubscription: boolean }) {
  const finalPrice = isSubscription ? product.price * 0.8 : product.price;

  return (
    <motion.div
      whileHover={{ y: -10, rotateX: 5, rotateY: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative bg-stark/5 border border-stark/10 rounded-2xl overflow-hidden backdrop-blur-xl flex flex-col h-full"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="relative h-64 overflow-hidden bg-void/50">
        {product.stock === 'limited' && (
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-acid/10 border border-acid/30 text-acid px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 bg-acid rounded-full animate-pulse" />
            Low Stock
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-void to-transparent z-10" />
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="p-6 flex-1 flex flex-col relative z-20 bg-void/80 backdrop-blur-md">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-display font-bold uppercase tracking-tighter text-stark group-hover:text-acid transition-colors">
            {product.name}
          </h3>
          <div className="text-xl font-mono text-stark/80">
            ${finalPrice.toFixed(2)}
          </div>
        </div>

        <p className="text-sm text-stark/60 mb-6 flex-1">
          {product.description}
        </p>

        <div className="space-y-2 mb-8">
          {product.benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-xs font-mono text-stark/50"
            >
              <Zap className="w-3 h-3 text-acid" />
              {benefit}
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 bg-stark text-void font-bold uppercase tracking-wide flex items-center justify-center gap-2 hover:bg-acid transition-colors min-h-[48px]"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
}
