import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import CourseProgress from "./components/CourseProgress/CourseProgress";
import ScrumCeremonies from "./components/ScrumCeremonies/ScrumCeremonies";
import CheatSheetPage from "./components/ScrumCeremonies/CheatSheetPage";
import InteractiveGuide from "./components/InteractiveGuide";
import IntroGuide from "./components/IntroGuide";
import Glossary from "./components/Glossary";
import AcceptanceCriteria from "./components/AcceptanceCriteria/AcceptanceCriteria";
import GradingEvaluation from "./components/GradingEvaluation/GradingEvaluation";
import { COURSE_STEPS } from "./courseSteps";
import "./App.css";

// Componente de cada etapa do curso (a ordem vem de COURSE_STEPS)
const COURSE_PAGES = {
  "#intro-guide": IntroGuide,
  "#ceremonies": ScrumCeremonies,
  "#interactive-guide": InteractiveGuide,
  "#acceptance-criteria": AcceptanceCriteria,
  "#grading": GradingEvaluation,
};

const STORAGE_KEY = "scrum4edu-progress";

// Lê/guarda as etapas concluídas (lista de hashes) no localStorage
function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function saveProgress(list) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch {
    // Sem localStorage (ex.: modo privado): o progresso fica só em memória
  }
}

// Navegação simples por hash (#interactive-guide), sem precisar de router.
// Guarda também o hash anterior, para o botão Back do Glossary e da Cheat Sheet.
function useHash() {
  const [hash, setHash] = useState(window.location.hash);
  const currentHash = useRef(window.location.hash);
  const prevHash = useRef("");

  useEffect(() => {
    const onChange = () => {
      prevHash.current = currentHash.current;
      currentHash.current = window.location.hash;
      setHash(window.location.hash);
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return [hash, prevHash];
}

// Muda de página alterando o hash ("" volta à página inicial)
const go = (hash) => {
  window.location.hash = hash;
};

export default function App() {
  const [hash, prevHash] = useHash();
  const [completed, setCompleted] = useState(loadProgress);

  const showGlossary = hash === "#glossary";
  const showCheatSheet = hash === "#cheat-sheet";

  // Posição da página atual no curso (-1 se não for uma etapa do curso)
  const stepIndex = COURSE_STEPS.findIndex((s) => s.hash === hash);
  const currentStep = COURSE_STEPS[stepIndex];
  const nextStep = COURSE_STEPS[stepIndex + 1];
  const prevStep = COURSE_STEPS[stepIndex - 1];
  const CoursePage = currentStep ? COURSE_PAGES[currentStep.hash] : null;

  useEffect(() => {
    saveProgress(completed);
  }, [completed]);

  useEffect(() => {
    if (stepIndex !== -1 || showGlossary || showCheatSheet || !hash) {
      window.scrollTo(0, 0);
    } else {
      document.querySelector(hash)?.scrollIntoView();
    }
  }, [hash, stepIndex, showGlossary, showCheatSheet]);

  // Marca a etapa atual como concluída e avança (na última, só marca)
  const completeAndNext = () => {
    const done = currentStep.hash;
    setCompleted((list) => (list.includes(done) ? list : [...list, done]));
    if (nextStep) go(nextStep.hash);
  };

  const goPrev = () => go(prevStep ? prevStep.hash : "");

  const resetProgress = () => {
    setCompleted([]);
    go(COURSE_STEPS[0].hash);
    window.scrollTo(0, 0);
  };

  // Volta à página anterior; se não houver (ou for a mesma), vai para a inicial
  const goBackFrom = (current) => {
    const prev = prevHash.current;
    go(prev && prev !== current ? prev : "");
  };

  return (
    <>
      <Header />
      {CoursePage ? (
        <>
          <CourseProgress
            steps={COURSE_STEPS}
            completed={completed}
            currentHash={hash}
            onReset={resetProgress}
          />
          <CoursePage
            key={currentStep.hash}
            onBack={goPrev}
            onNext={completeAndNext}
            nextLabel={nextStep ? `Next: ${nextStep.label}` : "Finish course"}
          />
        </>
      ) : showGlossary ? (
        <Glossary onBack={() => goBackFrom("#glossary")} />
      ) : showCheatSheet ? (
        <CheatSheetPage onBack={() => goBackFrom("#cheat-sheet")} />
      ) : (
        <main>
          <Hero />
          <Benefits />
        </main>
      )}
    </>
  );
}