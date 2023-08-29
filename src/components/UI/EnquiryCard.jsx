import React from 'react'
import styles from './Enquiry.module.css';
import Image from 'next/image';

const EnquiryCard = (props) => {
  return (
    <div className={styles.container}>
    <div className={styles.image}>
        <div className={styles.imgwrapper}>
        <Image src={`/${props.img}.png`} fill  style={{objectFit:"cover",objectPosition:"center"}}/>
        </div>
    </div>
        <div className={styles.content}>
            <h1 style={{ fontWeight:"600" , }}>1234 Elm Street</h1>
            <p style={{color:"gray" , }}> Sunnyville, CA</p>
            <div style={{display:"flex" , alignItems:"center" , margin:"1rem 0" }}>
                <p style={{color:" #D44E4D" , fontSize:"2rem"}}>$350,000</p>
                <p style={{height:"100%" , backgroundColor:"lightgray" , color:"white" , padding:"0.5rem" , margin:"0 2rem "}}>Spacious</p>
            </div>
            <button className={styles.btn}>Send Enquiry</button>
        </div>
    </div>  
  )
}

export default EnquiryCard