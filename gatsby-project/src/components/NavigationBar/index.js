import React from 'react'
import styles from './style.module.css'
import {Link} from 'gatsby'


const navTabs = [{tab: 'Naslovna', to: '/'}, {tab: 'Web shop', to: '/webShop0'}, {tab: 'Blog', to: '/blog'}, {tab: 'Prijavi se', to:'/login'}]
const NavigationBar = ({activeTab}) => (
    <nav className={styles.navigationBar}>
          {navTabs.map(({tab, to}) => (
          <Link to={to} >
              <li className={tab === activeTab ? styles.active : ''}>{tab}</li>
          </Link>)
        )}
    </nav>
)


export default NavigationBar