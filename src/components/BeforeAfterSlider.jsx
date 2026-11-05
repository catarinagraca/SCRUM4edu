import { useRef, useState } from "react";
import {
  IconMessageCircle,
  IconAlarm,
  IconUser,
  IconLayoutDashboard,
  IconTrendingUp,
  IconClock,
  IconArrowsHorizontal,
} from "@tabler/icons-react";
import "./css/BeforeAfterSlider.css";

const BEFORE = [
  { icon: IconMessageCircle, title: "Scattered WhatsApp groups", text: "Updates get buried in chat and nobody knows what was decided." },
  { icon: IconAlarm, title: "Tasks forgotten until the night before", text: "Work piles up and gets rushed on the eve of the deadline." },
  { icon: IconUser, title: "One student does everything", text: "The rest coast along, and grading can’t tell who did what." },
];

const AFTER = [
  { icon: IconLayoutDashboard, title: "Tasks assigned on the board", text: "Every student has named tasks they can see at a glance." },
  { icon: IconTrendingUp, title: "Transparent progress", text: "You see what’s done, in progress and late, without asking." },
  { icon: IconClock, title: "5-minute check-ins in class", text: "A quick daily stand-up keeps everyone on track." },
];

function Rows({ items }) {
  return items.map(({ icon: Icon, title, text }) => (
    <div className="ba-row" key={title}>
      <span className="ba-icon"><Icon size={20} aria-hidden="true" /></span>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  ));
}

export default function BeforeAfterSlider({
  title = "The same project, two different weeks",
  subtitle = "Drag the handle to compare.",
  beforeLabel = "Without Scrum",
  afterLabel = "With Scrum",
  before = BEFORE,
  after = AFTER,
}) {
  const boxRef = useRef(null);
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);

  const clamp = (p) => Math.max(0, Math.min(100, p));

  const moveTo = (clientX) => {
    const r = boxRef.current.getBoundingClientRect();
    setPos(clamp(((clientX - r.left) / r.width) * 100));
  };

  const onPointerDown = (e) => {
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    moveTo(e.clientX);
  };
  const onPointerMove = (e) => dragging && moveTo(e.clientX);
  const onPointerUp = () => setDragging(false);

  const onKeyDown = (e) => {
    const keys = {
      ArrowLeft: () => setPos((p) => clamp(p - 5)),
      ArrowRight: () => setPos((p) => clamp(p + 5)),
      Home: () => setPos(0),
      End: () => setPos(100),
    };
    if (keys[e.key]) {
      keys[e.key]();
      e.preventDefault();
    }
  };

  return (
    <section className="ba-slider">
      <h2>{title}</h2>
      <p className="ba-sub">{subtitle}</p>

      <div
        ref={boxRef}
        className={`ba-wrap${dragging ? " ba-dragging" : ""}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div className="ba-box">
          
          {/* CAMADA "BEFORE" (Esquerda) */}
          <div className="ba-layer ba-before">
            <div className="ba-layer-header ba-header-before">
              <span>{beforeLabel}</span>
            </div>
            <div className="ba-content">
              <Rows items={before} />
            </div>
          </div>

          {/* CAMADA "AFTER" (Direita) */}
          <div className="ba-layer ba-after" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
            <div className="ba-layer-header ba-header-after">
              <span>{afterLabel}</span>
            </div>
            <div className="ba-content">
              <Rows items={after} />
            </div>
          </div>

        </div>

        <div
          className="ba-handle"
          style={{ left: `${pos}%` }}
          role="slider"
          tabIndex={0}
          aria-label={`Compare ${beforeLabel.toLowerCase()} and ${afterLabel.toLowerCase()}`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          onKeyDown={onKeyDown}
        >
          <span className="ba-grip"><IconArrowsHorizontal size={18} aria-hidden="true" /></span>
        </div>
      </div>
    </section>
  );
}