import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

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
        allShopifyCollection(filter: { handle: { ne: "frontpage" } }) {
          nodes {
            title
            handle
          }
        }
      }
    `
  )
  return (
    <BottomContainer>
      <BottomMenuList>
        {allShopifyCollection.nodes.map((node, i) => (
          <BottomMenuListItem key={i}>
            <MenuLink to={`/collections/${node.handle}/?page=1`}>
              {node.title}
            </MenuLink>
          </BottomMenuListItem>
        ))}
      </BottomMenuList>
    </BottomContainer>
  )
}

export default BottomNav
