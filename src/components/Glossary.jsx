import { useMemo, useState } from "react";
import glossaryTerms from "../data/glossaryTerms.js";
import GlossaryHeader from "./GlossaryHeader";
import GlossarySearch from "./GlossarySearch";
import GlossaryTable from "./GlossaryTable";
import "./css/Glossary.css";

function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

export default function Glossary() {
  const [query, setQuery] = useState("");

  const filteredTerms = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) return glossaryTerms;

    return glossaryTerms.filter(({ term, context, meaning }) =>
      [term, context, meaning].some((field) => normalize(field).includes(q))
    );
  }, [query]);

  return (
    <main className="glossary">
      <div className="glossary__container">
        <GlossaryHeader
          title="Glossary: Scrum to Education Translator"
          description="Scrum words can sound complicated. This table shows what each term means in a school setting, in plain language."
        />
        <GlossarySearch value={query} onChange={setQuery} />
        <GlossaryTable terms={filteredTerms} />
      </div>
    </main>
  );
}
