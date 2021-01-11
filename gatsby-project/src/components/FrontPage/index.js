import React from 'react'
import styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Bestsellers } from '../../constants/const'

const FrontPage = () => (
    <frontpage className={styles.frontpage}>
        <ul className={styles.welcome}>
            <li>Dobrodošli na e-Flower.com</li>
            <li>Online cvjećarnica, dostupna 24/7</li>
        </ul>

        <button className={styles.webshopbutton}>WEB SHOP</button>

        <div className={styles.text}>
        <p><span className={styles.a}> Dragi naši </span> kupci, </p>
        
        <p>vršimo dostavu cvijeća u dogovoreno vrijeme na Vama željenu adresu na području Republike Hrvatske.</p>
           
        <p> Od ponedjeljka do subote narudžbe za isti dan zaprimamo <span className={styles.a}> do 16 sati </span>.<br/>
            Nedjeljom narudžbe za isti dan zaprimamo <span className={styles.a}>do 12 sati</span>.<br/>
            Radno vrijeme naših poslovnica je <span className={styles.a}>8:00 - 17:00</span>.
        </p>
        <p> Dostava je besplatna na području Zagreba, Splita, Rijeke, Osijeka i Dubrovnika.<br/>
            Za druga mjesta dostava iznosi 30 kn, osim ako je narudžba u iznosu većem od 350 kn.
        </p>
        <p className={styles.sign}>Vaš e-Flower tim</p>
        </div>

        <div className={styles.bestsellers}>Bestselleri</div>

        <div className={styles.bestsellers1}>
            {Bestsellers.map(({bestseller, productImage}) => (
                    <div className={styles.bestsellerStyle}>
                        <img src={productImage} alt="img001" className={styles.imageStyle} />
                        <div className={styles.bestsellerName}>{bestseller}</div>
                    </div>
                    ))}
            <button className={styles.morebutton}>VIŠE<FontAwesomeIcon icon={faChevronRight} className={styles.chevronIcon}/></button>
        </div>

    </frontpage>
)

export default FrontPage