import React, { useRef } from 'react'

import { TopContainer, MenuLink, TopMenuList, TopMenuListItem } from './styles'

const TopNav = ({ siteTitle }) => {
  return (
    <TopContainer>
      <TopMenuList>
        <TopMenuListItem>
          <MenuLink to="/">NEWS</MenuLink>
        </TopMenuListItem>
        <TopMenuListItem>
          <MenuLink to="/">TOUR</MenuLink>
        </TopMenuListItem>
        <TopMenuListItem>
          <MenuLink to="/">VIDEOS</MenuLink>
        </TopMenuListItem>
      </TopMenuList>
    </TopContainer>
  )
}

export default TopNav
