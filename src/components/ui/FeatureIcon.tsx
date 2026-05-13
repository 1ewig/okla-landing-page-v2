import { Battery, Mountain, Leaf, Smartphone, Shield, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap: Record<string, LucideIcon> = {
  Battery,
  Mountain,
  Leaf,
  Smartphone,
  Shield,
  Wrench,
};

interface FeatureIconProps {
  icon: string;
  title: string;
  description: string;
  variant?: 'left' | 'right';
}

export function FeatureIcon({ icon, title, description, variant = 'left' }: FeatureIconProps) {
  const IconComponent = iconMap[icon] || Battery;

  return (
    <motion.div
      variants={{
        hidden: { x: variant === 'left' ? -30 : 30, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' as const } },
      }}
      className={`mb-10 ${variant === 'right' ? 'text-right' : ''}`}
    >
      <div
        className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-lime transition-all duration-[250ms] hover:scale-110 hover:shadow-lime ${
          variant === 'right' ? 'ml-auto' : ''
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}
      >
        <IconComponent size={24} className="text-charcoal" strokeWidth={1.5} />
      </div>
      <h3
        className={`font-display font-bold text-[22px] text-charcoal mt-3 ${
          variant === 'right' ? 'ml-auto' : ''
        }`}
      >
        {title}
      </h3>
      <p
        className={`font-body text-sm text-okla-muted leading-[1.7] max-w-[260px] mt-1 ${
          variant === 'right' ? 'ml-auto' : ''
        }`}
      >
        {description}
      </p>
    </motion.div>
  );
}
