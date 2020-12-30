import React from 'react'
import styles from './style.module.css'

const WebShopMain = () => (
    <webShopPage className={styles.webShop}>
        <div>
            <p className={styles.webTitle}>Web shop</p>
            <p className={styles.webMsg}>Odaberite željenu kategoriju i uživajte u kupovini!</p>
        </div>
        <section className={styles.categories}>
            <div className={styles.flowerCategory}>
                <div className={styles.image1}></div>
                <button className={styles.openButton}><span>Buketi (15)</span></button>
            </div>
            <div className={styles.flowerCategory}>
                <div className={styles.image2}></div>
                <button className={styles.openButton}><span>Cvijeće u kutiji (10)</span></button>
            </div>
            <div className={styles.flowerCategory}>
                <div className={styles.image3}></div>
                <button className={styles.openButton}><span>Aranžmani (7)</span></button>
            </div>
            <div className={styles.flowerCategory}>
                <div className={styles.image4}></div>
                <button className={styles.openButton}><span>Lončanice (7)</span></button>
            </div>
            <div className={styles.flowerCategory}>
                <div className={styles.image5}></div>
                <button className={styles.openButton}><span>Izradi po želji (7)</span></button>
            </div>
            
        </section>
    </webShopPage>
)
export default WebShopMain
