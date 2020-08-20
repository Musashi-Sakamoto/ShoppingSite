import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import StoreContext from '~/context/StoreContext'
import { Grid, Product, Title, PriceTag } from './styles'
import { Img, Header, BottomLinkDiv, StyledLink } from '~/utils/styles'

const ProductGridForCollection = ({ collection }) => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const { products } = collection

  const getPrice = price =>
    Intl.NumberFormat(undefined, {
      currency: checkout.currencyCode ? checkout.currencyCode : 'EUR',
      minimumFractionDigits: 2,
      style: 'currency',
    }).format(parseFloat(price ? price : 0))

  return (
    <Grid style={{ flexGrow: 1 }}>
      {products ? (
        products.map(
          ({
            id,
            handle,
            title,
            images: [firstImage],
            variants: [firstVariant],
          }) => (
            <StyledLink to={`/product/${handle}/`} key={id}>
              <Product>
                {firstImage && firstImage.localFile && (
                  <Img
                    fluid={firstImage.localFile.childImageSharp.fluid}
                    alt={handle}
                  />
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

ProductGridForCollection.propTypes = {
  collection: PropTypes.object.isRequired,
}

export default ProductGridForCollection
