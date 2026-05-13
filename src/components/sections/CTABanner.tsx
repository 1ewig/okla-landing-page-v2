import { motion } from 'framer-motion';

export function CTABanner() {
  const scrollToContact = () => {
    document.querySelector('#locations')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.section
      id="cta"
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-lime py-16"
    >
      <div className="container-okla">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
          {/* Left - Text */}
          <div>
            <h2
              className="font-display font-black text-charcoal uppercase"
              style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
            >
              READY TO RIDE ELECTRIC?
            </h2>
            <p className="font-body text-lg text-charcoal/70 mt-2 max-w-xl">
              Join thousands of riders switching to smarter mobility. Book your
              free test ride today.
            </p>
          </div>

          {/* Right - Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:042111116552"
              className="bg-charcoal text-white font-body text-[15px] font-bold px-8 py-3.5 rounded-full hover:bg-[#2a2a2a] hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-all duration-300"
            >
              Book Test Ride
            </a>
            <button
              onClick={scrollToContact}
              className="border-2 border-charcoal text-charcoal bg-transparent font-body text-[15px] font-bold px-8 py-3.5 rounded-full hover:bg-charcoal/5 transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
