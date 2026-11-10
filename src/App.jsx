import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import ScrumCeremonies from "./components/ScrumCeremonies/ScrumCeremonies";
import InteractiveGuide from "./components/InteractiveGuide";
import IntroGuide from "./components/IntroGuide";
import Glossary from "./components/Glossary";
import GradingEvaluation from "./components/GradingEvaluation/GradingEvaluation";
import "./App.css";

// Navegação simples por hash (#interactive-guide), sem precisar de router
function useHash() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const onChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return hash;
}

// Muda de página alterando o hash
const go = (hash) => {
  window.location.hash = hash;
};

export default function App() {
  const hash = useHash();
  const showCeremonies = hash === "#ceremonies";
  const showGuide = hash === "#interactive-guide";
  const showIntro = hash === "#intro-guide";
  const showGlossary = hash === "#glossary";
  const showGrading = hash === "#grading";

  useEffect(() => {
    if (
      showCeremonies ||
      showGuide ||
      showIntro ||
      showGlossary ||
      showGrading ||
      !hash
    ) {
      window.scrollTo(0, 0);
    } else {
      document.querySelector(hash)?.scrollIntoView();
    }
  }, [hash, showCeremonies, showGuide, showIntro, showGlossary, showGrading]);

  return (
    <>
      <Header />
      {showIntro ? (
        <IntroGuide onNext={() => go("#ceremonies")} />
      ) : showCeremonies ? (
        <ScrumCeremonies onNext={() => go("#interactive-guide")} />
      ) : showGuide ? (
        <InteractiveGuide
          onBack={() => go("#ceremonies")}
          onNext={() => go("#grading")}
        />
      ) : showGrading ? (
        <GradingEvaluation onBack={() => go("#interactive-guide")} />
      ) : showGlossary ? (
        <Glossary />
      ) : (
        <main>
          <Hero />
          <Benefits />
        </main>
      )}
    </>
  );
}