import React from 'react'
import styles from './style.module.css'

const ShoppingChart = () => (
    <shoppingchartpage>
        <span>
        <div className={styles.h1}>Košarica</div>
        <div className={styles.h2}>Proizvodi u Vašoj košarici</div>
        </span>

        <section className={styles.frame}>
            <div className={styles.description}>cijena količina zajedno</div>
            <section className={styles.product1}>
                <p>Šareni tulipan</p>
                <p>250.00 kn</p>
                <p>2x</p>
                <p>500.00 kn</p>
            </section>
            <section className={styles.product2}>
                <p>Jednostavne ruže</p>
                <p>215.00 kn</p>
                <p>1x</p>
                <p>215.00 kn</p>
            </section>
        </section>

    </shoppingchartpage>
)

export default ShoppingChart