import styled from '@emotion/styled'
import { StyledLink } from '~/utils/styles'

import { breakpoints } from '../../utils/styles'

export const Grid = styled.div`
  padding: 30px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: flex-end;
  grid-gap: 1.5rem;
  @media (max-width: ${breakpoints.m}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${breakpoints.s}px) {
    padding: 20px 0;
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Link = styled(StyledLink)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  & > div {
    height: 100%;
  }
`

export const PageTitle = styled.h3`
  text-align: center;
  grid-column: 1 / span 3;
  @media (max-width: ${breakpoints.m}px) {
    grid-column: 1 / span 2;
  }
  @media (max-width: ${breakpoints.s}px) {
    grid-column: 1 / span 1;
  }
`

export const Title = styled.p`
  margin-top: 12px;
  font-weight: 600;
  font-size: 0.8rem;
  text-align: center;
`
