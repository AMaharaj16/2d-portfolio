"use client";

import { useState } from "react";

type Project = {
  title: string;
  date?: string;
  description: string;
  types: string[];
  languages: string[];
  bullets: string[];
  github?: string;
};

const projects: Project[] = [
  {
    title: "CVEContext (In Progress)",
    date: "Aug 2026",
    description:
      "In-progress .NET 8 Blazor app that scans npm dependencies for known vulnerabilities.",
    types: ["Full Stack"],
    languages: ["C#"],
    github: "https://github.com/AMaharaj16/CVE-Context",
    bullets: [
      "Building a .NET 8 Blazor app on Azure to scan npm dependencies for known vulnerabilities.",
      "Integrating the GitHub REST API and OSV.dev to match dependencies against CVEs by version.",
      "Correlating vulnerable-package imports to source files, using the OpenAI API for prioritized risk tiers.",
    ],
  },
  {
    title: "InterviewIQ (AI Hackathon 2026)",
    date: "Jun 2026",
    description:
      "Real-time AI interview simulator that grades users on their hiring decisions, built at UC Berkeley's AI Hackathon.",
    types: ["Full Stack", "Machine Learning", "Hackathons"],
    languages: ["JavaScript/TypeScript"],
    github: "https://github.com/evananderson06/berkeley-ai-26",
    bullets: [
      "Built a real-time AI interview simulator (Next.js, TypeScript) that grades users on hiring decisions.",
      "Architected a multi-agent Claude workflow that generates, role-plays, and grades realistic candidates.",
      "Engineered a live Deepgram voice pipeline (Nova-3 STT, Aura-2 TTS) over WebSockets with barge-in.",
    ],
  },
  {
    title: "Huddle (nwHacks 2026)",
    date: "Jan 2026",
    description:
      "Private family-oriented social platform with real-time interactivity.",
    types: ["Full Stack", "Hackathons"],
    languages: ["JavaScript/TypeScript"],
    github: "https://github.com/jeffh11/NwHacks",
    bullets: [
      "Built full-stack application using Next.js (TypeScript) and Supabase with PostgreSQL.",
      "Implemented authentication, media posting, and real-time presence tracking.",
      "Developed a daily memory game with persistent leaderboard functionality.",
      "Designed an accessible, mobile-friendly UI to promote engagement.",
    ],
  },
  {
    title: "CodeBuddy",
    date: "Oct 2025 – Jan 2026",
    description:
      "Full-stack empirical performance analysis platform for JavaScript programs.",
    types: ["Full Stack", "Systems"],
    languages: ["JavaScript/TypeScript"],
    github: "https://github.com/AMaharaj16/CodeBuddy",
    bullets: [
      "Built React + Node.js/Express app on AWS EC2 with nginx, pm2, and Vercel rewrites for HTTPS proxy.",
      "Sandboxed execution in an isolated VM with per-IP rate limiting (30 req/min) for untrusted code.",
      "Profiled runtime and memory, fitting results to a custom regression engine across 6 complexity classes.",
      "Created interactive Chart.js visualizations to analyze performance trends across scaled inputs.",
    ],
  },
  {
    title: "Must Dance (HackCamp 2025)",
    date: "Nov 2025",
    description:
      "Machine learning–powered dance scoring web app built in a 24-hour hackathon.",
    types: ["Full Stack", "Machine Learning", "Computer Vision", "Hackathons"],
    languages: ["Python", "JavaScript/TypeScript"],
    github: "https://github.com/boydhamilton/mustdance",
    bullets: [
      "Co-developed React frontend and Flask backend to process and evaluate user-recorded dance videos.",
      "Built a custom pose-based scoring system on top of MediaPipe landmarks to evaluate movement accuracy.",
      "Integrated FFmpeg and OpenCV for video processing, frame extraction, and preprocessing pipeline.",
      "Shipped a working MVP within 24 hours in a 3-person team.",
    ],
  },
  {
    title: "Java Gym Progress Tracker",
    date: "Jul 2025",
    description:
      "Object-oriented workout tracking application built with MVC architecture.",
    types: ["Systems"],
    languages: ["Java"],
    github: "https://github.com/AMaharaj16/Gym-Progress-Tracker",
    bullets: [
      "Designed domain models including Workout, Exercise, and WorkoutLog with clean separation of concerns.",
      "Implemented JSON-based persistence for saving and loading structured workout data.",
      "Developed console-based interface followed by Java Swing GUI without modifying core model layer.",
      "Integrated one-rep max prediction logic using strength estimation formulas.",
    ],
  },
  {
    title: "Pac-Man Game",
    date: "Jun 2025 – Sep 2025",
    description:
      "Object-oriented Python recreation of the classic arcade game.",
    types: ["Game Development"],
    languages: ["Python"],
    github: "https://github.com/AMaharaj16/Pac-Man-Game-Project",
    bullets: [
      "Implemented grid-based movement and custom collision detection engine.",
      "Built enemy AI using BFS graph traversal for pathfinding.",
      "Structured game entities using encapsulated OOP design principles.",
      "Designed modular game loop with state management.",
    ],
  },
  {
    title: "2048 Game",
    date: "May 2025",
    description:
      "Matrix-driven 2048 clone exploring algorithmic game logic design.",
    types: ["Game Development"],
    languages: ["Python"],
    github: "https://github.com/AMaharaj16/2048-Game-Project",
    bullets: [
      "Implemented tile merging and shifting logic using 2D array transformations.",
      "Separated core game logic from Pygame animation layer.",
      "Built clean, modular object-oriented architecture.",
      "Focused on deterministic state transitions and testing edge cases.",
    ],
  },
  {
    title: "Predicting Newsletter Subscriptions with KNN",
    date: "Apr 2025",
    description:
      "Supervised machine learning project evaluating predictive power of user behavior features.",
    types: ["Machine Learning"],
    languages: ["R"],
    github: "https://github.com/kathleenramsey/dsci100_group23",
    bullets: [
      "Built KNN classifier using tidymodels in R.",
      "Performed data cleaning, upsampling, and 5-fold cross-validation.",
      "Evaluated accuracy, precision, and recall metrics.",
      "Analyzed weak predictive signal across selected behavioral features.",
    ],
  },
];

