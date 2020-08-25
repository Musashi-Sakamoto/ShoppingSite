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
            <FooterLink to="/policy">CUSTOMER CARE</FooterLink>
          </FooterLi>
          <FooterLi>
            <FooterLink to="/policy">CONNECT</FooterLink>
          </FooterLi>
          <FooterLi>
            <FooterLink to="/policy">CONTACT</FooterLink>
          </FooterLi>
          <FooterLi>
            <FooterLink to="/policy">FAQ</FooterLink>
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
