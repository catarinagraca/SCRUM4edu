// Lista única das etapas do curso, pela ordem em que aparecem.
// Para acrescentar uma página: adiciona aqui uma linha e, no App.jsx,
// associa o hash ao componente em COURSE_PAGES.
// O contador, a barra de progresso, o Next/Back e o Header ajustam-se sozinhos.
export const COURSE_STEPS = [
  { hash: "#intro-guide", label: "Intro" },
  { hash: "#ceremonies", label: "Scrum ceremonies" },
  { hash: "#interactive-guide", label: "The learning cycle" },
  { hash: "#acceptance-criteria", label: "Acceptance criteria" },
  { hash: "#grading", label: "Fair grading" },
];