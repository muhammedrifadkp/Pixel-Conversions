import React from 'react';

const STATS = [
  { value: '20+', label: 'Projects Delivered' },
  { value: '10+', label: 'Active Business Clients' },
  { value: '4', label: 'Core Agency Services' },
];

export const Credibility: React.FC = () => {
  return (
    <section className="py-20 bg-white border-y border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-3xl bg-neutral-50/80 border border-neutral-200/80 space-y-2"
            >
              <div className="text-5xl sm:text-6xl font-extrabold text-[#0D0D0E] tracking-tight font-sans">
                <span className="text-[#FF2A38]">{stat.value}</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-600 font-sans">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
