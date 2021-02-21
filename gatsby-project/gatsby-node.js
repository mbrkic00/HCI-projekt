/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const raw = await graphql(`query {
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
          fixed(width: 500) {
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
 
  const res = raw.data.allContentfulBlogPost.nodes
 
  res.forEach((e) => actions.createPage({
    component: path.resolve(`./src/layouts/blog.js`),
    context: {
      ...e,
    },
    path: `posts/${e.slug}`,
    slug: `posts/${e.slug}`
  }))
} 

exports.createPages = async ({ graphql, actions }) => {
  const raw = await graphql(`query {
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
          fixed(width: 500) {
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

    const res = raw.data.allContentfulFlowers.nodes
 
    res.forEach((e) => actions.createPage({
      component: path.resolve(`./src/layouts/buketi.js`),
      context: {
        ...e,
      },
      path: `buketi/${e.flowerName}`,
      slug: `buketi/${e.flowerName}`
    }))
  } 