import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageLoader = ({imageName, ...rest}) => {
    const data = useStaticQuery(graphql`
    query AllPhotos {
      allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}}) {
        edges {
          node {
            childImageSharp {
              fluid (maxWidth: 400) {
                originalName,
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

    // Pronađi sliku
    const selectedImage = data.allFile.edges.find(el => el.node.childImageSharp.fluid.originalName === imageName)
    if (!selectedImage) {
      return <span>Slika nije nađena!</span>
    }
     return <Img {...rest} fluid={selectedImage.node.childImageSharp.fluid} />
  }

  export default ImageLoader
