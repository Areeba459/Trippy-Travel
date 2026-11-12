import "./DestinationStyles.css";

const destinations = [
  {
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
    title: "Cinque Terre",
    description:
      "Explore the beautiful coastal villages of Italy.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    title: "Mountain Adventure",
    description:
      "Enjoy peaceful mountains and breathtaking views.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Tropical Beach",
    description:
      "Relax on beautiful beaches and enjoy the ocean.",
  },
];

function Destination() {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>

      <p>
        Tours give you the opportunity to see a lot, within a time frame.
      </p>

      <div className="destination-cards">
        {destinations.map((destination, index) => (
          <div className="destination-card" key={index}>
            <img
              src={destination.image}
              alt={destination.title}
            />

            <h2>{destination.title}</h2>

            <p>{destination.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destination;