import { motion } from "framer-motion";

const OurWork = () => {
  return (
    <main className="px-4 md:px-8 xl:px-16 py-10 flex flex-col lg:flex-row justify-center items-center space-y-6 md:space-y-0 gap-8 lg:max-w-7xl mx-auto">
      {/* Left content */}
      <motion.div
        className="w-full lg:w-1/2 text-left space-y-4 px-4 md:px-6"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="space-y-2">
          <h1 className="text-xs md:text-sm font-semibold text-[#00CFF8] uppercase tracking-wide mb-2">
            __What We Do
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-black leading-tight mb-4 w-11/12 md:w-[50%] lg:w-[90%]">
            We Want to Lead in Innovation & Technology
          </h2>
        </div> 
        <div className="space-y-4 text-gray-800 text-lg md:w-[90%] text-justify">
          <p>
            We are a trusted global IT services provider offering secure,
            end-to-end solutions to businesses of all sizes worldwide.
            
          </p>
          <p>
            Understanding the unique regulations of different countries, we
            deliver innovative and compliant solutions tailored to meet your
            business needs, leveraging the latest technologies.
          </p>
        </div>
      </motion.div>

      {/* Right image */}
      <motion.div
        className="lg:w-1/2 w-full flex justify-center items-center px-4 md:px-6"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img
          src="/images/about/OurWork.png"
          alt="OurWork"
          className="rounded-lg w-full max-w-lg md:max-w-sm shadow-xl hover:scale-105 transition-transform ease-out duration-700"
        />
      </motion.div>
    </main>
  );
};

export default OurWork;
