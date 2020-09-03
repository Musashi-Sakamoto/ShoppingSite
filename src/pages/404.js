import React from 'react'

import SEO from '~/components/seo'
import { Container, StyledLink } from '~/utils/styles'

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <Container>
      <h1
        style={{
          marginTop: 48,
          textAlign: 'center',
        }}
      >
        NOT FOUND
      </h1>
      <p
        style={{
          marginTop: 48,
          textAlign: 'center',
        }}
      >
        The page you requested does not exist. Click{' '}
        <StyledLink to="/">here</StyledLink> to continue shopping.
      </p>
    </Container>
  </>
)

export default NotFoundPage
