import { motion } from 'framer-motion';
import { Percent, Calendar, Wallet, ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { fadeUpStagger, fadeUp, scaleReveal } from '@/utils/animationVariants';
import { formatPKR } from '@/utils/formatCurrency';

const benefits = [
  { icon: Percent, value: '0%', label: 'Markup' },
  { icon: Calendar, value: '12', label: 'Month Plans' },
  { icon: Wallet, value: '20%', label: 'Down Payment' },
];

export function FinancingSection() {
  return (
    <section id="financing" className="bg-off-white py-[140px]">
      <div className="container-okla">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            variants={fadeUpStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <SectionHeader
              label="FINANCING"
              title="Own It Today, Pay Comfortably."
              subtitle="OKLA offers 0% markup installment plans through leading banks. Get your dream scooter with minimal down payment and easy monthly installments."
            />

            {/* Benefit Cards */}
            <motion.div
              variants={fadeUpStagger}
              className="flex gap-3 mt-8"
            >
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit.label}
                  variants={fadeUp}
                  className="flex-1 bg-white border border-okla-border rounded-xl p-5 text-center"
                >
                  <div className="w-8 h-8 flex items-center justify-center rounded-md bg-lime/15 mx-auto mb-3">
                    <benefit.icon size={16} className="text-lime-dim" />
                  </div>
                  <p className="font-display font-extrabold text-[28px] text-charcoal">
                    {benefit.value}
                  </p>
                  <p className="font-body text-[13px] text-okla-muted mt-1">
                    {benefit.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Partner Banks */}
            <div className="mt-6">
              <p className="font-body text-sm text-okla-muted mb-2">Partner Banks:</p>
              <div className="flex flex-wrap gap-2">
                {['Bank Alfalah', 'Self Finance', 'Bank Lease'].map((bank) => (
                  <span
                    key={bank}
                    className="bg-okla-border px-3.5 py-1.5 rounded-full text-xs text-charcoal font-medium"
                  >
                    {bank}
                  </span>
                ))}
              </div>
              <a
                href="#cta"
                className="inline-flex items-center gap-1 mt-4 font-body text-sm font-semibold text-lime-dim hover:underline"
              >
                Apply for Financing <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>

          {/* Right - Lifestyle Image */}
          <motion.div
            variants={scaleReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="relative rounded-[32px] overflow-hidden h-[400px]"
          >
            <img
              src="/images/financing-lifestyle.jpg"
              alt="Customer receiving OKLA scooter keys at experience center"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Frosted Glass Card */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-xl p-5 rounded-[20px]">
              <p className="font-display font-extrabold text-[22px] text-charcoal">
                Starting at {formatPKR(6500)}/month
              </p>
              <p className="font-body text-xs text-okla-muted mt-1">
                for the Orbit model with approved financing
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
