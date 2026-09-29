import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Heart, MessageCircle, Users } from 'lucide-react';
import { services, whyUsFeatures } from '../data/services';

const platformIcons = [
  { icon: '🎵', name: 'TikTok' },
  { icon: '👤', name: 'Facebook' },
  { icon: '▶️', name: 'YouTube' },
  { icon: '📸', name: 'Instagram' },
  { icon: '𝕏', name: 'X (Twitter)' },
];

const engagementServices = [
  { icon: Users, label: 'Followers & subscribers' },
  { icon: Heart, label: 'Likes' },
  { icon: Eye, label: 'Views' },
  { icon: MessageCircle, label: 'Comments' },
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
              <p className="section-tag eyebrow-line mb-5">For creators, brands &amp; businesses</p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[4.5rem] font-extrabold leading-[1.02] tracking-[-0.045em] text-white mb-4">
                Social media<br className="hidden sm:block" /> engagement services
              </h1>
              <h2 className="font-display text-2xl sm:text-3xl font-bold leading-tight text-white/80 mb-6">
                Choose the boost.<br />
                <span className="gradient-text-pink">Grow your reach.</span>
              </h2>
              <p className="text-white/60 text-[1.05rem] sm:text-lg mb-8 max-w-lg leading-relaxed">
                Order followers, subscribers, likes, views, and comments for your social media accounts. Choose a platform and service, then place your order.
              </p>

              <div className="flex flex-wrap gap-2 mb-9">
                {platformIcons.map(({ icon, name }) => (
                  <div key={name} className="flex items-center gap-2 px-3 py-2 rounded-full card-border text-[0.75rem] text-white/70">
                    <span>{icon}</span> {name}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mb-9">
                <Link to="/services" className="btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white">
                  Browse services <ArrowRight size={16} />
                </Link>
                <Link to="/packages" className="inline-flex items-center gap-2 rounded-full border border-[rgba(155,48,255,0.5)] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[#9b30ff] hover:bg-[rgba(155,48,255,0.1)]">
                  View packages
                </Link>
              </div>

              <div className="flex items-center gap-2 text-sm text-white/55">
                <span className="text-[#ff6fa3]">✓</span>
                No idea where to start? <a href="https://wa.me/971566733648" target="_blank" rel="noopener noreferrer" className="text-white underline decoration-white/30 underline-offset-4 hover:text-white/80">Ask us on WhatsApp</a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-[#9b30ff]/10 blur-3xl" />
              <div className="relative rounded-3xl p-6 sm:p-8 card-border">
                <p className="section-tag mb-2">What can you order?</p>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6">Engagement for the metrics that matter to you.</h2>
                <div className="grid grid-cols-2 gap-3">
                  {engagementServices.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm font-medium text-white/80">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[rgba(255,45,120,0.12)] text-[#ff6fa3]">
                        <Icon size={19} />
                      </span>
                      {label}
                    </div>
                  ))}
                </div>
                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/40">Available for</p>
                  <div className="flex flex-wrap gap-2">
                    {platformIcons.map(({ icon, name }) => (
                      <span key={name} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/65">
                        {icon} {name}
                      </span>
                    ))}
                  </div>
                </div>
                <Link to="/services" className="mt-6 flex items-center justify-between rounded-xl bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.08]">
                  Explore services <ArrowRight size={16} className="text-[#ff6fa3]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to order */}
      <section className="py-8 sm:py-12">
        <div className="page-container">
          <div className="mb-6 text-center">
            <p className="section-tag mb-2">Getting started</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">Three steps to place your order</h2>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { number: '01', title: 'Choose a platform', description: 'Pick Instagram, TikTok, YouTube, Facebook, or X.' },
              { number: '02', title: 'Choose a service', description: 'Select followers, subscribers, likes, views, or comments.' },
              { number: '03', title: 'Pick a package', description: 'Compare options, then tap Order Now to get started on WhatsApp.' },
            ].map((step) => (
              <div key={step.number} className="rounded-2xl p-5 card-border">
                <span className="font-display text-sm font-bold text-[#ff6fa3]">{step.number}</span>
                <h3 className="mt-2 font-display text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/50">{step.description}</p>
              </div>
            ))}
          </div>
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
