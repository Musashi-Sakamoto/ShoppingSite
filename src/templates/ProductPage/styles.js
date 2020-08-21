import styled from '@emotion/styled'
import { breakpoints } from '~/utils/styles'

export const ProductTitle = styled.p`
  font-size: 0.8rem;
  word-wrap: break-word;
  font-weight: 600;
  margin: 0 0 0.5rem;
  line-height: 1;
`

export const ProductDescription = styled.p`
  font-weight: 600;
  font-size: 0.8rem;
  line-height: 1;
`

export const TwoColumnGrid = styled.div`
  padding-top: 120px;
  display: grid;
  grid-template-columns: 3fr 2rem 1fr;
  grid-template-rows: 1auto;
  grid-template-areas: 'left . right';

  @media (max-width: ${breakpoints.l}px) {
    display: block;
  }

  @media (max-width: ${breakpoints.m}px) {
    padding-top: 10px;
    text-align: center;
  }
`

export const GridLeft = styled.div`
  grid-area: left;
`

export const GridRight = styled.div`
  grid-area: right;
`
