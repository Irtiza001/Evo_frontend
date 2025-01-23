import { Box, TextField, Button, Grid, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";

const Contact = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "phone" && !/^\d*$/.test(value)) {
      return;
    }

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formValues.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setErrorMessage("");

    try {
      const response = await fetch("http://localhost:5000/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        setSuccessMessage("Thank you for submitting the form.");
        setFormValues({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });

        setTimeout(() => setSuccessMessage(""), 10000);
      } else {
        setErrorMessage("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred while submitting the form.");
    }
  };

  return (
    <div>
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(50px);
          }
          to {
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            transform: translateX(-50px);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes fadeInDown {
          from {
            transform: translateY(-50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animated-box {
          animation: fadeIn 1s ease-in-out;
        }
        .animated-form {
          animation: slideUp 1s ease-in-out;
        }
        .animated-text {
          animation: fadeInDown 1s ease-in-out;
        }
      `}</style>
      <Box
        className="animated-box"
        sx={{
          backgroundColor: "#065685",
         
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "30px",
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
        <Box className="contact_form" sx={{ paddingTop: "50px", padding: "30px", }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                <img
                  src="/images/home/contact4.svg"
                  alt="Contact Illustration"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                className="animated-text"
                sx={{
                  textAlign: "center",
                  marginBottom: "20px",
                  fontWeight: "bold",
                  color: "white",
                  fontSize: { xs: "20px", md: "24px" },
                }}
              >
                Contact Us Today!
              </Typography>
              <form
                className="animated-form"
                onSubmit={handleSubmit}
                style={{
                  backgroundColor: "white",
                  padding: "30px",
                  borderRadius: "15px",
                }}
              >
                {["firstName", "lastName", "email", "phone", "message"].map(
                  (field) => (
                    <TextField
                      key={field}
                      fullWidth
                      required={field !== "message"}
                      id={field}
                      name={field}
                      label={field.charAt(0).toUpperCase() + field.slice(1)}
                      value={formValues[field]}
                      onChange={handleInputChange}
                      sx={{
                        marginBottom: "18px",
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": { borderColor: "#54ACDF" },
                          "&:hover fieldset": { borderColor: "#54ACDF" },
                          "&.Mui-focused fieldset": { borderColor: "#54ACDF" },
                        },
                        "& .MuiFormLabel-root": { color: "#54ACDF" },
                      }}
                      multiline={field === "message"}
                      rows={field === "message" ? 4 : 1}
                    />
                  )
                )}
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
                  }}
                  type="submit"
                >
                  Submit Form
                </Button>

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

                {successMessage && (
                  <Typography
                    sx={{
                      marginTop: "15px",
                      color: "#54acdf",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    {successMessage}
                  </Typography>
                )}
              </form>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default Contact;