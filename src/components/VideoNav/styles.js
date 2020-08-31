import styled from '@emotion/styled/macro'
import { Img } from '~/utils/styles'

import { breakpoints } from '../../utils/styles'

export const Container = styled.div`
  position: relative;
  height: 760px;
  @media (max-width: ${breakpoints.m}px) {
    height: auto;
  }
`

export const Image = styled(Img)`
  height: 350px;
  opacity: 0;
  transition: opacity 1s;
  @media (max-width: ${breakpoints.m}px) {
    opacity: 1;
    height: 160px;
    width: 100%;
  }
`

export const FlexContainer = styled.div`
  display: flex;
  @media (max-width: ${breakpoints.m}px) {
    flex-direction: column;
  }
`

export const Label = styled.span`
  position: absolute;
  padding: 8px;
  top: 16px;
  left: 16px;
  font-size: 12px;
  color: #bbb;
  transition: color 2s, background-color 2s;
  @media (max-width: ${breakpoints.m}px) {
    color: black;
    background-color: white;
    top: 50%;
    left: 50%;
    font-size: 14px;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
  }
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
  @media (min-width: ${breakpoints.m}px) {
    &:hover ${Image} {
      opacity: 1;
    }
  }
  @media (max-width: ${breakpoints.m}px) {
    height: auto;
  }
`

export const VideoDiv = styled.div`
  background-color: black;
  position: absolute;
  top: -60px;
  left: 0;
  z-index: -9999;
  width: 100%;
  height: 100%;
`
