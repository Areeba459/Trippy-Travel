import Hero from "../components/Hero";
import "./ServiceStyles.css";

const services = [
  {
    icon: "✈️",
    title: "Flight Booking",
    description:
      "Book your flights easily and travel to your favourite destinations around the world.",
  },
  {
    icon: "🏨",
    title: "Hotel Booking",
    description:
      "Find comfortable hotels and enjoy a relaxing stay during your travel journey.",
  },
  {
    icon: "🌍",
    title: "Travel Planning",
    description:
      "Plan your trips with us and explore amazing places with unforgettable experiences.",
  },
  {
    icon: "🚗",
    title: "Transport Services",
    description:
      "Enjoy convenient transportation services for a comfortable and safe journey.",
  },
  {
    icon: "🧭",
    title: "Tour Guides",
    description:
      "Explore new places with experienced guides and discover local attractions.",
  },
  {
    icon: "🎒",
    title: "Adventure Tours",
    description:
      "Experience exciting adventures and create beautiful memories around the world.",
  },
];

function Service() {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
        title="Our Services"
        text="Explore the world with our amazing travel services."
        btnClass="hide"
      />

      <section className="service-page">
        <div className="service-heading">
          <h1>Our Services</h1>
          <p>
            We provide everything you need to make
            your journey comfortable, easy and memorable.
          </p>
        </div>

        <div className="service-container">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                {service.icon}
              </div>

              <h2>{service.title}</h2>

              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Service;