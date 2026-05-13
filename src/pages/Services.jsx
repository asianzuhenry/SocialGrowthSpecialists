import ServiceCard from '../components/ServiceCard';
import GlowButton from '../components/GlowButton';
import { services } from '../data/services';

const allInOne = {
  icon: '🚀',
  title: 'All-in-One Growth',
  description: 'Custom growth packages across multiple platforms.',
  features: ['Multi-Platform Growth', 'Consistent Results', 'Time Saving', 'Affordable Solutions'],
};

const Services = () => {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-72 h-72 rounded-full opacity-15 blur-3xl" style={{ background: 'radial-gradient(circle, #ff2d78, transparent)' }} />
          <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full opacity-15 blur-3xl" style={{ background: 'radial-gradient(circle, #9b30ff, transparent)' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <p className="section-tag mb-4">Our Services</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <div>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                Powerful Growth<br />Solutions for <span className="gradient-text-pink">Every Platform</span>
              </h1>
              <p className="text-white/50 mt-4 text-base max-w-md">
                We help you grow your followers, increase engagement, and build a strong online presence with real results.
              </p>
            </div>
            <div className="flex gap-3 lg:justify-end">
              <GlowButton variant="whatsapp" href="https://wa.me/971566733648" target="_blank" rel="noopener noreferrer">
                💬 Chat on WhatsApp
              </GlowButton>
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}

            {/* All-in-One */}
            <div
              className="rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:translate-y-[-4px]"
              style={{ border: '1px solid rgba(155,48,255,0.35)', background: 'linear-gradient(135deg, rgba(155,48,255,0.08), rgba(45,120,255,0.08))' }}
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{allInOne.icon}</span>
                <div>
                  <h3 className="font-bold text-lg text-white font-display">{allInOne.title}</h3>
                  <p className="text-white/50 text-xs">{allInOne.description}</p>
                </div>
              </div>
              <div className="space-y-2">
                {allInOne.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-white/70">
                    <span className="text-[#9b30ff]">✓</span> {f}
                  </div>
                ))}
              </div>
              <GlowButton
                variant="whatsapp"
                href="https://wa.me/971566733648"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-auto"
              >
                💬 Chat with Us
              </GlowButton>
            </div>

            {/* Not Sure Card */}
            <div
              className="rounded-2xl p-6 flex flex-col gap-4 items-center justify-center text-center transition-all duration-300 hover:translate-y-[-4px]"
              style={{ border: '1px solid rgba(255,45,120,0.25)', background: 'rgba(10,10,26,0.6)' }}
            >
              <span className="text-4xl">🤔</span>
              <h3 className="font-bold text-lg text-white font-display">Not Sure What You Need?</h3>
              <p className="text-white/50 text-sm">Let our experts help you choose the perfect growth strategy.</p>
              <GlowButton
                variant="whatsapp"
                href="https://wa.me/971566733648"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                💬 Chat on WhatsApp
              </GlowButton>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: '⚡', label: 'Instant Delivery' },
              { icon: '🛡️', label: 'High Retention' },
              { icon: '🔒', label: '100% Safe & Secure' },
              { icon: '🎧', label: '24/7 Support' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white/50 text-sm">
                <span className="text-lg">{item.icon}</span> {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
