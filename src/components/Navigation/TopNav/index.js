import React, { useRef } from 'react'
import Select from 'react-select'
import { useStaticQuery, graphql, navigate } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import { TopContainer, MenuLink, TopMenuList, TopMenuListItem } from './styles'

const TopNav = ({ siteTitle }) => {
  const selectRef = useRef(null)
  const onMouseOver = () => {
    selectRef.current.focus()
  }

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
    <TopContainer>
      <TopMenuList>
        <TopMenuListItem onMouseOver={onMouseOver}>
          <Select
            value={null}
            onChange={handleChange}
            ref={selectRef}
            menuPosition="fixed"
            openMenuOnFocus={true}
            isSearchable={false}
            placeholder={
              <p>
                CATEGORIES <FontAwesomeIcon icon={faAngleDown} />
              </p>
            }
            styles={{
              placeholder: () => ({
                color: '#303030',
                fontSize: '13px',
                '&:hover': {
                  color: '#d4b062',
                },
              }),
              menuPortal: provided => ({
                top: '0',
              }),
              menu: provided => ({
                ...provided,
                left: '20%',
                boxShadow:
                  '0 0 0 0px hsla(0,0%,0%,0.1), 0 1px 1px hsla(0,0%,0%,0.1)',
              }),
              option: provided => ({
                ...provided,
                color: '#303030',
                fontSize: '13px',
                backgroundColor: 'white',
                '&:hover': {
                  color: '#d4b062',
                },
              }),
              indicatorSeparator: () => ({
                display: 'none',
              }),
              indicatorsContainer: () => ({
                display: 'none',
              }),
              control: provided => ({
                ...provided,
                border: 'none',
                boxShadow: 'none',
              }),
            }}
            options={options}
          />
        </TopMenuListItem>
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
