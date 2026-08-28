/**
 * Hammontree Full-Stack Solutions — SVG logo (from tailwind-portfolio)
 * Full lockup: stack mark + Hammontree / FULL-STACK SOLUTIONS wordmark
 */

function StackMark({ size = 40, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="6" y="8" width="28" height="5" rx="1" fill="#00F2FE" />
      <rect x="9" y="17" width="22" height="5" rx="1" fill="#30B8BF" />
      <rect x="12" y="26" width="16" height="5" rx="1" fill="#407C80" />
      <line x1="6" y1="36" x2="34" y2="36" stroke="#AA6639" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function FullLockupSvg({ className = "" }) {
  return (
    <svg
      viewBox="0 0 208 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`h-10 w-auto sm:h-11 ${className}`}
      role="img"
      aria-label="Hammontree Full-Stack Solutions"
    >
      <rect x="0" y="6" width="32" height="5" rx="1" fill="#00F2FE" />
      <rect x="3" y="17" width="26" height="5" rx="1" fill="#30B8BF" />
      <rect x="6" y="28" width="20" height="5" rx="1" fill="#407C80" />
      <line x1="0" y1="40" x2="32" y2="40" stroke="#AA6639" strokeWidth="1.5" strokeLinecap="round" />
      <text
        x="44"
        y="22"
        fontFamily="var(--font-dev-display), system-ui, sans-serif"
        fontSize="18"
        fontWeight="700"
        letterSpacing="-0.02em"
        fill="#F4F7F8"
      >
        Hammontree
      </text>
      <text
        x="44"
        y="38"
        fontFamily="var(--font-dev-body), system-ui, sans-serif"
        fontSize="9"
        fontWeight="600"
        letterSpacing="0.18em"
        fill="#30B8BF"
      >
        FULL-STACK SOLUTIONS
      </text>
    </svg>
  );
}

export function LogoMark({ size = 40, className = "" }) {
  return (
    <div className={`flex shrink-0 items-center justify-center ${className}`}>
      <StackMark size={size} />
    </div>
  );
}

export default function Logo({ variant = "full", markSize = 36, className = "" }) {
  if (variant === "mark") {
    return <LogoMark size={markSize} className={className} />;
  }

  return <FullLockupSvg className={className} />;
}
