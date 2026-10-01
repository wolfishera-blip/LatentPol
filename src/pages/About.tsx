import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import PageHero from '../components/PageHero';
import './About.css';

const processSteps = ['RESEARCH', 'INSIGHTS', 'STRATEGY', 'EXECUTION', 'REVIEW'];

const ethicsPrinciples = [
  'Transparency',
  'Responsible research',
  'Data minimization',
  'Privacy',
  'Informed participation where applicable',
  'Aggregate reporting',
  'Evidence-based analysis',
  'Respect for respondents',
  'No manipulation',
  'No discriminatory targeting',
];

export default function About() {
  const [contentRef, contentVisible] = useAnimateOnScroll();
  const [processRef, processVisible] = useAnimateOnScroll();
  const [ethicsRef, ethicsVisible] = useAnimateOnScroll();

  return (
    <>
      <PageHero
        label="About Us"
        title="About LATENTPOL"
        subtitle="हम कौन हैं?"
      />

      <main id="main-content">
        {/* About Content */}
        <section className="about-content lp-section">
          <div className="lp-container lp-container-narrow">
            <div
              ref={contentRef}
              className={`about-content__inner ${contentVisible ? 'lp-visible' : ''}`}
            >
              <p className="about-content__lead hindi-text">
                LATENTPOL एक research-driven political research and strategy consultancy है,
                जिसका उद्देश्य राजनीति और सार्वजनिक जीवन को केवल धारणाओं और नारों के माध्यम से नहीं,
                बल्कि डेटा, जमीनी वास्तविकताओं, जन-संवाद और व्यवस्थित विश्लेषण के माध्यम से समझना है।
              </p>

              <blockquote className="about-content__quote hindi-text">
                "हमारा मानना है कि बेहतर रणनीति की शुरुआत बेहतर समझ से होती है।"
              </blockquote>

              <div className="about-content__points">
                <p className="about-content__text">
                  LATENTPOL works at the intersection of political research, ground research,
                  public feedback, electoral research, campaign strategy, policy research,
                  public affairs, and strategic consulting.
                </p>
                <p className="about-content__text">
                  We believe in evidence-informed approaches, responsible research practices,
                  and structured strategy development based on real data and community insights.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="about-process lp-section">
          <div className="lp-container">
            <h2 className="about-process__heading hindi-text">हमारी कार्यप्रणाली</h2>
            <div
              ref={processRef}
              className={`about-process__flow ${processVisible ? 'lp-visible' : ''}`}
            >
              {processSteps.map((step, i) => (
                <div key={step} className="about-process__step" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="about-process__step-circle">{String(i + 1).padStart(2, '0')}</div>
                  <div className="about-process__step-label">{step}</div>
                  {i < processSteps.length - 1 && <div className="about-process__step-arrow">→</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Ethics */}
        <section className="about-ethics lp-section">
          <div className="lp-container lp-container-narrow">
            <div
              ref={ethicsRef}
              className={`about-ethics__inner ${ethicsVisible ? 'lp-visible' : ''}`}
            >
              <h2 className="about-ethics__title">Research Ethics</h2>
              <p className="about-ethics__subtitle hindi-text">अनुसंधान नैतिकता</p>
              <div className="about-ethics__grid">
                {ethicsPrinciples.map((principle) => (
                  <div key={principle} className="about-ethics__item">
                    <div className="about-ethics__dot" />
                    <span>{principle}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="about-cta lp-section">
          <div className="lp-container">
            <div className="about-cta__inner">
              <h2 className="about-cta__title hindi-text">हमसे जुड़ें</h2>
              <Link to="/contact" className="about-cta__btn hindi-text">
                संपर्क करें <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
