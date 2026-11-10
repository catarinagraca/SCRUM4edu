import "./css/NextButton.css";

// Botão de navegação comum a todas as páginas do curso.
// variant: "next" (escuro, seta à direita) ou "back" (claro, seta à esquerda)
export default function NextButton({ label, onClick, variant = "next", align = "end" }) {
  const isBack = variant === "back";

  return (
    <div className={`nav-btn-row nav-btn-row--${align}`}>
      <button
        type="button"
        className={`nav-btn nav-btn--${variant}`}
        onClick={onClick}
      >
        {isBack && <span className="nav-btn-arrow" aria-hidden="true">←</span>}
        <span>{label}</span>
        {!isBack && <span className="nav-btn-arrow" aria-hidden="true">→</span>}
      </button>
    </div>
  );
}