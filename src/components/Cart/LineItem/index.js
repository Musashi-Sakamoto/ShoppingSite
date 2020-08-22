import React, { useContext, useState } from 'react'
import { Link } from 'gatsby'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StoreContext from '~/context/StoreContext'
import {
  Wrapper,
  Img,
  InfoDiv,
  QuantityInput,
  ProductTitle,
  Size,
  RemoveButton,
  Price,
} from './styles'

const LineItem = props => {
  const { item } = props
  const {
    removeLineItem,
    updateLineItem,
    store: { client, checkout },
  } = useContext(StoreContext)
  const [quantity, setQuantity] = useState(item.quantity)

  const variantImage = item.variant.image ? (
    <Img src={item.variant.image.src} alt={`${item.title} product shot`} />
  ) : null

  const selectedOptions = item.variant.selectedOptions
    ? item.variant.selectedOptions.map(option => option.value)
    : null

  const handleRemove = () => {
    removeLineItem(client, checkout.id, item.id)
  }

  const handleChange = e => {
    setQuantity(e.target.value)
    if (e.target.value >= 1) {
      updateLineItem(client, checkout.id, item.id, e.target.value)
    }
  }

  const getPrice = price =>
    Intl.NumberFormat(undefined, {
      currency: checkout.currencyCode ? checkout.currencyCode : 'EUR',
      minimumFractionDigits: 2,
      style: 'currency',
    }).format(parseFloat(price ? price : 0))

  return (
    <Wrapper>
      <Link to={`/product/${item.variant.product.handle}/`}>
        {variantImage}
      </Link>
      <InfoDiv>
        <ProductTitle>{item.title}</ProductTitle>
        <Size>{selectedOptions}</Size>
        <Price>{getPrice(item.variant.price)}</Price>
      </InfoDiv>
      <div>
        <QuantityInput type="number" onChange={handleChange} value={quantity} />
        <RemoveButton onClick={handleRemove}>
          <FontAwesomeIcon icon={faTimes} />
        </RemoveButton>
      </div>
    </Wrapper>
  )
}

export default LineItem
