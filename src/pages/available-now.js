import React from 'react'
import { graphql } from 'gatsby'
import SEO from '~/components/seo'
import { Container } from '~/utils/styles'

import CollectionGrid from '~/components/CollectionGrid'

const AvailablePage = ({ data }) => {
  const collections = data.allShopifyCollection.edges
  return (
    <>
      <SEO
        title="Upcoming"
        keywords={[`alt.fashion`, `available`, `available now`]}
      />
      <Container>
        <CollectionGrid collections={collections} pageTitle="Available Now" />
      </Container>
    </>
  )
}

export const query = graphql`
  query {
    allShopifyCollection(
      filter: {
        handle: { ne: "frontpage" }
        fields: { isUpcoming: { eq: false } }
      }
    ) {
      edges {
        node {
          fields {
            slug
            isUpcoming
          }
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
          title
        }
      }
    }
  }
`

export default AvailablePage
