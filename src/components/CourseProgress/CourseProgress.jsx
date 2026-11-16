import { useState } from "react";
import { RotateCcw } from "lucide-react";
import "./CourseProgress.css";

// Contador de progresso do curso (concluídas vs total) com botão de reset.
// Não tem números fixos: tudo vem da lista "steps" (COURSE_STEPS).
export default function CourseProgress({ steps, completed, currentHash, onReset }) {
  const [confirming, setConfirming] = useState(false);

  const total = steps.length;
  // Só conta etapas que ainda existem na lista
  const done = steps.filter((s) => completed.includes(s.hash)).length;
  const currentIndex = steps.findIndex((s) => s.hash === currentHash);
  const finished = total > 0 && done === total;

  const confirmReset = () => {
    setConfirming(false);
    onReset();
  };

  return (
    <div className="cp-band">
      <div className="cp-inner">
        <div className="cp-info">
          <span className="cp-count">
            <strong>{done}</strong> of {total} completed
          </span>
          {finished ? (
            <span className="cp-badge">Course complete 🎉</span>
          ) : (
            currentIndex !== -1 && (
              <span className="cp-current">
                Step {currentIndex + 1}: {steps[currentIndex].label}
              </span>
            )
          )}
        </div>

        <div
          className="cp-bar"
          role="progressbar"
          aria-label="Course progress"
          aria-valuemin={0}
          aria-valuemax={total}
          aria-valuenow={done}
          aria-valuetext={`${done} of ${total} challenges completed`}
        >
          {steps.map((step, i) => {
            const isDone = completed.includes(step.hash);
            return (
              <span
                key={step.hash}
                className={`cp-seg ${isDone ? "is-done" : ""} ${
                  i === currentIndex ? "is-current" : ""
                }`}
                title={`${step.label}${isDone ? " (completed)" : ""}`}
              />
            );
          })}
        </div>

        <div className="cp-reset">
          {confirming ? (
            <div className="cp-confirm" role="group" aria-label="Confirm reset">
              <span>Restart the path?</span>
              <button type="button" className="cp-btn cp-btn-danger" onClick={confirmReset}>
                Yes
              </button>
              <button
                type="button"
                className="cp-btn"
                onClick={() => setConfirming(false)}
                autoFocus
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="cp-btn"
              onClick={() => setConfirming(true)}
              disabled={done === 0}
              title="Restart the learning path"
            >
              <RotateCcw size={14} aria-hidden="true" /> Reset
            </button>
          )}
        </div>
      </div>
    </div>
  );
}