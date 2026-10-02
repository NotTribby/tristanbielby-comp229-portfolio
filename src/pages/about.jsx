function About() {
  return (
    <main className="about">
      <h1>About Me</h1>

      <div className="about-content">
        <img
          src="/images/headshoulder_pic.JPEG"
          alt="Headshot of Tristan Bielby"
          className="about-photo"
        />

        <div className="about-text">
          <h2>Tristan Bielby</h2>

          <p>
            I'm a second-year AI Software Engineering Technology student at
            Centennial College. I'm mainly focused on machine learning and data, building projects with
            Python, SQL, Flask, and Pandas.
          </p>

          <a
            href="/Tristan_Bielby_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            View My Resume (PDF)
          </a>
        </div>
      </div>
    </main>
  );
}

export default About;