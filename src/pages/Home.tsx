import { Link } from 'react-router-dom';
import {
  BarChart3,
  Users,
  Target,
  FileText,
  Megaphone,
  ArrowRight,
  Search,
  Ear,
  LineChart,
  Lightbulb,
  RefreshCw,
  ChevronDown,
} from 'lucide-react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import SectionHeader from '../components/SectionHeader';
import './Home.css';

const keywords = ['PEOPLE', 'DATA', 'RESEARCH', 'STRATEGY', 'IMPACT'];

const coreAreas = [
  {
    num: '01',
    icon: BarChart3,
    title: 'POLITICAL RESEARCH',
    hindi: 'राजनीतिक अनुसंधान',
    desc: 'Data-driven research for better understanding.',
    link: '/services/political-research',
  },
  {
    num: '02',
    icon: Users,
    title: 'GROUND RESEARCH',
    hindi: 'जमीनी शोध',
    desc: 'Ground realities and public feedback.',
    link: '/services/ground-research',
  },
  {
    num: '03',
    icon: Target,
    title: 'CAMPAIGN STRATEGY',
    hindi: 'अभियान रणनीति',
    desc: 'Structured planning and strategic communication.',
    link: '/services/campaign-strategy',
  },
  {
    num: '04',
    icon: FileText,
    title: 'POLICY ANALYSIS',
    hindi: 'नीति एवं मुद्दा विश्लेषण',
    desc: 'Research-based understanding of public issues.',
    link: '/services/policy-research',
  },
  {
    num: '05',
    icon: Megaphone,
    title: 'PUBLIC AFFAIRS',
    hindi: 'जन-संवाद एवं सार्वजनिक मामले',
    desc: 'Understanding communities, issues and institutions.',
    link: '/services/public-communication',
  },
];

const processSteps = [
  { icon: Search, label: 'RESEARCH', hindi: 'अनुसंधान', desc: 'तथ्यों, डेटा और उपलब्ध स्रोतों को समझना।' },
  { icon: Ear, label: 'LISTEN', hindi: 'सुनना', desc: 'जन-संवाद और सार्वजनिक feedback को समझना।' },
  { icon: LineChart, label: 'ANALYSE', hindi: 'विश्लेषण', desc: 'डेटा, मुद्दों और परिस्थितियों का व्यवस्थित विश्लेषण।' },
  { icon: Lightbulb, label: 'STRATEGISE', hindi: 'रणनीति', desc: 'Research के आधार पर रणनीतिक विकल्प तैयार करना।' },
  { icon: RefreshCw, label: 'REVIEW', hindi: 'समीक्षा', desc: 'परिणामों और सीख का विश्लेषण।' },
];

