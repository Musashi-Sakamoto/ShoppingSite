import React, { useContext } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'
import StoreContext from '~/context/StoreContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons'
import { useMediaQuery } from 'react-responsive'
import {
  CartCounter,
  MenuLink,
  Wrapper,
  TitleDiv,
  LogoImg,
  CartDiv,
  BarButton,
  OuterWrapper,
} from './styles'
import TopNav from './TopNav'
import BottomNav from './BottomNav'
import SNS from './SNS'
import { breakpoints } from '~/utils/styles'

const useQuantity = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const items = checkout ? checkout.lineItems : []
  const total = reduce(items, (acc, item) => acc + item.quantity, 0)
  return [total !== 0, total]
}

const Navigation = ({ setIsSideBarOpen }) => {
  const [hasItems, quantity] = useQuantity()
  const isSmall = useMediaQuery({ query: `(max-width: ${breakpoints.m}px)` })
  return (
    <OuterWrapper>
      <Wrapper>
        {!isSmall && <SNS />}

        <CartDiv>
          <MenuLink to="/cart">
            {hasItems && <CartCounter>{quantity}</CartCounter>}
            <FontAwesomeIcon
              icon={faShoppingCart}
              size={isSmall ? 'sm' : 'lg'}
            />
          </MenuLink>
        </CartDiv>

        <TitleDiv>
          <MenuLink to="/">
            <LogoImg src="/alt_logo.png" alt="logo" />
          </MenuLink>
          {isSmall && (
            <BarButton onClick={() => setIsSideBarOpen(true)}>
              <FontAwesomeIcon icon={faBars} />
            </BarButton>
          )}
        </TitleDiv>

        {!isSmall && (
          <>
            <TopNav />
            <BottomNav />
          </>
        )}
      </Wrapper>
    </OuterWrapper>
  )
}

Navigation.propTypes = {
  setIsSideBarOpen: PropTypes.func.isRequired,
}

export default Navigation
