import { useState } from "react";
import { motion } from "framer-motion"; // Import motion

const SolutionCards = () => {
  const [selectedCategory, setSelectedCategory] = useState("IT Services");

  const itServices = [
    {
      image: "../../../images/services/card1.jpg",
      title: "Hardware Break Fix",
      description:
        "Reliable repair and maintenance solutions for desktops, laptops, and peripherals. Minimize downtime with prompt services tailored to your hardware needs. Keep your systems running smoothly with expert care.",
      },
    {
      image: "../../../images/services/card2.png",
      title: "Desktop & IT Supports",
      description:
        "End-to-end IT support for desktops, software, and peripherals. Ensure uninterrupted operations with efficient troubleshooting and regular maintenance. Your trusted partner for day-to-day IT challenges.",
    },
    {
      image: "../../../images/services/card3.svg",
      title: "Rollouts & Migrations",
      description:
        "Seamless deployment and migration of systems, software, and hardware. From planning to execution, ensure smooth transitions with minimal disruptions. Upgrade your IT environment with confidence.",
    },
    {
      image: "../../../images/services/card4.png",
      title: "Network Support",
      description:
        "Comprehensive support for network setup, troubleshooting, and optimization. Enhance connectivity and performance for your organization. Dependable solutions for wired and wireless networks.",
    },
    {
      image: "../../../images/services/card5.png",
      title: "Data Center Support",
      description:
        "Professional assistance in managing, maintaining, and optimizing data center operations. Ensure maximum uptime and reliability for your critical infrastructure. Scalable solutions for your growing data needs.",
    },
    {
      image: "../../../images/services/card6.png",
      title: "Audio Video Support",
      description:
        "Expert setup and maintenance for AV equipment, including conferencing and presentation systems. Enhance collaboration with high-quality audio and video solutions. Perfect for modern business environments.",
    },
    {
      image: "../../../images/services/card7.png",
      title: "WiFi Services",
      description:
        "Reliable WiFi setup and support for homes and businesses. Ensure fast, secure, and uninterrupted internet connectivity. Customized solutions for optimal wireless performance.",
    },
    {
      image: "../../../images/services/card8.png",
      title: "Tech Recruitment",
      description:
        "Streamlined hiring of skilled IT professionals to meet your technical demands. Access a pool of top talent for support, development, and network roles. Build your dream team with ease.",
    },
  ];

  const managedServices = [
    {
      image: "../../../images/services/card9.png",
      title: "IT Assets Management",
      description:
        "Efficient tracking, maintenance, and optimization of IT assets throughout their lifecycle. Ensure cost-effectiveness and seamless operations with proactive asset management. Maximize value from your IT investments.",
    },
    {
      image: "../../../images/services/card10.png",
      title: "Network Design and Maintenance",
      description:
        "Customized network architecture and ongoing support to meet your business needs. Enhance performance, reliability, and scalability with expert design and upkeep. Empower your organization with cutting-edge connectivity.",
    },
    {
      image: "../../../images/services/card11.png",
      title: "Project Management",
      description:
        "Comprehensive management of IT projects from initiation to completion. Ensure timely delivery, budget adherence, and high-quality results with expert oversight. Drive success with strategic planning and execution.",
    },
    {
      image: "../../../images/services/card12.png",
      title: "Global Field Services",
      description:
        "On-site IT support and services delivered worldwide for consistent business operations. Expert solutions for hardware, software, and network challenges. A trusted partner wherever your business takes you.",
    },
    {
      image: "../../../images/services/card13.svg",
      title: "Service Desk Services",
      description:
        "Responsive and reliable service desk solutions to address IT issues and queries. Enhance user satisfaction with 24/7 support tailored to your needs. Your first line of defense for IT assistance.",
    },
    {
      image: "../../../images/services/card14.svg",
      title: "Remote Support",
      description:
        "Instant and efficient IT support delivered remotely to resolve issues quickly. Reduce downtime with expert troubleshooting and maintenance. Convenient solutions for seamless IT operations.",
    },
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredCards =
    selectedCategory === "IT Services"
      ? itServices
      : selectedCategory === "Managed Services"
      ? managedServices
      : [...itServices, ...managedServices];

  return (
    <main className="py-10 justify-center items-center flex flex-col">
      {/* Filter Bar */}
      <div className="flex justify-center w-fit space-x-4 mb-6 bg-[#00CFF1] p-2 rounded-full animate-snake">
        <button
          onClick={() => handleCategoryChange("IT Services")}
          className={`${
            selectedCategory === "IT Services"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          } px-4 py-2 rounded-full transition-all duration-300`}
        >
          IT Services
        </button>
        <button
          onClick={() => handleCategoryChange("Managed Services")}
          className={`${
            selectedCategory === "Managed Services"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          } px-4 py-2 rounded-full transition-all duration-300`}
        >
        Managed Services
        </button>
      </div>

      {/* Display Cards */}
      <div>
        <div className="text-center mb-2 px-4 flex flex-col justify-center items-center gap-2">
          {/* Header Animation on Visit */}
          <motion.h1
            className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#00CFF1] font-semibold leading-wide mb-4 w-full p-2 md:w-[50%] lg:w-[40%]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 1.0,
              type: "spring",
              stiffness: 150,
              damping: 20,
            }}
          >
          {selectedCategory}
          </motion.h1>
        </div>

        {/* Cards Grid with Scroll-triggered Animation */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-[] gap-6 max-w-7xl mx-auto">
          {filteredCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 1.5,
                type: "spring",
                stiffness: 150,
                damping: 20,
              }} // Staggered animation with spring type for smooth effect
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} // Triggers animation once the element is in the viewport
            >
              <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform duration-500 hover:scale-105">
                {/* Image Section */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-44 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                />
                {/* Content Section */}
                <div className="p-4">
                  <hr className="border-t-4 border-[#00CFF8] w-16 mb-2" />
                  <div className=" mb-2 pl-2">
                    <h3 className="text-lg font-semibold text-[#142d56] ">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 text-justify text-sm mb-4">
                    {card.description}
                  </p>
                  {/* <a
                    href="#"
                    className="text-[#00CFF8] text-sm font-medium flex items-center hover:underline"
                  >
                    Read more <span className="ml-1">&rarr;</span>
                  </a> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default SolutionCards;
