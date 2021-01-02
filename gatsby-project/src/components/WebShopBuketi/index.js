import React from 'react'
import styles from './style.module.css'

const WebShopBuketi = () => (
    <webShopPage className={styles.webShop}>
        <div>
            <p className={styles.webTitle}>Web shop/ Buketi</p>
            <div>
                <input type="search" placeholder=" Trazi..." className={styles.searchBar} />
            </div>
        </div>
        <section className={styles.categories}>
            <div className={styles.flowerCategory}>
                <div className={styles.image1}></div>
                <p className={styles.productName}>Ljiljani i ruže mix</p>
                <p className={styles.productPrice}>175.00 kn</p>
            </div>
            <div className={styles.flowerCategory}>
                <div className={styles.image2}></div>
                <p className={styles.productName}>Jednostavne ruže</p>
                <p className={styles.productPrice}>250.00 kn</p>
            </div>
            <div className={styles.flowerCategory}>
                <div className={styles.image3}></div>
                <p className={styles.productName}>Nježne orhideje</p>
                <p className={styles.productPrice}>210.00 kn</p>
            </div>
            <div className={styles.flowerCategory}>
                <div className={styles.image4}></div>
                <p className={styles.productName}>Egzotični mix</p>
                <p className={styles.productPrice}>300.00 kn</p>
            </div>
            <div className={styles.flowerCategory}>
                <div className={styles.image5}></div>
                <p className={styles.productName}>Rozi ljiljani</p>
                <p className={styles.productPrice}>200.00 kn</p>
            </div>
            <div className={styles.flowerCategory}>
                <div className={styles.image6}></div>
                <p className={styles.productName}>Šareni tulipani</p>
                <p className={styles.productPrice}>220.00 kn</p>
            </div>
            <div className={styles.flowerCategory}>
                <div className={styles.image7}></div>
                <p className={styles.productName}>Šareni buket</p>
                <p className={styles.productPrice}>180.00 kn</p>
            </div>
            <div className={styles.flowerCategory}>
                <div className={styles.image8}></div>
                <p className={styles.productName}>Buket Amarilis</p>
                <p className={styles.productPrice}>190.00 kn</p>
            </div>
            <div className={styles.flowerCategory}>
                <div className={styles.image9}></div>
                <p className={styles.productName}>Margarete u rozom</p>
                <p className={styles.productPrice}>170.00 kn</p>
            </div>
        </section>
       
    </webShopPage>
)
export default WebShopBuketi
