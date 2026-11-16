import { ArrowLeft } from "lucide-react";

// Botão "Back" comum a todas as páginas do curso.
// Usa a mesma classe (.guide-back) e o mesmo ícone do InteractiveGuide,
// por isso herda o estilo definido em css/InteractiveGuide.css.
export default function BackButton({ onClick, label = "Back" }) {
  return (
    <div style={{ paddingTop: 24 }}>
      <a
        className="guide-back"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onClick?.();
        }}
      >
        <ArrowLeft size={16} aria-hidden="true" /> {label}
      </a>
    </div>
  );
}