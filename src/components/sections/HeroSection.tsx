import { motion } from 'framer-motion';
import { slideInRight } from '@/utils/animationVariants';

const heroStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const heroChild = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const marqueeText =
  'ZERO EMISSIONS \u00B7 SAVE ON FUEL \u00B7 SMART DISPLAYS \u00B7 FAST CHARGING \u00B7 MADE IN PAKISTAN \u00B7 ';

export function HeroSection() {
  const scrollToModels = () => {
    document.querySelector('#models')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCTA = () => {
    document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] bg-off-white overflow-hidden"
    >
      {/* Watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
        style={{ top: '5%' }}
      >
        <span
          className="font-display font-black text-charcoal/[0.04] leading-none"
          style={{
            fontSize: 'clamp(200px, 30vw, 400px)',
            letterSpacing: '-8px',
          }}
        >
          OKLA
        </span>
      </div>

      {/* Lime Blob */}
      <div
        className="absolute z-[1] w-[520px] h-[520px] bg-lime rounded-[50%_30%_60%_20%]"
        style={{ left: '-60px', bottom: '-80px' }}
      />

      {/* Content Grid */}
      <div className="relative z-[2] container-okla min-h-[100dvh] pt-[72px] grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left Column */}
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="order-2 md:order-1 pb-16 md:pb-0"
        >
          {/* Superscript Label */}
          <motion.p
            variants={heroChild}
            className="font-mono text-xs tracking-[3px] text-okla-muted uppercase mb-4"
          >
            ELECTRIC &middot; SUSTAINABLE &middot; PAKISTAN
          </motion.p>

          {/* Headline */}
          <div className="space-y-0">
            <motion.h1
              variants={heroChild}
              className="font-display font-bold text-charcoal leading-[0.95]"
              style={{ fontSize: 'clamp(64px, 10vw, 120px)' }}
            >
              Ride the
            </motion.h1>
            <motion.h1
              variants={heroChild}
              className="font-display font-bold text-charcoal leading-[0.95] relative inline-block"
              style={{ fontSize: 'clamp(64px, 10vw, 120px)' }}
            >
              Future
              {/* Brush stroke underline */}
              <svg
                className="absolute -bottom-1 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 4 C 20 1, 80 1, 100 4 S 180 7, 198 4"
                  stroke="#C8F000"
                  strokeWidth="6"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </motion.h1>
            <motion.h1
              variants={heroChild}
              className="font-display font-bold text-charcoal leading-[0.95]"
              style={{ fontSize: 'clamp(64px, 10vw, 120px)' }}
            >
              With OKLA
            </motion.h1>
          </div>

          {/* Subheadline */}
          <motion.p
            variants={heroChild}
            className="font-body text-lg text-okla-muted max-w-[420px] leading-relaxed mt-5"
          >
            Experience next-gen electric mobility &mdash; sustainable, stylish, and
            built for Pakistan.
          </motion.p>

          {/* CTA Row */}
          <motion.div variants={heroChild} className="flex gap-4 mt-9">
            <button
              onClick={scrollToCTA}
              className="bg-lime text-charcoal font-body text-[15px] font-bold px-8 py-3.5 rounded-full hover:bg-lime-dim hover:-translate-y-[1px] hover:shadow-lime transition-all duration-300"
            >
              Book a Test Ride
            </button>
            <button
              onClick={scrollToModels}
              className="border-2 border-charcoal text-charcoal bg-transparent font-body text-[15px] font-bold px-8 py-3.5 rounded-full hover:border-lime-dim hover:text-lime-dim hover:bg-lime/5 transition-all duration-300"
            >
              Explore Models
            </button>
          </motion.div>

        </motion.div>

        {/* Right Column - Scooter Image */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          animate="visible"
          className="order-1 md:order-2 relative flex items-center justify-center pt-8 md:pt-0"
        >
          <img
            src="/images/hero-scooter.png"
            alt="OKLA OMO electric scooter with lime green accents"
            className="w-full max-w-[640px]"
            style={{ filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.25))' }}
            fetchPriority="high"
          />
          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: 'easeInOut',
            }}
            className="absolute top-12 right-4 md:top-20 md:right-8 bg-charcoal text-white font-mono text-[13px] px-4 py-2 rounded-full"
          >
            FROM PKR 159,000
          </motion.div>
        </motion.div>
      </div>

      {/* Full-width Marquee Strip across entire Hero Section */}
      <div className="absolute bottom-0 left-0 right-0 z-10 w-full overflow-hidden border-y border-charcoal/5 py-3 bg-charcoal/[0.01]">
        <div className="flex w-max animate-marquee">
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              className="font-mono text-[11px] tracking-[4px] text-charcoal/30 whitespace-nowrap pr-16 uppercase select-none"
            >
              {marqueeText}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
