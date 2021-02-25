import React, {useState} from 'react'
import {Link} from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { InChart } from '../../constants/const'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import styles from './style.module.css'




const ShoppingChart = () => {
    
    const data=useStaticQuery(graphql`
    query MyQuery {
        allContentfulShopping(filter: {node_locale: {eq: "en-US"}}) {
          nodes {
            image {
              fixed(width: 110) {
                src
                srcSet
                srcSetWebp
                srcWebp
                width
                height
                base64
                aspectRatio
              }
            }
            name
            priceTag
            priceNumber
            quantity
          }
        }
      }
                 
    `)
    return(
        <shoppingchartpage>
        <span>
        <div className={styles.webTitle}>Košarica</div>
        </span>

    <section className={styles.frames}>
        <section className={styles.frame1}>
            <div className={styles.description}>
                <p className={styles.priceTitle}>cijena</p>
                <p className={styles.quantityTitle}>količina</p> 
                <p className={styles.sumTitle}>zajedno</p>
            </div>

            <div className={styles.inChart}>
             {data.allContentfulShopping.nodes.map(el => {
                 return(
                    <div className={styles.productStyle}>
                        <FontAwesomeIcon icon={faTimes} className={styles.xIcon} onClick={() => (0)} /> 
                        
                            <Img fixed={el.image.fixed} className={styles.imageStyle} />
                            <ul className={styles.info}>
                                <div className={styles.nameStyle}>{el.name}</div>
                                <div className={styles.priceStyle}>{el.priceTag}</div>
                                <div className={styles.quantityStyle}>{el.quantity}x</div>
                                <div className={styles.sumStyle}>{el.priceNumber*el.quantity}.00 kn</div>
                            </ul>
                    </div>
                )  })} 
            </div>

        </section>

        <section className={styles.frame2}>
            <div className={styles.total}>Ukupan iznos</div>
            <div className={styles.productPrice}>
                <p>Cijena proizvoda:<span className={styles.priceProduct}> 895.00 kn</span></p>
            </div>
            <div className={styles.shipping}>
                <p>Trošak dostave:<span className={styles.priceShipp}> 0.00 kn</span></p>
            </div>
            <div className={styles.billing}>
                <p>Ukupno za naplatu:<span className={styles.priceAll}> 895.00 kn</span></p>
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
} 

export default ShoppingChart