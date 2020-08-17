import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { breakpoints } from '../../utils/styles'

export const Wrapper = styled.div`
  position: relative;
  background-color: white;
  @media (max-width: ${breakpoints.s}px) {
    position: fixed;
    width: 100%;
    z-index: 9999;
  }
`

export const BarButton = styled.button`
  position: absolute;
  top: 18px;
  right: 10px;
  font-size: 1.5rem;
  border: none;
`

export const CartUl = styled.ul`
  position: absolute;
  top: 10px;
  right: 20px;
`

export const TitleDiv = styled.div`
  text-align: center;
  padding-top: 15px;
`

export const LogoImg = styled.img`
  max-width: 79px;
`

export const MenuLink = styled(Link)`
  text-decoration: none;
  color: #303030;
  font-size: 13px;
  @media (max-width: ${breakpoints.s}px) {
    font-size: 1.4rem;
  }
  &:hover {
    color: #d4b062;
  }
`

export const CartCounter = styled.span`
  background-color: #303030;
  color: white;
  border-radius: 20px;
  padding: 0 4px;
  font-size: 0.4rem;
  float: right;
  margin: -5px;
  z-index: 20;
`
