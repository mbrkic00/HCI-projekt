import React from 'react'
import styles from './style.module.css'

const BlogPageNews1 = () => (
    <blogPageNews1>
        <p className={styles.blog1Title}>Blog/Cvijeće za rođendan</p>
        <section className={styles.frame}>
        <section className={styles.image}></section>
            <p className={styles.newsTitle}>Cvijeće za rođendan</p>
            <div className={styles.newsContent}>
            Sigurno se često dogodi da ne znate što pokloniti nekome za rođendan. Neka to bude cvijeće. Cvijeće uvijek možete pokloniti ženi, pa čak i muškarcu, a ovo su neka pravila kojih bi se trebalo pridržavati:<br/><br/>

            - Ne stavljajte u bukete ljiljane i krizanteme. To je cvijeće za pogrebe te može označavati lošu sreću ako se poklanja za rođendane.<br/>
            - Ljubičasto cvijeće također zaobiđite jer označava žalost.<br/>
            - Buket od ruža ne daruje se tuđim ženama.<br/>
            - Ako dolazite u goste, muškarac je taj koji predaje cvijeće u ruke slavljeniku.<br/>
            - Muškarci ne smiju darivati cvijeće u posudi, već samo rezano cvijeće.<br/>
            - Tegle s cvijećem mogu se darovati samo ženi.<br/>
            </div>
            <button className={styles.return}>Povratak na ostale teme...</button>
        </section>

        
    </blogPageNews1>
)

export default BlogPageNews1
