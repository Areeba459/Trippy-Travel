import Hero from "../components/Hero";
import Destination from "../components/Destination";
import DynamicDestination from "../components/DynamicDestination";
import Trip from "../components/Trip";

function Home() {
  return (
    <>
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        buttonText="Travel Plan"
        btnClass="show"
        url="#about"
      />

      <Destination />
      <DynamicDestination />
      <Trip />
    </>
  );
}

export default Home;