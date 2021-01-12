import React from 'react'
import styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { blogNews } from '../../constants/const'
import {Link} from 'gatsby'

const BlogPageMain = () => (
    <blogPage>
        <span>
        <div className={styles.blog}>Blog</div>
        <div className={styles.text}>Ne možete odlučiti koju vrstu cvijeća pokloniti dragoj osobi? Na našem blogu pronađite razne simbolike te korisne savjete i obradujte svoje najmilije!</div>
        </span>

        <div className={styles.a}>
            {blogNews.map(({heading, image, newsContent, to}) => (
                    <div className={styles.blogStyle}>
                        <img src={image} alt="img001" className={styles.imageStyle} />
                        <section className={styles.subblogStyle}>
                            <h className={styles.h}>{heading}</h>
                            <p className={styles.news}>{newsContent}</p>
                            <Link to={to}><button className={styles.button}>Otvori<FontAwesomeIcon icon={faChevronRight} className={styles.chevronIcon}/></button></Link>
                        </section>
                    </div>
                    
                    ))}
        </div>
        
        <button className={styles.loadmore}>Učitaj još...</button>

    </blogPage>
)

export default BlogPageMain