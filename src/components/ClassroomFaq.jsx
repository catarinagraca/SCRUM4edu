import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import "./css/ClassroomFaq.css";

export default function ClassroomFaq() {
  const [isSectionOpen, setIsSectionOpen] = useState(false);

  return (
    <footer className="home-faq-footer" id="faq">
      <div className="home-faq-container">
        <button
          type="button"
          className={`faq-section-toggle ${isSectionOpen ? "is-open" : ""}`}
          onClick={() => setIsSectionOpen((prev) => !prev)}
          aria-expanded={isSectionOpen}
        >
          <div className="faq-toggle-left">
            <span className="faq-badge">
              <HelpCircle size={15} />
              TEACHER FAQ
            </span>
            <div className="faq-toggle-titles">
              <h2>Common Classroom Problems: &ldquo;Lazy&rdquo; or &ldquo;Bossy&rdquo; Students?</h2>
              <p>
                Click to see how Kanban board transparency and the Scrum Master role resolve real-world group conflicts.
              </p>
            </div>
          </div>

          <span className="faq-toggle-btn-label">
            <span>{isSectionOpen ? "Hide answers" : "Explore 4 scenarios"}</span>
            <ChevronDown
              size={18}
              className={`faq-chevron ${isSectionOpen ? "is-rotated" : ""}`}
            />
          </span>
        </button>

        {isSectionOpen && (
          <div className="faq-expanded-area">
            <p className="faq-placeholder-note">
              Scenarios will be added here in Increment 2.
            </p>
          </div>
        )}

        <div className="home-footer-meta">
          Scrum4edu · Scrum made simple for schools
        </div>
      </div>
    </footer>
  );
}
