// import React from 'react'
// import {useStaticQuery, graphql, Link} from 'gatsby'
// import Img from 'gatsby-image'
// import styles from './style.module.css'
 
// const WebShopBuketiNew = () => {
//   const data = useStaticQuery(graphql`
//     query {
//         allContentfulFlowers {
//             nodes {
//               flowerName
//               internal {
//                 content
//               }
//               flowerDescription {
//                 raw
//               }
//               flowerPrice
//               image  {
//                 fixed(width: 500) {
//                     src
//                     srcSet
//                     srcSetWebp
//                     srcWebp
//                     width
//                     height
//                     base64
//                     aspectRatio
//                     }
//                 }
//             }
//         }
//     }`)
 
//     return (
//       <section className={styles.container}>
//         <li className={styles.list}>
//           {data.allContentfulFlowers.nodes.map(node => {
//             return (
//               <Link to={`/buketi/${node.flowerName}`}>
//                 <ul className={styles.pt1}>
//                   <Img fixed={node.image.fixed} />
//                   <li className={styles.pt2}>
//                     <h3>{node.imageName}</h3>
//                     <span>{node.flowerDescription.internal.content}</span>
//                   </li>
//                 </ul>
//               </Link>
//             )
//           })}
//         </li>
//       </section>
//   )
// }
 
// export default WebShopBuketiNew