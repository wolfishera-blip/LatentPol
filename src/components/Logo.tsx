import './Logo.css';

interface LogoProps {
  variant?: 'default' | 'compact' | 'light';
  showTagline?: boolean;
}

export default function Logo({ variant = 'default', showTagline = false }: LogoProps) {
  return (
    <div className={`logo logo--${variant}`}>
      <div className="logo__mark">
        <svg
          viewBox="0 0 52 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="logo__svg"
          aria-hidden="true"
        >
          {/* L */}
          <path d="M2 4 L2 36 L16 36" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          {/* P with compass */}
          <path d="M22 36 L22 4 L34 4 Q44 4 44 14 Q44 24 34 24 L22 24" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          {/* Compass inside P */}
          <circle cx="34" cy="14" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" className="logo__compass" />
          <line x1="34" y1="8.5" x2="34" y2="19.5" stroke="currentColor" strokeWidth="1" />
          <line x1="28.5" y1="14" x2="39.5" y2="14" stroke="currentColor" strokeWidth="1" />
          <polygon points="34,8 35.2,11 32.8,11" fill="currentColor" className="logo__compass-north" />
        </svg>
      </div>
      <div className="logo__text-group">
        <span className="logo__name">LATENTPOL</span>
        {showTagline && (
          <span className="logo__tagline">Decoding Political Insights</span>
        )}
      </div>
    </div>
  );
}
