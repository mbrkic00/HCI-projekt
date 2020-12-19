import React from 'react'
import styles from './style.module.css'

const Footer = () => (
    <footer className={styles.footer}>
        <ul className={styles.info}>
            <li className={styles.contact}>
                Kontakt:
            </li>
            <li className={styles.phone}>
                021 556 728
            </li>
            <li className={styles.email}>
                eflower@gmail.com
            </li>
            <li className={styles.address}>
                Vukovarska 8
            </li>
            <li className={styles.workinghours}>
                Radno vrijeme: 8:00-17:00
            </li>
        </ul>

        <ul className={styles.copyright}>
            eFlower 2020
        </ul>

        <ul className={styles.payment}>
            <li className={styles.waysofpaying}>
                Načini plaćanja:
            </li>
            <li className={styles.cash}>
                Pouzećem
            </li>
            <li className={styles.creditcards}>
                Karticama:
            </li>

        </ul>
    </footer>
)

export default Footer