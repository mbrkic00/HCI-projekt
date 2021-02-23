/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

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
           fixed(width: 350) {
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
    allContentfulFlowerBox(filter: {node_locale: {eq: "en-US"}}) {
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
          fixed(width: 350) {
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
    allContentfulAranzmani(filter: {node_locale: {eq: "en-US"}}) {
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
                fixed(width: 350) {
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
          fixed(width: 350) {
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
  
    const res1 = raw.data.allContentfulFlowers.nodes
 
     res1.forEach((e) => actions.createPage({
       component: path.resolve(`./src/layouts/buketi.js`),
       context: {
         ...e,
       },
         path: `buketi/${e.flowerName}`,
         slug: `buketi/${e.flowerName}`
     }))

    const res2 = raw.data.allContentfulFlowerBox.nodes
   
    res2.forEach((e) => actions.createPage({
      component: path.resolve(`./src/layouts/flowerBoxes.js`),
      context: {
        ...e,
      },
      path: `cvjetnekutije/${e.flowerName}`,
      slug: `cvjetnekutije/${e.flowerName}`
    }))
 
    const res3 = raw.data.allContentfulAranzmani.nodes
     
      res3.forEach((e) => actions.createPage({
        component: path.resolve(`./src/layouts/aranzmani.js`),
        context: {
          ...e,
        },
        path: `aranzmani/${e.flowerName}`,
        slug: `aranzmani/${e.flowerName}`
      }))

    const res4 = raw.data.allContentfulLoncanice.nodes
       
       res4.forEach((e) => actions.createPage({
         component: path.resolve(`./src/layouts/loncanice.js`),
         context: {
           ...e,
         },
         path: `loncanice/${e.flowerName}`,
         slug: `loncanice/${e.flowerName}`
       })) 
       
       const resBlog = raw.data.allContentfulBlogPost.nodes
 
          resBlog.forEach((e) => actions.createPage({
            component: path.resolve(`./src/layouts/blog.js`),
            context: {
              ...e,
            },
            path: `posts/${e.slug}`,
            slug: `posts/${e.slug}`
          }))
  } 