import React, { useContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import HoverCarousel from '../HoverCarousel'

import StoreContext from '~/context/StoreContext'
import { Grid, Product, Title, PriceTag } from './styles'
import { Img, StyledLink } from '~/utils/styles'

const ProductGrid = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const { allShopifyProduct } = useStaticQuery(
    graphql`
      query {
        allShopifyProduct(
          limit: 25
          sort: { fields: [createdAt], order: DESC }
        ) {
          edges {
            node {
              id
              title
              handle
              createdAt
              images {
                id
                originalSrc
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 910) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
              variants {
                price
              }
            }
          }
        }
      }
    `
  )

  const getPrice = price =>
    Intl.NumberFormat(undefined, {
      currency: checkout.currencyCode ? checkout.currencyCode : 'EUR',
      minimumFractionDigits: 2,
      style: 'currency',
    }).format(parseFloat(price ? price : 0))

  return (
    <Grid>
      {allShopifyProduct.edges ? (
        allShopifyProduct.edges.map(
          ({
            node: {
              id,
              handle,
              title,
              images,
              variants: [firstVariant],
            },
          }) => (
            <StyledLink to={`/product/${handle}/`} key={id}>
              <Product>
                {images.length > 0 && (
                  <HoverCarousel hoverable={images.length > 1}>
                    {images.map(image => (
                      <Img
                        fluid={image.localFile.childImageSharp.fluid}
                        key={image.id}
                        alt={title}
                      />
                    ))}
                  </HoverCarousel>
                )}
                <Title>{title}</Title>
                <PriceTag>{getPrice(firstVariant.price)}</PriceTag>
              </Product>
            </StyledLink>
          )
        )
      ) : (
        <p>No Products found!</p>
      )}
    </Grid>
  )
}

export default ProductGrid
