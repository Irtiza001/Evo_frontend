import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Box } from "@mui/material";
const Privacy = () => {
  return (
    <div
      className="bg-black text-white min-h-screen"
      style={{
        // backgroundImage: 'url("/images/home/privacy_bg_img.png")',
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
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
      <div
        className="text-white py-8 px-4 sm:px-8 relative"
        style={{
          backgroundImage: 'url("/images/home/contact.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Shadow overlay */}
        <div
          className="absolute inset-0 bg-black opacity-80 z-0"
          style={{
            boxShadow: "inset 0px 0px 50px rgba(0, 0, 0, 0.8)",
          }}
        ></div>

        <div className="relative z-10 max-w-6xl mx-auto">
         
<section className="mb-6">
  <h2 className="text-xl font-semibold text-[#54ACDF]">
  Privacy Policy
  </h2>
  <p className="mt-2 text-white w-[80%]">
  At Evoprime, we value your privacy and are committed to safeguarding <br></br>the information you share with us. 
  This Privacy Policy explains how we<br></br> collect, use, and protect your information when you visit our website

  </p>
</section>

<section className="mb-6">
  <h2 className="text-xl font-semibold text-[#54ACDF]">
    Personal Identification Information
  </h2>
  <p className="mt-2 text-white w-[80%]">
  We may gather personal information from users through various interactions<br></br> on our site. 
  This includes, but is not limited to, when users register, subscribe<br></br> to a service, 
  or engage with features we provide. The types of personal <br></br>information collected may 
  include your name, email address, phone number,<br></br> and payment details.
  </p>
</section>

<section className="mb-6">
  <h2 className="text-xl font-semibold text-[#54ACDF]">
    Non-personal Identification Information
  </h2>
  <p className="mt-2 text-white w-[80%]">
  We may also collect non-personal details such as the browser type,
   operating <br></br>system, and other technical data about how users connect 
   to our site. This<br></br> information helps us understand how visitors use our 
   website and improve their<br></br> experience.
  </p>
</section>

<section className="mb-6">
  <h2 className="text-xl font-semibold text-[#54ACDF]">
    Cookies
  </h2>
  <p className="mt-2 text-white">
  Our website may use cookies to enhance your browsing experience.
   Cookies are <br></br>small files stored on your device that help us track 
   and save user preferences,<br></br> improve site functionality, and analyze 
   website traffic
  </p>
</section>

<section className="mb-6">
  <h2 className="text-xl font-semibold text-[#54ACDF]">
    How We Use Collected Information
  </h2>
  <p className="mt-2 text-white w-[80%]">
  The information we collect from you may be used to:
  <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
<li>Provide and improve customer support.</li>
<li>Personalize user experience.</li>
<li>Process transactions efficiently.</li>
<li>Administer site features such as promotions or surveys.</li>
<li>Send periodic updates and promotional emails (only if you have opted in).</li>
</ul>
  </p>
</section>


<section className="mb-6">
  <h2 className="text-xl font-semibold text-[#54ACDF]">
  Data Protection
  </h2>
  <p className="mt-2 text-white w-[80%]">
  We implement robust security measures to protect your personal 
  information<br></br> from unauthorized access, alteration, or disclosure. 
  Our data storage and<br></br> processing practices are designed to maintain 
  the confidentiality of your <br></br>information.
  </p>
</section>

<section className="mb-6">
  <h2 className="text-xl font-semibold text-[#54ACDF]">
  Sharing of Information
  </h2>
  <p className="mt-2 text-white w-[80%]">
  Your personal information will never be sold, traded, 
  or rented to third parties.<br></br> We may share generic aggregated 
  demographic information with our partners<br></br> and advertisers, 
  but it will not include any personally identifiable information.
  </p>
</section>

<section className="mb-6">
  <h2 className="text-xl font-semibold text-[#54ACDF]">
  Acceptance of Terms
  </h2>
  <p className="mt-2 text-white w-[80%]">
  By accessing and using our site, you agree to this Privacy Policy. 
  If you do not<br></br> agree with this policy, please refrain from using our website. 
  Your continued use<br></br> of the site signifies your acceptance of any changes 
  to this policy.
  </p>
</section>

<section>
  <h2 className="text-xl font-semibold text-[#54ACDF]">Contact Us</h2>
  <p className="mt-2 text-white">
  If you have any questions or concerns about this Privacy Policy or 
  how your<br></br> information is handled, please get in touch with us.
  </p>
</section>
</div>
</div>
<Footer />
</div>
);
};

export default Privacy;
