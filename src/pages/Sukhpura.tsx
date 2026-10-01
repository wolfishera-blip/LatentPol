import { Link } from 'react-router-dom';
import { ArrowLeft, Download, BarChart3, Target, Users, FileText } from 'lucide-react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import PageHero from '../components/PageHero';
import './Sukhpura.css';

const sections = [
  {
    icon: Target,
    title: 'Research Objective',
    hindi: 'शोध उद्देश्य',
    content: 'स्थानीय स्तर पर जन-मुद्दों, विकास प्राथमिकताओं और सार्वजनिक प्रतिक्रिया को व्यवस्थित रूप से समझना और data-driven insights तैयार करना।',
  },
  {
    icon: FileText,
    title: 'Methodology',
    hindi: 'कार्यप्रणाली',
    content: 'Structured questionnaire-based survey, field research, stakeholder conversations and aggregate data analysis following responsible research practices.',
  },
  {
    icon: Users,
    title: 'Survey Themes',
    hindi: 'सर्वेक्षण विषय',
    list: [
      'Public infrastructure and development',
      'Education and school accessibility',
      'Healthcare and medical services',
      'Employment and livelihood',
      'Water, sanitation and electricity',
      'Local governance and public services',
      'Agriculture and rural development',
      'Youth concerns and aspirations',
    ],
  },
  {
    icon: BarChart3,
    title: 'Aggregate Findings',
    hindi: 'समग्र निष्कर्ष',
    content: 'Detailed aggregate findings will be published upon completion of data collection, verification and analysis.',
    placeholders: [
      { label: 'Total Responses', value: '[NUMBER OF RESPONSES]' },
      { label: 'Top Issue', value: '[TOP ISSUE]' },
      { label: 'Second Major Issue', value: '[SECOND MAJOR ISSUE]' },
      { label: 'Key Finding', value: '[KEY FINDING]' },
      { label: 'Other Findings', value: '[OTHER FINDINGS]' },
    ],
  },
];

export default function Sukhpura() {
  const [contentRef, contentVisible] = useAnimateOnScroll();

  return (
    <>
      <PageHero
        label="Case Study"
        title="सुखपुरा जन सर्वेक्षण – 2026"
        subtitle="Sukhpura Public Issues Survey 2026"
        description="स्थानीय स्तर पर जन-मुद्दों, विकास प्राथमिकताओं और सार्वजनिक feedback को समझने का एक independent research initiative."
      />

      <main id="main-content">
        <section className="sukhpura lp-section">
          <div className="lp-container lp-container-narrow">
            {/* Independent Research Label */}
            <div className="sukhpura__badge-wrap">
              <span className="sukhpura__badge">Independent Research Initiative</span>
            </div>

            <div
              ref={contentRef}
              className={`sukhpura__content ${contentVisible ? 'lp-visible' : ''}`}
            >
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <div key={section.title} className="sukhpura__section">
                    <div className="sukhpura__section-header">
                      <div className="sukhpura__section-icon">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h2 className="sukhpura__section-title">{section.title}</h2>
                        <p className="sukhpura__section-hindi hindi-text">{section.hindi}</p>
                      </div>
                    </div>

                    {section.content && (
                      <p className="sukhpura__section-content">{section.content}</p>
                    )}

                    {section.list && (
                      <ul className="sukhpura__section-list">
                        {section.list.map((item) => (
                          <li key={item} className="sukhpura__section-list-item">{item}</li>
                        ))}
                      </ul>
                    )}

                    {section.placeholders && (
                      <div className="sukhpura__placeholders">
                        {section.placeholders.map((ph) => (
                          <div key={ph.label} className="sukhpura__placeholder">
                            <span className="sukhpura__placeholder-label">{ph.label}</span>
                            <span className="sukhpura__placeholder-value">{ph.value}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Key Observations */}
              <div className="sukhpura__section">
                <h2 className="sukhpura__section-title">Key Observations</h2>
                <p className="sukhpura__section-hindi hindi-text">प्रमुख अवलोकन</p>
                <div className="sukhpura__coming-soon">
                  <p>Key observations and research insights will be published upon completion of the survey and data analysis.</p>
                </div>
              </div>

              {/* Research Summary */}
              <div className="sukhpura__section">
                <h2 className="sukhpura__section-title">Research Summary</h2>
                <p className="sukhpura__section-hindi hindi-text">शोध सारांश</p>
                <div className="sukhpura__coming-soon">
                  <p>A comprehensive research summary with charts, data visualizations and strategic insights will be available after data processing.</p>
                </div>
              </div>

              {/* Download Report */}
              <div className="sukhpura__download">
                <button className="sukhpura__download-btn hindi-text" disabled>
                  <Download size={16} /> रिपोर्ट डाउनलोड करें (Coming Soon)
                </button>
              </div>

              {/* Navigation */}
              <div className="sukhpura__nav">
                <Link to="/case-studies" className="sukhpura__nav-back">
                  <ArrowLeft size={14} /> सभी अध्ययन
                </Link>
                <Link to="/contact" className="sukhpura__nav-cta hindi-text">
                  शोध पर चर्चा करें →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
