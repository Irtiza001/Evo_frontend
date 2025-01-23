import { useEffect, useState } from "react";
import Slider from "react-slick";
import Navbar from "../../components/Navbar";
import { Box} from "@mui/material";
import { motion } from "framer-motion"; // Import framer-motion for animation

const AutoSlider = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer to trigger zoom-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Stop observing once it's in view
          }
        });
      },
      { threshold: 0.5 } // Trigger animation when 50% of the element is visible
    );

    const section = document.querySelector("#autoSliderSection");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.disconnect();
      }
    };
  }, []);

  const slickSettings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <main className="relative bg-[url('/images/about/aboutbg.png')]  h-full md:h-96 bg-cover bg-center">
      <div className="relative z-20">
      <Box sx={{
           padding: {
            xs: "1rem", // Smallest screens
            sm: "1rem 1.5rem", // Small screens
            md: "1rem 2rem", // Medium screens
            lg: "1rem 6rem", // Large screens
            xl: "1rem 4rem", // Extra large screens
          },
        }}> <Navbar /> </Box>
      </div>
      <div
        id="autoSliderSection"
        className={` text-white overflow-hidden ${
          isVisible ? "animate-zoom-in" : ""
        }`}
      >
        <div className="absolute inset-0 bg-white/5"></div>

        {/* Slider Content */}
        <div className="relative z-10 h-full mt-6 ml-14">
          <Slider {...slickSettings}>
            <div className="h-96 flex items-center justify-start px-6 md:px-12">
              <motion.div
                className="max-w-lg"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <h1 className="text-[30px] font-bold mb-4 leading-tight">
                  Elevating Businesses with Exceptional Solutions
                </h1>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  Delivering high-quality SaaS solutions that redefine
                  excellence and set new industry benchmarks. Our innovative
                  services empower clients to achieve their goals with
                  efficiency and precision.
                </p>
              </motion.div>
            </div>
            <div className="h-96 flex items-center justify-start px-6 md:px-12">
              <motion.div
                className="max-w-lg"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <h1 className="text-[30px] font-bold mb-4 leading-tight">
                  Empowering Businesses, One Solution at a Time
                </h1>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  Partnering with businesses to meet their IT needs through
                  cutting-edge SaaS solutions, driving growth and success at
                  every step.
                </p>
              </motion.div>
            </div>
            <div className="h-96 flex items-center justify-start px-6 md:px-12">
              <motion.div
                className="max-w-lg"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <h1 className="text-[30px] font-bold mb-4 w-[80%] leading-tight">
                  Pioneering the Future of IT Solutions
                </h1>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  An innovative IT company dedicated to empowering enterprises.
                  Progress-driven and committed to staying ahead, we deliver
                  transformative IT solutions that enable businesses to thrive
                  globally.
                </p>
              </motion.div>
            </div>
          </Slider>
        </div>
      </div>
    </main>
  );
};

export default AutoSlider;