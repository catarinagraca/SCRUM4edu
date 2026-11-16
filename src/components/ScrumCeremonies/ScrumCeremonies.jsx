import React from 'react';
import CeremoniesHero from './CeremoniesHero';
import CeremoniesTabs from './CeremoniesTabs';
import './ScrumCeremonies.css';
import NextButton from '../NextButton';
import BackButton from '../BackButton';

export default function ScrumCeremonies({ onBack, onNext, nextLabel = 'Next: The learning cycle' }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="scrum-ceremonies-page">
      <main className="sc-container">
        {onBack && <BackButton onClick={onBack} />}
        <CeremoniesHero onNavigate={scrollToSection} />
        <CeremoniesTabs />

        {onNext && <NextButton label={nextLabel} onClick={onNext} />}
      </main>

      {/* Footer */}
      <footer className="sc-footer">
        <div className="sc-container sc-footer-inner">
          Scrum4edu · Scrum made simple for schools
        </div>
      </footer>
    </div>
  );
}