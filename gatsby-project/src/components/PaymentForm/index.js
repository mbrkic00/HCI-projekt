import React from 'react'
import {Link} from 'gatsby'


import styles from './style.module.css'

const Payment = () => (
    <div>
        <p className={styles.webTitle}>Košarica - Plaćanje</p>
        <p className={styles.instructionTitle}>Ispunite formu za plaćanje:</p>
        <div className={styles.paymentPage}>
            <div className={styles.rowInfo}>
                <input type="text" placeholder=" Ime" className={styles.nameInput} />
                <input type="text" placeholder=" Prezime" className={styles.nameInput} />
            </div>
            <input type="text" placeholder=" Adresa" className={styles.adressInput} />
            <div className={styles.rowInfo}>
                <input type="text" placeholder=" Grad" className={styles.nameInput} />
                <input type="text" placeholder=" Poštanski broj" className={styles.nameInput} />
            </div>
            <input type="text" placeholder=" e-mail" className={styles.adressInput} />
            <div className={styles.rowInfo}>
                <input type="text" className={styles.dialingNum} value="+385" />
                <input type="text" placeholder=" Kontakt" className={styles.numInput} />  
            </div>
            <p className={styles.title}>Načini plaćanja:</p>
            <div className={styles.cashPayment}>
                <label className={styles.wayOfPayment1}>Pouzećem</label>
                <input type="checkbox" id="pouzece" className={styles.checkBox1} />
            </div>
            <div className={styles.cashPayment}>
                <label className={styles.wayOfPayment2}>Karticom</label>
                <input type="checkbox" id="kartica" className={styles.checkBox2} />
            </div>

            <div className={styles.creditCards}>
                <div className={styles.visaIcon}></div>
                <div className={styles.mastercardIcon}></div>
                <div className={styles.maestroIcon}></div>
            </div>
            <div className={styles.cardPaymentBox}>
                <p className={styles.name}>IBAN:</p>
                    <input type="text" placeholder="" maxlength="12" className={styles.ibanInput} />
                    <p className={styles.name}>Kontrolni broj:</p>
                    <input type="text" placeholder="" maxlength="3" className={styles.controlNum} />
            </div>
        </div>
        <Link to={'/thankYou'}><button className={styles.payButton}><span>Potvrdi plaćanje</span></button></Link>
    </div>
)

export default Payment