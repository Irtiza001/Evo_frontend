import { motion } from "framer-motion";

const OurMission = () => {
  return (
    <main className="relative flex justify-center items-center py-16 h-full px-4 md:px-8 xl:px-16 bg-black overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-[-50px] left-[-50px] w-40 h-40 bg-white/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-[-50px] right-[-50px] w-60 h-60 bg-white/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="h-6 w-16 md:h-14 md:w-40 bg-[#54ACDF] rounded-tr-full rounded-br-full absolute left-0 bottom-2 z-10 shadow-xl "></div>
      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#97DB4E] absolute bottom-6 left-8 md:bottom-12 md:left-24 shadow-xl z-10 animate-ping"></div>

      {/* Right top shape */}
      <div className="h-6 w-16 md:h-14 md:w-40 bg-[#54ACDF] rounded-tl-full rounded-bl-full absolute right-0 top-3 z-10 shadow-xl "></div>
      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#97DB4E] absolute top-6 right-8 md:top-14 md:right-24 shadow-xl z-10 animate-ping"></div>

      <div className="absolute inset-0 pointer-events-none"></div>

      {/* Main content */}
      <motion.div
        className="flex flex-col md:flex-row md:justify-between w-full md:w-[90%] lg:w-[75%] xl:w-[65%] justify-center items-center xl:max-w-5xl gap-6 z-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Card 1 */}
        <motion.div
          className="w-72 h-64 p-6 bg-white rounded-lg shadow-lg text-center flex flex-col justify-center items-center gap-3 transition-transform ease-in-out transform duration-700"
          whileHover={{ scale: 1.1, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
        >
          <img
            src="/images/about/vision.png"
            alt="vision"
            className="w-12 h-12 animate-bounce"
          />
          <h2 className="text-lg md:text-xl xl:text-2xl font-semibold text-gray-800">
            Our Vision
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            To Be the Most Innovative IT Services and Solutions Provider.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="w-72 h-64 p-6 bg-white rounded-lg shadow-lg text-center flex flex-col justify-center items-center gap-3 transition-transform ease-in-out transform lg:scale-110 duration-700"
          whileHover={{ scale: 1.1, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
        >
          <img
            src="/images/about/mission.png"
            alt="mission"
            className="w-12 h-12 animate-bounce"
          />
          <h2 className="text-lg md:text-xl xl:text-2xl font-semibold text-gray-800">
            Our Mission
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Creating Cost-Effective Digital Transformation Solutions.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="w-72 h-64 p-6 bg-white rounded-lg shadow-lg text-center flex flex-col justify-center items-center gap-3 transition-transform ease-in-out transform duration-700"
          whileHover={{ scale: 1.1, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
        >
          <img
            src="/images/about/values.png"
            alt="values"
            className="w-12 h-12 animate-bounce"
          />
          <h2 className="text-lg md:text-xl xl:text-2xl font-semibold text-gray-800">
            Our Values
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Trust, Confidence, Expertise, Safety, and Simplicity.
          </p>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default OurMission;
