import { useState } from "react";
import { ChevronDown, HelpCircle, LayoutGrid, ShieldCheck } from "lucide-react";
import "./css/ClassroomFaq.css";

const FAQ_SCENARIOS = [
  {
    id: "lazy-free-rider",
    tag: "The 'Lazy' / Free-Riding Student",
    tagTone: "faq-tag-coral",
    question:
      "What if one student sits back, does nothing all week, and expects the team's grade?",
    scenario:
      "In a 4-person group, one student keeps saying \"I'm working on it\" during class, never submits anything, and leaves teammates scrambling the night before the deadline.",
    boardTransparency:
      "Every sticky note on the Kanban board requires a single owner and a 'Definition of Done' proof. If a student has zero cards in 'Doing' or 'Done' by Wednesday, the empty spot on the board makes the lack of progress visible to both the team and the teacher immediately—weeks before the deadline.",
    scrumMasterRole:
      "During the 5-minute Daily Stand-up, the Scrum Master asks what is blocking the card instead of accusing the student. If the task is too big, the Scrum Master helps split it into a 20-minute micro-task for that very class period and flags persistent non-participation to the teacher early.",
  },
  {
    id: "bossy-takeover",
    tag: "The 'Bossy' / Over-Controlling Student",
    tagTone: "faq-tag-yellow",
    question:
      "What if a perfectionist student bosses everyone around or takes over the whole project?",
    scenario:
      "A high-achieving student doesn't trust their teammates, grabs all the important tasks on Day 1, and rewrites other students' work without asking.",
    boardTransparency:
      "Enforce a Work-In-Progress (WIP) limit on the Kanban board: each student can have at most 1–2 cards in the 'Doing' column at a time. Because cards are color-coded or initialed by owner, one student physically cannot hoard the board without everyone seeing the imbalance during Sprint Planning.",
    scrumMasterRole:
      "The Scrum Master facilitates Sprint Planning so teammates pull their own tasks rather than having one person assign them. In the Sprint Retrospective, the Scrum Master protects equal speaking time so quieter students can safely request shared ownership.",
  },
  {
    id: "blame-game",
    tag: "Last-Minute Blame & Conflict",
    tagTone: "faq-tag-blue",
    question:
      "What if two students argue over who was supposed to do a missing part of the project?",
    scenario:
      "On presentation day, the conclusion slides are missing and two teammates blame each other: \"I thought you were doing the slides!\"",
    boardTransparency:
      "The Kanban board acts as a single source of truth. During Sprint Planning, every deliverable is broken into cards with one name written on each card. Nobody can claim confusion on Friday about a card that has had their name on it in the 'To Do' column since Monday.",
    scrumMasterRole:
      "The Scrum Master checks the board at the end of each Daily Stand-up to ensure no required task is left unassigned ('orphaned') and guides the team in the Retrospective to focus on fixing their workflow rather than personal attacks.",
  },
  {
    id: "silent-stuck",
    tag: "The Quiet Student Who Hides Blockers",
    tagTone: "faq-tag-green",
    question:
      "What if a shy student gets stuck early on but stays silent while the group falls behind?",
    scenario:
      "A student doesn't understand how to format the data chart, feels embarrassed to ask, and quietly stalls for three classes while their teammates assume everything is fine.",
    boardTransparency:
      "When a card stays stuck in the 'Doing' column for more than two sessions without moving to 'Done', the board visually signals a bottleneck without the student having to make a dramatic confession.",
    scrumMasterRole:
      "The Scrum Master's main job is removing obstacles. Through the third Daily Stand-up question (\"Do I have any blockers?\"), the Scrum Master normalizes asking for help and pairs the stuck student with a teammate for 10 minutes right after the stand-up.",
  },
  {
    id: "absent-teammate",
    tag: "The Absent Student Bottleneck",
    tagTone: "faq-tag-coral",
    question:
      "What if a student is absent on a key workday and the rest of the group claims they can't continue?",
    scenario:
      "One student stays home sick with the project notes on their laptop, and the other three students sit idle for the entire 45-minute period saying, \"We can't do anything without Leo's file.\"",
    boardTransparency:
      "Because all tasks are mapped on the shared Kanban board (and linked to a shared folder), the team can immediately see which cards in 'To Do' are independent of the absent student's task—or reassign an urgent 'Doing' card so progress never stalls.",
    scrumMasterRole:
      "At the start-of-class Stand-up, the Scrum Master spots the blocked card, helps the team pivot to unblocked backlog items for that period, and posts a quick update on the board so the absent student knows exactly where to jump back in upon returning.",
  },
  {
    id: "cherry-picking",
    tag: "The 'Easy-Task' Cherry-Picker",
    tagTone: "faq-tag-yellow",
    question:
      "What if a student only grabs tiny, cosmetic tasks (like picking fonts) and claims they did equal work?",
    scenario:
      "A student moves three cards to 'Done'—'Choose color palette', 'Make title slide', and 'Create folder'—in 10 minutes, then relaxes while teammates spend hours writing the research report.",
    boardTransparency:
      "When cards on the Kanban board are tagged with relative effort sizes (S / M / L) during Sprint Planning, the board exposes the difference between three 5-minute 'S' tasks and a deep 'L' research task at a glance.",
    scrumMasterRole:
      "During Sprint Planning, the Scrum Master guides the team to balance total effort points—not just card count—across all members, and prompts the team in the Sprint Review to verify that every 'Done' card meets the agreed quality standard.",
  },
];

export default function ClassroomFaq() {
  const [openId, setOpenId] = useState(null);

  const toggleItem = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <footer className="home-faq-footer" id="faq">
      <div className="home-faq-container">
        <div className="faq-header-row">
          <span className="faq-badge">
            <HelpCircle size={15} />
            Teacher FAQ
          </span>
        </div>

        <div className="faq-list">
          {FAQ_SCENARIOS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`faq-item ${isOpen ? "is-open" : ""}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                >
                  <div className="faq-question-left">
                    <span className={`faq-scenario-tag ${item.tagTone}`}>
                      {item.tag}
                    </span>
                    <span className="faq-question-text">{item.question}</span>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`faq-chevron ${isOpen ? "is-rotated" : ""}`}
                  />
                </button>

                {isOpen && (
                  <div className="faq-answer-body">
                    <p className="faq-scenario-context">
                      <strong>Classroom scenario:</strong> {item.scenario}
                    </p>

                    <div className="faq-resolution-grid">
                      <div className="faq-resolution-card faq-res-board">
                        <div className="faq-res-header">
                          <LayoutGrid size={17} />
                          <span>How Board Transparency Solves It</span>
                        </div>
                        <p>{item.boardTransparency}</p>
                      </div>

                      <div className="faq-resolution-card faq-res-sm">
                        <div className="faq-res-header">
                          <ShieldCheck size={17} />
                          <span>How the Scrum Master Role Solves It</span>
                        </div>
                        <p>{item.scrumMasterRole}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="home-footer-meta">
          Scrum4edu · Scrum made simple for schools
        </div>
      </div>
    </footer>
  );
}
