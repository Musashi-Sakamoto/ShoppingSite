import styled from '@emotion/styled'
import { Img, breakpoints } from '~/utils/styles'

export const CollectionImage = styled(Img)``

export const Banner = styled.div`
  position: relative;
  padding-bottom: 25%; /* 4:1 */
  & > * {
    z-index: -9999;
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
  }
`
