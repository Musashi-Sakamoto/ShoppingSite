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
        allShopifyCollection {
          nodes {
            title
            fields {
              slug
            }
          }
        }
      }
    `
  )
  console.log(allShopifyCollection)
  return (
    <BottomContainer>
      <BottomMenuList>
        {allShopifyCollection.nodes.map((node, i) => (
          <BottomMenuListItem key={i}>
            <MenuLink to={`/collections/${node.fields.slug}`}>
              {node.title}
            </MenuLink>
          </BottomMenuListItem>
        ))}
      </BottomMenuList>
    </BottomContainer>
  )
}

export default BottomNav
