import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { breakpoints } from '~/utils/styles'

export const FooterContainer = styled.footer`
  background-color: black;
  color: white;
  padding: 16px;
`

export const FooterUl = styled.ul`
  margin: 0 auto;
  max-width: 500px;
  text-align: center;
`

export const FooterLi = styled.li`
  list-style: none;
  display: inline-block;
  min-width: 100px;
  text-align: center;
  @media (max-width: ${breakpoints.m}px) {
    min-width: 70px;
  }
`
export const FooterLink = styled(Link)`
  font-size: 0.6rem;
  color: white;
  text-decoration: none;
  &:hover {
    color: black;
  }
`

export const FooterLinkCompany = styled.a`
  font-size: 0.5rem;
  color: white;
  text-decoration: none;
  &:hover {
    color: black;
  }
`

export const FooterText = styled.p`
  text-align: center;
  font-size: 0.5rem;
`

export const FooterHr = styled.hr`
  margin: 16px auto;
  background-color: #999999;
  max-width: 500px;
`
