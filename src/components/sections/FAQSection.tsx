import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FAQS_DATA } from '@/utils/constants';
import { fadeUp, scaleReveal } from '@/utils/animationVariants';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-charcoal py-[140px]">
      <div className="container-okla">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left - Lifestyle Image */}
          <motion.div
            variants={scaleReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="relative h-[560px] rounded-[32px] overflow-hidden hidden lg:block"
          >
            <img
              src="/images/faq-lifestyle.jpg"
              alt="Rider enjoying OKLA scooter on a tree-lined avenue at golden hour"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Gradient Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to top, #111111 0%, transparent 60%)',
              }}
            />
            {/* Callout Box */}
            <div className="absolute bottom-8 left-8 right-8">
              <h3
                className="font-display font-extrabold text-[28px] text-white"
              >
                GOT QUESTIONS?
              </h3>
              <p className="font-body text-sm text-white/60 mt-1">
                Our team is ready to help you find the perfect model.
              </p>
            </div>
          </motion.div>

          {/* Right - FAQ Accordion */}
          <div className="lg:mt-16">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="mb-8"
            >
              <p className="font-mono text-[11px] tracking-[4px] text-lime uppercase mb-3">
                FAQ
              </p>
              <h2
                className="font-display font-bold text-white"
                style={{ fontSize: 'clamp(20px, 2.5vw, 32px)' }}
              >
                Common Questions
              </h2>
            </motion.div>

            {/* FAQ Items */}
            <div>
              {FAQS_DATA.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="border-t border-okla-dark-border"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center justify-between py-5 text-left cursor-pointer group"
                      aria-expanded={isOpen}
                    >
                      <span className="font-body text-base font-semibold text-white pr-4 group-hover:text-lime transition-colors">
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown size={16} className="text-white/60" />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: 'easeOut' }}
                          className="overflow-hidden"
                        >
                          <p className="font-body text-[15px] text-white/60 leading-[1.7] pb-4">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
