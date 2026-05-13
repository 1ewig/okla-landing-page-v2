import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FilterTabs } from '@/components/ui/FilterTabs';
import { ModelCard } from '@/components/ui/ModelCard';
import { MODELS_DATA } from '@/utils/constants';

const filterTabs = ['All', 'Commuter', 'Premium', 'Women-Friendly', 'High-Speed'];

export function ModelsSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredModels = useMemo(() => {
    if (activeFilter === 'All') return MODELS_DATA;
    if (activeFilter === 'High-Speed') {
      return MODELS_DATA.filter(
        (m) => parseInt(m.speed) >= 60
      );
    }
    return MODELS_DATA.filter((m) => m.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="models" className="bg-charcoal py-[140px]">
      <div className="container-okla">
        <SectionHeader
          label="LINEUP"
          title="OUR MODELS"
          dark
          rightAction={
            <a
              href="#models"
              className="font-body text-sm text-lime hover:underline flex items-center gap-1 transition-all"
            >
              See All Models <ArrowRight size={14} />
            </a>
          }
        />

        <FilterTabs
          tabs={filterTabs}
          active={activeFilter}
          onChange={setActiveFilter}
          dark
        />

        {/* Models Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredModels.map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
