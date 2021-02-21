import React from 'react'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Img from 'gatsby-image'
import {Link} from 'gatsby'
 
import styles from './buketi.module.css'
import HeaderFooterLayout from '../layouts/headerFooter'
 
const Buket = ({ pageContext }) => {
  const { flowerDescription, flowerName, image, flowerPrice } = pageContext

  return (
    <HeaderFooterLayout>
      <main className={styles.container}>
          <h2 className={styles.Title}>
            {flowerName}
          </h2>
        <h3>{flowerPrice}</h3>
        <Img fixed={image.fixed} />
        <article>
        {renderRichText(flowerDescription)}
        </article>
      </main>
      <Link to='/webShopBuketi'><button className={styles.returnButton}>Povratak na ostale bukete...</button></Link>
    </HeaderFooterLayout>
  )
}
 
export default Buket