import React from 'react'
import styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faCcVisa, faCcMastercard, faCcDinersClub } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
  
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
              <p>eFlower d.o.o. 2020</p>
            
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
            <li className={styles.cc}>
            <FontAwesomeIcon icon={faCcVisa} className={styles.VisaIcon} />
              <FontAwesomeIcon icon={faCcMastercard} className={styles.MCIcon} />
              <FontAwesomeIcon icon={faCcDinersClub} className={styles.DinersIcon} />
            </li>
            
        </ul>

    </footer>
  )
 
  export default Footer