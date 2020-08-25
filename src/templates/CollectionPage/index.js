import React from 'react'
import SEO from '~/components/seo'
import ProductGridForCollection from '~/components/ProductGridForCollection'
import { Container, Img } from '~/utils/styles'
import { Banner } from './styles'

const CollectionPage = ({ data }) => {
  const collection = data.shopifyCollection

  return (
    <>
      <SEO title={collection.title} description={collection.description} />
      {collection.descriptionHtml && (
        <Banner
          dangerouslySetInnerHTML={{ __html: collection.descriptionHtml }}
        />
      )}
      <Container>
        <ProductGridForCollection collection={collection} />
      </Container>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    shopifyCollection(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      descriptionHtml
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
      image {
        localFile {
          childImageSharp {
            fluid(maxHeight: 300) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
      }
    }
  }
`

export default CollectionPage
