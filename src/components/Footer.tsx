import { Link } from 'react-router-dom';
import { MessageCircle, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './SocialIcons';
import Logo from './Logo';
import './Footer.css';

const quickLinks = [
  { path: '/about', label: 'About' },
  { path: '/areas-of-work', label: 'Areas of Work' },
  { path: '/services', label: 'Services' },
  { path: '/surveys', label: 'Surveys' },
  { path: '/research', label: 'Research' },
  { path: '/case-studies', label: 'Case Studies' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/contact', label: 'Contact' },
];

const legalLinks = [
  { path: '/terms', label: 'Terms & Conditions' },
  { path: '/privacy', label: 'Privacy Policy' },
  { path: '/disclaimer', label: 'Disclaimer' },
];

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__top">
        <div className="lp-container">
          <div className="footer__grid">
            {/* Brand Column */}
            <div className="footer__brand-col">
              <Logo variant="light" showTagline />
              <p className="footer__brand-desc">
                Research • Strategy • Public Affairs
              </p>
              <div className="footer__social">
                <a
                  href="https://www.instagram.com/latentpol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label="Instagram"
                >
                  <InstagramIcon size={18} />
                </a>
                <a
                  href="https://www.facebook.com/share/19dMmMSimJ/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label="Facebook"
                >
                  <FacebookIcon size={18} />
                </a>
                <a
                  href="https://wa.me/919670617806"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={18} />
                </a>
                <a
                  href="mailto:latentpol1@gmail.com"
                  className="footer__social-link"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer__links-col">
              <h3 className="footer__heading">Quick Links</h3>
              <ul className="footer__link-list">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="footer__link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="footer__links-col">
              <h3 className="footer__heading">Legal</h3>
              <ul className="footer__link-list">
                {legalLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="footer__link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer__contact-col">
              <h3 className="footer__heading">Contact</h3>
              <div className="footer__contact-items">
                <a href="mailto:latentpol1@gmail.com" className="footer__contact-link">
                  <Mail size={14} />
                  <span>latentpol1@gmail.com</span>
                </a>
                <a href="tel:+917068785614" className="footer__contact-link">
                  <ArrowUpRight size={14} />
                  <span>+91 7068785614</span>
                </a>
                <div className="footer__contact-link">
                  <MapPin size={14} />
                  <span>Uttar Pradesh, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer__bottom">
        <div className="lp-container">
          <div className="footer__bottom-inner">
            <p className="footer__philosophy hindi-text">
              "People • Politics • Possibilities"
            </p>
            <p className="footer__copyright">
              © 2026 LATENTPOL. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
