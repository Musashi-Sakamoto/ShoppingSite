import React from 'react'

import { TopContainer, MenuLink, TopMenuList, TopMenuListItem } from './styles'

const TopNav = () => {
  return (
    <TopContainer>
      <TopMenuList>
        <TopMenuListItem>
          <MenuLink to="/available-now">Available Now</MenuLink>
        </TopMenuListItem>
        <TopMenuListItem>
          <MenuLink to="/upcoming-release">Upcoming Release</MenuLink>
        </TopMenuListItem>
        <TopMenuListItem>
          <MenuLink to="/collaborate-with-us">Collaborate With Us</MenuLink>
        </TopMenuListItem>
      </TopMenuList>
    </TopContainer>
  )
}

export default TopNav
