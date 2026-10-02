import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home">
      <section className="home-hero">
        <h1>Hi, I'm Tristan Bielby</h1>
        <p className="home-tagline">
          I build data and AI-powered applications.
        </p>
      </section>

      <section className="home-mission">
        <h2>Mission</h2>
        <p>
          My mission is to turn data into useful, reliable software, building
          tools that help people make better decisions while I keep learning
          and improving as a developer.
        </p>
      </section>

      <div className="home-buttons">
        <Link to="/about" className="button">About Me</Link>
        <Link to="/projects" className="button button-secondary">
          View Projects
        </Link>
      </div>
    </main>
  );
}

export default Home;