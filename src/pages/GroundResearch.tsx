import ServiceDetail from './ServiceDetail';

export default function GroundResearch() {
  return (
    <ServiceDetail
      label="Service 02"
      title="Ground Research & Public Feedback"
      hindi="जमीनी शोध एवं जन-संवाद"
      description="Structured surveys, public feedback collection and ground-level issue identification through responsible research practices."
      sections={[
        {
          heading: 'Research Methods',
          items: [
            'Structured public surveys',
            'Questionnaires',
            'Public feedback collection',
            'Ground-level issue identification',
            'Village/locality-level research',
            'Stakeholder conversations',
            'Development priority mapping',
          ],
        },
        {
          heading: 'Deliverables',
          items: [
            'Field reports',
            'Aggregate data analysis',
            'Survey summaries',
            'Issue priority maps',
            'Public feedback reports',
          ],
        },
      ]}
      note="Research is presented in an aggregated and responsible manner. LATENTPOL does not engage in individual political profiling, caste-based targeting, religion-based targeting, sensitive-personal-data targeting, or manipulation of individual voters."
    />
  );
}
