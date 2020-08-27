import React from 'react'
import Collapsible from 'react-collapsible'
import { useStaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

import {
  Container,
  SideBarLink,
  SideBarListItem,
  SideBarList,
  BarButton,
  HR,
  CollapsibleTitle,
  SideBarListItemForPolicies,
} from './styles'

const SideBar = ({ setIsSideBarOpen }) => {
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

  const SidebarActionLink = props => (
    <SideBarLink {...props} onClick={() => setIsSideBarOpen(false)}>
      {props.children}
    </SideBarLink>
  )

  const options = allShopifyCollection.nodes.map(n => ({
    value: `/collections/${n.fields.slug}`,
    label: n.title,
  }))

  return (
    <Container>
      <BarButton onClick={() => setIsSideBarOpen(false)}>
        <FontAwesomeIcon icon={faTimes} />
      </BarButton>
      <SideBarList>
        <SideBarListItem>
          <SidebarActionLink to="/collections/frontpage">
            NEW ARRIVALS
          </SidebarActionLink>
        </SideBarListItem>
        <SideBarListItem>
          <Collapsible
            transitionTime={100}
            transitionCloseTime={100}
            trigger={
              <CollapsibleTitle>
                ARTISTS <FontAwesomeIcon icon={faAngleDown} />
              </CollapsibleTitle>
            }
          >
            <SideBarList>
              {options.map((option, i) => (
                <SideBarListItem key={i}>
                  <SidebarActionLink to={option.value}>
                    {option.label}
                  </SidebarActionLink>
                </SideBarListItem>
              ))}
            </SideBarList>
          </Collapsible>
        </SideBarListItem>
        <SideBarListItem>
          <SidebarActionLink to="/">NEWS</SidebarActionLink>
        </SideBarListItem>
        <SideBarListItem>
          <SidebarActionLink to="/">TOUR</SidebarActionLink>
        </SideBarListItem>
        <SideBarListItem>
          <SidebarActionLink to="/">VIDEOS</SidebarActionLink>
        </SideBarListItem>
        <SideBarListItem>
          <SidebarActionLink to="/">ABOUT</SidebarActionLink>
        </SideBarListItem>
        <HR style={{ marginTop: '30px' }} />
        <SideBarListItem>
          <SidebarActionLink to="/cart">SHOPPING CART</SidebarActionLink>
        </SideBarListItem>
        <HR />
        <SideBarListItem>
          <SidebarActionLink to="/">MY ACCOUNT</SidebarActionLink>
        </SideBarListItem>
        <HR style={{ marginBottom: '30px' }} />
        <SideBarListItemForPolicies>
          <SidebarActionLink to="/">CUSTOMER CARE</SidebarActionLink>
        </SideBarListItemForPolicies>
        <SideBarListItemForPolicies>
          <SidebarActionLink to="/">CONNECT</SidebarActionLink>
        </SideBarListItemForPolicies>
        <SideBarListItemForPolicies>
          <SidebarActionLink to="/">CONTACT</SidebarActionLink>
        </SideBarListItemForPolicies>
        <SideBarListItemForPolicies>
          <SidebarActionLink to="/">FAQ</SidebarActionLink>
        </SideBarListItemForPolicies>
      </SideBarList>
    </Container>
  )
}

SideBar.propTypes = {
  setIsSideBarOpen: PropTypes.func.isRequired,
}

export default SideBar
