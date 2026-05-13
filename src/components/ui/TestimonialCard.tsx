import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Testimonial } from '@/utils/constants';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const initials = testimonial.author
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <motion.div
      variants={{
        hidden: { y: 40, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' as const } },
      }}
      whileHover={{ y: -4, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
      transition={{ duration: 0.3 }}
      className="bg-white border border-okla-border rounded-[20px] p-7 min-w-[280px] md:min-w-0 snap-start"
    >
      <span className="block font-display font-black text-[72px] text-lime leading-[0.7] mb-2">
        &ldquo;
      </span>

      {/* Stars */}
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={14} className="fill-[#F5A623] text-[#F5A623]" />
        ))}
      </div>

      {/* Quote */}
      <p className="font-body text-[15px] text-charcoal leading-[1.7]">
        {testimonial.quote}
      </p>

      {/* Divider */}
      <div className="h-px bg-okla-border my-5" />

      {/* Reviewer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-charcoal flex items-center justify-center text-white font-body text-sm font-semibold">
            {initials}
          </div>
          <div>
            <p className="font-body text-sm font-semibold text-charcoal">
              {testimonial.author}
            </p>
            <p className="font-body text-xs text-okla-muted">{testimonial.role}</p>
          </div>
        </div>
        <span className="font-mono text-[10px] tracking-[1px] text-lime-dim">
          {testimonial.model}
        </span>
      </div>
    </motion.div>
  );
}
