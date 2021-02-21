import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CatchImages = ({data}) => {
/*const data = useStaticQuery(graphql`
query MyQuery {
    allContentfulMakeYourOwnProduct {
      edges {
        node {
          image {
            fixed(height: 30) {
              aspectRatio
              base64
              src
              srcSet
            }
            description
          }
          name
          price
        }
      }
    }
  } 
`)*/

    // Pronađi sliku
    /*const selectedImage = data.allContentfulMakeYourOwnProduct.nodes.find(el => el.name === data.name)
    if (!selectedImage) {
      return <span>Slika nije nađena!</span>
    }
     return <Img fluid={selectedImage.node.childImageSharp.fluid} fixed={selectedImage.fixed} /> */

    return (
        <div>
            <div>{data.allContentfulMakeYourOwnProduct.edges.node.price}</div>
        </div>
    )

  }

  export const query = graphql`
  query MyQuery {
      allContentfulMakeYourOwnProduct {
        edges {
          node {
            image {
              fixed(height: 30) {
                aspectRatio
                base64
                src
                srcSet
              }
              description
            }
            name
            price
          }
        }
      }
    } 
  `

  export default CatchImages