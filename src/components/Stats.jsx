const statsData = [
  { icon: '👥', value: '50K+', label: 'Happy Clients' },
  { icon: '🚀', value: '1M+', label: 'Accounts Grown' },
  { icon: '🔒', value: '100%', label: 'Safe & Secure' },
  { icon: '⭐', value: '24/7', label: 'Support' },
];

const Stats = ({ className = '' }) => {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${className}`}>
      {statsData.map((stat, i) => (
        <div key={i} className="flex flex-col items-center gap-1 py-4 px-3 rounded-2xl card-border text-center">
          <span className="text-xl mb-1">{stat.icon}</span>
          <span className="text-2xl font-bold font-display gradient-text">{stat.value}</span>
          <span className="text-white/50 text-xs">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Stats;
