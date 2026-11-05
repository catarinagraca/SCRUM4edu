import React from 'react';

export default function CeremoniesHero({ onNavigate }) {
  return (
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
              onClick={() => onNavigate('ceremonies')}
            >
              Start with the stand-up <span className="sc-arrow">→</span>
            </button>
            <button
              type="button"
              className="sc-btn sc-btn-secondary"
              onClick={() => onNavigate('cheat-sheet')}
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
  );
}
