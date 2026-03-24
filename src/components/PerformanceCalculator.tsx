import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, ChevronRight } from 'lucide-react';

export default function PerformanceCalculator() {
  const [duration, setDuration] = useState<number>(120);
  const [weight, setWeight] = useState<number>(70);
  const [plan, setPlan] = useState<{ gels: number, water: number } | null>(null);

  const calculatePlan = () => {
    // Simple logic for the calculator
    // 40g carbs per gel. Target 60-90g per hour depending on weight/duration.
    const hours = duration / 60;
    const carbsPerHour = weight > 75 ? 90 : 60;
    const totalCarbs = hours * carbsPerHour;
    const gels = Math.ceil(totalCarbs / 40);
    const water = Math.ceil(hours * 500); // 500ml per hour

    setPlan({ gels, water });
  };

  return (
    <section className="py-24 bg-void border-t border-stark/10 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="bg-stark/5 border border-stark/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-acid/10 rounded-xl text-acid">
              <Calculator className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter">
              Acid Intake Plan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-bold uppercase tracking-wide text-stark/70 mb-4">
                  Race Duration (Minutes): {duration}
                </label>
                <input
                  type="range"
                  min="30"
                  max="360"
                  step="15"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full accent-acid bg-stark/10 h-2 rounded-full appearance-none outline-none"
                />
                <div className="flex justify-between text-xs font-mono text-stark/50 mt-2">
                  <span>30m</span>
                  <span>6h</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-wide text-stark/70 mb-4">
                  Body Weight (kg): {weight}
                </label>
                <input
                  type="range"
                  min="50"
                  max="100"
                  step="1"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full accent-acid bg-stark/10 h-2 rounded-full appearance-none outline-none"
                />
                <div className="flex justify-between text-xs font-mono text-stark/50 mt-2">
                  <span>50kg</span>
                  <span>100kg</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={calculatePlan}
                className="w-full py-4 bg-acid text-void font-bold uppercase tracking-wide flex items-center justify-center gap-2 hover:bg-stark transition-colors min-h-[48px]"
              >
                Generate Plan
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>

            <div className="bg-void/50 border border-stark/10 rounded-2xl p-8 flex flex-col justify-center">
              {plan ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold uppercase tracking-wide text-acid mb-4">Your Fuel Strategy</h3>
                  
                  <div className="flex items-center justify-between border-b border-stark/10 pb-4">
                    <span className="text-stark/70">Acid Gels Required</span>
                    <span className="text-3xl font-display font-bold text-stark">{plan.gels}</span>
                  </div>
                  
                  <div className="flex items-center justify-between border-b border-stark/10 pb-4">
                    <span className="text-stark/70">Hydration Target</span>
                    <span className="text-3xl font-display font-bold text-stark">{plan.water}ml</span>
                  </div>

                  <div className="pt-4">
                    <p className="text-xs font-mono text-stark/50 leading-relaxed">
                      *Consume 1 gel every {Math.round(duration / plan.gels)} minutes. Drink water to thirst, aiming for {plan.water}ml total.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <div className="text-center text-stark/30 font-mono text-sm">
                  Adjust sliders and generate your personalized fueling strategy.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
