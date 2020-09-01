import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { breakpoints } from '../../../utils/styles'

export const TopContainer = styled.div`
  text-align: center;
  padding: 20px 0;
`

export const TopMenuList = styled.ul`
  margin: 0;
`

export const TopMenuListItem = styled.li`
  list-style: none;
  display: inline-block;
  padding: 0 20px;
`

export const MenuLink = styled(Link)`
  text-decoration: none;
  color: #303030;
  font-size: 13px;
  @media (max-width: ${breakpoints.m}px) {
    font-size: 1.4rem;
  }
  &:hover {
    color: #d4b062;
  }
`
