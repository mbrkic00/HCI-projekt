import React from 'react'
import { productCategories } from '../../constants/const'
import styles from './style.module.css'
import {Link} from 'gatsby'

const WebShopMain = () => (
    <webShopPage>
        <div>
            <p className={styles.webTitle}>Web shop</p>
            <p className={styles.webMsg}>Odaberite željenu kategoriju i uživajte u kupovini!</p>
        </div>
        
            <div className={styles.categories}>
                {productCategories.map(({categoryName, categoryImage, to}) => (
                    <div className={styles.flowerCategory}>
                        <Link to={to}>
                        <img src={categoryImage} alt="img001" className={styles.imageStyle} />
                        <div className={styles.categoryInfo}>{categoryName}</div>
                        </Link>
                    </div>
                    ))}
            
            <div className={styles.flowerCategory}>
                <div className={styles.image5}></div>
                <div className={styles.categoryInfo}>Izradi po želji</div>
            </div>
            </div>
        
    </webShopPage>
)
export default WebShopMain
