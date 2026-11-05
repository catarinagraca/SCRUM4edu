import { AnimatePresence } from "framer-motion";
import GlossaryRow from "./GlossaryRow";
import "./css/GlossaryTable.css";

export default function GlossaryTable({ terms }) {
  return (
    <div className="glossary-table__wrapper">
      <table className="glossary-table">
        <thead>
          <tr>
            <th className="glossary-table__th glossary-table__th--term">Corporate Term</th>
            <th className="glossary-table__th glossary-table__th--context">School Context</th>
            <th className="glossary-table__th glossary-table__th--meaning">What it means</th>
          </tr>
        </thead>
        <tbody>
          <AnimatePresence initial={false}>
            {terms.map((item) => (
              <GlossaryRow key={item.term} {...item} />
            ))}
          </AnimatePresence>
        </tbody>
      </table>

      {terms.length === 0 && (
        <p className="glossary-table__empty">No terms found. Try another word.</p>
      )}
    </div>
  );
}
