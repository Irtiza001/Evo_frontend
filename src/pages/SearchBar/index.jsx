import { useLocation, Link } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";

const SearchBar = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("query") || "";

  // Sample data for the cards
  const items = [
    { id: 1, name: "Coverage", description: "Page", link: "/coverage" },
    { id: 2, name: "Services", description: "Page", link: "/services" },
    { id: 3, name: "Home", description: "Page", link: "/" },
    { id: 4, name: "Privacy Policy", description: "Page", link: "/privacy" },
  ];

  // Filter items based on the search query
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const results = items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredItems(results);
  }, [searchQuery]);

  return (
    <div
      style={{
        backgroundColor: "black",
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      {/* Navbar */}
      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Box
          sx={{
            padding: {
              xs: "1rem", // Smallest screens
              sm: "1rem 1.5rem", // Small screens
              md: "1rem 2rem", // Medium screens
              lg: "1rem 6rem", // Large screens
              xl: "1rem 4rem", // Extra large screens
            },
          }}
        >
          <Navbar />
        </Box>
      </Box>

      {/* Search Results Header */}
      <Box sx={{ textAlign: "center", padding: "2rem" }}>
        <Typography variant="h4" style={{ color: "#54ACDF" }}>
          {`Results for "${searchQuery}"`}
        </Typography>
        <Typography variant="body1" style={{ color: "#ccc" }}>
          {filteredItems.length} results found
        </Typography>
      </Box>

      {/* Grid for Displaying Filtered Items */}
      <Box sx={{ padding: "0 20px" }}>
        <Grid container spacing={3} sx={{ mt: 4 }}>
          {filteredItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <Link to={item.link} style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    color: "black",
                    padding: "1.5rem",
                    textAlign: "center",
                    boxShadow: 3,
                    borderRadius: "6px",
                    "&:hover": {
                      boxShadow: 6,
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: "#54ACDF", fontWeight: "bold" }}
                  >
                    {item.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#333" }}>
                    {item.description}
                  </Typography>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Footer */}
      <Box sx={{ marginTop: "auto" }}>
        <Footer />
      </Box>
    </div>
  );
};

export default SearchBar;
