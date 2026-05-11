import { useEffect, useRef } from 'react';

/* ─── Brand-accurate SVG icon paths ─── */
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.02-.06z" fill="white"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="white"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="white"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" width="28" height="28">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" fill="white"/>
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" width="26" height="26">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" fill="white"/>
  </svg>
);

/* ─── Platform icon data ─── */
const platforms = [
  {
    id: 'tiktok',
    bg: 'linear-gradient(135deg, #010101 0%, #69C9D0 100%)',
    border: 'rgba(105,201,208,0.6)',
    shadow: 'rgba(105,201,208,0.35)',
    Icon: TikTokIcon,
    label: 'TikTok',
  },
  {
    id: 'facebook',
    bg: 'linear-gradient(135deg, #0a5fc4, #1877F2)',
    border: 'rgba(24,119,242,0.6)',
    shadow: 'rgba(24,119,242,0.35)',
    Icon: FacebookIcon,
    label: 'Facebook',
  },
  {
    id: 'youtube',
    bg: 'linear-gradient(135deg, #cc0000, #FF0000)',
    border: 'rgba(255,0,0,0.6)',
    shadow: 'rgba(255,0,0,0.35)',
    Icon: YouTubeIcon,
    label: 'YouTube',
  },
  {
    id: 'instagram',
    bg: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)',
    border: 'rgba(225,48,108,0.6)',
    shadow: 'rgba(225,48,108,0.35)',
    Icon: InstagramIcon,
    label: 'Instagram',
  },
  {
    id: 'x',
    bg: 'linear-gradient(135deg, #1a1a1a, #333)',
    border: 'rgba(200,200,200,0.4)',
    shadow: 'rgba(200,200,200,0.2)',
    Icon: XIcon,
    label: 'X',
  },
];

/* ─── Stats on the right ─── */
const stats = ['85K', '50K', '25K', '10K'];

