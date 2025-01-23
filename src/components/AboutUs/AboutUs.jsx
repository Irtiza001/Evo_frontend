import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <main className="px-4 md:px-8 xl:px-16 py-10 flex flex-col items-center">
      {/* Header Section */}
      <motion.div
        className="flex flex-col items-center text-center mb-3"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-xs md:text-sm font-semibold text-[#00CFF1] uppercase leading-wider mb-1 w-full">
          __About Us
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-wide mb-4 w-full p-2 md:w-[60%]">
          Innovating Technology for a Brighter Future
        </h2>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="flex flex-col lg:flex-row border-4 border-black rounded-xl w-full md:w-11/12 justify-center items-center max-w-4xl space-y-4 md:space-y-0"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Left Image */}
        <motion.div
          className="lg:w-1/2 w-full flex justify-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="/images/about/about.png"
            alt="about"
            className="w-full rounded-lg"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="w-full lg:w-1/2 px-4 md:px-6 flex justify-center items-center text-left flex-col space-y-4 lg:py-0 py-4"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p>
            At Evoprime, we specialize in delivering personalized and innovative
            outsourcing solutions to meet your unique business challenges. With
            over 20 years of combined expertise, our global team of 6000+ skilled
            engineers and specialists ensures unmatched managed IT services that
            drive your success.
          </p>

          <ul className="space-y-4">
            <motion.li
              className="flex flex-col gap-2 text-justify"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <strong className="font-semibold text-lg">
                Empowering Your Growth
              </strong>
              Our mission is to help you achieve extraordinary growth by
              seamlessly integrating into your team. At Evoprime, we simplify
              service delivery and ensure an exceptional experience for your
              customers, enabling you to focus on what truly matters—your
              business.
            </motion.li>
            <motion.li
              className="flex flex-col gap-2 text-justify"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <strong className="font-semibold text-lg">
                Our People, Your Advantage
              </strong>
              At the heart of Evoprime are some of the best professionals in the
              industry. Their dedication, integrity, and innovation create an
              environment of excellence.
            </motion.li>
          </ul>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default AboutUs;
