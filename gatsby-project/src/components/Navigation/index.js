import React from 'react'
import NavigationBar from '../NavigationBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import MsgToUser from '../MsgToUser'
import styles from './style.module.css'
import {Link} from 'gatsby'

const Navigation = ({activeTab}) => (
    <section className={styles.navigation}>
    <NavigationBar activeTab = {activeTab}/>
    <Link to='/kosarica'><FontAwesomeIcon icon={faShoppingCart} className={styles.ShoppingCart}/></Link>
    <MsgToUser/>
    {/*<input className={styles.SearchBar} type = 'search' placeholder='Trazi...'/>*/}
    </section>
)

export default Navigation