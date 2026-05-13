import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import type { Location } from '@/utils/constants';

interface LocationCardProps {
  location: Location;
}

export function LocationCard({ location }: LocationCardProps) {
  return (
    <motion.div
      layout
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="bg-charcoal-2 border border-okla-dark-border rounded-[20px] p-6 hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
    >
      {/* Top Row */}
      <div className="flex items-start justify-between">
        <h3 className="font-display font-extrabold text-xl text-white">
          {location.city}
        </h3>
        <span
          className={`font-mono text-[10px] font-bold tracking-[2px] uppercase px-2 py-0.5 rounded ${
            location.badge === 'Main'
              ? 'bg-lime text-charcoal'
              : 'bg-charcoal-3 text-white/50'
          }`}
        >
          {location.badge}
        </span>
      </div>

      {/* Type */}
      <p className="font-mono text-[10px] tracking-[2px] text-lime uppercase mt-1">
        {location.type}
      </p>

      {/* Address */}
      <div className="flex items-start gap-2 mt-3">
        <MapPin size={14} className="text-white/40 mt-0.5 flex-shrink-0" />
        <p className="font-body text-sm text-white/60 leading-relaxed">
          {location.address}
        </p>
      </div>

      {/* Directions Link */}
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`OKLA Pakistan, ${location.address}, ${location.city}, Pakistan`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 font-body text-[13px] font-semibold text-lime hover:underline transition-all"
      >
        Get Directions &rarr;
      </a>
    </motion.div>
  );
}
