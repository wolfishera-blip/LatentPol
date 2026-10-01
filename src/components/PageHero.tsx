import './PageHero.css';

interface PageHeroProps {
  label?: string;
  title: string;
  subtitle?: string;
  description?: string;
}

export default function PageHero({ label, title, subtitle, description }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero__bg" />
      <div className="lp-container">
        <div className="page-hero__content">
          {label && <span className="page-hero__label">{label}</span>}
          <h1 className="page-hero__title">{title}</h1>
          {subtitle && (
            <p className="page-hero__subtitle hindi-text">{subtitle}</p>
          )}
          {description && (
            <p className="page-hero__desc">{description}</p>
          )}
        </div>
      </div>
      <div className="page-hero__border" />
    </section>
  );
}
