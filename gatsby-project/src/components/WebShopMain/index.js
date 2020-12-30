import React from 'react'
import styles from './style.module.css'

const WebShopMain = () => (
    <webShopPage>
        <div>
            <p className={styles.webTitle}>Web shop</p>
            <p className={styles.webMsg}>Odaberite željenu kategoriju i uživajte u kupovini!</p>
        </div>
        <section className={styles.categories}>
            <div className={styles.flowerCategory}>
                <section className={styles.image1}></section>
                <button className={styles.openButton}><span>Buketi (15)</span></button>
            </div>
            <div className={styles.flowerCategory}>
                <section className={styles.image2}></section>
                <button className={styles.openButton}><span>Cvijeće u kutiji (10)</span></button>
            </div>
            <div className={styles.flowerCategory}>
                <section className={styles.image3}></section>
                <button className={styles.openButton}><span>Aranžmani (7)</span></button>
            </div>
            
        </section>
    </webShopPage>
)
export default WebShopMain
