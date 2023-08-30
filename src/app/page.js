"use client";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Image from "next/image";
import banner from "../../public/homepageedit.jpg";
// import icon from "../../public/5.png";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ApartmentIcon from '@mui/icons-material/Apartment';
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import MenuIntroduction from "@/components/searchdropdown";
import Card from "@/components/UI/Card";

import Spain from '../../public/Spain.jpg'
import India from '../../public/India.jpg'
import Paris from '../../public/Paris.jpg'
import London from '../../public/London.jpg'
import Ticket from "@/components/UI/Ticket";
import EnquiryCard from "@/components/UI/EnquiryCard";
import Footer from "@/components/Footer";
import { AttachMoney } from "@mui/icons-material";




export default function Home() {

  const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    color:"white",
    padding: '1rem 2rem',  
    borderRadius:"1.5rem",
    lineHeight: 1.5,
    backgroundColor: ' rgb(30, 30, 112)',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });

  return (
    <div className={styles.container}>
      <Header />

      {/* Banner */}
      <div className={styles.banner}>

        <div className={styles.content}>
          {/* <h1 className={styles.title}>
            DISCOVER YOUR NEXT DREAM PROPERTIES
          </h1> */}
            <h1 className={styles.title} >DISCOVER </h1>
            <span className={styles.capsule}>
              {/* <Image src={icon} fill={true} alt="HOME" /> */}
            </span>
            <h1 className={styles.title}>YOUR</h1>
            <h1 className={styles.title}>NEXT</h1>
            <h1 className={styles.title}>DREAM</h1>
            <p style={{width:"40ch"}} >
              Explore your future home among our curated selection of dream
              properties. Your perfect living space awaits you.
            </p>
            <h1 className={styles.title}>PROPERTIES</h1>
        
        </div>
      </div>

    <div className={styles.bannerimg}>
      <div className={styles.imageWrapper}>
        <Image src={banner} fill   style={{objectFit:"cover",objectPosition:"center"}} />
      </div>
      <div className={styles.search}>
      <div className={styles.item}>
        <div className={styles.itemleft}>
            <ApartmentIcon />
        </div>
        <div className={styles.itemright}>
          <h1 className={styles.itemtitle}>Property Type</h1>
          <MenuIntroduction title="Appartment" options={["Appartments" , "Villas" , "Condo" ]}/>
        </div>
        </div><div className={styles.item}>
        <div className={styles.itemleft}>
            <LocationOnIcon />
        </div>
        <div className={styles.itemright}>
          <h1 className={styles.itemtitle}>Location</h1>
          <MenuIntroduction title="Noida" options={["Gurgaon" , "Delhi" , "Noida" ]}/>
        </div>
        </div><div className={styles.item}>
        <div className={styles.itemleft}>
            <AttachMoney />
        </div>
        <div className={styles.itemright}>
          <h1 className={styles.itemtitle}>Price Range</h1>
          <MenuIntroduction title="$1500-$2000" options={["$1500-$2000" , "$2000-$10000" , "$10000-$25000"]}/>
        </div>
        </div>
        <div style={{width:"20%"}}>
      <BootstrapButton>Search</BootstrapButton>
      </div>
      </div>
    </div>




      <div className={styles.countries}>
            <h1 className={styles.countriestext}>We are available in many well-known countries</h1>
            <div className={styles.countriescontainer}>
           
             <Card img={India} title="India" />
            <Card img={Spain} title="Spain" />
            <Card img={London} title="London" />
            <Card img={Paris} title="Paris" /> 
            </div>
      </div>

      <div className={styles.recent}>
        <div className={styles.btnrow}>
            <p style={{color:"navy",fontSize:"32px",fontWeight:"600"}}>Recently Added</p>
            <a style={{textDecoration:"none" , fontSize:"1.2rem" , color:"red"}} href="#">See all</a>
        </div>
        <div className={styles.recentlayout}>
      {['2', '3', '4', '5', '6', '7'].map((number) => (
        <Ticket key={number} img={number} />
      ))}
    </div>
      </div>


      <div className={styles.recom}>
        <div className={styles.recomtext}>
          <h2 style={{color:"red"}}>Discover</h2>
          <h1>Best recommendation</h1>
          <div style={{display:"flex" , justifyContent:"space-between" , alignItems:"center"}}>
            <p style={{width:"45ch"}}>Discover our exclusive selection of the finest one-of-a-kind luxury properties architecture masterpieces</p>
            <a style={{color:"red" , textDecoration:"none"}}>Learn More</a>
          </div>
        </div>
        <div className={styles.cards}>
        {['2', '3', '4'].map((number) => (
        <EnquiryCard key={number} img={number} />
      ))}
        </div>
      </div>


      <div className={styles.display}>

          <div className={styles.displayimg}>
          </div>
        
          <div className={styles.displaytext}>
            
            <p style={{margin:"1rem" , color:"#D44E4D" , fontWeight:"600" , fontSize:"1.2rem"}}>ABOUT US</p>
            <h1 style={{margin:"1rem" , fontSize:"2rem"}}>How much is your Property worth now?</h1>
            <p style={{margin:"1rem" , lineHeight:"1.5"}}>Over time, we have solidified our standing as experts in the local area, building a remarkable reputation for our profound insights. This has naturally led to capturing the interest and curiosity of prospective buyers.</p>
            <button style={{backgroundColor:"#D44E4D" , color:"white" , border:"none" , padding:"1rem 2rem" , margin:"1rem"}}>Learn More</button>
          </div>
      </div>

      <Footer />
    </div>
  );
}
