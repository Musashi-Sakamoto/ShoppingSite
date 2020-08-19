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
            <FooterLink href="https://google.co.jp">CUSTOMER CARE</FooterLink>
          </FooterLi>
          <FooterLi>
            <FooterLink href="https://google.co.jp">CONNECT</FooterLink>
          </FooterLi>
          <FooterLi>
            <FooterLink href="https://google.co.jp">CONTACT</FooterLink>
          </FooterLi>
          <FooterLi>
            <FooterLink href="https://google.co.jp">FAQ</FooterLink>
          </FooterLi>
        </FooterUl>
        <FooterHr />
        <FooterText>
          COPYRIGHT &copy;{' '}
          <FooterLinkCompany href="https://google.co.jp">
            2020 TOP DAWG ENT.
          </FooterLinkCompany>
        </FooterText>
      </FooterContainer>
      <SNS />
    </>
  )
}

export default Footer
