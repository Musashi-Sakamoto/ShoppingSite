import React from 'react'
import SEO from '~/components/seo'
import ProductGridForCollection from '~/components/ProductGridForCollection'
import { Container, Img } from '~/utils/styles'

const CollectionPage = ({ data }) => {
  const collection = data.shopifyCollection

  return (
    <>
      <SEO title={collection.title} description={collection.description} />
      <Img
        objectPosition="10% 10%"
        fluid={collection.image.localFile.childImageSharp.fluid}
        alt={collection.fields.slug}
      />
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
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default CollectionPage
