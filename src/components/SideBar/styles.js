import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { breakpoints } from '../../utils/styles'

export const Container = styled.div`
  background: white;
  z-index: 10000;
  padding: 60px;
  overflow: scroll;
  height: 100%;
`

export const SideBarList = styled.ul`
  margin: 0;
`

export const SideBarListItem = styled.li`
  list-style: none;
  padding: 12px;
`

export const SideBarListItemForPolicies = styled.li`
  list-style: none;
  padding: 6px;
`

export const SideBarLink = styled(Link)`
  text-decoration: none;
  color: #303030;
  font-size: 0.8rem;
`

export const BarButton = styled.button`
  position: absolute;
  top: 18px;
  right: 10px;
  font-size: 1.5rem;
  border: none;
  outline: none;
`

export const HR = styled.hr`
  color: black;
  height: 2px;
`
