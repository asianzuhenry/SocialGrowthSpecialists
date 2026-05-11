const GlowButton = ({ children, variant = 'primary', className = '', onClick, href, ...props }) => {
  const base = 'inline-flex items-center justify-center gap-2 rounded-full font-semibold text-white transition-all duration-300 cursor-pointer';

  const variants = {
    primary: 'btn-primary px-6 py-3 text-sm',
    whatsapp: 'btn-whatsapp px-6 py-3 text-sm',
    outline: 'border border-[rgba(155,48,255,0.5)] px-6 py-3 text-sm hover:border-[#9b30ff] hover:bg-[rgba(155,48,255,0.1)]',
    ghost: 'text-white/70 hover:text-white px-4 py-2 text-sm',
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return <a href={href} className={classes} {...props}>{children}</a>;
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default GlowButton;
