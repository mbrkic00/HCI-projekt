import React from 'react'
import styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const BlogPageMain = () => (
    <blogPage>
        <span>
        <div className={styles.blog}>Blog</div>
        <div className={styles.text}>Ne možete odlučiti koju vrstu cvijeća pokloniti dragoj osobi? Na našem blogu pronađite razne simbolike te korisne savjete i obradujte svoje najmilije!</div>
        </span>

        <div className={styles.a}>
            <section className={styles.image1}></section>
            <div className={styles.article}><p className={styles.h}>Simbolika cvijeća</p>
            <p className={styles.news}>Ne znate koji buket odabrati? U današnjem članku donosimo Vam listu najtraženijih cvjetova s njihovim značenjima...</p>
            <button className={styles.button}>Otvori<FontAwesomeIcon icon={faChevronRight} className={styles.chevronIcon}/></button></div>
            
        </div>

        <div className={styles.a}>
            <section className={styles.image2}></section>
            <div className={styles.article}><p className={styles.h}>Cvijeće za rođendan</p>
            <p className={styles.news}>Sigurno ponekad ne znate što pokloniti nekome za rođendan. Neka to bude cvijeće. Otkrit ćemo Vam koje se cvijeće ne stavlja u buket za rođendan, tko ga uručuje...</p>
            <button className={styles.button}>Otvori<FontAwesomeIcon icon={faChevronRight} className={styles.chevronIcon}/></button></div>
        </div>
        
        <div className={styles.a}>
            <section className={styles.image3}></section>
            <div className={styles.article}><p className={styles.h}>Briga o lončanicama</p>
            <p className={styles.news}>Postoji mnogo razloga zašto je uzgoj biljaka u loncima toliko popularan: omogućava vrtlarima koji izazivaju prostor da se prepune nizu cvijeća, povrća, patuljastih stabala
            i grmlja...</p>
            <button className={styles.button}>Otvori<FontAwesomeIcon icon={faChevronRight} className={styles.chevronIcon}/></button></div>
        </div>
        
        <button className={styles.loadmore}>Učitaj još...</button>

    </blogPage>
)

export default BlogPageMain