import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import HomePage from "../pages/HomePage";
import Contact from "./Contact";
import AboutPage from "../pages/AboutPage";
import TechnologyPage from "../pages/TechnologyPage";
import QualityAssurancePage from "../pages/QualityAssurancePage";
import CareersPage from "../pages/CareersPage";
import YarnPage from "../pages/YarnPage";
import KnittingPage from "../pages/KnittingPage";
import CarmentsPage from "../pages/CarMentsPage";
import ContactPage from "../pages/CotactUsPage";


function Layout() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/quality-assurance" element={<QualityAssurancePage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/yarn" element={<YarnPage/>} />
        <Route path="/knitting" element={<KnittingPage />} />
        <Route path="/carments" element={<CarmentsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Contact />
      <Footer />
    </div>
  );
}

export default Layout;
