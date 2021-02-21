import React from 'react'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Img from 'gatsby-image'
import {Link} from 'gatsby'
 
import styles from './flowerBoxes.module.css'
import HeaderFooterLayout from '../layouts/headerFooter'
 
const FlowerBox = ({ pageContext }) => {
  const { flowerDescription, flowerName, image, flowerPrice } = pageContext

  return (
    <HeaderFooterLayout>
      <main className={styles.container}>
        <h2 className={styles.title}>Web shop - Cvijeće u kutiji - {flowerName}</h2>
        <div className={styles.imageStyle}><Img fixed={image.fixed} /></div>
        <ul>
          <article>
            {renderRichText(flowerDescription)}
            <h3>{flowerPrice}</h3>
          </article>
        </ul>
      </main>
      <Link to='/webShopFlowerBoxes'><button className={styles.returnButton}>Povratak na ostale cvjetne kutije...</button></Link>
    </HeaderFooterLayout>
  )
}
 
export default FlowerBox