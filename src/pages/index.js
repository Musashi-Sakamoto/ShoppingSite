import React from 'react'
import { graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import SEO from '~/components/seo'
import ProductGridForCollection from '~/components/ProductGridForCollection'
import { Header, BottomLinkDiv, StyledLink, Container } from '~/utils/styles'
import VideoNav from '~/components/VideoNav'

const IndexPage = ({ data }) => {
  const collection = data.shopifyCollection
  return (
    <>
      <SEO title="Home" keywords={[`alt.fashion`, `new arrival`, `home`]} />
      <VideoNav />
      <Container>
        <Header>NEW ARRIVALS</Header>
        <ProductGridForCollection collection={collection} />
        <BottomLinkDiv>
          <StyledLink to="/all?page=1">
            VIEW ALL <FontAwesomeIcon icon={faAngleRight} />
          </StyledLink>
        </BottomLinkDiv>
      </Container>
    </>
  )
}

export const query = graphql`
  query {
    shopifyCollection(fields: { slug: { eq: "frontpage" } }) {
      products {
        id
        title
        handle
        description
        variants {
          price
          availableForSale
        }
        images {
          localFile {
            childImageSharp {
              fluid(maxWidth: 910) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
