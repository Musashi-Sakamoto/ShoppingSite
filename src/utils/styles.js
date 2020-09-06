import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'

export const breakpoints = {
  s: 576,
  m: 768,
  l: 992,
  xl: 1200,
}

export const GlobalStyle = props => (
  <Global
    {...props}
    styles={css`
      body {
        margin: 0;
      }
      html {
        box-sizing: border-box;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }
      *,
      *::before,
      *::after {
        boxi-sizing: inherit;
      }
    `}
  />
)

export const Header = styled.p`
  font-size: 0.75rem;
  margin-top: 80px;
  @media (max-width: ${breakpoints.m}px) {
    margin-top: 60px;
    font-size: 0.8rem;
    text-align: center;
  }
`

export const BottomLinkDiv = styled.div`
  text-align: right;
  padding-top: 80px;
  font-size: 0.7rem;
  @media (max-width: ${breakpoints.m}px) {
    text-align: center;
    padding: 40px 0 80px;
    font-size: 0.8rem;
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`

export const Img = styled(Image)`
  max-width: 100 %;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
`

export const MainContent = styled.main`
  margin-top: 80px;
  margin-bottom: 40px;

  @media (max-width: ${breakpoints.l}px) {
    margin-top: 40px;
    margin-bottom: 20px;
  }
`

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding-bottom: 150px;
  @media (max-width: ${breakpoints.l}px) {
    padding: 0 100px;
  }
  @media (max-width: ${breakpoints.m}px) {
    padding: 0 16px;
  }
`
