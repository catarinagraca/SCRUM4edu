const board = [
  { column: "To do", notes: [{ text: "Research sources", who: "Ana" }] },
  {
    column: "Doing",
    notes: [
      { text: "Draft intro", who: "Rui" },
      { text: "Make slides", who: "Mia" },
    ],
  },
  { column: "Done", notes: [{ text: "Pick topic", who: "Leo" }] },
];

export default function SprintBoard() {
  return (
    <div
      className="board"
      role="img"
      aria-label="Example sprint board with tasks assigned to students"
    >
      {board.map((col) => (
        <div className="board-col" key={col.column}>
          <h3>{col.column}</h3>
          {col.notes.map((n) => (
            <div className="note" key={n.text}>
              <span>{n.text}</span>
              <small>{n.who}</small>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
