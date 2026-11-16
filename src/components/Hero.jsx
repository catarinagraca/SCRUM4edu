import { ArrowRight } from "lucide-react";
import SprintBoard from "./SprintBoard";
import "./css/Hero.css"; 

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <h1>
            Put an end to unfair group work.
          </h1>
          <p className="lead">
            Scrum gives student teams a simple routine that makes everyone’s
            contribution visible, so you spend less time chasing and more time
            teaching.
          </p>
          <div className="actions">
            <a className="btn primary" href="#intro-guide">
              Start the free course <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="btn ghost" href="#benefits">See the benefits</a>
          </div>
        </div>
        <SprintBoard />
      </div>
    </section>
  );
}