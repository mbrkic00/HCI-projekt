import React from 'react'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Img from 'gatsby-image'
import {Link} from 'gatsby'
 
import styles from './blog.module.css'
import HeaderFooterLayout from '../layouts/headerFooter'
 
const BlogPost = ({ pageContext }) => {
  const { body, title, coverImage, summary } = pageContext
  // const { body, title, coverImage, summary, next, prev } = pageContext
  return (
    <HeaderFooterLayout>
      <main className={styles.container}>
          <h2 className={styles.Title}>
            {title}
          </h2>
        <Img fixed={coverImage.fixed} />
        <article>
        {renderRichText(body)}
        </article>
      </main>
      <Link to='/blogs'><button className={styles.returnButton}>Povratak na ostale vijesti...</button></Link>
    </HeaderFooterLayout>
  )
}
 
export default BlogPost