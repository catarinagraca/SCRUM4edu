import React, { useState } from 'react';
import './ScrumCeremonies.css';

export default function ScrumCeremonies() {
  const [activeCeremony, setActiveCeremony] = useState('standup');
  const [retroTemplate, setRetroTemplate] = useState('start-stop-continue');

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="scrum-ceremonies-page">
      {/* Top Navbar */}
      <header className="sc-navbar">
        <div className="sc-container sc-navbar-inner">
          <a href="#top" className="sc-logo">
            Scrum<span>4</span>edu
          </a>
          <nav className="sc-nav-links">
            <a href="#ceremonies" onClick={(e) => { e.preventDefault(); scrollToSection('ceremonies'); }}>
              Ceremonies
            </a>
            <a href="#cheat-sheet" onClick={(e) => { e.preventDefault(); scrollToSection('cheat-sheet'); }}>
              Cheat-sheet
            </a>
          </nav>
        </div>
      </header>

      <main className="sc-container">
        {/* SECTION 1: Hero & Overview */}
        <section className="sc-hero-section" id="top">
          <div className="sc-hero-grid">
            {/* Left Column */}
            <div className="sc-hero-content">
              <h1 className="sc-hero-title">
                Scrum Ceremonies in the Classroom
              </h1>
              <p className="sc-hero-description">
                Ceremonies give group work a rhythm. Instead of chaotic last-minute projects, students meet in{' '}
                <strong>short, focused syncs</strong> with a <strong>clear cadence</strong> — so everyone knows what’s happening, and class time goes to real work.
              </p>

              <div className="sc-pill-group">
                <span className="sc-pill sc-pill-green">Clear cadence</span>
                <span className="sc-pill sc-pill-blue">Short syncs</span>
                <span className="sc-pill sc-pill-coral">No chaos</span>
              </div>

              <div className="sc-cta-group">
                <button
                  type="button"
                  className="sc-btn sc-btn-primary"
                  onClick={() => scrollToSection('ceremonies')}
                >
                  Start with the stand-up <span className="sc-arrow">→</span>
                </button>
                <button
                  type="button"
                  className="sc-btn sc-btn-secondary"
                  onClick={() => scrollToSection('cheat-sheet')}
                >
                  See the cheat-sheet
                </button>
              </div>
            </div>

            {/* Right Column: 45-min period card */}
            <div className="sc-period-card sc-card-shadow">
              <div className="sc-period-header">
                <span className="sc-period-title">One 45–minute period</span>
                <span className="sc-period-meta">STAND-UP = 1/9 OF IT</span>
              </div>

              <div className="sc-timebar">
                <div className="sc-timebar-segment sc-segment-green" style={{ flex: 5 }}>
                  5 min
                </div>
                <div className="sc-timebar-segment sc-segment-blue" style={{ flex: 35 }}>
                  35 min
                </div>
                <div className="sc-timebar-segment sc-segment-yellow" style={{ flex: 5 }}>
                  5 min
                </div>
              </div>

              <div className="sc-legend">
                <span className="sc-legend-item">
                  <span className="sc-dot sc-dot-green"></span> Stand-up
                </span>
                <span className="sc-legend-item">
                  <span className="sc-dot sc-dot-blue"></span> Team work
                </span>
                <span className="sc-legend-item">
                  <span className="sc-dot sc-dot-yellow"></span> Wrap-up
                </span>
              </div>

              <hr className="sc-divider" />

              <p className="sc-period-caption">
                Five minutes of talking, forty of making. That’s the trade a ceremony gives you.
              </p>
            </div>
          </div>

          {/* Bottom Banner: One sprint at a glance */}
          <div className="sc-sprint-glance sc-card-shadow">
            <h2 className="sc-glance-title">One sprint at a glance</h2>
            <div className="sc-glance-steps">
              {/* Step 1: Sprint Planning */}
              <div className="sc-step-card sc-bg-yellow">
                <div className="sc-step-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <div className="sc-step-text">
                  <div className="sc-step-name">Sprint Planning</div>
                  <div className="sc-step-sub">Start of sprint</div>
                </div>
              </div>

              <span className="sc-step-arrow">→</span>

              {/* Step 2: Daily Stand-up */}
              <div className="sc-step-card sc-bg-green">
                <div className="sc-step-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="13" r="8"></circle>
                    <path d="M12 9v4l2 2"></path>
                    <path d="M5 3 2 6"></path>
                    <path d="m22 6-3-3"></path>
                    <path d="M6.38 18.7 4 21"></path>
                    <path d="M17.64 18.67 20 21"></path>
                  </svg>
                </div>
                <div className="sc-step-text">
                  <div className="sc-step-name">Daily Stand-up</div>
                  <div className="sc-step-sub">Every session</div>
                </div>
              </div>

              <span className="sc-step-arrow">→</span>

              {/* Step 3: Sprint Review */}
              <div className="sc-step-card sc-bg-blue">
                <div className="sc-step-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h20"></path>
                    <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path>
                    <path d="m7 21 5-5 5 5"></path>
                  </svg>
                </div>
                <div className="sc-step-text">
                  <div className="sc-step-name">Sprint Review</div>
                  <div className="sc-step-sub">End of sprint</div>
                </div>
              </div>

              <span className="sc-step-arrow">→</span>

              {/* Step 4: Retrospective */}
              <div className="sc-step-card sc-bg-coral">
                <div className="sc-step-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                    <path d="M21 3v5h-5"></path>
                    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                    <path d="M8 16H3v5"></path>
                  </svg>
                </div>
                <div className="sc-step-text">
                  <div className="sc-step-name">Retrospective</div>
                  <div className="sc-step-sub">Right after review</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: The three classroom ceremonies */}
        <section className="sc-ceremonies-section" id="ceremonies">
          <h2 className="sc-section-title">The three classroom ceremonies</h2>

          {/* Tab selector buttons */}
          <div className="sc-ceremony-tabs" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={activeCeremony === 'standup'}
              className={`sc-tab-btn sc-tab-green ${activeCeremony === 'standup' ? 'is-active' : ''}`}
              onClick={() => setActiveCeremony('standup')}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="13" r="8"></circle>
                <path d="M12 9v4l2 2"></path>
                <path d="M5 3 2 6"></path>
                <path d="m22 6-3-3"></path>
                <path d="M6.38 18.7 4 21"></path>
                <path d="M17.64 18.67 20 21"></path>
              </svg>
              <span>1 · Daily Stand-up</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeCeremony === 'review'}
              className={`sc-tab-btn sc-tab-blue ${activeCeremony === 'review' ? 'is-active' : ''}`}
              onClick={() => setActiveCeremony('review')}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h20"></path>
                <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path>
                <path d="m7 21 5-5 5 5"></path>
              </svg>
              <span>2 · Sprint Review</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeCeremony === 'retrospective'}
              className={`sc-tab-btn sc-tab-coral ${activeCeremony === 'retrospective' ? 'is-active' : ''}`}
              onClick={() => setActiveCeremony('retrospective')}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                <path d="M21 3v5h-5"></path>
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                <path d="M8 16H3v5"></path>
              </svg>
              <span>3 · Retrospective</span>
            </button>
          </div>

          {/* Ceremony Content Card */}
          <div className="sc-ceremony-panel sc-card-shadow">
            {/* TAB 1: DAILY STAND-UP */}
            {activeCeremony === 'standup' && (
              <div className="sc-panel-body">
                <div className="sc-badge-row">
                  <span className="sc-mini-badge sc-bg-green">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="13" r="8"></circle>
                      <path d="M12 9v4l2 2"></path>
                    </svg>
                    5–10 MIN MAX
                  </span>
                  <span className="sc-mini-badge sc-bg-green">EVERY SESSION</span>
                </div>

                <p className="sc-panel-lead">
                  Teams <strong>stand up</strong> in a small circle at the start of class. It’s{' '}
                  <strong>timeboxed</strong> and <strong>fast-paced</strong>: each student speaks for about 30 seconds. No solving problems here — just sync and move on.
                </p>

                <h3 className="sc-sub-heading">The exact 3 questions</h3>

                <div className="sc-three-grid">
                  <div className="sc-sub-card">
                    <div className="sc-question-num">1</div>
                    <p className="sc-question-text">
                      "What did I accomplish since the last class/session?"
                    </p>
                  </div>

                  <div className="sc-sub-card">
                    <div className="sc-question-num">2</div>
                    <p className="sc-question-text">
                      "What will I work on before/during the next session?"
                    </p>
                  </div>

                  <div className="sc-sub-card">
                    <div className="sc-question-num">3</div>
                    <p className="sc-question-text">
                      "Do I have any obstacles or blockers preventing me from making progress?"
                    </p>
                  </div>
                </div>

                <div className="sc-callout-grid sc-callout-two">
                  <div className="sc-callout-card">
                    <div className="sc-callout-header">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                        <path d="M9 18h6"></path>
                        <path d="M10 22h4"></path>
                      </svg>
                      <span>Teacher Pro-Tip: listen, don't lead</span>
                    </div>
                    <p className="sc-callout-text">
                      Stand slightly outside the circle and act as Scrum Master: keep time, note blockers on a sticky note, and talk to the team <em>after</em> the stand-up. Let a student run it so the team owns the meeting.
                    </p>
                  </div>

                  <div className="sc-callout-card">
                    <div className="sc-callout-header">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                        <path d="M12 9v4"></path>
                        <path d="M12 17h.01"></path>
                      </svg>
                      <span>Classroom Reality Check</span>
                    </div>
                    <p className="sc-callout-text">
                      A professional stand-up is 15 minutes. In a 45–50 min period, aim for <strong>5 minutes</strong>: use a visible timer and let blockers be raised with one sentence only.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: SPRINT REVIEW */}
            {activeCeremony === 'review' && (
              <div className="sc-panel-body">
                <div className="sc-badge-row">
                  <span className="sc-mini-badge sc-bg-blue">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 3h20"></path>
                      <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path>
                      <path d="m7 21 5-5 5 5"></path>
                    </svg>
                    SHOW &amp; TELL
                  </span>
                  <span className="sc-mini-badge sc-bg-blue">FOCUS: THE PRODUCT</span>
                </div>

                <p className="sc-panel-lead">
                  The Sprint Review inspects the <strong>work done</strong> — the project increment. Students{' '}
                  <strong>demonstrate a working deliverable</strong> (a prototype, model, poster, app, experiment) to the teacher and peers. It’s not a theoretical report: show it, don’t just describe it.
                </p>

                <h3 className="sc-sub-heading">Practical classroom format</h3>

                <div className="sc-three-grid">
                  <div className="sc-sub-card">
                    <div className="sc-format-time">5 min</div>
                    <div className="sc-format-title">Team demo</div>
                    <p className="sc-format-desc">
                      The team shows what's done and what isn't yet.
                    </p>
                  </div>

                  <div className="sc-sub-card">
                    <div className="sc-format-time">3 min</div>
                    <div className="sc-format-title">Peer feedback</div>
                    <p className="sc-format-desc">
                      Classmates share one thing they liked and one question.
                    </p>
                  </div>

                  <div className="sc-sub-card">
                    <div className="sc-format-time">2 min</div>
                    <div className="sc-format-title">Teacher input</div>
                    <p className="sc-format-desc">
                      Accept the increment and suggest priorities for next sprint.
                    </p>
                  </div>
                </div>

                <div className="sc-callout-grid">
                  <div className="sc-callout-card">
                    <div className="sc-callout-header">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                        <path d="M12 9v4"></path>
                        <path d="M12 17h.01"></path>
                      </svg>
                      <span>Classroom Reality Check</span>
                    </div>
                    <p className="sc-callout-text">
                      With 6 teams, reviews can fill a whole lesson. Rotate: half the teams present while the other half act as "customers" with feedback cards, then swap next sprint.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: RETROSPECTIVE */}
            {activeCeremony === 'retrospective' && (
              <div className="sc-panel-body">
                <div className="sc-badge-row">
                  <span className="sc-mini-badge sc-bg-coral">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                      <path d="M21 3v5h-5"></path>
                      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                      <path d="M8 16H3v5"></path>
                    </svg>
                    SELF-EVALUATION
                  </span>
                  <span className="sc-mini-badge sc-bg-coral">FOCUS: THE PROCESS</span>
                </div>

                <p className="sc-panel-lead">
                  The Retrospective inspects <strong>how the team worked together</strong> — process and interpersonal dynamics. Students reflect on what went well, what was frustrating, and agree on{' '}
                  <strong>1 or 2 concrete changes</strong> for the next sprint.
                </p>

                <div className="sc-retro-header-row">
                  <h3 className="sc-sub-heading sc-no-margin">Classroom retro template</h3>
                  <div className="sc-template-switch">
                    <button
                      type="button"
                      className={`sc-switch-opt ${retroTemplate === 'start-stop-continue' ? 'is-active' : ''}`}
                      onClick={() => setRetroTemplate('start-stop-continue')}
                    >
                      Start / Stop / Continue
                    </button>
                    <button
                      type="button"
                      className={`sc-switch-opt ${retroTemplate === 'mad-sad-glad' ? 'is-active' : ''}`}
                      onClick={() => setRetroTemplate('mad-sad-glad')}
                    >
                      Mad / Sad / Glad
                    </button>
                  </div>
                </div>

                {retroTemplate === 'start-stop-continue' ? (
                  <div className="sc-three-grid">
                    <div className="sc-sub-card sc-sub-card-white">
                      <div className="sc-retro-col-title">Start</div>
                      <div className="sc-retro-col-sub">What should we begin doing?</div>
                      <div className="sc-retro-example">
                        e.g. "Splitting tasks on the board"
                      </div>
                    </div>

                    <div className="sc-sub-card sc-sub-card-white">
                      <div className="sc-retro-col-title">Stop</div>
                      <div className="sc-retro-col-sub">What is holding us back?</div>
                      <div className="sc-retro-example">
                        e.g. "Waiting until the last day"
                      </div>
                    </div>

                    <div className="sc-sub-card sc-sub-card-white">
                      <div className="sc-retro-col-title">Continue</div>
                      <div className="sc-retro-col-sub">What works well?</div>
                      <div className="sc-retro-example">
                        e.g. "Helping each other with blockers"
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="sc-three-grid">
                    <div className="sc-sub-card sc-sub-card-white">
                      <div className="sc-retro-col-title">Mad</div>
                      <div className="sc-retro-col-sub">What frustrated or blocked us?</div>
                      <div className="sc-retro-example">
                        e.g. "Unclear who was doing the slides"
                      </div>
                    </div>

                    <div className="sc-sub-card sc-sub-card-white">
                      <div className="sc-retro-col-title">Sad</div>
                      <div className="sc-retro-col-sub">What disappointed us?</div>
                      <div className="sc-retro-example">
                        e.g. "Ran out of time to test the model"
                      </div>
                    </div>

                    <div className="sc-sub-card sc-sub-card-white">
                      <div className="sc-retro-col-title">Glad</div>
                      <div className="sc-retro-col-sub">What made us proud or happy?</div>
                      <div className="sc-retro-example">
                        e.g. "Everyone finished their part on time"
                      </div>
                    </div>
                  </div>
                )}

                <div className="sc-callout-grid">
                  <div className="sc-callout-card">
                    <div className="sc-callout-header">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                        <path d="M9 18h6"></path>
                        <path d="M10 22h4"></path>
                      </svg>
                      <span>Teacher Pro-Tip: safe space first</span>
                    </div>
                    <p className="sc-callout-text">
                      Students write sticky notes silently for 3 minutes before sharing. Focus on actions, not people, and finish by voting on the 1–2 changes to try next sprint.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* SECTION 3: Teacher's quick cheat-sheet */}
        <section className="sc-cheatsheet-section" id="cheat-sheet">
          <h2 className="sc-section-title">Teacher's quick cheat–sheet</h2>

          <div className="sc-table-card sc-card-shadow">
            <div className="sc-table-scroll">
              <table className="sc-cheatsheet-table">
                <thead>
                  <tr>
                    <th>CEREMONY</th>
                    <th>TIMEBOX IN CLASS</th>
                    <th>FOCUS</th>
                    <th>KEY QUESTION / GOAL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="sc-table-badge sc-bg-yellow">SPRINT PLANNING</span>
                    </td>
                    <td className="sc-td-time">15–20 min</td>
                    <td className="sc-td-focus">Product</td>
                    <td className="sc-td-goal">What will we deliver this sprint, and who does what?</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="sc-table-badge sc-bg-green">DAILY STAND-UP</span>
                    </td>
                    <td className="sc-td-time">5–10 min</td>
                    <td className="sc-td-focus">Process</td>
                    <td className="sc-td-goal">Done? Next? Blocked?</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="sc-table-badge sc-bg-blue">SPRINT REVIEW</span>
                    </td>
                    <td className="sc-td-time">~10 min / team</td>
                    <td className="sc-td-focus">Product</td>
                    <td className="sc-td-goal">Does our deliverable work? What feedback do we get?</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="sc-table-badge sc-bg-coral">SPRINT RETROSPECTIVE</span>
                    </td>
                    <td className="sc-td-time">5-10 min</td>
                    <td className="sc-td-focus">Process</td>
                    <td className="sc-td-goal">What 1–2 things will we change as a team?</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="sc-footer">
        <div className="sc-container sc-footer-inner">
          Scrum4edu · Scrum made simple for schools
        </div>
      </footer>
    </div>
  );
}
