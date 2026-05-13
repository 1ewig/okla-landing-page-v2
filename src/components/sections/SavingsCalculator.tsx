import React from 'react';
import { motion } from 'framer-motion';
import { useSavingsCalculator } from '@/hooks/useSavingsCalculator';
import { formatPKR } from '@/utils/formatCurrency';
import { Leaf } from 'lucide-react';

export const SavingsCalculator: React.FC = () => {
  const {
    distance, setDistance,
    petrolPrice, setPetrolPrice,
    daysPerWeek, setDaysPerWeek,
    petrolCost, oklaCost,
    monthlySavings, treesEquivalent
  } = useSavingsCalculator();

  const maxPetrol = 40000; // arbitrary max for visual scale
  const petrolPercentage = Math.min((petrolCost / maxPetrol) * 100, 100);
  const oklaPercentage = Math.min((oklaCost / maxPetrol) * 100, 100);

  return (
    <section className="bg-[var(--color-off-white)] py-[var(--space-3xl)] px-[var(--content-padding)]">
      <div className="max-w-[var(--max-width)] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Side - Calculator UI */}
        <motion.div 
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-[var(--text-xs)] tracking-[4px] text-[var(--color-lime-dim)] uppercase mb-2">
            SAVINGS CALCULATOR
          </div>
          <h2 className="font-display font-extrabold text-[var(--text-h2)] text-[var(--color-charcoal)] leading-tight">
            How Much Will You Save?
          </h2>
          <p className="font-body text-[var(--text-body)] text-[var(--color-muted)] mt-2 mb-8">
            Compare your current petrol cost against owning an OKLA.
          </p>

          <div className="flex flex-col gap-6">
            <div>
              <div className="flex justify-between font-body text-[14px] font-semibold text-[var(--color-charcoal)]">
                <span>Daily commute distance</span>
                <span className="text-[var(--color-lime-dim)] font-mono">{distance} km</span>
              </div>
              <input 
                type="range" min="10" max="200" step="5" value={distance} onChange={(e) => setDistance(Number(e.target.value))}
                className="w-full h-1 mt-2 mb-6 accent-[var(--color-lime)] bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            
            <div>
              <div className="flex justify-between font-body text-[14px] font-semibold text-[var(--color-charcoal)]">
                <span>Petrol price per liter</span>
                <span className="text-[var(--color-lime-dim)] font-mono">PKR {petrolPrice}</span>
              </div>
              <input 
                type="range" min="200" max="400" step="5" value={petrolPrice} onChange={(e) => setPetrolPrice(Number(e.target.value))}
                className="w-full h-1 mt-2 mb-6 accent-[var(--color-lime)] bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between font-body text-[14px] font-semibold text-[var(--color-charcoal)]">
                <span>Days per week</span>
                <span className="text-[var(--color-lime-dim)] font-mono">{daysPerWeek} days</span>
              </div>
              <input 
                type="range" min="1" max="7" step="1" value={daysPerWeek} onChange={(e) => setDaysPerWeek(Number(e.target.value))}
                className="w-full h-1 mt-2 mb-6 accent-[var(--color-lime)] bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>

          <div className="border-t border-[var(--color-border)] pt-6 mt-2 grid grid-cols-2 gap-4">
            <div>
              <div className="font-mono text-[11px] text-[var(--color-muted)] uppercase mb-1">Monthly Petrol Cost</div>
              <div className="font-display text-[36px] font-bold text-[var(--color-charcoal)] leading-none">{formatPKR(Math.round(petrolCost))}</div>
            </div>
            <div>
              <div className="font-mono text-[11px] text-[var(--color-muted)] uppercase mb-1">Monthly OKLA Cost</div>
              <div className="font-display text-[36px] font-bold text-[var(--color-lime-dim)] leading-none">{formatPKR(Math.round(oklaCost))}</div>
            </div>
            <div className="col-span-2 mt-4">
              <div className="font-mono text-[11px] text-[var(--color-muted)] uppercase mb-1">You Save</div>
              <div className="flex items-baseline gap-2">
                 <div className="font-display text-[48px] font-black text-[var(--color-charcoal)] leading-none">{formatPKR(Math.round(monthlySavings))}</div>
                 <div className="font-body text-sm text-[var(--color-muted)]">per month</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Visuals */}
        <motion.div 
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center h-full gap-8"
        >
          <div className="flex flex-col gap-6">
            
            <div className="relative">
              <div className="font-mono text-xs font-bold text-[var(--color-charcoal)] mb-2">PETROL BIKE</div>
              <div className="w-full h-[52px] bg-gray-200 rounded-[var(--radius-md)] overflow-hidden relative">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.max(petrolPercentage, 10)}%` }} // ensure visible
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="h-full bg-[#FF4B4B] absolute left-0 top-0 rounded-[var(--radius-md)]"
                />
              </div>
            </div>

            <div className="relative">
              <div className="font-mono text-xs font-bold text-[var(--color-charcoal)] mb-2">OKLA E-SCOOTER</div>
              <div className="w-full h-[52px] bg-gray-200 rounded-[var(--radius-md)] overflow-hidden relative">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.max(oklaPercentage, 5)}%` }} // ensure visible
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="h-full bg-[var(--color-lime)] absolute left-0 top-0 rounded-[var(--radius-md)]"
                />
              </div>
            </div>

          </div>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
             className="flex flex-col items-center justify-center mt-6 text-[var(--color-lime-dim)]"
          >
             <Leaf size={48} strokeWidth={1.5} className="mb-4 opacity-80" />
             <div className="font-mono text-sm uppercase tracking-wide text-center max-w-[200px] leading-relaxed">
               Equivalent to planting <span className="font-bold text-xl text-[var(--color-charcoal)]">{treesEquivalent}</span> trees/year
             </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
