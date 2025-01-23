import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom"; // Import Link for internal navigation
import {
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  TextField,
  // Card,
  // CardMedia,
  Accordion,
  // AccordionActions,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
//import { Link, } from "react-router-dom";

import Navbar from "../../components/Navbar";
import ServiceCard from "../../components/ServiceCard";
import Footer from "../../components/Footer";
//import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add"; // Plus icon
import RemoveIcon from "@mui/icons-material/Remove"; // Minus icon

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const sectionRefe = useRef(null);
  const buttonRef = useRef(null);
  const [expanded, setExpanded] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false); // <-- Add this line to define the state

  // Handle form field changes
  const handleChange = (panel) => (e, isExpanded) => {
    const { name, value } = e.target;

    // Update panel expansion state
    setExpanded(isExpanded ? panel : false);

    // Handle specific validation for the 'phone' field
    if (name === "phone") {
      // Ensure only numeric input
      if (!/^\d*$/.test(value)) return; // Prevent non-numeric input
    }

    // Update form data state
    setFormData({
      ...formData,
      [name]: value, // Update the specific field
    });
  };


  //const handleChange = (panel) => (event, isExpanded) => {
  // setExpanded(isExpanded ? panel : false);
  // };


  const handleSubmit = async (event) => {
    event.preventDefault();

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Please enter a valid email address."); // Set error message
      return; // Stop form submission
    }
    setErrorMessage("");

    try {
      const response = await fetch("http://localhost:5000/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send the form data to the API
      });

      const result = await response.json();
      if (result.success) {
        // Reset form fields
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });

        setIsSubmitted(true); // Show success message

        // Hide the success message after 10 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 10000); // 10000 ms = 10 seconds
      } else {
        alert("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    }
  };

  useEffect(() => {
    // Get all elements with the class 'trigger' (elements that should animate when in view)
    const triggers = document.querySelectorAll(".trigger");

    // Create an IntersectionObserver to observe when elements come into view
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add 'animate' class to trigger the animation when the element is in view
            entry.target.classList.add("animate");
            observer.unobserve(entry.target); // Stop observing after it is in view
          }
        });
      },
      {
        threshold: 0.2, // When 20% of the element is in view, start the animation
      }
    );

    // Observe all trigger elements
    triggers.forEach((trigger) => {
      observer.observe(trigger);
    });

    // Cleanup the observer when the component is unmounted
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation for the image
      gsap.fromTo(
        imageRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
          },
        }
      );

      // Animation for the text
      gsap.fromTo(
        textRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
          },
        }
      );

      // Animation for the button
      gsap.fromTo(
        buttonRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert(); // Cleanup GSAP context on component unmount
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation for the title
      gsap.fromTo(
        titleRef.current,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom", // Start when the top of the section hits the bottom of the viewport
          },
        }
      );

      // Animation for the subtitle
      gsap.fromTo(
        subtitleRef.current,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef2.current,
            start: "top bottom", // Start when the top of the section hits the bottom of the viewport
            delay: 0.2, // Slight delay for staggered animation
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert(); // Cleanup GSAP context on component unmount
  }, []);

  useEffect(() => {
    if (sectionRefe.current) {
      const elements = sectionRefe.current.querySelectorAll(
        ".bottom_box_img_text"
      );

      gsap.fromTo(
        elements,
        { x: 100, opacity: 0 }, // Start state: 100px to the right, fully transparent
        {
          x: 0, // End state: original position
          opacity: 1, // Fully visible
          duration: 1, // Duration of animation
          stagger: 0.2, // Delay between animations of each element
          scrollTrigger: {
            trigger: sectionRefe.current,
            start: "top 80%", // Trigger when the top of the section is 80% from the top of the viewport
            end: "bottom 60%", // Animation runs until the bottom of the section reaches 60% of the viewport
            toggleActions: "play none none none", // Play animation only once
          },
        }
      );
    }
  }, []);

  return (
    <Box className="home">
      <Box
        className="nav-section"
        sx={{
          backgroundImage: 'url("/images/home/homepageimg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
          boxShadow: "0 9px 10px rgba(0, 0, 0, 0.3)",
          // display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
        }}
      >
        <Box sx={{
           padding: {
            xs: "1rem", // Smallest screens
            sm: "1rem 1.5rem", // Small screens
            md: "1rem 2rem", // Medium screens
            lg: "1rem 6rem", // Large screens
            xl: "1rem 4rem", // Extra large screens
          },
        }}> <Navbar /> </Box>
        
        <Box
          className="nav_content"
          sx={{
            position: "relative",
            width: "100%",
            textAlign: { xs: "center", sm: "start" },
            color: "white",
            py: { xs: 8, sm: 10, md: 14 },
            px: { xs: 6, sm: 8, md: 16 },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "12px",
              letterSpacing: "2px",
              fontWeight: "bold",
              textAlign: "start",
              mb: 2,
              position: "relative",
              display: "inline-block",
              paddingLeft: { xs: "0", sm: "70px" }, // Remove padding on small screens
              "&::before": {
                content: { xs: "none", sm: '""' }, // Remove ::before on small screens
                position: "absolute",
                left: "0",
                top: "50%",
                width: "50px",
                height: "2px",
                backgroundColor: "#54ACDF",
                transform: "translateY(-50%)",
              },
            }}
          >
            Welcome to Evoprime
          </Typography>
          
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2rem", sm: "3rem", md: "3.5rem" },
              lineHeight: { xs: "2.5rem", sm: "3rem", md: "4rem" },
              fontWeight: "bold",
              mb: 2,
              textTransform: "capitalize",
            }}
          >
            Delivering Excellence <br />
            in Every <b style={{ color: "#54ACDF" }}>Service</b>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
              lineHeight: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
              maxWidth: { xs: "90%", sm: "70%", md: "60%" },
              mb: 4,
              mx: { xs: "auto", sm: "unset" },
            }}
          >
            We are committed to providing top-notch solutions tailored to your needs, <br></br>
            with unmatched efficiency and responsiveness.
          </Typography>

<Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2 }}>
  <Link to="/services" style={{ textDecoration: "none" }}> {/* Internal navigation */}
    <Button
      variant="contained"
      sx={{
        px: { xs: 3, sm: 4 },
        py: { xs: 1, sm: 1.5 },
        backgroundColor: "black",
        fontSize: { xs: "0.8rem", sm: "0.9rem" },
        fontWeight: "600",
      }}
    >
      Explore More
    </Button>
  </Link>
  <a href="/contact" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}> {/* External link */}
    <Button
      variant="contained"
      sx={{
        px: { xs: 3, sm: 4 },
        py: { xs: 1, sm: 1.5 },
        backgroundColor: "#54ACDF",
        fontSize: { xs: "0.8rem", sm: "0.9rem" },
        fontWeight: "600",
      }}
    >
      Get in Touch
    </Button>
  </a>
</Box>

        </Box>
      </Box>


      <Box
        ref={sectionRef}
        className="second_section"
        sx={{ py: 5, backgroundColor: "#f8f8f8" }}
      >
        <Grid container spacing={2} alignItems="center">
          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: "100%",
                paddingLeft: "40px",
                paddingRight: "40px",
              }}
            >
              <img
                ref={imageRef}
                className="trigger image-animation"
                src="/images/home/about_image1.jpg"
                alt="Professional IT Services"
                style={{
                  width: "100%",
                  maxHeight: "800px",
                  objectFit: "contain",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)", // Shadow on image
                }}
              />
            </Box>

          </Grid>

          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <Box
              ref={textRef}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                textAlign: "left",
                height: "100%",
              }}
            >
              {/* Title */}
              <Typography
                variant="h4"
                sx={{
                  mb: 2,
                  fontSize: "1.125rem",
                  fontWeight: "600",
                  color: "#54ACDF",
                  paddingLeft: "55px",
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    top: "90%",
                    width: "40px",
                    height: "2px",
                    backgroundColor: "#54ACDF",
                    transform: "translateY(-50%)",
                  },
                }}
                className="trigger"
              >
                About Us
              </Typography>

              {/* Heading */}
              <Typography
                className="trigger text-animation second_section_text2"
                variant="h1"
                sx={{
                  mb: 3,
                  fontSize: "2.875rem",
                  color: "#000",
                  fontWeight: "800",
                  textTransform: "capitalize",
                }}
              >
                We specialize in <br />
                delivering professional <br />
                IT services
              </Typography>

              {/* Paragraph */}
              <Typography
                sx={{
                  mb: 3,
                  color: "#000",
                  fontSize: "0.938rem",
                  p: 0,
                }}
              >
                Evoprime offers comprehensive Software and IT Managed Services,
                end-to-end <br></br> solutions, desktop services, support, and
                consultancy. Our expertise spans IT support, <br></br>computer
                networking, and maintenance, ensuring seamless service from
                implementation <br></br> to disposal. We focus on providing a unified
                experience with a consultative approach <br></br> tailored to your needs.
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {/* Experience */}
              <Grid item xs={12} md={11}>
                <Paper
                  elevation={12}
                  sx={{
                    p: 2,
                    display: "flex",
                    alignItems: "start",
                    gap: 1,
                  }}
                >
                  <Box
                    component="img"
                    src="/images/home/best-employee.png"
                    alt="Experience Icon"
                    sx={{
                      width: "70px"
                    }}
                  />
                  <Box>
                    <Typography
                      variant="h3"
                      sx={{
                        mb: 1,
                        fontSize: "1.375rem",
                        fontWeight: "bold",
                        lineHeight: "20px",
                      }}
                    >
                      Experience
                    </Typography>
                    <Typography sx={{ fontSize: "0.938rem" }}>
                      Leverage Our IT Expertise to Empower Your Business
                    </Typography>
                  </Box>
                </Paper>
              </Grid>

              {/* Quick Support */}
              <Grid item xs={12} md={11}>
                <Paper
                  elevation={12}
                  sx={{
                    padding: "10px",
                    display: "flex",
                    alignItems: "start",
                    gap: 2,
                  }}
                >
                  <Box
                    component="img"
                    src="/images/home/help-desk.png"
                    alt="Quick Support Icon"
                    sx={{
                      width: "70px"
                    }}
                  />
                  <Box>
                    <Typography
                      variant="h3"
                      sx={{
                        mb: 1,
                        fontSize: "1.375rem",
                        fontWeight: "bold",
                        lineHeight: "20px",
                      }}
                    >
                      Quick Support
                    </Typography>
                    <Typography sx={{ fontSize: "0.938rem" }}>
                      Swift Responses, Reliable Solutions – Anytime, Anywhere
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            </Grid>

            {/* Learn More Button */}
            <Button
              ref={buttonRef}
              className="trigger button-animation"
              variant="contained"
              color="primary"
              href="/About"
              sx={{
                fontWeight: "bold",
                mt: 3,
                px: 6,
                py: 2,
                backgroundColor: "#54ACDF",
              }}
            >
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box className="marquee-container">
        <Box className="marquee">
          <Typography variant="h2" className="marquee_text">
            Your Trusted Partner in IT Excellence and Digital Transformation,<span>&nbsp;</span>
          </Typography>
          <Typography variant="h2" className="marquee_text">
            Your Trusted Partner in IT Excellence and Digital Transformation,<span>&nbsp;</span>
          </Typography>
          <Typography variant="h2" className="marquee_text">
            Your Trusted Partner in IT Excellence and Digital Transformation,<span>&nbsp;</span>
          </Typography>
          <Typography variant="h2" className="marquee_text">
            Your Trusted Partner in IT Excellence and Digital Transformation<span>&nbsp;</span>
          </Typography>
        </Box>
      </Box>

      {/* Services section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // height: '100vh', // Full viewport height
        }}
      >
        <ServiceCard />
      </Box>

      {/* <Box className="whatsappicon">
        <img src="/images/home/whatsapp.svg" alt="" width={70} />
      </Box> */}

      <Box className="why_choose_section">

        <Typography
          className='choose_section_text0'

          sx={{
            textAlign: "center",
            paddingTop: "40px",
            color: "#54ACDF",
            fontSize: "16px",
            fontWeight: "600",
            position: "relative", // Enables positioning for the pseudo-element
            display: "inline-block",
            "&:after": {
              content: '""',
              display: "block",
              width: "50px",        // Line width
              height: "2px",
              // Line thickness
              backgroundColor: "#54ACDF",
              margin: "8px auto 0", // Spacing above and centering the line
            }
          }}
        >
          Why Choose Us
        </Typography>

        <Typography variant='h2' className='choose_section_text1' sx={{
          paddingTop: "30px",
          color: "white", fontSize: "45px", fontWeight: "bold", lineHeight: "50px", textAlign: "center"
        }}>

          Companies Excited With Our Solutions
        </Typography>

        <Box className="choose_section_body" sx={{ paddingTop: "40px", px: "80px", paddingBottom: "40px" }}>
          <Grid container spacing={2}>
            {[
              { src: "/images/home/success.png", value: "120+", label: "Projects Completed" },
              { src: "/images/home/rating-3.png", value: "50+", label: "Active Clients" },
              { src: "/images/home/group-chat-1-1.png", value: "6000+", label: "Expert Team" },
              { src: "/images/home/rating-4.png", value: "50+", label: "Happy Clients" },
            ].map((item, index) => (
              <Grid
                item
                xs={6}
                md={3}
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center", // Ensures horizontal centering
                  textAlign: "center",  // Centers text within the box
                }}
              >
                <Box>
                  <Box
                    component="img"
                    src={item.src}
                    alt=""
                    width={70}
                    sx={{
                      margin: "0 auto", // Centers the image horizontally
                      transition: "transform 0.7s ease",
                      "&:hover": {
                        transform: "translateX(10px)",
                      },
                    }}
                  />
                  <Typography
                    className="project_user"
                    sx={{ fontSize: "1.5rem", fontWeight: "bold", mt: 2 }}
                  >
                    {item.value}
                  </Typography>
                  <Typography sx={{ color: "white", mt: 1 }}>{item.label}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      <Box
        className="faq_section_title"
        sx={{ marginTop: "50px", padding: "40px", borderRadius: "8px" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center", // Center horizontally
            alignItems: "center", // Center vertically
            // height: "100vh",           // Ensure it takes the full viewport height
            paddingBottom: "5px",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              // paddingTop: "40px",
              color: "#54ACDF",
              fontSize: "16px",
              fontWeight: "600",
              position: "relative",
              display: "inline-block",
              "&:after": {
                content: '""',
                display: "block",
                width: "50px",
                height: "2px",
                backgroundColor: "#54ACDF",
                margin: "8px auto 0",
              },
            }}
          >
            Talk About Something
          </Typography>
        </Box>
      </Box>
      <Box className="faq_section">
        <Typography
          variant="h1"
          sx={{
            fontSize: "45px",
            lineHeight: "50px",
            textAlign: "center",
            marginBottom: "24px",
            fontWeight: "bold",
            color: "#54ACDF",
            // "&:after": {
            //   content: '""',
            //   display: "block",
            //   width: "150px",
            //   height: "4px",
            //   backgroundColor: "#54ACDF",
            //   margin: "8px auto 0",
            // },
          }}
        >
          Frequently Asked Questions
        </Typography>
        <Box sx={{ maxWidth: "1000px", margin: "0 auto" }}>
          {[
            {
              question:
                "How can your end-to-end solutions benefit my business?",
              answer:
                "We streamline IT processes, boost efficiency, and secure your IT infrastructure to drive success.",
            },
            {
              question: "Do you offer on-site support?",
              answer:
                "Yes, we provide both on-site and remote support to promptly address IT issues.",
            },
            {
              question: "How can you help with computer networking?",
              answer:
                "Our team designs, implements, and manages seamless networking solutions to enhance organizational communication and data transfer.",
            },
            {
              question: "What sets your consultancy services apart?",
              answer:
                "We offer a consultative approach tailored to your business needs, challenges, and goals, ensuring alignment with your objectives.",
            },
            {
              question:
                "Do you offer maintenance support for IT infrastructure?",
              answer:
                "Yes, we ensure IT infrastructure health with updates, monitoring, and troubleshooting services.",
            },
            {
              question: "How do you handle IT disposal responsibly?",
              answer:
                "We use eco-friendly practices to recycle or dispose of hardware, prioritizing data security and regulatory compliance.",
            },
            {
              question: "What makes your desktop services stand out?",
              answer:
                "Optimized desktop performance with timely updates, security patches, and seamless remote assistance.",
            },
            {
              question: "How can I get started?",
              answer:
                "Contact us via our website or phone for a consultation. We’ll discuss your needs and propose a tailored solution.",
            },
          ].map((item, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{

                marginBottom: "16px",
                border: "1px solid #54ACDF",
                borderRadius: "0px",
              }}
            >
              <AccordionSummary
                expandIcon={
                  expanded === `panel${index}` ? (
                    <RemoveIcon sx={{ color: "#54ACDF" }} />
                  ) : (
                    <AddIcon sx={{ color: "#54ACDF" }} />
                  )
                }
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={{
                  background: "transparent",
                  padding: "10px",
                  borderRadius: "8px 8px 0 0",
                }}
              >
                <Typography sx={{ fontWeight: "bold", color: "#54ACDF" }}>
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  backgroundColor: "#fafafa",
                  padding: "16px",
                  color: "#555",
                }}
              >
                {item.answer}
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>

      <Box className="contact_form" sx={{ marginTop: "20px" }}>
        <Grid container spacing={2}>
          {/* First Grid - Replacing the Image with Text */}
          <Grid item xs={12} md={6}>
            <img src="/images/home/contact4.svg" alt="Contact Us" width="100%" />
          </Grid>

          {/* Second Grid - Form Section */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              sx={{
                textAlign: "center",
                marginBottom: "20px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Contact Us Today!
            </Typography>

            <form
              onSubmit={handleSubmit}
              style={{
                backgroundColor: "white",
                padding: "30px",
                borderRadius: "15px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              {/* Form Fields */}
              <TextField
                fullWidth
                required
                id="firstName"
                name="firstName"
                label="First Name"
                value={formData.firstName}
                onChange={handleChange("firstName")}
                sx={{ marginBottom: "16px" }}
              />
              <TextField
                fullWidth
                required
                id="lastName"
                name="lastName"
                label="Last Name"
                value={formData.lastName}
                onChange={handleChange("lastName")}
                sx={{ marginBottom: "16px" }}
              />
              <TextField
                fullWidth
                required
                id="email"
                name="email"
                label="Email"
                value={formData.email}
                onChange={handleChange("email")}
                sx={{ marginBottom: "16px" }}
              />
              <TextField
                fullWidth
                required
                id="phone"
                name="phone"
                label="Phone"
                value={formData.phone}
                onChange={handleChange("phone")}
                sx={{ marginBottom: "16px" }}
              />

              <TextField
                fullWidth
                id="message"
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange("message")}
                sx={{ marginBottom: "16px" }}
              />
              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  height: "50px",
                  fontWeight: "bold",
                  backgroundColor: "#54ACDF",
                  ":hover": {
                    backgroundColor: "#333",
                  },
                  marginBottom: "16px", // Space below the button
                }}
                type="submit"
              >
                Submit
              </Button>
              {/* Error Message */}
              {errorMessage && (
                <Typography
                  sx={{
                    marginTop: "15px",
                    color: "red",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  {errorMessage}
                </Typography>
              )}
              {isSubmitted && (
                <Typography
                  variant="body1"
                  sx={{
                    color: "#54ACDF",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Thank you for submitting!
                </Typography>
              )}
            </form>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
};
export default Home;