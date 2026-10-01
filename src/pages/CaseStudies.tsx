import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import PageHero from '../components/PageHero';
import './CaseStudies.css';

const caseStudies = [
  {
    title: 'सुखपुरा जन सर्वेक्षण – 2026',
    titleEn: 'Sukhpura Public Issues Survey 2026',
    type: 'Independent Research Initiative',
    desc: 'स्थानीय स्तर पर जन-मुद्दों, विकास प्राथमिकताओं और सार्वजनिक feedback को समझने का एक independent research initiative.',
    link: '/case-studies/sukhpura-2026',
    featured: true,
  },
];

export default function CaseStudies() {
  const [gridRef, gridVisible] = useAnimateOnScroll();

  return (
    <>
      <PageHero
        label="Case Studies"
        title="Case Studies"
        subtitle="अध्ययन एवं शोध"
        description="Detailed research case studies showcasing our methodology, analysis and findings."
      />

      <main id="main-content">
        <section className="case-studies lp-section">
          <div className="lp-container">
            <div
              ref={gridRef}
              className={`case-studies__grid ${gridVisible ? 'lp-visible' : ''}`}
            >
              {caseStudies.map((cs) => (
                <Link key={cs.link} to={cs.link} className="case-study-card">
                  <div className="case-study-card__badge">{cs.type}</div>
                  <h2 className="case-study-card__title hindi-text">{cs.title}</h2>
                  <p className="case-study-card__title-en">{cs.titleEn}</p>
                  <p className="case-study-card__desc hindi-text">{cs.desc}</p>
                  <span className="case-study-card__link hindi-text">
                    विस्तार से देखें <ArrowRight size={14} />
                  </span>
                </Link>
              ))}

              {/* Placeholder for future case studies */}
              <div className="case-study-card case-study-card--placeholder">
                <div className="case-study-card__badge">Coming Soon</div>
                <h2 className="case-study-card__title">More Case Studies</h2>
                <p className="case-study-card__desc">
                  Additional research case studies and project documentation will be published here as new research is completed.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
