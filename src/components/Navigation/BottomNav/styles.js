import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { breakpoints } from '../../../utils/styles'

export const BottomContainer = styled.div`
  text-align: center;
  padding: 10px 0;
  background-color: #f2f2f2;
`

export const BottomMenuList = styled.ul`
  margin: 0;
`

export const BottomMenuListItem = styled.li`
  list-style: none;
  display: inline-block;
  padding: 0 10px;
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
