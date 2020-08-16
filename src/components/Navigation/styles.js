import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { breakpoints } from '../../utils/styles'

export const Wrapper = styled.div`
  position: relative;
  background-color: white;
`

export const CartUl = styled.ul`
  position: absolute;
  top: 10px;
  right: 20px;
`

export const SnsUl = styled.ul`
  margin: 0;
  position: absolute;
  top: 10px;
  left: 10px;
`

export const SnsLi = styled.li`
  list-style: none;
  display: inline-box;
  padding: 0 14px;
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
