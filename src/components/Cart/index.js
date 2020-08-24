import { navigate } from 'gatsby'
import React, { useContext, useState } from 'react'

import StoreContext from '~/context/StoreContext'
import LineItem from './LineItem'

import {
  Wrapper,
  TitleInfo,
  SubTotal,
  Taxes,
  Total,
  CheckoutButton,
  CheckSection,
  CheckSpan,
  EmptyText,
  EmptyButton,
  ListWrapper,
} from './styles'

const Cart = () => {
  const [isChecked, setIsChecked] = useState(false)
  const {
    store: { checkout },
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const lineItems = checkout.lineItems.map(item => (
    <LineItem key={item.id.toString()} item={item} />
  ))

  const getPrice = price =>
    Intl.NumberFormat(undefined, {
      currency: checkout.currencyCode ? checkout.currencyCode : 'EUR',
      minimumFractionDigits: 2,
      style: 'currency',
    }).format(parseFloat(price ? price : 0))

  return (
    <Wrapper>
      <TitleInfo>
        {lineItems.length} item{lineItems.length > 1 && 's'} in your cart
      </TitleInfo>
      <ListWrapper>{lineItems}</ListWrapper>
      {lineItems.length > 0 ? (
        <>
          <SubTotal>Subtotal {getPrice(checkout.subtotalPrice)}</SubTotal>
          <Taxes>Taxes {getPrice(checkout.totalTax)}</Taxes>
          <Total>Total {getPrice(checkout.totalPrice)}</Total>
          <CheckSection>
            <input
              type="checkbox"
              value={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            &nbsp;{' '}
            <CheckSpan>I agree with the Shipping Rates and Returns.</CheckSpan>
          </CheckSection>
          <CheckoutButton
            onClick={handleCheckout}
            disabled={!isChecked || checkout.lineItems.length === 0}
          >
            CHECK OUT
          </CheckoutButton>
        </>
      ) : (
        <>
          <EmptyText>Your cart is currently empty.</EmptyText>
          <EmptyButton onClick={() => navigate('/')}>
            CONTINUE BROWSING
          </EmptyButton>
        </>
      )}
    </Wrapper>
  )
}

export default Cart
