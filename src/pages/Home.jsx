import { Link } from 'react-router-dom';
import GlowButton from '../components/GlowButton';
import Stats from '../components/Stats';
import HeroVisual from '../components/HeroVisual';
import { services, whyUsFeatures } from '../data/services';

const platformIcons = [
  { icon: '🎵', name: 'TikTok' },
  { icon: '👤', name: 'Facebook' },
  { icon: '▶️', name: 'YouTube' },
  { icon: '📸', name: 'Instagram' },
  { icon: '𝕏', name: 'X (Twitter)' },
];

const Home = () => {
  return (
    <div className="pt-[4.5rem]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, #ff2d78, transparent)' }} />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, #9b30ff, transparent)' }} />
          <div className="absolute bottom-1/4 left-1/2 w-80 h-80 rounded-full opacity-15 blur-3xl" style={{ background: 'radial-gradient(circle, #2d78ff, transparent)' }} />
        </div>

        <div className="page-container py-16 sm:py-24 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">
            <div className="relative z-10">
              <p className="section-tag eyebrow-line mb-5">Social Growth Specialists</p>
              <h1 className="font-display text-[3.25rem] sm:text-6xl lg:text-[5.25rem] font-extrabold leading-[0.98] tracking-[-0.055em] text-white mb-6">
                We Grow.<br />
                You <span className="gradient-text-pink">Grow.</span>
              </h1>
              <p className="text-white/60 text-[1.05rem] sm:text-lg mb-8 max-w-lg leading-relaxed">
                Premium social media growth services designed to boost your followers, engagement, and online presence.
              </p>

              <div className="flex flex-wrap gap-2 mb-9">
                {platformIcons.map(({ icon, name }) => (
                  <div key={name} className="flex items-center gap-2 px-3 py-2 rounded-full card-border text-[0.75rem] text-white/70">
                    <span>{icon}</span> {name}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mb-9">
                <GlowButton variant="primary" as={Link} href="/packages" className="px-7 py-3.5">
                  View Packages →
                </GlowButton>
                <GlowButton variant="outline" href="https://wa.me/971566733648" target="_blank" rel="noopener noreferrer" className="px-8 py-3">
                  💬 Contact Us
                </GlowButton>
              </div>

              <div className="flex items-center gap-3 border-t border-white/10 pt-5 max-w-sm">
                <div className="flex -space-x-2">
                  {['🧑', '👩', '🧔'].map((e, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-sm border-2 border-[#05050f]">{e}</div>
                  ))}
                </div>
                <div>
                  <p className="text-white text-base font-semibold">Trusted by 10,000+ Clients</p>
                  <p className="text-white/50 text-sm">Fast Delivery • 100% Safe • Real Results</p>
                </div>
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative flex items-center justify-center h-[360px] sm:h-[420px] lg:h-[480px]">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-5 sm:py-8">
        <div className="page-container">
          <Stats />
        </div>
      </section>

      {/* Services Section */}
      <section className="section-space">
        <div className="page-container">
          <div className="mb-10 sm:mb-14 max-w-2xl">
            <p className="section-tag mb-3">Our Premium Services</p>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-[-0.04em] text-white">Boost. Grow. Succeed.</h2>
            <p className="text-white/50 mt-3 max-w-lg">High-quality social media growth services tailored for real results.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="rounded-2xl p-5 flex flex-col gap-3 transition-all duration-300 hover:translate-y-[-4px]"
                style={{ border: `1px solid ${service.borderColor}`, background: 'rgba(10,10,26,0.9)' }}
              >
                <div className="text-center mb-1">
                  <span className="text-3xl">{service.icon}</span>
                  <p className="text-sm font-bold mt-1 uppercase tracking-widest" style={{ color: service.color }}>{service.name.split(' ')[0]}</p>
                </div>
                <div className="space-y-1.5">
                  {service.pricing.slice(0, 6).map((item, i) => (
                    <div key={i} className="flex justify-between text-sm py-1.5 border-b border-white/5">
                      <span className="text-white/60">{item.label}</span>
                      <span className="text-white/80 font-medium">{item.price}   AED</span>
                    </div>
                  ))}
                </div>
                <a
                  href={`https://wa.me/971566733648?text=${encodeURIComponent(`Hi! I'm interested in ${service.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full py-2.5 rounded-full text-sm font-semibold text-white text-center block mt-auto"
                >
                  Order Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="pb-8 px-4">
        <div className="max-w-5xl mx-auto rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5"
          style={{ background: 'linear-gradient(135deg, rgba(37,211,102,0.08), rgba(18,140,126,0.08))', border: '1px solid rgba(37,211,102,0.25)' }}>
          <div className="flex items-center gap-4">
            <span className="text-4xl">💬</span>
            <div>
              <p className="text-white font-semibold font-display">Ready to grow your social media?</p>
              <p className="text-white/50 text-sm">Chat with our experts on WhatsApp</p>
            </div>
          </div>
          <a
            href="https://wa.me/971566733648"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white whitespace-nowrap"
          >
            📱 +97156 673 3648
          </a>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-space pt-12">
        <div className="page-container">
          <div className="mb-10 sm:mb-14 max-w-2xl">
            <p className="section-tag mb-3">Why Choose Us</p>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-[-0.04em] text-white">Your Growth, Our Priority.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {whyUsFeatures.map((f, i) => (
              <div key={i} className="p-5 rounded-2xl text-center card-border hover:translate-y-[-4px] transition-all duration-300">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="text-white font-semibold text-base font-display mb-1">{f.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
