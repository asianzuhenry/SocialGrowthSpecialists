import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: 'rgba(5,5,15,0.95)', borderTop: '1px solid rgba(155,48,255,0.15)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #ff2d78, #9b30ff)' }}>
                <span className="text-white text-sm font-bold">S</span>
              </div>
              <span className="font-bold text-sm text-white font-display">Social Growth Specialists</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              We help individuals, brands, and businesses grow their online presence with real results that matter.
            </p>
            <div className="flex gap-3 mt-4">
              {['📸', '🎵', '▶️', '👤', '𝕏'].map((icon, i) => (
                <span key={i} className="text-lg cursor-pointer hover:scale-110 transition-transform">{icon}</span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-display">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/services', label: 'Services' },
                { to: '/packages', label: 'Packages' },
                { to: '/why-us', label: 'Why Us' },
                { to: '/contact', label: 'Contact Us' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-white/50 text-sm hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-display">Our Services</h4>
            <ul className="space-y-2">
              {['Instagram Growth', 'TikTok Growth', 'YouTube Growth', 'Facebook Growth', 'X (Twitter) Growth'].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-white/50 text-sm hover:text-white transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 font-display">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/50 text-sm">
                <span>📱</span>
                <a href="https://wa.me/+97156 673 3648" className="hover:text-white transition-colors">+97156 673 3648</a>
              </li>
              <li className="flex items-center gap-2 text-white/50 text-sm">
                <span>📧</span>
                <a href="mailto:support@socialgrowth.com" className="hover:text-white transition-colors">support@socialgrowth.com</a>
              </li>
              <li className="flex items-center gap-2 text-white/50 text-sm">
                <span>📍</span>
                <span>Kampala, Uganda</span>
              </li>
              <li className="flex items-center gap-2 text-white/50 text-sm">
                <span>🕐</span>
                <span>24/7 – We're Always Here</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Banner */}
        <div
          className="mt-10 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ background: 'linear-gradient(135deg, rgba(255,45,120,0.12), rgba(155,48,255,0.12))', border: '1px solid rgba(255,45,120,0.2)' }}
        >
          <div>
            <p className="text-white font-semibold font-display">Ready to Grow Your Social Media?</p>
            <p className="text-white/50 text-sm">Join thousands of satisfied clients.</p>
          </div>
          <a
            href="https://wa.me/+97156 673 3648"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white whitespace-nowrap"
          >
            <span>💬</span> Chat with Us on WhatsApp
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-white/30 text-xs">© {year} Social Growth Specialists. All Rights Reserved.</p>
          <div className="flex gap-4">
            <span className="text-white/30 text-xs hover:text-white/60 cursor-pointer transition-colors">Terms of Service</span>
            <span className="text-white/30 text-xs hover:text-white/60 cursor-pointer transition-colors">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
