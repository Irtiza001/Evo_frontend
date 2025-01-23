import { motion } from "framer-motion";

const ItSolutions = () => {
  return (
    <div className="relative bg-[url('/images/services/It-Solutions-bg.png')]">
      <main className="flex flex-col lg:flex-row justify-between items-center py-12 px-4 sm:px-6 lg:px-10 gap-8 max-w-7xl mx-auto">
        {/* Left Content */}
        <motion.div
          className="lg:w-[55%] text-center md:text-left space-y-5"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div>
            <div className="w-full md:w-[85%] mx-auto md:mx-0 flex flex-col justify-center items-start text-left">
              <h1 className="text-xs md:text-sm font-semibold text-[#00CFF1] uppercase leading-wider mb-2 w-full">
                __Tech Support
              </h1>
              <motion.h2
                className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-wide mb-4 w-full p-2 xl:w-[75%]"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                All-in-One IT Solution for Your Business
              </motion.h2>
            </div>
            <motion.p
              className="text-base md:text-lg text-gray-700 text-justify w-full lg:w-11/12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              With over 20 years of combined experience, we provide exceptional
              IT services backed by unrivaled global expertise. Our team of
              6000+ highly skilled engineers, supported by a 24×7 helpdesk,
              ensures our partners achieve their goals seamlessly.
            </motion.p>
          </div>

          <motion.div
            className="mt-4 md:p-4 p-2 text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ul className="list-none space-y-4 text-gray-700">
              <motion.li
                className="flex items-start gap-1 flex-col md:flex-row"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <strong className="text-black">
                  Round-the-Clock Support:{" "}
                </strong>
                <span className="flex-1">Always available to assist you.</span>
              </motion.li>
              <motion.li
                className="flex items-start gap-1 flex-col md:flex-row"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <strong className="text-black">Global Coverage: </strong>
                <span className="flex-1">
                  Solutions tailored for businesses worldwide.
                </span>
              </motion.li>
              <motion.li
                className="flex items-start gap-1 flex-col md:flex-row"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <strong className="text-black">Excellent Service: </strong>
                <span className="flex-1">
                  Delivering quality you can trust.
                </span>
              </motion.li>
              <motion.li
                className="flex items-start gap-1 flex-col md:flex-row"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <strong className="text-black">Unparalleled Expertise: </strong>
                <span className="flex-1">
                  Proven success in diverse industries.
                </span>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="lg:w-[45%] mt-8 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/images/services/It-Solutions.png"
            alt="IT Solutions"
            className="w-full h-auto max-w-md shadow-xl rounded-lg object-cover"
          />
        </motion.div>
      </main>
    </div>
  );
};

export default ItSolutions;
