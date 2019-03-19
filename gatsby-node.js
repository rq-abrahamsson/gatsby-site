/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
  {
    allContentfulPage {
      edges {
        node {
          id
          url
        }
      }
    }
  }
  `).then(result => {
    result.data.allContentfulPage.edges.forEach(({ node }) => {
      createPage({
        path: node.url,
        component: path.resolve(`./src/templates/page.js`),
        context: {
          url: node.url,
        },
      })
    })
  })
}