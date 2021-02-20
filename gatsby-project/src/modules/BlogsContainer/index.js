import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import styles from './style.module.css'
 
const BlogContainers = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(filter: {node_locale: {eq: "en-US"}}) {
        nodes {
          summary {
            internal {
              content
            }
          }
          body {
            raw
          }
          title
          slug
          updatedAt
          coverImage {
            fixed(width: 340) {
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
        <h2 className={styles.h2}>Dobrodošli na naš blog!</h2>
        <li className={styles.list}>
          {data.allContentfulBlogPost.nodes.map(node => {
            return (
              <Link to={`/posts/${node.slug}`}>
                <ul className={styles.pt1}>
                  <Img fixed={node.coverImage.fixed} />
                  <li className={styles.pt2}>
                    <h3>{node.title}</h3>
                    <span>{node.summary.internal.content}</span>
                  </li>
                </ul>
              </Link>
            )
          })}
        </li>
      </section>
  )
}
 
export default BlogContainers