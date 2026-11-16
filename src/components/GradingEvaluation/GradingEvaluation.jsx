import GradingHero from './GradingHero';
import KanbanTrackingSection from './KanbanTrackingSection';
import RetroPeerEvalSection from './RetroPeerEvalSection';
import './GradingEvaluation.css';
import BackButton from '../BackButton';
import NextButton from '../NextButton';

export default function GradingEvaluation({ onBack, onNext, nextLabel = 'Finish course' }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="grading-evaluation-page">
      <main className="ge-container">
        {onBack && <BackButton onClick={onBack} />}
        <GradingHero onNavigate={scrollToSection} />
        <KanbanTrackingSection />
        <RetroPeerEvalSection />

        {onNext && <NextButton label={nextLabel} onClick={onNext} />}
      </main>

      <footer className="ge-footer">
        <div className="ge-container ge-footer-inner">
          Scrum4edu · Scrum made simple for schools
        </div>
      </footer>
    </div>
  );
}