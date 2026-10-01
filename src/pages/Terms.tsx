import PageHero from '../components/PageHero';
import './Legal.css';

export default function Terms() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Terms & Conditions"
        subtitle="नियम एवं शर्तें"
      />
      <main id="main-content">
        <section className="legal lp-section">
          <div className="lp-container lp-container-narrow">
            <div className="legal__content">
              <p className="legal__updated">Last Updated: September 2026</p>

              <div className="legal__block">
                <h2 className="legal__heading">1. Introduction</h2>
                <p>These Terms & Conditions govern the use of the LATENTPOL website and the engagement of services provided through LATENTPOL. By accessing this website or engaging our services, you agree to these terms.</p>
              </div>

              <div className="legal__block">
                <h2 className="legal__heading">2. Nature of Services</h2>
                <p>LATENTPOL provides research, strategic consulting, public affairs, communication and related professional services. Services are customized according to project scope, requirements and engagement agreements.</p>
              </div>

              <div className="legal__block">
                <h2 className="legal__heading">3. No Guarantee of Political or Electoral Outcomes</h2>
                <p>LATENTPOL does not guarantee electoral victory, political success, public opinion outcomes, media outcomes or any specific result. Research and strategic recommendations are based on available information, research methodology and professional analysis.</p>
              </div>

              <div className="legal__block">
                <h2 className="legal__heading">4. Client Responsibility</h2>
                <p>Clients are responsible for:</p>
                <ul className="legal__list">
                  <li>Accuracy of information provided</li>
                  <li>Legal compliance</li>
                  <li>Final decisions</li>
                  <li>Implementation of strategies</li>
                  <li>Permissions and approvals</li>
                  <li>Compliance with applicable election and advertising laws</li>
                </ul>
              </div>

              <div className="legal__block">
                <h2 className="legal__heading">5. Scope of Work</h2>
                <p>Every paid engagement may be governed by a separate proposal, quotation, work order, agreement or statement of work. That document will define scope, deliverables, timeline, fees, payment terms, revision limits and responsibilities.</p>
              </div>

              <div className="legal__block">
                <h2 className="legal__heading">6. Fees & Payments</h2>
                <p>Fees are project-specific. Payment schedules will be communicated in the proposal/invoice. Taxes, if applicable, may be charged separately.</p>
              </div>

              <div className="legal__block">
                <h2 className="legal__heading">7. Cancellation & Refunds</h2>
                <p>Refund eligibility depends on the specific project agreement. Work already completed, research already conducted, third-party costs and approved expenses may be non-refundable. Any applicable refund policy must be communicated before engagement.</p>
              </div>

              <div className="legal__block">
                <h2 className="legal__heading">8. Intellectual Property</h2>
                <p>Unless otherwise agreed in writing:</p>
                <ul className="legal__list">
                  <li>LATENTPOL retains ownership of its methodologies, templates, frameworks, research processes and proprietary materials.</li>
                  <li>Client-specific deliverables may be transferred/licensed according to the engagement agreement.</li>
                  <li>Third-party materials remain subject to their respective rights.</li>
                </ul>
              </div>

              <div className="legal__block">
                <h2 className="legal__heading">9. Confidentiality</h2>
                <p>LATENTPOL will make reasonable efforts to maintain confidentiality of non-public client information. Confidentiality obligations may be governed by a separate NDA where required.</p>
              </div>

              <div className="legal__block">
                <h2 className="legal__heading">10. Research Limitations</h2>
                <p>Research findings depend on available data, sample size, methodology, field conditions, respondent participation, time period and data quality. Research should not be interpreted as an absolute prediction of future political or electoral outcomes.</p>
              </div>

              <div className="legal__block">
                <h2 className="legal__heading">11. Third-Party Platforms</h2>
                <p>LATENTPOL may use third-party services for communication, forms, hosting, analytics or other technical functions. LATENTPOL is not responsible for outages or failures caused by third-party services beyond its reasonable control.</p>
              </div>

              <div className="legal__block">
                <h2 className="legal__heading">12. Website Content</h2>
                <p>The website may contain informational content, research materials, opinions attributed to sources, visualizations and links. Content may be updated without prior notice.</p>
              </div>

              <div className="legal__block">
                <h2 className="legal__heading">13. Prohibited Use</h2>
                <p>Users must not:</p>
                <ul className="legal__list">
                  <li>Attempt unauthorized access</li>
                  <li>Introduce malicious code</li>
                  <li>Misuse website forms</li>
                  <li>Scrape confidential information</li>
                  <li>Impersonate LATENTPOL</li>
                  <li>Use the website for unlawful purposes</li>
                </ul>
              </div>

              <div className="legal__block">
                <h2 className="legal__heading">14. Limitation of Liability</h2>
                <p>LATENTPOL shall not be liable for indirect, incidental, consequential or speculative losses arising from reliance on research or strategic recommendations, except where liability cannot legally be excluded.</p>
              </div>

              <div className="legal__block">
                <h2 className="legal__heading">15. Changes to Terms</h2>
                <p>LATENTPOL may update these Terms & Conditions when necessary. Users are encouraged to review this page periodically.</p>
              </div>

              <div className="legal__block">
                <h2 className="legal__heading">16. Governing Law</h2>
                <p>These Terms shall be governed by the applicable laws of India, subject to applicable jurisdiction.</p>
              </div>

              <div className="legal__disclaimer-note">
                <p>This page is for informational purposes and does not constitute formal legal advice. For specific legal questions, please consult a qualified legal professional.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
