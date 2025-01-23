import { useState } from "react";
import { motion } from "framer-motion";
import { Grid, Box } from "@mui/material";

const CoverageCard = () => {
  const [selectedTab] = useState("Global");

  const tabs = {
    Global: [
      {
        image: "public/images/home/loc_one_img.png",
        title: "EMEA, LATAM",
        description:
          "Providing expert IT support for Europe, the Middle East, Africa (EMEA), and Latin America (LATAM). Tailored solutions for diverse regional needs.",
      },
      {
        image: "public/images/home/loc_one_img2.png",
        title: "APAC",
        description:
          "Specialized IT solutions for the Asia-Pacific (APAC) region. Ensuring proactive support and seamless operations.",
      },
    ],
  };

  return (
    <main className="pb-10 justify-center items-center flex flex-col">
      <motion.h1
        className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#00CFF1] font-semibold leading-wide mb-8 w-full p-2 text-center"
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
        Coverage Areas
      </motion.h1>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{
          px: { xs: 2, sm: 3, md: 4 },
          py: { xs: 3, sm: 4 },
        }}
      >
        {tabs[selectedTab].map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 1.5,
                type: "spring",
                stiffness: 150,
                damping: 20,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  backgroundColor: "white",
                  boxShadow: 3,
                  borderRadius: 2,
                  overflow: "hidden",
                  transition: "transform 0.5s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    transition: "transform 0.3s",
                  }}
                />
                <Box sx={{ p: { xs: 1, sm: 2 } }}>
                  <hr
                    style={{
                      borderTop: "4px solid #00CFF8",
                      width: "20%",
                      marginBottom: "16px",
                    }}
                  />
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "bold",
                      color: "#142d56",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      color: "#6e6e6e",
                      fontSize: "1rem",
                      textAlign: "justify",
                      marginBottom: "16px",
                    }}
                  >
                    {card.description}
                  </p>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default CoverageCard;
