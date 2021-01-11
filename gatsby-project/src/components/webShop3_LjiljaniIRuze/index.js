import React from 'react'

import styles from './style.module.css'


const WebShop3_LjiljaniIRuze = () => (  
    <div>
        <p className={styles.webTitle}>Web shop/ Buketi/ Ljiljani i ruže mix</p>
        <div className={styles.allInfo}>
            <div className={styles.imageStyle}></div>
            <div className={styles.productInfo}>
                <p className={styles.title}>Opis proizvoda:</p>
                <div className={styles.description}>Buket sadrži ruže, ljiljane, gumbeke i dekorativno zelenilo, umotan u elegantan papir sa satenskom mašnom.</div>
                <p className={styles.price}>200.00 kn</p>
                <div className={styles.quantity}></div>
                <button className={styles.addButton}><span>Dodaj u košaricu</span></button>
            </div>
        </div>
    </div>
)

export default WebShop3_LjiljaniIRuze
