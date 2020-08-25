import React from 'react'
import Image from 'gatsby-image'
import styled from '@emotion/styled'
import { breakpoints, Img } from '~/utils/styles'

export const CollectionImage = styled(Img)``

export const Banner = styled.div`
  & > * {
    width: 100%;
  }
  & > iframe {
    z-index: -9999;
    pointer-events: none;
    position: relative;
    top: -60px;
  }
`
