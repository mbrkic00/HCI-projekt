import React from 'react'
import {Link} from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styles from './style.module.css'

const MakeYourOwn = () => {

    const data = useStaticQuery (graphql`
    query{
        allContentfulMakeYourOwnProduct(filter: {node_locale: {eq: "en-US"}}) {
          nodes {
            image {
              fixed(width: 200) {
                src
                srcSet
                srcSetWebp
                srcWebp
                width
                height
                base64
                aspectRatio
              }
            }
            name
            price
          }
        }
      }`)
      return(
        <div className={styles.page}>
            <p className={styles.webTitle}>Web shop - Izradi po želji </p>
            <div className={styles.webShop}>
                <div className={styles.imageGallery}>
                  {data.allContentfulMakeYourOwnProduct.nodes.map(node => {
                      return(
                          <div className={styles.productBox}>
                            <Img className={styles.productImage} fixed={node.image.fixed} />
                            <div className={styles.productName}>{node.name}</div>
                            <div className={styles.checkingRow}>
                                <div className={styles.productPrice}>{node.price}</div>
                                <input type="checkbox" className={styles.pickBox} />
                            </div>
                          </div>                     
                         )
                  }
                    )}
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
    
}
export default MakeYourOwn