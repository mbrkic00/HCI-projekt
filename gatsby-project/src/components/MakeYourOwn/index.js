import React, {useState} from 'react'
import {Link} from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styles from './style.module.css'


const MakeYourOwn = () => {
  const [pickedBox, setPickedBox] = useState (false)
  
  const [quantity, setQuantity] = useState(1);

  /*const [moveProduct, setMoveProduct]=useState(0) */
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
          totalCount
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
                                <input type="checkbox" className={styles.pickBox}  onClick={() => setPickedBox(!pickedBox)} />
                              {
                                      ((node.pickedBox))?
                                      <div className={styles.pickedProduct}>
                                        <Img className={styles.pickedProductImage} fixed={node.image.fixed}/>
                                        <div className={styles.quantityNum}>
                                            <input type="button" value="-" onClick={() => (
                                                quantity === 1 ? 1 :
                                                setQuantity(quantity-1))} className={styles.minus}></input>
                                            <input type="number" value={quantity} className={styles.numBox}></input>
                                            <input type="button" value="+" onClick={() => setQuantity(quantity+1)} className={styles.plus}></input>
                                        </div>
                                        <div className={styles.pickedProductPrice}>{node.price}</div>
                                      </div>
                                      :null
                                  } 

                            </div>
                          </div>                     
                         )
                  }
                
                    )}
                    <div className={styles.loadMore}>Učitaj još...</div>
                </div>   
                <div className={styles.boxAndBttn}>
                    <div className={styles.choicesBox}>
                        <div className={styles.choicesBoxTitle}>Vaš odabir</div>
                      
                      {/*   {
                           
                                (pickedBox  )?
                                <div className={styles.pickedProduct}>
                                      <Img className={styles.pickedProductImage}></Img>
                                      <div className={styles.quantityNum}>
                                          <input type="button" value="-" onClick={() => (
                                              quantity === 1 ? 1 :
                                              setQuantity(quantity-1))} className={styles.minus}></input>
                                          <input type="number" value={quantity} className={styles.numBox}></input>
                                          <input type="button" value="+" onClick={() => setQuantity(quantity+1)} className={styles.plus}></input>
                                      </div>
                                      <div className={styles.pickedProductPrice}>{data.allContentfulMakeYourOwnProduct.nodes.price}</div>
                                </div>
                                :null
                              
                            
                            
                        } */}
                    </div>  
                    <Link to={'/kosarica'}><button className={styles.addBttn}><span>Dodaj u košaricu</span></button></Link>
                </div>
            </div>

            
        </div>
     )
    
}
export default MakeYourOwn