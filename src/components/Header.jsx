import { COURSE_STEPS } from "../courseSteps";
import "./css/Header.css";

export default function Header() {
  const hash = typeof window !== "undefined" ? window.location.hash : "";
  const inCourse = COURSE_STEPS.some((s) => s.hash === hash);

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
            href="#cheat-sheet"
            className={hash === "#cheat-sheet" ? "is-active" : ""}
          >
            Cheat Sheet
          </a>
          <a
            href={COURSE_STEPS[0].hash}
            className={`nav-cta ${inCourse ? "is-active" : ""}`}
          >
            Start Course →
          </a>
        </nav>
      </div>
    </header>
  );
}