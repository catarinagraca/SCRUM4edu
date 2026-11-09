import { useState } from 'react';

const BOARD_TASKS = [
  {
    id: 't1',
    title: 'Interview 2 local store owners',
    student: 'Ana',
    effort: 'M',
    sprint: 'Sprint 1',
    column: 'done',
    color: 'ge-note-yellow',
    verified: 'Audio notes linked',
  },
  {
    id: 't2',
    title: 'Build survey charts & data table',
    student: 'Ana',
    effort: 'L',
    sprint: 'Sprint 2',
    column: 'done',
    color: 'ge-note-yellow',
    verified: '3 charts in slides',
  },
  {
    id: 't3',
    title: 'Write introduction & hypothesis',
    student: 'Rui',
    effort: 'M',
    sprint: 'Sprint 1',
    column: 'done',
    color: 'ge-note-green',
    verified: 'Page 1–2 of report',
  },
  {
    id: 't4',
    title: 'Design prototype poster layout',
    student: 'Rui',
    effort: 'M',
    sprint: 'Sprint 2',
    column: 'doing',
    color: 'ge-note-green',
    verified: 'In progress (Canva)',
  },
  {
    id: 't5',
    title: 'Compile bibliography & sources',
    student: 'Mia',
    effort: 'S',
    sprint: 'Sprint 1',
    column: 'done',
    color: 'ge-note-blue',
    verified: '8 sources formatted',
  },
  {
    id: 't6',
    title: 'Prepare 3-min demo script',
    student: 'Mia',
    effort: 'M',
    sprint: 'Sprint 2',
    column: 'done',
    color: 'ge-note-blue',
    verified: 'Speaker cards ready',
  },
  {
    id: 't7',
    title: 'Record conclusion video clip',
    student: 'Leo',
    effort: 'M',
    sprint: 'Sprint 2',
    column: 'todo',
    color: 'ge-note-coral',
    verified: 'Not started yet',
  },
];

const STUDENT_SUMMARY = {
  All: {
    badge: 'Full Team View',
    tone: 'ge-bg-yellow',
    diagnosis:
      'Click any student filter above to inspect their individual task ownership, effort level, and completion rate across the project.',
  },
  Ana: {
    badge: '2 Done · High Effort (M + L)',
    tone: 'ge-bg-green',
    diagnosis:
      'Strong individual contributor: completed both field research and heavy data analysis on schedule with clear evidence attached.',
  },
  Rui: {
    badge: '1 Done · 1 Doing · Steady Pace',
    tone: 'ge-bg-blue',
    diagnosis:
      'Consistent contributor: finished Sprint 1 writing and is actively building the poster in Sprint 2. Check progress at the next Stand-up.',
  },
  Mia: {
    badge: '2 Done · Consistent Delivery',
    tone: 'ge-bg-green',
    diagnosis:
      'Reliable finisher: took on smaller/medium tasks across both sprints and completed both before the Sprint Review.',
  },
  Leo: {
    badge: '0 Done · 1 To Do · Early Warning!',
    tone: 'ge-bg-coral',
    diagnosis:
      'Red flag spotted early: Leo has 0 cards in "Done" and his only card is still in "To Do". Intervene now—before the deadline—and reflect this in his individual 30% score if unaddressed.',
  },
};

