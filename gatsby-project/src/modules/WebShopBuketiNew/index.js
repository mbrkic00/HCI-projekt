import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import styles from './style.module.css'
 
const WebShopBuketiNew = () => {
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
                fixed(width: 300) {
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
        <h1 className={styles.title}>Buketi</h1>
        <li className={styles.list}>
          {data.allContentfulFlowers.nodes.map(node => {
            return (
              <Link to={`/buketi/${node.flowerName}`}>
                <ul className={styles.pt1}>
                  <Img fixed={node.image.fixed} />
                  <li className={styles.pt2}>
                    <div>{node.flowerName}</div>
                    <div>{node.flowerPrice}</div>
                    {/* <span>{JSON.parse(node.flowerDescription.raw).content[0].content[0].value}</span> */}
                  </li>
                </ul>
              </Link>
            )
          })}
        </li>
      </section>
  )
}
 
export default WebShopBuketiNew