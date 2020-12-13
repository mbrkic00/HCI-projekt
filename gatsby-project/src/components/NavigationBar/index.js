import React from 'react'
import styles from './style.module.css'



const navTabs = ['Naslovna', 'Web shop', 'Blog', 'Prijavi se']
const NavigationBar = () => (
    <nav className={styles.navigationBar}>
        {navTabs.map(
            tab => <li>{tab}</li>
        )}
    </nav>
)


export default NavigationBar