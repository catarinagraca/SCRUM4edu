import "./css/Header.css"; 

export default function Header() {
  return (
    <header className="site-header">
      <div className="nav">
        <a className="logo" href="/">Scrum 4 edu</a>
        <nav aria-label="Main">
          <a href="#benefits">Benefits</a>
          <a href="#start">Start</a>
        </nav>
      </div>
    </header>
  );
}
