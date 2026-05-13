import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import GlowButton from './GlowButton';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/packages', label: 'Packages' },
  { to: '/why-us', label: 'Why Us' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(5,5,15,0.95)' : 'rgba(5,5,15,0.7)',
        backdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid rgba(155,48,255,0.15)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #ff2d78, #9b30ff)' }}>
              <span className="text-white text-sm font-bold">S</span>
            </div>
            <span className="font-bold text-sm text-white font-display leading-tight">
              Social Growth<br />
              <span className="text-white/50 font-normal text-xs">Specialists</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm rounded-lg transition-all duration-200 ${isActive
                    ? 'text-white font-semibold'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <GlowButton
              variant="whatsapp"
              href="https://wa.me/971566733648"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-4 py-2"
            >
              <span>📱</span> +97156 673 3648
            </GlowButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-white transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all ${open ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden" style={{ background: 'rgba(5,5,15,0.98)', borderTop: '1px solid rgba(155,48,255,0.15)' }}>
          <div className="px-4 py-4 space-y-1">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-sm transition-all ${isActive ? 'text-white font-semibold bg-white/5' : 'text-white/60 hover:text-white'}`
                }
              >
                {label}
              </NavLink>
            ))}
            <div className="pt-2">
              <GlowButton
                variant="whatsapp"
                href="https://wa.me/971566733648"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <span>📱</span> +97156 673 3648
              </GlowButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
