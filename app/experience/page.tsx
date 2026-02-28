export default function Experience() {
  return (
    <section>
      <h1 className="page-title">Experience</h1>

      <div className="card">
        <h2>Software Developer Intern</h2>
        <h3>Safe Software - Product Security Team</h3>
        <div className="card-meta">
          <span>Jan 2026 - Apr 2026</span>
          <span className="card-location">Surrey, BC</span>
        </div>
        <p>
            At Safe Software, I developed internal Python automation tools to support vulnerability detection and security analysis across production codebases. I worked with tools like Snyk and Black Duck to identify, analyze, and prioritize open-source dependency risks, collaborating with engineering teams to assess CVE impact and support remediation efforts. This role strengthened my understanding of software supply chain security and secure development practices in large-scale systems. <br></br>
            <br></br>
            <b>Skills & Technologies:</b>
        </p>
        <ul>
          <li>Python</li>
          <li>Snyk</li>
          <li>Blackduck</li>
          <li>GitHub</li>
          <li>Jira</li>
          <li>CVE Analysis/Assessment</li>
          <li>Automation Scripting</li>
        </ul>

        <img src="/safesoftware.jpg" alt="Safe Software Logo" width="300"></img>
      </div>

      <div className="card">
        <h2>Pathfinding Software Developer (Incoming Lead - May 2026)</h2>
        <h3>UBC Sailbot</h3>
        <div className="card-meta">
          <span>Sep 2025 - Present</span>
          <span className="card-location">Vancouver, BC</span>
        </div>
        <p>
            As part of UBC Sailbot’s software team, I develop local pathfinding algorithms within a ROS-based autonomous navigation system. I work with AIS and sensor data to design navigation logic that accounts for dynamic obstacles and maritime constraints. I also participate in simulation and on-water testing to validate system performance, collaborating within a 20+ member team to integrate navigation into a fully autonomous vessel.<br></br>
            <br></br>
            <b>Skills & Technologies:</b>
        </p>
        <ul>
          <li>Python</li>
          <li>ROS</li>
          <li>Docker</li>
          <li>GitHub</li>
          <li>Ubuntu</li>
          <li>Pathfinding Algorithms</li>
          <li>Simulation Testing</li>
        </ul>

        <img src="/ubcsailbot.png" alt="Safe Software Logo" width="200"></img>
      </div>
    </section>
  );
}