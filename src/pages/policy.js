import React from 'react'

import SEO from '~/components/seo'
import Policy from '~/components/Policy'
import { Container } from '~/utils/styles'

const PolicyPage = ({ data }) => {
  const policies = data.allShopifyShopPolicy.nodes
  return (
    <>
      <SEO
        title="Home"
        keywords={[`alt.fashion`, `policy`, `terms of service`]}
      />
      <Container>
        <Policy policies={policies} />
      </Container>
    </>
  )
}

export const query = graphql`
  query {
    allShopifyShopPolicy {
      nodes {
        body
        title
      }
    }
  }
`

export default PolicyPage
