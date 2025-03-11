import ButtonGradient from "./assets/svg/ButtonGradient";
import Services from "./components/Services";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Catalog from "./components/Catalog";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Landing />
        <Profile />
        <Services />
        <Catalog />
        
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
