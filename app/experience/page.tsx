export default function Experience() {
  return (
    <section>
      <h1 className="page-title">Experience</h1>

      <div className="card">
        <h2>Software Engineer Intern</h2>
        <h3>Upgraded</h3>
        <div className="card-meta">
          <span>May 2026 - Aug 2026</span>
          <span className="card-location">Vancouver, BC</span>
        </div>
        <p>
            Upgraded is an AI BDR (Business Development Representative) platform focused on real-time messaging and lead management for sales teams. I shipped features that improved the reliability of real-time messaging and lead workflows, and eliminated race conditions in chat by redesigning async handling to keep the UI consistent under concurrency. I also built an AI Sales Coach that drafts messages and executes send, read, and open actions across 7 platforms, architecting its backend with MCP and Composio to support multiple models and streaming. <br></br>
            <br></br>
            <b>Skills & Technologies:</b>
        </p>
        <ul>
          <li>MCP</li>
          <li>Composio</li>
          <li>LLM Integration</li>
          <li>Real-Time Messaging</li>
          <li>Streaming</li>
          <li>Async Concurrency</li>
        </ul>

        <img src="/upgraded.jpg" alt="Upgraded Logo" width="200"></img>
      </div>

      <div className="card">
        <h2>Software Developer Intern</h2>
        <h3>Safe Software - Product Security Team</h3>
        <div className="card-meta">
          <span>Jan 2026 - Apr 2026</span>
          <span className="card-location">Surrey, BC</span>
        </div>
        <p>
            On Safe Software’s Product Security team, I built Python automation to triage CVEs across Black Duck, Snyk, and NIST, cutting critical-CVE analysis from days to hours and enabling 2–3 third-party dependency investigations per day. Across roughly 15 investigations I confirmed 4 exploitable critical CVEs in FME and drove their full remediation, and I screened 60–80 CVEs against internal tracking to surface unmanaged critical risks in production. FME is a large-scale data integration platform used across enterprise and government, so this work strengthened my understanding of software supply chain security in large-scale systems. <br></br>
            <br></br>
            <b>Skills & Technologies:</b>
        </p>
        <ul>
          <li>Python</li>
          <li>Snyk</li>
          <li>Black Duck</li>
          <li>GitHub</li>
          <li>Jira</li>
          <li>CVE Analysis/Assessment</li>
          <li>Automation Scripting</li>
        </ul>

        <img src="/safesoftware.jpg" alt="Safe Software Logo" width="300"></img>
      </div>

      <div className="card">
        <h2>Software Pathfinding Lead</h2>
        <h3>UBC Sailbot</h3>
        <div className="card-meta">
          <span>Sep 2025 - Present</span>
          <span className="card-location">Vancouver, BC</span>
        </div>
        <p>
            UBC Sailbot is a student engineering team building a fully autonomous sailing vessel for a 1,500km Vancouver-to-Alaska voyage. I joined the pathfinding subteam as a software developer in September 2025 and became Pathfinding Lead in February 2026, now leading a 7-person subteam building the ROS navigation stack. I reworked the wind cost function to enforce no-go zone avoidance, preventing invalid RRT* paths, and implemented a rolling wind average to debounce noisy sensor data and stabilize path decisions at 2Hz. I validated pathfinding across 7 on-water tests, comparing simulated versus real boat behavior at varying sail angles.<br></br>
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

        <img src="/ubcsailbot.png" alt="UBC Sailbot Logo" width="200"></img>
      </div>
    </section>
  );
}
