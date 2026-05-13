import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/utils/constants';

interface NavbarProps {
  activeSection: string;
  isScrolled: boolean;
}

export function Navbar({ activeSection, isScrolled }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-[1000] h-[72px]"
      style={{
        background: 'rgba(245, 245, 240, 0.92)',
        backdropFilter: 'blur(12px) saturate(180%)',
        borderBottom: isScrolled ? '1px solid #E2E2DC' : '1px solid transparent',
        transition: 'border-color 300ms',
      }}
    >
      <div className="container-okla h-full flex items-center justify-between">
        {/* Wordmark */}
        <button
          onClick={() => scrollToSection('#home')}
          className="font-display text-[26px] font-black tracking-[-1px] text-charcoal select-none"
        >
          <span className="text-lime">O</span>KLA
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`relative font-body text-[15px] font-medium tracking-[0.2px] hover:text-lime-dim transition-colors duration-[150ms] ${
                  isActive ? 'text-lime-dim' : 'text-charcoal'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <button
          onClick={() => scrollToSection('#cta')}
          className="hidden md:block bg-lime text-charcoal font-body text-sm font-bold px-[22px] py-[10px] rounded-full hover:bg-lime-dim hover:-translate-y-[1px] hover:shadow-lime transition-all duration-300"
          style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
        >
          Book a Test Ride
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-charcoal"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-[72px] left-0 right-0 bg-off-white p-6 shadow-dark"
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className={`font-body text-base font-medium text-left hover:text-lime-dim transition-colors ${
                      isActive ? 'text-lime-dim' : 'text-charcoal'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
              <button
                onClick={() => scrollToSection('#cta')}
                className="bg-lime text-charcoal font-body text-sm font-bold px-6 py-3 rounded-full hover:bg-lime-dim transition-colors w-full mt-2"
              >
                Book a Test Ride
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
