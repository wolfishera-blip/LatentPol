import { FileText, Download } from 'lucide-react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import PageHero from '../components/PageHero';
import './Research.css';

const categories = [
  'All', 'Political Research', 'Public Surveys', 'Development Issues',
  'Policy Research', 'Constituency Studies', 'Public Affairs', 'Campaign Analysis',
];

const reports = [
  {
    title: 'Sukhpura Public Issues Survey Report',
    category: 'Public Surveys',
    date: 'Coming Soon',
    desc: 'A comprehensive survey report on local public issues, development priorities and community feedback in Sukhpura.',
    status: 'upcoming',
  },
  {
    title: 'Understanding Development Priorities',
    category: 'Development Issues',
    date: 'Under Development',
    desc: 'Research-based analysis of development priorities across constituencies based on ground research and public feedback.',
    status: 'upcoming',
  },
  {
    title: 'Public Opinion Research Framework',
    category: 'Political Research',
    date: 'Under Development',
    desc: 'A structured framework for conducting responsible and systematic public opinion research at the constituency level.',
    status: 'upcoming',
  },
  {
    title: 'Campaign Communication Analysis',
    category: 'Campaign Analysis',
    date: 'Coming Soon',
    desc: 'Analysis of campaign communication patterns, messaging strategies and public engagement effectiveness.',
    status: 'upcoming',
  },
  {
    title: 'Policy Issue Brief: Education & Youth',
    category: 'Policy Research',
    date: 'Coming Soon',
    desc: 'Issue brief examining education, skill development and youth employment challenges through data and research.',
    status: 'upcoming',
  },
  {
    title: 'Constituency Profile Methodology',
    category: 'Constituency Studies',
    date: 'Under Development',
    desc: 'Research methodology for creating comprehensive constituency profiles including demographic, development and political data.',
    status: 'upcoming',
  },
];

export default function Research() {
  return (
    <>
      <PageHero
        label="Research & Reports"
        title="Research Library"
        subtitle="अनुसंधान एवं रिपोर्ट"
        description="Professional research documentation, survey reports, issue briefs and strategic assessments."
      />

      <main id="main-content">
        <section className="research lp-section">
          <div className="lp-container">
            {/* Category Tabs */}
            <div className="research__tabs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`research__tab ${cat === 'All' ? 'research__tab--active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Reports Grid */}
            <div className="research__grid">
              {reports.map((report, i) => (
                <ReportCard key={report.title} report={report} index={i} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function ReportCard({ report, index }: { report: typeof reports[number]; index: number }) {
  const [ref, isVisible] = useAnimateOnScroll();

  return (
    <div
      ref={ref}
      className={`report-card ${isVisible ? 'lp-visible' : ''}`}
      style={{ transitionDelay: `${index * 0.06}s` }}
    >
      <div className="report-card__header">
        <span className="report-card__category">{report.category}</span>
        <span className="report-card__date">{report.date}</span>
      </div>
      <h3 className="report-card__title">{report.title}</h3>
      <p className="report-card__desc">{report.desc}</p>
      <div className="report-card__actions">
        <button className="report-card__btn report-card__btn--read hindi-text" disabled>
          <FileText size={14} /> रिपोर्ट पढ़ें →
        </button>
        <button className="report-card__btn report-card__btn--download hindi-text" disabled>
          <Download size={14} /> PDF डाउनलोड करें →
        </button>
      </div>
      {report.status === 'upcoming' && (
        <div className="report-card__status">Coming Soon</div>
      )}
    </div>
  );
}
