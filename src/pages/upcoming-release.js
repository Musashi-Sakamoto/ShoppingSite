import React from 'react'
import { graphql } from 'gatsby'
import SEO from '~/components/seo'
import { Container } from '~/utils/styles'

import CollectionGrid from '~/components/CollectionGrid'

const UpcomingPage = ({ data }) => {
  const collections = data.allShopifyCollection.edges
  return (
    <>
      <SEO
        title="Upcoming"
        keywords={[`alt.fashion`, `upcoming`, `upcoming release`]}
      />
      <Container>
        <CollectionGrid
          collections={collections}
          pageTitle="Upcoming Release"
        />
      </Container>
    </>
  )
}

export const query = graphql`
  query {
    allShopifyCollection(
      filter: {
        handle: { ne: "frontpage" }
        fields: { isUpcoming: { eq: true } }
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

export default UpcomingPage
