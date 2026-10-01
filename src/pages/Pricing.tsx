import { Link } from 'react-router-dom';
import { ArrowRight, Search, Lightbulb, Megaphone } from 'lucide-react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import PageHero from '../components/PageHero';
import './Pricing.css';

const plans = [
  {
    icon: Search,
    title: 'RESEARCH PROJECT',
    hindi: 'अनुसंधान आधारित परियोजनाएँ',
    desc: 'Political research, ground research, public surveys, constituency studies and issue analysis projects.',
    pricing: 'Custom Quote',
  },
  {
    icon: Lightbulb,
    title: 'STRATEGY CONSULTING',
    hindi: 'रणनीतिक परामर्श',
    desc: 'Campaign strategy, communication planning, policy analysis and strategic advisory services.',
    pricing: 'Custom Quote',
    featured: true,
  },
  {
    icon: Megaphone,
    title: 'CAMPAIGN & COMMUNICATION',
    hindi: 'अभियान एवं संचार',
    desc: 'Full-spectrum campaign planning, digital communication, content strategy and public outreach.',
    pricing: 'Custom Quote',
  },
];

export default function Pricing() {
  const [cardsRef, cardsVisible] = useAnimateOnScroll();
  const [noteRef, noteVisible] = useAnimateOnScroll();

  return (
    <>
      <PageHero
        label="Engagement"
        title="Consultation & Engagement"
        subtitle="परामर्श एवं जुड़ाव"
      />

      <main id="main-content">
        <section className="pricing lp-section">
          <div className="lp-container">
            <p className="pricing__intro hindi-text">
              हर परियोजना की आवश्यकता, क्षेत्र, शोध की मात्रा, टीम और समयसीमा अलग होती है।
              इसलिए LATENTPOL customized engagement proposals प्रदान करता है।
            </p>

            <div
              ref={cardsRef}
              className={`pricing__grid ${cardsVisible ? 'lp-visible' : ''}`}
            >
              {plans.map((plan, i) => {
                const Icon = plan.icon;
                return (
                  <div
                    key={plan.title}
                    className={`pricing-card ${plan.featured ? 'pricing-card--featured' : ''}`}
                    style={{ transitionDelay: `${i * 0.1}s` }}
                  >
                    {plan.featured && <div className="pricing-card__ribbon">Recommended</div>}
                    <div className="pricing-card__icon">
                      <Icon size={24} />
                    </div>
                    <h2 className="pricing-card__title">{plan.title}</h2>
                    <p className="pricing-card__hindi hindi-text">{plan.hindi}</p>
                    <p className="pricing-card__desc">{plan.desc}</p>
                    <div className="pricing-card__price">{plan.pricing}</div>
                    <Link to="/contact" className="pricing-card__cta hindi-text">
                      Quote के लिए संपर्क करें <ArrowRight size={14} />
                    </Link>
                  </div>
                );
              })}
            </div>

            <div
              ref={noteRef}
              className={`pricing__note ${noteVisible ? 'lp-visible' : ''}`}
            >
              <p className="pricing__note-text hindi-text">
                प्रारंभिक चर्चा के बाद परियोजना के scope, timeline, deliverables और
                आवश्यक resources के आधार पर proposal साझा किया जाएगा।
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
