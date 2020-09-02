import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faInstagram,
  faFacebookSquare,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { MenuLink, SnsLi, SnsUl } from './styles'

const SNS = ({ siteTitle }) => {
  return (
    <SnsUl>
      <SnsLi>
        <MenuLink href="https://twitter.com/shopaltfashion" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </MenuLink>
      </SnsLi>
      <SnsLi>
        <MenuLink
          href="https://www.instagram.com/shopaltfashion"
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </MenuLink>{' '}
      </SnsLi>
      <SnsLi>
        <MenuLink
          href="https://www.facebook.com/Alternative-Fashion-102172631618186"
          target="_blank"
        >
          <FontAwesomeIcon icon={faFacebookSquare} />
        </MenuLink>{' '}
      </SnsLi>
    </SnsUl>
  )
}

export default SNS
