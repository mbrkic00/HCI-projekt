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
    {/*<input className={styles.SearchBar} type = 'search' placeholder='Trazi...'/>*/}
    </section>
)

export default Navigation