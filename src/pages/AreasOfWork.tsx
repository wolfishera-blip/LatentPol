import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import PageHero from '../components/PageHero';
import './AreasOfWork.css';

const areas = [
  { title: 'Political & Electoral Research', hindi: 'राजनीतिक एवं निर्वाचन अनुसंधान', desc: 'Systematic research on political environments, electoral trends, public issues and constituency dynamics using data-driven methodologies.' },
  { title: 'Ground Research', hindi: 'जमीनी शोध', desc: 'Field-level research to understand local issues, development priorities and public sentiment through structured methodology.' },
  { title: 'Public Opinion & Feedback Research', hindi: 'जन-मत एवं प्रतिक्रिया शोध', desc: 'Structured surveys and feedback mechanisms to capture public perspectives on governance, development and local issues.' },
  { title: 'Constituency & Issue Analysis', hindi: 'क्षेत्र एवं मुद्दा विश्लेषण', desc: 'Detailed analysis of constituency-level data, demographics, development indicators and public concerns.' },
  { title: 'Campaign Strategy', hindi: 'अभियान रणनीति', desc: 'Evidence-informed campaign strategy development including communication planning, issue positioning and outreach frameworks.' },
  { title: 'Campaign Planning', hindi: 'अभियान योजना', desc: 'Structured campaign planning including calendars, coordination frameworks, resource planning and milestone tracking.' },
  { title: 'Public Communication', hindi: 'जन-संचार', desc: 'Strategic public communication planning for effective messaging, narrative development and public engagement.' },
  { title: 'Digital Communication', hindi: 'डिजिटल संचार', desc: 'Digital communication strategy including social media planning, content strategy and online engagement frameworks.' },
  { title: 'Policy & Issue Research', hindi: 'नीति एवं मुद्दा अनुसंधान', desc: 'Research on public policy issues including education, healthcare, agriculture, employment and governance.' },
  { title: 'Public Affairs', hindi: 'सार्वजनिक मामले', desc: 'Understanding public institutions, governance processes, stakeholder relationships and public interest issues.' },
  { title: 'Research Reports', hindi: 'शोध रिपोर्ट', desc: 'Professional research documentation including issue briefs, survey reports, analysis summaries and strategic assessments.' },
  { title: 'Campaign Monitoring & Review', hindi: 'अभियान निगरानी एवं समीक्षा', desc: 'Ongoing campaign monitoring, performance analysis and structured review for continuous improvement.' },
  { title: 'Leadership Communication', hindi: 'नेतृत्व संवाद', desc: 'Strategic communication support for public leaders including messaging, narrative frameworks and public engagement planning.' },
  { title: 'Public Outreach', hindi: 'जन-संपर्क', desc: 'Community engagement strategies, public outreach planning and grassroots communication frameworks.' },
  { title: 'Post-Campaign Analysis', hindi: 'अभियान पश्चात विश्लेषण', desc: 'Structured analysis of campaign outcomes, learnings and strategic insights for future planning.' },
];

export default function AreasOfWork() {
  return (
    <>
      <PageHero
        label="Our Areas of Work"
        title="Areas of Work"
        subtitle="हमारे कार्य क्षेत्र"
        description="LATENTPOL works across a comprehensive range of political research, strategy and public affairs domains."
      />

      <main id="main-content">
        <section className="areas lp-section">
          <div className="lp-container">
            <div className="areas__grid">
              {areas.map((area, i) => (
                <AreaCard key={area.title} area={area} index={i} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function AreaCard({ area, index }: { area: typeof areas[number]; index: number }) {
  const [ref, isVisible] = useAnimateOnScroll();

  return (
    <div
      ref={ref}
      className={`area-card ${isVisible ? 'lp-visible' : ''}`}
      style={{ transitionDelay: `${index * 0.04}s` }}
    >
      <div className="area-card__num">{String(index + 1).padStart(2, '0')}</div>
      <h3 className="area-card__title">{area.title}</h3>
      <p className="area-card__hindi hindi-text">{area.hindi}</p>
      <p className="area-card__desc">{area.desc}</p>
    </div>
  );
}
