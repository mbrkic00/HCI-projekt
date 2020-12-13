import React from 'react'
import Logo from '../../components/Logo'
import styles from './style.module.css'

const NavigationHeader = ({activeTab}) => (
    <section className = {styles.navigationHeader}>
    <Logo/>
    </section>
)

export default NavigationHeader