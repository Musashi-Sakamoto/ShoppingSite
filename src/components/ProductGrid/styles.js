import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { breakpoints } from '../../utils/styles'

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 100px;
  @media (max-width: ${breakpoints.s}px) {
    margin: 0 16px;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2.5rem;

  @media (max-width: ${breakpoints.s}px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const Product = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
`

export const Title = styled.span`
  margin-top: 24px;
  font-weight: 600;
  font-size: 0.6rem;
  text-align: center;
`

export const PriceTag = styled.span`
  font-weight: 600;
  font-size: 0.7rem;
  text-align: center;
  margin-top: 15px;
`