export default function Home() {
  const [aboutRef, aboutVisible] = useAnimateOnScroll();
  const [processRef, processVisible] = useAnimateOnScroll();
  const [brandRef, brandVisible] = useAnimateOnScroll();

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero" aria-label="Hero">
        <div className="hero__bg">
          <div className="hero__gradient" />
          <div className="hero__pattern" />
          <div className="hero__map-overlay" />
        </div>

        <div className="hero__content lp-container">
          <div className="hero__badge">
            <span>LATENTPOL</span>
            <span className="hero__badge-sep">|</span>
            <span>Decoding Political Insights</span>
          </div>

          <h1 className="hero__headline hindi-text">
            <span className="hero__headline-line">जमीनी हकीकत से</span>
            <span className="hero__headline-line hero__headline-line--accent">रणनीतिक समाधान तक</span>
          </h1>

          <p className="hero__supporting hindi-text">
            डेटा, जन-संवाद और जमीनी शोध के माध्यम से राजनीतिक एवं सार्वजनिक मुद्दों को समझना,
            उनका विश्लेषण करना और संरचित रणनीतिक समाधान तैयार करना।
          </p>

          <div className="hero__keywords">
            {keywords.map((kw, i) => (
              <span key={kw} className="hero__keyword" style={{ animationDelay: `${1 + i * 0.15}s` }}>
                {kw}
              </span>
            ))}
          </div>

          <div className="hero__ctas">
            <Link to="/services" className="hero__cta hero__cta--primary hindi-text">
              हमारी सेवाएँ देखें <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="hero__cta hero__cta--secondary hindi-text">
              हमसे संपर्क करें <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="hero__scroll-indicator">
          <ChevronDown size={20} />
        </div>
      </section>

      {/* ── CORE AREAS ── */}
      <section className="home-services lp-section" aria-label="Core Areas">
        <div className="lp-container">
          <SectionHeader
            label="Our Core Areas"
            title="What We Do"
            subtitle="हमारे प्रमुख कार्य क्षेत्र"
          />
          <div className="home-services__grid">
            {coreAreas.map((area, i) => {
              const Icon = area.icon;
              return (
                <ServiceCard
                  key={area.num}
                  num={area.num}
                  Icon={Icon}
                  title={area.title}
                  hindi={area.hindi}
                  desc={area.desc}
                  link={area.link}
                  delay={i}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ── */}
      <section className="home-about lp-section" aria-label="About LATENTPOL">
        <div className="lp-container">
          <div
            ref={aboutRef}
            className={`home-about__inner ${aboutVisible ? 'lp-visible' : ''}`}
          >
            <div className="home-about__text">
              <span className="home-about__label">About LATENTPOL</span>
              <h2 className="home-about__title hindi-text">हम कौन हैं?</h2>
              <p className="home-about__desc hindi-text">
                LATENTPOL एक research-driven political research and strategy consultancy है,
                जिसका उद्देश्य राजनीति और सार्वजनिक जीवन को केवल धारणाओं और नारों के माध्यम से नहीं,
                बल्कि डेटा, जमीनी वास्तविकताओं, जन-संवाद और व्यवस्थित विश्लेषण के माध्यम से समझना है।
              </p>
              <p className="home-about__highlight hindi-text">
                "हमारा मानना है कि बेहतर रणनीति की शुरुआत बेहतर समझ से होती है।"
              </p>
              <Link to="/about" className="home-about__link">
                और जानें <ArrowRight size={16} />
              </Link>
            </div>
            <div className="home-about__visual">
              <div className="home-about__process">
                {['RESEARCH', 'INSIGHTS', 'STRATEGY', 'EXECUTION', 'REVIEW'].map((step, i) => (
                  <div key={step} className="home-about__step">
                    <div className="home-about__step-num">{String(i + 1).padStart(2, '0')}</div>
                    <div className="home-about__step-label">{step}</div>
                    {i < 4 && <div className="home-about__step-line" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR APPROACH ── */}
      <section className="home-approach lp-section" aria-label="Our Approach">
        <div className="home-approach__bg" />
        <div className="lp-container">
          <SectionHeader
            label="Our Approach"
            title="How We Work"
            subtitle="हमारी कार्यप्रणाली"
            dark
          />
          <div
            ref={processRef}
            className={`home-approach__steps ${processVisible ? 'lp-visible' : ''}`}
          >
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.label} className="approach-step" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="approach-step__icon-wrap">
                    <Icon size={24} />
                  </div>
                  <div className="approach-step__num">{String(i + 1).padStart(2, '0')}</div>
                  <h3 className="approach-step__label">{step.label}</h3>
                  <p className="approach-step__hindi hindi-text">{step.hindi}</p>
                  <p className="approach-step__desc hindi-text">{step.desc}</p>
                  {i < processSteps.length - 1 && (
                    <div className="approach-step__connector" aria-hidden="true" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BRAND MESSAGE ── */}
      <section className="home-brand lp-section" aria-label="Brand Message">
        <div className="lp-container">
          <div
            ref={brandRef}
            className={`home-brand__inner ${brandVisible ? 'lp-visible' : ''}`}
          >
            <div className="home-brand__philosophy hindi-text">
              <span className="home-brand__line">"सही समझ,</span>
              <span className="home-brand__line">सही रणनीति,</span>
              <span className="home-brand__line home-brand__line--accent">बेहतर कल।"</span>
            </div>
            <div className="home-brand__divider" />
            <p className="home-brand__positioning">
              RESEARCH • STRATEGY • PUBLIC AFFAIRS
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="home-cta lp-section" aria-label="Call to Action">
        <div className="lp-container">
          <div className="home-cta__inner">
            <h2 className="home-cta__title hindi-text">
              अपनी परियोजना पर चर्चा करें
            </h2>
            <p className="home-cta__desc hindi-text">
              अपने क्षेत्र, शोध, रणनीति या सार्वजनिक मामलों से जुड़े प्रोजेक्ट पर चर्चा करने के लिए हमसे संपर्क करें।
            </p>
            <div className="home-cta__buttons">
              <Link to="/contact" className="home-cta__btn home-cta__btn--primary hindi-text">
                हमसे संपर्क करें <ArrowRight size={16} />
              </Link>
              <Link to="/pricing" className="home-cta__btn home-cta__btn--secondary hindi-text">
                Engagement Plans देखें <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Service Card sub-component ── */
interface ServiceCardProps {
  num: string;
  Icon: React.ComponentType<{ size: number }>;
  title: string;
  hindi: string;
  desc: string;
  link: string;
  delay: number;
}

function ServiceCard({ num, Icon, title, hindi, desc, link, delay }: ServiceCardProps) {
  const [ref, isVisible] = useAnimateOnScroll<HTMLAnchorElement>();

  return (
    <Link
      to={link}
      ref={ref}
      className={`service-card ${isVisible ? 'lp-visible' : ''}`}
      style={{ transitionDelay: `${delay * 0.08}s` }}
    >
      <div className="service-card__header">
        <span className="service-card__num">{num}</span>
        <div className="service-card__icon">
          <Icon size={22} />
        </div>
      </div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__hindi hindi-text">{hindi}</p>
      <p className="service-card__desc">{desc}</p>
      <span className="service-card__link hindi-text">
        विस्तार से देखें <ArrowRight size={14} />
      </span>
    </Link>
  );
}
