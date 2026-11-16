import { useEffect, useState } from 'react';
// Ajusta estes caminhos à estrutura do teu projeto
import IntroGuide from './IntroGuide';
import ScrumCeremonies from './ScrumCeremonies/ScrumCeremonies';
import InteractiveGuide from './InteractiveGuide';
import GradingEvaluation from './GradingEvaluation/GradingEvaluation';

const STEPS = ['intro', 'ceremonies', 'cycle', 'grading'];

export default function CourseFlow({ onExit }) {
  const [step, setStep] = useState(0);

  // Sempre que muda de página, volta ao topo
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [step]);

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));
  const back = () => (step === 0 ? onExit?.() : setStep((s) => s - 1));

  switch (STEPS[step]) {
    case 'intro':
      return <IntroGuide onNext={next} />;
    case 'ceremonies':
      return <ScrumCeremonies onNext={next} />;
    case 'cycle':
      return <InteractiveGuide onBack={back} onNext={next} />;
    case 'grading':
      return <GradingEvaluation onBack={back} />;
    default:
      return null;
  }
}