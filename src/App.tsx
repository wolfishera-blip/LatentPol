import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

// Lazy-loaded pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const AreasOfWork = lazy(() => import('./pages/AreasOfWork'));
const Services = lazy(() => import('./pages/Services'));
const PoliticalResearch = lazy(() => import('./pages/PoliticalResearch'));
const GroundResearch = lazy(() => import('./pages/GroundResearch'));
const CampaignStrategy = lazy(() => import('./pages/CampaignStrategy'));
const PolicyResearch = lazy(() => import('./pages/PolicyResearch'));
const PublicCommunication = lazy(() => import('./pages/PublicCommunication'));
const Surveys = lazy(() => import('./pages/Surveys'));
const Research = lazy(() => import('./pages/Research'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Sukhpura = lazy(() => import('./pages/Sukhpura'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Contact = lazy(() => import('./pages/Contact'));
const Terms = lazy(() => import('./pages/Terms'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Disclaimer = lazy(() => import('./pages/Disclaimer'));

function PageLoader() {
  return (
    <div className="app-loader">
      <div className="app-loader__spinner" />
      <span className="app-loader__text">LATENTPOL</span>
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main id="main-content">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/areas-of-work" element={<AreasOfWork />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/political-research" element={<PoliticalResearch />} />
            <Route path="/services/ground-research" element={<GroundResearch />} />
            <Route path="/services/campaign-strategy" element={<CampaignStrategy />} />
            <Route path="/services/policy-research" element={<PolicyResearch />} />
            <Route path="/services/public-communication" element={<PublicCommunication />} />
            <Route path="/surveys" element={<Surveys />} />
            <Route path="/research" element={<Research />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/sukhpura-2026" element={<Sukhpura />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
