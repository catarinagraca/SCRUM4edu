import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
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
  const showGuide = hash === "#interactive-guide";

  useEffect(() => {
    if (showGuide || !hash) {
      window.scrollTo(0, 0);
    } else {
      // ex.: clicar em "Benefits" a partir do guia -> volta à home e faz scroll até à secção
      document.querySelector(hash)?.scrollIntoView();
    }
  }, [hash, showGuide]);

  return (
    <>
      <Header />
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