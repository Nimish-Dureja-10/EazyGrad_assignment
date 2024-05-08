import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hero from "./components/HeroSection/Hero";
// import IndustryPartner from "./components/IndustryPartners/IndustryPartner";
import LevelUp from "./components/LevelUp/LevelUp";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/NewFooter/Footer";
import Numbers from "./components/Numbers/Numbers";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Hero />
      <LevelUp />
      <About />
      <Contact />
      <Numbers />
      <Footer/>
      {/* <IndustryPartner /> */}
    </div>
  );
}

export default App;
