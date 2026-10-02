const projectList = [
  {
    title: "Serie A Match Predictor",
    image: "/images/projects/serieapredictor.png",
    techStack: ["Python", "scikit-learn", "Flask",],
    role: "Solo developer. Collected and prepared match data, trained a Random Forest model to predict match results, and built a Flask web interface for it.",
    outcome: "Deployed live on Vercel, where users can pick two teams and get a predicted result.",
  },
  {
    title: "AVGO Stock Analysis Tool",
    image: "/images/projects/avgoanalysis.png",
    techStack: ["Python", "Pandas", "SQL", "Flask"],
    role: "Solo developer. Pulled Broadcom (AVGO) price data, stored it with SQL, analyzed it with Pandas, and displayed the results through Flask.",
    outcome: "A working analysis tool, and my first project using Flask, Pandas, and SQL together.",
  },
  {
    title: "AI Study Helper",
    image: "/images/projects/aistudyhelper.png",
    techStack: ["Python", "Gemini API"],
    role: "Solo developer. Built a chatbot that uses Google's Gemini API to answer study questions.",
    outcome: "A working study assistant that can explain concepts and answer questions on demand.",
  },
];

function Projects() {
  return (
    <main className="projects">
      <h1>Projects</h1>

      <div className="project-grid">
        {projectList.map((project) => (
          <article key={project.title} className="project-card">
            <img
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              className="project-image"
            />

            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <ul className="tech-tags">
              {project.techStack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>

            <p><strong>My role:</strong> {project.role}</p>
            <p><strong>Outcome:</strong> {project.outcome}</p>

          </article>
        ))}
      </div>
    </main>
  );
}

export default Projects;