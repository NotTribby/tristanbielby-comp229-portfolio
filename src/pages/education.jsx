const educationList = [
  {
    institution: "Centennial College",
    credential: "Advanced Diploma, AI Software Engineering Technology (Co-op)",
    dates: "September 2025 – April 2028 (expected)",
  },
  {
    institution: "Lambton Central Collegiate & Vocational Institute",
    credential: "High School Diploma",
    dates: "Graduated June 2025",
  },
];

function Education() {
  return (
    <main className="education">
      <h1>Education</h1>

      <div className="education-list">
        {educationList.map((entry) => (
          <article key={entry.institution} className="education-card">
            <h2>{entry.credential}</h2>
            <p className="education-school">{entry.institution}</p>
            <p className="education-dates">{entry.dates}</p>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Education;