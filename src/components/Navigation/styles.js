import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { breakpoints } from '../../utils/styles'

export const Wrapper = styled.div`
  position: relative;
  background-color: white;
  @media (max-width: ${breakpoints.m}px) {
    top: 0;
    position: fixed;
    width: 100%;
    z-index: 1;
  }
`

export const OuterWrapper = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
`

export const BarButton = styled.button`
  background-color: white;
  position: absolute;
  top: 18px;
  right: 10px;
  font-size: 1.5rem;
  border: none;
  outline: none;
  padding: 0;
`

export const CartDiv = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  @media (max-width: ${breakpoints.m}px) {
    right: none;
    left: 10px;
    top: 20px;
  }
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
  position: relative;
  &:hover {
    color: #d4b062;
  }
  @media (max-width: ${breakpoints.m}px) {
    font-size: 1.4rem;
    &:hover {
      color: #303030;
    }
  }
`

export const CartCounter = styled.span`
  background-color: #303030;
  color: white;
  border-radius: 50%;
  text-align: center;
  width: 12px;
  height: 12px;
  font-size: 0.4rem;
  margin: -10px;
  z-index: 20;
  position: absolute;
  right: -1px;
  top: -1px;
  @media (max-width: ${breakpoints.m}px) {
    font-size: 0.75rem;
    width: 16px;
    height: 16px;
    right: -2px;
    top: -2px;
  }
`
