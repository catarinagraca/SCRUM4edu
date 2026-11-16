// Guarda a user story validada, para a página de Acceptance Criteria a poder usar.
const STORAGE_KEY = "scrum4edu-user-story";

export function loadUserStory() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved && typeof saved === "object" ? saved : null;
  } catch {
    return null;
  }
}

export function saveUserStory(story) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(story));
  } catch {
    // Sem localStorage (ex.: modo privado): a story fica só em memória
  }
}

export function clearUserStory() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignorar
  }
}