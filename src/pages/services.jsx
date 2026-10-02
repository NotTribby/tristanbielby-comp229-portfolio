const serviceList = [
  {
    title: "Python Development",
    description: "Scripts and small applications that automate repetitive tasks, process files, or connect to APIs.",
  },
  {
    title: "Data Analysis",
    description: "Cleaning, organizing, and analyzing data with Pandas and SQL, then presenting clear results and summaries.",
  },
  {
    title: "Machine Learning Prototypes",
    description: "Building and testing simple predictive models with scikit-learn to see whether an idea works before investing more time.",
  },
  {
    title: "Web Development",
    description: "Simple, responsive websites and web apps using HTML, CSS, JavaScript, React, and Flask.",
  },
];

function Services() {
  return (
    <main className="services">
      <h1>Services</h1>
      <p className="services-intro">
        Here's what I can help with:
      </p>

      <div className="service-grid">
        {serviceList.map((service) => (
          <article key={service.title} className="service-card">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Services;