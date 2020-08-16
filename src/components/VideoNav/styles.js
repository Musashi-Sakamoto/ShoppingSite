import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { breakpoints } from '../../utils/styles'

export const Container = styled.div`
  position: relative;
  height: 700px;
`
export const VideoDiv = styled.div`
  position: absolute;
  top: -60px;
  left: 0;
  z-index: -2000;
  width: 100%;
  height: 100%;
`
