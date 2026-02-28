export default function Coursework() {
  return (
    <section>
      <h1 className="page-title">Coursework</h1>

      <div className="education">
        <h2>University of British Columbia</h2>
        <p className="degree">
            Bachelor of Science: <strong>Computer Science Major</strong>, <strong>Mathematics Minor</strong>
        </p>
        <p className="dates-gpa">
            <strong>September 2024 – May 2028</strong><br></br>
            GPA: 4.10 / 4.33; Dean's List
        </p>
        <p className="activities">
            <strong>Activities & Clubs:</strong> UBC Sailbot, UBC Muay Thai Club, UBC Boxing Club
        </p>
      </div>
      <div className="card">
        <h3>CPSC 221 - Basic Algorithms and Data Structures</h3>
        <p>Design and analysis of basic algorithms and data structures; algorithm analysis methods, searching and sorting algorithms, basic data structures, graphs and concurrency.</p>
      </div>

      <div className="card">
        <h3>CPSC 210 - Software Construction</h3>
        <p>Design, development, and analysis of robust software components. Topics such as software design, computational models, data structures, debugging, and testing.</p>
      </div>

      <div className="card">
        <h3>CPSC 121 - Models of Computation</h3>
        <p>Physical and mathematical structures of computation. Boolean algebra and combinations logic circuits; proof techniques; functions and sequential circuits; sets and relations; finite state machines; sequential instruction execution.</p>
      </div>

      <div className="card">
        <h3>CPSC 110 - Data Structures & Algorithms</h3>
        <p>Analysis of time and space complexity, graph algorithms, sorting, and trees.Fundamental program and computation structures. Introductory programming skills. Computation as a tool for information processing, simulation and modelling, and interacting with the world.</p>
      </div>

      <div className="card">
        <h3>DSCI 100 - Introduction to Data Science</h3>
        <p>Use of data science tools to summarize, visualize, and analyze data. Sensible workflows and clear interpretations are emphasized.</p>
      </div>

      <div className="card">
        <h3>MATH 200 - Calculus III</h3>
        <p>Analytic geometry in 2 and 3 dimensions, partial and directional derivatives, chain rule, maxima and minima, second derivative test, Lagrange multipliers, multiple integrals with applications.</p>
      </div>

      <div className="card">
        <h3>MATH 101 - Calculus II</h3>
        <p>The definite integral, integration techniques, applications, modelling, infinite series.</p>
      </div>

      <div className="card">
        <h3>MATH 100 - Calculus I</h3>
        <p>Derivatives of elementary functions. Applications and modelling: graphing, optimization. </p>
      </div>
    </section>
  );
}