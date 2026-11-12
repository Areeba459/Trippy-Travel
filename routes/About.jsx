import Hero from "../components/Hero";
import "./AboutStyles.css";

function About() {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1"
        title="About Us"
        text="Discover the world and create unforgettable memories."
        btnClass="hide"
      />

      <section className="about-container">

        <div className="about-heading">
          <h1>About Trippy</h1>
          <p>
            Welcome to Trippy! Your trusted partner
            for exploring the beautiful world.
          </p>
        </div>

        <div className="about-content">

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828"
              alt="Travel adventure"
            />
          </div>

          <div className="about-text">
            <h2>Explore The World With Us</h2>

            <p>
              Trippy is a travel website that helps
              people explore beautiful destinations
              around the world.
            </p>

            <p>
              Our mission is to make your journey
              memorable, comfortable and easy.
              We provide amazing travel experiences
              for everyone.
            </p>

            <p>
              Whether you love mountains, beaches
              or adventures, Trippy is here to help
              you plan your perfect trip.
            </p>
          </div>

        </div>

        <div className="about-features">
          <div className="about-box">
            <h3>🌍</h3>
            <h2>Best Destinations</h2>
            <p>Explore beautiful places around the world.</p>
          </div>

          <div className="about-box">
            <h3>✈️</h3>
            <h2>Easy Travel</h2>
            <p>Make your travel planning simple and easy.</p>
          </div>

          <div className="about-box">
            <h3>⭐</h3>
            <h2>Great Experience</h2>
            <p>Create unforgettable travel memories.</p>
          </div>
        </div>

      </section>
    </>
  );
}

export default About;