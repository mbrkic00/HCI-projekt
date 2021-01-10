import React from 'react'
import { productsBuketi } from '../../constants/const'
import Combobox from '../ComboBox'

import styles from './style.module.css'


const WebShopBuketi = () => (
    <webShopPage className={styles.webShop}>
        <div>
            <p className={styles.webTitle}>Web shop/ Buketi</p>
            <div className={styles.searchAndSort}>
                <div>
                    <input type="search" placeholder=" Trazi..." className={styles.searchBar} />
                </div>
            <Combobox />
            </div>
            <div className={styles.categories}>
                {productsBuketi.map(({productName, productPrice, productImage}) => (
                    
                        <div className={styles.flowerCategory}>
                            <img src={productImage} alt="img001" className={styles.imageStyle} />
                            <div className={styles.productInfo}>{productName}<span>{productPrice}</span></div>
                        </div>
                ))};
            </div> 
        </div>
    </webShopPage>
)
export default WebShopBuketi
