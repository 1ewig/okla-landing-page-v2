import { motion } from 'framer-motion';
import { fadeUp } from '@/utils/animationVariants';

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  rightAction?: React.ReactNode;
}

export function SectionHeader({ label, title, subtitle, dark = false, rightAction }: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="mb-10"
    >
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          {label && (
            <p
              className={`font-mono text-[11px] tracking-[4px] uppercase mb-3 ${
                dark ? 'text-lime' : 'text-lime-dim'
              }`}
            >
              {label}
            </p>
          )}
          <h2
            className={`font-display font-extrabold uppercase leading-[0.95] ${
              dark ? 'text-white' : 'text-charcoal'
            }`}
            style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className={`font-body text-lg mt-3 max-w-xl ${
                dark ? 'text-white/50' : 'text-okla-muted'
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>
        {rightAction && <div>{rightAction}</div>}
      </div>
    </motion.div>
  );
}
