import React from 'react'
import NavigationBar from '../NavigationBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import MsgToUser from '../MsgToUser'
import styles from './style.module.css'



const Navigation = () => (
    <section className={styles.navigation}>
    <NavigationBar/>
    <FontAwesomeIcon icon={faShoppingCart} className={styles.ShoppingCart}/>
    <MsgToUser/>
    </section>
)

export default Navigation