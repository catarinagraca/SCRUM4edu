import { useRef, useState } from 'react';
import BackButton from '../BackButton';
import NextButton from '../NextButton';
import { loadUserStory } from '../UserStory/userStoryStorage';
import './AcceptanceCriteria.css';

// Os três campos de cada critério (AC1)
const FIELDS = [
  {
    key: 'given',
    label: 'Given',
    hint: 'the starting situation',
    placeholder: 'a student has finished the first draft of the poster',
  },
  {
    key: 'when',
    label: 'When',
    hint: 'the action or event',
    placeholder: 'they move the card to Done',
  },
  {
    key: 'then',
    label: 'Then',
    hint: 'the result anyone can check',
    placeholder: 'the draft link is on the card and the poster has a title, 3 sources and 1 image',
  },
];

const MIN_WORDS = 3;

// Palavras que tornam o resultado subjetivo (não dá para verificar)
const VAGUE_WORDS = [
  'good', 'nice', 'well', 'properly', 'correctly', 'better', 'enough',
  'quality', 'ok', 'okay', 'appropriate', 'some', 'great',
];

const emptyCriterion = (id) => ({ id, given: '', when: '', then: '' });

function wordCount(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function validateCriterion(criterion) {
  const errors = {};

  FIELDS.forEach(({ key, label }) => {
    const value = criterion[key].trim();
    if (!value) {
      errors[key] = `"${label}" is empty.`;
    } else if (wordCount(value) < MIN_WORDS) {
      errors[key] = `"${label}" is too short. Use at least ${MIN_WORDS} words.`;
    }
  });

  const vague = VAGUE_WORDS.filter((word) =>
    new RegExp(`\\b${word}\\b`, 'i').test(criterion.then),
  );
  const warning = vague.length
    ? `"Then" uses vague words (${vague.join(', ')}). Describe something a student can check: a number, a file or a visible result.`
    : null;

  return { errors, warning, isValid: Object.keys(errors).length === 0 };
}

export default function AcceptanceCriteria({ onBack, onNext }) {
  // User story guardada na página anterior (se existir)
  const [userStory] = useState(loadUserStory);
  // Pré-preenche a tarefa com o "I want" da story (sem o "to" inicial)
  const [task, setTask] = useState(() =>
    userStory ? userStory.iWant.trim().replace(/^(i want\s+)?to\s+/i, '') : '',
  );
  const [criteria, setCriteria] = useState([emptyCriterion(1)]);
  const [showErrors, setShowErrors] = useState(false);
  const [lastAddedId, setLastAddedId] = useState(null);
  const nextId = useRef(2);

  const results = criteria.map(validateCriterion);
  const taskError = task.trim() ? null : 'Write the student task first.';
  const validCount = results.filter((r) => r.isValid).length;
  const allValid = !taskError && validCount === criteria.length;

  const updateField = (id, key, value) => {
    setCriteria((list) => list.map((c) => (c.id === id ? { ...c, [key]: value } : c)));
  };

  // AC2: adicionar vários critérios
  const addCriterion = () => {
    const id = nextId.current++;
    setCriteria((list) => [...list, emptyCriterion(id)]);
    setLastAddedId(id);
  };

  const removeCriterion = (id) => {
    setCriteria((list) => (list.length > 1 ? list.filter((c) => c.id !== id) : list));
  };

  const focusFirstError = () => {
    // Espera pelo render para que os campos já tenham aria-invalid
    requestAnimationFrame(() => {
      document.querySelector('.ac-page [aria-invalid="true"]')?.focus();
    });
  };

  const handleValidate = () => {
    setShowErrors(true);
    if (!allValid) focusFirstError();
  };

  // AC3: só avança quando todos os critérios são válidos
  const handleNext = () => {
    setShowErrors(true);
    if (allValid) {
      onNext?.();
    } else {
      focusFirstError();
    }
  };

  return (
    <div className="ac-page">
      <main className="ac-container">
        {onBack && <BackButton onClick={onBack} />}

        <header className="ac-header">
          <span className="ac-step-pill">COURSE STEP · ACCEPTANCE CRITERIA</span>
          <h1 className="ac-title">Write clear Acceptance Criteria</h1>
          <p className="ac-lead">
            Acceptance Criteria are the rules that say when a student task is really{' '}
            <strong>done</strong>. Write each one as <strong>Given</strong> (the situation),{' '}
            <strong>When</strong> (the action) and <strong>Then</strong> (a result anyone can
            check). Clear rules mean fewer arguments at the Sprint Review.
          </p>
        </header>

        {userStory && (
          <aside className="ac-story">
            <div className="ac-example-title">Your user story</div>
            <p>
              <strong>As a</strong> {userStory.asA.trim()}, <strong>I want</strong>{' '}
              {userStory.iWant.trim()}, <strong>so that</strong> {userStory.soThat.trim()}.
            </p>
            <p className="ac-story-hint">
              Write the criteria that prove this story is done.
            </p>
          </aside>
        )}

        <aside className="ac-example">
          <div className="ac-example-title">Example</div>
          <p>
            <strong>Given</strong> a team has finished the survey charts,{' '}
            <strong>when</strong> they move the card to Done,{' '}
            <strong>then</strong> the card links to 3 charts with titles and labelled axes.
          </p>
        </aside>

        <section className="ac-builder ac-card-shadow" aria-labelledby="ac-builder-title">
          <h2 id="ac-builder-title" className="ac-sub-heading">
            Your criteria
          </h2>

          <label className="ac-task-label" htmlFor="ac-task">
            Student task
            <span className="ac-hint">The Kanban card these rules belong to</span>
          </label>
          <input
            id="ac-task"
            className="ac-input"
            type="text"
            value={task}
            placeholder="e.g. Design the prototype poster"
            onChange={(e) => setTask(e.target.value)}
            aria-invalid={showErrors && !!taskError}
            aria-describedby={showErrors && taskError ? 'ac-task-error' : undefined}
          />
          {showErrors && taskError && (
            <p id="ac-task-error" className="ac-error">
              {taskError}
            </p>
          )}

          <ol className="ac-list">
            {criteria.map((criterion, index) => {
              const result = results[index];
              return (
                <li
                  key={criterion.id}
                  className={`ac-criterion ${
                    showErrors ? (result.isValid ? 'is-valid' : 'is-invalid') : ''
                  }`}
                >
                  <div className="ac-criterion-top">
                    <span className="ac-criterion-num">Criterion {index + 1}</span>
                    {showErrors && (
                      <span className={`ac-status ${result.isValid ? 'ok' : 'bad'}`}>
                        {result.isValid ? '✓ Clear' : '✗ Needs work'}
                      </span>
                    )}
                    <button
                      type="button"
                      className="ac-remove"
                      onClick={() => removeCriterion(criterion.id)}
                      disabled={criteria.length === 1}
                      aria-label={`Remove criterion ${index + 1}`}
                    >
                      Remove
                    </button>
                  </div>

                  {FIELDS.map(({ key, label, hint, placeholder }) => {
                    const inputId = `ac-${criterion.id}-${key}`;
                    const error = showErrors ? result.errors[key] : null;
                    return (
                      <div key={key} className="ac-field">
                        <label htmlFor={inputId} className={`ac-field-label ac-label-${key}`}>
                          {label}
                          <span className="ac-hint">{hint}</span>
                        </label>
                        <textarea
                          id={inputId}
                          className="ac-input ac-textarea"
                          rows={2}
                          value={criterion[key]}
                          placeholder={placeholder}
                          autoFocus={key === 'given' && criterion.id === lastAddedId}
                          onChange={(e) => updateField(criterion.id, key, e.target.value)}
                          aria-invalid={!!error}
                          aria-describedby={error ? `${inputId}-error` : undefined}
                        />
                        {error && (
                          <p id={`${inputId}-error`} className="ac-error">
                            {error}
                          </p>
                        )}
                      </div>
                    );
                  })}

                  {showErrors && result.warning && (
                    <p className="ac-warning">⚠ {result.warning}</p>
                  )}

                  {showErrors && result.isValid && (
                    <p className="ac-preview">
                      <strong>Given</strong> {criterion.given.trim()},{' '}
                      <strong>when</strong> {criterion.when.trim()},{' '}
                      <strong>then</strong> {criterion.then.trim()}.
                    </p>
                  )}
                </li>
              );
            })}
          </ol>

          <div className="ac-actions">
            <button type="button" className="ac-btn ac-btn-add" onClick={addCriterion}>
              + Add criterion
            </button>
            <button type="button" className="ac-btn ac-btn-validate" onClick={handleValidate}>
              Validate criteria
            </button>
          </div>

          {showErrors && (
            <div
              className={`ac-summary ${allValid ? 'ok' : 'bad'}`}
              role="status"
              aria-live="polite"
            >
              {allValid
                ? `All ${criteria.length} ${criteria.length === 1 ? 'criterion is' : 'criteria are'} clear and checkable. You can move on.`
                : `${validCount} of ${criteria.length} ${criteria.length === 1 ? 'criterion is' : 'criteria are'} ready${taskError ? ', and the task name is missing' : ''}. Fix the highlighted fields.`}
            </div>
          )}
        </section>

        {onNext && <NextButton label="Next phase" onClick={handleNext} />}
      </main>

      <footer className="ac-footer">
        <div className="ac-container ac-footer-inner">
          Scrum4edu · Scrum made simple for schools
        </div>
      </footer>
    </div>
  );
}