import React from 'react'
import { useStaticQuery, graphql, navigate } from 'gatsby'

import {
  MenuLink,
  BottomContainer,
  BottomMenuList,
  BottomMenuListItem,
} from './styles'

const BottomNav = () => {
  const { allShopifyCollection } = useStaticQuery(
    graphql`
      query {
        allShopifyCollection(
          filter: { handle: { regex: "/^artists-[a-z0-9]+/" } }
        ) {
          nodes {
            title
            handle
          }
        }
      }
    `
  )
  console.log(allShopifyCollection)
  return (
    <BottomContainer>
      <BottomMenuList>
        {allShopifyCollection.nodes.map(node => (
          <BottomMenuListItem>
            <MenuLink to={node.handle}>{node.title}</MenuLink>
          </BottomMenuListItem>
        ))}
      </BottomMenuList>
    </BottomContainer>
  )
}

export default BottomNav
