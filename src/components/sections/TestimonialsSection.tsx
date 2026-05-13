import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { TESTIMONIALS_DATA } from '@/utils/constants';
import { motion } from 'framer-motion';
import { fadeUpStagger } from '@/utils/animationVariants';

export function TestimonialsSection() {
  return (
    <section className="bg-off-white py-[140px]">
      <div className="container-okla">
        <SectionHeader
          title="WHAT RIDERS SAY"
          subtitle="Smooth ride, amazing battery life, and perfect for daily commuting."
          rightAction={
            <a
              href="#"
              className="font-body text-sm text-lime-dim font-semibold hover:underline flex items-center gap-1"
            >
              See All <ArrowRight size={14} />
            </a>
          }
        />

        {/* Cards Grid / Horizontal Scroll on Mobile */}
        <motion.div
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex md:grid md:grid-cols-3 gap-5 mt-10 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0"
        >
          {TESTIMONIALS_DATA.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
