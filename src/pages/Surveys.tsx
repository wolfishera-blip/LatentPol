import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardList, BarChart3, Users, FileText, Shield, Eye } from 'lucide-react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import './Surveys.css';

const surveyTopics = [
  'Public issues', 'Development priorities', 'Service delivery concerns',
  'Local governance issues', 'Education', 'Healthcare', 'Employment',
  'Agriculture', 'Infrastructure', 'Youth concerns', 'Other publicly relevant issues',
];

const methodology = [
  { icon: ClipboardList, title: 'Survey Methodology', desc: 'Structured questionnaire design and sampling methodology tailored to each research objective.' },
  { icon: FileText, title: 'Questionnaire', desc: 'Carefully designed questionnaires covering relevant public issues and development priorities.' },
  { icon: Users, title: 'Sample Information', desc: 'Transparent documentation of sample size, demographics and geographic coverage.' },
  { icon: BarChart3, title: 'Aggregate Findings', desc: 'Data presented in aggregate form to identify patterns, priorities and public sentiment.' },
  { icon: Eye, title: 'Research Observations', desc: 'Professional observations and insights derived from systematic data analysis.' },
  { icon: Shield, title: 'Privacy Protection', desc: 'No exposure of names, phone numbers, personal identifiers or sensitive individual information.' },
];

export default function Surveys() {
  const [topicsRef, topicsVisible] = useAnimateOnScroll();
  const [methodRef, methodVisible] = useAnimateOnScroll();

  return (
    <>
      <PageHero
        label="Public Surveys"
        title="जन सर्वेक्षण"
        subtitle="जनता की आवाज़ को व्यवस्थित डेटा और शोध में समझना।"
        description="LATENTPOL conducts structured surveys and public feedback research to understand public issues and development priorities."
      />

      <main id="main-content">
        {/* Survey Topics */}
        <section className="surveys-topics lp-section">
          <div className="lp-container lp-container-narrow">
            <SectionHeader
              label="Research Areas"
              title="What We Study"
              subtitle="हमारे शोध क्षेत्र"
              align="left"
            />
            <div
              ref={topicsRef}
              className={`surveys-topics__grid ${topicsVisible ? 'lp-visible' : ''}`}
            >
              {surveyTopics.map((topic) => (
                <div key={topic} className="surveys-topics__item">
                  <div className="surveys-topics__dot" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="surveys-method lp-section">
          <div className="lp-container">
            <SectionHeader
              label="Our Process"
              title="Survey Methodology"
              subtitle="सर्वेक्षण कार्यप्रणाली"
            />
            <div
              ref={methodRef}
              className={`surveys-method__grid ${methodVisible ? 'lp-visible' : ''}`}
            >
              {methodology.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="surveys-method__card">
                    <div className="surveys-method__icon">
                      <Icon size={22} />
                    </div>
                    <h3 className="surveys-method__title">{item.title}</h3>
                    <p className="surveys-method__desc">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Survey */}
        <section className="surveys-featured lp-section">
          <div className="lp-container lp-container-narrow">
            <div className="surveys-featured__card">
              <span className="surveys-featured__badge">Featured Survey</span>
              <h2 className="surveys-featured__title hindi-text">सुखपुरा जन सर्वेक्षण – 2026</h2>
              <p className="surveys-featured__desc hindi-text">
                स्थानीय स्तर पर जन-मुद्दों, विकास प्राथमिकताओं और सार्वजनिक feedback को समझने का एक independent research initiative.
              </p>
              <Link to="/case-studies/sukhpura-2026" className="surveys-featured__link hindi-text">
                सर्वेक्षण देखें <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
