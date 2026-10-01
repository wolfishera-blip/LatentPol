import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import './SectionHeader.css';

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  description,
  align = 'center',
  dark = false,
}: SectionHeaderProps) {
  const [ref, isVisible] = useAnimateOnScroll();

  return (
    <div
      ref={ref}
      className={`section-header section-header--${align} ${dark ? 'section-header--dark' : ''} ${isVisible ? 'lp-visible' : ''}`}
    >
      {label && (
        <span className="section-header__label">{label}</span>
      )}
      <h2 className="section-header__title">{title}</h2>
      {subtitle && (
        <p className="section-header__subtitle hindi-text">{subtitle}</p>
      )}
      {description && (
        <p className="section-header__desc">{description}</p>
      )}
      <div className="section-header__line" />
    </div>
  );
}
