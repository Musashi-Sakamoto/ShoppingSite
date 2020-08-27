import React, { useContext, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import _ from 'lodash'
import { useQueryParam, NumberParam } from 'use-query-params'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import ProductCell from '../ProductCell'
import StoreContext from '~/context/StoreContext'
import { Grid, EmptyText } from './styles'
import {
  Pagination,
  PaginationList,
  PaginationButton,
} from '../ProductGridForCollection/styles'

const ProductGrid = () => {
  const [page, setPage] = useQueryParam('page', NumberParam)
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const {
    allShopifyProduct: { edges },
  } = useStaticQuery(
    graphql`
      query {
        allShopifyProduct(sort: { fields: [createdAt], order: DESC }) {
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
                availableForSale
              }
            }
          }
        }
      }
    `
  )
  const products = edges.map(e => e.node)

  const pageChunk = _.chunk([...products], 24)

  console.log('pageChunk: ', pageChunk)

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
      {pageChunk[page - 1] ? (
        <Grid>
          {pageChunk[page - 1].map(
            ({ id, handle, title, images, variants }) => {
              return (
                <ProductCell
                  availableForSale={
                    variants.filter(v => v.availableForSale === true).length >=
                    1
                  }
                  key={id}
                  title={title}
                  handle={handle}
                  images={images}
                  price={getPrice(variants[0].price)}
                />
              )
            }
          )}
        </Grid>
      ) : (
        <EmptyText>Coming Soon</EmptyText>
      )}
      <Pagination>
        {pageChunk.length > 1 &&
          pageChunk.map((_, i) => (
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

export default ProductGrid
