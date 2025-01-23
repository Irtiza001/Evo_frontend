import { Box, Grid, Typography, Link } from "@mui/material";
import Divider from '@mui/material/Divider';

import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const routes = [
  { name: "Home", route: "/" },
  { name: "About Us", route: "/about" },
  { name: "Services", route: "/services" },
  { name: "Coverage", route: "/coverage" },
  { name: "Contact us", route: "/contact" },
  { name: "Privacy Policy", route: "/privacy" },
];

const Footer = () => {
  const visibleRoutes = routes.filter(
    (route) => route.name !== "Contact us" && route.name !== "Privacy Policy"
  );

  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        marginTop: "60px",
        padding: "4rem 6rem",
        paddingBottom: "0px",
      }}
    >
      <Grid container spacing={4}>
        {/* Logo and Social Icons */}
        <Grid item xs={12} md={6} lg={3}>
          <img
            src="/images/Evoprimetechlogo.svg"
            alt="Logo"
            style={{
              maxWidth: "230px",
              width: "100%",
              height: "auto",
              zIndex: 200,
              animation: "fadeIn 2s ease-in",
            }}
          />
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
              marginTop: "1rem",
              animation: "slideIn 2s ease-in",
            }}
          >
            <Link href="https://www.facebook.com/profile.php?id=61565585303549" color="inherit">
              <Facebook />
            </Link>
            <Link href="https://www.instagram.com/evoprimetechnologies?igsh=YTA1ejkwZ2Nyc3ox" color="inherit">
              <Instagram />
            </Link>
            <Link href="https://www.linkedin.com/company/evoprime-technologies/posts/?feedView=all" color="inherit">
              <LinkedIn />
            </Link>
          </Box>
        </Grid>

        {/* Quick Links */}
        <Grid
          item
          xs={12}
          md={6}
          lg={3}
          sx={{ animation: "fadeInUp 1.5s ease-in-out" }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Quick Links
          </Typography>
          <Box sx={{ marginTop: "1rem" }}>
            {visibleRoutes.map((route) => (
              <Typography key={route.route} sx={{ padding: "4px 0px" }}>
                <Link href={route.route} color="inherit" underline="none">
                  {route.name}
                </Link>
              </Typography>
            ))}
          </Box>
        </Grid>

        {/* Support */}
        <Grid
          item
          xs={12}
          md={6}
          lg={3}
          sx={{ animation: "slideIn 1.5s ease-in-out" }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Support
          </Typography>
          <Box sx={{ marginTop: "1rem" }}>
            <Typography>
              <Link href="/privacy" color="inherit" underline="none">
                Privacy & Policy
              </Link>
            </Typography>
          </Box>
        </Grid>

        {/* Contact Us */}
        <Grid
          item
          xs={12}
          md={6}
          lg={3}
          sx={{ animation: "fadeIn 1.5s ease-in-out" }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Contact Us
          </Typography>
          <Box sx={{ marginTop: "1rem" }}>
            <Box sx={{ display: "flex", padding: "4px 0px" }}>
              <HomeIcon />{" "}
              <Typography sx={{ paddingLeft: "20px" }}>
                85 Great Portland Street, First Floor, London, United Kingdom,
                W1W 7LT
              </Typography>
            </Box>
            <Box sx={{ display: "flex", padding: "4px 0px" }}>
  <EmailIcon />
  <Typography sx={{ paddingLeft: "20px" }}>
    <Link href="mailto:Evoprimetech.com" color="inherit" sx={{ textDecoration: "none" }}>
      Evoprimetech.com
    </Link>
  </Typography>
</Box>

            <Box sx={{ display: "flex", padding: "10px 0px" }}>
              <LocalPhoneIcon />{" "}
              <Typography sx={{ paddingLeft: "20px" }}>
                +447878776579
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Divider sx={{ backgroundColor: "white", marginTop: "50px" }} />
      <Box sx={{ textAlign: "center", padding: "10px 0px" }}>
        <Typography variant="body2">
          © Copyright 2024 All Right Reserved EvoPrime Technologies
        </Typography>
      </Box>
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes slideIn {
            from {
              transform: translateX(-100%);
            }
            to {
              transform: translateX(0);
            }
          }

          @keyframes fadeInUp {
            from {
              transform: translateY(50px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </Box>
  );
};

export default Footer;
