import Footer from "./components/Footer";
import Hero from "./components/Hero/Hero";
import FAQ from "./components/FAQ";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import Contact from "./components/Contact";
import Particle from "./components/Particles/Particle";
import { Fragment, useState } from "react";
import Header from "./components/Header/Header";
import { useFeatureStore } from "./components/GlobalStore/Store";
import { useHidePageOverflow } from "./utils/toggle-page-overflow";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const fullScreenFeature = useFeatureStore((state) => state.fullScreenFeature);
  useHidePageOverflow(!!fullScreenFeature);

  return (
    // <div className="relative w-full">
    <div id="main-container" className="relative w-full h-screen scroll-smooth snap-mandatory snap-y overflow-x-hidden font-body ">
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Particle />
      <Hero isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <FeaturesSection />
      <FAQ />
      <Contact />
      <Footer />
    </div>
    // </div>
  );
}

// text-[#161616] dark:text-[#FAFAFA]
