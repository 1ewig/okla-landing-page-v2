import { motion } from 'framer-motion';
import { FeatureIcon } from '@/components/ui/FeatureIcon';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FEATURES_DATA } from '@/utils/constants';
import { fadeUpStagger, scaleReveal, viewportOnce } from '@/utils/animationVariants';

export function WhyOKLASection() {
  const leftFeatures = FEATURES_DATA.slice(0, 3);
  const rightFeatures = FEATURES_DATA.slice(3, 6);

  return (
    <section id="why-okla" className="bg-off-white pt-[140px] pb-16">
      <div className="container-okla">
        <SectionHeader
          label="WHY CHOOSE US"
          title="WHY CHOOSE OUR E-SCOOTER?"
          subtitle="Engineered for performance, sustainability, and the unique demands of Pakistani roads."
        />

        {/* Three Column Grid */}
        <div id="features" className="grid grid-cols-1 lg:grid-cols-[1fr_480px_1fr] gap-10 items-start mt-16 scroll-mt-24">
          {/* Left Features */}
          <motion.div
            variants={fadeUpStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {leftFeatures.map((feature) => (
              <FeatureIcon
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                variant="left"
              />
            ))}
          </motion.div>

          {/* Center Image */}
          <motion.div
            variants={scaleReveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex items-center justify-center"
          >
            <img
              src="/images/why-scooter.png"
              alt="OKLA OKG performance scooter dramatic angle"
              className="w-full max-w-[480px] block mx-auto"
              style={{ filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.18))' }}
              loading="lazy"
            />
          </motion.div>

          {/* Right Features */}
          <motion.div
            variants={fadeUpStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {rightFeatures.map((feature) => (
              <FeatureIcon
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                variant="right"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
