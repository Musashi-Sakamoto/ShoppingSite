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
            <FooterLink to="/privacy">Privacy Policy</FooterLink>
          </FooterLi>
          <FooterLi>
            <FooterLink to="/terms-conditions">
              Terms &amp; Conditions
            </FooterLink>
          </FooterLi>
          <FooterLi>
            <FooterLink to="/refund">Refund Policy</FooterLink>
          </FooterLi>
        </FooterUl>
        <FooterHr />
        <FooterText>
          COPYRIGHT &copy;{' '}
          <FooterLinkCompany to="/policy">2020 Alt.Fashion.</FooterLinkCompany>
        </FooterText>
      </FooterContainer>
      <SNS />
    </>
  )
}

export default Footer
