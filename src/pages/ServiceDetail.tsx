import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import PageHero from '../components/PageHero';
import './ServiceDetail.css';

interface ServiceDetailProps {
  label: string;
  title: string;
  hindi: string;
  description: string;
  sections: { heading: string; items: string[] }[];
  note?: string;
}

export default function ServiceDetail({
  label,
  title,
  hindi,
  description,
  sections,
  note,
}: ServiceDetailProps) {
  const [contentRef, contentVisible] = useAnimateOnScroll();

  return (
    <>
      <PageHero label={label} title={title} subtitle={hindi} description={description} />

      <main id="main-content">
        <section className="sd lp-section">
          <div className="lp-container lp-container-narrow">
            <div
              ref={contentRef}
              className={`sd__content ${contentVisible ? 'lp-visible' : ''}`}
            >
              {sections.map((section) => (
                <div key={section.heading} className="sd__section">
                  <h2 className="sd__section-heading">{section.heading}</h2>
                  <ul className="sd__list">
                    {section.items.map((item) => (
                      <li key={item} className="sd__list-item">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}

              {note && (
                <div className="sd__note">
                  <p>{note}</p>
                </div>
              )}

              <div className="sd__nav">
                <Link to="/services" className="sd__nav-back">
                  <ArrowLeft size={14} /> सभी सेवाएँ
                </Link>
                <Link to="/contact" className="sd__nav-cta hindi-text">
                  संपर्क करें <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
