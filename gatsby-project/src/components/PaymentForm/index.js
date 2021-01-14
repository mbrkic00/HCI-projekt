import React from 'react'
import styles from './style.module.css'

const Payment = () => (
    <div>
        <p className={styles.webTitle}>Košarica - Plaćanje</p>
        <div className={styles.paymentPage}>
            <p className={styles.instructionTitle}>Ispunite formu za plaćanje:</p>
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
            <p className={styles.radioButtonText}>Pouzećem </p>
            <button type="radio" name="cash" className={styles.radioButton}></button>
            </div>
            <p className={styles.radioButtonText}>Karticom:</p>
            <div className={styles.cardPayments}>
                
            </div>
            <div className={styles.nameBox}>
                    <p>IBAN</p>
                    <input type="text" maxlength="12" className={styles.ibanInput} />
            </div>
            <div className={styles.nameBox}>
                    <p>Kontrolni broj</p>
                    <input type="text" maxlength="3" className={styles.controlNum} />
            </div>
        </div>
        <button className={styles.payButton}><span>Potvrdi plaćanje</span></button>
    </div>
)

export default Payment