import GlowButton from './GlowButton';

const ServiceCard = ({ service, compact = false }) => {
  const { name, description, borderColor, pricing, icon } = service;

  const whatsappMsg = encodeURIComponent(`Hi! I'm interested in ${name} services.`);
  const whatsappUrl = `https://wa.me/971566733648?text=${whatsappMsg}`;

  if (compact) {
    return (
      <div
        className="rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 group"
        style={{ border: `1px solid ${borderColor}`, background: 'rgba(15,15,36,0.8)' }}
      >
        <div aria-hidden="true" className="text-2xl">{icon}</div>
        <div className="flex-1">
          <h3 className="font-semibold text-white font-display group-hover:gradient-text transition-all">{name}</h3>
          <p className="text-white/50 text-sm mt-0.5">{description}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:translate-y-[-4px]"
      style={{ border: `1px solid ${borderColor}`, background: 'rgba(10,10,26,0.9)' }}
    >
      <div className="flex items-center gap-3 mb-2">
        <span aria-hidden="true" className="text-3xl">{icon}</span>
        <div>
          <h3 className="font-bold text-lg text-white font-display">{name}</h3>
          <p className="text-white/50 text-sm">{description}</p>
        </div>
      </div>

      <dl className="space-y-2">
        {pricing.map((item, i) => (
          <div key={i} className="flex justify-between items-center py-1.5 border-b border-white/5">
            <dt className="text-white/70 text-base">{item.label}</dt>
            <dd className="text-white font-semibold text-base">{item.price} AED</dd>
          </div>
        ))}
      </dl>

      <GlowButton
        variant="primary"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full mt-2"
      >
        Order {name} on WhatsApp
      </GlowButton>
    </div>
  );
};

export default ServiceCard;
