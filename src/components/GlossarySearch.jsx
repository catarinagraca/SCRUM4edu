import { IconSearch, IconX } from "@tabler/icons-react";
import "./css/GlossarySearch.css";

export default function GlossarySearch({ value, onChange }) {
  return (
    <div className="glossary-search">
      <IconSearch className="glossary-search__icon" size={16} stroke={2} />
      <input
        type="text"
        className="glossary-search__input"
        placeholder="Search a term..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search a term"
      />
      {value && (
        <button
          type="button"
          className="glossary-search__clear"
          onClick={() => onChange("")}
          aria-label="Clear search"
        >
          <IconX size={14} stroke={2} />
        </button>
      )}
    </div>
  );
}
