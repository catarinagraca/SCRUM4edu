import { motion } from "framer-motion";

export default function GlossaryRow({ term, context, meaning }) {
  return (
    <motion.tr
      className="glossary-row"
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <td className="glossary-row__term">{term}</td>
      <td className="glossary-row__context">{context}</td>
      <td className="glossary-row__meaning">{meaning}</td>
    </motion.tr>
  );
}
