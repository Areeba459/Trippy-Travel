import "./DynamicDestinationStyles.css";

const destinationData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
    title: "Italy",
    location: "Cinque Terre",
    description:
      "Discover the beautiful coastal villages of Italy.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    title: "Switzerland",
    location: "Mountain Adventure",
    description:
      "Explore beautiful mountains and nature.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Maldives",
    location: "Tropical Beach",
    description:
      "Enjoy peaceful beaches and blue ocean water.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    title: "Adventure",
    location: "Road Trip",
    description:
      "Experience an unforgettable travel adventure.",
  },
];

function DynamicDestination() {
  return (
    <div className="dynamic-destination">
      <h1>Explore Destinations</h1>

      <p>Discover amazing places around the world.</p>

      <div className="dynamic-destination-container">
        {destinationData.map((item) => (
          <div className="dynamic-destination-card" key={item.id}>
            <img src={item.image} alt={item.location} />

            <div className="dynamic-destination-info">
              <h2>{item.title}</h2>
              <h3>{item.location}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DynamicDestination;