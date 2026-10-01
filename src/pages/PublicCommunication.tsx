import ServiceDetail from './ServiceDetail';

export default function PublicCommunication() {
  return (
    <ServiceDetail
      label="Service 05"
      title="Public & Digital Communication"
      hindi="जन-संचार एवं डिजिटल संचार"
      description="Strategic public communication and digital media planning for effective engagement and outreach."
      sections={[
        {
          heading: 'Communication Strategy',
          items: [
            'Public communication strategy',
            'Social media strategy',
            'Content planning',
            'Digital communication',
            'Website strategy',
          ],
        },
        {
          heading: 'Campaigns & Outreach',
          items: [
            'Public information campaigns',
            'Media communication planning',
            'Creative direction',
            'Communication calendars',
            'Public outreach planning',
          ],
        },
      ]}
    />
  );
}
