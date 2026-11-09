import './css/StarterKit.css'

// The PDF lives in the "public" folder, so Vite serves it from the site root.
const KIT_URL = `${import.meta.env.BASE_URL}Scrum4edu-Teachers-Starter-Kit.pdf`

const contents = [
  {
    color: 'yellow',
    title: 'Kanban board',
    text: 'A board with To do, Doing and Done. Print one for each team.',
  },
  {
    color: 'mint',
    title: 'Student role cards',
    text: 'Product Owner, Scrum Master and Developer cards, ready to cut out.',
  },
  {
    color: 'salmon',
    title: 'Task notes',
    text: 'A sheet of sticky notes for writing tasks. Real sticky notes work too.',
  },
]

function StarterKit() {
  return (
    <main className="kit">
      <header className="kit-header">
        <span className="kit-tag">For teachers</span>
        <h1>
          Your <span className="kit-squiggle">Starter Kit</span>, ready to print
        </h1>
        <p className="kit-subtitle">
          One PDF with everything you need to run Scrum in your class tomorrow.
        </p>

        <a
          className="kit-download"
          href={KIT_URL}
          download="Scrum4edu-Teachers-Starter-Kit.pdf"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 3v12" />
            <path d="M7 11l5 5 5-5" />
            <path d="M5 21h14" />
          </svg>
          Download the Starter Kit (PDF)
        </a>
        <p className="kit-meta">PDF · 4 pages · 13 KB · A4, print-ready</p>
      </header>

      <section className="kit-inside">
        <h2>What&apos;s inside</h2>
        <ul className="kit-contents">
          {contents.map((item, index) => (
            <li key={item.title} className={`kit-card kit-card--${item.color}`}>
              <span className="kit-number">{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default StarterKit
