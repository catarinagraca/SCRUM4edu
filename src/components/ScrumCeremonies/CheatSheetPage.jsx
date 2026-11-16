import CeremoniesCheatSheet from './CeremoniesCheatSheet';
import BackButton from '../BackButton';
import './ScrumCeremonies.css';

// Página própria para a cheat-sheet (acessível pela navbar, em #cheat-sheet).
// Reutiliza o wrapper e o container das Ceremonies para manter cores e fontes.
export default function CheatSheetPage({ onBack }) {
  return (
    <div className="scrum-ceremonies-page">
      <main className="sc-container">
        {onBack && <BackButton onClick={onBack} />}
        <CeremoniesCheatSheet />
      </main>

      <footer className="sc-footer">
        <div className="sc-container sc-footer-inner">
          Scrum4edu · Scrum made simple for schools
        </div>
      </footer>
    </div>
  );
}