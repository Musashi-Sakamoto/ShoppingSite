import styled from '@emotion/styled/macro'
import { Img } from '~/utils/styles'

import { breakpoints } from '../../utils/styles'

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 700px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    'top1 top1 top1 top2 top2 top2'
    'bottom1 bottom1 bottom2 bottom2 bottom3 bottom3';
  @media (max-width: ${breakpoints.m}px) {
    height: auto;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-template-areas:
      'top1'
      'top2'
      'bottom1'
      'bottom2'
      'bottom3';
  }
`

export const Image = styled(Img)`
  height: 350px;
  opacity: 0;
  transition: opacity 1s;
  width: 100%;
  @media (max-width: ${breakpoints.m}px) {
    min-height: auto;
    opacity: 1;
    height: 160px;
  }
`

export const IframeWrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding-bottom: 76%;
`

export const Iframe = styled.iframe`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
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
  height: auto;
  width: 100%;
  border: 1px solid #bbb;
  &:hover {
    background-color: #bbb;
  }
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
  top: 0;
  left: 0;
  z-index: -9999;
  width: 100%;
  height: 100%;
`
