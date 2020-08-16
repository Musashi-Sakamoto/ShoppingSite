import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { breakpoints } from '../../utils/styles'

export const Container = styled.div`
  position: relative;
  height: 700px;
`

export const FlexContainer = styled.div`
  display: flex;
`

export const Item = styled.div`
  opacity: 0;
  height: 350px;
  width: 100%;
  background-color: white;
  z-index: 0;
  &:hover {
    opacity: 1;
  }
`

export const VideoDiv = styled.div`
  position: absolute;
  top: -60px;
  left: 0;
  z-index: -9999;
  width: 100%;
  height: 100%;
`
