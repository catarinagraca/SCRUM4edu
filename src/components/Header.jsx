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
            href="#intro-guide"
            className={hash === "#intro-guide" ? "is-active" : ""}
          >
            Intro Guide
          </a>
          <a
            href="#ceremonies"
            className={hash === "#ceremonies" ? "is-active" : ""}
          >
            Ceremonies
          </a>
          <a
            href="#grading"
            className={hash === "#grading" ? "is-active" : ""}
          >
            Grading
          </a>
          <a
            href="#glossary"
            className={hash === "#glossary" ? "is-active" : ""}
          >
            Glossary
          </a>
          <a
            href="#interactive-guide"
            className={`nav-cta ${hash === "#interactive-guide" ? "is-active" : ""}`}
          >
            Start Course →
          </a>
        </nav>
      </div>
    </header>
  );
}
