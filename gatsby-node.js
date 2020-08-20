const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `ShopifyCollection`) {
    const collectionSlug = node.handle
    createNodeField({
      node,
      name: `slug`,
      value: collectionSlug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const productPages = graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            handle
          }
        }
      }
    }
  `).then(result => {
    result.data.allShopifyProduct.edges.forEach(({ node }) => {
      createPage({
        path: `/product/${node.handle}/`,
        component: path.resolve(`./src/templates/ProductPage/index.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          handle: node.handle,
        },
      })
    })
  })

  const collectionPages = graphql(`
    {
      allShopifyCollection {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allShopifyCollection.edges.forEach(({ node }) => {
      createPage({
        path: `/collections/${node.fields.slug}/`,
        component: path.resolve(`./src/templates/CollectionPage/index.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    })
  })
  return Promise.all([productPages, collectionPages])
}
