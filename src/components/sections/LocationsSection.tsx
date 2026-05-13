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
        <div className="relative mt-10 h-[360px] rounded-[32px] bg-charcoal-3 border border-okla-dark-border overflow-hidden group">
          <iframe
            src="https://maps.google.com/maps?q=OKLA%20Pakistan,%20127-A,%20Commercial%20Broadway%20DHA%20Phase%208,%20Lahore%20DHA,%2054940,%20Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0 grayscale opacity-45 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="OKLA Experience Center Map Location"
          />
        </div>
      </div>
    </section>
  );
}
