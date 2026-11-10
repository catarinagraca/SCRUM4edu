import GradingHero from './GradingHero';
import KanbanTrackingSection from './KanbanTrackingSection';
import RetroPeerEvalSection from './RetroPeerEvalSection';
import './GradingEvaluation.css';
import NextButton from '../NextButton';

export default function GradingEvaluation({ onBack }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="grading-evaluation-page">
      <main className="ge-container">
        {onBack && (
          <NextButton
            label="Back to the learning cycle"
            onClick={onBack}
            variant="back"
            align="start"
          />
        )}
        <GradingHero onNavigate={scrollToSection} />
        <KanbanTrackingSection />
        <RetroPeerEvalSection />
      </main>

      <footer className="ge-footer">
        <div className="ge-container ge-footer-inner">
          Scrum4edu · Scrum made simple for schools
        </div>
      </footer>
    </div>
  );
}