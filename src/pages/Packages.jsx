import { useState } from 'react';
import PackageCard from '../components/PackageCard';
import GlowButton from '../components/GlowButton';
import { packages } from '../data/packages';

const Packages = () => {
  const [filter, setFilter] = useState('popular');

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl" style={{ background: 'radial-gradient(circle, #9b30ff, transparent)' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <p className="section-tag mb-4">Our Packages</p>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Simple Packages.<br />Powerful Results.
          </h1>
          <p className="text-white/50 mt-4 max-w-md mx-auto">
            Choose a package that fits your goals and watch your growth take off.
          </p>

          <div className="flex justify-center gap-3 mt-8">
            {['popular', 'all'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${filter === f ? 'btn-primary text-white' : 'card-border text-white/60 hover:text-white'}`}
              >
                {f === 'popular' ? '🔥 Popular' : '📊 All Platforms'}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Package Cards */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>

          {/* Custom Package */}
          <div
            className="mt-10 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ background: 'linear-gradient(135deg, rgba(37,211,102,0.06), rgba(18,140,126,0.06))', border: '1px solid rgba(37,211,102,0.2)' }}
          >
            <div className="flex items-center gap-4">
              <span className="text-4xl">💬</span>
              <div>
                <p className="text-white font-semibold font-display">Need a Custom Package?</p>
                <p className="text-white/50 text-sm">We've got you covered.</p>
              </div>
            </div>
            <GlowButton
              variant="whatsapp"
              href="https://wa.me/+97156 673 3648"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat with Us
            </GlowButton>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: '⚡', label: 'Instant Delivery' },
              { icon: '🔒', label: '100% Safe' },
              { icon: '🛡️', label: 'High Retention' },
              { icon: '🎧', label: '24/7 Support' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white/50 text-sm">
                <span>{item.icon}</span> {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;
