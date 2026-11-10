import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import backlog from "../assets/phase-backlog.jpg";
import planning from "../assets/phase-planning.jpg";
import sprint from "../assets/phase-sprint.jpg";
import daily from "../assets/phase-daily.jpg";
import review from "../assets/phase-review.jpg";
import retro from "../assets/phase-retro.jpg";
import "./css/InteractiveGuide.css";
import NextButton from "./NextButton";

const noteColors = ["var(--sticky)", "var(--sticky-2)", "var(--sticky-3)"];

const phases = [
  { title: "Learning Goals List", scrum: "Product Backlog", img: backlog, summary: "An ordered list of the learning goals and topics for the unit. The teacher keeps it up to date as the class learns.", tips: ["Turn curriculum goals into student-friendly items", "Put what matters most at the top", "Keep it visible and let it change"] },
  { title: "Planning Lesson", scrum: "Sprint Planning", img: planning, summary: "Each team sets a Sprint Goal, picks the backlog items that help reach it and plans how to do the work.", tips: ["Start with the goal: why does this sprint matter?", "Check the shared Definition of Done", "Split items into small tasks"] },
  { title: "Teamwork Time", scrum: "Sprint", img: sprint, summary: "A fixed period (1–2 weeks) where teams work towards their Sprint Goal while the teacher acts as facilitator.", tips: ["Use a To Do / Doing / Done board", "Let teams decide who does what", "Remove obstacles, don't solve for them"] },
  { title: "Daily Check-in", scrum: "Daily Scrum", img: daily, summary: "A short check-in held every day of the sprint: are we on track for our goal, and what do we do today?", tips: ["Keep it under 5 minutes", "Focus on the goal, not a status report", "Note blockers to address later"] },
  { title: "Show & Feedback", scrum: "Sprint Review", img: review, summary: "Teams show what they have finished, get feedback and decide together what comes next.", tips: ["Show real work, not just slides", "Invite peer and teacher feedback", "Update the backlog with new ideas"] },
  { title: "Group Reflection", scrum: "Sprint Retrospective", img: retro, summary: "The team reflects on how they worked together and chooses one thing to improve in the next sprint.", tips: ["Ask: what went well / what to change", "Pick one concrete action", "Celebrate progress"] },
];
                                
const R = 36; // raio do círculo (em % / unidades do viewBox)

export default function InteractiveGuide({ onBack, onNext }) {
  const [active, setActive] = useState(0);
  const p = phases[active];

  return (
    <main className="guide">
      <div className="guide-inner">
        <a
          className="guide-back"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onBack?.();
          }}
        >
          <ArrowLeft size={16} aria-hidden="true" /> Back
        </a>
        <h1>The 6-phase learning cycle.</h1>
        <p className="guide-lead">Pick a phase to see how it works in your classroom.</p>

        <div className="guide-grid">
          {/* AC1: área visual com 6 fases clicáveis */}
          <nav aria-label="Learning cycle phases" className="cycle">
            <svg viewBox="0 0 100 100" className="cycle-arrows" aria-hidden="true">
              <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto">
                  <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
                </marker>
              </defs>
              {phases.map((_, i) => {
                const a1 = (i / 6) * 2 * Math.PI - Math.PI / 2 + 0.38;
                const a2 = ((i + 1) / 6) * 2 * Math.PI - Math.PI / 2 - 0.38;
                return (
                  <path
                    key={i}
                    d={`M ${50 + R * Math.cos(a1)} ${50 + R * Math.sin(a1)} A ${R} ${R} 0 0 1 ${50 + R * Math.cos(a2)} ${50 + R * Math.sin(a2)}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.8"
                    strokeDasharray="2 1.5"
                    markerEnd="url(#arrow)"
                  />
                );
              })}
            </svg>

            <div className="cycle-center">
              <span>1–2 weeks</span>
              <strong>Learning<br />cycle</strong>
            </div>

            {phases.map((ph, i) => {
              const a = (i / 6) * 2 * Math.PI - Math.PI / 2;
              const on = i === active;
              return (
                <button
                  key={ph.title}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={on}
                  className={`phase ${on ? "is-active" : ""}`}
                  style={{ left: `${50 + R * Math.cos(a)}%`, top: `${50 + R * Math.sin(a)}%` }}
                >
                  <img src={ph.img} alt="" loading="lazy" width={992} height={672} />
                  <span className="phase-label" style={{ background: noteColors[i % 3] }}>
                    <span className="phase-num">{i + 1}</span>
                    <span className="phase-text">
                      {ph.title}
                      <small className="phase-scrum">{ph.scrum}</small>
                    </span>
                  </span>
                </button>
              );
            })}
          </nav>

          {/* AC2: painel lateral atualiza com o conteúdo da fase */}
          <aside key={active} className="panel" aria-live="polite">
            <div className="panel-top">
              <span>Step {active + 1} of 6</span>
            </div>
            <div className="panel-progress">
              {phases.map((_, i) => (
                <span key={i} className={i <= active ? "done" : ""} />
              ))}
            </div>
            <img src={p.img} alt={`Illustration of ${p.title}`} width={992} height={672} className="panel-img" />
            <h2>{p.title}</h2>
            <span className="panel-scrum">Scrum term: {p.scrum}</span>
            <p className="panel-summary">{p.summary}</p>
            <ul className="panel-tips">
              {p.tips.map((t) => (
                <li key={t}><span aria-hidden="true">✓</span>{t}</li>
              ))}
            </ul>
            <div className="panel-actions">
              <button type="button" className="btn ghost" onClick={() => setActive((active + 5) % 6)}>
                ← Previous
              </button>
              <button type="button" className="btn primary" onClick={() => setActive((active + 1) % 6)}>
                {active === 5 ? "New cycle ↻" : "Next →"}
              </button>
            </div>
          </aside>
        </div>

        {onNext && <NextButton label="Next: Fair grading" onClick={onNext} />}
      </div>
    </main>
  );
}