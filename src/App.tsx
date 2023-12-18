import About from "./components/About";
import AboutUs from "./components/About";
import Assets from "./components/Assets";
import Contact from "./components/Contact";
import Experts from "./components/Experts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Counter from "./components/Stats";
import Strategy from "./components/Strategy";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="">
      <Hero />
      <AboutUs />
      <Strategy />
      <Assets />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Counter />
      <Experts />
      <Contact />
      <Footer />
     
    </div>
  );
}

export default App;
