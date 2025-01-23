import { motion } from "framer-motion";

const Bar = () => {
  return (
    <main className="py-2">
      <motion.div
        className="relative bg-[url('/images/services/barBg.avif')] h-40 bg-cover bg-center flex items-center justify-center text-center text-white px-4 sm:px-6 md:px-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute inset-0 bg-black opacity-30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        ></motion.div>
        {/* Overlay for better text contrast */}
        <motion.p
          className="relative z-10 text-lg md:text-xl xl:text-2xl font-semibold leading-relaxed max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          “ We have our service desk based in United kingdom, a call away
          from you. Your request will be responded in seconds via call or email
          ”
        </motion.p>
      </motion.div>
    </main>
  );
};

export default Bar;
