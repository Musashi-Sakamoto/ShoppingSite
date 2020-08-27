import React from 'react'
import { graphql } from 'gatsby'

import SEO from '~/components/seo'
import Policy from '~/components/Policy'

const PrivacyPage = ({ data }) => {
  const policies = data.allShopifyShopPolicy.nodes
  return (
    <>
      <SEO title="Home" keywords={[`alt.fashion`, `refund policy`]} />
      <Policy policies={policies} />
    </>
  )
}

export const query = graphql`
  query {
    allShopifyShopPolicy(filter: { type: { eq: "refundPolicy" } }) {
      nodes {
        body
      }
    }
  }
`

export default PrivacyPage
