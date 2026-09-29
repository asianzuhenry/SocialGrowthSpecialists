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

  useEffect(() => {
    if (!open) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        document.getElementById('menu-toggle')?.focus();
      }
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [open]);

  return (
    <nav
      aria-label="Primary navigation"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: 'rgba(5,5,15,0.97)',
        backdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid rgba(155,48,255,0.15)' : '1px solid transparent',
      }}
    >
      <div className="page-container">
        <div className="flex items-center justify-between h-[4.5rem]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-neon-pink" style={{ background: 'linear-gradient(135deg, #ff2d78, #9b30ff)' }}>
              <span aria-hidden="true" className="text-white text-sm font-bold">S</span>
            </div>
            <span className="font-bold text-sm text-white font-display leading-tight tracking-wide">
              Social Growth<br />
              <span className="text-white/50 font-normal text-sm">Specialists</span>
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
                  `px-3.5 py-2 text-sm rounded-lg transition-all duration-200 ${isActive
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
              className="text-sm px-4 py-2"
            >
              <span aria-hidden="true">📱</span> +97156 673 3648
            </GlowButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            id="menu-toggle"
            className="md:hidden flex h-11 w-11 items-center justify-center rounded-lg text-white"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            <span aria-hidden="true" className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-white transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all ${open ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-navigation" className={`md:hidden ${open ? '' : 'hidden'}`} style={{ background: 'rgba(5,5,15,0.98)', borderTop: '1px solid rgba(155,48,255,0.15)' }}>
          <div className="px-4 py-4 space-y-1">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-base transition-all ${isActive ? 'text-white font-semibold bg-white/5' : 'text-white/60 hover:text-white'}`
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
                <span aria-hidden="true">📱</span> +97156 673 3648
              </GlowButton>
            </div>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
