import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FilterTabs } from '@/components/ui/FilterTabs';
import { LocationCard } from '@/components/ui/LocationCard';
import { LOCATIONS_DATA } from '@/utils/constants';

const cityTabs = ['All', 'Lahore', 'Islamabad', 'Karachi', 'Multan', 'Sialkot'];

export function LocationsSection() {
  const [activeCity, setActiveCity] = useState('All');

  const filteredLocations = useMemo(() => {
    if (activeCity === 'All') return LOCATIONS_DATA;
    return LOCATIONS_DATA.filter((l) => l.city === activeCity);
  }, [activeCity]);

  return (
    <section id="locations" className="bg-charcoal py-[140px]">
      <div className="container-okla">
        <SectionHeader
          label="FIND US"
          title="EXPERIENCE CENTERS & DEALERS"
          subtitle="Visit us for a test ride. No pressure — just pure electric excitement."
          dark
        />

        <FilterTabs
          tabs={cityTabs}
          active={activeCity}
          onChange={setActiveCity}
          dark
        />

        {/* Location Cards Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredLocations.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Map Placeholder */}
        <div className="relative mt-10 h-[320px] rounded-[32px] bg-charcoal-3 border border-okla-dark-border overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13616.842938665373!2d74.4094!3d31.4714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDI4JzE3LjAiTiA3NMKwMjQnMzQuMCJF!5e0!3m2!1sen!2s!4v1"
            className="w-full h-full border-0 grayscale opacity-40"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="OKLA locations map"
          />
          {/* Overlay Card */}
          <div className="absolute top-4 right-4 bg-charcoal/90 backdrop-blur-md px-6 py-5 rounded-xl border border-okla-dark-border">
            <p className="font-display font-extrabold text-lg text-white">
              25+ Locations
            </p>
            <p className="font-body text-xs text-white/60">Across Pakistan</p>
            <div className="font-display text-xl font-black text-white/20 mt-1">
              <span className="text-lime">O</span>KLA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
