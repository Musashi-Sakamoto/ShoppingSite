import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { useQueryParam, NumberParam } from 'use-query-params'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import StoreContext from '~/context/StoreContext'
import {
  Grid,
  Product,
  Title,
  PriceTag,
  Pagination,
  PaginationList,
  PaginationButton,
} from './styles'
import { Img, StyledLink } from '~/utils/styles'

const ProductGridForCollection = ({ collection }) => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const [page, setPage] = useQueryParam('page', NumberParam)
  const { products } = collection

  const pageChunk = _.chunk([...products], 24)

  useEffect(() => {
    if (!page) {
      setPage(1)
    }
  }, [])

  const getPrice = price =>
    Intl.NumberFormat(undefined, {
      currency: checkout.currencyCode ? checkout.currencyCode : 'EUR',
      minimumFractionDigits: 2,
      style: 'currency',
    }).format(parseFloat(price ? price : 0))

  return (
    <>
      <Grid>
        {pageChunk[page - 1] ? (
          pageChunk[page - 1].map(
            ({ id, handle, title, images, variants: [firstVariant] }) => (
              <StyledLink to={`/product/${handle}/`} key={id}>
                <Product>
                  {images.length > 0 && (
                    <Carousel
                      autoPlay
                      infiniteLoop
                      swipeable
                      showThumbs={false}
                      showIndicators={false}
                      showStatus={false}
                      showArrows={false}
                    >
                      {images.map(image => (
                        <Img
                          fluid={image.localFile.childImageSharp.fluid}
                          key={image.id}
                          alt={title}
                        />
                      ))}
                    </Carousel>
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
      <Pagination>
        {pageChunk.map((_, i) => (
          <PaginationList key={i}>
            <PaginationButton
              isCurrent={page === i + 1}
              key={i}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </PaginationButton>
          </PaginationList>
        ))}
      </Pagination>
    </>
  )
}

ProductGridForCollection.propTypes = {
  collection: PropTypes.object.isRequired,
}

export default ProductGridForCollection
