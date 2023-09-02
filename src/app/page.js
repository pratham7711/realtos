"use client";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Image from "next/image";
import home from "../../public/Component.jpg";
import banner from "../../public/homepageedit.jpg";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import Card from "@/components/UI/Card";
import interior from "../../public/interior.jpg"
import Spain from '../../public/Spain.jpg'
import India from '../../public/India.jpg'
import Paris from '../../public/Paris.jpg'
import London from '../../public/London.jpg'
import Ticket from "@/components/UI/Ticket";
import EnquiryCard from "@/components/UI/EnquiryCard";
import Footer from "@/components/Footer";
import Search from "@/components/Search";




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
      <div className={styles.body}>

      {/* Banner */}
      <Image
      src={home}
      alt="Discover dream property"
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
        marginBottom:'2rem'
      }}
    />


      <div className={styles.banner}>

      <div className={styles.img}> 
      <Image
      src={banner}
      alt="Picture of the author"
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
        // borderRadius:"1rem"
      }}
      />
      </div>
      <Search className={styles.search}/>
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
          <h2 style={{color:"#313190"}}>Discover</h2>
          <h1>Best recommendation</h1>
          <div className={styles.recomrow}>
            <p>Discover our exclusive selection of the finest one-of-a-kind luxury properties architecture masterpieces</p>
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
            <Image src={interior} alt="" fill style={{objectFit:"cover",objectPosition:"center"}}/>
          </div>
        
          <div className={styles.displaytext}>
            
            <p style={{margin:"1rem" , color:"#313190" , fontWeight:"600" , fontSize:"1.2rem"}}>ABOUT US</p>
            <h1 style={{margin:"1rem" , fontSize:"2rem"}}>How much is your Property worth now?</h1>
            <p style={{margin:"1rem" , lineHeight:"1.5"}}>Over time, we have solidified our standing as experts in the local area, building a remarkable reputation for our profound insights. This has naturally led to capturing the interest and curiosity of prospective buyers.</p>
            <button style={{backgroundColor:"#313190" , color:"white" , border:"none" , padding:"1rem 2rem" , margin:"1rem"}}>Learn More</button>
          </div>
      </div>

        </div>
      <Footer />
    </div>
  );
}

