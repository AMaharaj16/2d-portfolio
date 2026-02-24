export default function Projects() {
  return (
    <section>
      <h1 className="page-title">Projects</h1>

      <div className="card">
        <h2>CodeBuddy</h2>
        <p>Full-stack code complexity analyzer with runtime and memory tracking.</p>
        <ul>
          <li>React frontend with live analysis</li>
          <li>FastAPI backend for execution + measurement</li>
          <li>Complexity model comparison using regression</li>
        </ul>
      </div>

      <div className="card">
        <h2>Pac-Man Game</h2>
        <p>Python OOP implementation with BFS pathfinding.</p>
        <ul>
          <li>Custom collision detection</li>
          <li>Grid-based movement system</li>
          <li>Enemy AI using graph traversal</li>
        </ul>
      </div>

      <div className="card">
        <h2>2048 Game</h2>
        <p>Matrix-based logic implementation with animated UI.</p>
        <ul>
          <li>Clean separation of game logic and rendering</li>
          <li>Object-oriented structure</li>
        </ul>
      </div>
    </section>
  );
}