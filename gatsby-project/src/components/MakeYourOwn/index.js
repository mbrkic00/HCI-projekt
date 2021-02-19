import React from 'react'
import {Link} from 'gatsby'
import styles from './style.module.css'

const MakeYourOwn = () => (
    <div>
        <p className={styles.webTitle}>Web shop - Izradi po želji</p>
        <div className={styles.webShop}>
            <div className={styles.imageGallery}>
                
            </div>   
            <div className={styles.boxAndBttn}>
                <div className={styles.choicesBox}>
                    <div className={styles.choicesBoxTitle}>Vaš odabir</div>
                </div>  
                <Link to={'/kosarica'}><button className={styles.addBttn}><span>Dodaj u košaricu</span></button></Link>
            </div>
        </div>

        
    </div>
)
export default MakeYourOwn