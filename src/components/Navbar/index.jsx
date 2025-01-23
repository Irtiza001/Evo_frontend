import React, { useState } from "react";
import {
  Box,
  Button,
  useMediaQuery,
  useTheme,
  Drawer,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import useNavigate

const routes = [
  { name: "Home", route: "/" },
  { name: "About Us", route: "/about" },
  { name: "Services", route: "/services" },
  { name: "Coverage", route: "/coverage" },
  { name: "Contact us", route: "/contact" },
  { name: "Privacy Policy", route: "/privacy" },
];

const Navbar = () => {
  const location = useLocation();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate(); // useNavigate hook

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State to track search input

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const searchDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`); // Redirect to /search with the query
    }
  };


  // Handle pressing Enter to submit the search
  const handleSearchKeyPress = (event) => {
    if (event.key === "Enter" && searchQuery.trim()) {
      handleSearchSubmit();
    }
  };

  const visibleRoutes = routes.filter(
    (route) => route.name !== "Contact us" && route.name !== "Privacy Policy"
  );

  return (
    <Box
      sx={{
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: {
          xs: "1rem", // Smallest screens
          // sm: "1rem 1.5rem", // Small screens
          // md: "1rem 2rem", // Medium screens
          // lg: "1rem 3rem", // Large screens
          xl: "1rem 4rem", // Extra large screens
        },
        color: "white",
      }}
    >

      {/* Logo */}
      <Box
        className="logo_img"
        sx={{
          paddingTop: "14px",
          textAlign: "center",
        }}
      >
        <img
          src="/images/Evoprime Tech transparent logo.svg"
          alt="Logo"
          style={{
            width: "100%",
            maxWidth: "250px", // Default max width
            height: "auto",
          }}
          sx={{
            maxWidth: { xs: "120px", sm: "200px", md: "250px" }, // Adjust sizes for different breakpoints
          }}
        />
      </Box>



      {/* Responsive Navigation */}
      {isSmallScreen ? (
        <>
          <IconButton onClick={toggleDrawer(true)} sx={{ color: "white" }}>
            <MenuIcon />
          </IconButton>

          <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
            <Box
              sx={{
                width: 250,
                padding: "1rem",
                backgroundColor: "white",
                height: "100%",
              }}
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <List>
                {routes.map((value) => (
                  <ListItem button key={value.name}>
                    <Link
                      to={value.route}
                      style={{
                        textDecoration: "none",
                        color:
                          location.pathname === value.route ? "blue" : "black",
                        fontWeight:
                          location.pathname === value.route ? "bold" : "normal",
                      }}
                    >
                      <ListItemText primary={value.name} />
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </>
      ) : (
        // Desktop Navigation
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ul
            style={{
              display: "flex",
              padding: 0,
              margin: 0,
              listStyle: "none",
            }}
          >
            {visibleRoutes.map((value) => (
              <Link
                key={value.name}
                to={value.route}
                style={{
                  textDecoration: "none",
                  marginRight: "1.5rem",
                }}
              >
                <li
                  className={`nav-item ${location.pathname === value.route ? "active" : ""
                    }`}
                  style={{
                    color:
                      location.pathname === value.route ? "white" : "white",
                    fontWeight:
                      location.pathname === value.route ? "bold" : "normal",
                  }}
                >
                  {value.name}
                </li>
              </Link>
            ))}
          </ul>

          <IconButton onClick={searchDrawer(true)} sx={{ color: "white" }}>
            <SearchIcon fontSize="medium" />
          </IconButton>

          <Drawer anchor="top" open={isDrawerOpen} onClose={searchDrawer(false)}>
            <Box
              sx={{
                height: "150px",
                padding: "1rem",
                backgroundColor: "#f5f5f5",
                display: "flex",
                flexDirection: "row", // Set to row to align items horizontally
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconButton
                onClick={searchDrawer(false)}
                sx={{
                  alignSelf: "flex-start", // Aligns the IconButton to the top
                  marginBottom: "1rem",
                  position: "absolute", // Allows the icon to be positioned freely
                  top: "6px", // Align to the top
                  right: "20px", // Align to the right
                }}
              >
                <CloseIcon />
              </IconButton>



              <InputBase
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearchKeyPress} // Handle Enter key press
                sx={{
                  width: "80%",
                  padding: "0.5rem",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              />

              <Button
                variant="contained"
                onClick={handleSearchSubmit} // Trigger redirect on button click
                sx={{
                  padding: "9px",
                  marginLeft: "1rem", // Add space between the input and button
                  backgroundColor: "#54ACDF",
                }}
              >
                Search
              </Button>
            </Box>
          </Drawer>


          <Button
            component={Link}
            to="/contact"
            variant="contained"
            sx={{
              p: { xs: 1, sm: 1.5, md: 2 },
              ml: { xs: 1, sm: 2 },
              background: "#54ACDF",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              fontSize: {
                xs: "12px", // Smaller screens
                sm: "14px", // Small screens
                md: "14px", // Adjust for 900px to 1200px
                lg: "16px", // Large screens
              },
              textTransform: "capitalize",
              whiteSpace: "nowrap", // Prevent wrapping
              "&:hover": {
                background: "#4690B6",
              },
            }}
          >
            Contact Us
            <ArrowForwardIosIcon
              sx={{
                fontSize: { xs: "small", sm: "medium" },
                ml: { xs: 0.5, sm: 1 },
              }}
            />
          </Button>


        </Box>
      )}
    </Box>
  );
};

export default Navbar;