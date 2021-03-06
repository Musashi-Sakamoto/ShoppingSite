import React from 'react'
import {
  FooterContainer,
  FooterText,
  FooterLink,
  FooterLinkCompany,
  FooterHr,
  FooterLi,
  FooterUl,
} from './styles'
import SNS from '../Navigation/SNS'
const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterUl>
          <FooterLi>
            <FooterLink to="/">Privacy Policy</FooterLink>
          </FooterLi>
          <FooterLi>
            <FooterLink to="/">
              Terms &amp; Conditions
            </FooterLink>
          </FooterLi>
          <FooterLi>
            <FooterLink to="/">Refund Policy</FooterLink>
          </FooterLi>
        </FooterUl>
        <FooterHr />
        <FooterText>
          COPYRIGHT &copy;{' '}
          <FooterLinkCompany href="https://alt.fashion/">
            2020 Alt.Fashion.
          </FooterLinkCompany>
        </FooterText>
      </FooterContainer>
      <SNS />
    </>
  )
}

export default Footer
