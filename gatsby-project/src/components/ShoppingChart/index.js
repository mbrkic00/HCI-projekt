import React from 'react'
import styles from './style.module.css'
import {Link} from 'gatsby'
import { InChart } from '../../constants/const'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'



const ShoppingChart = () => (
    <shoppingchartpage>
        <span>
        <div className={styles.h1}>Košarica</div>
        {/*<div className={styles.h2}>Proizvodi u Vašoj košarici</div>*/}
        </span>

    <section className={styles.frames}>
        <section className={styles.frame1}>
            <div className={styles.description}>
                <p className={styles.price}>cijena</p>
                <p className={styles.quantity}>količina</p> 
                <p className={styles.sum}>zajedno</p>
            </div>

            <div className={styles.inChart}>
            {/* {InChart.map(({image, name, price, quantity, sum}) => (
                    <div className={styles.productStyle}>
                        <FontAwesomeIcon icon={faTimes} className={styles.xIcon} onClick={() => (0)} /> 
                        <img src={image} alt="img001" className={styles.imageStyle} />
                        <div className={styles.nameStyle}>{name}</div>
                        <div className={styles.priceStyle}>{price}</div>
                        <div className={styles.quantityStyle}>{quantity}</div>
                        <div className={styles.sumStyle}>{sum}</div>
                    </div>
                    ))} */}
            </div>

        </section>

        <section className={styles.frame2}>
            <div className={styles.total}>Ukupan iznos</div>
            <div className={styles.productPrice}>
                <p>Cijena proizvoda:</p>
                <p className={styles.pP1}></p>
            </div>
            <div className={styles.shipping}>
                <p>Trošak dostave:</p>
                <p className={styles.pP2}></p>
            </div>
            <div className={styles.billing}>
                <p>Ukupno za naplatu:</p>
                <p className={styles.pP3}></p>
            </div>
            <Link to={'/payment'} className={styles.buttonStyle}><button className={styles.continue}>Nastavi</button></Link>
            <div className={styles.delivery}>Za sigurnu dostavu brine se HP Express/Overseas.</div>
            <div className={styles.creditCards}>
                <div className={styles.visaIcon}></div>
                <div className={styles.mastercardIcon}></div>
                <div className={styles.maestroIcon}></div>
            </div>
        </section>
    </section>

    </shoppingchartpage>
)

export default ShoppingChart