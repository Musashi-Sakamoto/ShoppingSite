import styled from '@emotion/styled'

import { breakpoints } from '../../utils/styles'

export const Grid = styled.div`
  padding: 30px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: flex-end;
  grid-gap: 1.5rem;
  @media (max-width: ${breakpoints.m}px) {
    padding: 20px 0;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: ${breakpoints.s}px) {
    padding: 20px 0;
    grid-template-columns: repeat(1, 1fr);
  }
`

export const PageTitle = styled.h3`
  text-align: center;
  grid-column: 1 / span 3;
  @media (max-width: ${breakpoints.m}px) {
    grid-column: 1 / span 1;
  }
`

export const Title = styled.p`
  margin-top: 12px;
  font-weight: 600;
  font-size: 0.8rem;
  text-align: center;
`
