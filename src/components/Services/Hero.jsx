import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import { Box, Typography, } from "@mui/material";

const Hero = () => {
  return (
    <main style={{ fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}>
      {/* Top section with dark overlay */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: 'url("https://img.freepik.com/free-photo/ai-technology-brain-background-digital-transformation-concept_53876-124672.jpg?t=st=1735118019~exp=1735121619~hmac=dee0a98167a1d2ba1f56e5b7cda079ac188fdd5645284ad683f864f9f7b4ad4b&w=900")',
          backgroundSize: "cover", // Ensures the image covers the container
          backgroundPosition: "center", // Centers the image
          backgroundRepeat: "no-repeat", // Prevents image repetition
          minHeight: { xs: "30vh", sm: "40vh", md: "40vh", lg: "400px" }, // Responsive height
          color: "white",
          // textAlign: "center", // Center text for mobile
          px: { xs: 2, sm: 5, md: 10 }, // Responsive padding
          py: { xs: 4, sm: 8, md: 2 }, // Responsive padding for vertical spacing
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
          <Navbar />
        </Box>

        {/* Content */}
        <Box sx={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}>
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
              textAlign: { xs: "center",sm:"start", md: "start" },
            }} >
              Our Services
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
              textAlign: { xs: "center",sm: "start", md: "start" },

              maxWidth: "600px", // Limits width of text for readability
              mx: "auto", // Centers text horizontally
            }}>
              With over 20 years of combined experience, you will receive exceptional services and unrivaled expertise globally. 
              Our 6000+ highly skilled engineers, supported by our 24×7 helpdesk, will assist you in achieving your goals.

            </Typography>
          </motion.p>
        </Box>
      </Box>


    </main>
  );
};

export default Hero;
