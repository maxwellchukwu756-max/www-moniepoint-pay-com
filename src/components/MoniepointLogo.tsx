type Props = { size?: number; rounded?: number };

export function MoniepointLogo({ size = 96, rounded = 28 }: Props) {
  return (
    <div
      className="flex items-center justify-center brand-gradient"
      style={{
        width: size,
        height: size,
        borderRadius: rounded,
        boxShadow: "var(--shadow-float)",
      }}
    >
      <span
        className="font-black text-white leading-none"
        style={{ fontSize: size * 0.55 }}
      >
        M
      </span>
    </div>
  );
}
