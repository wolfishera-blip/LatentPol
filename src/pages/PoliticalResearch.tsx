import ServiceDetail from './ServiceDetail';

export default function PoliticalResearch() {
  return (
    <ServiceDetail
      label="Service 01"
      title="Political & Electoral Research"
      hindi="राजनीतिक एवं निर्वाचन अनुसंधान"
      description="Systematic, data-driven research on political environments, electoral dynamics, public issues and constituency analysis."
      sections={[
        {
          heading: 'Research Areas',
          items: [
            'Constituency research',
            'Political environment research',
            'Public issue research',
            'Electoral research',
            'Public opinion surveys',
            'Development issue mapping',
            'Historical analysis',
            'Data interpretation',
          ],
        },
        {
          heading: 'Deliverables',
          items: [
            'Research reports',
            'Issue briefs',
            'Comparative analysis',
            'Data summaries',
            'Electoral environment assessments',
            'Constituency profiles',
          ],
        },
      ]}
    />
  );
}
