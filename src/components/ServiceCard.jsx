import GlowButton from './GlowButton';

const ServiceCard = ({ service, compact = false }) => {
  const { name, description, borderColor, pricing, features, icon } = service;

  const whatsappMsg = encodeURIComponent(`Hi! I'm interested in ${name} services.`);
  const whatsappUrl = `https://wa.me/971566733648?text=${whatsappMsg}`;

  if (compact) {
    return (
      <div
        className="rounded-2xl p-5 flex items-center gap-4 cursor-pointer transition-all duration-300 hover:translate-y-[-2px] group"
        style={{ border: `1px solid ${borderColor}`, background: 'rgba(15,15,36,0.8)' }}
      >
        <div className="text-2xl">{icon}</div>
        <div className="flex-1">
          <h3 className="font-semibold text-white font-display group-hover:gradient-text transition-all">{name}</h3>
          <p className="text-white/50 text-xs mt-0.5">{description}</p>
        </div>
        <span className="text-white/30 text-lg">›</span>
      </div>
    );
  }

  return (
    <div
      className="rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:translate-y-[-4px]"
      style={{ border: `1px solid ${borderColor}`, background: 'rgba(10,10,26,0.9)' }}
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl">{icon}</span>
        <div>
          <h3 className="font-bold text-lg text-white font-display">{name}</h3>
          <p className="text-white/50 text-xs">{description}</p>
        </div>
      </div>

      <div className="space-y-2">
        {pricing.map((item, i) => (
          <div key={i} className="flex justify-between items-center py-1.5 border-b border-white/5">
            <span className="text-white/70 text-sm">{item.label}</span>
            <span className="text-white font-semibold text-sm">UGX {item.price}   AED</span>
          </div>
        ))}
      </div>

      <GlowButton
        variant="primary"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full mt-2"
      >
        Order Now
      </GlowButton>
    </div>
  );
};

export default ServiceCard;
