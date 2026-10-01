import { useState, type FormEvent } from 'react';
import { Mail, Phone, MessageCircle, MapPin, Send } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from '../components/SocialIcons';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import PageHero from '../components/PageHero';
import './Contact.css';

const contactMethods = [
  { icon: Mail, label: 'ईमेल करें', href: 'mailto:latentpol1@gmail.com', detail: 'latentpol1@gmail.com' },
  { icon: Phone, label: 'कॉल करें', href: 'tel:+917068785614', detail: '+91 7068785614' },
  { icon: MessageCircle, label: 'WhatsApp पर संपर्क करें', href: 'https://wa.me/919670617806', detail: '+91 9670617806', external: true },
  { icon: InstagramIcon, label: 'Instagram देखें', href: 'https://www.instagram.com/latentpol', detail: '@latentpol', external: true },
  { icon: FacebookIcon, label: 'Facebook देखें', href: 'https://www.facebook.com/share/19dMmMSimJ/', detail: 'LATENTPOL', external: true },
];

const projectTypes = [
  'Research',
  'Survey',
  'Strategy Consulting',
  'Campaign Planning',
  'Policy Research',
  'Communication',
  'Public Affairs',
  'Other',
];

export default function Contact() {
  const [detailsRef, detailsVisible] = useAnimateOnScroll();
  const [formRef, formVisible] = useAnimateOnScroll();
  const [formData, setFormData] = useState({
    name: '', organization: '', projectType: '', location: '',
    email: '', phone: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In production, this would send the form data to a backend
    setSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <PageHero
        label="Contact"
        title="हमसे जुड़ें"
        subtitle="Contact LATENTPOL"
        description="अपने क्षेत्र, शोध, रणनीति या राजनीतिक एवं सार्वजनिक मामलों से जुड़े प्रोजेक्ट पर चर्चा करने के लिए हमसे संपर्क करें।"
      />

      <main id="main-content">
        <section className="contact lp-section">
          <div className="lp-container">
            <div className="contact__grid">
              {/* Contact Details */}
              <div
                ref={detailsRef}
                className={`contact__details ${detailsVisible ? 'lp-visible' : ''}`}
              >
                <h2 className="contact__details-title hindi-text">संपर्क जानकारी</h2>
                <div className="contact__methods">
                  {contactMethods.map((method) => {
                    const Icon = method.icon;
                    return (
                      <a
                        key={method.label}
                        href={method.href}
                        target={method.external ? '_blank' : undefined}
                        rel={method.external ? 'noopener noreferrer' : undefined}
                        className="contact__method"
                      >
                        <div className="contact__method-icon">
                          <Icon size={20} />
                        </div>
                        <div>
                          <span className="contact__method-label hindi-text">{method.label}</span>
                          <span className="contact__method-detail">{method.detail}</span>
                        </div>
                      </a>
                    );
                  })}
                </div>

                <div className="contact__location">
                  <MapPin size={16} />
                  <span>Uttar Pradesh, India</span>
                </div>
              </div>

              {/* Contact Form */}
              <div
                ref={formRef}
                className={`contact__form-wrap ${formVisible ? 'lp-visible' : ''}`}
              >
                {submitted ? (
                  <div className="contact__success">
                    <div className="contact__success-icon">✓</div>
                    <h3 className="contact__success-title hindi-text">धन्यवाद!</h3>
                    <p className="contact__success-text hindi-text">
                      आपका संदेश प्राप्त हो गया है। हम जल्द ही आपसे संपर्क करेंगे।
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact__form">
                    <h2 className="contact__form-title hindi-text">प्रोजेक्ट पर चर्चा करें</h2>

                    <div className="contact__form-grid">
                      <div className="contact__field">
                        <label htmlFor="contact-name" className="contact__label">Name *</label>
                        <input
                          id="contact-name"
                          type="text"
                          className="contact__input"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          required
                          placeholder="आपका नाम"
                        />
                      </div>

                      <div className="contact__field">
                        <label htmlFor="contact-org" className="contact__label">Organization</label>
                        <input
                          id="contact-org"
                          type="text"
                          className="contact__input"
                          value={formData.organization}
                          onChange={(e) => handleChange('organization', e.target.value)}
                          placeholder="संगठन / संस्था"
                        />
                      </div>

                      <div className="contact__field">
                        <label htmlFor="contact-type" className="contact__label">Project Type</label>
                        <select
                          id="contact-type"
                          className="contact__select"
                          value={formData.projectType}
                          onChange={(e) => handleChange('projectType', e.target.value)}
                        >
                          <option value="">प्रोजेक्ट प्रकार चुनें</option>
                          {projectTypes.map((pt) => (
                            <option key={pt} value={pt}>{pt}</option>
                          ))}
                        </select>
                      </div>

                      <div className="contact__field">
                        <label htmlFor="contact-location" className="contact__label">Location</label>
                        <input
                          id="contact-location"
                          type="text"
                          className="contact__input"
                          value={formData.location}
                          onChange={(e) => handleChange('location', e.target.value)}
                          placeholder="शहर / जिला / राज्य"
                        />
                      </div>

                      <div className="contact__field">
                        <label htmlFor="contact-email" className="contact__label">Email *</label>
                        <input
                          id="contact-email"
                          type="email"
                          className="contact__input"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          required
                          placeholder="your@email.com"
                        />
                      </div>

                      <div className="contact__field">
                        <label htmlFor="contact-phone" className="contact__label">Phone</label>
                        <input
                          id="contact-phone"
                          type="tel"
                          className="contact__input"
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>

                    <div className="contact__field contact__field--full">
                      <label htmlFor="contact-message" className="contact__label">Message *</label>
                      <textarea
                        id="contact-message"
                        className="contact__textarea"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        required
                        placeholder="अपने प्रोजेक्ट के बारे में बताएं..."
                      />
                    </div>

                    <button type="submit" className="contact__submit hindi-text">
                      <Send size={16} />
                      प्रोजेक्ट पर चर्चा करें →
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
