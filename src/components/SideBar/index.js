import React, { useRef } from 'react'
import Collapsible from 'react-collapsible'
import { useStaticQuery, graphql, navigate } from 'gatsby'
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

  const handleChange = async option => {
    console.log(option)
    await navigate(option.value)
  }

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
          <SideBarLink to="/collections/new-arrivals">NEW ARRIVALS</SideBarLink>
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
                  <SideBarLink to={option.value}>{option.label}</SideBarLink>
                </SideBarListItem>
              ))}
            </SideBarList>
          </Collapsible>
        </SideBarListItem>
        <SideBarListItem>
          <SideBarLink to="/">NEWS</SideBarLink>
        </SideBarListItem>
        <SideBarListItem>
          <SideBarLink to="/">TOUR</SideBarLink>
        </SideBarListItem>
        <SideBarListItem>
          <SideBarLink to="/">VIDEOS</SideBarLink>
        </SideBarListItem>
        <SideBarListItem>
          <SideBarLink to="/">ABOUT</SideBarLink>
        </SideBarListItem>
        <HR style={{ marginTop: '30px' }} />
        <SideBarListItem>
          <SideBarLink to="/cart">SHOPPING CART</SideBarLink>
        </SideBarListItem>
        <HR />
        <SideBarListItem>
          <SideBarLink to="/">MY ACCOUNT</SideBarLink>
        </SideBarListItem>
        <HR style={{ marginBottom: '30px' }} />
        <SideBarListItemForPolicies>
          <SideBarLink to="/">CUSTOMER CARE</SideBarLink>
        </SideBarListItemForPolicies>
        <SideBarListItemForPolicies>
          <SideBarLink to="/">CONNECT</SideBarLink>
        </SideBarListItemForPolicies>
        <SideBarListItemForPolicies>
          <SideBarLink to="/">CONTACT</SideBarLink>
        </SideBarListItemForPolicies>
        <SideBarListItemForPolicies>
          <SideBarLink to="/">FAQ</SideBarLink>
        </SideBarListItemForPolicies>
      </SideBarList>
    </Container>
  )
}

SideBar.propTypes = {
  setIsSideBarOpen: PropTypes.func.isRequired,
}

export default SideBar
