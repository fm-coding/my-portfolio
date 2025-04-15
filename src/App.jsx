import "./App.css";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import { HeroMain } from "./components/heroSection/HeroMain";
import SubHeroSection from "./components/heroSection/SubHeroSection";
import Navbarmain from "./components/navbar/Navbarmain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";
import HeroGradient from "./components/heroSection/HeroGradient";
import FooterMain from "./components/footer/FooterMain";

import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <main className="font-body">
        <Navbarmain />
        <HeroMain />
        <HeroGradient />
        <SubHeroSection />
        <AboutMeMain />
        <SkillsMain />
        <SubSkills />
        <ExperienceMain />
        <ContactMeMain />
        <FooterMain />
      </main>
    </HashRouter>
  );
}

export default App;
