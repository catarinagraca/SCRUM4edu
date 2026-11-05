import React from 'react';
import CeremoniesHero from './CeremoniesHero';
import CeremoniesTabs from './CeremoniesTabs';
import CeremoniesCheatSheet from './CeremoniesCheatSheet';
import './ScrumCeremonies.css';

export default function ScrumCeremonies() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="scrum-ceremonies-page">
      {/* Top Navbar */}
      <header className="sc-navbar">
        <div className="sc-container sc-navbar-inner">
          <a href="#top" className="sc-logo">
            Scrum<span>4</span>edu
          </a>
          <nav className="sc-nav-links">
            <a
              href="#ceremonies"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('ceremonies');
              }}
            >
              Ceremonies
            </a>
            <a
              href="#cheat-sheet"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('cheat-sheet');
              }}
            >
              Cheat-sheet
            </a>
          </nav>
        </div>
      </header>

      <main className="sc-container">
        <CeremoniesHero onNavigate={scrollToSection} />
        <CeremoniesTabs />
        <CeremoniesCheatSheet />
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
