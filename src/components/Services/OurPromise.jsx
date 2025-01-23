import { motion } from "framer-motion";

const OurPromise = () => {
  const cards = [
    {
      image: "/images/services/card2-1.png",
      title: "24/7 Service Desk",
      description:
        "Our Australia & Pakistan based Service desk operates 24/7 * 365 days of the year. Your query/request will be responded within seconds via call or emails.",
    },
    {
      image: "/images/services/card2-2.png",
      title: "Highly Skilled Resources",
      description:
        "Our engineers are highly skilled, professional and up to date with current vendor certifications. We can reassure you that our fix rate is more than 97%.",
    },
    {
      image: "/images/services/card2-3.png",
      title: "Parts Availability",
      description:
        "We store our parts local to your customer’s premises, which will guarantee you that you wouldn’t be waiting for parts delivery to fix your problem. We will dispatch our engineers with parts for fast delivery of services.",
    },
    {
      image: "/images/services/card2-4.png",
      title: "Cost Saving",
      description:
        "With our partnership you will have access to our experts at competitive rates globally. By outsourcing your projects, you will get high quality services at low price.",
    },
  ];

  return (
    <main className="py-10 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-6 px-4 flex flex-col justify-center items-center gap-2">
        <h1 className="text-xs md:text-sm font-semibold text-[#00CFF1] uppercase tracking-wider">
          __Our Promise
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-wide text-[#142d56] mb-4 md:w-[50%] lg:w-[40%] xl:max-w-lg">
          Delivering Excellence with Every Promise Kept
        </h2>
      </div>

      {/* Cards Section */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.0 }}
            viewport={{ once: true }} // Trigger animation once when in view
          >
            {/* Card Content */}
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <hr className="border-t-4 border-[#00CFF8] w-16 mb-2" />
              <div className="mb-2 pl-2">
                <h3 className="text-lg font-semibold text-[#142d56]">
                  {card.title}
                </h3>
              </div>
              <p className="text-gray-700 text-sm mb-4 text-justify">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default OurPromise;
