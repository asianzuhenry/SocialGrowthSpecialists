import GlowButton from './GlowButton';

const PackageCard = ({ pkg }) => {
  const { name, subtitle, price, popular, features, color, borderColor } = pkg;

  const whatsappMsg = encodeURIComponent(`Hi! I'd like to order the ${name} package (UGX ${price}).`);
  const whatsappUrl = `https://wa.me/+97156 673 3648?text=${whatsappMsg}`;

  return (
    <div
      className={`relative rounded-2xl p-6 flex flex-col gap-5 transition-all duration-300 hover:translate-y-[-6px] ${popular ? 'scale-105' : ''}`}
      style={{
        border: `1px solid ${borderColor}`,
        background: popular
          ? `linear-gradient(135deg, rgba(255,45,120,0.08), rgba(155,48,255,0.08))`
          : 'rgba(10,10,26,0.9)',
        boxShadow: popular ? `0 0 40px ${borderColor}` : 'none',
      }}
    >
      {popular && (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full text-white"
          style={{ background: 'linear-gradient(90deg, #ff2d78, #9b30ff)' }}
        >
          Most Popular
        </div>
      )}

      <div>
        <h3 className="font-bold text-xl font-display" style={{ color }}>{name}</h3>
        <p className="text-white/50 text-xs mt-1">{subtitle}</p>
      </div>

      <div className="flex items-baseline gap-1">
        <span className="text-white/40 text-xs">UGX</span>
        <span className="text-3xl font-extrabold text-white font-display">{price}</span>
      </div>

      <div className="space-y-2.5 flex-1">
        {features.map((f, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <div
              className="w-4 h-4 rounded-full flex items-center justify-center text-[10px]"
              style={{ background: `${color}22`, border: `1px solid ${color}66` }}
            >
              ✓
            </div>
            <span className="text-white/75 text-sm">{f}</span>
          </div>
        ))}
      </div>

      <GlowButton
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full"
        style={
          popular
            ? {}
            : { background: `linear-gradient(135deg, ${color}aa, ${color}66)` }
        }
        variant={popular ? 'primary' : undefined}
      >
        Order Now
      </GlowButton>
    </div>
  );
};

export default PackageCard;
