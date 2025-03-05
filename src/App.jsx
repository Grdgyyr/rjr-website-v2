import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Pricing />
        <Collaboration />
        <Benefits />
        <Roadmap />
        
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
