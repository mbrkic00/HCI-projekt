import React from 'react'
import NavigationBar from '../NavigationBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import styles from './style.module.css'


const Navigation = () => (
    <section className={styles.navigation}>
    <NavigationBar/>
    <FontAwesomeIcon icon={faShoppingCart} className={styles.ShoppingCart}/>
    </section>
)

export default Navigation