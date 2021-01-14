import React from 'react'
import styles from './style.module.css'
import { InChart } from '../../constants/const'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const ShoppingChart = () => (
    <shoppingchartpage>
        <span>
        <div className={styles.h1}>Košarica</div>
        <div className={styles.h2}>Proizvodi u Vašoj košarici</div>
        </span>

        <section className={styles.frame}>
            <div className={styles.description}>
                <p className={styles.price}>cijena</p>
                <p className={styles.quantity}>količina</p> 
                <p className={styles.sum}>zajedno</p>
            </div>

            <div className={styles.inChart}>
            {InChart.map(({image, name, price, quantity, sum}) => (
                    <div className={styles.productStyle}>
                        <FontAwesomeIcon icon={faTimes} className={styles.xIcon}/>
                        <img src={image} alt="img001" className={styles.imageStyle} />
                        <div className={styles.nameStyle}>{name}</div>
                        <div className={styles.priceStyle}>{price}</div>
                        <div className={styles.quantityStyle}>{quantity}</div>
                        <div className={styles.sumStyle}>{sum}</div>
                    </div>
                    ))}
            </div>

        </section>

    </shoppingchartpage>
)

export default ShoppingChart