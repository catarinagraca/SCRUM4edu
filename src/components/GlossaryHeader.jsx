import { motion } from "framer-motion";
import "./css/GlossaryHeader.css";

export default function GlossaryHeader({ title, description }) {
  return (
    <motion.header
      className="glossary-header"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="glossary-header__title">{title}</h1>
      <p className="glossary-header__description">{description}</p>
    </motion.header>
  );
}
