import Bar from "../../components/Services/Bar";
import Hero from "../../components/Services/Hero";
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import ItSolutions from "../../components/Services/ItSolutions";
import OurPromise from "../../components/Services/OurPromise";
import SolutionCards from "../../components/Services/SolutionCards";

const Services = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <SolutionCards />
      <ItSolutions />
      <Bar />
      <OurPromise />
      <Footer />
    </div>
  );
};

export default Services;