export default function KanbanTrackingSection() {
  const [selectedStudent, setSelectedStudent] = useState('All');

  const students = ['All', 'Ana', 'Rui', 'Mia', 'Leo'];

  const renderColumn = (colKey, colTitle) => {
    const cards = BOARD_TASKS.filter((t) => t.column === colKey);
    return (
      <div className="ge-kanban-col">
        <div className="ge-kanban-col-header">
          <span>{colTitle}</span>
          <span className="ge-col-count">{cards.length}</span>
        </div>
        <div className="ge-kanban-cards">
          {cards.map((task) => {
            const isDimmed =
              selectedStudent !== 'All' && task.student !== selectedStudent;
            const isHighlighted =
              selectedStudent !== 'All' && task.student === selectedStudent;
            return (
              <div
                key={task.id}
                className={`ge-kanban-card ${task.color} ${
                  isDimmed ? 'is-dimmed' : ''
                } ${isHighlighted ? 'is-highlighted' : ''}`}
              >
                <div className="ge-card-top">
                  <span className="ge-card-owner">{task.student}</span>
                  <span className="ge-card-effort" title="Relative task size">
                    Size: {task.effort}
                  </span>
                </div>
                <div className="ge-card-title">{task.title}</div>
                <div className="ge-card-evidence">✓ {task.verified}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const currentSummary = STUDENT_SUMMARY[selectedStudent];

  return (
    <section className="ge-section" id="kanban-tracking">
      <div className="ge-section-header">
        <span className="ge-step-pill ge-bg-green">PART 1 · KANBAN BOARD TRACKING</span>
        <h2 className="ge-section-title">
          Using the Kanban board to track individual contributions
        </h2>
        <p className="ge-section-lead">
          A classroom Kanban board isn’t just for planning—it is a <strong>live audit trail</strong>. With four simple rules, you can look at any team’s board and immediately see who did what.
        </p>
      </div>

      {/* 4 Core Suggestions Grid */}
      <div className="ge-four-grid">
        <div className="ge-rule-card ge-card-shadow">
          <div className="ge-rule-num ge-bg-yellow">1</div>
          <h3 className="ge-rule-title">One Owner Per Sticky Note</h3>
          <p className="ge-rule-text">
            Never allow "Everyone" on a task card. If two students collaborate on research, split it into two specific cards (e.g., <em>"Sources A–C (Ana)"</em> and <em>"Sources D–F (Rui)"</em>) so ownership is unambiguous.
          </p>
        </div>

        <div className="ge-rule-card ge-card-shadow">
          <div className="ge-rule-num ge-bg-green">2</div>
          <h3 className="ge-rule-title">Color-Code or Initial Cards</h3>
          <p className="ge-rule-text">
            Assign each student a sticky-note color (or require bold initials + avatar tag in Trello/Notion). From across the classroom, you can spot if the "Done" column is 90% yellow notes and 0% coral.
          </p>
        </div>

        <div className="ge-rule-card ge-card-shadow">
          <div className="ge-rule-num ge-bg-blue">3</div>
          <h3 className="ge-rule-title">Tag Effort Size (S / M / L)</h3>
          <p className="ge-rule-text">
            Counting cards alone isn’t enough—formatting a title slide is not equal to building a working model. Have teams mark cards <strong>S (1 pt)</strong>, <strong>M (2 pts)</strong>, or <strong>L (3 pts)</strong> during Sprint Planning.
          </p>
        </div>

        <div className="ge-rule-card ge-card-shadow">
          <div className="ge-rule-num ge-bg-coral">4</div>
          <h3 className="ge-rule-title">Require "Definition of Done" Proof</h3>
          <p className="ge-rule-text">
            A card only moves to <strong>Done</strong> when the student links or shows the artifact (page number, slide, photo, or commit) during the Sprint Review—preventing fake card-moving before grading.
          </p>
        </div>
      </div>

      {/* Interactive Kanban Audit Demo */}
      <div className="ge-audit-panel ge-card-shadow">
        <div className="ge-audit-header">
          <div>
            <h3 className="ge-sub-heading ge-no-margin">
              Interactive Teacher Audit: Filter by student
            </h3>
            <p className="ge-audit-sub">
              Click a student’s name to see how the Kanban board reveals individual effort and flags free-riding early:
            </p>
          </div>

          <div className="ge-student-filters" role="tablist" aria-label="Filter board by student">
            {students.map((student) => (
              <button
                key={student}
                type="button"
                role="tab"
                aria-selected={selectedStudent === student}
                className={`ge-filter-btn ${
                  selectedStudent === student ? 'is-active' : ''
                }`}
                onClick={() => setSelectedStudent(student)}
              >
                {student === 'All' ? 'All Team (4)' : student}
              </button>
            ))}
          </div>
        </div>

        <div className="ge-kanban-board">
          {renderColumn('todo', 'To Do')}
          {renderColumn('doing', 'Doing')}
          {renderColumn('done', 'Done (Verified)')}
        </div>

        <div className="ge-diagnosis-bar">
          <span className={`ge-mini-badge ${currentSummary.tone}`}>
            {currentSummary.badge}
          </span>
          <p className="ge-diagnosis-text">{currentSummary.diagnosis}</p>
        </div>
      </div>

      {/* Teacher Pro-Tip Callout */}
      <div className="ge-callout-grid ge-callout-two">
        <div className="ge-callout-card">
          <div className="ge-callout-header">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
              <circle cx="12" cy="13" r="3"></circle>
            </svg>
            <span>Teacher Pro-Tip: The 10-Second End-of-Sprint Snapshot</span>
          </div>
          <p className="ge-callout-text">
            If using physical paper boards, take a quick smartphone photo of each team’s board at the end of every Sprint Review. Three photos give you a complete, indisputable timeline of who moved work forward week by week.
          </p>
        </div>

        <div className="ge-callout-card">
          <div className="ge-callout-header">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
              <path d="M12 9v4"></path>
              <path d="M12 17h.01"></path>
            </svg>
            <span>Anti-Gaming Rule: WIP Limits</span>
          </div>
          <p className="ge-callout-text">
            Limit the <strong>Doing</strong> column to at most 1–2 cards per student at a time. This stops one over-eager student from hoarding all tasks on Day 1 and forces balanced task distribution across the group.
          </p>
        </div>
      </div>
    </section>
  );
}
