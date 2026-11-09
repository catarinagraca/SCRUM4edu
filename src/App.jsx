import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import ScrumCeremonies from "./components/ScrumCeremonies/ScrumCeremonies";
import InteractiveGuide from "./components/InteractiveGuide";
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

export default function App() {
  const hash = useHash();
  const showCeremonies = hash === "#ceremonies";

  useEffect(() => {
    if (showCeremonies || !hash) {
      window.scrollTo(0, 0);
    } else {
      document.querySelector(hash)?.scrollIntoView();
    }
  }, [hash, showCeremonies]);
  const showGuide = hash === "#interactive-guide";

  useEffect(() => {
    if (showGuide || !hash) {
      window.scrollTo(0, 0);
    } else {
      document.querySelector(hash)?.scrollIntoView();
    }
  }, [hash, showGuide]);

  return (
    <>
      <Header />
      {showCeremonies ? (
        <ScrumCeremonies />
       ) : (
      {showGuide ? (
        <InteractiveGuide />
      ) : (
        <main>
          <Hero />
          <Benefits />
        </main>
      )}
    </>
  );
}