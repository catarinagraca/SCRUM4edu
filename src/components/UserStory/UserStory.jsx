import { useState } from 'react';
import BackButton from '../BackButton';
import NextButton from '../NextButton';
import { loadUserStory, saveUserStory } from './UserStoryStorage';
import './UserStory.css';

// AC1 + AC2: três campos editáveis, cada um com placeholder de exemplo
const FIELDS = [
  {
    key: 'asA',
    label: 'As a',
    hint: 'who wants this? (a role, not a name)',
    placeholder: 'e.g. student in a team of four',
    minWords: 1,
  },
  {
    key: 'iWant',
    label: 'I want',
    hint: 'what do they want to do or have?',
    placeholder: 'e.g. to see every task of our project on a shared board',
    minWords: 3,
  },
  {
    key: 'soThat',
    label: 'So that',
    hint: 'why does it matter to them?',
    placeholder: 'e.g. I know who is doing what and nobody is left out',
    minWords: 3,
  },
];

const EMPTY_STORY = { asA: '', iWant: '', soThat: '' };

function wordCount(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function validateStory(story) {
  const errors = {};
  const warnings = [];

  FIELDS.forEach(({ key, label, minWords }) => {
    const value = story[key].trim();
    if (!value) {
      errors[key] = `"${label}" is empty.`;
    } else if (wordCount(value) < minWords) {
      errors[key] = `"${label}" is too short. Use at least ${minWords} words.`;
    }
  });

  // Dicas que não bloqueiam
  if (/^(i|me|myself)\b/i.test(story.asA.trim())) {
    warnings.push('"As a" should be a role (e.g. "student", "team member"), not "I".');
  }
  if (/\band\b/i.test(story.iWant)) {
    warnings.push('"I want" has "and". If it describes two goals, split it into two stories.');
  }
  if (/^(so that\s+)?(it works|it is done|we finish)\b/i.test(story.soThat.trim())) {
    warnings.push('"So that" should explain the benefit for the student, not just that the task is finished.');
  }

  return { errors, warnings, isValid: Object.keys(errors).length === 0 };
}

// Junta os campos numa frase, sem repetir "to"/"so that" se o professor já os escreveu
function toSentence(story) {
  const want = story.iWant.trim().replace(/^i want\s+/i, '');
  const why = story.soThat.trim().replace(/^so that\s+/i, '');
  const who = story.asA.trim().replace(/^as an?\s+/i, '');
  return `As a ${who}, I want ${want}, so that ${why}.`;
}

export default function UserStory({ onBack, onNext, nextLabel = 'Next: Acceptance criteria' }) {
  // Story já validada numa visita anterior (lida só uma vez)
  const [savedStory, setSavedStory] = useState(loadUserStory);
  const [story, setStory] = useState(() => savedStory ?? EMPTY_STORY);
  const [showErrors, setShowErrors] = useState(false);

  const result = validateStory(story);
  const isSaved =
    savedStory !== null && FIELDS.every(({ key }) => savedStory[key] === story[key]);

  const updateField = (key, value) => setStory((s) => ({ ...s, [key]: value }));

  const focusFirstError = () => {
    requestAnimationFrame(() => {
      document.querySelector('.us-page [aria-invalid="true"]')?.focus();
    });
  };

  // AC3: "Validate story" valida e guarda
  const validateAndSave = () => {
    setShowErrors(true);
    if (!result.isValid) {
      focusFirstError();
      return false;
    }
    saveUserStory(story);
    setSavedStory(story);
    return true;
  };

  const handleNext = () => {
    if (validateAndSave()) onNext?.();
  };

  return (
    <div className="us-page">
      <main className="us-container">
        {onBack && <BackButton onClick={onBack} />}

        <header className="us-header">
          <span className="us-step-pill">COURSE STEP · USER STORY</span>
          <h1 className="us-title">Create a User Story</h1>
          <p className="us-lead">
            A User Story describes a goal from the <strong>student&apos;s point of view</strong>. It
            says <strong>who</strong> needs something, <strong>what</strong> they need and{' '}
            <strong>why</strong> it matters. Each item on your Learning Goals List can be written
            this way.
          </p>
        </header>

        <aside className="us-example">
          <div className="us-example-title">Example</div>
          <p>
            <strong>As a</strong> student presenting to the class, <strong>I want</strong> to
            rehearse my 3-minute demo with a teammate, <strong>so that</strong> I feel confident
            and finish on time at the Sprint Review.
          </p>
        </aside>

        <section className="us-form us-card-shadow" aria-labelledby="us-form-title">
          <h2 id="us-form-title" className="us-sub-heading">
            Your story
          </h2>

          {FIELDS.map(({ key, label, hint, placeholder }) => {
            const inputId = `us-${key}`;
            const error = showErrors ? result.errors[key] : null;
            return (
              <div key={key} className="us-field">
                <label htmlFor={inputId} className={`us-label us-label-${key}`}>
                  {label}
                  <span className="us-hint">{hint}</span>
                </label>
                <textarea
                  id={inputId}
                  className="us-input"
                  rows={2}
                  value={story[key]}
                  placeholder={placeholder}
                  onChange={(e) => updateField(key, e.target.value)}
                  aria-invalid={!!error}
                  aria-describedby={error ? `${inputId}-error` : undefined}
                />
                {error && (
                  <p id={`${inputId}-error`} className="us-error">
                    {error}
                  </p>
                )}
              </div>
            );
          })}

          {showErrors && result.warnings.length > 0 && (
            <ul className="us-warnings">
              {result.warnings.map((w) => (
                <li key={w}>⚠ {w}</li>
              ))}
            </ul>
          )}

          <div className="us-actions">
            <button type="button" className="us-btn us-btn-validate" onClick={validateAndSave}>
              Validate story
            </button>
            {isSaved && (
              <span className="us-saved" role="status">
                ✓ Story saved
              </span>
            )}
          </div>

          {isSaved && (
            <p className="us-preview">
              <span className="us-preview-label">Your story</span>
              {toSentence(story)}
            </p>
          )}

          {showErrors && !result.isValid && (
            <div className="us-summary" role="status" aria-live="polite">
              The story is not saved yet. Fix the highlighted fields.
            </div>
          )}
        </section>

        {onNext && <NextButton label={nextLabel} onClick={handleNext} />}
      </main>

      <footer className="us-footer">
        <div className="us-container us-footer-inner">
          Scrum4edu · Scrum made simple for schools
        </div>
      </footer>
    </div>
  );
}