import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'
import { Header, BottomLinkDiv, StyledLink, Container } from '~/utils/styles'
import VideoNav from '~/components/VideoNav'

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <VideoNav />
    <Container>
      <Header>NEW ARRIVALS</Header>
      <ProductGrid />
      <BottomLinkDiv>
        <StyledLink to="/collections/new-arrival">
          VIEW ALL <FontAwesomeIcon icon={faAngleRight} />
        </StyledLink>
      </BottomLinkDiv>
    </Container>
  </>
)

export default IndexPage