const HeroVisual = () => {
  /* Position icons around the central phones */
  const iconPositions = [
    { top: '4%',  left: '50%',  delay: '0s'   }, // TikTok — top center
    { top: '20%', left: '8%',   delay: '0.6s' }, // Facebook — top left
    { top: '52%', left: '2%',   delay: '1.2s' }, // YouTube — mid left
    { top: '30%', left: '72%',  delay: '1.8s' }, // Instagram — top right
    { top: '60%', left: '58%',  delay: '0.9s' }, // X — bottom right
  ];

  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center select-none">

      {/* ── Ambient glow blobs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
        <div
          className="absolute w-72 h-72 rounded-full blur-3xl opacity-40"
          style={{
            background: 'radial-gradient(circle, #9b30ff 0%, transparent 70%)',
            top: '10%', left: '20%',
            animation: 'pulseGlow 4s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-64 h-64 rounded-full blur-3xl opacity-30"
          style={{
            background: 'radial-gradient(circle, #ff2d78 0%, transparent 70%)',
            bottom: '10%', right: '20%',
            animation: 'pulseGlow 4s ease-in-out 1.5s infinite',
          }}
        />
        <div
          className="absolute w-48 h-48 rounded-full blur-2xl opacity-20"
          style={{
            background: 'radial-gradient(circle, #2d78ff 0%, transparent 70%)',
            top: '40%', left: '40%',
            animation: 'pulseGlow 5s ease-in-out 0.8s infinite',
          }}
        />
      </div>

      {/* ── Neon orbit ring ── */}
      <div className="absolute inset-8 pointer-events-none">
        <svg viewBox="0 0 320 320" width="100%" height="100%" style={{ opacity: 0.18 }}>
          <defs>
            <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff2d78" />
              <stop offset="50%" stopColor="#9b30ff" />
              <stop offset="100%" stopColor="#2d78ff" />
            </linearGradient>
          </defs>
          <ellipse
            cx="160" cy="160" rx="140" ry="90"
            fill="none" stroke="url(#ringGrad)" strokeWidth="1.5"
            strokeDasharray="8 4"
            style={{ animation: 'spinRing 12s linear infinite', transformOrigin: '160px 160px' }}
          />
          <ellipse
            cx="160" cy="160" rx="110" ry="140"
            fill="none" stroke="url(#ringGrad)" strokeWidth="1"
            strokeDasharray="5 8"
            style={{ animation: 'spinRing 18s linear reverse infinite', transformOrigin: '160px 160px' }}
          />
        </svg>
      </div>

      {/* ── Phone mockups ── */}
      <div className="relative z-10 flex items-center justify-center" style={{ width: 220, height: 300 }}>
        {/* Back phone (rotated left) */}
        <div
          className="absolute"
          style={{
            width: 110, height: 195,
            borderRadius: 18,
            background: 'linear-gradient(160deg, #1a1a2e 0%, #16213e 60%, #0a0a1a 100%)',
            border: '1.5px solid rgba(155,48,255,0.4)',
            boxShadow: '0 0 30px rgba(155,48,255,0.25), inset 0 0 20px rgba(155,48,255,0.05)',
            transform: 'rotate(-12deg) translateX(-45px) translateY(8px)',
            top: '50%', left: '50%',
            marginTop: -97, marginLeft: -55,
          }}
        >
          {/* Screen content */}
          <div style={{ margin: '10px 6px 6px', borderRadius: 12, height: 160, overflow: 'hidden',
            background: 'linear-gradient(135deg, #0f0f24, #1a0a2e)' }}>
            <div style={{ padding: 8 }}>
              <div style={{ display: 'flex', gap: 4, marginBottom: 6 }}>
                {['#ff2d78','#9b30ff','#2d78ff'].map((c,i) => (
                  <div key={i} style={{ height: 4, borderRadius: 2, background: c,
                    flex: i === 1 ? 2 : 1, opacity: 0.7 }} />
                ))}
              </div>
              {[60, 80, 55, 70, 45].map((w, i) => (
                <div key={i} style={{ height: 3, marginBottom: 5, borderRadius: 2,
                  width: `${w}%`, background: 'rgba(255,255,255,0.12)' }} />
              ))}
              <div style={{ marginTop: 8, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}>
                {['#ff2d78','#9b30ff'].map((c,i) => (
                  <div key={i} style={{ height: 32, borderRadius: 8,
                    background: `${c}22`, border: `1px solid ${c}44` }} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Front phone (main) */}
        <div
          className="absolute"
          style={{
            width: 118, height: 208,
            borderRadius: 20,
            background: 'linear-gradient(160deg, #1e1e3f 0%, #12122a 60%, #0a0a1a 100%)',
            border: '1.5px solid rgba(255,45,120,0.5)',
            boxShadow: '0 0 40px rgba(255,45,120,0.3), 0 0 80px rgba(155,48,255,0.15), inset 0 0 20px rgba(255,45,120,0.05)',
            transform: 'rotate(6deg) translateX(28px) translateY(0px)',
            top: '50%', left: '50%',
            marginTop: -104, marginLeft: -59,
            zIndex: 2,
          }}
        >
          {/* Notch */}
          <div style={{ width: 36, height: 6, borderRadius: 3, background: '#0a0a1a',
            margin: '8px auto 0', border: '1px solid rgba(255,255,255,0.05)' }} />
          {/* Screen */}
          <div style={{ margin: '6px 8px 8px', borderRadius: 14, height: 166, overflow: 'hidden',
            background: 'linear-gradient(135deg, #0f0824 0%, #1a0f2e 50%, #0a1628 100%)' }}>
            <div style={{ padding: '8px 6px' }}>
              {/* Mini stat bars */}
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 50, marginBottom: 8 }}>
                {[40, 65, 50, 80, 55, 70].map((h, i) => (
                  <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: '3px 3px 0 0',
                    background: ['#ff2d78','#9b30ff','#2d78ff','#ff2d78','#9b30ff','#2d78ff'][i],
                    opacity: 0.7 }} />
                ))}
              </div>
              {/* Follower count */}
              <div style={{ textAlign: 'center', marginBottom: 6 }}>
                <div style={{ fontSize: 16, fontWeight: 700, color: '#fff',
                  fontFamily: 'Syne, sans-serif', lineHeight: 1 }}>48.2K</div>
                <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>Followers</div>
              </div>
              {/* Platform dots */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
                {['#ff2d78','#1877F2','#FF0000'].map((c,i) => (
                  <div key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: c, opacity: 0.85 }} />
                ))}
              </div>
              {/* Bottom lines */}
              <div style={{ marginTop: 8 }}>
                {[70, 50, 85].map((w, i) => (
                  <div key={i} style={{ height: 2.5, marginBottom: 4, borderRadius: 1.5,
                    width: `${w}%`, background: 'rgba(255,255,255,0.1)' }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Floating platform icon badges ── */}
      {platforms.map((p, i) => {
        const pos = iconPositions[i];
        return (
          <div
            key={p.id}
            className="absolute z-20"
            style={{
              top: pos.top,
              left: pos.left,
              animation: `floatBadge 5s ease-in-out ${pos.delay} infinite`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div
              style={{
                width: 56, height: 56,
                borderRadius: 16,
                background: p.bg,
                border: `1.5px solid ${p.border}`,
                boxShadow: `0 0 20px ${p.shadow}, 0 4px 16px rgba(0,0,0,0.4)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <p.Icon />
            </div>
          </div>
        );
      })}

      {/* ── Right stats column ── */}
      <div
        className="absolute right-0 top-0 bottom-0 flex flex-col justify-around items-end pr-1 z-20"
        style={{ paddingTop: '5%', paddingBottom: '5%' }}
      >
        {stats.map((val, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <div
              className="h-0.5 rounded-full"
              style={{
                width: i % 2 === 0 ? 16 : 10,
                background: 'linear-gradient(90deg, #ff2d78, #9b30ff)',
                opacity: 0.6,
              }}
            />
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: 'rgba(255,255,255,0.55)',
                fontFamily: 'Syne, sans-serif',
                letterSpacing: '0.05em',
              }}
            >
              {val}
            </span>
          </div>
        ))}
      </div>

      {/* ── Keyframe styles ── */}
      <style>{`
        @keyframes floatBadge {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50%       { transform: translate(-50%, -50%) translateY(-10px); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.25; transform: scale(1); }
          50%       { opacity: 0.45; transform: scale(1.08); }
        }
        @keyframes spinRing {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default HeroVisual;
