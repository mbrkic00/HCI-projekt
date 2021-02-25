import React, { useState } from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import SearchIcon from '@material-ui/icons/Search';
import ComboBox from '../../components/ComboBox'

import styles from './style.module.css'
 


const aranzmaniNiz = [
	{ title: "Aranžman ruže i irisi", for: ["ruža", "ruže", "Aranzman", "aranzman", "aranžman", "Aranžman", "irisi"], to:'/'},
	{ title: "Aranžman crveni gerberi", for: ["Aranzman", "aranzman", "aranžman", "Aranžman", "crveni", "gerberi"], to:'/' },
	{ title: "Crveno bijeli aranžman", for: ["crveno", "bijeli", "aranzman", "aranžman", "Crveno"], to:'/' },
	{ title: "Rozi aranžman", for: ["Rozi", "rozi", "aranzman", "aranžman"], to:'/' },
	{ title: "Nježni aranžman", for: ["Njezni", "Nježni", "njezni", "nježni", "aranzman", "aranžman"], to:'/' }
];
const WebShopAranzmaniNew = () => {
  const [arrayToShow, setArray] = useState(aranzmaniNiz);
  const filters = ["buket"];
  const [showFilter, setShowFilter] = useState(false);  const data = useStaticQuery(graphql`
    query {
        allContentfulAranzmani(filter: {node_locale: {eq: "en-US"}}) {
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
                  const newArray = aranzmaniNiz.filter((el) => el.title.includes(value));
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
          {data.allContentfulAranzmani.nodes.map(node => {
            return (
              <Link to={`/aranzmani/${node.flowerName}`}>
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
 
export default WebShopAranzmaniNew