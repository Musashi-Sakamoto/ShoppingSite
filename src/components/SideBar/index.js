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
        allShopifyCollection(filter: { handle: { ne: "frontpage" } }) {
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
          <SidebarActionLink to="/available-now">
            Available Now
          </SidebarActionLink>
        </SideBarListItem>
        <SideBarListItem>
          <SidebarActionLink to="/upcoming-release">
            Upcoming Release
          </SidebarActionLink>
        </SideBarListItem>
        <SideBarListItem>
          <SidebarActionLink to="/collaborate-with-us">
            Collaborate With Us
          </SidebarActionLink>
        </SideBarListItem>
        <HR style={{ marginTop: '20px' }} />
        <SideBarListItem>
          <SidebarActionLink to="/cart">SHOPPING CART</SidebarActionLink>
        </SideBarListItem>
        <HR style={{ marginBottom: '20px' }} />
        <SideBarListItemForPolicies>
          <SidebarActionLink to="/privacy">Privacy Policy</SidebarActionLink>
        </SideBarListItemForPolicies>
        <SideBarListItemForPolicies>
          <SidebarActionLink to="/terms-conditions">
            Terms & Conditions
          </SidebarActionLink>
        </SideBarListItemForPolicies>
        <SideBarListItemForPolicies>
          <SidebarActionLink to="/refund">Refund Policy</SidebarActionLink>
        </SideBarListItemForPolicies>
      </SideBarList>
    </Container>
  )
}

SideBar.propTypes = {
  setIsSideBarOpen: PropTypes.func.isRequired,
}

export default SideBar
