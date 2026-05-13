import { motion } from 'framer-motion';
import { formatPKR } from '@/utils/formatCurrency';
import type { Model } from '@/utils/constants';

interface ModelCardProps {
  model: Model;
}

export function ModelCard({ model }: ModelCardProps) {
  return (
    <motion.div
      layout
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="bg-charcoal-2 rounded-[20px] border border-okla-dark-border overflow-hidden group"
    >
      {/* Image Zone */}
      <div className="relative h-[220px] bg-charcoal-3 p-6 flex items-center justify-center overflow-hidden">
        {model.badge && (
          <span className="absolute top-0 left-0 bg-lime text-charcoal font-mono text-[10px] font-bold tracking-[2px] uppercase px-3 py-1 rounded-br-md z-10">
            {model.badge}
          </span>
        )}
        <img
          src={model.image}
          alt={`OKLA ${model.name} electric scooter`}
          className="w-full h-full object-contain transition-transform duration-[400ms] group-hover:scale-105 group-hover:-translate-y-1"
          loading="lazy"
          style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}
        />
      </div>

      {/* Content Zone */}
      <div className="p-5 pb-6">
        <p className="font-mono text-[10px] tracking-[2px] text-lime uppercase mb-1">
          {model.category}
        </p>
        <h3 className="font-display font-extrabold text-2xl text-white tracking-[-0.5px]">
          {model.name}
        </h3>

        {/* Spec Pills */}
        <div className="flex gap-2 mt-3">
          {[model.range, model.speed, model.motor].map((spec) => (
            <span
              key={spec}
              className="bg-charcoal-3 rounded-full px-3 py-[5px] font-mono text-[11px] text-white/70"
            >
              {spec}
            </span>
          ))}
        </div>

        {/* Price */}
        <p className="font-display font-bold text-[22px] text-white mt-3.5">
          {formatPKR(model.price)}
        </p>
        <p className="font-body text-xs text-okla-muted">
          or from {formatPKR(model.price * 0.04)}/mo
        </p>

        {/* CTA Row */}
        <div className="flex gap-2.5 mt-4">
          <button className="flex-1 text-center py-2.5 rounded-xl border border-okla-dark-border font-body text-[13px] text-white/70 hover:border-white/40 transition-colors">
            Learn More
          </button>
          <button className="flex-1 text-center py-2.5 rounded-xl bg-lime text-charcoal font-body text-[13px] font-bold hover:bg-lime-dim transition-colors">
            Book Test Ride
          </button>
        </div>
      </div>
    </motion.div>
  );
}
