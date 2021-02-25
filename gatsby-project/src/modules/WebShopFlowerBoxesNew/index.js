import React, { useState } from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import styles from './style.module.css'
import SearchIcon from '@material-ui/icons/Search';
import ComboBox from '../../components/ComboBox'


const flowerBoxesNiz = [
	{ title: "Cvjetna kutija siva", for: ["cvjetna", "Cvjetna", "kutija", "siva"], to:'/' },
	{ title: "Cvjetna kutija 'Proljeće'", for: ["cvjetna", "Cvjetna", "kutija", "proljece", "Proljece", "proljeće", "Proljeće"], to:'/' },
	{ title: "Cvjetna kutija 'Misterij", for: ["cvjetna", "Cvjetna", "kutija", "misterij", "Misterij"], to:'/' },
	{ title: "Cvjetna kutija 'Naranča'", for: ["cvjetna", "Cvjetna", "kutija", "naranca", "naranča", "Naranča", "Naranca"], to:'/' },
  { title: "Cvjetna kutija 'Snježna kraljica'", for: ["cvjetna", "Cvjetna", "snjezna", "kraljica"], to:'/' },
  { title: "Cvjetna kutija 'Ruža crvena'", for: ["cvjetna", "Cvjetna", "ruža", "crvena", "ruza"], to:'/' },
  { title: "Cvjetna kutija 'Princeza'", for: ["cvjetna", "Cvjetna", "kutija", "princeza"], to:'/' }
];
 
const WebShopFlowerBoxesNew = () => {
  const [arrayToShow, setArray] = useState(flowerBoxesNiz);
  const filters = ["cvjetna kutija"];
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
        <h1 className={styles.title}>Web shop - Buketi</h1>
            <div className={styles.searchAndSort}>
            <div>

              <div onClick={() => setShowFilter(!showFilter)} className={styles.search}>
                <input placeholder=" Trazi..."  className={styles.searchBar} 
                  onChange={(e) => {
                  const value = e.target.value;
                  const newArray = flowerBoxesNiz.filter((el) => el.title.includes(value));
                  setArray(newArray);
                }}
              />
              <div className={styles.searchBttn}><SearchIcon /></div>
            </div>
     
            {showFilter?
            <div className={styles.filterList} style={{display: showFilter ? 'flex' : 'none'}}>
              {arrayToShow.map((el) => (
              <Link to={el.to}><div className={styles.filterListElement}>{el.title}</div></Link>
            
            ))}
            </div>
            :null
            }
                    
          </div>  
        </div>

      </div> 
           {/* <ComboBox /> */}

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