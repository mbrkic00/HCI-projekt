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
                <p className={styles.titles}>Buketi (15)</p>
                <button className={styles.openButton}><span>OTVORI</span></button>
            </div>
            <div className={styles.flowerCategory}>
                <section className={styles.image2}></section>
                <p className={styles.titles}>Cvijeće u kutiji (10)</p>
                <button className={styles.openButton}><span>OTVORI</span></button>
            </div>
            <div className={styles.flowerCategory}>
                <section className={styles.image3}></section>
                <p className={styles.titles}>Aranžmani (7)</p>
                <button className={styles.openButton}><span>OTVORI</span></button>
            </div>
            
        </section>
    </webShopPage>
)
export default WebShopMain
