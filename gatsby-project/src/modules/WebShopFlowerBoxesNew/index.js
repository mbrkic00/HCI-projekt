import React, { useState } from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import styles from './style.module.css'
import SearchIcon from '@material-ui/icons/Search';
import ComboBox from '../../components/ComboBox'


const flowerBoxesNiz = [
	{ title: "Cvjetna kutija siva", for: ["cvjetna", "Cvjetna", "kutija", "siva"] },
	{ title: "Cvjetna kutija 'Proljeće'", for: ["cvjetna", "Cvjetna", "kutija", "proljece", "Proljece", "proljeće", "Proljeće"] },
	{ title: "Cvjetna kutija 'Misterij", for: ["cvjetna", "Cvjetna", "kutija", "misterij", "Misterij"] },
	{ title: "Cvjetna kutija 'Naranča'", for: ["cvjetna", "Cvjetna", "kutija", "naranca", "naranča", "Naranča", "Naranca"] },
  { title: "Cvjetna kutija 'Snježna kraljica'", for: ["cvjetna", "Cvjetna", "snjezna", "kraljica"] },
  { title: "Cvjetna kutija 'Ruža crvena'", for: ["cvjetna", "Cvjetna", "ruža", "crvena", "ruza"] },
  { title: "Cvjetna kutija 'Princeza'", for: ["cvjetna", "Cvjetna", "kutija", "princeza"] }
];
 
const WebShopFlowerBoxesNew = () => {
  const [showFilter, setShowFilter] = useState(false);
  const data = useStaticQuery(graphql`
    query {
        allContentfulFlowerBox(filter: {node_locale: {eq: "en-US"}}) {
            nodes {
              flowerName
              internal {
                content
              }
              flowerDescription {
                raw
              }
              flowerPrice
              image  {
                fixed(width: 280) {
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
            }
        }
    }`)
 

    
    return (
      <section className={styles.container}>
        <div className={styles.titleAndSearch}>
        <h1 className={styles.title}>Web shop - Cvjetne kutije</h1>
        <div className={styles.searchAndSort}>
                <div>
                    <div className={styles.search}>
                        <input type="search" placeholder=" Trazi..." className={styles.searchBar} onClick={() => setShowFilter(!showFilter)} />
                        <Link to={'/webShopFlowerBoxes'}><div className={styles.searchBttn}><SearchIcon /></div></Link>
                        </div>
                        {showFilter?
                            <div className={styles.filterList} style={{display: showFilter ? 'flex' : 'none'}}>
                                { flowerBoxesNiz.map(({title}) => 
                                    <li className={styles.filterListElement}>{title}</li>
                                )
                                }
                            </div>
                            :null
                        }
                    
                    </div>  
                </div>
             <ComboBox />
            </div>
        <li className={styles.list}>
          {data.allContentfulFlowerBox.nodes.map(node => {
            return (
              <Link to={`/cvjetnekutije/${node.flowerName}`}>
                <ul className={styles.category}>
                <span className={styles.imageStyle}><Img fixed={node.image.fixed} /></span>
                <div className={styles.productInfo}>
                  <li className={styles.flower_name}>{node.flowerName}</li>
                  <li className={styles.flower_price}>{node.flowerPrice}</li>
                </div>
                    {/* <span>{JSON.parse(node.flowerDescription.raw).content[0].content[0].value}</span> */}
                </ul>
              </Link>
            )
          })}
        </li>
      </section>
  )
}
 
export default WebShopFlowerBoxesNew