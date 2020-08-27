import React from 'react'
import PropTypes from 'prop-types'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import HoverCarousel from '../HoverCarousel'
import { Product, Title, PriceTag, SoldOut } from './styles'
import { Img, StyledLink } from '~/utils/styles'

const ProductCell = ({ images, handle, title, price, availableForSale }) => {
  return (
    <StyledLink to={`/product/${handle}/`}>
      <Product>
        {!availableForSale && <SoldOut>sold out</SoldOut>}
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
        <PriceTag>{price}</PriceTag>
      </Product>
    </StyledLink>
  )
}

ProductCell.propTypes = {
  images: PropTypes.array.isRequired,
  handle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  availableForSale: PropTypes.bool.isRequired,
}

export default ProductCell
