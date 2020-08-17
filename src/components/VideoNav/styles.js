import styled from '@emotion/styled/macro'
import { Link } from 'gatsby'
import { Img } from '~/utils/styles'

import { breakpoints } from '../../utils/styles'

export const Container = styled.div`
  position: relative;
  height: 760px;
`

export const Image = styled(Img)`
  height: 350px;
  opacity: 0;
  transition: opacity 1s;
`

export const FlexContainer = styled.div`
  display: flex;
`

export const Label = styled.span`
  position: absolute;
  padding: 5px;
  top: 16px;
  left: 16px;
  font-size: 12px;
  color: #bbb;
  transition: color 1s, background-color 1s;
`

export const Item = styled.div`
  position: relative;
  cursor: pointer;
  height: 350px;
  width: 100%;
  border: 1px solid #bbb;
  &:hover ${Label} {
    color: black;
    background-color: white;
  }
  &:hover ${Image} {
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
