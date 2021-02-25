import React from 'react'
import {Link} from 'gatsby'
import styles from './style.module.css'


const Logo = () => (
    <section className={styles.logo}>
    <Link to='/'><span className={styles.logoText}>e-Flower</span></Link>
    </section>
)

export default Logo