import { motion } from "framer-motion";
import { Compass, Eye, UserCheck, RefreshCw } from "lucide-react";
import BenefitItem from "./BenefitItem";
import BeforeAfterSlider from "./BeforeAfterSlider";
import "./css/Benefits.css";

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
// Contentor da lista: controla o atraso em cascata (stagger) dos BenefitItems
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2 // Atraso de 0.2 segundos entre a entrada de cada cartão
    }
  }
};

export default function Benefits() {
  return (
    <section className="benefits" id="benefits">
      
      {/* Animação do cabeçalho da secção */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }} // Dispara quando 80% do cabeçalho estiver visível
        transition={{ duration: 0.6 }}
      >

      
      <div className="benefits-container">
      <div className="benefits-left">
        
      <div>
        <h2>Why use SCRUM in the classroom?</h2>
        <p className="benefits-sub">Immediate advantages for you and your students.</p>
      </div>

      {/* Lista animada */}
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Dispara quando 20% da lista estiver visível
        >
        {benefits.map((benefit) => (
          <BenefitItem key={benefit.title} {...benefit} />
        ))}
      </motion.ul>

      </div>
      <div className="benefits-right">
        <BeforeAfterSlider />
        <div className="benefits-download-row">
          <a
            className="btn primary benefits-download"
            href={`${import.meta.env.BASE_URL}Scrum4edu-Teachers-Starter-Kit.pdf`}
            download="Scrum4edu-Teachers-Starter-Kit.pdf"
          >
            Download your Starter Kit
          </a>
        </div>
      </div>
      </div>
      
      </motion.div>
    </section>
  );
}
