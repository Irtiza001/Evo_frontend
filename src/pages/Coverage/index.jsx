import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CoverageCard from "../../components/CoverageCard";

import { motion } from "framer-motion";

import { Box, Typography, } from "@mui/material";

const Coverage = () => {

  return (
    <Box sx={{fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'}}>
      {/* Navbar Section */}

      <Box
        sx={{
          position: "relative",
          backgroundImage: 'url("/images/home/coverage_img.png")',
          backgroundSize: "cover", // Ensures the image covers the container
          backgroundPosition: "center", // Centers the image
          backgroundRepeat: "no-repeat", // Prevents image repetition
          minHeight: { xs: "30vh", sm: "40vh", md: "40vh", lg: "400px" }, // Responsive height
          color: "white",
          mb:4,
        
          // textAlign: "center", // Center text for mobile
          // Responsive padding for vertical spacing
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay with transparency
            zIndex: 1,
          }}
        />

        {/* Navbar */}
        <Box sx={{ position: "relative", zIndex: 2 }}>
        <Box sx={{
            padding: {
              xs: "1rem", // Smallest screens
              sm: "1rem 1.5rem", // Small screens
              md: "1rem 2rem", // Medium screens
              lg: "1rem 6rem", // Large screens
              xl: "1rem 4rem", // Extra large screens
            },
          }}> <Navbar /> </Box>
        </Box>

        {/* Content */}
        <Box sx={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", px: { xs: 2, sm: 5, md: 10 }, // Responsive padding
          py: { xs: 2, sm: 2, md: 2 }, }}>
          {/* Heading */}
          <motion.h1
            className="font-bold mb-4 leading-wide"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            sx={{
              fontSize: { xs: "24px", sm: "32px", md: "48px", lg: "48px" }, // Responsive font sizes for different screen sizes
              // Center on mobile, left-align on larger screens
            }}
          >
            <Typography sx={{
              fontSize: { xs: "24px", sm: "36px", md: "48px" }, // Responsive font sizes for different screen sizes
              fontWeight: "bold",
              textAlign: { xs: "center", sm: "start", md: "start" },
            }} >
              Coverage
            </Typography>

          </motion.h1>

          {/* Paragraph */}
          <motion.p
            className="max-w-xl "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              type: "spring",
              stiffness: 100,
            }}

          >
            <Typography sx={{
              fontSize: { xs: "12px", sm: "14px", md: "16px" }, // Responsive font sizes
              lineHeight: "1.6",
              textAlign: { xs: "center", sm: "start", md: "start" },

              maxWidth: "600px", // Limits width of text for readability
              mx: "auto", // Centers text horizontally
            }}>
              At Evoprime, we are committed to delivering unparalleled global support
              through our network of 6000+ IT professionals and consultants across EMEA,
              APAC, and North America.
            </Typography>
          </motion.p>
        </Box>
      </Box>



      <CoverageCard />
      <Footer />
    </Box>

  );
};

export default Coverage;