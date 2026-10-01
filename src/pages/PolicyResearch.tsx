import ServiceDetail from './ServiceDetail';

export default function PolicyResearch() {
  return (
    <ServiceDetail
      label="Service 04"
      title="Policy & Issue Research"
      hindi="नीति एवं मुद्दा अनुसंधान"
      description="Research on public policy issues covering education, healthcare, agriculture, employment, governance and development."
      sections={[
        {
          heading: 'Research Areas',
          items: [
            'Education',
            'Healthcare',
            'Agriculture',
            'Employment',
            'Infrastructure',
            'Governance',
            'Public service delivery',
            'Local development',
            'Rural development',
            'Youth issues',
            'Women\'s public issues',
            'Social development',
          ],
        },
        {
          heading: 'Deliverables',
          items: [
            'Issue briefs',
            'Research reports',
            'Public issue maps',
            'Data summaries',
            'Policy research documents',
          ],
        },
      ]}
    />
  );
}
