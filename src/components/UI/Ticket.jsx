import React from 'react'
import styles from './Ticket.module.css';
import Image from 'next/image';

const Ticket = (props) => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.imgwrapper}>
        <Image src={`/${props.img}.png`} fill   style={{objectFit:"cover",objectPosition:"center"}}/>
        {/* <Image src={'/2.png'} width={200} height={200}/> */}
            </div>
        </div>
        <div className={styles.right}>
            <h1 className={styles.address}>130/143 West Street,Crows Nest</h1>
            <div className={styles.features}>
            <p>10 Bedroom</p>
            <p>150 M</p>
            <p>2 Garage</p>
            </div>
            <div className={styles.btm}>
                <p>Passes By X Builder</p>
                <button className={styles.btn}>$43,450</button>
            </div>
        </div>
    </div>
  )
}

export default Ticket