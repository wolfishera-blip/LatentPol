import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import './Header.css';

const navItems = [
  { path: '/', label: 'मुख्य पृष्ठ' },
  { path: '/about', label: 'हमारे बारे में' },
  { path: '/areas-of-work', label: 'कार्य क्षेत्र' },
  { path: '/services', label: 'हमारी सेवाएँ' },
  { path: '/surveys', label: 'जन सर्वेक्षण' },
  { path: '/research', label: 'अनुसंधान एवं रिपोर्ट' },
  { path: '/contact', label: 'संपर्क' },
];

export default function Header() {
  const [isCompact, setIsCompact] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsCompact(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <>
      <a href="#main-content" className="lp-skip-link">
        मुख्य सामग्री पर जाएँ
      </a>
      <header
        className={`header ${isCompact ? 'header--compact' : ''}`}
        role="banner"
      >
        <div className="header__inner lp-container">
          <Link to="/" className="header__logo-link" aria-label="LATENTPOL Home">
            <Logo variant={isCompact ? 'compact' : 'default'} />
          </Link>

          <nav className="header__nav" role="navigation" aria-label="Main Navigation">
            <ul className="header__nav-list">
              {navItems.map((item) => (
                <li key={item.path} className="header__nav-item">
                  <Link
                    to={item.path}
                    className={`header__nav-link hindi-text ${
                      location.pathname === item.path ? 'header__nav-link--active' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__actions">
            <Link to="/contact" className="header__cta hindi-text">
              हमसे जुड़ें <span aria-hidden="true">→</span>
            </Link>
          </div>

          <button
            className="header__hamburger"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${isMobileOpen ? 'mobile-menu--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        <div className="mobile-menu__overlay" onClick={() => setIsMobileOpen(false)} />
        <div className="mobile-menu__panel">
          <nav className="mobile-menu__nav">
            <ul className="mobile-menu__list">
              {navItems.map((item, idx) => (
                <li
                  key={item.path}
                  className="mobile-menu__item"
                  style={{ animationDelay: `${idx * 50 + 100}ms` }}
                >
                  <Link
                    to={item.path}
                    className={`mobile-menu__link hindi-text ${
                      location.pathname === item.path ? 'mobile-menu__link--active' : ''
                    }`}
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mobile-menu__cta-wrap">
              <Link
                to="/contact"
                className="mobile-menu__cta hindi-text"
                onClick={() => setIsMobileOpen(false)}
              >
                हमसे जुड़ें →
              </Link>
            </div>
          </nav>
          <div className="mobile-menu__footer">
            <span className="mobile-menu__brand">LATENTPOL</span>
            <span className="mobile-menu__sub">Research • Strategy • Public Affairs</span>
          </div>
        </div>
      </div>
    </>
  );
}
