import { motion } from 'framer-motion';
import { Facebook, Instagram, Youtube, ArrowUpRight } from 'lucide-react';
import { fadeUpStagger, fadeUp } from '@/utils/animationVariants';

export function Footer() {
  return (
    <footer className="bg-charcoal border-t border-okla-dark-border">
      {/* Main Footer */}
      <motion.div
        variants={fadeUpStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="container-okla py-16 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-12"
      >
        {/* Column 1 - Brand */}
        <motion.div variants={fadeUp}>
          <div className="font-display text-[32px] font-black text-white select-none">
            <span className="text-lime">O</span>KLA
          </div>
          <p className="font-body text-sm text-white/45 mt-2">
            Sustainable. Stylish. Pakistani.
          </p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-md bg-charcoal-3 text-white/60 hover:text-lime hover:bg-charcoal-2 transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
          <div className="flex mt-6">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 bg-charcoal-2 border border-okla-dark-border rounded-l-md px-4 py-2.5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-lime"
            />
            <button className="bg-lime text-charcoal font-body text-[13px] font-bold px-5 py-2.5 rounded-r-md hover:bg-lime-dim transition-colors flex items-center gap-1">
              Subscribe <ArrowUpRight size={14} />
            </button>
          </div>
        </motion.div>

        {/* Column 2 - Navigation */}
        <motion.div variants={fadeUp}>
          <h4 className="font-mono text-[10px] tracking-[3px] text-white/40 uppercase mb-4">
            Navigation
          </h4>
          {['Home', 'Why OKLA', 'Models', 'Locations', 'Financing', 'Blog'].map(
            (link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="block font-body text-sm text-white/60 mb-2.5 hover:text-lime transition-colors"
              >
                {link}
              </a>
            )
          )}
        </motion.div>

        {/* Column 3 - Models */}
        <motion.div variants={fadeUp}>
          <h4 className="font-mono text-[10px] tracking-[3px] text-white/40 uppercase mb-4">
            Models
          </h4>
          {['Orbit', 'OKT', 'OMO', 'OMIGO', 'OKG', 'OVA', 'All Models'].map((link) => (
            <a
              key={link}
              href="#models"
              className="block font-body text-sm text-white/60 mb-2.5 hover:text-lime transition-colors"
            >
              {link}
            </a>
          ))}
        </motion.div>

        {/* Column 4 - Contact */}
        <motion.div variants={fadeUp}>
          <h4 className="font-mono text-[10px] tracking-[3px] text-white/40 uppercase mb-4">
            Contact
          </h4>
          <a
            href="mailto:connect@okla.com.pk"
            className="block font-body text-sm text-lime mb-2 hover:underline"
          >
            connect@okla.com.pk
          </a>
          <p className="font-body text-sm text-white mb-1">042 111 11 6552</p>
          <p className="font-body text-sm text-white mb-3">0310 444 6552</p>
          <p className="font-body text-sm text-white/50 leading-relaxed">
            127-A Broadway Commercial, DHA Phase 8, Lahore
          </p>
          <a
            href="#cta"
            className="inline-block mt-3 font-body text-sm font-semibold text-lime hover:underline"
          >
            Book a Test Ride &rarr;
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-okla-dark-border">
        <div className="container-okla py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-body text-xs text-white/35">
            &copy; 2025 OKLA Pakistan. All rights reserved.
          </p>
          <div className="flex gap-4">
            {['Terms', 'Privacy', 'Support'].map((link) => (
              <a
                key={link}
                href="#"
                className="font-body text-xs text-white/35 hover:text-lime transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
