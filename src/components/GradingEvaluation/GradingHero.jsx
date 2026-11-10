export default function GradingHero({ onNavigate }) {
  return (
    <section className="ge-hero-section" id="grading-top">
      <div className="ge-hero-grid">
        {/* Left Column */}
        <div className="ge-hero-content">
          <h1 className="ge-hero-title">
            Fair Individual Grading in Group Projects
          </h1>
          <p className="ge-hero-description">
            Stop giving the same blanket grade to the student who did everything and the one who showed up on the last day. Use{' '}
            <strong>Kanban board history</strong> and <strong>Sprint Retrospectives</strong> to turn invisible teamwork into objective, individual evidence.
          </p>

          <div className="ge-pill-group">
            <span className="ge-pill ge-pill-yellow">Visible ownership</span>
            <span className="ge-pill ge-pill-green">Evidence-based</span>
            <span className="ge-pill ge-pill-coral">Peer validated</span>
          </div>

          <div className="ge-cta-group">
            <button
              type="button"
              className="ge-btn ge-btn-primary"
              onClick={() => onNavigate('kanban-tracking')}
            >
              1 · Track with Kanban <span className="ge-arrow">→</span>
            </button>
            <button
              type="button"
              className="ge-btn ge-btn-secondary"
              onClick={() => onNavigate('retro-evaluation')}
            >
              2 · Peer Eval in Retros
            </button>
          </div>
        </div>

        {/* Right Column: Balanced Grade Formula Card */}
        <div className="ge-formula-card ge-card-shadow">
          <div className="ge-formula-header">
            <span className="ge-formula-title">Recommended Grade Split</span>
            <span className="ge-formula-meta">BALANCED MODEL</span>
          </div>

          <div className="ge-splitbar">
            <div className="ge-splitbar-segment ge-bg-blue" style={{ flex: 50 }}>
              50%
            </div>
            <div className="ge-splitbar-segment ge-bg-green" style={{ flex: 30 }}>
              30%
            </div>
            <div className="ge-splitbar-segment ge-bg-coral" style={{ flex: 20 }}>
              20%
            </div>
          </div>

          <div className="ge-formula-breakdown">
            <div className="ge-breakdown-row">
              <span className="ge-dot ge-bg-blue"></span>
              <div className="ge-breakdown-text">
                <strong>50% Team Deliverable</strong> — Shared product quality in Sprint Reviews
              </div>
            </div>
            <div className="ge-breakdown-row">
              <span className="ge-dot ge-bg-green"></span>
              <div className="ge-breakdown-text">
                <strong>30% Individual Kanban Evidence</strong> — Tasks owned, moved &amp; completed
              </div>
            </div>
            <div className="ge-breakdown-row">
              <span className="ge-dot ge-bg-coral"></span>
              <div className="ge-breakdown-text">
                <strong>20% Retrospective &amp; Peer Eval</strong> — Teamwork, reliability &amp; reflection
              </div>
            </div>
          </div>

          <hr className="ge-divider" />

          <p className="ge-formula-caption">
            Students still care about the team goal (50%), while 50% of their grade reflects their personal contribution and collaboration.
          </p>
        </div>
      </div>
    </section>
  );
}
