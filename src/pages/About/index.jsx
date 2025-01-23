import AboutBar from "../../components/AboutUs/AboutBar";
import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer"

import OurMission from "../../components/AboutUs/OurMission";
import OurWork from "../../components/AboutUs/OurWork";
import Slider from "../../components/AboutUs/Slider";

const About = () => {
  return (
    <div>
      {/* <Navbar  /> */}
      <Slider />
      <AboutBar />
      <AboutUs />
      <OurMission />
      <OurWork />
      <Footer />
    </div>
  );
};

export default About;
