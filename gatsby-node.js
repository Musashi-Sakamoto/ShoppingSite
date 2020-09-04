const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `ShopifyCollection`) {
    const collectionSlug = node.handle.startsWith('upcoming')
      ? node.handle.split('-')[1]
      : node.handle.split('-')[0]
    const isUpcoming = node.handle.startsWith('upcoming')
    const topFive = node.handle.endsWith('altfront')
      ? node.handle.split('-').slice(-1)[0]
      : 'not-top5'
    console.log('createNodeField: ', collectionSlug, isUpcoming)
    createNodeField({
      node,
      name: `slug`,
      value: collectionSlug,
    })
    createNodeField({
      node,
      name: `isUpcoming`,
      value: isUpcoming,
    })
    createNodeField({
      node,
      name: `topFive`,
      value: topFive,
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
