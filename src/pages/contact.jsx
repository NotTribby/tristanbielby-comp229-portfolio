import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault(); 
    console.log("Contact form submitted:", formData); 
    navigate("/", { state: { submittedForm: formData } });
  }

  return (
    <main className="contact">
      <h1>Contact Me</h1>

      <div className="contact-layout">
        <aside className="contact-panel">
          <h2>Get in Touch</h2>
          <p><strong>Email:</strong> tristan.bielby@gmail.com</p>
          <p><strong>Location:</strong> Sarnia, Ontario</p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a href="https://github.com/NotTribby" target="_blank" rel="noopener noreferrer">
              github.com/NotTribby
            </a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a href="https://www.linkedin.com/in/tristan-bielby-640b58398/" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/tristan-bielby-640b58398/
            </a>
          </p>
        </aside>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" name="firstName" type="text"
                 value={formData.firstName} onChange={handleChange} required />

          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" name="lastName" type="text"
                 value={formData.lastName} onChange={handleChange} required />

          <label htmlFor="phoneNumber">Contact Number</label>
          <input id="phoneNumber" name="phoneNumber" type="tel"
                 value={formData.phoneNumber} onChange={handleChange} />

          <label htmlFor="email">Email Address</label>
          <input id="email" name="email" type="email"
                 value={formData.email} onChange={handleChange} required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5"
                    value={formData.message} onChange={handleChange} required />

          <button type="submit" className="button">Send Message</button>
        </form>
      </div>
    </main>
  );
}

export default Contact;