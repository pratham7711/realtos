import React from 'react';
import styles from './Footer.module.css'; // Import your CSS module for styling
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.about}>
        <h3>About Us</h3>
        <p>We are a leading real estate company, dedicated to helping you find your dream home.</p>
        <div className={styles.socials}>
          <FacebookIcon style={{marginRight:"1rem"}}/>
          <TwitterIcon style={{marginRight:"1rem"}}/>
          <InstagramIcon style={{marginRight:"1rem"}}/>
          <LinkedInIcon  style={{marginRight:"1rem"}}/>
        </div>
      </div>
      <div className={styles.tour}>
        <h3>Explore</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/listings">Listings</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
      <div className={styles.company}>
        <h3>Company</h3>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/testimonials">Testimonials</a></li>
        </ul>
      </div>
      <div className={styles.subscribe}>
        <h3>Subscribe</h3>
        <p>Stay up-to-date with our latest news and property listings by subscribing to our newsletter.</p>
        <div className={styles.subscribeForm}>
          <input style={{padding: "0.5rem 1rem" , borderRadius:"2rem 0  0 2rem" , border:"none"}} type="email" placeholder="Enter your email" className={styles.subscribeInput} />
          <button style={{borderRadius:"0 2rem 2rem 0" , padding:"0.5rem 1rem" , border:"none"}} className={styles.subscribeButton}>Subscribe</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
