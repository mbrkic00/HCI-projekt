import React, {useState} from 'react'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Img from 'gatsby-image'
import {Link} from 'gatsby'
import { Suggestions } from '../constants/const.js'
 
import styles from './aranzmani.module.css'
import HeaderFooterLayout from '../layouts/headerFooter'
 
const Aranzmani = ({ pageContext }) => {
  const [quantity, setQuantity] = useState(1);
  const { flowerDescription, flowerName, image, flowerPrice } = pageContext

  return (
    <HeaderFooterLayout>
      <main className={styles.container}>
        <h2 className={styles.title}>Web shop - Aranžmani - {flowerName}</h2>
        <div className={styles.allInfo}>
          <div className={styles.imageStyle}><Img fixed={image.fixed} /></div>
          <ul className={styles.productInfo}>
            <article className={styles.description}>
              <p className={styles.title2}>Opis proizvoda:</p>
              {renderRichText(flowerDescription)}
              <p className={styles.price}>{flowerPrice}</p>
            </article>

            <div className={styles.quantity}>
                    <input type="button" value="-" onClick={() => (
                        quantity == 1 ? 1 :
                        setQuantity(quantity-1))} className={styles.minus}></input>
                    <input type="number" value={quantity} className={styles.numBox}></input>
                    <input type="button" value="+" onClick={() => setQuantity(quantity+1)}  className={styles.plus}></input>
            </div>
            <Link to={'/kosarica'}><button className={styles.addButton}><span>Dodaj u košaricu</span></button></Link>
            </ul>
          </div>
          
          
      </main>
      {/* <Link to='/webShopAranzmani'><button className={styles.returnButton}>Povratak na ostale aranžmane...</button></Link> */}
    

      <p className={styles.suggestionTitle}>Možda Vam se sviđa:</p>
      <div className={styles.suggestionGallery}>
            {Suggestions.map(({suggestion, galleryImage, to}) => (
                    <div className={styles.suggestionBox}>
                        <Link to={to}>
                        <img src={galleryImage} alt="img001" className={styles.galleryImage} />
                        <div className={styles.imageName}>{suggestion}</div>
                        </Link>
                    </div>
                    ))}
        </div>

    </HeaderFooterLayout>
  )
}
 
export default Aranzmani