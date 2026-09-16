type Props = { className?: string; size?: number };

/** Monograma JG — logo pessoal de Júlia Alves Garcia */
export function Logo({ className = "", size = 40 }: Props) {
  return (
    <span
      className={`group/logo relative inline-grid shrink-0 place-items-center overflow-hidden rounded-full bg-ink text-paper ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <span className="absolute inset-0 -translate-y-full bg-accent transition-transform duration-500 ease-[cubic-bezier(0.22,0.8,0.2,1)] group-hover/logo:translate-y-0" />
      <span
        className="relative font-display font-semibold leading-none tracking-tight"
        style={{ fontSize: size * 0.42 }}
      >
        jg
      </span>
    </span>
  );
}

export function LogoLockup({ size = 40 }: Props) {
  return (
    <span className="flex min-w-0 items-center gap-2.5">
      <Logo size={size} />
      <span className="truncate font-display text-[15px] font-semibold tracking-tight">
        Júlia A. Garcia
      </span>
    </span>
  );
}
