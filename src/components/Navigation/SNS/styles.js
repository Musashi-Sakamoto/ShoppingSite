import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { breakpoints } from '~/utils/styles'

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
