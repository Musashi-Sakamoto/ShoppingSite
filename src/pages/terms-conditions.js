import React from 'react'
import { graphql } from 'gatsby'

import SEO from '~/components/seo'
import Policy from '~/components/Policy'

const TermsOfServicePage = ({ data }) => {
  const policies = data.allShopifyShopPolicy.nodes
  return (
    <>
      <SEO title="Home" keywords={[`alt.fashion`, `terms of conditions`]} />
      <Policy policies={policies} />
    </>
  )
}

export const query = graphql`
  query {
    allShopifyShopPolicy(filter: { type: { eq: "termsOfService" } }) {
      nodes {
        body
      }
    }
  }
`

export default TermsOfServicePage
