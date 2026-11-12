import "./TripStyles.css";

const tripData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    title: "Mountain Trip",
    location: "Switzerland",
    description:
      "Explore the beautiful mountains and enjoy the peaceful natural scenery.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Beach Trip",
    location: "Maldives",
    description:
      "Enjoy the beautiful beaches, blue water and unforgettable moments.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
    title: "City Trip",
    location: "Italy",
    description:
      "Discover historic places, amazing architecture and local culture.",
  },
];

function Trip() {
  return (
    <div className="trip">
      <h1>Our Trips</h1>
      <p>Choose your next unforgettable travel experience.</p>

      <div className="trip-container">
        {tripData.map((trip) => (
          <div className="trip-card" key={trip.id}>
            <img src={trip.image} alt={trip.title} />

            <div className="trip-card-content">
              <h2>{trip.title}</h2>
              <h3>{trip.location}</h3>
              <p>{trip.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trip;