import { whyUsFeatures } from '../data/services';
import Stats from '../components/Stats';
import GlowButton from '../components/GlowButton';

const WhyUs = () => {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 w-96 h-96 rounded-full opacity-20 blur-3xl -translate-x-1/2" style={{ background: 'radial-gradient(circle, #9b30ff, transparent)' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-tag mb-4">Why Choose Us</p>
              <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                Your Growth,<br /><span className="gradient-text">Our Priority.</span>
              </h1>
              <p className="text-white/50 mt-4 text-base max-w-md">
                We're committed to delivering real results with 100% satisfaction.
              </p>
            </div>
            {/* Trophy visual */}
            <div className="flex justify-center">
              <div className="relative w-64 h-64 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full opacity-30 blur-2xl animate-pulse" style={{ background: 'radial-gradient(circle, #9b30ff, #ff2d78, transparent)' }} />
                <span className="text-9xl animate-float relative z-10">🏆</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUsFeatures.map((f, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 flex gap-4 transition-all duration-300 hover:translate-y-[-4px] group cursor-pointer"
                style={{ border: `1px solid ${f.color}33`, background: 'rgba(10,10,26,0.8)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${f.color}22`, border: `1px solid ${f.color}44` }}
                >
                  {f.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold font-display">{f.title}</h3>
                    <span className="text-white/30 group-hover:text-white/60 transition-colors">›</span>
                  </div>
                  <p className="text-white/50 text-sm mt-1 leading-relaxed">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12" style={{ borderTop: '1px solid rgba(155,48,255,0.1)', borderBottom: '1px solid rgba(155,48,255,0.1)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Stats />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="rounded-2xl p-10 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(255,45,120,0.08), rgba(155,48,255,0.08))', border: '1px solid rgba(155,48,255,0.25)' }}>
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/2 w-64 h-64 rounded-full opacity-20 blur-3xl -translate-x-1/2" style={{ background: 'radial-gradient(circle, #9b30ff, transparent)' }} />
            </div>
            <h2 className="font-display text-3xl font-bold text-white relative z-10 mb-3">
              Have Questions?<br />We're here to help you grow!
            </h2>
            <p className="text-white/50 mb-6 relative z-10">Our team is available 24/7 to assist you.</p>
            <GlowButton
              variant="whatsapp"
              href="https://wa.me/971566733648"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 px-8 py-3"
            >
              💬 Chat with Us
            </GlowButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
