import PageHero from '../components/PageHero';
import './Legal.css';

export default function Disclaimer() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Disclaimer"
        subtitle="अस्वीकरण"
      />
      <main id="main-content">
        <section className="legal lp-section">
          <div className="lp-container lp-container-narrow">
            <div className="legal__content">
              <p className="legal__updated">Last Updated: September 2026</p>

              <div className="legal__block">
                <h2 className="legal__heading">General Disclaimer</h2>
                <p>LATENTPOL provides research, analysis and strategic consulting services. Research findings and strategic recommendations are based on available information, methodology and professional analysis and should not be interpreted as guarantees of political, electoral, financial or other outcomes.</p>
              </div>

              <div className="legal__block">
                <h2 className="legal__heading">Information Disclaimer</h2>
                <p>Information on this website is provided for general informational purposes and does not constitute legal, financial or regulatory advice. Users should seek appropriate professional advice for specific situations.</p>
              </div>

              <div className="legal__block">
                <h2 className="legal__heading">External References</h2>
                <p>Where external information or opinions are referenced, they should be appropriately attributed. LATENTPOL is not responsible for the accuracy or completeness of third-party information.</p>
              </div>

              <div className="legal__block">
                <h2 className="legal__heading">Client Responsibility</h2>
                <p>Clients remain responsible for ensuring that their activities comply with applicable laws, regulations and election-related requirements. LATENTPOL provides professional recommendations but does not assume responsibility for implementation decisions made by clients.</p>
              </div>

              <div className="legal__block">
                <h2 className="legal__heading">No Affiliation</h2>
                <p>LATENTPOL is an independent research and strategy consultancy. LATENTPOL is not affiliated with any political party unless explicitly stated in a future official announcement.</p>
              </div>

              <div className="legal__block">
                <h2 className="legal__heading">Research Disclaimer</h2>
                <p>All research findings, survey results and data analyses are subject to the limitations of methodology, sample size, available data and field conditions. They should not be interpreted as absolute predictions of future outcomes.</p>
              </div>

              <div className="legal__disclaimer-note">
                <p>For questions regarding this disclaimer, please contact us at <a href="mailto:latentpol1@gmail.com" style={{ color: 'var(--lp-rust)' }}>latentpol1@gmail.com</a>.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
