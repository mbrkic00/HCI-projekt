import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CatchImages = ({imageName, ...rest}) => {
const data = useStaticQuery(graphql`
    query MyQuery {
        allContentfulWebShop0Image {
            nodes {
                image {
                    fixed {
                        height
                    }
                }
                categoryTitle
            }
        }
    }
`)

const selectedImage = data.allContentfulWebShop0Image.nodes.find(el => el.node.categoryTitle === "Buketi")
    if (!selectedImage) {
      return <span>Slika nije nađena!</span>
    }
     return <Img {...rest} fluid={selectedImage.node.childImageSharp.fluid} />
}
export default CatchImages