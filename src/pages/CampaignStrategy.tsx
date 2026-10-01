import ServiceDetail from './ServiceDetail';

export default function CampaignStrategy() {
  return (
    <ServiceDetail
      label="Service 03"
      title="Campaign Strategy & Planning"
      hindi="अभियान रणनीति एवं योजना"
      description="Evidence-informed strategic planning for campaigns including communication, coordination and monitoring frameworks."
      sections={[
        {
          heading: 'Strategy & Planning',
          items: [
            'Campaign planning',
            'Communication planning',
            'Issue-based campaign planning',
            'Campaign calendar',
            'Field coordination frameworks',
            'Volunteer coordination',
          ],
        },
        {
          heading: 'Digital & Content',
          items: [
            'Content planning',
            'Digital campaign planning',
            'Creative direction',
            'Social media strategy',
          ],
        },
        {
          heading: 'Monitoring & Review',
          items: [
            'Campaign monitoring',
            'Campaign review',
            'Post-campaign analysis',
            'Performance assessment',
          ],
        },
      ]}
      note="LATENTPOL provides evidence-informed strategic planning. We do not guarantee electoral victory, political success or any specific outcome. Research and strategic recommendations are based on available information, methodology and professional analysis."
    />
  );
}
