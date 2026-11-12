import Hero from "../components/Hero";
import "./ContactStyles.css";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been submitted.");
    e.target.reset();
  };

  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        title="Contact Us"
        text="We would love to hear from you."
        btnClass="hide"
      />

      <section className="contact-container">

        <div className="contact-heading">
          <h1>Get In Touch</h1>
          <p>
            Have questions about your next trip?
            Contact us and we will be happy to help.
          </p>
        </div>

        <div className="contact-content">

          <div className="contact-info">
            <h2>Contact Information</h2>

            <div className="info-box">
              <span>📍</span>
              <div>
                <h3>Our Location</h3>
                <p>Pakistan</p>
              </div>
            </div>

            <div className="info-box">
              <span>📧</span>
              <div>
                <h3>Email Us</h3>
                <p>info@trippy.com</p>
              </div>
            </div>

            <div className="info-box">
              <span>📞</span>
              <div>
                <h3>Call Us</h3>
                <p>+92 300 1234567</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h2>Send Us A Message</h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                required
              />

              <input
                type="text"
                placeholder="Subject"
                required
              />

              <textarea
                placeholder="Write Your Message"
                rows="6"
                required
              ></textarea>

              <button type="submit">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>
    </>
  );
}

export default Contact;