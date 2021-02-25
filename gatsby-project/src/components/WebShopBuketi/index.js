import React, { useState } from 'react'
import { productsBuketi } from '../../constants/const'
import Combobox from '../ComboBox'
import {Link} from 'gatsby'
import styles from './style.module.css'
import SearchIcon from '@material-ui/icons/Search';

const buketiNiz = [
	{ title: "Jednostavne ruže", for: ["ruža", "ruže"] },
	{ title: "Ljiljani i ruže mix", for: ["ljiljani", "ruža", "ruže", "mix"] },
	{ title: "Šareni tulipani", for: ["šareni", "sareni", "tulipani"] },
	{ title: "Šareni buket", for: ["šareni", "sareni", "buket"] },
	{ title: "Buket Amarilis", for: ["buket", "amarilis"] }
];

const WebShopBuketi = () => {
    const [showFilter, setShowFilter] = useState(false);
    return(
        <div>
            <p className={styles.webTitle}>Web shop - Buketi</p>
            <div className={styles.searchAndSort}>
                <div>
                    <div className={styles.search}>
                        <input type="search" placeholder=" Trazi..." className={styles.searchBar} onClick={() => setShowFilter(!showFilter)} />
                        <Link to={'/webShop1Buketi'}><div className={styles.searchBttn}><SearchIcon /></div></Link>
                        </div>
                        {showFilter?
                            <div className={styles.filterList} style={{display: showFilter ? 'flex' : 'none'}}>
                                { buketiNiz.map(({title}) => 
                                    <li className={styles.filterListElement}>{title}</li>
                                )
                                }
                            </div>
                            :null
                        }
                    
                    
                </div>
            <Combobox />
            </div>
            <div className={styles.categories}>
                {productsBuketi.map(({productName, productPrice, productImage, to}) => (
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
}
export default WebShopBuketi

