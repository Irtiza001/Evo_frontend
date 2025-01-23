import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Box, Typography, Grid, Card, CardMedia} from '@mui/material';

gsap.registerPlugin(ScrollTrigger);

// Define a functional component
const ServicesCards = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const sectionRef2 = useRef(null);
      const sectionRef = useRef(null);
    

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
  
  return (
    <div style={{width:'100%',display: "flex", justifyContent: 'center'}}>
      <Box className="main_services" sx={{ width: { xs: '100%', md: '90%', lg: '100%' } }} justifyContent="center" >
        <Grid container spacing={2} >
          <Grid item xs={12} >  

            <Box sx={{ width: { xs: '100%' } }} className="main_service_content">
              <Box ref={sectionRef2} sx={{ py: 5, backgroundColor: "#fff", textAlign: "start" }}>
                {/* Title */}
                <Typography ref={titleRef} className="line-before" sx={{ mb: 2, fontSize: "1.5rem", fontWeight: 600 }}>
                  Our Services
                </Typography>

                {/* Subtitle */}
                <Typography
                  ref={subtitleRef}
                  variant="h1"
                  className="serv_sub_content"
                  sx={{
                    fontSize: "2.5rem",
                    fontWeight: 800,
                    lineHeight: 1.2,
                    color: "#000",
                  }}
                >
                  We Provide A Comprehensive<br /> Range 
                  of Cutting-Edge IT <br />Solutions
                </Typography>
              </Box>
              
              <Grid container spacing={1} justifyContent="center" alignItems="center" >
                <Grid item xs={12} sm={6} md={4} lg={3} justifyContent="center">
                  <Box mt={3} className="service_Box">
                    <Card className="service_card" sx={{ maxWidth: 345, position: 'relative' }}>
                      <CardMedia
                        sx={{
                          height: 300,
                          position: 'relative',
                          '&:before': {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '50%',
                            background: 'linear-gradient(to top, rgba(30, 93, 191, 1), transparent)', // Initial gradient (darker blue)
                            transition: 'background 0.3s ease', // Smooth transition effect
                          },
                          '&:hover:before': {
                            background: 'linear-gradient(to top, rgba(84, 172, 223, 1), transparent)', // Hover gradient (lighter blue)
                          },
                        }}
                        image="/images/home/service1.png"
                        title="blue gradient"
                      >
                        <Typography
                          className="service_card_title"
                          sx={{
                            position: 'absolute',
                            bottom: 20,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            color: 'white',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            zIndex: 1,
                          }}
                        >
                          Global Development
                        </Typography>
                      </CardMedia>
                    </Card>
                  </Box>

                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Box mt={3} className="service_Box">
                    <Card className="service_card" sx={{ maxWidth: 345, position: 'relative' }}>
                      <CardMedia
                        sx={{
                          height: 300,
                          position: 'relative',
                          '&:before': {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '50%',
                            background: 'linear-gradient(to top, rgba(30, 93, 191, 1), transparent)', // Initial gradient (darker blue)
                            transition: 'background 0.3s ease', // Smooth transition effect
                          },
                          '&:hover:before': {
                            background: 'linear-gradient(to top, rgba(84, 172, 223, 1), transparent)', // Hover gradient (lighter blue)
                          },
                        }}
                        image="/images/home/service3.png"
                        title="blue gradient"
                      >
                        <Typography
                          className="service_card_title"
                          sx={{
                            position: 'absolute',
                            bottom: 20,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            color: 'white',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            zIndex: 1,
                          }}
                        >
                          App Development
                        </Typography>
                      </CardMedia>
                    </Card>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Box mt={3} className="service_Box">
                    <Card className="service_card" sx={{ maxWidth: 345, position: 'relative' }}>
                      <CardMedia
                        sx={{
                          height: 300,
                          position: 'relative',
                          '&:before': {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '50%',
                            background: 'linear-gradient(to top, rgba(30, 93, 191, 1), transparent)', // Initial gradient (darker blue)
                            transition: 'background 0.3s ease', // Smooth transition effect
                          },
                          '&:hover:before': {
                            background: 'linear-gradient(to top, rgba(84, 172, 223, 1), transparent)', // Hover gradient (lighter blue)
                          },
                        }}
                        image="/images/home/service4.png"
                        title="blue gradient"
                      >
                        <Typography
                          className="service_card_title"
                          sx={{
                            position: 'absolute',
                            bottom: 20,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            color: 'white',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            zIndex: 1,
                          }}
                        >
                          Resource on VA
                        </Typography>
                      </CardMedia>
                    </Card>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Box mt={3} className="service_Box">
                    <Card className="service_card" sx={{ maxWidth: 345, position: 'relative' }}>
                      <CardMedia
                        sx={{
                          height: 300,
                          position: 'relative',
                          '&:before': {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '50%',
                            background: 'linear-gradient(to top, rgba(30, 93, 191, 1), transparent)', // Initial gradient (darker blue)
                            transition: 'background 0.3s ease', // Smooth transition effect
                          },
                          '&:hover:before': {
                            background: 'linear-gradient(to top, rgba(84, 172, 223, 1), transparent)', // Hover gradient (lighter blue)
                          },
                        }}
                        image="/images/home/cybersecurityimg.png"
                        title="blue gradient"
                      >
                        <Typography
                          className="service_card_title"
                          sx={{
                            position: 'absolute',
                            bottom: 20,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            color: 'white',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            zIndex: 1,
                          }}
                        >
                          Cyber Security
                        </Typography>
                      </CardMedia>
                    </Card>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Box mt={3} className="service_Box">
                    <Card className="service_card" sx={{ maxWidth: 345, position: 'relative' }}>
                      <CardMedia
                        sx={{
                          height: 300,
                          position: 'relative',
                          '&:before': {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '50%',
                            background: 'linear-gradient(to top, rgba(30, 93, 191, 1), transparent)', // Initial gradient (darker blue)
                            transition: 'background 0.3s ease', // Smooth transition effect
                          },
                          '&:hover:before': {
                            background: 'linear-gradient(to top, rgba(84, 172, 223, 1), transparent)', // Hover gradient (lighter blue)
                          },
                        }}
                        image="/images/home/service6.png"
                        title="blue gradient"
                      >
                        <Typography
                          className="service_card_title"
                          sx={{
                            position: 'absolute',
                            bottom: 20,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            color: 'white',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            zIndex: 1,
                          }}
                        >
                          Wireless surveys
                        </Typography>
                      </CardMedia>
                    </Card>
                  </Box>

                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Box mt={3} className="service_Box">
                    <Card className="service_card" sx={{ maxWidth: 345, position: 'relative' }}>
                      <CardMedia
                        sx={{
                          height: 300,
                          position: 'relative',
                          '&:before': {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '50%',
                            background: 'linear-gradient(to top, rgba(30, 93, 191, 1), transparent)', // Initial gradient (darker blue)
                            transition: 'background 0.3s ease', // Smooth transition effect
                          },
                          '&:hover:before': {
                            background: 'linear-gradient(to top, rgba(84, 172, 223, 1), transparent)', // Hover gradient (lighter blue)
                          },
                        }}
                        image="/images/home/service7.png"
                        title="blue gradient"
                      >
                        <Typography
                          className="service_card_title"
                          sx={{
                            position: 'absolute',
                            bottom: 20,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            color: 'white',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            zIndex: 1,
                          }}
                        >
                          Helpdesk Solution
                        </Typography>
                      </CardMedia>
                    </Card>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Box mt={3} className="service_Box">
                    <Card className="service_card" sx={{ maxWidth: 345, position: 'relative' }}>
                      <CardMedia
                        sx={{
                          height: 300,
                          position: 'relative',
                          '&:before': {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '50%',
                            background: 'linear-gradient(to top, rgba(30, 93, 191, 1), transparent)', // Initial gradient (darker blue)
                            transition: 'background 0.3s ease', // Smooth transition effect
                          },
                          '&:hover:before': {
                            background: 'linear-gradient(to top, rgba(84, 172, 223, 1), transparent)', // Hover gradient (lighter blue)
                          },
                        }}
                        image="/images/home/service8.png"
                        title="blue gradient"
                      >
                        <Typography
                          className="service_card_title"
                          sx={{
                            position: 'absolute',
                            bottom: 20,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            color: 'white',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            zIndex: 1,
                          }}
                        >
                          Website Development
                        </Typography>
                      </CardMedia>
                    </Card>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Box mt={3} className="service_Box">
                    <Card className="service_card" sx={{ maxWidth: 345, position: 'relative' }}>
                      <CardMedia
                        sx={{
                          height: 300,
                          position: 'relative',
                          '&:before': {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '50%',
                            background: 'linear-gradient(to top, rgba(30, 93, 191, 1), transparent)', // Initial gradient (darker blue)
                            transition: 'background 0.3s ease', // Smooth transition effect
                          },
                          '&:hover:before': {
                            background: 'linear-gradient(to top, rgba(84, 172, 223, 1), transparent)', // Hover gradient (lighter blue)
                          },
                        }}
                        image="/images/home/service9.png"
                        title="blue gradient"
                      >
                        <Typography
                          className="service_card_title"
                          sx={{
                            position: 'absolute',
                            bottom: 20,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            color: 'white',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            zIndex: 1,
                          }}
                        >
                          IMAC Services
                        </Typography>
                      </CardMedia>
                    </Card>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Box mt={3} className="service_Box">
                    <Card className="service_card" sx={{ maxWidth: 345, position: 'relative' }}>
                      <CardMedia
                        sx={{
                          height: 300,
                          position: 'relative',
                          '&:before': {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '50%',
                            background: 'linear-gradient(to top, rgba(30, 93, 191, 1), transparent)', // Initial gradient (darker blue)
                            transition: 'background 0.3s ease', // Smooth transition effect
                          },
                          '&:hover:before': {
                            background: 'linear-gradient(to top, rgba(84, 172, 223, 1), transparent)', // Hover gradient (lighter blue)
                          },
                        }}
                        image="/images/home/service10.png"
                        title="blue gradient"
                      >
                        <Typography
                          className="service_card_title"
                          sx={{
                            position: 'absolute',
                            bottom: 20,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            color: 'white',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            zIndex: 1,
                          }}
                        >
                          Full Time Resource Allocation
                        </Typography>
                      </CardMedia>
                    </Card>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Box mt={3} className="service_Box">
                    <Card className="service_card" sx={{ maxWidth: 345, position: 'relative' }}>
                      <CardMedia
                        sx={{
                          height: 300,
                          position: 'relative',
                          '&:before': {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '50%',
                            background: 'linear-gradient(to top, rgba(30, 93, 191, 1), transparent)', // Initial gradient (darker blue)
                            transition: 'background 0.3s ease', // Smooth transition effect
                          },
                          '&:hover:before': {
                            background: 'linear-gradient(to top, rgba(84, 172, 223, 1), transparent)', // Hover gradient (lighter blue)
                          },
                        }}
                        image="/images/home/service12.png"
                        title="blue gradient"
                      >
                        <Typography
                          className="service_card_title"
                          sx={{
                            position: 'absolute',
                            bottom: 20,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            color: 'white',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            zIndex: 1,
                          }}
                        >
                          Retail Service
                        </Typography>
                      </CardMedia>
                    </Card>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Box mt={3} className="service_Box">
                    <Card className="service_card" sx={{ maxWidth: 345, position: 'relative' }}>
                      <CardMedia
                        sx={{
                          height: 300,
                          position: 'relative',
                          '&:before': {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '50%',
                            background: 'linear-gradient(to top, rgba(30, 93, 191, 1), transparent)', // Initial gradient (darker blue)
                            transition: 'background 0.3s ease', // Smooth transition effect
                          },
                          '&:hover:before': {
                            background: 'linear-gradient(to top, rgba(84, 172, 223, 1), transparent)', // Hover gradient (lighter blue)
                          },
                        }}
                        image="/images/home/service13.png"
                        title="blue gradient"
                      >
                        <Typography
                          className="service_card_title"
                          sx={{
                            position: 'absolute',
                            bottom: 20,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            color: 'white',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            zIndex: 1,
                          }}
                        >
                          Third Party Mantaince
                        </Typography>
                      </CardMedia>
                    </Card>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Box mt={3} className="service_Box">
                    <Card className="service_card" sx={{ maxWidth: 345, position: 'relative' }}>
                      <CardMedia
                        sx={{
                          height: 300,
                          position: 'relative',
                          '&:before': {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '50%',
                            background: 'linear-gradient(to top, rgba(30, 93, 191, 1), transparent)', // Initial gradient (darker blue)
                            transition: 'background 0.3s ease', // Smooth transition effect
                          },
                          '&:hover:before': {
                            background: 'linear-gradient(to top, rgba(84, 172, 223, 1), transparent)', // Hover gradient (lighter blue)
                          },
                        }}
                        image="/images/home/service11.png"
                        title="blue gradient"
                      >
                        <Typography
                          className="service_card_title"
                          sx={{
                            position: 'absolute',
                            bottom: 20,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            color: 'white',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            zIndex: 1,
                          }}
                        >
                          Resourse on SLA
                        </Typography>
                      </CardMedia>
                    </Card>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ServicesCards;
