import React, { useContext } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'
import StoreContext from '~/context/StoreContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons'
import { useMediaQuery } from 'react-responsive'
import Sidebar from 'react-sidebar'
import {
  CartCounter,
  MenuLink,
  Wrapper,
  TitleDiv,
  LogoImg,
  CartUl,
  BarButton,
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

const Navigation = ({ siteTitle }) => {
  const [hasItems, quantity] = useQuantity()
  const isSmall = useMediaQuery({ query: `(max-width: ${breakpoints.s}px)` })
  return (
    <Wrapper>
      {!isSmall && (
        <>
          <SNS />
          <CartUl>
            <MenuLink to="/cart">
              {hasItems && <CartCounter>{quantity}</CartCounter>}
              <FontAwesomeIcon icon={faShoppingCart} />
            </MenuLink>
          </CartUl>
        </>
      )}

      <TitleDiv>
        <MenuLink to="/">
          <LogoImg src="/tde_no_bars.webp" alt="logo" />
        </MenuLink>
        {isSmall && (
          <BarButton>
            <FontAwesomeIcon width={75} icon={faBars} />
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
  )
}

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
