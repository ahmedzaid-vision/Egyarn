import AboutUs from "../components/About";
import Assets from "../components/Assets";
import Experts from "../components/Experts";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Counter from "../components/Stats";
import Strategy from "../components/Strategy";

function HomePage() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Strategy />
      <Assets />
      <Counter />
      <Experts />
    </>
  );
}

export default HomePage;
