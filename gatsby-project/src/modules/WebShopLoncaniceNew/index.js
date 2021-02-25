import React, { useState } from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import styles from './style.module.css'
import SearchIcon from '@material-ui/icons/Search';
import ComboBox from '../../components/ComboBox'


const loncaniceNiz = [
	{ title: "Yucca", for: ["yucca", "Yucca"], to:'/' },
	{ title: "Agava", for: ["Agava", "agava"], to:'/' },
	{ title: "Drvo života", for: ["drvo", "života", "zivota"], to:'/' },
	{ title: "Fikus", for: ["Fikus", "fikus"], to:'/' },
  { title: "Fejka", for: ["fejka", "Fejka"], to:'/' },
  { title: "Monstera", for: ["monstera", "Monstera"], to:'/' }
];

 
const WebShopLoncaniceNew = () => {
  const [arrayToShow, setArray] = useState(loncaniceNiz);
  const filters = ["loncanica"];
  const [showFilter, setShowFilter] = useState(false);
  const data = useStaticQuery(graphql`
    query {
        allContentfulLoncanice(filter: {node_locale: {eq: "en-US"}}) {
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
                  const newArray = loncaniceNiz.filter((el) => el.title.includes(value));
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
          {data.allContentfulLoncanice.nodes.map(node => {
            return (
              <Link to={`/loncanice/${node.flowerName}`}>
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
 
export default WebShopLoncaniceNew