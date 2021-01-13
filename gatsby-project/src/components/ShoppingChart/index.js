import React from 'react'
import styles from './style.module.css'

const ShoppingChart = () => (
    <shoppingchartpage>
        <span>
        <div className={styles.h1}>Košarica</div>
        <div className={styles.h2}>Proizvodi u Vašoj košarici</div>
        </span>

        <section className={styles.frame}>
            <div className={styles.description}>
                <p className={styles.price}>cijena</p>
                <p className={styles.quantity}>količina</p> 
                <p className={styles.sum}>zajedno</p>
            </div>
            <section className={styles.product1}>
                <div className={styles.product1Image}></div>
                <p className={styles.name1}>Šareni tulipan</p>
                <p className={styles.price1}>250.00 kn</p>
                <p className={styles.quantity1}>2x</p>
                <p className={styles.sum1}>500.00 kn</p>
            </section>
            <section className={styles.product2}>
                <div className={styles.product2Image}></div>
                <p>Jednostavne ruže</p>
                <p>215.00 kn</p>
                <p>1x</p>
                <p>215.00 kn</p>
            </section>
        </section>

    </shoppingchartpage>
)

export default ShoppingChart