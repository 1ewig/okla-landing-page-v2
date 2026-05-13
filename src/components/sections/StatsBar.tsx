import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

const stats = [
  { target: 10000, suffix: '+', label: 'Happy Riders' },
  { target: 15, suffix: '+', label: 'Models Available' },
  { target: 120, suffix: ' km', label: 'Max Range' },
  { target: 25, suffix: '+', label: 'Cities Covered' },
];

export function StatsBar() {
  return (
    <section className="bg-charcoal py-7">
      <div className="container-okla flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0">
        {stats.map((stat, index) => (
          <div key={stat.label} className="flex items-center w-full sm:w-auto">
            <div className="flex-1 sm:flex-none text-center">
              <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              <p className="font-body text-sm text-white/[0.55] mt-1 tracking-[0.5px]">
                {stat.label}
              </p>
            </div>
            {index < stats.length - 1 && (
              <div className="hidden sm:block w-px h-10 bg-okla-dark-border ml-8" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