const typeOptions = ["All", "Full Stack", "Machine Learning", "Computer Vision", "Systems", "Game Development", "Hackathons"];
const languageOptions = ["All", "JavaScript/TypeScript", "Python", "Java", "C#", "R"];

export default function Projects() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>(["All"]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(["All"]);
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  const toggle = (value: string, selected: string[], setter: any) => {
    if (value === "All") return setter(["All"]);
    let updated = selected.includes(value)
      ? selected.filter((v) => v !== value)
      : [...selected.filter((v) => v !== "All"), value];
    if (updated.length === 0) updated = ["All"];
    setter(updated);
  };

  const filtered = projects.filter((p) => {
    const typeMatch =
      selectedTypes.includes("All") ||
      p.types.some((t) => selectedTypes.includes(t));

    const langMatch =
      selectedLanguages.includes("All") ||
      p.languages.some((l) => selectedLanguages.includes(l));

    return typeMatch && langMatch;
  });

  return (
    <section className="projects-section container">
    <h1 className="page-title">Projects</h1>

    <div className="filter-bar">
        <div className="dropdown">
        <button onClick={() => setShowTypeDropdown(!showTypeDropdown)}>
            Project Type
        </button>
        {showTypeDropdown && (
            <div className="dropdown-menu">
            {typeOptions.map((opt) => (
                <label key={opt}>
                <input
                    type="checkbox"
                    checked={selectedTypes.includes(opt)}
                    onChange={() => toggle(opt, selectedTypes, setSelectedTypes)}
                />
                {opt}
                </label>
            ))}
            </div>
        )}
        </div>

        <div className="dropdown">
        <button onClick={() => setShowLangDropdown(!showLangDropdown)}>
            Language
        </button>
        {showLangDropdown && (
            <div className="dropdown-menu">
            {languageOptions.map((opt) => (
                <label key={opt}>
                <input
                    type="checkbox"
                    checked={selectedLanguages.includes(opt)}
                    onChange={() =>
                    toggle(opt, selectedLanguages, setSelectedLanguages)
                    }
                />
                {opt}
                </label>
            ))}
            </div>
        )}
        </div>
    </div>

    <p className="project-count">{filtered.length} projects found</p>

    <div className="projects-grid">
        {filtered.map((project) => (
        <div className="card" key={project.title}>
            <h2>{project.title}</h2>
            {project.date && <p className="project-date">{project.date}</p>}
            <p>{project.description}</p>
            <ul>
            {project.bullets.map((b, i) => (
                <li key={i}>{b}</li>
            ))}
            </ul>
            {project.github && (
            <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
            >
                View on GitHub →
            </a>
            )}
        </div>
        ))}
    </div>
    </section>
  );
}
