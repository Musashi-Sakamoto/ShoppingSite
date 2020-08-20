import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import Sidebar from 'react-sidebar'

import ContextProvider from '~/provider/ContextProvider'

import { GlobalStyle } from '~/utils/styles'
import Navigation from '~/components/Navigation'
import SideBar from '~/components/SideBar'
import Footer from '~/components/Footer'
import { breakpoints } from '~/utils/styles'

const Wrapper = styled.div`
  margin: 0 auto;
  padding-bottom: 1.45rem;
  @media (max-width: ${breakpoints.s}px) {
    padding-top: 75px;
  }
`

const Layout = ({ children }) => {
  const [isSideBarOpen, setIsSidebarOpen] = useState(false)
  return (
    <ContextProvider>
      <GlobalStyle />
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <Sidebar
            pullRight
            sidebar={<SideBar setIsSideBarOpen={setIsSidebarOpen} />}
            open={isSideBarOpen}
            onSetOpen={setIsSidebarOpen}
            styles={{
              sidebar: { width: '98%', height: '100%' },
            }}
          >
            <Navigation
              isSideBarOpen={isSideBarOpen}
              setIsSideBarOpen={setIsSidebarOpen}
            />
            <Wrapper>{children}</Wrapper>
            <Footer />
          </Sidebar>
        )}
      />
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
