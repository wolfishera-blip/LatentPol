import PageHero from '../components/PageHero';
import './Legal.css';

export default function Privacy() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Privacy Policy"
        subtitle="गोपनीयता नीति"
      />
      <main id="main-content">
        <section className="legal lp-section">
          <div className="lp-container lp-container-narrow">
            <div className="legal__content">
              <p className="legal__updated">Last Updated: September 2026</p>

              <div className="legal__block">
                <h2 className="legal__heading">1. Information We May Collect</h2>
                <p>When you interact with LATENTPOL through our website, contact forms or direct communication, we may collect the following information:</p>
                <ul className="legal__list">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Organization name</li>
                  <li>Project information</li>
                  <li>Contact form submissions</li>
                </ul>
              </div>

              <div className="legal__block">
                <h2 className="legal__heading">2. Purpose of Collection</h2>
                <p>We collect information for the following purposes:</p>
                <ul className="legal__list">
                  <li>Responding to enquiries</li>
                  <li>Preparing proposals</li>
                  <li>Providing requested services</li>
                  <li>Communication regarding projects</li>
                  <li>Improving website services</li>
                </ul>
              </div>

              <div className="legal__block">
                <h2 className="legal__heading">3. Data Protection</h2>
                <p>We do not sell personal information to third parties. We do not collect unnecessary sensitive personal information. We take reasonable measures to protect the information you share with us.</p>
              </div>

              <div className="legal__block">
                <h2 className="legal__heading">4. Cookies & Analytics</h2>
                <p>Our website may use basic cookies and analytics tools to understand website usage patterns and improve user experience. These tools may collect anonymized data such as pages visited, time spent on the website and general geographic location.</p>
              </div>

              <div className="legal__block">
                <h2 className="legal__heading">5. Data Retention</h2>
                <p>We retain personal information only for as long as necessary to fulfill the purposes for which it was collected, or as required by applicable law. Contact form submissions are retained for a reasonable period to facilitate communication.</p>
              </div>

              <div className="legal__block">
                <h2 className="legal__heading">6. Security</h2>
                <p>We implement reasonable security measures to protect personal information from unauthorized access, alteration, disclosure or destruction. However, no method of electronic storage or transmission is 100% secure.</p>
              </div>

              <div className="legal__block">
                <h2 className="legal__heading">7. Third-Party Service Providers</h2>
                <p>We may use third-party services for website hosting, analytics, communication tools and form processing. These services may have their own privacy policies. We encourage users to review those policies.</p>
              </div>

              <div className="legal__block">
                <h2 className="legal__heading">8. Your Rights</h2>
                <p>You may request access to, correction of, or deletion of your personal information by contacting us. We will respond to such requests within a reasonable timeframe.</p>
              </div>

              <div className="legal__block">
                <h2 className="legal__heading">9. Contact</h2>
                <p>For privacy-related queries or requests, please contact us at:</p>
                <p><strong>Email:</strong> <a href="mailto:latentpol1@gmail.com" style={{ color: 'var(--lp-rust)' }}>latentpol1@gmail.com</a></p>
              </div>

              <div className="legal__disclaimer-note">
                <p>This privacy policy is for informational purposes and is appropriate for an Indian consultancy website. It does not constitute formal legal advice.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
