import React from 'react'

import styles from './style.module.css'


const WebShop3_LjiljaniIRuze = () => (  
    <div>
        <p className={styles.webTitle}>Web shop - Buketi - Ljiljani i ruže mix</p>
        <div className={styles.allInfo}>
            <div className={styles.imageStyle}></div>
            <div className={styles.productInfo}>
                <p className={styles.title}>Opis proizvoda:</p>
                <div className={styles.description}>Buket sadrži ruže, ljiljane, gumbeke i dekorativno zelenilo, umotan u elegantan papir sa satenskom mašnom.</div>
                <p className={styles.price}>175.00 kn</p>
                <div className={styles.quantity}>
                    <input type="button" value="-" className={styles.minus}></input>
                    <input type="number" step="1" min="1" max="" value="1" className={styles.numBox}></input>
                    <input type="button" value="+" className={styles.plus}></input>
                </div>
                <button className={styles.addButton}><span>Dodaj u košaricu</span></button>
            </div>
        </div>
        <p className={styles.suggestionTitle}>Možda Vam se sviđa:</p>
        <div className={styles.suggestionsGallery}>
            <div className={styles.suggestionBox}>
                <img src={require("../../images/buketi2.jpg")} alt="img001" className={styles.galleryImage}></img>
                <p className={styles.imageName}>Jednostavne ruže</p>
            </div>
            <div className={styles.suggestionBox}>
                <img src={require("../../images/buketi3.jpg")} alt="img001" className={styles.galleryImage}></img>
                <p className={styles.imageName}>Nježne orhideje</p>
            </div>
            <div className={styles.suggestionBox}>
                <img src={require("../../images/buketi4.jpg")} alt="img001" className={styles.galleryImage}></img>
                <p className={styles.imageName}>Egzotični mix</p>
            </div>
            <div className={styles.suggestionBox}>
                <img src={require("../../images/buketi5.jpg")} alt="img001" className={styles.galleryImage}></img>
                <p className={styles.imageName}>Šareni tulipani</p>
            </div>
            <div  className={styles.suggestionBox}>
                <img src={require("../../images/buketi6.jpg")} alt="img001" className={styles.galleryImage}></img>
                <p className={styles.imageName}>Šareni buket</p>
            </div>
        </div>
    </div>
)

export default WebShop3_LjiljaniIRuze
