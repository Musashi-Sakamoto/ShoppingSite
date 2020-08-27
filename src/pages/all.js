import React from 'react'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'
import { Container } from '~/utils/styles'

const AllPage = () => {
  return (
    <>
      <SEO title="Home" keywords={[`alt.fashion`, `new arrival`, `home`]} />
      <Container>
        <ProductGrid />
      </Container>
    </>
  )
}

export default AllPage
