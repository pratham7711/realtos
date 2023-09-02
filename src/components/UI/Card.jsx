import React from 'react'
import styles from './Card.module.css';
import Image from 'next/image';

const Card = (props) => {
  return (
<div className={styles.container}>
    <h1 className={styles.title}>{props.title}</h1>
    <div className={styles.imgwrapper}>
        <Image className={styles.innerimg} alt='' src={props.img} fill  style={{objectFit:"cover",objectPosition:"center"}}/>
    </div>
</div>

  )
}

export default Card