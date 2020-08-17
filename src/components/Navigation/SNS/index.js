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
        <MenuLink to="/">
          <FontAwesomeIcon icon={faTwitter} />
        </MenuLink>
      </SnsLi>
      <SnsLi>
        <MenuLink to="/">
          <FontAwesomeIcon icon={faInstagram} />
        </MenuLink>{' '}
      </SnsLi>
      <SnsLi>
        <MenuLink to="/">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </MenuLink>{' '}
      </SnsLi>
      <SnsLi>
        <MenuLink to="/">
          <FontAwesomeIcon icon={faYoutube} />
        </MenuLink>{' '}
      </SnsLi>
    </SnsUl>
  )
}

export default SNS
