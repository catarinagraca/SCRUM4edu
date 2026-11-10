import "./css/Header.css";

export default function Header() {
  const hash = typeof window !== "undefined" ? window.location.hash : "";

  return (
    <header className="site-header">
      <div className="nav">
        <a className="logo" href="#">
          Scrum<span>4</span>edu
        </a>
        <nav aria-label="Main">
          <a
            href="#glossary"
            className={hash === "#glossary" ? "is-active" : ""}
          >
            Glossary
          </a>
          <a
            href="#intro-guide"
            className={`nav-cta ${hash === "#interactive-guide" ? "is-active" : ""}`}
          >
            Start Course →
          </a>
        </nav>
      </div>
    </header>
  );
}