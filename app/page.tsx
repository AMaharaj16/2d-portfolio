export default function Home() {
  return (
    <section>
      <h1 className="page-title">About Me</h1>

      {/* High-level overview */}
      <p>
        Hi, I’m Aayush. I’m a third-year Computer Science major with a Math minor at UBC. I enjoy building things that are both practical and thoughtfully designed, whether that is a full-stack web application, a backend service, or a small machine learning project. What draws me to software is the mix of logic and creativity. There is something really satisfying about taking an idea, breaking it down, and turning it into something that actually works.
      </p>

      <p>
        Lately, I’ve been especially interested in full-stack development, security, and machine learning. I like thinking about how systems fit together, how data flows through them, and how to make them more efficient and reliable.
      </p>

      {/* Technical stack */}
      <p>
        <strong>Programming Languages</strong><br />
        <span className="skill-badge">Python</span>
        <span className="skill-badge">C / C++</span>
        <span className="skill-badge">JavaScript</span>
        <span className="skill-badge">TypeScript</span>
        <span className="skill-badge">Java</span>
        <span className="skill-badge">HTML</span>
        <span className="skill-badge">CSS</span>
        <span className="skill-badge">R</span>
      </p>

      <p>
        <strong>Frameworks & Libraries</strong><br />
        <span className="skill-badge">MCP</span>
        <span className="skill-badge">React</span>
        <span className="skill-badge">Next.js</span>
        <span className="skill-badge">Node.js</span>
        <span className="skill-badge">Express.js</span>
        <span className="skill-badge">Swing</span>
        <span className="skill-badge">JUnit</span>
        <span className="skill-badge">Pytest</span>
        <span className="skill-badge">Pygame</span>
      </p>

      <p>
        <strong>Cloud & Infrastructure</strong><br />
        <span className="skill-badge">AWS</span>
        <span className="skill-badge">Azure</span>
        <span className="skill-badge">GCP</span>
        <span className="skill-badge">Supabase</span>
        <span className="skill-badge">PostgreSQL</span>
        <span className="skill-badge">Docker</span>
        <span className="skill-badge">Kubernetes</span>
        <span className="skill-badge">Ubuntu</span>
        <span className="skill-badge">ROS</span>
      </p>

      <p>
        <strong>Tools</strong><br />
        <span className="skill-badge">Black Duck</span>
        <span className="skill-badge">Snyk</span>
        <span className="skill-badge">Git</span>
        <span className="skill-badge">GitHub</span>
      </p>

      {/* Story */}
      <p>
        I came to UBC from Calgary without a clear plan. I knew I wanted to pursue something technical because math and physics had always been strengths of mine, but I had barely coded in high school. My older sister studied Computer Science at UBC and encouraged me to give it a try through a Bachelor of Science. It felt like a bit of a gamble at the time, especially since it meant stepping away from traditional engineering paths.
      </p>

      <p>
        Pretty quickly, though, I realized I genuinely enjoyed it. Courses in computer architecture, object-oriented programming, and data structures showed me how much I liked the structure and depth of the field. I liked that problems had clear logic behind them, but also room for creativity in how you solved them.
      </p>

      <p>
        Outside of class, I’ve really enjoyed being part of collaborative technical environments like UBC Sailbot. Working on real systems with a team has taught me a lot about communication, iteration, and writing code that other people can actually work with. It has made me appreciate that good software is rarely built alone.
      </p>

      {/* Personal side + direction */}
      <p>
        When I’m not coding, I spend time at the gym, go running, hike whenever I can, and follow cars and hockey pretty closely. Staying active helps me reset and come back to technical problems with a clearer head.
      </p>

      <p>
        Long term, I hope to grow into a strong software engineer who can contribute to meaningful, well-designed systems. I am still early in my journey, but I’m excited to keep learning, building, and improving with every project I take on.
      </p>
    </section>
  );
}