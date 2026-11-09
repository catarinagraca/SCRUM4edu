import { useState } from 'react';

export default function RetroPeerEvalSection() {
  const [activeMethod, setActiveMethod] = useState('appreciation');

  return (
    <section className="ge-section" id="retro-evaluation">
      <div className="ge-section-header">
        <span className="ge-step-pill ge-bg-coral">PART 2 · RETROSPECTIVE PEER EVALUATION</span>
        <h2 className="ge-section-title">
          Using Retrospectives for fair peer evaluation
        </h2>
        <p className="ge-section-lead">
          End-of-term peer grading often turns into a popularity contest or last-minute resentment. Running short, structured peer check-ins <strong>inside each Sprint Retrospective</strong> captures honest feedback while teammates still have time to improve.
        </p>
      </div>

      {/* Interactive Tabs for 3 Retrospective Peer Evaluation Methods */}
      <div className="ge-method-tabs" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={activeMethod === 'appreciation'}
          className={`ge-tab-btn ge-tab-green ${
            activeMethod === 'appreciation' ? 'is-active' : ''
          }`}
          onClick={() => setActiveMethod('appreciation')}
        >
          <span>1 · Peer Shout-Outs &amp; Requests</span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeMethod === 'radar'}
          className={`ge-tab-btn ge-tab-blue ${
            activeMethod === 'radar' ? 'is-active' : ''
          }`}
          onClick={() => setActiveMethod('radar')}
        >
          <span>2 · 3-Criteria Peer Checkcard</span>
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeMethod === 'pie'}
          className={`ge-tab-btn ge-tab-coral ${
            activeMethod === 'pie' ? 'is-active' : ''
          }`}
          onClick={() => setActiveMethod('pie')}
        >
          <span>3 · 100-Point Contribution Pie</span>
        </button>
      </div>

      <div className="ge-method-panel ge-card-shadow">
        {activeMethod === 'appreciation' && (
          <div className="ge-panel-body">
            <div className="ge-badge-row">
              <span className="ge-mini-badge ge-bg-green">3 MINUTES IN RETRO</span>
              <span className="ge-mini-badge ge-bg-green">PUBLIC &amp; CONSTRUCTIVE</span>
            </div>

            <p className="ge-panel-lead">
              At the end of the Retrospective, every student writes <strong>two sticky notes</strong> for specific teammates—one recognizing real help and one requesting a concrete behavior change for the next sprint.
            </p>

            <div className="ge-three-grid">
              <div className="ge-sub-card ge-sub-card-white">
                <div className="ge-retro-col-title">1. Appreciation Note</div>
                <div className="ge-retro-col-sub">
                  Must reference a specific task or helpful action from this sprint.
                </div>
                <div className="ge-retro-example ge-bg-green">
                  "Shout-out to <strong>Ana</strong> for helping me debug the survey chart when I was stuck on Tuesday."
                </div>
              </div>

              <div className="ge-sub-card ge-sub-card-white">
                <div className="ge-retro-col-title">2. Forward Request</div>
                <div className="ge-retro-col-sub">
                  Framed as a future action ("Next sprint, I need…"), never a personal attack.
                </div>
                <div className="ge-retro-example ge-bg-yellow">
                  "For <strong>Leo</strong>: Next sprint, please move your card and upload your clip before Thursday’s review."
                </div>
              </div>

              <div className="ge-sub-card ge-sub-card-white">
                <div className="ge-retro-col-title">3. Teacher Takeaway</div>
                <div className="ge-retro-col-sub">
                  How this feeds into your individual evaluation grade:
                </div>
                <div className="ge-retro-example ge-bg-blue">
                  Teammates who consistently earn specific shout-outs for unblocking others get credit for invisible leadership.
                </div>
              </div>
            </div>
          </div>
        )}

        {activeMethod === 'radar' && (
          <div className="ge-panel-body">
            <div className="ge-badge-row">
              <span className="ge-mini-badge ge-bg-blue">2 MINUTES SILENT SLIP</span>
              <span className="ge-mini-badge ge-bg-blue">EVIDENCE-LINKED</span>
            </div>

            <p className="ge-panel-lead">
              Right after the team Retrospective, each student fills out a 60-second confidential slip rating themselves and their teammates from <strong>1 (Rarely) to 4 (Always)</strong> on three observable Scrum behaviors:
            </p>

            <div className="ge-three-grid">
              <div className="ge-sub-card">
                <div className="ge-question-num">1 · Reliability</div>
                <p className="ge-question-text">
                  Did this teammate complete the Kanban cards they committed to during Sprint Planning on time?
                </p>
              </div>

              <div className="ge-sub-card">
                <div className="ge-question-num">2 · Stand-up Sync</div>
                <p className="ge-question-text">
                  Did they communicate honestly in Daily Stand-ups and raise blockers early instead of disappearing?
                </p>
              </div>

              <div className="ge-sub-card">
                <div className="ge-question-num">3 · Team Support</div>
                <p className="ge-question-text">
                  Did they listen during Reviews/Retros, help unblock peers, and follow the team’s agreed changes?
                </p>
              </div>
            </div>
          </div>
        )}

        {activeMethod === 'pie' && (
          <div className="ge-panel-body">
            <div className="ge-badge-row">
              <span className="ge-mini-badge ge-bg-coral">END-OF-PROJECT RETRO</span>
              <span className="ge-mini-badge ge-bg-coral">CROSS-CHECK WITH KANBAN</span>
            </div>

            <p className="ge-panel-lead">
              In the final Retrospective, give the team <strong>100 collaboration points</strong> (e.g., 25 pts per person in a 4-student group). Ask them to agree on how points should be distributed—backed by their Kanban board.
            </p>

            <div className="ge-three-grid">
              <div className="ge-sub-card ge-sub-card-white">
                <div className="ge-format-time">Equal Team (25 / 25 / 25 / 25)</div>
                <div className="ge-format-title">Balanced Effort</div>
                <p className="ge-format-desc">
                  When everyone contributed fairly across sprints, the team splits points evenly and everyone gets 100% of the peer score.
                </p>
              </div>

              <div className="ge-sub-card ge-sub-card-white">
                <div className="ge-format-time">Uneven Split (30 / 28 / 27 / 15)</div>
                <div className="ge-format-title">Requires Board Proof</div>
                <p className="ge-format-desc">
                  Any score below 20 or above 30 must cite specific Kanban cards or missed Retro action items—preventing unfair ganging-up.
                </p>
              </div>

              <div className="ge-sub-card ge-sub-card-white">
                <div className="ge-format-time">Teacher Moderation</div>
                <div className="ge-format-title">No Surprises on Grade Day</div>
                <p className="ge-format-desc">
                  Because you checked the Kanban board and Retro notes in Sprint 1 &amp; 2, final peer scores never come as a shock.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Golden Rules Callouts */}
      <div className="ge-callout-grid ge-callout-two">
        <div className="ge-callout-card">
          <div className="ge-callout-header">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
              <path d="M9 18h6"></path>
              <path d="M10 22h4"></path>
            </svg>
            <span>Golden Rule #1: Formative in Sprint 1, Graded in Sprint 2+</span>
          </div>
          <p className="ge-callout-text">
            Make the first Retrospective peer check-in <strong>ungraded feedback</strong>. If a student receives low peer ratings in Sprint 1, give them a chance to pick up Kanban cards and improve in Sprint 2 before it affects their grade.
          </p>
        </div>

        <div className="ge-callout-card">
          <div className="ge-callout-header">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            <span>Golden Rule #2: Cross-Validate Peer Scores with the Board</span>
          </div>
          <p className="ge-callout-text">
            Never let peer evaluation be an unverified popularity vote. If a group rates a quiet student poorly, check the Kanban board: if that student completed their M/L tasks on time, protect their grade.
          </p>
        </div>
      </div>

      {/* SECTION 3: Teacher's Quick Grading Rubric Table */}
      <div className="ge-rubric-block" id="grading-rubric">
        <h2 className="ge-section-title">Teacher’s quick grading rubric</h2>
        <div className="ge-table-card ge-card-shadow">
          <div className="ge-table-scroll">
            <table className="ge-rubric-table">
              <thead>
                <tr>
                  <th>COMPONENT</th>
                  <th>WEIGHT</th>
                  <th>SOURCE OF EVIDENCE</th>
                  <th>WHAT EARNS FULL MARKS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="ge-table-badge ge-bg-blue">TEAM PRODUCT</span>
                  </td>
                  <td className="ge-td-weight">50%</td>
                  <td className="ge-td-source">Sprint Reviews &amp; Final Deliverable</td>
                  <td className="ge-td-desc">
                    Working increments demonstrated at each Sprint Review meeting learning objectives.
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="ge-table-badge ge-bg-green">KANBAN CONTRIBUTION</span>
                  </td>
                  <td className="ge-td-weight">30%</td>
                  <td className="ge-td-source">Kanban Board History (To Do → Done)</td>
                  <td className="ge-td-desc">
                    Fair share of S/M/L cards owned, moved steadily across sprints, with verified artifacts attached.
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="ge-table-badge ge-bg-coral">RETRO &amp; PEER EVAL</span>
                  </td>
                  <td className="ge-td-weight">20%</td>
                  <td className="ge-td-source">Sprint Retrospectives &amp; Peer Checkcards</td>
                  <td className="ge-td-desc">
                    Active participation in Stand-ups/Retros, constructive peer feedback, and reliable follow-through on team improvements.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
