import Footer from "./components/Footer";
import Hero from "./components/Hero/Hero";
import FAQ from "./components/FAQ";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import Contact from "./components/Contact";
import Particle from "./components/Particles/Particle";
import Header from "./components/Header/Header";
import { useSnap } from "./utils/toggle-page-overflow";

export default function App() {
  useSnap(true);

  return (
    <>
      <div id="main-container" className="relative font-body">
      <Header />
        <Particle />
        <Hero />
        <FeaturesSection />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
