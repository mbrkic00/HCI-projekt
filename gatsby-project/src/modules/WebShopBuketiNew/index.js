import React, { useState } from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import styles from './style.module.css'
import SearchIcon from '@material-ui/icons/Search';
import { colors } from '@material-ui/core';
// import Combobox from './components/ComboBox' 


const buketiNiz = [
	{ title: "Jednostavne ruže", for: ["ruža", "ruže"] },
	{ title: "Ljiljani i ruže mix", for: ["ljiljani", "ruža", "ruže", "mix"] },
	{ title: "Šareni tulipani", for: ["šareni", "tulipani"] },
	{ title: "Šareni buket", for: ["šareni", "buket"] },
	{ title: "Buket Amarilis", for: ["buket", "amarilis"] }
];

const WebShopBuketiNew = () => {
const [arrayToShow, setArray] = useState(buketiNiz);
  const filters = ["buket"];
  const [showFilter, setShowFilter] = useState(false);
  const data = useStaticQuery(graphql`
    query {
        allContentfulFlowers(filter: {node_locale: {eq: "en-US"}}) {
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
              {/* <div className={styles.searchAndSort}>
                 <div>
                    <div className={styles.search}>
                        <input type="search" placeholder=" Trazi..." className={styles.searchBar} onClick={() => setShowFilter(!showFilter)} />
                        <Link to={'/webShopBuketi'}><div className={styles.searchBttn}><SearchIcon /></div></Link>
                        </div>
                        {showFilter?
                            <div className={styles.filterList} style={{display: showFilter ? 'flex' : 'none'}}>
                                { buketiNiz.map(({title}) => 
                                    <li className={styles.filterListElement}>{title}</li>
                                )
                                }
                            </div>
                            :null
                        }
                    
                    </div>  
                </div> */}
            {/* <Combobox /> */}


            <div className={styles.searchAndSort}>
                 <div>
                    {/* <div className={styles.search}>
                        <input type="search" placeholder=" Trazi..." className={styles.searchBar} onClick={() => {const filteredarray = buketiNiz.filter((el) => !!el.for.find((e) => filters.includes(e)));
                        setArray(filteredarray);}} />
                        <Link to={'/webShopBuketi'}><div className={styles.searchBttn}><SearchIcon /></div></Link>
                        </div> */}
                        {/* {showFilter?
                            <div className={styles.filterList} style={{display: showFilter ? 'flex' : 'none'}}>
                                { buketiNiz.map(({title}) => 
                                    <li className={styles.filterListElement}>{title}</li>
                                )
                                }
                            </div>
                            :null
                        } */}

      <div style={{display:"flex", 
                  flexflow:"row"}}>
        <input placeholder=" Trazi..."  style={{border: "1px solid #cecece", 
                                              height: "31px",
                                              width: "189px",
                                              outline: "none",
                                              fontSize: "17px",
                                              backgroundcolor: "white"
                                              }} 
            onChange={(e) => {
          const value = e.target.value;
          const newArray = buketiNiz.filter((el) => el.title.includes(value));
          setArray(newArray);
        }}
      />
      <div className={styles.searchBttn}><SearchIcon /></div>
      </div>

      <div style={{border: "1px solid #cecece" }}>{arrayToShow.map((el) => (
        <div style={{ margin: "10px 0" }}>{el.title}</div>
      ))}</div>
                    
                    </div>  
                </div>

            </div> 
            

        <li className={styles.list}>
          {data.allContentfulFlowers.nodes.map(node => {
            return (
              <Link to={`/buketi/${node.flowerName}`}>
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
 
export default WebShopBuketiNew