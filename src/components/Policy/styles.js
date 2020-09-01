import styled from '@emotion/styled'
import { breakpoints } from '~/utils/styles'

export const PolicyDiv = styled.div`
  padding-top: 60px;
  max-width: 680px;
  margin: auto;
  @media (max-width: ${breakpoints.m}px) {
    padding: 20px 16px;
  }
`

export const Section = styled.div`
  margin-bottom: 48px;
`

export const Title = styled.p`
  font-size: 0.8rem;
`

export const Body = styled.div`
  & > h2,
  h3 {
    margin: 16px 0;
  }
  & > p {
    font-size: 0.75rem;
  }
`
