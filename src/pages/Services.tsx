import { Link } from 'react-router-dom';
import { BarChart3, Users, Target, FileText, Megaphone, ArrowRight } from 'lucide-react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import PageHero from '../components/PageHero';
import './Services.css';

const services = [
  {
    icon: BarChart3,
    title: 'Political & Electoral Research',
    hindi: 'राजनीतिक एवं निर्वाचन अनुसंधान',
    desc: 'Systematic, data-driven research on political environments, electoral dynamics, public issues and constituency analysis.',
    link: '/services/political-research',
    items: ['Constituency research', 'Electoral research', 'Public opinion surveys', 'Historical analysis', 'Data interpretation', 'Research reports'],
  },
  {
    icon: Users,
    title: 'Ground Research & Public Feedback',
    hindi: 'जमीनी शोध एवं जन-संवाद',
    desc: 'Structured surveys, public feedback collection and ground-level issue identification through responsible research practices.',
    link: '/services/ground-research',
    items: ['Structured public surveys', 'Public feedback collection', 'Field reports', 'Stakeholder conversations', 'Aggregate data analysis'],
  },
  {
    icon: Target,
    title: 'Campaign Strategy & Planning',
    hindi: 'अभियान रणनीति एवं योजना',
    desc: 'Evidence-informed strategic planning for campaigns including communication, coordination and monitoring frameworks.',
    link: '/services/campaign-strategy',
    items: ['Campaign planning', 'Communication planning', 'Field coordination', 'Digital campaign planning', 'Campaign monitoring & review'],
  },
  {
    icon: FileText,
    title: 'Policy & Issue Research',
    hindi: 'नीति एवं मुद्दा अनुसंधान',
    desc: 'Research on public policy issues covering education, healthcare, agriculture, employment, governance and development.',
    link: '/services/policy-research',
    items: ['Issue briefs', 'Policy research', 'Public issue maps', 'Data summaries', 'Development research'],
  },
  {
    icon: Megaphone,
    title: 'Public & Digital Communication',
    hindi: 'जन-संचार एवं डिजिटल संचार',
    desc: 'Strategic public communication and digital media planning for effective engagement and outreach.',
    link: '/services/public-communication',
    items: ['Public communication strategy', 'Social media strategy', 'Content planning', 'Media communication', 'Public outreach planning'],
  },
];

export default function Services() {
  return (
    <>
      <PageHero
        label="Our Services"
        title="Services"
        subtitle="हमारी सेवाएँ"
        description="Comprehensive political research, strategy and public affairs services tailored to your requirements."
      />

      <main id="main-content">
        <section className="services-overview lp-section">
          <div className="lp-container">
            <div className="services-overview__list">
              {services.map((service, i) => (
                <ServiceBlock key={service.title} service={service} index={i} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function ServiceBlock({ service, index }: { service: typeof services[number]; index: number }) {
  const [ref, isVisible] = useAnimateOnScroll();
  const Icon = service.icon;
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`service-block ${isEven ? '' : 'service-block--reverse'} ${isVisible ? 'lp-visible' : ''}`}
    >
      <div className="service-block__content">
        <div className="service-block__icon-wrap">
          <Icon size={28} />
        </div>
        <span className="service-block__num">{String(index + 1).padStart(2, '0')}</span>
        <h2 className="service-block__title">{service.title}</h2>
        <p className="service-block__hindi hindi-text">{service.hindi}</p>
        <p className="service-block__desc">{service.desc}</p>
        <ul className="service-block__items">
          {service.items.map((item) => (
            <li key={item} className="service-block__item">{item}</li>
          ))}
        </ul>
        <Link to={service.link} className="service-block__link hindi-text">
          विस्तार से देखें <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
