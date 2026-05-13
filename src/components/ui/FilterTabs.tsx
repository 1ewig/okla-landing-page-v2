interface FilterTabsProps {
  tabs: string[];
  active: string;
  onChange: (tab: string) => void;
  dark?: boolean;
}

export function FilterTabs({ tabs, active, onChange, dark = true }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {tabs.map((tab) => {
        const isActive = active === tab;
        return (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className={`font-body text-[13px] font-semibold px-5 py-2 rounded-full border transition-all duration-300 ${
              isActive
                ? 'bg-lime border-lime text-charcoal'
                : dark
                ? 'bg-transparent border-okla-dark-border text-white/50 hover:text-white/80 hover:border-white/30'
                : 'bg-transparent border-okla-border text-okla-muted hover:text-charcoal hover:border-charcoal/30'
            }`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
