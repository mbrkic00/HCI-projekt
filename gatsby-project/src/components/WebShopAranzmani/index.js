import React from 'react'
import { productsAranzmani } from '../../constants/const'
import Combobox from '../ComboBox'
import {Link} from 'gatsby'
import styles from './style.module.css'


const WebShopAranzmani = () => (
        <div>
            <p className={styles.webTitle}>Web shop/ Aranzmani</p>
            <div className={styles.searchAndSort}>
                <div>
                    <input type="search" placeholder=" Trazi..." className={styles.searchBar} />
                </div>
            <Combobox />
            </div>
            <div className={styles.categories}>
                {productsAranzmani.map(({productName, productPrice, productImage, to}) => (
                        <div className={styles.flowerCategory}>
                            <Link to={to}>
                            <img src={productImage} alt="img001" className={styles.imageStyle} />
                            <div className={styles.productInfo}><span className={styles.justName}>{productName}</span><span className={styles.justPrice}>{productPrice}</span></div>
                            </Link>
                        </div>
                ))}
            </div> 
        </div>
   
)
export default WebShopAranzmani
