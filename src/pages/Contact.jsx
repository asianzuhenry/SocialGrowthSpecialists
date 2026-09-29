import { useState } from 'react';
import GlowButton from '../components/GlowButton';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    const msg = encodeURIComponent(
      `Hi! My name is ${form.name}.\nEmail: ${form.email}\nService: ${form.service || 'Not specified'}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/971566733648?text=${msg}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl" style={{ background: 'radial-gradient(circle, #ff2d78, transparent)' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <p className="section-tag mb-4">Contact Us</p>
              <h1 tabIndex="-1" className="scroll-mt-24 font-display text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
                Let's Grow<br /><span className="gradient-text-pink">Together</span>
              </h1>
              <p className="text-white/50 mb-8">
                Have questions or need help? Reach out to us and we'll get back to you as soon as possible.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { icon: '📱', label: '+97156 673 3648', href: 'https://wa.me/971566733648' },
                  { icon: '📧', label: 'support@socialgrowth.com', href: 'mailto:support@socialgrowth.com' },
                  { icon: '📍', label: 'Kampala, Uganda', href: null },
                  { icon: '🕐', label: "24/7 – We're Always Here", href: null },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl card-border">
                    <span aria-hidden="true" className="text-xl">{item.icon}</span>
                    {item.href ? (
                      <a href={item.href} className="text-white/70 hover:text-white text-base transition-colors">{item.label}</a>
                    ) : (
                      <span className="text-white/70 text-base">{item.label}</span>
                    )}
                  </div>
                ))}
              </div>

            </div>

            {/* Contact Form */}
            <div>
              <div className="rounded-2xl p-6" style={{ border: '1px solid rgba(155,48,255,0.3)', background: 'rgba(10,10,26,0.9)' }}>
                <h2 className="font-display text-xl font-bold text-white mb-5">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="text-white/60 text-sm mb-1 block">Your Name</label>
                    <input
                      id="contact-name"
                      name="name"
                      autoComplete="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full min-h-11 px-4 py-3 rounded-xl text-base text-white focus:border-[#9b30ff] transition-colors"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.45)' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="text-white/60 text-sm mb-1 block">Email Address</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full min-h-11 px-4 py-3 rounded-xl text-base text-white focus:border-[#9b30ff] transition-colors"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.45)' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-service" className="text-white/60 text-sm mb-1 block">Service Interested In</label>
                    <select
                      id="contact-service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full min-h-11 px-4 py-3 rounded-xl text-base text-white"
                      style={{ background: 'rgba(15,15,36,0.95)', border: '1px solid rgba(255,255,255,0.45)' }}
                    >
                      <option value="">Select a service</option>
                      <option value="Instagram Growth">Instagram Growth</option>
                      <option value="TikTok Growth">TikTok Growth</option>
                      <option value="YouTube Growth">YouTube Growth</option>
                      <option value="Facebook Growth">Facebook Growth</option>
                      <option value="X (Twitter) Growth">X (Twitter) Growth</option>
                      <option value="All-in-One Growth">All-in-One Growth</option>
                      <option value="Custom Package">Custom Package</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="text-white/60 text-sm mb-1 block">Your Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl text-base text-white resize-y"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.45)' }}
                    />
                  </div>

                  <GlowButton
                    variant="primary"
                    className="w-full py-3"
                    type="submit"
                  >
                    Send message in WhatsApp
                  </GlowButton>
                  <p aria-live="polite" role="status" className="text-sm text-white/70">
                    {submitted ? 'Your message is ready in WhatsApp. Send it there to complete your request.' : ''}
                  </p>
                </form>
              </div>

              {/* WhatsApp Direct */}
              <div
                className="mt-4 rounded-2xl p-5 text-center"
                style={{ border: '1px solid rgba(37,211,102,0.2)', background: 'rgba(37,211,102,0.04)' }}
              >
                <p className="text-white/60 text-base mb-3">Or chat with us directly on WhatsApp for faster response</p>
                <GlowButton
                  variant="whatsapp"
                  href="https://wa.me/971566733648"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3"
                >
                  <span aria-hidden="true">💬</span> Chat on WhatsApp
                </GlowButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
