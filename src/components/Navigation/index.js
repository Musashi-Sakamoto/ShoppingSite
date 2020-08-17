import React, { useContext } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'
import StoreContext from '~/context/StoreContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faInstagram,
  faFacebookSquare,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import {
  CartCounter,
  MenuLink,
  Wrapper,
  TitleDiv,
  LogoImg,
  CartUl,
  SnsLi,
  SnsUl,
} from './styles'
import TopNav from './TopNav'
import BottomNav from './BottomNav'

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
  return (
    <Wrapper>
      <SnsUl>
        <SnsLi>
          <MenuLink to="/">
            <FontAwesomeIcon icon={faTwitter} />
          </MenuLink>
        </SnsLi>
        <SnsLi>
          <MenuLink to="/">
            <FontAwesomeIcon icon={faInstagram} />
          </MenuLink>{' '}
        </SnsLi>
        <SnsLi>
          <MenuLink to="/">
            <FontAwesomeIcon icon={faFacebookSquare} />
          </MenuLink>{' '}
        </SnsLi>
        <SnsLi>
          <MenuLink to="/">
            <FontAwesomeIcon icon={faYoutube} />
          </MenuLink>{' '}
        </SnsLi>
      </SnsUl>
      <CartUl>
        <MenuLink to="/cart">
          {hasItems && <CartCounter>{quantity}</CartCounter>}
          <FontAwesomeIcon icon={faShoppingCart} />
        </MenuLink>
      </CartUl>
      <TitleDiv>
        <MenuLink to="/">
          <LogoImg src="/tde_no_bars.webp" alt="logo" />
        </MenuLink>
      </TitleDiv>
      <TopNav />
      <BottomNav />
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
