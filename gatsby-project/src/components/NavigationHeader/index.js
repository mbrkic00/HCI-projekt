import React from 'react'
import Logo from '../../components/Logo'
import Navigation from '../../components/Navigation'
import styles from './style.module.css'

const NavigationHeader = ({activeTab}) => (
    <section className = {styles.navigationHeader}>
    <Logo/>
    <Navigation activeTab={activeTab}/>
    </section>
)

export default NavigationHeader