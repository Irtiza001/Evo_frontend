import { motion } from "framer-motion"; // Import motion from framer-motion
// import { div } from "framer-motion/client";

const AboutBar = () => {
  const slides = [
    { id: 1, label: "Innovation" },
    { id: 2, label: "Excellence" },
    { id: 3, label: "Collaboration" },
    { id: 4, label: "Customer-Centric" },
  ];

  return (
    <main className="bg-gradient-to-tr from-[#00CFF8] to-[#1a73e8] ">
  
      <motion.div
        className="flex justify-center items-center py-8 px-4 md:px-8 lg:px-16"
        initial={{ opacity: 0, scale: 0.8 }} // Initial state: hidden and scaled down
        whileInView={{ opacity: 1, scale: 1 }} // When in view, set to full opacity and normal scale
        transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
        viewport={{ once: true, amount: 0.1 }} // Trigger when 10% of the component is in view
      >
        <div className="flex justify-center items-center w-full max-w-7xl overflow-hidden">
          {/* Container for the slides */}
          <div className="flex flex-wrap justify-center gap-4 w-full">
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="flex flex-col items-center justify-center w-40 md:w-60 lg:w-72 p-4 transform transition-transform hover:scale-110 duration-700"
              >
                <div className="relative mb-4 w-full">
                  <div className="w-full h-1 bg-gray-200">
                    <div className="h-1 bg-blue-900 animate-progress"></div>
                  </div>
                </div>
                <h2 className=" text-base text-nowrap md:text-xl font-semibold text-white">
                  {slide.label}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default AboutBar;
