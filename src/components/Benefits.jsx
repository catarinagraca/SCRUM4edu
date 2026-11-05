import { Compass, Eye, UserCheck, RefreshCw } from "lucide-react";
import BenefitItem from "./BenefitItem";

const benefits = [
  {
    icon: Compass,
    tone: "blue",
    title: "Autonomy",
    text: "Teams plan and organise their own work. You guide, they steer.",
  },
  {
    icon: Eye,
    tone: "indigo",
    title: "Transparency",
    text: "A shared board shows who is doing what, so no effort stays hidden.",
  },
  {
    icon: UserCheck,
    tone: "green",
    title: "Accountability",
    text: "Every task has an owner and a daily check-in. No one hides in the group.",
  },
  {
    icon: RefreshCw,
    tone: "amber",
    title: "Regular feedback",
    text: "Short sprints let you spot problems in week one, not on deadline day.",
  },
];

export default function Benefits() {
  return (
    <section className="benefits" id="benefits">
      <h2>Why use SCRUM in the classroom?</h2>
      <p className="benefits-sub">Immediate advantages for you and your students.</p>
      <ul>
        {benefits.map((benefit) => (
          <BenefitItem key={benefit.title} {...benefit} />
        ))}
      </ul>
    </section>
  );
}
