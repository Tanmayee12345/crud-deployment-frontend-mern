import React from 'react';
import FAQs from './faqs';
import AboutUs from './AboutUs';
import './Home.css';
import CreateStudent1 from './CreateStudent1';
import Footer from './footer';

const Home = () => {
  return (
    <div className="home-container">
      <div className="background-image"></div>
      <div className="content-container">
        <div className="banner-image mx-auto">
          <img src="ban.png" alt="Banner" />
        </div> 

        {/* Rest of your content */}
        <div className="about-us-container mx-auto">
          <AboutUs />
        </div>
        <div className="faq-container mx-auto">
          <FAQs />
        </div>
        <div className='mx-auto'>
          <CreateStudent1/>
        </div>

      </div>

      <footer style={{maxHeight:"750px",maxWidth:"100%" ,paddingTop:"0px"}}>
          <Footer/>
        </footer>
    </div>
  );
};

export default Home;